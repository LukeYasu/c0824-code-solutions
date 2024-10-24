import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="flex bg-slate-300">
        <Link to="/about" className="mx-10 my-5">
          About
        </Link>
        <Link to="/" className="mx-10 my-5">
          Catalog
        </Link>
      </div>
      <Outlet />
    </>
  );
}
