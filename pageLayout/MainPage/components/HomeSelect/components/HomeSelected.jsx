import React, { useState } from "react";
import s from "./HomeSelected.module.css";

const fake_data = [
  {
    id: 1,
    title: "Водонагреватели",
  },
  {
    id: 2,
    title: "Кондиционеры",
  },
  {
    id: 3,
    title: "Микроволновые печи",
  },
  {
    id: 4,
    title: "Плиты",
  },
  {
    id: 5,
    title: "Посудомоечные машины",
  },
  {
    id: 6,
    title: "Пылесосы",
  },
  {
    id: 7,
    title: "Стиральные машины",
  },
  {
    id: 8,
    title: "Холодильники",
  },
];

const HomeSelected = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleShow = (menuName) => {
    setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  return (
    <div className={s.homeSelected}>
      <div className={s.dropdownMenu}>
        <h2
          onClick={() => handleShow("tv")}
          className={activeMenu === "tv" ? s.active : ""}
        >
          Телевизоры
        </h2>
        {activeMenu === "tv" && (
          <ul className={s.dropdownMenuList}>
            {fake_data.map((el, id) => (
              <li key={id}>{el.title}</li>
            ))}
          </ul>
        )}
      </div>
      <div className={s.dropdownMenu}>
        <h2
          onClick={() => handleShow("appliances")}
          className={activeMenu === "appliances" ? s.active : ""}
        >
          Бытовая техника
        </h2>
        {activeMenu === "appliances" && (
          <ul className={s.dropdownMenuList}>
            {fake_data.map((el, id) => (
              <li key={id}>{el.title}</li>
            ))}
          </ul>
        )}
      </div>
      <div className={s.dropdownMenu}>
        <h2
          onClick={() => handleShow("builtIn")}
          className={activeMenu === "builtIn" ? s.active : ""}
        >
          Встраиваемая бытовая техника
        </h2>
        {activeMenu === "builtIn" && (
          <ul className={s.dropdownMenuList}>
            {fake_data.map((el, id) => (
              <li key={id}>{el.title}</li>
            ))}
          </ul>
        )}
      </div>
      <div className={s.dropdownMenu}>
        <h2
          onClick={() => handleShow("smallAppliances")}
          className={activeMenu === "smallAppliances" ? s.active : ""}
        >
          Мелкая бытовая техника
        </h2>
        {activeMenu === "smallAppliances" && (
          <ul className={s.dropdownMenuList}>
            {fake_data.map((el, id) => (
              <li key={id}>{el.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomeSelected;