import React from "react";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-primary text-base-100">
      <aside className="items-center grid-flow-col">
        <p>Dalen&apos;s Digital Services &copy; 2024 - All right reserved</p>
        <p>Address: 15001 Kercheval Ave PMB 535 Grosse Pointe Park, MI 48230</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p>Email: dalensdigitalservices@gmail.com</p>
      </nav>
    </footer>
  );
};

export default Footer;
