import React from 'react';
import { AboutSection, Info, Title, InfoDir, InfoDes } from './style.js';
const About = () => {
  return (
    <AboutSection>
      <div className="container">
        <Info>
          <Title>
            <span>This is</span> Me
          </Title>
          <InfoDir>Creative Director</InfoDir>
          <InfoDes>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est maxime quibusdam quaerat nihil aliquid
            aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDes>
          <InfoDes>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil
            aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDes>
        </Info>
      </div>
    </AboutSection>
  );
};

export default About;
