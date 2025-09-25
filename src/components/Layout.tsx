import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";


const Layout = () => {
  return (
    <div className="min-h-screen bg-white border-l border-r border-gray-200 max-w-4xl mx-auto">
      <Header />
      <main className="bg-white flex w-full flex-col overflow-hidden items-center max-md:max-w-full ">
        <Outlet />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
