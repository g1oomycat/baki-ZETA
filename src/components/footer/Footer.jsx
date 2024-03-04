import React from "react";
import classes from "./footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTiktok } from "react-icons/tb";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { LuStore } from "react-icons/lu";
import { MdOutlineContactPhone } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="_cont_limit">
        <div className={classes.body}>
          <div className={classes.rows}>
            <div className={classes.item}>
              <LuStore />
              <a href="https://www.zeta.kz/our_stores/">Наши магазины</a>
            </div>
            <div className={classes.item}>
              <MdOutlineContactPhone />
              <a href="https://www.zeta.kz/contacts/">Контакты</a>
            </div>
            <div className={classes.item}>
              <IoMailOutline />
              <a href="mailto:onlineshop@zeta.kz">onlineshop@zeta.kz</a>
            </div>
            <div className={classes.item}>
              <a href="https://www.instagram.com/zeta.kz/">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@zeta_kz">
                <TbBrandTiktok />
              </a>
              <a href="https://www.youtube.com/@zeta_kz">
                <FiYoutube />
              </a>
            </div>
            <div className={classes.item}>
              <BsTelephone />
              <a href="tel:+77751086362">+7 (775) 108-63-62</a>
            </div>
          </div>
          <div className={classes.rows}>
            <div className={classes.item}>
              <a href="https://www.zeta.kz/">
                <img
                  src={process.env.PUBLIC_URL + "/images/logoWithStar.svg"}
                  alt="logo"
                />
              </a>
            </div>

            <div className={classes.item}>
              <a href="https://t.me/Gloomycatt">developed by NasYrov</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
