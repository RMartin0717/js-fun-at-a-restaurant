function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name,
    price,
    type,
  };
  return menuItem;
}

function addIngredients(newIngredient, ingredientArray) {
    ingredientArray;
    if (ingredientArray.includes(newIngredient)) {
      return ingredientArray;
    } else {
      ingredientArray.push(newIngredient);
      return ingredientArray;
    }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price * .9

}

function createRecipe(title, ingredients, type) {
  var recipe = {
   title,
   ingredients,
   type,
 };
 return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
