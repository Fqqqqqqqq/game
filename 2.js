// JavaScript Document
"use strict";
var game = {
	scroe: 0,
	flag: false,//界面锁
	init: function(){
		this.initDate();
		this.handle();
	},
	initDate: function(){
		this.el = document.getElementById('game');
		this.oGo = this.el.getElementsByClassName('go')[0];
		this.oMain = this.el.getElementsByClassName('main')[0];
	},
	move: function(){
		this.timer = setInterval(this.render.bind(this),12);	
	},
	
	render: function(){//方块下落
		this.oMain.style.top = this.oMain.offsetTop + 5 + 'px';
		if(this.oMain.offsetTop >= 0){
		this.renderRow();
		this.oMain.style.top = '-150px';
		//setInterval(this.renderRow.bind(this), 1000);
		}
		
		//this.judgeLastRow();
		
	},
	renderRow: function(){//生成一行方块
		var index = Math.floor( Math.random()*4);
		var oRow = document.createElement('div');
		oRow.setAttribute('class','row');
				
		for(var i = 0;i < 4;i ++){
			var oCol = document.createElement('div');
			oCol.setAttribute('class','col');
			oRow.appendChild(oCol);
		}
		var oTarget = oRow.childNodes[index];
		oTarget.classList.add('target');
		this.oMain.insertBefore(oRow,this.oMain.childNodes[0]);
	},
	
	handle: function(){//判断游戏是否结束
		this.handleStart();
		this.handleTarget();
	},
		
	handleStart: function(){
		var a = this;
		
		this.oGo.onclick = function(){
			this.style.display = 'none';
			a.flag = true;
			a.move();
		};
	},
		
	handleTarget: function(){
		var b = this;
		this.oMain.onclick = function(e){
			var dom = e.target;
			var isTarget = dom.classList.contains('target');
			
			if(!b.flag){return;}
			
			if(isTarget){
				b.scroe ++;
				dom.classList.remove('target');
				dom.style.backgroundColor = '#ccc';
			}else{
				b.end();
			}
		};
	},
		
	//judgeLastRow: function(){
		//var  rowNum = this.oMain.childNodes.length;
		
		//if(rowNum === 6){
			//var oLastRow = this.oMain.childNodes[rowNum - 1];
			
			//for(var i = 0; i < 4; i ++){
				//var dom = oLastRow.childNodes[i];
				//var isContainTarget = dom.classList.contains('target');
				
				//if(isContainTarget){
					//this.end();
					//break;
				//}
			//}
			
			//this.oMain.removeChild(oLastRow);
		//}
	//},
		
	end: function(){//游戏结束
		clearInterval(this.timer);
		//console.log('end');
		alert('游戏结束，你的得分是：' + this.scroe);
	},	
	
};

game. init();
