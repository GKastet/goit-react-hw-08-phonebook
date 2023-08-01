import { Outlet } from 'react-router-dom';
import { Nav } from './Navigation';

export const NavLayout = () => {   

  return (
    <div>
      <Nav/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
