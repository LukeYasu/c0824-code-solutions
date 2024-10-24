import { useEffect, useState } from 'react';
import { type Product, readCatalog, toDollars } from './lib';
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

  return (
    <>
      <h1 className="text-7xl border-b-2 pb-5 m-5">Catalog</h1>
      <div className="flex flex-wrap justify-center">
        {items.map((item) => (
          <CatalogCards item={item} />
        ))}
      </div>
    </>
  );
}
function CatalogCards({ item }: { item: Product }) {
  return (
    <Link
      to={'details/' + item.productId}
      className="border-2 border-slate rounded-lg w-1/4 m-1 border-solid p-5">
      <div className="self-center">
        <img
          className="rounded-lg"
          key={item.productId}
          alt={item.name}
          src={item.imageUrl}
        />
        <br />
        <h3 className="text-xl font-medium">{item.name}</h3>
        <br />
        <h4>{toDollars(item.price)}</h4>
        <br />
        <p>{item.shortDescription}</p>
      </div>
    </Link>
  );
}
