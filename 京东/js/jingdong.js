var spa1=document.getElementById('spa1');
var spa2=document.getElementById('spa2');
var spa3=document.getElementById('spa3');
var spa4=document.getElementById('spa4');
var spa5=document.getElementById('spa5');
var spa6=document.getElementById('spa6');
var spa7=document.getElementById('spa7');
var spa8=document.getElementById('spa8');
var spa9=document.getElementById('spa9');
var spa10=document.getElementById('spa10');
var spa11=document.getElementById('spa11');
var spa12=document.getElementById('spa12');
var list1=document.getElementById('list1');
var list2=document.getElementById('list2');
var list3=document.getElementById('list3');
var list4=document.getElementById('list4');
var list5=document.getElementById('list5');
var list6=document.getElementById('list6');
var heng1=document.getElementById('heng1');
var heng2=document.getElementById('heng2');
var heng3=document.getElementById('heng3');
var heng4=document.getElementById('heng4');
var heng5=document.getElementById('heng5');
var lis1=list1.children;
lis1[0].className='dianji';
function fn1(obj,lis,spa,heng){
	obj.onmouseover=function(ev){
		lis.style.display='block';
		heng.style.display='block'
		spa.innerHTML='&and;';
	}
}
fn1(spa1,list1,spa2,heng1);
fn1(spa3,list2,spa9,heng2);
fn1(spa4,list3,spa10,heng3);
fn1(spa5,list4,spa11,heng1);
fn1(spa6,list5,spa12,heng4);
fn1(spa7,list6,spa13,heng5);
function fn2(obj,lis,spa,heng){
	obj.onmouseout=function(ev){
		var e=ev||window.event;
		var to=e.relatedTarget||e.toElement;
		while(to){
			if (to==this) {
				return false;
			}
			to=to.parentNode;
		}
		lis.style.display='';
		heng.style.display='';
		spa.innerHTML='&or;';
	}
}
fn2(spa1,list1,spa2,heng1);
fn2(spa3,list2,spa9,heng2);
fn2(spa4,list3,spa10,heng3);
fn2(spa5,list4,spa11,heng1);
fn2(spa6,list5,spa12,heng4);
fn2(spa7,list6,spa13,heng5);





var shanchu=document.getElementById('shanchu');
var headTu=document.getElementById('headTu');
shanchu.onclick=function(){
	headTu.removeChild(this.parentNode.parentNode);
}



gwc.onmouseover=function(ev){
	list7.style.display='block';
	heng6.style.display='block'
}
gwc.onmouseout=function(ev){
	var e=ev||window.event;
	var to=e.relatedTarget||e.toElement;
	while(to){
		if (to==this) {
			return false;
		}
		to=to.parentNode
	}
	list7.style.display='';
	heng6.style.display='';
}

var tab1=document.getElementById('tab1');
var tab2=document.getElementById('tab2');
var div1=tab2.getElementsByTagName('div');
var lis2=tab2.getElementsByTagName('li');
var as0=lis2[0].getElementsByTagName('a');
var as1=lis2[1].getElementsByTagName('a');
var as2=lis2[2].getElementsByTagName('a');
var as3=lis2[3].getElementsByTagName('a');
var as4=lis2[4].getElementsByTagName('a');
var as5=lis2[5].getElementsByTagName('a');
var as6=lis2[6].getElementsByTagName('a');
var as7=lis2[7].getElementsByTagName('a');
var as8=lis2[8].getElementsByTagName('a');
var as9=lis2[9].getElementsByTagName('a');
var as10=lis2[10].getElementsByTagName('a');
var as11=lis2[11].getElementsByTagName('a');
var as12=lis2[12].getElementsByTagName('a');
var as13=lis2[13].getElementsByTagName('a');
var as14=lis2[14].getElementsByTagName('a');
var as=[as0,as1,as2,as3,as4,as5,as6,as7,as8,as9,as10,as11,as12,as13,as14];
var list8=document.getElementById('list8');
var lis3=list8.getElementsByTagName('li');
var spas1=tab2.getElementsByTagName('span');
for (var i = 0; i < lis2.length; i++) {
	lis2[i].onmouseover=function(){
		for (var j = 0; j < lis2.length; j++) {
			if (lis2[j]==this) {
				for (var i = 0; i < as[j].length; i++) {
					as[j][i].style.color='red';
				};
				spas1[j].style.display='none';
				lis2[j].style.background='#F7F7F7';
				lis2[j].style.color='red';
				lis3[j].style.display='block';
				div1[j].style.display='block';
			}else{
				for (var i = 0; i < as[j].length; i++) {
					as[j][i].style.color='';
				};
				spas1[j].style.display='block';
				lis2[j].style.color='';
				lis2[j].style.background='';
				lis3[j].style.display='none';
				div1[j].style.display='none';
			};
		}
	}
};
tab1.onmouseout=function(ev){
	var e=ev||window.event;
	var to=e.relatedTarget||e.toElement;
	while(to){
		if (to==this) {
			return false;
		}
		to=to.parentNode
	}
	for(var i = 0; i < lis2.length; i++){
		for (var j = 0; j < as[i].length; j++) {
			as[i][j].style.color='';
		};
		spas1[i].style.display='block';
		lis2[i].style.color='';
		lis2[i].style.background='';
		lis3[i].style.display='none';
		div1[i].style.display='none';
	}
}


function byClass(el,oClass){
	var aEl=el.getElementsByTagName("*");
	var arr=[];
	for (var i=0; i<aEl.length; i++){
		if (aEl[i].className==oClass){
			arr.push(aEl[i]);
		}
	}
	return arr;
}
var lunbo1=document.getElementById('lunbo1');
var con1=byClass(lunbo1,'con')[0];
var lis4=con1.getElementsByTagName('img');
var cin1=byClass(lunbo1,'cin')[0];
var lis5=cin1.getElementsByTagName('li');
var left1=lunbo1.getElementsByTagName('p')[0];
var right1=lunbo1.getElementsByTagName('p')[1];
var timer1=null;
var timer2=null;
var num1=0;
function move1(){
	clearInterval(timer1);
	for (var j=0; j<lis4.length; j++){
		lis5[j].style.backgroundColor="#3e3e3e";
		lis4[j].style.opacity=0;
	}
	lis5[num1].style.backgroundColor="red";
	var ind=0;
	timer1=setInterval(function (){
		ind+=0.02;
		if (ind>=1){
			ind=1;
			clearInterval(timer1);
		}
		lis4[num1].style.opacity=ind;
	},25);
}

function automove1() {
	num1++;
	if (num1>=lis4.length){
		num1=0;
	};
	move1();
};

timer2=setInterval(automove1,4000);
for (var i=0; i<lis5.length; i++){
	lis5[i].id=i;
	lis5[i].onmouseover=function (){
		clearInterval(timer2);
		num1=this.id;
		move1();
	}
	lis5[i].onmouseout=function (){
		timer2=setInterval(automove1,4000);
	}
}
left1.onclick=function () {
	clearInterval(timer2);
	num1--;
	if (num1<0) {
		num1=lis4.length-1;
	};
	move1();
	timer2=setInterval(automove1,4000);
}
right1.onclick=function () {
	clearInterval(timer2);
	num1++;
	if (num1>=lis4.length){
		num1=0;
	};
	move1();
	timer2=setInterval(automove1,4000);
}
lunbo1.onmouseover=function(){
	left1.style.display='block';
	right1.style.display='block';
}
lunbo1.onmouseout=function(){
	left1.style.display='';
	right1.style.display='';
}


var tab3=document.getElementById('tab3');
var lis6=tab3.getElementsByTagName('a');
var tab4=document.getElementById('tab4');
var lis7=tab4.getElementsByTagName('p');
var lis9=tab4.getElementsByTagName('var');
var lis10=tab4.getElementsByTagName('dl');
var is1=tab4.getElementsByTagName('i');
var spa14=tab4.getElementsByTagName('span')
var list9=document.getElementById('list9');
var lis8=list9.getElementsByTagName('li');
var tab5=document.getElementById('tab5');


for(var i=0;i<lis7.length;i++){
	lis8[i].id=i;
	lis8[i].onmouseenter=function(){
		for (var i = 0; i < lis7.length; i++) {
			lis6[i].className='';
			lis7[i].style.display='';
		};
		tab5.style.display='block';
		lis7[this.id].style.display='block';
		lis6[this.id].className='show';
	}
}
for(var i=0;i<lis6.length;i++){
	lis6[i].onmouseover=function(){
		for (var j = 0; j < lis7.length; j++) {
			if(lis6[j]==this){
				lis6[j].className='show'
				lis7[j].style.display='block';
			}else{
				lis6[j].className='';
				lis7[j].style.display='';
			}
		};
	}
}
for(var i=0;i<is1.length;i++){
	is1[i].onclick=function(){
		tab5.style.display='none';
		lis8[3].onmouseenter = null;
		lis8[3].onmouseleave =fn;
		setTimeout(fn,5000)
	}
function fn(){
	lis8[3].onmouseenter=function(){
		for (var i = 0; i < lis7.length; i++) {
			lis6[i].className='';
			lis7[i].style.display='';
		};
			tab5.style.display='block';
			lis7[3].style.display='block';
			lis6[3].className='show';
		}	
	}
}
document.onclick=function(ev){
	var e=ev||window.event;
	var target=e.target||e.srcElement;
	if (target.nodeName=='LI'&&target.parentNode.id=='list1') {
		spa8.innerHTML='送至：'+target.innerHTML;
		spa2.innerHTML='&or;'
		list1.style.display='';
		for (var i = 0; i < lis1.length; i++) {
			lis1[i].className='';
		};
		target.className='dianji';
	};
	
}
document.onmouseover=function(ev){
	var e=ev||window.event;
	var target=e.target||e.srcElement;
	if (target.nodeName=='A'&&target.parentNode.id=='tab3'){
		for(var i = 0; i < lis9.length; i++){
			lis9[i].className='';
			lis10[i].className='';
			spa14[i].className='';
		}
		for (var j = 0; j < lis6.length; j++){ 
			if(target==lis6[j]){
				if(j==0){
					lis9[0].className='move';
					lis10[0].className='show1';
					spa14[0].className='show';
				}if(j==1){
					lis9[3].className='move';
					lis10[3].className='show1';
					spa14[3].className='show';
				}if(j==2){
					lis9[6].className='move';
					lis10[6].className='show1';
					spa14[6].className='show';
				}if(j==3){
					lis9[8].className='move';
					lis10[8].className='show1';
					spa14[8].className='show';
				}
			}
		}

	}
	if (target.nodeName=='VAR'&&target.parentNode.parentNode.parentNode.id=='tab4'){
		for (var i = 0; i < lis9.length; i++) {
			if(target==lis9[i]){
				if(i<=2){
					lis9[0].className='move';
					lis10[0].className='show1';
					spa14[0].className='show';
					for (var j = 0; j <= 2; j++){
						lis9[j].className='';
						lis10[j].className='';
						spa14[j].className='';
					}
				}if(3<=i<=5){
					lis9[3].className='move';
					lis10[3].className='show1';
					spa14[3].className='show';
					for (var j = 3; j <= 5; j++){
						lis9[j].className='';
						lis10[j].className='';
						spa14[j].className='';
					}
				}if(6<=i<=7){
					lis9[6].className='move';
					lis10[6].className='show1';
					spa14[6].className='show';
					for (var j = 6; j <= 7; j++){
						lis9[j].className='';
						lis10[j].className='';
						spa14[j].className='';
					}
				}if(8<=i<=10){
					lis9[8].className='move';
					lis10[8].className='show1';
					spa14[8].className='show';
					for (var j = 8; j <= 10; j++){
						lis9[j].className='';
						lis10[j].className='';
						spa14[j].className='';
					}
				}
				spa14[i].className='show';
				lis10[i].className='show1';
			}
		};
		target.className='move';
	}
}

var dancheng1=document.getElementById('dancheng1');
var dancheng2=document.getElementById('dancheng2');
var wangfan1=document.getElementById('wangfan1');
var wangfan2=document.getElementById('wangfan2');
var fancheng1=document.getElementById('fancheng1');
var fancheng2=document.getElementById('fancheng2');
dancheng1.onclick=function(){
	fancheng1.style.display='none';
}
wangfan1.onclick=function(){
	fancheng1.style.display='';
}
dancheng2.onclick=function(){
	fancheng2.style.display='none';
}
wangfan2.onclick=function(){
	fancheng2.style.display='';
}



var gundong1=document.getElementById('gundong1');
var left2=gundong1.getElementsByTagName('p')[0];
var right2=gundong1.getElementsByTagName('p')[1];
var img1=gundong1.getElementsByTagName('img')[0];
var imgw1=img1.offsetWidth;
var x=1;
var timer3=null;
gundong1.scrollLeft=(imgw1*4+4);

gundong1.onmouseover=function(){
	left2.style.display='block';
	right2.style.display='block';
}
gundong1.onmouseout=function(){
	left2.style.display='';
	right2.style.display='';
}
function everygo1(){
	clearInterval(timer3);
	var start=gundong1.scrollLeft;
	var end=(imgw1*4+4)*x;
	var everystep=(end-start)/20;
	var step=0;
	timer3=setInterval(function(){
		step++;
		if (step>=20) {
			step=0;
			clearInterval(timer3);
		};
		start+=everystep;
		gundong1.scrollLeft=start;
	},25)
}
left2.onclick=function () {
	clearInterval(timer3);
	if(x<1){
		x=4;
		gundong1.scrollLeft=(imgw1*4+4)*4;
	}
	x--;
	everygo1();
}
right2.onclick=function () {
	clearInterval(timer3);
	x++;
	if(x>=5){
		x=1;
		gundong1.scrollLeft=0;
	}
	everygo1();
}


var bx=document.getElementById('bx');
var ul1=bx.getElementsByTagName('ul');
var bp=document.getElementById('bp');
var x1=0;

bp.onclick=function(){
	x1++;
	for(var i=0;i<4;i++){
		ul1[i].style.display='none';
	}
	if(x1>=4){
		x1=0;
	}
	ul1[x1].style.display='block';
}



//f1
$(function(){
	$('.mt .mtc').hover(function(){
		$('.mtc .heng i').css({
			left:'-365px'
		}).animate({
			left:'884px'
		},1000);
	},function () {
		$('.mtc .heng i').css({
			left:'884px'
		})
	})





	var imgW=$('#au a').width()+1;
	var m=1;
	var anm=true;
	$('#ay').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#au a').length-1){
				m=1;
				$('#ay').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#ai div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#ay').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#at .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#au a').length-2;
				$('#ay').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#at .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#au a').length-1){
				m=1;
				$('#ay').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#ai div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#ai div').eq(m).addClass('show').siblings().removeClass('show');
			$('#ay').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})

	$('#at').hover(function () {
		$('#at .left').css('display','block');
		$('#at .right').css('display','block');
	},function () {
		$('#at .left').css('display','none');
		$('#at .right').css('display','none');
	})
})
$(function () {
	$('#aw .tab li').mouseover(function () {
		var x = $(this).index();
		for (var i = 0; i <= 8; i++) {
			$('#aw .tab li span').eq(i).css('display', 'block');
			$('#aw .tab li a').eq(i).removeClass('select');
			$('#ar .ai li').eq(i).css('display', 'none');
		}
		$('#aw .tab li a').eq(x).addClass('select');
		$('#aw .tab li span').eq(x).css('display', 'none');
		$('#aw .tab li span').eq(x - 1).css('display', 'none');
		$('#ar .ai li').eq(x).css('display', 'block');
	})
})

//f2
$(function () {

	$('#da .tab li').mouseover(function () {
		var x = $(this).index();
		for (var i = 0; i <= 8; i++) {
			$('#da .tab li span').eq(i).css('display', 'block');
			$('#da .tab li a').eq(i).removeClass('select');
			$('#dd .dk li').eq(i).css('display','none');
		}
		$('#da .tab li a').eq(x).addClass('select');
		$('#da .tab li span').eq(x).css('display', 'none');
		$('#da .tab li span').eq(x - 1).css('display', 'none');
		$('#dd .dk li').eq(x).css('display','block');
	})

	
	
	var imgW=343;
	var m=1;
	var anm=true;
	$('#de').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#de .dg img').length-1){
				m=1;
				$('#de').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#de .dl div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#de').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#de .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#de .dg img').length-2;
				$('#de').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#de .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#de .dg img').length-1){
				m=1;
				$('#de').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#de .dl div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#de .dl div').eq(m).addClass('show').siblings().removeClass('show');
			$('#de').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})


//3f
$(function () {

	$('#eb .tab li').mouseover(function () {
		var x = $(this).index();
		var m=$('#eb .tab li').length;
		for (var i = 0; i <= m; i++) {
			$('#eb .tab li span').eq(i).css('display', 'block');
			$('#eb .tab li a').eq(i).removeClass('select');
			$('#ef .ef_e li').eq(i).css('display','none');
		}
		$('#eb .tab li a').eq(x).addClass('select');
		$('#eb .tab li span').eq(x).css('display', 'none');
		$('#eb .tab li span').eq(x - 1).css('display', 'none');
		$('#ef .ef_e li').eq(x).css('display','block');
	})


	var imgW=$('#eh .eh_a a').width();
	var m=1;
	var anm=true;
	$('#eh').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#eh .eh_a a').length-1){
				m=1;
				$('#eh').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#eg .eg_a div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#eh').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#eg .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#eh .eh_a a').length-2;
				$('#eh').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#eg .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#eh .eh_a a').length-1){
				m=1;
				$('#eh').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#eg .eg_a div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#eg .eg_a div').eq(m).addClass('show').siblings().removeClass('show');
			$('#eh').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})

//f4
$(function () {
	$('#fa .tab li').mouseover(function () {
		var x = $(this).index();
		var m=$('#fa .tab li').length;
		for (var i = 0; i <= m; i++) {
			$('#fa .tab li span').eq(i).css('display', 'block');
			$('#fa .tab li a').eq(i).removeClass('select');
			$('#fd .fd_a li').eq(i).css('display','none');
		}
		$('#fa .tab li a').eq(x).addClass('select');
		$('#fa .tab li span').eq(x).css('display', 'none');
		$('#fa .tab li span').eq(x - 1).css('display', 'none');
		$('#fd .fd_a li').eq(x).css('display','block');
	})

	var imgW=$('#fg .fg_a a').width();
	var m=1;
	var anm=true;
	$('#fg').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#fg .fg_a a').length-1){
				m=1;
				$('#fg').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#fe .fe_a div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#fg').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#fe .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#fg .fg_a a').length-2;
				$('#fg').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#fe .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#fg .fg_a a').length-1){
				m=1;
				$('#fg').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#fe .fe_a div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#fe .fe_a div').eq(m).addClass('show').siblings().removeClass('show');
			$('#fg').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})


//f5
$(function () {

	$('#ga .tab li').mouseover(function () {
		var x = $(this).index();
		var m=$('#ga .tab li').length;
		for (var i = 0; i <= m; i++) {
			$('#ga .tab li span').eq(i).css('display', 'block');
			$('#ga .tab li a').eq(i).removeClass('select');
			$('#gd .gd_a li').eq(i).css('display','none');
		}
		$('#ga .tab li a').eq(x).addClass('select');
		$('#ga .tab li span').eq(x).css('display', 'none');
		$('#ga .tab li span').eq(x - 1).css('display', 'none');
		$('#gd .gd_a li').eq(x).css('display','block');
	})


	var imgW=$('#gf .gf_a a').width();
	var m=1;
	var anm=true;
	$('#gf').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#gf .gf_a a').length-1){
				m=1;
				$('#gf').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#ge .ge_a div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#gf').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#ge .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#gf .gf_a a').length-2;
				$('#gf').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#ge .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#gf .gf_a a').length-1){
				m=1;
				$('#gf').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#ge .ge_a div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#ge .ge_a div').eq(m).addClass('show').siblings().removeClass('show');
			$('#gf').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})


  //f6
$(function () {

	$('#ha .tab li').mouseover(function () {
		var x = $(this).index();
		var m=$('#ha .tab li').length;
		for (var i = 0; i <= m; i++) {
			$('#ha .tab li span').eq(i).css('display', 'block');
			$('#ha .tab li a').eq(i).removeClass('select');
			$('#hb .hb_a li').eq(i).css('display','none');
		}
		$('#ha .tab li a').eq(x).addClass('select');
		$('#ha .tab li span').eq(x).css('display', 'none');
		$('#ha .tab li span').eq(x - 1).css('display', 'none');
		$('#hb .hb_a li').eq(x).css('display','block');
	})


	var imgW=$('#he .he_a a').width();
	var m=1;
	var anm=true;
	$('#hd .hd_b').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#he .he_a a').length-1){
				m=1;
				$('#hd .hd_b').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#he .he_c div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#hd .hd_b').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#he .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#he .he_a a').length-2;
				$('#hd .hd_b').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#he .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#he .he_a a').length-1){
				m=1;
				$('#hd .hd_b').scrollLeft(0);
			}
			move();
		}
		auto();
	})
    
	$('#he .he_c div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#he .he_c div').eq(m).addClass('show').siblings().removeClass('show');
			$('#hd .hd_b').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})


//f7
$(function () {

	$('#ja .tab li').mouseover(function () {
		var x = $(this).index();
		var m=$('#ja .tab li').length;
		for (var i = 0; i <= m; i++) {
			$('#ja .tab li span').eq(i).css('display', 'block');
			$('#ja .tab li a').eq(i).removeClass('select');
			$('#jb .jb_a li').eq(i).css('display','none');
		}
		$('#ja .tab li a').eq(x).addClass('select');
		$('#ja .tab li span').eq(x).css('display', 'none');
		$('#ja .tab li span').eq(x - 1).css('display', 'none');
		$('#jb .jb_a li').eq(x).css('display','block');
	})


	var imgW=$('#je .je_a a').width();
	var m=1;
	var anm=true;
	$('#jd .jd_b').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#je .je_a a').length-1){
				m=1;
				$('#jd .jd_b').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#je .je_c div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#jd .jd_b').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#je .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#je .je_a a').length-2;
				$('#jd .jd_b').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#je .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#je .je_a a').length-1){
				m=1;
				$('#jd .jd_b').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#je .je_c div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#je .je_c div').eq(m).addClass('show').siblings().removeClass('show');
			$('#jd .jd_b').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})

	//f8
$(function () {

	$('#ka .tab li').mouseover(function () {
		var x = $(this).index();
		var m=$('#ka .tab li').length;
		for (var i = 0; i <= m; i++) {
			$('#ka .tab li span').eq(i).css('display', 'block');
			$('#ka .tab li a').eq(i).removeClass('select');
			$('#kb .kb_a li').eq(i).css('display','none');
		}
		$('#ka .tab li a').eq(x).addClass('select');
		$('#ka .tab li span').eq(x).css('display', 'none');
		$('#ka .tab li span').eq(x - 1).css('display', 'none');
		$('#kb .kb_a li').eq(x).css('display','block');
	})


	var imgW=$('#ke .ke_a a').width();
	var m=1;
	var anm=true;
	$('#kd .kd_b').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#ke .ke_a a').length-1){
				m=1;
				$('#kd .kd_b').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#ke .ke_c div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#kd .kd_b').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#ke .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#ke .ke_a a').length-2;
				$('#kd .kd_b').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#ke .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#ke .ke_a a').length-1){
				m=1;
				$('#kd .kd_b').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#ke .ke_c div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#ke .ke_c div').eq(m).addClass('show').siblings().removeClass('show');
			$('#kd .kd_b').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})

	//f9
$(function () {

	$('#la .tab li').mouseover(function () {
		var x = $(this).index();
		var m=$('#la .tab li').length;
		for (var i = 0; i <= m; i++) {
			$('#la .tab li span').eq(i).css('display', 'block');
			$('#la .tab li a').eq(i).removeClass('select');
			$('#lb .lb_a li').eq(i).css('display','none');
		}
		$('#la .tab li a').eq(x).addClass('select');
		$('#la .tab li span').eq(x).css('display', 'none');
		$('#la .tab li span').eq(x - 1).css('display', 'none');
		$('#lb .lb_a li').eq(x).css('display','block');
	})


	var imgW=$('#le .le_a a').width();
	var m=1;
	var anm=true;
	$('#ld .ld_b').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#le .le_a a').length-1){
				m=1;
				$('#ld .ld_b').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#le .le_c div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#ld .ld_b').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#le .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#le .le_a a').length-2;
				$('#ld .ld_b').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#le .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#le .le_a a').length-1){
				m=1;
				$('#ld .ld_b').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#le .le_c div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#le .le_c div').eq(m).addClass('show').siblings().removeClass('show');
			$('#ld .ld_b').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})

	//f10
$(function () {

	$('#ma .tab li').mouseover(function () {
		var x = $(this).index();
		var m=$('#ma .tab li').length;
		for (var i = 0; i <= m; i++) {
			$('#ma .tab li span').eq(i).css('display', 'block');
			$('#ma .tab li a').eq(i).removeClass('select');
			$('#mb .mb_a li').eq(i).css('display','none');
		}
		$('#ma .tab li a').eq(x).addClass('select');
		$('#ma .tab li span').eq(x).css('display', 'none');
		$('#ma .tab li span').eq(x - 1).css('display', 'none');
		$('#mb .mb_a li').eq(x).css('display','block');
	})


	var imgW=$('#me .me_a a').width();
	var m=1;
	var anm=true;
	$('#md .md_b').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#me .me_a a').length-1){
				m=1;
				$('#md .md_b').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#md .md_e div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#md .md_b').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#md .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#me .me_a a').length-2;
				$('#md .md_b').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#md .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#me .me_a a').length-1){
				m=1;
				$('#md .md_b').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#md .md_e div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#md .md_e div').eq(m).addClass('show').siblings().removeClass('show');
			$('#md .md_b').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})

	//f11
$(function () {

	$('#na .tab li').mouseover(function () {
		var x = $(this).index();
		var m=$('#na .tab li').length;
		for (var i = 0; i <= m; i++) {
			$('#na .tab li span').eq(i).css('display', 'block');
			$('#na .tab li a').eq(i).removeClass('select');
			$('#nd li').eq(i).css('display','none');
		}
		$('#na .tab li a').eq(x).addClass('select');
		$('#na .tab li span').eq(x).css('display', 'none');
		$('#na .tab li span').eq(x - 1).css('display', 'none');
		$('#nd li').eq(x).css('display','block');
	})


	var imgW=$('#nf .nf_a a').width();
	var m=1;
	var anm=true;
	$('#nf').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#nf .nf_a a').length-1){
				m=1;
				$('#nf').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#ne .ne_a div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#nf').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#ne .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#nf .nf_a a').length-2;
				$('#nf').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#ne .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#nf .nf_a a').length-1){
				m=1;
				$('#nf').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#ne .ne_a div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#ne .ne_a div').eq(m).addClass('show').siblings().removeClass('show');
			$('#nf').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})

	//f12
$(function () {

	var imgW=$('#of .of_a a').width();
	var m=1;
	var anm=true;
	$('#oc').scrollLeft(imgW);
	$('#od').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#of .of_a a').length-1){
				m=1;
				$('#oc').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#oe .oe_a div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#oc').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#oe .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#of .of_a a').length-2;
				$('#oc').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#oe .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#of .of_a a').length-1){
				m=1;
				$('#oc').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#oe .oe_a div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#oe .oe_a div').eq(m).addClass('show').siblings().removeClass('show');
			$('#oc').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})
$(function () {
	var imgW=$('#oj .oj_a a').width();
	var m=1;
	var anm=true;
	$('#od').scrollLeft(imgW);

	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m++;
			if (m>=$('#oj .oj_a a').length-1){
				m=1;
				$('#od').scrollLeft(0);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#oh .oh_a div').eq(m-1).addClass('show').siblings().removeClass('show');
		$('#od').stop().animate({scrollLeft:imgW*m},function () {
			anm=true;
		})
	}
	$('#oh .left').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m--;
			if (m<=0){
				m=$('#oj .oj_a a').length-2;
				$('#od').scrollLeft(imgW*(m+1));
			}
			move();
		}
		auto();
	});
	$('#oh .right').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m++;
			if (m>=$('#oj .oj_a a').length-1){
				m=1;
				$('#od').scrollLeft(0);
			}
			move();
		}
		auto();
	})

	$('#oh .oh_a div').click(function () {
		clearInterval(timer);
		if (anm){
			anm=false;
			m=$(this).index();
			$('#oh .oh_a div').eq(m).addClass('show').siblings().removeClass('show');
			$('#od').stop().animate({scrollLeft:imgW*(m+1)},function () {
				anm=true;
			})
		}
		auto();
	})
})
$(function () {
	var imgH=$('#qf li').height()+20;
	var n=$('#qf li').length-2;
	var m=n;
	var anm=true;
	$('#qe .qe_a').scrollTop(imgH*(n+1));
	var timer=null;
	function auto() {
		timer=setInterval(function () {
			m--;
			if (m<0){
				m=(n-1);
				$('#qe .qe_a').scrollTop(imgH*n);
			}
			move();
		},2000)
	}
	auto();
	function move() {
		$('#qe .qe_a').stop().animate({scrollTop:imgH*m},function () {
			anm=true;
		})
	}
})

//定位
$(function () {
	$('#ta .ta_a').each(function (i) {
		var i=$(this).index();
		$(this).hover(function () {
			$('#ta .ta_j').eq(i).stop().animate({
				left:'-60px'
			})
			if(i==0){
				$('#ta .ta_c').css('display','none')
			}
		},function () {
			$('#ta .ta_j').eq(i).stop().animate({
				left:'35px'
			})
			$('#ta .ta_c').css('display','block')
		})
	})
	$('#tb .ta_a').each(function (i) {
		$(this).hover(function () {
			$('#tb .ta_j').eq(i).stop().animate({
				left:'-48px'
			})
		},function () {
			$('#tb .ta_j').eq(i).stop().animate({
				left:'60px'
			})
		})
	})
})
$(function () {
	var timer=null;
	function fn1() {
		timer=setInterval(function () {
			var m=document.body.scrollTop||document.documentElement.scrollTop;
			if(1600<m&&m<=9800){
				$('#ua').css('display','block')
			}else{
				$('#ua').css('display','none')
			}
			//1
			if(m>1600&&m<=2200){
				$('#ua a').eq(0).css('display','none')
				$('#ua a').eq(1).css('display','block')
				$('#aw .con h2 .aaa').slideDown(2000);


			}else{
				$('#ua a').eq(1).css('display','none')
				$('#ua a').eq(0).css('display','block')
				$('#aw .con h2 .aaa').slideUp(500);
			}
			//2
			if(m>2200&&m<=2800){
				$('#ua a').eq(2).css('display','none')
				$('#ua a').eq(3).css('display','block')
				$('#da .con h2 .aaa').slideDown(2000);
			}else{
				$('#ua a').eq(3).css('display','none')
				$('#ua a').eq(2).css('display','block')
				$('#da .con h2 .aaa').slideUp(500);
			}
			//3
			if(m>2800&&m<=3800){
				$('#ua a').eq(4).css('display','none')
				$('#ua a').eq(5).css('display','block')
				$('#eb .con h2 .aaa').slideDown(2000);
			}else{
				$('#ua a').eq(5).css('display','none')
				$('#ua a').eq(4).css('display','block')
				$('#eb .con h2 .aaa').slideUp(500);
			}
			//4
			if(m>3800&&m<=4400){
				$('#ua a').eq(6).css('display','none')
				$('#ua a').eq(7).css('display','block')
				$('#fa .con h2 .aaa').slideDown(2000);
			}else{
				$('#ua a').eq(7).css('display','none')
				$('#ua a').eq(6).css('display','block')
				$('#fa .con h2 .aaa').slideUp(500);
			}
			//5
			if(m>4400&&m<=5000){
				$('#ua a').eq(8).css('display','none')
				$('#ua a').eq(9).css('display','block')
				$('#ga .con h2 .aaa').slideDown(2000);
			}else{
				$('#ua a').eq(9).css('display','none')
				$('#ua a').eq(8).css('display','block')
				$('#ga .con h2 .aaa').slideUp(500);
			}
			//6
			if(m>5000&&m<=5800){
				$('#ua a').eq(10).css('display','none')
				$('#ua a').eq(11).css('display','block')
				$('#ha .con h2 .aaa').slideDown(2000);
			}else{
				$('#ua a').eq(11).css('display','none')
				$('#ua a').eq(10).css('display','block')
				$('#ha .con h2 .aaa').slideUp(500);
			}
			//7
			if(m>5800&&m<=6400){
				$('#ua a').eq(12).css('display','none')
				$('#ua a').eq(13).css('display','block')
				$('#ja .con h2 .aaa').slideDown(2000);
			}else{
				$('#ua a').eq(13).css('display','none')
				$('#ua a').eq(12).css('display','block')
				$('#ja .con h2 .aaa').slideUp(500);
			}
			//8
			if(m>6400&&m<=7000){
				$('#ua a').eq(14).css('display','none')
				$('#ua a').eq(15).css('display','block')
				$('#ka .con h2 .aaa').slideDown(2000);
			}else{
				$('#ua a').eq(15).css('display','none')
				$('#ua a').eq(14).css('display','block')
				$('#ka .con h2 .aaa').slideUp(500);
			}
			//9
			if(m>7000&&m<=7600){
				$('#ua a').eq(16).css('display','none')
				$('#ua a').eq(17).css('display','block')
				$('#la .con h2 .aaa').slideDown(2000);
			}else{
				$('#ua a').eq(17).css('display','none')
				$('#ua a').eq(16).css('display','block')
				$('#la .con h2 .aaa').slideUp(500);
			}
			//10
			if(m>7600&&m<=8400){
				$('#ua a').eq(18).css('display','none')
				$('#ua a').eq(19).css('display','block')
				$('#ma .con h2 .bbb').slideDown(2000);
			}else{
				$('#ua a').eq(19).css('display','none')
				$('#ua a').eq(18).css('display','block')
				$('#ma .con h2 .bbb').slideUp(500);
			}
			//11
			if(m>8400&&m<=9000){
				$('#ua a').eq(20).css('display','none')
				$('#ua a').eq(21).css('display','block')
				$('#na .con h2 .bbb').slideDown(2000);
			}else{
				$('#ua a').eq(21).css('display','none')
				$('#ua a').eq(20).css('display','block')
				$('#na .con h2 .bbb').slideUp(500);
			}
			//12
			if(m>9000&&m<=9600){
				$('#ua a').eq(22).css('display','none')
				$('#ua a').eq(23).css('display','block')
				$('#oa .con h2 .bbb').slideDown(2000);
			}else{
				$('#ua a').eq(23).css('display','none')
				$('#ua a').eq(22).css('display','block')
				$('#oa .con h2 .bbb').slideUp(500);
			}
		},1)
	}
	fn1();
})
$(function () {
	$(window).resize(function () {
		var winh=$('#wei').height();
		var doch=$('#ua').height();
		$('#ua').css('top',(winh-doch)/2+'px');
		$('#ua').css('marginTop','0')
	})

})