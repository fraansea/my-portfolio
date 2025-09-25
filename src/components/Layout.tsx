import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";

const Layout = () => {
  return (
    <div className="mx-auto min-h-screen max-w-4xl border-l border-r border-gray-200 bg-white">
      <Header />
      <main className="flex w-full flex-col items-center overflow-hidden bg-white max-md:max-w-full">
        <Outlet />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
