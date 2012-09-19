//Application Window Component Constructor
function RecipeDetailWindow(recipe) {
	//load component dependencies
	var RecipeDetailView = require('ui/common/RecipeDetailView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var recipeDetailView = new RecipeDetailView(recipe);
	self.add(recipeDetailView);
	
	return self;
}

//make constructor function the public component interface
module.exports = RecipeDetailWindow;
