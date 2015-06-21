



model.Product.collectionMethods.deleteOffSale = function() {
	mySet = ds.Product.query('classified == "1"');
	mySet.forEach(
	    function() {
	        this.remove();
	    }
	);
};
