"use strict";

export class PraiseButton{
		constructor(num){
			this.num=num;
		}
		addNum(){
			this.num = (this.num>=10) ? 1 : (this.num)+1;
			return this.num;
		}
		clicks(target,classname){
			let big=target.find('.big');
			big.bind('click',function(){
				this.addNum();
				let op=target.find('p');
				op.html(this.num);
				if(this.num>=10){
					target.addClass(classname);
				}else{
					target.removeClass(classname);
				} 
			}.bind(this));
		}
	}

	