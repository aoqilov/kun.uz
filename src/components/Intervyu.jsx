import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

// import api
import { intervyuAll } from "../../src/api/intervyuApi";

const Intervyu = () => {
  const [intervyu, setIntervyu] = useState(intervyuAll);
  let ism = [];
  const jonatuvchi = useNavigate();
  function first(id) {
    const yangi = intervyu.filter((item) => item.id == id);
    ism.push(yangi);
    jonatuvchi("/:id", { state: { ism } });
  }

  const intervyuSend = useNavigate();
  let nomi = "intervyu";
  let tema = "Intervyu";

  return (
    <div>
      <section className="intervyu">
        <div id="title-twice">
          <div className="crcle-box">
            <TripOriginIcon className="crcle-icon" />
            <h3 className="crcle-title">Intervyu</h3>
          </div>
          <a
            className="crcle-box2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              intervyuSend("/barchasi", {
                state: { intervyu, tema, nomi },
              });
            }}
          >
            barchasi
          </a>
        </div>
        <div className="intervyu-cards">
          {intervyu.slice(0, 4).map((item, idx) => {
            return (
              <div className="card">
                <img src={item.photo[0]} alt="" className="card-img" />
                <span className="card-backcolor"></span>
                <h1 onClick={() => first(idx)} className="card-title">
                  {item.title}
                </h1>
                <p>intervyu</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Intervyu;
