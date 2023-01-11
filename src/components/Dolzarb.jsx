import React, { useState } from "react";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
// import API
import { dolzarbMain, dolzarbAll } from "../api/dolzarbApi";
import { useNavigate } from "react-router-dom";

const Dolzarb = () => {
  const [dolzarbNews1, setDolzarbNews1] = useState(dolzarbMain);
  const [dolzarbNews2, setDolzarbNews2] = useState(dolzarbAll);

  let ism = [];
  const jonatuvchi = useNavigate();
  function first(id, nomi) {
    const yangi = nomi.filter((item) => item.id == id);
    ism.push(yangi);
    jonatuvchi("/:id", { state: { ism } });
  }

  const dolzarbSend = useNavigate();
  let tema = "Dolzarb xabarlar";
  let nomi = "dolzarbNews2";
  return (
    <div>
      <section className="dolzarb">
        <div id="title-twice">
          <div className="crcle-box">
            <TripOriginIcon className="crcle-icon" />
            <h3
              onClick={() => {
                dolzarbSend("/barchasi", {
                  state: { dolzarbNews2, tema, nomi },
                });
              }}
              className="crcle-title"
            >
              Dolzarb xabarlar
            </h3>
          </div>
          <div
            onClick={() =>
              dolzarbSend("/barchasi", { state: { dolzarbNews2, tema, nomi } })
            }
            className="crcle-box2"
            style={{ cursor: "pointer" }}
          >
            barchasii
          </div>
        </div>
        <div className="dolzarb__twicebox">
          <div className="box-left">
            {dolzarbNews1.slice(0, 1).map((item, idx) => {
              return (
                <div key={idx} className="card-left">
                  <img
                    src={item.photo[0]}
                    className="card-image"
                    alt="dolzarb"
                  />
                  <div className="card__info">
                    <h1
                      onClick={() => first(idx, dolzarbNews1)}
                      className="card-title"
                    >
                      {item.title}
                    </h1>
                    <p className="card-paragraph">{item.paragrf}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box-right">
            {dolzarbNews2.slice(0, 4).map((item, idx) => {
              return (
                <div key={idx} className="cards-right">
                  <img
                    src={item?.photo[0]}
                    alt="dolzarb"
                    className="cards-right__img"
                  />
                  <h1
                    onClick={() => first(idx, dolzarbNews2)}
                    className="cards-right__title"
                  >
                    {item.title}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dolzarb;
