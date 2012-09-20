//Application Window Component Constructor
function SearchWindow() {
    //load component dependencies
    var SearchView = require('ui/common/SearchView');
        
    //create component instance
    var self = Ti.UI.createWindow({
        backgroundColor:'#ffffff'
    });
        
    //construct UI
    var searchView = new SearchView();
    self.add(searchView);
    
    return self;
}

//make constructor function the public component interface
module.exports = SearchWindow;
