export const addRestaurant = (restaurant) => {
  console.log(restaurant)
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};
