import React, { Component } from 'react';
import CityList from './city_list';

class City extends Component {
  render() {
    return (
      <div className="list-group-item"> {this.props.city.name} </div>
    );
  }
}

export default City;
