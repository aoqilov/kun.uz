import React, { useState } from "react";
import { lastNews } from "../api/headerApi";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { useNavigate } from "react-router-dom";

const SongiYangilik = () => {
  const [lastNewsApi, setlastNewsApi] = useState(lastNews);
  let ism = [];
  const jonatuvchi = useNavigate();
  function first(id) {
    const yangi = lastNews.filter((item) => item.id == id);
    ism.push(yangi);
    jonatuvchi("/:id", { state: { ism } });
  }

  return (
    <div>
      <div className="songi-news">
        <div id="title-one">
          <a href="!#" className="crcle-box">
            <TripOriginIcon className="crcle-icon" />
            <h3 className="crcle-title">Songi yangiliklar</h3>
          </a>
        </div>
        {lastNewsApi.slice(0, 8).map((item, idx) => {
          return (
            <div key={idx} className="songi-news__card">
              <div id="time">
                <DateRangeIcon className="icon" />
                <p className="text-time">{item.time}</p>
              </div>
              <h1 onClick={() => first(idx)} className="card-title">
                {item.title}
              </h1>
            </div>
          );
        })}
        <div className="songi-news__koproq">
          <h3>koproq yangiliklar</h3>
          <ArrowRightAltIcon className="icon-koproq" />
        </div>
      </div>
    </div>
  );
};

export default SongiYangilik;
