import React, { useState } from "react";
import Advert from "../components/Advert";
import Navbar from "../components/Navbar";
import "../style/barchasi.scss";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Footer from "../components/Footer";
import SongiYangilik from "../components/SongiYangilik";
import { useLocation } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

import SearchIcon from "@mui/icons-material/Search";

const Barchasi = () => {
  const oldi = useLocation();

  const [malumot, setMalumot] = useState(oldi.state);
  const { tema, nomi } = malumot;
  const massiv = malumot[nomi];
  // filter
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  console.log("11111");
  console.log(oldi);
  console.log("222222");
  console.log(malumot);

  return (
    <div>
      <Advert />
      <Navbar />
      <div className="barchasi__news">
        <div className="left-news">
          <div className="title">
            <div id="title-one">
              <a href="!#" className="crcle-box">
                <TripOriginIcon className="crcle-icon" />
                <h3 className="crcle-title">{tema}</h3>
              </a>
            </div>
          </div>
          <div className="filter">
            <div className="search">
              <input
                type="text"
                placeholder="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <SearchIcon className="glass" />
            </div>
            <div className="vaqt">
              <select id="" onChange={(e) => setSelect(e.target.value)}>
                <option value="">default</option>
                <option value="popular">popular news</option>
              </select>
            </div>
          </div>
          {oldi ? (
            <div className="all-cards">
              {massiv
                .filter((word) => {
                  return word.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .sort((a, b) => {
                  if (select === "popular") return b.views - a.views;
                  // if (select === "") return;
                })
                .map((item, idx) => {
                  return (
                    <div key={idx} className="card">
                      <img src={item.photo[0]} alt="ads" />
                      <div id="time">
                        <DateRangeIcon className="icon" />
                        <p className="text-time">{`${item.time}/${item.day}`}</p>
                      </div>
                      <h3>{item.title}</h3>
                      <div id="time">
                        <VisibilityIcon
                          style={{ color: "blue", fontWeight: "bold" }}
                          className="icon"
                        />
                        <p
                          style={{ color: "blue", fontWeight: "bold" }}
                          className="text-time"
                        >
                          {item.views}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            "bom bosh"
          )}
        </div>
        <div className="right-news">
          <SongiYangilik className="right-news__last" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Barchasi;
