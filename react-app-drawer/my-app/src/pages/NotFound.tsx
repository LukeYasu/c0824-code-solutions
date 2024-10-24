import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex-1 py-12 text-center text-black">
        <h3>Uh oh, we could not find the page you were looking for!</h3>
        <Link to="/" className="text-blue-300">
          Return to the catalog
        </Link>
      </div>
    </div>
  );
}
