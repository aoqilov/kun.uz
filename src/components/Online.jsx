import React from "react";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

const Online = () => {
  return (
    <div>
      <section className="online">
        <div className="video">
          <div id="title-twice">
            <a href="" className="crcle-box">
              <TripOriginIcon className="crcle-icon" />
              <h3 className="crcle-title">Video yangiliklar</h3>
            </a>
            <a className="crcle-box2" style={{ cursor: "pointer" }}>
              barchasi
            </a>
          </div>
          <div className="video-top">
            <iframe
              width="100%"
              height="405"
              src="https://www.youtube.com/embed/1CUmcDgtuho"
              title="Davlat dorixonalarni erkalatib yubordi. Retseptsiz savdo to'xtatiladimi?"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-bottom">
            <div className="box">
              <iframe
                width="100%"
                height="190"
                src="https://www.youtube.com/embed/1CUmcDgtuho"
                title="Davlat dorixonalarni erkalatib yubordi. Retseptsiz savdo to'xtatiladimi?"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="oclok">
                <p>16:44/27.12.2022</p>
                <h6>Ozbekiston</h6>
              </div>
              <h1>
                18 bolani o‘ldirgan beparvolik. Davlat retsepsiz dori savdosini
                darhol to‘xtatishi kerak
              </h1>
            </div>
            <div className="box">
              <iframe
                width="100%"
                height="190"
                src="https://www.youtube.com/embed/1CUmcDgtuho"
                title="Davlat dorixonalarni erkalatib yubordi. Retseptsiz savdo to'xtatiladimi?"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="oclok">
                <p>16:44/27.12.2022</p>
                <h6>Ozbekiston</h6>
              </div>
              <h1>
                18 bolani o‘ldirgan beparvolik. Davlat retsepsiz dori savdosini
                darhol to‘xtatishi kerak
              </h1>
            </div>
          </div>
        </div>
        <div className="foto">
          <div id="title-twice">
            <a href="" className="crcle-box">
              <TripOriginIcon className="crcle-icon" />
              <h3 className="crcle-title">Foto yangiliklar</h3>
            </a>
            <a className="crcle-box2" style={{ cursor: "pointer" }}>
              barchasi
            </a>
          </div>
          <div className="foto-top">
            <div className="imgbox">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBDeYnXzPiJwPoiFhq_RhX3vAdjRuMPA1PQ&usqp=CAU"
                alt="sda"
                className="main"
              />
              <img
                src="https://kun.uz/assets/cd6ab492/img/play-image.svg"
                alt=""
                className="camera"
              />
            </div>
          </div>
          <div className="foto-bottom">
            <div className="box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBDeYnXzPiJwPoiFhq_RhX3vAdjRuMPA1PQ&usqp=CAU"
                alt=""
              />
              <div className="oclok">
                <p>16:44/27.12.2022</p>
                <h6>Ozbekiston</h6>
              </div>
              <h1>
                18 bolani o‘ldirgan beparvolik. Davlat retsepsiz dori savdosini
                darhol to‘xtatishi kerak
              </h1>
            </div>
            <div className="box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBDeYnXzPiJwPoiFhq_RhX3vAdjRuMPA1PQ&usqp=CAU"
                alt=""
              />
              <div className="oclok">
                <p>16:44/27.12.2022</p>
                <h6>Ozbekiston</h6>
              </div>
              <h1>
                18 bolani o‘ldirgan beparvolik. Davlat retsepsiz dori savdosini
                darhol to‘xtatishi kerak
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Online;
