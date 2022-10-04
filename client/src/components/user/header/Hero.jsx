import React from "react";
import heroImage from "../../../assets/images/hero.svg";

const Hero = () => {
    return (
        <div className="home-header-container-hero">
            <div className="home-header-container-hero__left">
                <h1>Trouver l'emploi</h1>
                <h1>Cela correspond à votre vie</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
                    praesentium veniam voluptatum reiciendis consequatur iusto,
                    repudiandae aut, fuga, cupiditate similique enim est reprehenderit
                    maiores distinctio?
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
