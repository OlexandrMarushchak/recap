const PIXI = require("pixi.js");
const Util = require("../Utils/Util");

function MainView(app, model) {
	//this.app = app;
	this.model = model;
	this.model.on("CHANGED", this.draw, this);
	
	this.graphics = new PIXI.Graphics();
	app.stage.addChild(this.graphics);
	this.graphics.interactive = true;
	
	this.draw();
	
	app.ticker.add(() => {
		this.graphics.rotation += 0.01;
	});
}
Util.CreateClass(MainView);

MainView.prototype.draw = function(){
	this.graphics.clear();
	this.graphics.beginFill(this.model.boxFillColor);
	this.graphics.drawRect(0, 0, this.model.boxWidth, this.model.boxHeight);
	this.graphics.endFill();
	this.graphics.pivot = new PIXI.Point(this.model.boxWidth / 2, this.model.boxHeight / 2);
	this.graphics.x = this.model.boxX;
	this.graphics.y = this.model.boxY;
}

module.exports = MainView;