const PIXI = require("pixi.js");
const MainView = require("../Views/MainView");
const MainModel = require("../Models/MainModel");
const Util = require("../Utils/Util");

function Main() {
	const app = new PIXI.Application({ backgroundColor: 0x0000FF });
	const container = document.getElementById("canvas");
	container.appendChild(app.view);
	
	this.mainModel = new MainModel();
	
	this.mainView = new MainView(app, this.mainModel);
	this.mainView.graphics.on("pointerdown", this.onShapeClick, this);
}
Util.CreateClass(Main);

Main.prototype.onShapeClick = function(e){
	this.mainModel.setRandomSize();
}

new Main();

module.exports = Main;