const getDataURL = "https://script.google.com/macros/s/AKfycbx-B9OrLn5w9Dd-T6Y4pdsJcGB_w92GSZJ1gYxqGdI_V7rAetyz/exec";
let imgAry = new Array(); //新增一個空白陣列
let html;

$(document).ready(function(){
	$.get(getDataURL, function(data){  //從網址抓抓資料
		imgAry = data;  //丟進空白陣列
		setData();  //呼叫下面映出
		console.log("0");
	});
});

function setData(){
    let tmp = $('#template01');
    for(var i=0;i<imgAry.length;i++){
        console.log(imgAry[i]);
		let htmlCont = tmp.html();
		htmlCont = htmlCont.replace("Src",imgAry[i][3]);
		htmlCont = htmlCont.replace("ImageSrc",imgAry[i][4]);
		htmlCont = htmlCont.replace("Date",imgAry[i][1].substr(0, 10));
		htmlCont = htmlCont.replace("uploader",imgAry[i][2]);
		htmlCont = htmlCont.replace("Source",imgAry[i][3]);
		htmlCont = htmlCont.replace("Theme",imgAry[i][0]);
		htmlCont = htmlCont.replace("Content",imgAry[i][5]);
        $('#show').append(htmlCont);
	}
}


var form_close = 0;
$("#form_close").click(function(){
    if(form_close==0){
		$(".btn-open").css("color","#88A3AD;")
        $(".fill").show();
		form_close = 1;
		console.log("000");
    }else{
        $(".fill").hide();
		form_close = 0;
		console.log("111");
    }
});

$(document).ready(function(){
	$("#test").localScroll(1000);
	$("#first").parallax("50%", 0.1);
	$('#second').parallax("50%", 0.1);
	$('#third').parallax("50%", 0.4);
	console.log("222");
})