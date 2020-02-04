import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import City from './city';

import { setCities } from '../actions/index';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <ul>
        {this.props.cities.map((city) => {
          return (
            <City key={city.name} city={city} />
          );
        })}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch);
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
