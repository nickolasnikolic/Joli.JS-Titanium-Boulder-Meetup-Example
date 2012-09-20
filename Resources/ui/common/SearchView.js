//FirstView Component Constructor
function SearchView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
    
    var search = Titanium.UI.createSearchBar({
        barColor:'#000', 
        showCancel:false,
        height:43,
        top:0,
    });
    self.add(search);
    
    search.addEventListener('change', function(e) {
        // Only process if more than 3 chars
        if ( e.value.length >= 3 ) {
            
            var recipes = Globals.models.recipe.all({
               where: {
                   'name LIKE ?':'%' + e.value + '%'
               } 
            });
            
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
            
            tableview.setData(recipe_data);
        }
    });
	
	var tableview = Titanium.UI.createTableView({
	    top:44
    });
    self.add(tableview);
	
	return self;
}

module.exports = SearchView;
