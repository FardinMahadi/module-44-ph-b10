import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/faq", name: "FAQ" },
  ];

  return (
    <nav>
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl p-6 bg-yellow-500 text-black"
      >
        {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul
        className={`md:flex md:static absolute px-6 py-3 bg-yellow-500 text-black duration-700 ${
          open ? "top-12" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
