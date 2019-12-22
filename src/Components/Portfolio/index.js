import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  PortfolioSection,
  PortfolioTitle,
  PortfolioList,
  PortfolioItem,
  ImageWrapper,
  Image,
  Overlay,
  OverlaySpan,
} from './style.js';
const Portfolio = () => {
  const [ images, setImages ] = useState([]);
  useEffect(() => {
    axios.get('js/data.json').then((res) => setImages(res.data.portfolio));
    axios.get('js/data.json').then((res) => console.log(res));
  }, []);
  const PortfolioImages = images.map((item) => {
    return (
      <ImageWrapper key={item.id}>
        <Image src={item.image} alt="image" />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImageWrapper>
    );
  });
  return (
    <PortfolioSection>
      <PortfolioTitle>
        <span>My</span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div>{PortfolioImages}</div>
    </PortfolioSection>
  );
};

export default Portfolio;
