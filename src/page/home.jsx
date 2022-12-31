import React from "react";
import "../style/home.scss";
import "./../style/all.scss";

// import icons
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
// import components
import Advert from "../components/Advert";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Dolzarb from "../components/Dolzarb";
import Intervyu from "../components/Intervyu";
import War from "../components/War";
import Maqola from "../components/Maqola";
import Biznes from "../components/Biznes";
import Online from "../components/Online";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Advert />
      <Navbar />
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Header />
      {/* dolzarb */}
      <Dolzarb />
      {/* .intervyu */}
      <Intervyu />
      {/* war */}
      <War />
      {/* maqola */}
      <Maqola />
      {/* biznes */}
      <Biznes />
      {/* online */}
      <Online />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
