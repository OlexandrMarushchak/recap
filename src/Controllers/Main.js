const PIXI = require("pixi.js");
const MainView = require("../Views/MainView");
const MainModel = require("../Models/MainModel");

class Main {
	constructor() {
		const app = new PIXI.Application({ backgroundColor: 0x0000FF });
		const container = document.getElementById("canvas");
		container.appendChild(app.view);
		
		this.mainModel = new MainModel(app);
		
		this.mainView = new MainView(app, this.mainModel);
		this.mainView.graphics.on("pointerdown", this.onShapeClick, this);
	}
	
	onShapeClick(e) {
		this.mainModel.setRandomParameters();
	}
}

new Main();

module.exports = Main;