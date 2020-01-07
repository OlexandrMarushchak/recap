const PIXI = require("pixi.js");
const Util = require("../Utils/Util");

function MainModel() {
	PIXI.utils.EventEmitter.call(this);
	
	this.boxWidth = 100;
	this.boxHeight = 100;
	this.boxRotation = 0.01;
	this.boxFillColor = "FF0000";
	this.boxX = 200;
	this.boxY = 200;
}
Util.CreateClass(MainModel, PIXI.utils.EventEmitter);

MainModel.prototype.setRandomSize = function() {
	this.boxWidth = (Math.random() * 1 + 0.5) * 100;
	this.boxHeight = (Math.random() * 1 + 0.5) * 100;
	
	this.emit("CHANGED");
}

module.exports = MainModel;