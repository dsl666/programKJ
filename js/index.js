// nav下的tab切换---------------------------------


	var navAss = document.getElementsByClassName("navAs")[0].children;
	console.log(navAss);
	var navTabBoxs=$("navTabBox").children;
	console.log(navTabBoxs);

//2 给每个a添加一个index,方便找到
	for(var i=0;i<navAss.length;i++){
		navAss[i].setAttribute("index",i);
		//3事件赋值 鼠标滑过的时候
		navAss[i].addEventListener("mouseover",function(){
			// console.log(this);
			this.style.background="white";
			this.style.color="red";
		
			//3.1 改变隐藏的内容
			
			var index=this.getAttribute("index");
			navTabBoxs[index].style.display="block";

			//3.1.1 当鼠标进入tab后
			navTabBoxs[index].onmouseover=()=>{
				this.style.background="white";
				this.style.color="red";
				navTabBoxs[index].style.display="block";
			}

			navTabBoxs[index].onmouseout=()=>{
				this.style.background="";
				this.style.color="";
				navTabBoxs[index].style.display="none";
			}

		},false);

		// // 	//4事件赋值 鼠标离开的时候
		navAss[i].addEventListener("mouseout",function(){
			
			this.style.background="";
			this.style.color="";
			
			//4.1改变隐藏的内容

			var index=this.getAttribute("index");
			navTabBoxs[index].style.display="none";			
		},false);
	}




// bannerTab切换--------------------------
//1先拿到10个a

var as = document.getElementsByClassName("bannerTab")[0].children;

var tabSweepBoxs=$("tabSweepBox").children;

//2 给每个a添加一个index,方便找到
	for(var i=0;i<as.length;i++){
		as[i].setAttribute("index",i);

		//3事件赋值 鼠标滑过的时候
		as[i].addEventListener("mouseover",function(){
			// console.log(this);
			this.style.background="red";
		
			//3.1 改变隐藏的内容
			
			var index=this.getAttribute("index");
			tabSweepBoxs[index].style.display="block";	

			//3.1.1 当鼠标进入tab后
			tabSweepBoxs[index].onmouseover=()=>{
				this.style.color="red";
				tabSweepBoxs[index].style.display="block";
			}

			tabSweepBoxs[index].onmouseout=()=>{
				this.style.color="";
				tabSweepBoxs[index].style.display="none";
			}		
		},false);

			//4事件赋值 鼠标离开的时候
		as[i].addEventListener("mouseout",function(){
			
			this.style.background="";
			
			//4.1改变隐藏的内容

			var index=this.getAttribute("index");
			tabSweepBoxs[index].style.display="none";			
		},false);
	}



// 精灵小图标----------------------
	var demonas=document.getElementsByClassName("demon")[0].children;
	var iconfonts=document.getElementsByClassName("iconfont");
	var spanss=document.getElementsByClassName("spans");
	console.log(demonas);
	console.log(iconfonts);

	for(var i=0;i<demonas.length;i++){
			demonas[i].setAttribute("index",i);

			demonas[i].onmouseover=function(){
				this.style.background="red";

				var index=this.getAttribute("index");
				iconfonts[index].style.display="none";
				spanss[index].style.display="block";
			}

			demonas[i].onmouseout=function(){
				this.style.background="";

				var index=this.getAttribute("index");
				iconfonts[index].style.display="block";
				spanss[index].style.display="none";
			}

	}







function $(str){
	return document.getElementById(str);
}