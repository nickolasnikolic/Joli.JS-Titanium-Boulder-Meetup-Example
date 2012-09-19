//FirstView Component Constructor
function RecipeDetailView(recipe) {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();

	var label = Ti.UI.createLabel({
		top:10,
		text:recipe.name
	});
	self.add(label);
	
	var ingredientArray = JSON.parse(recipe.ingredients);
	var formattedIngredients = 'Ingredients:\n' + ingredientArray.join('\n');

	var ingredients = Ti.UI.createLabel({
		top:50,
		text:formattedIngredients
	});
	self.add(ingredients);
	
	return self;
}

module.exports = RecipeDetailView;
