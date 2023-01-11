import React, { useState } from "react";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
// import api
import { warAll, warMain } from "../api/warApi";
import { useNavigate } from "react-router-dom";

const War = () => {
  const [warMainNews, setWarMainNews] = useState(warMain);
  const [warAllNews, setWarAllNews] = useState(warAll);
  let ism = [];
  const jonatuvchi = useNavigate();
  function first(id, nameApi) {
    const yangi = nameApi.filter((item) => item.id === id);
    ism.push(yangi);
    jonatuvchi("/:id", { state: { ism } });
  }
  const send = useNavigate();
  const tema = "Rosiya va Ukraina urushi";
  const nomi = "warAllNews";
  return (
    <div>
      <section className="war">
        <div id="title-one">
          <div className="crcle-box">
            <TripOriginIcon className="crcle-icon" />
            <h3
              style={{ cursor: "pointer" }}
              onClick={() =>
                send("/barchasi", { state: { warAllNews, tema, nomi } })
              }
              className="crcle-title"
            >
              Rossiya-Ukraina urushi
            </h3>
          </div>
        </div>
        <div className="war__twice">
          <div className="twice-one">
            {warMain.slice(0, 1).map((item, idx) => {
              return (
                <div key={idx} className="one-card">
                  <img src={item.photo[0]} alt="war" className="card-img" />
                  <div className="back-war"></div>
                  <h1
                    onClick={() => first(idx, warMainNews)}
                    className="card-title"
                  >
                    {item.title}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="twice-two">
            <div className="two-cards">
              {warAllNews.slice(0, 4).map((item, idx) => {
                return (
                  <div key={idx} className="card">
                    <img src={item.photo[0]} alt="war" />
                    <h3 onClick={() => first(idx, warAllNews)}>{item.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default War;
