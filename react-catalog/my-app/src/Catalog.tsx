import { useEffect, useState } from 'react';
import { Product, readCatalog, toDollars } from './lib';
import { Link } from 'react-router-dom';

export function Catalog() {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
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
  function catalogCards(item: Product) {
    return (
      <Link
        to={'details/' + item.productId}
        className="border-2 border-slate w-1/4 m-1">
        <img key={item.name} src={item.imageUrl} />
        <h3>{item.name}</h3>
        <h4>{toDollars(item.price)}</h4>
        <p>{item.shortDescription}</p>
      </Link>
    );
  }
  return (
    <>
      <h1 className="text-6xl">Catalog</h1>
      <div className="flex flex-wrap justify-center">
        {items.map((item) => catalogCards(item))}
      </div>
    </>
  );
}
