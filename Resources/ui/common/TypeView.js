//FirstView Component Constructor
function TypeView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	// Grab ALL the recipes with no conditions
	var types = Globals.models.type.all();

	var type_data = Object.keys(types).map( function(key) {

		var row = Ti.UI.createTableViewRow({
			title:types[key].name + "(" + Globals.models.recipe.numInType(types[key].name) + ")",
			type:types[key]
		});
		row.addEventListener('click', function(e) {
			var recipes = this.type.recipes();
			
			var Window = require('ui/RecipeWindow');
			Globals.navController.open(new Window(recipes));
		});
		return row;
	});
	
	var tableview = Titanium.UI.createTableView({
		data:type_data
	});
	self.add(tableview);
	
	return self;
}

module.exports = TypeView;
