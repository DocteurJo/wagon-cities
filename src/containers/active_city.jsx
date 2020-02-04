import { connect } from 'react-redux';
import React, { Component } from 'react';

class ActiveCity extends Component {
  render() {
    if (!this.props.activeCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    } else {
      const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
      return (
        <div className="active-city">
          <h3>{this.props.activeCity.name}</h3>
          <p>{this.props.activeCity.address}</p>
          <img src={url} alt="" width="100%" />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
