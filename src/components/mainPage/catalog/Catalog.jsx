import React, { useEffect, useState } from "react";
import classes from "./catalog.module.scss";
import { motion } from "framer-motion";
import { TanksList } from "../../../productsList/TanksList";
import { Link } from "react-router-dom";
import { useResize } from "../../../customHooks/use-resize";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { transliterateToLatin } from "../../../functions/URLchpu";
import { addSpacesToPrice } from "../../../functions/addSpacesToPrice";

const listButtonFilter = [
  { all: "Все" },
  { tanks: "Баки" },
  { barrels: "Бочки" },
];
const textAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: "10%",
  },
  visible: { opacity: 1, scale: 1, y: "0%", transition: { duration: 0.1 } },
};
const Catalog = ({}) => {
  const withWindow = useResize();
  const [filteredTanksList, setFilteredTanksList] = useState(TanksList);
  const [indexPage, setIndexPage] = useState(1);
  const [sizeOnePage, setSizeOnePage] = useState(0);
  const [sizeTanksList, setSizeTanksList] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [methodFilter, setMethodFilter] = useState("all");

  useEffect(() => {
    const newList = TanksList.sort((a, b) => a.volume - b.volume);
    setFilteredTanksList(newList);
  }, []);
  const filterProducts = (method) => {
    setMethodFilter(method);
    if (method === "all") {
      setFilteredTanksList(TanksList);
      setIndexPage(1);
      return;
    }
    const newProductList = TanksList.filter(
      (product) => product.category === method
    );
    setFilteredTanksList(newProductList);
    setIndexPage(1);
  };
  // Вычисляем общее количество страниц
  const calculatePageNumbers = (sizeList, currentPage) => {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(sizeList, startPage + 3);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };
  useEffect(() => {
    let sizeList = Math.ceil(filteredTanksList.length / sizeOnePage);
    setSizeTanksList(sizeList);
    setPageNumbers(calculatePageNumbers(sizeList, indexPage));
  }, [filteredTanksList, sizeOnePage, indexPage]);

  useEffect(() => {
    var newSizeOnePage = 10;
    if (!withWindow.SCREEN_XXL && withWindow.SCREEN_LG) {
      newSizeOnePage = 8;
    }
    if (!withWindow.SCREEN_LG && withWindow.SCREEN_MD) {
      newSizeOnePage = 9;
    }
    if (!withWindow.SCREEN_MD && withWindow.SCREEN_SSM) {
      newSizeOnePage = 8;
    }
    if (!withWindow.SCREEN_SSM) {
      newSizeOnePage = 6;
    }
    setSizeOnePage(newSizeOnePage);
    setPageNumbers(calculatePageNumbers(sizeTanksList, indexPage));
  }, [withWindow.width, sizeTanksList, indexPage]);

  const handlePage = (method) =>
    setIndexPage(method === "dicr" ? indexPage + 1 : indexPage - 1);

  return (
    <div className={classes.catalog} id="catalog">
      <div className="_cont_limit">
        <div className={classes.catalog_body}>
          <div className={classes.catalog_title}>
            <h2>Наша продукция</h2>
          </div>
          <div className={classes.filter_menu}>
            {listButtonFilter.map((product, index) => (
              <button
                className={
                  methodFilter === Object.keys(product)[0]
                    ? classes.active_filter
                    : undefined
                }
                onClick={() => filterProducts(Object.keys(product)[0])}
                key={index}
              >
                {Object.values(product)}
              </button>
            ))}
          </div>
          <div className={classes.cards_menu}>
            {filteredTanksList
              .slice(sizeOnePage * (indexPage - 1), sizeOnePage * indexPage)
              .map((tank) => (
                <CardTank
                  tank={tank}
                  key={tank.id}
                  transliterateToLatin={transliterateToLatin}
                />
              ))}
          </div>
          <PageNavigationButtons
            indexPage={indexPage}
            sizeTanksList={sizeTanksList}
            handlePage={handlePage}
            withWindow={withWindow}
            setIndexPage={setIndexPage}
            pageNumbers={pageNumbers}
          />
        </div>
      </div>
    </div>
  );
};
const PageNavigationButtons = ({
  indexPage,
  sizeTanksList,
  handlePage,
  withWindow,
  setIndexPage,
  pageNumbers,
}) => (
  <div className={classes.change_page}>
    {indexPage !== 1 && (
      <button
        className={classes.arrow_botton}
        onClick={() => handlePage("incr")}
      >
        <FaArrowLeftLong />
        {withWindow.SCREEN_SM && <span>Предыдущая</span>}
      </button>
    )}

    <div className={classes.list_page}>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setIndexPage(pageNumber)}
          style={{
            border: indexPage === pageNumber && "1px solid black",
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>

    {indexPage !== sizeTanksList && (
      <button
        className={classes.arrow_botton}
        onClick={() => handlePage("dicr")}
      >
        {withWindow.SCREEN_SM && <span>Следующая</span>}
        <FaArrowRightLong />
      </button>
    )}
  </div>
);
const CardTank = ({ tank, transliterateToLatin }) => (
  <Link
    to={`/product/${tank.id}/${transliterateToLatin(
      `${tank.name}-${tank.volume}-литров`
    )}`}
  >
    <motion.div
      className={classes.card}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: 1 }}
      variants={textAnimation}
    >
      <div className={classes.card_img}>
        <img
          src={process.env.PUBLIC_URL + `/images/foto_cards/${tank.img}`}
          alt={tank.name}
        />
      </div>
      {/* <div className={classes.info_card}>
        <div className={classes.text_card}> */}
      <div className={classes.price}>
        <h4>{addSpacesToPrice(tank.price)} ₸</h4>
      </div>
      <div className={classes.name}>
        <h4>{tank.name}</h4>
      </div>
      <div className={classes.volume}>
        <h4>{tank.volume} литров</h4>
      </div>
      <div className={classes.size_layer}>
        <div className={classes.size}>
          <h5>{tank.size} см</h5>
        </div>
        <div className={classes.layer}>
          <h5>
            {tank.layer} {tank.layer === 1 ? "слой" : "слоя"}
          </h5>
        </div>
      </div>

      {/* </div> */}
      <Link
        to={`/product/${tank.id}/${transliterateToLatin(
          `${tank.name}-${tank.volume}-литров`
        )}`}
      >
        <button>Подробнее</button>
      </Link>
      {/* </div> */}
    </motion.div>
  </Link>
);
export default Catalog;
