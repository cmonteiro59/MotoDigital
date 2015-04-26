

model.Settings.methods.addUser = function(userName, password, fullName) {
	var newUser = directory.addUser(userName, password, fullName);
	newUser.putInto("Customer");
	directory.save(); // do not forget to save the changes
	return {success: true};
};
model.Settings.methods.addUser.scope = 'public';
