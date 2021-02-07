

function createRestaurant(name) {
  var restaurant = {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurant
}

function addMenuItem(restaurant, item) {
  if (restaurant.menus.breakfast.includes(item) || restaurant.menus.lunch.includes(item) || restaurant.menus.dinner.includes(item)) {
    return restaurant;
  } else {
    if (item.type === "breakfast") {
      restaurant.menus.breakfast.push(item);
    }
    if (item.type === "lunch") {
      restaurant.menus.lunch.push(item);
    }
    if (item.type === "dinner") {
      restaurant.menus.dinner.push(item);
    }
    return restaurant;
  }
}



function removeMenuItem(restaurant, itemName, type) {
  for (var i = 0; i < restaurant.menus[type].length; i++) {
    if (restaurant.menus[type][i].name === itemName) {
      restaurant.menus[type].splice([i]);
      return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`
    }
  }
      return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
