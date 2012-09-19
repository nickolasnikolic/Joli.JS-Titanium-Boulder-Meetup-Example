//Application Window Component Constructor
function CategoryWindow() {
	//load component dependencies
	var CategoryView = require('ui/common/CategoryView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var categoryView = new CategoryView();
	self.add(categoryView);
	
	return self;
}

//make constructor function the public component interface
module.exports = CategoryWindow;
