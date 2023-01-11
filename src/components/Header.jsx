import React, { useState } from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
// static API
import { headerApi, headerMainApi, muharir } from "../api/headerApi";
import SongiYangilik from "./SongiYangilik";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [headerApi2, setHeaderApi2] = useState(headerMainApi);
  const [headerApi1, setHeaderApi1] = useState(headerApi);
  // muharrir
  const [muharirApi, setMuharirApi] = useState(muharir);
  const hunt = [muharirApi, setMuharirApi];
  // last news
  let ism = [];
  const jonatuvchi = useNavigate();
  function first(id, nomi) {
    const yangi = nomi.filter((item) => item.id == id);
    ism.push(yangi);
    jonatuvchi("/:id", { state: { ism } });
  }
  const all = useNavigate();
  let tema = "Muharir tanlovi";
  let nomi = "muharirApi";
  return (
    <div>
      <header className="header">
        <div className="header__box">
          <div className="header__box-main">
            {headerApi2.slice(0, 1).map((item, idx) => {
              return (
                <div key={idx} className="main__card">
                  <img
                    src={item.photo[0]}
                    alt="main"
                    className="main-card__img"
                  />
                  <div className="main-info">
                    <div id="time">
                      <DateRangeIcon className="icon" />
                      <p className="text-time">09:00</p>
                    </div>
                    <h1 onClick={() => first(idx, headerApi2)}>{item.title}</h1>
                    <p>{item.paragrf}</p>
                  </div>
                </div>
              );
            })}
            <div className="other__main-cards">
              {headerApi1.slice(0, 4).map((item, idx) => {
                return (
                  <div key={idx} className="other-card">
                    <img src={item.photo[0]} alt="rasm" />
                    <div className="other-info">
                      <div id="time">
                        <DateRangeIcon className="icon" />
                        <p className="text-time">21:10 / 23.12.2022</p>
                      </div>
                      <h1 onClick={() => first(idx, headerApi1)}>
                        {item.title}
                      </h1>
                      <span className="line"></span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* muharir */}
            <div className="muharir">
              <div id="title-twice">
                <a href="" className="crcle-box">
                  <TripOriginIcon className="crcle-icon" />
                  <h3 className="crcle-title">Muharrir tanlovi</h3>
                </a>
                <a
                  onClick={() =>
                    all("/barchasi", { state: { muharirApi, tema, nomi } })
                  }
                  className="crcle-box2"
                  style={{ cursor: "pointer" }}
                >
                  barchasi
                </a>
              </div>
              <div className="muharir__cards">
                {muharirApi.slice(0, 3).map((item, idx) => {
                  return (
                    <div key={idx} className="muharir__cards-item">
                      <img src={item.photo[0]} alt="muharir" />
                      <div className="item-info">
                        <div id="time">
                          <DateRangeIcon className="icon" />
                          <p className="text-time">{`${item.time}/${item.day}`}</p>
                        </div>
                        <h1
                          onClick={() => first(idx, muharirApi)}
                          className="item-title"
                        >
                          {item.title}
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* songi-news */}
          <SongiYangilik />
        </div>
      </header>
    </div>
  );
};

export default Header;
