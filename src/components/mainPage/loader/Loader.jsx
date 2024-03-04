import React from "react";
import classes from "./loader.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { scrollToElement } from "../../../functions/scrollToElement";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className="_cont_limit">
        <div className={classes.body}>
          <div className={classes.wrapper_flex}>
            <div className={classes.column}>
              <div className={classes.name_loader}>
                <div className={classes.title_loader}>
                  <h1>Пластиковые ёмкости</h1>
                </div>
                <div className={classes.title_loader}>
                  <h1>Для жидкостей</h1>
                </div>
              </div>
              <div className={classes.subname_loader}>
                <h2>
                  Магазины ZETA рады представить новинку – пластиковые емкости
                  для удобного хранения и транспортировки различных жидкостей.
                  Разнообразие размеров и форм обеспечивает широкий выбор.
                </h2>
              </div>
              <div className={classes.but_logo}>
                <button onClick={() => scrollToElement("about")}>
                  <div>
                    <span> Подробнее о JIP</span> <FaArrowRightLong />
                  </div>
                </button>
                <div className={classes.logs}>
                  <span>
                    <img
                      src={process.env.PUBLIC_URL + `/images/logoWithStar.svg`}
                      alt="logo_jip"
                    />
                  </span>
                  <span>
                    <img
                      src={process.env.PUBLIC_URL + `/images/logoJIP.svg`}
                      alt="logo_jip"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.column}>
              <div className="bg_blur">
                <img
                  src={process.env.PUBLIC_URL + `/images/bg.webp`}
                  alt="bg_blur"
                />
              </div>
              <div className="mask"></div>

              <video playsInline loop muted autoPlay preload="auto">
                <source
                  src={process.env.PUBLIC_URL + `/images/about.mp4`}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
