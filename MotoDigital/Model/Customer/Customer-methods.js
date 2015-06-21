

model.Customer.methods.findUser = function(userEmail) {
	var found = ds.Customer.find("email == :1", userEmail);
	return found;
};
model.Customer.methods.findUser.scope = 'public';


