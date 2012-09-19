//Application Window Component Constructor
function RecipeWindow(recipes) {
	//load component dependencies
	var RecipeView = require('ui/common/RecipeView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var recipeView = new RecipeView(recipes);
	self.add(recipeView);
	
	return self;
}

//make constructor function the public component interface
module.exports = RecipeWindow;
