import React from 'react';

interface HeroProps {
    title: string;
    subtitle: string;
    image: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
    return (
        <div className="hero">
            <img src={image} alt="Hero Image" />
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default Hero;