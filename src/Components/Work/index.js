import React, { Component } from 'react';
import axios from 'axios';
import { WorkSection, WorkTitle, WorkPart, Icon, PartTitle, Line, PartDesc } from './style.js';
class Work extends Component {
  state = {
    works: [],
  };
  componentDidMount() {
    axios.get('js/data.json').then((res) => this.setState({ works: res.data.works }));
    axios.get('js/data.json').then((res) => console.log(res));
  }
  render() {
    const { works } = this.state;
    const worksList = works.map((item, index) => {
      return (
        <WorkPart first={item.id} key={item.id}>
          <Icon className={item.icon_name} />
          <PartTitle>{item.title}</PartTitle>
          <Line />
          <PartDesc>{item.body}</PartDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <span>My</span> Work
          </WorkTitle>
          {worksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
