import React, { useEffect, useState, useRef } from "react";
import classes from "./header.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToElement } from "../../functions/scrollToElement";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const headertAnimation = {
  initial: { y: "-100%" },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.3,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.3,
    },
  },
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleScrollElement = (id_component) => {
    if (location.pathname !== "/") {
      console.log("Переход на главную страницу");
      navigate("/");
    }
    scrollToElement(id_component);
  };
  //анимации хеадера при скролле
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const isInitialRender = useRef(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!isScrollingDown || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  // Пропустить первоначальную проверку рендеринга
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className={classes.header}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={headertAnimation}
        >
          <div className="_cont_limit">
            <div className={classes.heder_body}>
              <div className={classes.logo}>
                <Link to={`/`}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/logoWithStar.svg"}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className={classes.menu_list}>
                <span className={classes.menu_item}>
                  <button onClick={() => handleScrollElement("about")}>
                    О нас
                  </button>
                </span>
                <span className={classes.menu_item}>
                  <button
                    onClick={() => handleScrollElement("catalog")}
                    href="#"
                  >
                    Продукция
                  </button>
                </span>
                <span className={classes.menu_item}>
                  <a href="https://www.zeta.kz/our_stores/">Магазины</a>
                </span>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
