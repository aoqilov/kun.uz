import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
          <a href="" class="crcle-box">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium crcle-icon css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="TripOriginIcon"
            >
              <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path>
            </svg>
            <h3 className="crcle-title">Intervyu</h3>
          </a>
          <a
            href=""
            class="crcle-box2"
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
