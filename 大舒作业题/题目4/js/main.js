window.onload = function(){
	//获取导航条
	var nav = document.getElementsByClassName('nav')[0];
	var ul = nav.getElementsByTagName('ul')[0];
	//设置导航条下面的li上的hover事件
	var lis = ul.childNodes;
	console.log(lis);
	for(var index in lis){
		var li = lis[index];
		if(li.nodeName == 'LI'){
			li.onmouseover = (function(li){
				return function(){
					var subItemUl = li.getElementsByTagName('UL');
					if(subItemUl.length)
						subItemUl[0].style.setProperty('display','block');
				}
			})(li);
			li.onmouseout = (function(li){
				return function(){
					var subItemUl = li.getElementsByTagName('UL');
					if(subItemUl.length)
						subItemUl[0].style.setProperty('display','none');
				}
			})(li);
		}
	}
};