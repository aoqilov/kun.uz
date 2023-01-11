import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// impoert api
import { biznes } from "../api/biznes";

const Biznes = () => {
  const [biznesNews, setBiznesNews] = useState(biznes);
  let ism = [];
  const jonatuvchi = useNavigate();
  function first(id) {
    const yangi = biznesNews.filter((item) => item.id == id);
    ism.push(yangi);
    jonatuvchi("/:id", { state: { ism } });
  }

  return (
    <div>
      <section className="biznes">
        <div id="title-twice">
          <a href="!#" class="crcle-box">
            <img
              src="	https://kun.uz/assets/cd6ab492/img/kun-uz-logo.svg"
              alt=""
              className="crcle-icon"
            />
            <h3 class="crcle-title">Biznes</h3>
          </a>
          <a href="!#" class="crcle-box2">
            Hamkorlik qilish
          </a>
        </div>
        <div className="biznes-block">
          {biznesNews.slice(0, 5).map((item, idx) => {
            return (
              <div key={idx} className="block-card">
                <img src={item.photo[0]} alt="" />
                <h1 onClick={() => first(idx)}>{item.title}</h1>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Biznes;
