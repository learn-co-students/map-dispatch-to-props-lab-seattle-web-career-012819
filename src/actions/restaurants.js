export const addRestaurant = (restaurant) => {
  console.log("ADDRESTAURANT", restaurant)
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};
