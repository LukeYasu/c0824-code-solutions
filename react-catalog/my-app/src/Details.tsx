import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product, readCatalog } from './lib';

export function Details() {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const { itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadItems(): Promise<void> {
      try {
        const values = await readCatalog();
        setItems(values);
        console.log(values);
      } catch (error) {
        setError(error);
        console.error('Error: ', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);
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
    alert('you have added to cart');
    navigate('/');
  }

  for (let i = 0; i < items.length; i++) {
    if (`${items[i].productId}` === itemId) {
      return (
        <div className="flex flex-col items-center">
          <img className="h-96 w-fit" src={items[i].imageUrl} />
          <h1>{items[i].name}</h1>
          <h3>{items[i].price}</h3>
          <p>{items[i].shortDescription}</p>
          <br />
          <p>{items[i].longDescription}</p>
          <button
            onClick={handleCart}
            className="border-black border-2 bg-slate-300">
            Add to Cart
          </button>
        </div>
      );
    }
  }

  return <div className="m-20">{itemId}</div>;
}
