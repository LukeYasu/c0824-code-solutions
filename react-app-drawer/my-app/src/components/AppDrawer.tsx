import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  let navWidth = 'navbar-open';
  isOpen ? (navWidth = 'navbar-open') : (navWidth = 'navbar-close');

  function handleDrawer() {
    setIsOpen(!isOpen);
  }

  function drawerContents() {
    return menuItems.map((menu) => (
      <li key={menu.name} className="inline-block py-2 px-4">
        <Link to={menu.path} className="text-white flex items-center">
          <img className="w-10 invert" src={menu.iconUrl} />
          {isOpen && menu.name}
        </Link>
      </li>
    ));
  }

  const burger = (
    <img
      onClick={handleDrawer}
      className="w-10 invert self-start m-3 burger"
      src="https://www.svgrepo.com/show/509382/menu.svg"
    />
  );

  return (
    <div className="flex">
      <div className="flex">
        <nav
          className={`inline-block py-2 px-4 bg-gray-900 navbar ${navWidth}`}>
          <ul className="flex flex-col">
            {burger}
            <h1>{isOpen && 'Lucas Shopping'}</h1>
            {drawerContents()}
          </ul>
        </nav>
      </div>
      <div className="grow ">
        <Outlet />
      </div>
    </div>
  );
}
