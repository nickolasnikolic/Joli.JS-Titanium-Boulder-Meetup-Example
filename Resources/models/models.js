function Models(joli) {
	var _self = {};
	
	_self.recipe = new joli.model({
		table:		'recipes',
		columns: {
		  id:				'INTEGER PRIMARY KEY AUTOINCREMENT',
		  name:				'TEXT',
		  servings:			'INTEGER',
		  ingredients:		'TEXT',
		  directions:		'TEXT',
		  note:				'TEXT',
		  credits:			'TEXT'
		},
		methods: {
			numInCategory:  function(categoryName) {
				// search for the category name
				var category = joli.models.get('categories').findOneBy('name', categoryName);

				if (!category) {
				  throw 'Could not find a category with the name ' + categoryName + '!';
				} else {
					var category_ids = new joli.query()
					    .select('recipe_id')
					    .from('categories_recipes')
					    .where('category_id = ?', category.id)
					    .execute("array");
					
					return category_ids.length;
				}
			},
			numInType: function(typeName) {
				// search for the category name
				var type = joli.models.get('types').findOneBy('name', typeName);

				if (!type) {
				  throw 'Could not find a type with the name ' + typeName + '!';
				} else {
					var type_ids = new joli.query()
					    .select('recipe_id')
					    .from('types_recipes')
					    .where('type_id = ?', type.id)
					    .execute("array");
					
					return type_ids.length;
				}
			}
		},
		objectMethods: {
			types:  function() {
				// Simulating a many to many relationship
				
				// Get types 
				var item_ids = new joli.query()
				    .select('type_id')
				    .from('types_recipes')
				    .where('recipe_id = ?', this.id)
				    .execute("array");

				// Map the object array to a flat array to use for joli query
				var item_id_array = Object.keys(item_ids).map(function(key) { return [item_ids[key].type_id]; });
				
				var items = new joli.query()
					.select()
					.from('types')
					.whereIn('id', item_id_array)
					.execute();

				return items;
			},
			categories:  function() {
				// Simulating a many to many relationship
				
				// Get types 
				var category_ids = new joli.query()
				    .select('category_id')
				    .from('categories_recipes')
				    .where('recipe_id = ?', this.id)
				    .execute("array");

				// Map the object array to a flat array to use for joli query
				var category_id_array = Object.keys(category_ids).map(function(key) { return [category_ids[key].category_id]; });
				
				var categories = new joli.query()
					.select()
					.from('categories')
					.whereIn('id', category_id_array)
					.execute();

				return categories;
			}
    	}
    	
	});
	
	_self.type = new joli.model({
		table:		'types',
		columns: {
			id:		'INTEGER PRIMARY KEY AUTOINCREMENT',
			name:	'TEXT'
		},
		objectMethods: {
			recipes:  function() {
				// Simulating a many to many relationship
				
				// Get types 
				var recipe_ids = new joli.query()
				    .select('recipe_id')
				    .from('types_recipes')
				    .where('type_id = ?', this.id)
				    .execute("array");

				// Map the object array to a flat array to use for joli query
				var recipe_id_array = Object.keys(recipe_ids).map(function(key) { return [recipe_ids[key].recipe_id]; });
				
				var recipes = new joli.query()
					.select()
					.from('recipes')
					.whereIn('id', recipe_id_array)
					.execute();

				return recipes;
			}
		}
	});
	
	_self.category = new joli.model({
		table:		'categories',
		columns: {
			id:		'INTEGER PRIMARY KEY AUTOINCREMENT',
			name:	'TEXT'
		},
		objectMethods: {
			recipes:  function() {
				// Simulating a many to many relationship
				
				// Get types 
				var recipe_ids = new joli.query()
				    .select('recipe_id')
				    .from('categories_recipes')
				    .where('category_id = ?', this.id)
				    .execute("array");

				// Map the object array to a flat array to use for joli query
				var recipe_id_array = Object.keys(recipe_ids).map(function(key) { return [recipe_ids[key].recipe_id]; });
				
				var recipes = new joli.query()
					.select()
					.from('recipes')
					.whereIn('id', recipe_id_array)
					.execute();

				return recipes;
			}
		}
	});
	
	return _self;
	
}

module.exports = Models;