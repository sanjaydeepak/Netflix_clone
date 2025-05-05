import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/Navbar/TitleCard/TitleCard"; // ✅ Corrected import path
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            "The Protector" is a Turkish fantasy series where a young man,
            Hakan, discovers he's connected to a secret ancient order tasked
            with protecting Istanbul from an immortal enemy, and must learn to
            use his powers to save the city.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="More Info" />
              More Info
            </button>
          </div>
          <TitleCard />
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title="Blockbuster Movies" category="top_rated" />
        <TitleCard title="Anime " genreId="16" language="ja" />
        <TitleCard title="Action Movies " genreId="28" language="ja" />
        <TitleCard title="Comedy Movies" genreId="35" language="ja" />
        <TitleCard title="Only on Netflix" category="popular" />
        <TitleCard title="Upcoming" category="upcoming" />
        <TitleCard title="Top Picks for You" category="now_playing" />
        {/* Random Anime Images! */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
