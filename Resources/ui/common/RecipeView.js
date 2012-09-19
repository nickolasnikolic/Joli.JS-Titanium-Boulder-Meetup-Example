//FirstView Component Constructor
function RecipeView(recipes) {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();

	var recipe_data = Object.keys(recipes).map( function(key) {

		var row = Ti.UI.createTableViewRow({
			title:recipes[key].name
		});
		row.addEventListener('click', function(e) {
			var this_recipe = Globals.models.recipe.findOneBy('name', this.title);
			
			var Window = require('ui/RecipeDetailWindow');
			Globals.navController.open(new Window(this_recipe));
		});
		return row;
	});
	
	var tableview = Titanium.UI.createTableView({
		data:recipe_data
	});
	self.add(tableview);
	
	return self;
}

module.exports = RecipeView;
