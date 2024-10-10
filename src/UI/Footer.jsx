import { useState } from "react";
import api from "../assets/Api/footer.json";
import { useEffect } from "react";

import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const [footerInfo, setFooterInfo] = useState([]);
  const myIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    IoIosMail: <IoIosMail />,
  };

  useEffect(() => {
    setFooterInfo(api);
  }, []);
  return (
    <section className="footer">
      <div className="container">
        <div className="grid grid-cols-3 footer-Cards">
          {footerInfo.map((currFooter) => {
            const { id, icon, title, details } = currFooter;
            return (
              <div key={id} className="flex align-center gap-2 footer-Card">
                <div className="flex align-center justify-center">
                  <p className="IconFooter">{myIcon[icon]}</p>
                </div>
                <div className="FooterInfo">
                  <h4>{title}</h4>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer className="borderBottomFooter">
        <div className="container">
          <div className="grid grid-cols-2 align-center justify-between bottomFooter">
            <div className="copyrightSection">
              <p>
                Copyright © 2024, All Right Reserved by{" "}
                <a href="#">Rasel Shikder</a>
              </p>
            </div>
            <div className="footerNav">
              <ul className="flex ">
                <li>
                  <a className="navBarLink" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="navBarLink" href="#">
                    Policy
                  </a>
                </li>
                <li>
                  <a className="navBarLink" href="#">
                    Support
                  </a>
                </li>
                <li>
                  <a className="navBarLink" href="#">
                    Socials
                  </a>
                </li>
                <li>
                  <a className="navBarLink" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="navBarLink" href="#">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
