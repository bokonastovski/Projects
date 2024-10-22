import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-top">
        <img src="/icons/logo.svg" alt="" />
        <ul>
          <li>
            <Link href="/">Контакт</Link>
          </li>
          <li>
            <Link href="/">ЧПП</Link>
          </li>
          <li>
            <Link href="/">Политика на приватност</Link>
          </li>
        </ul>
        <div className="social-icons">
          <Link href="/">
            <img src="/icons/sparkasseLogo.svg" alt="" />
          </Link>
          <Link href="/">
            <img src="/icons/linkedin.svg" alt="" />
          </Link>
          <Link href="/">
            <img src="/icons/instagram.svg" alt="" />
          </Link>
          <Link href="/">
            <img src="/icons/facebook.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&#169; VibeOnEdu</p>
      </div>
    </section>
  );
};

export default Footer;
