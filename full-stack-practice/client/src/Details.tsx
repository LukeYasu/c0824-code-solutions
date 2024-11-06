import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { type Product, toDollars } from './lib';

export function Details() {
  const [item, setItem] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const { itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadItem(itemId: number): Promise<void> {
      try {
        const response = await fetch(`/api/products/${itemId}`);
        if (!response.ok) throw new Error(`response status ${response.status}`);
        const product = await response.json();
        setItem(product);
      } catch (error) {
        setError(error);
        console.error('Error: ', error);
      } finally {
        setIsLoading(false);
      }
    }
    if (itemId) {
      setIsLoading(true);
      loadItem(+itemId);
    }
  }, [itemId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  function handleCart() {
    alert(`you have added ${item?.name} to cart`);
    navigate('/');
  }

  if (item) {
    return (
      <div className="flex flex-col items-center">
        <img className="h-96 w-fit" src={item.imageUrl} />
        <h1>{item.name}</h1>
        <h3>{toDollars(item.price)}</h3>
        <p>{item.shortDescription}</p>
        <br />
        <p>{item.longDescription}</p>
        <button
          onClick={handleCart}
          className="border-black border-2 rounded bg-slate-300 p-1 ">
          Add to Cart
        </button>
      </div>
    );
  }
}
