import React from "react";
import classes from "./about.module.scss";
import { motion } from "framer-motion";
const gridAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: "10%",
  },
  visible: { opacity: 1, scale: 1, y: "0%", transition: { duration: 0.1 } },
};
const About = () => {
  return (
    <div className={classes.about} id="about">
      <div className="_cont_limit">
        <div className={classes.body}>
          <div className={classes.title_about}>
            <h2>JAHON INVEST PLAST</h2>
          </div>
          <div className={classes.wrapper_grid}>
            <motion.div
              className={classes.grid_item}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: 1 }}
              variants={gridAnimation}
            >
              <div className={classes.title_grid}>
                <h3>Производство</h3>
              </div>
              <div className={classes.subtitle_grid}>
                <h4>
                  При производстве продукции использует только экологически
                  чистое и качественное сырье. Производимая продукция имеет
                  сертификаты соответствия и гигиенические сертификаты. B
                  производстве используется «Cистема менеджмент качество» ISO
                  9001:2015 являющийся международным стандартом. Компания
                  работает над развитием производства и внедряет новые виды
                  производимой продукции.
                </h4>
              </div>
            </motion.div>
            <motion.div
              className={classes.grid_item}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: 1 }}
              variants={gridAnimation}
            >
              <div className={classes.title_grid}>
                <h3>Емкости</h3>
              </div>
              <div className={classes.subtitle_grid}>
                <h4>
                  Для изготовления емкостей применяются передовые
                  технологические оборудования ведущей немецкой компании,
                  специализирующейся на производстве компаундов и красителей для
                  пластмассы. Многослойные емкости создаются с использованием
                  метода литья, в то время как для однослойных применяется метод
                  ротации. Все эти методы гарантируют высокую степень надежности
                  и практичности готовой продукции.
                </h4>
              </div>
            </motion.div>
            <motion.div
              className={classes.grid_item}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: 1 }}
              variants={gridAnimation}
            >
              <div className="mask"></div>
              <video playsInline loop muted autoPlay preload="auto">
                <source
                  src={process.env.PUBLIC_URL + `/images/production.mp4`}
                  type="video/mp4"
                />
              </video>
              <div className="bg_blur">
                <img
                  src={process.env.PUBLIC_URL + `/images/bg.webp`}
                  alt="bg_blur"
                />
              </div>
            </motion.div>
            <motion.div
              className={classes.grid_item}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: 1 }}
              variants={gridAnimation}
            >
              <div className="mask"></div>
              <img
                src={process.env.PUBLIC_URL + `/images/management.webp`}
                alt=""
              />
            </motion.div>
            <motion.div
              className={classes.grid_item}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: 1 }}
              variants={gridAnimation}
            >
              <div className={classes.title_grid}>
                <h3>Достоинства</h3>
              </div>
              <div className={classes.subtitle_grid}>
                <h4>
                  Пластиковые емкости являются востребованными благодаря
                  разносторонним преимуществам, сделавшими их неотъемлемыми в
                  различных сферах. Их легкий вес значительно облегчает
                  транспортировку и обработку. Пластик проявляет устойчивость к
                  коррозии, агрессивным химическим воздействиям и влаге,
                  обеспечивая тем самым долгий срок службы. Высокая прочность и
                  ударопрочность позволяют справляться с разнообразными
                  условиями эксплуатации. Дополнительно, низкая теплопроводность
                  пластика способствует поддержанию стабильной температуры
                  хранимых веществ. Совокупность этих факторов делает
                  пластиковые емкости удобными, долговечными и эффективными в
                  разнообразных отраслях промышленности и в повседневном
                  использовании.
                </h4>
              </div>
            </motion.div>
            <motion.div
              className={classes.grid_item}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: 1 }}
              variants={gridAnimation}
            >
              <div className={classes.title_grid}>
                <h3>О компании</h3>
              </div>
              <div className={classes.subtitle_grid}>
                <h4>
                  Основная деятельность компании - производство пластмассовых
                  товаров народного потребления, товаров для дома, для сада -
                  всего более 300 наименований продукции, которые полностью
                  покрывают внутренний рынок Узбекистана и экспортируются в
                  Центрально-Азиатские страны.
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
