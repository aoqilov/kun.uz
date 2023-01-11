import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

// import api
import { maqolaApi } from "../api/maqolaApi";

const Maqola = () => {
  const [maqolaNews, setMaqolaNews] = useState(maqolaApi);
  let ism = [];
  const jonatuvchi = useNavigate();
  function first(id) {
    const yangi = maqolaNews.filter((item) => item.id == id);
    ism.push(yangi);
    jonatuvchi("/:id", { state: { ism } });
  }
  const maqolaSend = useNavigate();
  let nomi = "maqolaNews";
  let tema = "Maqolalar";
  return (
    <div>
      <section className="maqola">
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
            <h3 className="crcle-title">Maqolalar</h3>
          </a>
          <a
            href=""
            style={{ textDecoration: "underline" }}
            class="crcle-box2"
            onClick={() =>
              maqolaSend("/barchasi", {
                state: { maqolaNews, nomi, tema },
              })
            }
          >
            barchasi
          </a>
        </div>
        <div id="title-twice">
          <div href="" className="crcle-box">
            <TripOriginIcon className="crcle-icon" />
            <h3 className="crcle-title">Maqolalar</h3>
          </div>
          <a
            onClick={() =>
              maqolaSend("/barchasi", { state: { maqolaNews, tema, nomi } })
            }
            className="crcle-box2"
            style={{ cursor: "pointer" }}
          >
            barchasi
          </a>
        </div>

        <div className="maqola-news">
          {maqolaNews.slice(0, 6).map((item, idx, arr) => {
            return (
              <div key={idx} className="news-card">
                <img src={item.photo[0]} alt="maqola" />
                <h1 onClick={() => first(idx)}>{item.title}</h1>
                <p>{item.paragrf}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Maqola;
