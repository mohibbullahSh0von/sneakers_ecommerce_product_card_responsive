import { Outlet } from 'react-router-dom';
import { Header, Footer } from './index';

function Layout() {
  return (
    <div className="font-theme-kumbh container flex min-h-screen min-w-screen flex-col">
      <Header />
      <div className="mobile:pt-40 relative flex grow flex-col pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
