//FirstView Component Constructor
function HomeView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var recipe_button = Ti.UI.createButton({
		color:'#000000',
		title:L('browse'),
		height:'auto',
		width:'auto',
		top:20
	});
	self.add(recipe_button);
	
	//Add behavior for UI
	recipe_button.addEventListener('click', function(e) {
		// Grab ALL the recipes with no conditions
		var recipes = Globals.models.recipe.all();
		
		var Window = require('ui/RecipeWindow');
		Globals.navController.open(new Window(recipes));
	});
	
	var type_button = Ti.UI.createButton({
		color:'#000000',
		title:L('types'),
		height:'auto',
		width:'auto',
		top:80
	});
	self.add(type_button);
	
	//Add behavior for UI
	type_button.addEventListener('click', function(e) {
		var Window = require('ui/TypeWindow');
		Globals.navController.open(new Window());
	});
	
	var category_button = Ti.UI.createButton({
		color:'#000000',
		title:L('categories'),
		height:'auto',
		width:'auto',
		top:140
	});
	self.add(category_button);
	
	//Add behavior for UI
	category_button.addEventListener('click', function(e) {
		var Window = require('ui/CategoryWindow');
		Globals.navController.open(new Window());
	});
	
	return self;
}

module.exports = HomeView;
