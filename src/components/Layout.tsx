import { Outlet } from "react-router-dom";
import { Header } from "./Header";


const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
 <main className="bg-white flex w-full flex-col overflow-hidden items-center max-md:max-w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;