import React from 'react';
import { SocialMediaSection, Social, Icon, P, Span } from './style.js';
import axios from 'axios';
class SocialMedia extends React.Component {
  state = {
    social: [],
  };
  componentDidMount() {
    axios.get('js/data.json').then((res) => this.setState({ social: res.data.social }));
    axios.get('js/data.json').then((res) => console.log(res));
  }
  render() {
    const { social } = this.state;
    const socialList = social.map((item, index) => {
      return (
        <Social item={item.id} key={item.id}>
          <Icon className={item.icon} />
          <P>
            <Span>{item.title}</Span>
            <Span>{item.body}</Span>
          </P>
        </Social>
      );
    });
    return <SocialMediaSection>{socialList}</SocialMediaSection>;
  }
}

export default SocialMedia;
