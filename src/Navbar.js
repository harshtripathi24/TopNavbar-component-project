import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, socials } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (navVisible) {
      linkContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linkContainerRef.current.style.height = "0px";
    }
  }, [navVisible]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="logo-text">
            TopNavbar <span> Project</span>{" "}
          </h3>
          <button
            onClick={() => setNavVisible(!navVisible)}
            className="nav-toggle"
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linkContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {socials.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
