import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ProfileSkills,
  ProfileSec,
  ProfileList,
  ProfileItem,
  Title,
  Span,
  Skills,
  SkillsDesc,
  Bar,
  BarTitle,
  BarPerc,
  BarParent,
  BarParentSpan,
} from './style.js';
const Profile = () => {
  const [ skills, setSkills ] = useState([]);
  useEffect(() => {
    axios.get('js/data.json').then((res) => setSkills(res.data.skills));
  }, []);
  const skillItems = skills.map((item) => {
    return (
      <Bar key={item.id}>
        <BarTitle>{item.title}</BarTitle>
        <BarPerc>{item.perc}</BarPerc>
        <BarParent>
          <BarParentSpan />
        </BarParent>
      </Bar>
    );
  });
  return (
    <ProfileSkills>
      <div className="container">
        <ProfileSec>
          <Title>My Profile</Title>
          <ProfileList>
            <ProfileItem>
              <Span>Name</Span>
              Hamza Nabil
            </ProfileItem>
          </ProfileList>
        </ProfileSec>

        <Skills>
          <Title>
            Some <span>skills</span>
          </Title>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis
            similique.
          </SkillsDesc>
          {skillItems}
        </Skills>
      </div>
    </ProfileSkills>
  );
};

export default Profile;
