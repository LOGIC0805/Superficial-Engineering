	var attraction_str = new Array();
	var pygg = "";
//	var lastLog;
//	console.oldLog = console.log;
//	console.log = function(str) {
//		console.oldLog(str);
//		lastLog = str;
//	}
//	 
//	console.log("Hello, Neo");
//	document.write(lastLog);

    
	function judge(number){
	//	alert(number + " 38391 "+(number in attraction));
		//alert(attraction);
			if(attraction_str.indexOf(number) > -1){
				return false;
			}
			else{
				attraction_str.push(number) ;
				return true;
			}
		}
	
	var s = 0 ;
	//下面菜单栏的添加格子函数
	function cccc() {
		var s;
		var spot = document.getElementsByClassName("spot");
		var box2 = document.getElementById("box2");
		for(var i = 0; i < spot.length; i++) {
			spot[i].num = i;
			spot[i].onclick = function() {
				//alert(judge(this.num)+"  "+this.num);
				if(judge(this.num)){
				var div = document.createElement("div");
				div.style.width = "20%";
				div.style.height = "100%";
				div.style.backgroundColor = "#ABB2B9";
				div.style.overflow = "hidden";
				//div.style.position = "relative";
				//						div.style.border = "1px soild black";
				div.style.display = "inline-block";
				div.style.float = "left";
				div.style.borderRight = "thin soild gray";
				var img =document.createElement("img");
				//img.style.overflow = "hidden";
				img.src ="../static/Third/"+ picture90[ this.num + 1];
				div.appendChild(img);
				box2.appendChild(div);
				}
				else{
					alert("景点 "+str[this.num]+" 已经在您的菜单栏里啦！");
				}
			}
			pygg += attraction_str[length-1] + " ";
			document.getElementById('list').value = pygg;
		}
	}
	


	var ten_spots;
	//点击旅游景点后右边栏初始化
	function dddd() {
		crid.placeholder = "请输入旅游景点";
		crid.value = "";
		menu.innerHTML = ten_spots;
		cccc();
	}
	window.onload = function() {
		var menu = document.getElementById("menu");
		ten_spots = menu.innerHTML;
		var add_details;
		cccc();
		var crid = document.getElementById("crid");
		var attraction = document.getElementById("attraction");
		var address = document.getElementById("address");
		attraction.onclick = function() {
			crid.placeholder = "请输入旅游景点";
			crid.value = "";
			menu.innerHTML = ten_spots;
			cccc();
		}
		address.onclick = function() {
			crid.placeholder = "请输入住宿地址";
			crid.value = "";
			menu.innerHTML = "<iframe id='frame' src='../static/Third/third_demo02.html'  frameborder='0'  width='100%' height='100%' > </iframe>";
		}
		var submit = document.getElementById("submit");
		submit.onclick = function() {
//			alert(attraction_str);
//			alert(attraction);
			
		    
			
		}

	}
	//创建一个储存上海景点的数组
	var str = new Array(
		'外滩',
		'上海人民广场',
		'上海市黄浦区豫园', //豫园
		'东方明珠广播电视塔',
		'南京路步行街', //上海市黄浦区山东中路33号
		'新天地', //上海市黄浦区马当路245号
		'南翔古镇',
		'枫泾古镇',
		'召稼楼古镇',
		'七宝老街',
		'广富林文化遗址', //上海市广富林文化遗址
		'朱家角',
		'古猗园',
		'田子坊', //上海田子坊
		'复旦大学(邯郸校区)',
		'华东师范大学(中北校区)',
		'华东师范大学(闵行校区)',
		'上海市闵行区东川路800号', //上海交通大学
		'泰晤士小镇', //上海泰晤士小镇
		'宋庆龄陵园', //上海宋庆龄陵园
		'鲁迅公园', //上海鲁迅公园
		'顾村公园',
		'长风公园', //和华师大冲突
		'世纪公园', //上海世纪公园
		'吴淞炮台湾湿地森林公园', //上海吴淞炮台湾湿地森林公园
		'上海城市规划馆',
		'中华艺术宫',
		'杜莎夫人蜡像馆', //上海杜莎夫人蜡像馆
		'辰山植物园',
		'上海植物园',
		'淀山湖大道风景区', //上海朱家角古镇旅游区
		'滴水湖', //上海滴水湖
		'周公馆', //上海周公馆
		'上海博物馆',
		'佘山国家森林公园',
		'上海动物园',
		'上海野生动物园',
		'上海海洋水族馆',
		'上海科技馆',
		'碧海金沙',
		'上海欢乐谷',
		'锦江乐园',
		'东方绿舟',
		'上海迪士尼度假区');
	var str2 = new Array(
		'上海外滩',
		'上海市黄浦区人民大道185号',
		'豫园', //豫园
		'上海市东方明珠广播电视塔',
		'上海市黄浦区山东中路33号', //上海市黄浦区山东中路33号
		'上海市黄浦区马当路245号', //上海市黄浦区马当路245号
		'南翔古镇',
		'枫泾古镇',
		'召稼楼古镇',
		'七宝老街',
		'上海市广富林文化遗址', //上海市广富林文化遗址
		'朱家角',
		'古猗园',
		'上海田子坊', //上海田子坊
		'复旦大学(邯郸校区)',
		'上海市普陀区华东师范大学(中北校区)',//上海市普陀区华东师范大学(中北校区)
		'华东师范大学(闵行校区)',
		'上海市闵行区东川路800号', //上海交通大学
		'上海泰晤士小镇', //上海泰晤士小镇
		'上海宋庆龄陵园', //上海宋庆龄陵园
		'上海鲁迅公园', //上海鲁迅公园
		'顾村公园',
		'长风公园', //和华师大冲突
		'上海世纪公园', //上海世纪公园
		'上海吴淞炮台湾湿地森林公园', //上海吴淞炮台湾湿地森林公园
		'上海城市规划馆',
		'中华艺术宫',
		'上海杜莎夫人蜡像馆', //上海杜莎夫人蜡像馆
		'辰山植物园',
		'上海植物园',
		'上海朱家角古镇旅游区', //上海朱家角古镇旅游区
		'上海滴水湖', //上海滴水湖
		'上海周公馆', //上海周公馆
		'上海博物馆',
		'佘山国家森林公园',
		'上海动物园',
		'上海野生动物园',
		'上海海洋水族馆',
		'上海科技馆',
		'碧海金沙',
		'上海欢乐谷',
		'锦江乐园',
		'东方绿舟',
		'上海迪士尼度假区');
	var str1 = new Array(
		'上海市黄浦区外滩',
		'上海市黄浦区上海人民广场',
		'上海市黄浦区豫园', //豫园
		'上海市浦东新区东方明珠广播电视塔',
		'上海市黄浦区南京路步行街', //上海市黄浦区山东中路33号
		'上海市黄浦区新天地时尚', //上海市黄浦区马当路245号
		'上海市嘉定区南翔古镇',
		'上海市金山区枫泾古镇',
		'上海市闵行区召稼楼古镇',
		'上海市闵行区七宝老街',
		'上海市松江区广富林文化遗址', //上海市广富林文化遗址
		'上海市青浦区上海朱家角古镇旅游区',
		'上海市嘉定区古猗园',
		'上海市黄浦区田子坊', //上海田子坊
		'上海市杨浦区复旦大学(邯郸校区)',
		'上海市普陀区华东师范大学(中北校区)',//上海市普陀区华东师范大学(中北校区)
		'上海市闵行区华东师范大学(闵行校区)',
		'上海市闵行区上海交通大学', //上海交通大学
		'上海市松江区泰晤士小镇', //上海泰晤士小镇
		'上海市长宁区宋庆龄陵园', //上海宋庆龄陵园
		'上海市虹口区鲁迅公园', //上海鲁迅公园
		'上海市宝山区顾村公园',
		'上海市普陀区长风公园', //和华师大冲突
		'上海市浦东新区世纪公园', //上海世纪公园
		'上海市宝山区吴淞炮台湾湿地森林公园', //上海吴淞炮台湾湿地森林公园
		'上海市黄浦区上海城市规划展示馆',
		'上海市浦东新区中华艺术宫',
		'上海市黄浦区上海杜莎夫人蜡像馆(新世界城店)', //上海杜莎夫人蜡像馆
		'上海市松江区辰山植物园',
		'上海市徐汇区上海植物园',
		'上海市青浦区淀山湖大道风景区', //上海朱家角古镇旅游区
		'上海市浦东新区滴水湖', //上海滴水湖
		'上海市黄浦区周公馆', //上海周公馆
		'上海市黄浦区上海博物馆',
		'上海市松江区佘山国家森林公园',
		'上海市长宁区上海动物园',
		'上海市浦东新区上海野生动物园',
		'上海市浦东新区上海海洋水族馆',
		'上海市浦东新区上海科技馆',
		'上海市奉贤区碧海金沙',
		'上海市松江区上海欢乐谷',
		'上海市闵行区锦江乐园',
		'上海市青浦区东方绿舟',
		'上海市浦东新区上海迪士尼度假区');
	var picture140 = new Array(
		'PICTURE/140/0.jpg',
		'PICTURE/140/1.jpg',
		'PICTURE/140/2.jpg',
		'PICTURE/140/3.jpg',
		'PICTURE/140/4.jpg',
		'PICTURE/140/5.jpg',
		'PICTURE/140/6.jpg',
		'PICTURE/140/7.jpg',
		'PICTURE/140/8.jpg',
		'PICTURE/140/9.jpg',
		'PICTURE/140/10.jpg',
		'PICTURE/140/11.jpg',
		'PICTURE/140/12.jpg',
		'PICTURE/140/13.jpg',
		'PICTURE/140/14.jpg',
		'PICTURE/140/15.jpg',
		'PICTURE/140/16.jpg',
		'PICTURE/140/17.jpg',
		'PICTURE/140/18.jpg',
		'PICTURE/140/19.jpg',
		'PICTURE/140/20.jpg',
		'PICTURE/140/21.jpg',
		'PICTURE/140/22.jpg',
		'PICTURE/140/23.jpg',
		'PICTURE/140/24.jpg',
		'PICTURE/140/25.jpg',
		'PICTURE/140/26.jpg',
		'PICTURE/140/27.jpg',
		'PICTURE/140/28.jpg',
		'PICTURE/140/29.jpg',
		'PICTURE/140/30.jpg',
		'PICTURE/140/31.jpg',
		'PICTURE/140/32.jpg',
		'PICTURE/140/33.jpg',
		'PICTURE/140/34.jpg',
		'PICTURE/140/35.jpg',
		'PICTURE/140/36.jpg',
		'PICTURE/140/37.jpg',
		'PICTURE/140/38.jpg',
		'PICTURE/140/39.jpg',
		'PICTURE/140/40.jpg',
		'PICTURE/140/41.jpg',
		'PICTURE/140/42.jpg',
		'PICTURE/140/43.jpg',
		'PICTURE/140/44.jpg'
	);
	var picture90 = new Array(
		'PICTURE/90/0.jpg',
		'PICTURE/90/1.jpg',
		'PICTURE/90/2.jpg',
		'PICTURE/90/3.jpg',
		'PICTURE/90/4.jpg',
		'PICTURE/90/5.jpg',
		'PICTURE/90/6.jpg',
		'PICTURE/90/7.jpg',
		'PICTURE/90/8.jpg',
		'PICTURE/90/9.jpg',
		'PICTURE/90/10.jpg',
		'PICTURE/90/11.jpg',
		'PICTURE/90/12.jpg',
		'PICTURE/90/13.jpg',
		'PICTURE/90/14.jpg',
		'PICTURE/90/15.jpg',
		'PICTURE/90/16.jpg',
		'PICTURE/90/17.jpg',
		'PICTURE/90/18.jpg',
		'PICTURE/90/19.jpg',
		'PICTURE/90/20.jpg',
		'PICTURE/90/21.jpg',
		'PICTURE/90/22.jpg',
		'PICTURE/90/23.jpg',
		'PICTURE/90/24.jpg',
		'PICTURE/90/25.jpg',
		'PICTURE/90/26.jpg',
		'PICTURE/90/27.jpg',
		'PICTURE/90/28.jpg',
		'PICTURE/90/29.jpg',
		'PICTURE/90/30.jpg',
		'PICTURE/90/31.jpg',
		'PICTURE/90/32.jpg',
		'PICTURE/90/33.jpg',
		'PICTURE/90/34.jpg',
		'PICTURE/90/35.jpg',
		'PICTURE/90/36.jpg',
		'PICTURE/90/37.jpg',
		'PICTURE/90/38.jpg',
		'PICTURE/90/39.jpg',
		'PICTURE/90/40.jpg',
		'PICTURE/90/41.jpg',
		'PICTURE/90/42.jpg',
		'PICTURE/90/43.jpg',
		'PICTURE/90/44.jpg'
	);


	var accommodation = "您还未输入住宿地址";
	// 百度地图API功能
	function G(id) {
		return document.getElementById(id);
	}

	var map = new BMap.Map("l-map");
	map.centerAndZoom("上海", 12); // 初始化地图,设置城市和地图级别。

	var ac = new BMap.Autocomplete( //建立一个自动完成的对象
		{
			"input": "crid",
			"location": map
		});

	ac.addEventListener("onhighlight", function(e) { //鼠标放在下拉列表上的事件
		var str = "";
		var _value = e.fromitem.value;
		var value = "";
		if(e.fromitem.index > -1) {
			value = _value.province + _value.city + _value.district + _value.street + _value.business;
		}
		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

		value = "";
		if(e.toitem.index > -1) {
			_value = e.toitem.value;
			value = _value.province + _value.city + _value.district + _value.street + _value.business;
		}
		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
		G("searchResultPanel").innerHTML = str;
	});

	var myValue;
	ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
		var _value = e.item.value;
		myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
		G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

		setPlace();
		if(crid.placeholder == "请输入住宿地址") {
			accommodation = myValue;
			var menu = document.getElementById("menu");
			menu.innerHTML = "<iframe id='frame' src='../static/Third/third_demo02.html'  frameborder='0'  width='100%' height='100%' > </iframe>";
		} else if(crid.placeholder == "请输入旅游景点") {
			
			precise(myValue);
		}
		//		var div = document.createElement("div");
		//		div.style.border = "thin black 1px";
		//		div.style.backgroundColor = "rgb(171,178,185)";
		//		div.style.width = "200px";
		//		div.style.height = "150px";
		//		div.style.margin = "200px 80px";
		//		var p1 = document.createElement("p");
		//		var p2 = document.createElement("p");
		//		p1.innerHTML = "您的住宿地址是：";
		//		p2.innerHTML = accommodation;
		//		div.appendChild(p1);
		//		div.appendChild(p2);
		//		menu.appendChild(div);
	});
	function precise(myValue) {

		var judge1 = 0;
		for(var k=0; k<str1.length; k++){
					if(myValue == str1[k]){
						var menu = document.getElementById("menu");
						
						var img1 = document.createElement("img");
						img1.src ="../static/Third/PICTURE/140/"+ (k+1) + ".jpg";
						menu.innerHTML = "<div class= 'spot' style='overflow: hidden;'><img src='../static/Third/PICTURE/140/"+(k+1)+".jpg'/></div>";
						
						var spot = document.getElementsByClassName("spot");
						var box2 = document.getElementById("box2");
						
							spot[0].num = k;
							spot[0].onclick = function() {
							
						    if(judge(this.num)){
							var div = document.createElement("div");
							div.style.width = "20%";
							div.style.height = "100%";
							div.style.backgroundColor = "#ABB2B9";
							div.style.overflow = "hidden";
							//div.style.position = "relative";
							//						div.style.border = "1px soild black";
							div.style.display = "inline-block";
							div.style.float = "left";
							div.style.borderRight = "thin soild gray";
							
							var img =document.createElement("img");
							//img.style.overflow = "hidden";
//							alert(spot[0].num);
							img.src ="../static/Third/"+ picture90[ spot[0].num + 1];
							div.appendChild(img);
							
							box2.appendChild(div);
							}
						    else{
						    	alert("景点 "+str[this.num]+" 已经在您的菜单栏里啦！");
						    }
							}
						judge1 = 0;
						break;
					}
					else{
						judge1 = 1;
					}
		}
		if(judge1 == 1){
			var menu = document.getElementById("menu");
			menu.innerHTML = "";
		}
		
			
	}
	function setPlace() {
		map.clearOverlays(); //清除地图上所有覆盖物
		function myFun() {
			var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
			map.centerAndZoom(pp, 18);
			map.addOverlay(new BMap.Marker(pp)); //添加标注
		}
		var local = new BMap.LocalSearch(map, { //智能搜索
			onSearchComplete: myFun
		});
		local.search(myValue);
	}

		// 驾车
	  function drive(start,end){
	  		str2[0] = "上海市黄浦区中山东一路";
	  		str2[14] = "上海市杨浦区邯郸路220号";
	  		str2[18] = "上海市松江区三新北路900弄";
	  		str2[19] = "宋园路21号";
	  		
			//var map = new BMap.Map("allmap");
			map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
			var output = "从" + start + "到" + end + "驾车需要";
			var m = 0,	n = 0;
				 searchComplete = function(results) {
				if(transit.getStatus() != BMAP_STATUS_SUCCESS) {
					return;
				}
				var plan = results.getPlan(0);
				output += plan.getDuration(true); //获取时间
				console.log(output);
			}
			var transit =new BMap.DrivingRoute(map, {
				renderOptions: {
					map: map
				},
				onSearchComplete: searchComplete,
				onPolylinesSet: function() {
				
				}
			});
			transit.search(str2[start],str2[end]);
			}
//	  for(var i=40; i<44; i++){
//	  	for(var j=0; j<i+1; j++){
//	  		if(i != j)
//	  		drive(i,j);
//	  	}
//	  }

	
	// 百度地图API功能
	//二维数组
	
//	var arr = new Array(50); //表格有10行
//	for(var i = 0; i < 50; i++) {
//		arr[i] = new Array(50); //每行有10列
//		for(var j=0; j<50; j++){
//			arr[i][j] = "123";
//		}
//	}
	
	//公交
	
	function bus(start, end) {
		//var map = new BMap.Map("allmap");
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
		var output = "从" + start + "到" + str2[end] + "坐公交需要";
		var searchComplete = function(results) {
			if(transit.getStatus() != BMAP_STATUS_SUCCESS) {
				return;
			}
			var plan = results.getPlan(0);
			output += plan.getDuration(true) + "\n"; //获取时间
			//output += plan.getDistance(true) + "\n"; //获取距离
			
			 console.log(output);
			 //return output;
		}
		
		var transit = new BMap.TransitRoute(map, {
			renderOptions: {
				map: map
			},
			onSearchComplete: searchComplete,
			onPolylinesSet: function() {
				
			}
		});

		transit.search(str2[start], str2[end]);
		
	}
//	for(var i=0; i<attraction_str.length; i++){
//		bus(accommodation, str2[attraction_str[i]])
//	}
	
//	for(var i=43; i<44; i++){
//	  for(var j=0; j<i+1; j++){
//	    if(i != j){
//	   // bus(i,j);
//	   // alert(output);
//	    //console.log(arr[i][j] + " ");
//	  	}
//	  }
//	// console.log("\n");
//	}

