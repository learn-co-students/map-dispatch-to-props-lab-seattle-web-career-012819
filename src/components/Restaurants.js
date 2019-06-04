import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {

    let restaurants = this.props.restaurants.map((restaurant, index) => {console.log(restaurant)
    return <li key={index}>{restaurant.name}</li>
      })

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps)(Restaurants);
