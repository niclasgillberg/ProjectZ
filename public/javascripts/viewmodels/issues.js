define(['knockout'], function(ko){
	var ctor = function(){
		this.issues = ko.observableArray();
	}

	return ctor;
});