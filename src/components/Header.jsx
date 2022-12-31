import React from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
// static API

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__box">
          <div className="header__box-main">
            <div className="main__card">
              <img
                src="https://storage.kun.uz/source/thumbnails/_medium/9/ybF11oWG4k2xruwV_L4DSRuRB6Dyx3-W_medium.jpg"
                alt="main"
                className="main-card__img"
              />
              <div className="main-info">
                <div id="time">
                  <DateRangeIcon className="icon" />
                  <p className="text-time">09:00</p>
                </div>
                <h1>
                  2023 yil anonsi, 1,5 karra ko'p elektr va eski-yangi
                  vazirliklar - hafta dayjesti
                </h1>
                <p>
                  Shavkat Mirziyoyev kelasi yil aholiga 50 foiz ko'p elektr
                  energiyasi yetkazib berilishini aytdi. Davlat mingta maktab
                  qurish bo'yicha tadbirkorlarning puliga umid bog'layapti.
                  “Semirib ketgan” hukumat “oriqlashadigan” bo'ldi.
                  Yakunlanayotgan haftaning shu va boshqa asosiy xabarlari -
                  Kun.uz dayjestida.
                </p>
              </div>
            </div>
            <div className="other__main-card">
              <div className="other-card">
                <img
                  src="	https://storage.kun.uz/source/thumbnails/_medium/9/LnoPUAduuXkP2Gwhy59QWROQ0WVMTZbY_medium.jpg"
                  alt="rasm"
                />
                <div className="other-info">
                  <div id="time">
                    <DateRangeIcon className="icon" />
                    <p className="text-time">21:10 / 23.12.2022</p>
                  </div>
                  <h1>
                    “Dok-1 MAKS”ni ichgan bolalar gospitalizatsiyasi davom
                    etmoqda. Bu holat RShTYoIMda ham kuzatilgan
                  </h1>
                  <span className="line"></span>
                </div>
              </div>
              <div className="other-card">
                <img
                  src="	https://storage.kun.uz/source/thumbnails/_medium/9/LnoPUAduuXkP2Gwhy59QWROQ0WVMTZbY_medium.jpg"
                  alt="rasm"
                />
                <div className="other-info">
                  <div id="time">
                    <DateRangeIcon className="icon" />
                    <p className="text-time">21:10 / 23.12.2022</p>
                  </div>
                  <h1>
                    “Dok-1 MAKS”ni ichgan bolalar gospitalizatsiyasi davom
                    etmoqda. Bu holat RShTYoIMda ham kuzatilgan
                  </h1>
                  <span className="line"></span>
                </div>
              </div>
              <div className="other-card">
                <img
                  src="	https://storage.kun.uz/source/thumbnails/_medium/9/LnoPUAduuXkP2Gwhy59QWROQ0WVMTZbY_medium.jpg"
                  alt="rasm"
                />
                <div className="other-info">
                  <div id="time">
                    <DateRangeIcon className="icon" />
                    <p className="text-time">21:10 / 23.12.2022</p>
                  </div>
                  <h1>
                    “Dok-1 MAKS”ni ichgan bolalar gospitalizatsiyasi davom
                    etmoqda. Bu holat RShTYoIMda ham kuzatilgan
                  </h1>

                  <span className="line"></span>
                </div>
              </div>
              <div className="other-card">
                <img
                  src="	https://storage.kun.uz/source/thumbnails/_medium/9/LnoPUAduuXkP2Gwhy59QWROQ0WVMTZbY_medium.jpg"
                  alt="rasm"
                />
                <div className="other-info">
                  <div id="time">
                    <DateRangeIcon className="icon" />
                    <p className="text-time">21:10 / 23.12.2022</p>
                  </div>
                  <h1>
                    “Dok-1 MAKS”ni ichgan bolalar gospitalizatsiyasi davom
                    etmoqda. Bu holat RShTYoIMda ham kuzatilgan
                  </h1>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            {/* muharir */}
            <div className="muharir">
              <div id="title-twice">
                <a href="!#" className="crcle-box">
                  <TripOriginIcon className="crcle-icon" />
                  <h3 className="crcle-title">Muharrir tanlovi</h3>
                </a>
                <a href="!#" className="crcle-box2">
                  barchasi
                </a>
              </div>
              <div className="muharir__cards">
                <div className="muharir__cards-item">
                  <img
                    src="	https://storage.kun.uz/source/thumbnails/_medium/9/dEoXi7WzueYucQ6PU2vo6T5JDRd3VJyK_medium.jpg"
                    alt="muharir"
                  />
                  <div className="item-info">
                    <div id="time">
                      <DateRangeIcon className="icon" />
                      <p className="text-time">18:31/23.12.2022</p>
                    </div>
                    <h1 className="item-title">
                      2023 yildagi qo'shimcha dam olish kunlari belgilandi
                    </h1>
                  </div>
                </div>
                <div className="muharir__cards-item">
                  <img
                    src="	https://storage.kun.uz/source/thumbnails/_medium/9/dEoXi7WzueYucQ6PU2vo6T5JDRd3VJyK_medium.jpg"
                    alt="muharir"
                  />
                  <div className="item-info">
                    <div id="time">
                      <DateRangeIcon className="icon" />
                      <p className="text-time">18:31/23.12.2022</p>
                    </div>
                    <h1 className="item-title">
                      2023 yildagi qo'shimcha dam olish kunlari belgilandi
                    </h1>
                  </div>
                </div>
                <div className="muharir__cards-item">
                  <img
                    src="	https://storage.kun.uz/source/thumbnails/_medium/9/dEoXi7WzueYucQ6PU2vo6T5JDRd3VJyK_medium.jpg"
                    alt="muharir"
                  />
                  <div className="item-info">
                    <div id="time">
                      <DateRangeIcon className="icon" />
                      <p className="text-time">18:31/23.12.2022</p>
                    </div>
                    <h1 className="item-title">
                      2023 yildagi qo'shimcha dam olish kunlari belgilandi
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* songi-news */}
          <div className="songi-news">
            <div id="title-one">
              <a href="!#" className="crcle-box">
                <TripOriginIcon className="crcle-icon" />
                <h3 className="crcle-title">Songi yangiliklar</h3>
              </a>
            </div>
            <div className="songi-news__card">
              <div id="time">
                <DateRangeIcon className="icon" />
                <p className="text-time">09:00</p>
              </div>
              <h1 className="card-title">
                WSJ: Putin frontdagi vaziyat bo'yicha ko'pincha eskirgan
                ma'lumotlarni oladi
              </h1>
            </div>
            <div className="songi-news__card">
              <div id="time">
                <DateRangeIcon className="icon" />
                <p className="text-time">09:00</p>
              </div>
              <h1 className="card-title">
                WSJ: Putin frontdagi vaziyat bo'yicha ko'pincha eskirgan
                ma'lumotlarni oladi
              </h1>
            </div>
            <div className="songi-news__card">
              <div id="time">
                <DateRangeIcon className="icon" />
                <p className="text-time">09:00</p>
              </div>
              <h1 className="card-title">
                WSJ: Putin frontdagi vaziyat bo'yicha ko'pincha eskirgan
                ma'lumotlarni oladi
              </h1>
            </div>
            <div className="songi-news__card">
              <div id="time">
                <DateRangeIcon className="icon" />
                <p className="text-time">09:00</p>
              </div>
              <h1 className="card-title">
                WSJ: Putin frontdagi vaziyat bo'yicha ko'pincha eskirgan
                ma'lumotlarni oladi
              </h1>
            </div>
            <div className="songi-news__card">
              <div id="time">
                <DateRangeIcon className="icon" />
                <p className="text-time">09:00</p>
              </div>
              <h1 className="card-title">
                WSJ: Putin frontdagi vaziyat bo'yicha ko'pincha eskirgan
                ma'lumotlarni oladi
              </h1>
            </div>
            <div className="songi-news__card">
              <div id="time">
                <DateRangeIcon className="icon" />
                <p className="text-time">09:00</p>
              </div>
              <h1 className="card-title">
                WSJ: Putin frontdagi vaziyat bo'yicha ko'pincha eskirgan
                ma'lumotlarni oladi
              </h1>
            </div>
            <div className="songi-news__card">
              <div id="time">
                <DateRangeIcon className="icon" />
                <p className="text-time">09:00</p>
              </div>
              <h1 className="card-title">
                WSJ: Putin frontdagi vaziyat bo'yicha ko'pincha eskirgan
                ma'lumotlarni oladi
              </h1>
            </div>
            <div className="songi-news__card">
              <div id="time">
                <DateRangeIcon className="icon" />
                <p className="text-time">09:00</p>
              </div>
              <h1 className="card-title">
                WSJ: Putin frontdagi vaziyat bo'yicha ko'pincha eskirgan
                ma'lumotlarni oladi
              </h1>
            </div>
            <div className="songi-news__koproq">
              <h3>koproq yangiliklar</h3>
              <ArrowRightAltIcon className="icon-koproq" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
