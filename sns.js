//分享函数
var share = function(type, href, title, word, pic, uid){
	//分享到163
	if(type == 'netease' || type == '163') {
		var u = 'http://t.163.com/article/user/checkLogin.do?link=http://news.163.com/&source=' + encodeURIComponent('tudou') + '&info='+ encodeURIComponent(title + "\n" + word + ' ' + href) +
				'&'+ new Date().getTime() + '&images=' + encodeURIComponent(pic);
		var w = window.open(u, "163", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left=' + (screen.width - 840) / 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//分享到QQ空间
	if(type == 'qq' || type == 'qzone' || type == 'qqzone') {
		var u = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(href) + "&summary=" + encodeURIComponent(word) + '&title='+ encodeURIComponent(title) + "&pics=" +
				 encodeURIComponent(pic) ;
		var w = window.open(u, "qzone", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left='+(screen.width - 840) / 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//分享到新浪微博
	if(type == 'weibo' || type == 'sina') {
		var u = 'http://v.t.sina.com.cn/share/share.php?c=spr_web_bd_tudou_weibo&title=' + encodeURIComponent(title+"\n"+word) + '&url=' + encodeURIComponent(href) + '&source=' +
				encodeURIComponent('土豆网') + '&content=gb2312&pic=' + encodeURIComponent(pic) + '&ralateUid='+(uid == null ? '1642270165' : uid);
		var w = window.open(u, "wb", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left=' + (screen.width - 840) / 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//分享到QQ微博
	if(type == 'qqweibo' || type == 'qweibo' || type == 'tencentweibo') {
		var u = 'http://v.t.qq.com/share/share.php?title=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(href) + '&appkey=3be7a91cc641445fb33e2b83557b75bc&pic=' +
				encodeURIComponent(pic) + '&site=' + encodeURIComponent('土豆网');
		var w = window.open(u, "qweibo", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left='+(screen.width - 840)/ 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//分享到白社会
	if(type == 'bsh') {
		var u = 'http://bai.sohu.com/share/blank/addbutton.do?from=tudou&link=' + encodeURIComponent(href) + '&title=' + encodeURIComponent(title);
		var w = window.open(u, "bsh", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left='+(screen.width - 840)/ 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//分享到搜狐
	if(type == 'sohu' || type == 'sohuweibo') {
		var u = 'http://t.sohu.com/third/post.jsp?url=' + encodeURIComponent(href) + '&title=' + encodeURIComponent(title+"\n"+word) + '&&content=utf-8';
		var w = window.open(u, "sohu", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left='+(screen.width - 840)/ 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//分享到开心网
	if(type == 'kaixin') {
		var u = 'http://www.kaixin001.com/repaste/share.php?rtitle=' + encodeURIComponent(title) + '&rurl=' + encodeURIComponent(href) + '&rcontent=' + encodeURIComponent(word);
		var w = window.open(u, "kaixin", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left='+(screen.width - 840)/ 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//分享到人人网
	if(type == 'renren') {
		var u = 'http://widget.renren.com/dialog/share?resourceUrl=' + encodeURIComponent(href) + '&title=' + encodeURIComponent(title) + '&content=' + encodeURIComponent(word) +
				'&pic=' + encodeURIComponent(pic);
		var w = window.open(u, "renren", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left='+(screen.width - 840)/ 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//分享到豆瓣
	if(type == 'douban') {
//		var u = 'http://www.douban.com/recommend/?url=' + encodeURIComponent(href) + '&title=' + encodeURIComponent(title) + "&image=" + encodeURIComponent(pic) + '&text='+encodeURIComponent(word);
		var u = 'http://shuo.douban.com/!service/share?href=' + encodeURIComponent(href) + '&name=' + encodeURIComponent(title) + "&image=" + encodeURIComponent(pic) + '&text='+encodeURIComponent(word);
		var w = window.open(u, "douban", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left='+(screen.width - 840)/ 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//分享到飞信
	if(type == 'feixin') {
		var u = 'http://i3.feixin.10086.cn/apps/share/share?appkey=&source='+encodeURIComponent('土豆网')+'&content=' + encodeURIComponent(word) + '&pageid=&url=' + encodeURIComponent(href) + '&title=' + encodeURIComponent(title) + "&pic=" + encodeURIComponent(pic);
		var w = window.open(u, "feixin", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left='+(screen.width - 840)/ 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//分享到51说客
	if(type == '51sns') {
		var u = 'http://share.51.com/share/share.php?type=8&vaddr=' + encodeURIComponent(href) + '&title=' + encodeURIComponent(title) ;
		var w = window.open(u, "51sns", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left='+(screen.width - 840)/ 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//百度贴吧
	if(type == 'baidu') {
		var u = 'http://tieba.baidu.com/f/commit/share/openShareApi?comment='+encodeURIComponent('土豆网')+'&desc=' + encodeURIComponent(word) + '&url=' + encodeURIComponent(href) + '&title=' + encodeURIComponent(title) + "&pic=" + encodeURIComponent(pic) ;
		var w = window.open(u, "51sns", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left='+(screen.width - 840)/ 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
	//139说客
	if(type == '10086') {
		var u = 'http://talk.shequ.10086.cn/apps/vshare/share.php?app_key=4f0a69e59b11c6d6eb98ba5e9a8ce1fb&url=' + encodeURIComponent(href) + '&title=' + encodeURIComponent(title + "\n" +word)  ;
		var w = window.open(u, "51sns", 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=840,height=430,left='+(screen.width - 840)/ 2 + ',top=' + (screen.height - 430) / 2);
		setTimeout(function(){w}, 1000);		
	}
}