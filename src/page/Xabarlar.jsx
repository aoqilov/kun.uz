import React from "react";
import EventIcon from "@mui/icons-material/Event";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShortcutIcon from "@mui/icons-material/Shortcut";

import Advert from "../components/Advert";
import Biznes from "../components/Biznes";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SongiYangilik from "../components/SongiYangilik";
import "../style/xabarlar.scss";
import { useLocation } from "react-router-dom";
import Tavsiya from "../components/Tavsiya";

const Xabarlar = () => {
  const oluvchi = useLocation();
  const data = oluvchi.state.ism[0];

  const soni = Math.floor(Math.random() * 3);
  const reklama = [
    "https://images.booksense.com/images/306/979/9780736979306.jpg",
    "https://www.vgstores.ng/wp-content/uploads/2022/09/FIFA-23-PS4-476x600-1.webp",
    "https://m.media-amazon.com/images/I/91X-ZnQgEiL._SX300_.jpg",
  ];
  const mainrek = [
    "https://img.freepik.com/premium-vector/flag-of-qatar-advertising-banner-for-qatar-2022-world-cup-illustration-vector-football-tournament-football-cup-background-design-template-vector-illustration-2022_104045-1618.jpg?w=2000",
    "https://cdn1.vectorstock.com/i/1000x1000/94/70/fifa-world-cup-2018-banner-concept-vector-20909470.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv99aC_oq0MkIc570bsDOBm4FvhhCFKPhqIxLlcyuM_w7W67j72TXQ5P8ZaI0RLFr-5NA&usqp=CAU",
  ];

  console.log(data[0]);
  return (
    <div>
      <Advert />
      <Navbar />
      <div className="xabarlar__container">
        <SongiYangilik className="left" />
        {data.map((item) => {
          return (
            <div className="content">
              <div className="top">
                <div className="time">
                  <EventIcon className="icon" />
                  <p>{`${item.time}/${item.day}`}</p>
                </div>
                <div className="views">
                  <VisibilityIcon className="icon" />
                  <p>{item.views}</p>
                </div>
                <div className="send">
                  <p>ulashing</p>
                  <ShortcutIcon className="icon" />
                </div>
              </div>
              <div className="title">
                <h1>{item.title}</h1>
                <h5>{item.paragrf}</h5>
                <img className="first" src={item.photo[0]} alt="asd" />
                <p>{item.lorem}</p>

                {item.photo[1] ? "" : <h3 className="rrr">reklama</h3>}
                {item.photo[1] ? (
                  <img src={item.photo[1]} alt="" className="second" />
                ) : (
                  <img src={mainrek[soni]} alt="" className="second" />
                )}
              </div>
            </div>
          );
        })}
        <div className="right">
          <div className="cubc-rek">
            <img src={reklama[soni]} alt="" />
          </div>
          <Tavsiya />
        </div>
      </div>
      <Biznes />
      <Footer />
    </div>
  );
};

export default Xabarlar;
