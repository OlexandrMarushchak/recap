function Util() {

};

Util.CreateClass = function(object, inherits_from) {
	if(inherits_from != null)
		object.prototype = Object.create(inherits_from.prototype);
	object.prototype.constructor = object;
};

module.exports = Util;
