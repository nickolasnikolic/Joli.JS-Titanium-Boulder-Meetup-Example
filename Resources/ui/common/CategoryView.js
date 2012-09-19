//FirstView Component Constructor
function CategoryView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	// Grab ALL the recipes with no conditions
	var categories = Globals.models.category.all();

	var category_data = Object.keys(categories).map( function(key) {

		var row = Ti.UI.createTableViewRow({
			title:categories[key].name + "(" + Globals.models.recipe.numInCategory(categories[key].name) + ")",
			category:categories[key]
		});
		row.addEventListener('click', function(e) {
			var recipes = this.category.recipes();
			
			var Window = require('ui/RecipeWindow');
			Globals.navController.open(new Window(recipes));
		});
		return row;
	});
	
	var tableview = Titanium.UI.createTableView({
		data:category_data
	});
	self.add(tableview);
	
	return self;
}

module.exports = CategoryView;
