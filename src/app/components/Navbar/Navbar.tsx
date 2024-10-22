import Link from "next/link";
import React from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <section className={`navbar ${className || ""}`}>
      <Link href="/">
        <img src="/icons/logo.svg" alt="VibeOn Logo" />
      </Link>
      <ul>
        <li>
          <Link href="/">Почетна</Link>
        </li>
        <li>
          <Link href="/courses">Курсеви</Link>
        </li>
        <li>
          <Link href="/">VibeOn Edu</Link>
        </li>
        <li>
          <Link href="/">Шпаркасе Банка</Link>
        </li>
        <li>
          <Link href="/">Контакт</Link>
        </li>
      </ul>
      <div className="buttons">
        <Link href="/register">
          <button className="btn">Регистрација &#8594;</button>
        </Link>
        <Link href="/signin">
          <button className="btn">Најава &#8594;</button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
