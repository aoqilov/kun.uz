import React, { useState } from "react";
import { lastNews } from "../api/headerApi";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

const Tavsiya = () => {
  const [lastNewsApi, setlastNewsApi] = useState(lastNews);

  return (
    <div>
      <div className="songi-news">
        <div id="title-one">
          <a href="!#" className="crcle-box">
            <TripOriginIcon className="crcle-icon" />
            <h3 className="crcle-title">Tavsiya qilamiz</h3>
          </a>
        </div>
        {lastNewsApi.slice(0, 8).map((item, idx) => {
          return (
            <div key={idx} className="songi-news__card">
              <div id="time">
                <DateRangeIcon className="icon" />
                <p className="text-time">{item.time}</p>
              </div>
              <h1 className="card-title">{item.title}</h1>
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

export default Tavsiya;
