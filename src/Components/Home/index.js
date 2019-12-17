import React from 'react';
import { HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, HomeBtn } from './style.js';
const Home = () => {
  return (
    <HomeSection>
      <div class="container">
        <HomeInformation>
          <HomeTitle class="margin-bottom">Hamza Nabil</HomeTitle>
          <HomeInfo>Creative Director</HomeInfo>
          <HomeDesc>
            Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to
            Web and Mobile. Let us work together. Thank you.
          </HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
};

export default Home;
