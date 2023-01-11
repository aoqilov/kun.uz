import React from "react";

const Advert = () => {
  const reklama = [
    "https://avatars.mds.yandex.net/get-adfox-content/2804317/220822_adfox_1749280_5582761.3220b076dcf43682ed4513838c4a4db7.jpg/optimize.webp",
    "https://avatars.mds.yandex.net/get-adfox-content/2788782/220805_adfox_1749280_4795982.59b5d1f0586d0bb5141fc6d67560196b.png/optimize.webp",
    "https://avatars.mds.yandex.net/get-adfox-content/2367573/220601_adfox_1749280_4795997.256ee7aae770866574d94cb9822d6df0.png/optimize.webp",
    "https://avatars.mds.yandex.net/get-adfox-content/2462621/221221_adfox_1749280_6028714.ae8712538dc1553decaae856e445e293.png/optimize.webp",
  ];

  const ran = Math.floor(Math.random() * 4);
  return (
    <div>
      <div className="advert">
        <img src={reklama[ran]} alt="advert__img" className="advert__img" />
      </div>
    </div>
  );
};

export default Advert;
