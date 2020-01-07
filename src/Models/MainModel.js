const PIXI = require("pixi.js");

class MainModel extends PIXI.utils.EventEmitter {
	constructor(app) {
		super();
		
		this.app = app;
		
		this.boxWidth = 100;
		this.boxHeight = 100;
		this.boxRotation = 0.01;
		this.boxFillColor = "0xFF0000";
		this.boxX = 200;
		this.boxY = 200;
	}
	
	setRandomParameters() {
		this.boxWidth = (Math.random() * 1 + 0.5) * 100;
		this.boxHeight = (Math.random() * 1 + 0.5) * 100;
		
		this.boxFillColor = Math.floor(Math.random() * 16777215).toString(16);
		
		this.boxX = this.app.renderer.width * Math.random();
		this.boxY = this.app.renderer.height * Math.random();
		
		this.emit("CHANGED");
	}
}

module.exports = MainModel;