import React, { useEffect, useState } from "react";
import classes from "./product.module.scss";
import { useParams } from "react-router-dom";
import { TanksList } from "../../productsList/TanksList";
import { GoInfo } from "react-icons/go";
import { MdOutlinePropaneTank } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
import { IoBasketOutline } from "react-icons/io5";
import { addSpacesToPrice } from "../../functions/addSpacesToPrice";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const filteredProduct = TanksList.find(
      (product) => Number(product.id) === Number(params.id)
    );
    setProduct(filteredProduct);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  return (
    <div className={classes.product}>
      <div className="_cont_limit">
        <div className={classes.body}>
          <div className={classes.product_info}>
            <div className={classes.column_img}>
              <div className={classes.item_img}>
                <img
                  src={
                    process.env.PUBLIC_URL + `/images/foto_cards/${product.img}`
                  }
                  alt={product.name}
                />
              </div>
            </div>
            <div className={classes.column_info}>
              <div className={classes.name}>
                <h1>{product.name}</h1>
              </div>

              <div className={classes.buy}>
                <div className={classes.price}>
                  <h2>{addSpacesToPrice(product.price)} ₸</h2>
                </div>
                <a href={product.url_zetakz}>
                  <button>
                    <IoBasketOutline /> купить
                  </button>
                </a>
              </div>
              <div className={`${classes.discription} ${classes.border_row}`}>
                <div className={classes.main_title}>
                  <CiWarning />
                  <span>Уважаемые клиенты!</span>
                </div>
                <span>
                  Пожалуйста, обратите внимание, что цены на данном сайте могут
                  отличаться от реальных. Для получения актуальной информации о
                  ценах и наличии товаров, перейдите на наш{" "}
                  <a href="https://zeta.kz/" className={classes.warning}>
                    основной сайт
                  </a>{" "}
                  или нажмите кнопку "Купить"
                </span>
              </div>
              <div
                className={`${classes.characteristics} ${classes.border_row}`}
              >
                <div className={classes.main_title}>
                  <GoInfo /> <span>Характеристики</span>
                </div>
                <div className={classes.characteristics_flex}>
                  <div className={classes.column}>
                    <span>
                      <span className={classes.title}>Размеры:</span>{" "}
                      {product.size} см.
                    </span>
                    <span>
                      <span className={classes.title}>Объем:</span>{" "}
                      {product.volume} литров
                    </span>
                    <span>
                      <span className={classes.title}>Количество слоев:</span>{" "}
                      {product.layer}
                    </span>
                  </div>
                  <div className={classes.column}>
                    {" "}
                    <span>
                      <span className={classes.title}>Материал:</span> пластик
                    </span>{" "}
                    <span>
                      <span className={classes.title}>Цвет:</span>{" "}
                      {product.color}
                    </span>
                    <span>
                      <span className={classes.title}>
                        Страна производства:
                      </span>{" "}
                      Узбекистан
                    </span>
                  </div>
                </div>
                <span style={{ paddingTop: "1em" }}>
                  Для консультации по товару, пожалуйста, свяжитесь по
                  указанному номеру{" "}
                  <a href="tel:+77017100806">+7 (701) 710-08-06</a>
                </span>
              </div>
              <div className={`${classes.discription} ${classes.border_row}`}>
                <div className={classes.main_title}>
                  <MdOutlinePropaneTank />
                  <span>Описание</span>
                </div>
                <span>{product.discription}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
