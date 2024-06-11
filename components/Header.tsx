import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar bg-primary text-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Dalen&apos;s Digital Services
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
