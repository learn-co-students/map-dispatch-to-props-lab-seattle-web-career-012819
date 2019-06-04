import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    }, () => console.log(this.state.name));
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    }, () => console.log(this.state.location));
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.dispatch(addRestaurant({name: this.state.name, location: this.state.location}))
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapStateToProps = state => {
  console.log(state)
  return {
    ...this.state,
    restaurants: {
      name: this.props.name, 
      location: this.state.location
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: () => {
      dispatch(addRestaurant())
    }
  }
}

//connect this component by wrapping RestaurantInput below
// export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInput)
export default connect()(RestaurantInput)
