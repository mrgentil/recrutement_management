import React from "react";
import heroImage from "../../../assets/images/hero.svg";

const Hero = () => {
    return (
        <div className="home-header-container-hero">
            <div className="home-header-container-hero__left">
                <h1>Trouver l'emploi</h1>
                <h1>Cela correspond à votre vie</h1>
                <p>
                    Une équipe de développement de logiciels de premier ordre qui aide les propriétaires et les décideurs
                    à mettre en œuvre des initiatives numériques pour obtenir un succès financier durable.
                </p>
                <div className="home-header-container-hero__left-search">
                    <input
                        type="text"
                        className="home-header-container-hero__left-search__form"
                        placeholder="Trouver l'emploi souhaité"
                    />
                    <span className="home-header-container-hero__left-search__form--search-btn">
            <i className="fa fa-search" />
          </span>
                </div>
            </div>
            <div className="home-header-container-hero__right">
                <img src={heroImage} alt="hero img" />
            </div>
        </div>
    );
};

export default Hero;
