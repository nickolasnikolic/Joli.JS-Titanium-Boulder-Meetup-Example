//Application Window Component Constructor
function TypeWindow() {
	//load component dependencies
	var TypeView = require('ui/common/TypeView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var typeView = new TypeView();
	self.add(typeView);
	
	return self;
}

//make constructor function the public component interface
module.exports = TypeWindow;
