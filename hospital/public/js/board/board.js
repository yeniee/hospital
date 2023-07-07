

let boardarray = [];

$(function(){
	/*ham nav script*/

	$(".ham-nav").click(function(){
		$(".mobile-nav").css({marginLeft:0});
	})
	$(".close-btn").click(function(){
		$(".mobile-nav").css({marginLeft:-2000});
	})

	$(".mobile-nav-li>a").click(function(){
		$(".mobile-sub-nav").stop().slideUp();
		$(this).next(".mobile-sub-nav").stop().slideDown();
	})

	$(".gnb-li").mouseover(function(){
		$(".sub-ul").stop().slideDown();
	})

	$(".gnb-li").mouseleave(function(){
		$(".sub-ul").stop().slideUp();
	})
})

function setboard(){	
	let board = {	
		check : document.querySelector('input[name="check"]:checked').value, // 칭찬합니다 또는 불편합니다 체크		
		btitle : document.querySelector(".btitle").value,						// 제목
		bname : document.querySelector(".bname").value,							// 이름
		bcontent : document.querySelector(".bcontent").value,					// 내용
		bpassword : document.querySelector(".bpassword").value,					// 비밀번호
		bdate : new Date().toLocaleDateString(),														// 작성시간
		bview : 0																// 조회수
	}
	console.log(board.check)
	console.log(board.btitle)
	console.log(board.bname)
	console.log(board.bcontent)
	console.log(board.bpassword)
	console.log(board.bdate);
	console.log(board.bview)
	
	if(board.check==""){alert("체크해주세요"); return;}	
	if(board.btitle==""){alert("제목을 입력해 주세요"); return;}
	if(board.bname==""){alert("이름을 입력해 주세요"); return;}
	if(board.bcontent==""){alert("내용을 입력해 주세요"); return;}	
	if(board.bpassword==""){alert("비밀번호를 입력해 주세요"); return;}	
	
	if(board.check!==""||board.btitle!==""||board.bname!==""||board.bcontent!==""||board.bpassword!==""){
		alert("작성이 완료 되었습니다. 스크롤을 내려주세요.");
		
		boardarray.push(board);
		boardlist();
		//console.log(boardarray);		
		document.querySelector(".btitle").value = "";	
		document.querySelector(".bname").value = "";	
		document.querySelector(".bcontent").value = "";	
		document.querySelector(".bpassword").value = "";	
	}		
}

boardlist();
function boardlist(){
	let container = "<tr><th class='th th1'>번호</th><th class='th th2'>제목</th><th class='th th3'>이름</th><th class='th th4'>조회수</th></tr>"
	//console.log(container);
	
	for(let i=0; i<boardarray.length; i++){
		console.log(i);
		console.log(boardarray);
		console.log(boardarray[i]);
		
	container += "<tr>"+
					"<td class='td bno'>"+(i+1)+"</td>"+//번호
					"<td class='td bitle'> <a href='javascript:void(0)' onclick='getboard("+i+");count("+i+")'>"+boardarray[i].btitle+"</a></td>"+//제목
					"<td class='td bname'>"+boardarray[i].bname+"</td>"+//이름
					"<td class='td bcount'>"+boardarray[i].bview+"</td>"	//조회수			      		
				"</tr>"; 	
				console.log(container)
	}//for end
	console.log(boardarray);
	console.log(boardarray[0]);
	//console.log(boardarray[0].find(0));
	
	document.querySelector(".table").innerHTML = container;
	
}

function getboard(i){
	//alert(i)
	alert("스크롤을 내려주세요")
	let boardbtn = "<button type='button' onclick='upatebtn("+i+")' class='btn updatebtn'>수정하기</button>" +
				   "<button type='button' onclick='deletebtn("+i+")' class='btn deletebtn'>삭제하기</button>";
	
	let board = 
		'<div class="getboard-wrap">'+
			
			'<div class="boardlist-section">'+
				'<span class="boardlist-txt">제목</span>'+
				'<span class="boardlist-span boardlist-viewtitle">'+boardarray[i].btitle+'</span>'+
			'</div>'+
						
			'<div class="boardlist-section">'+
				'<span class="boardlist-txt">이름</span>'+
				'<span class="boardlist-span boardlist-viewname">'+boardarray[i].bname+'</span>'+			
			'</div>'+
			
			'<div class="boardlist-section">'+
				'<span class="boardlist-txt">작성시간</span>'+
				'<span class="boardlist-span boardlist-bdatetime">'+boardarray[i].bdate+'</span>'+
				'<span class="boardlist-txt" style="text-align:center">조회수</span>'+
				'<span class="boardlist-span boardlist-bview">'+boardarray[i].bview+'</span>'+			
			'</div>'+						
			'<div class="boardlist-section">'+
				'<span class="boardlist-txt">내용</span>'+
				'<span class="boardlist-span boardlist-viewcontent">'+boardarray[i].bcontent+'</span>'+		
			'</div>'+
			'<div class="boardlist-section boardlist-btnsection">'+				
				boardbtn+		
			'</div>'+
		'</div>';	
	console.log(boardbtn)
	console.log(board)
	document.querySelector(".boardwrap").innerHTML = board;	
}//getboard end

function upatebtn(i){
	alert("진행중입니다.");
}

function deletebtn(i){
	let password = prompt('비밀번호를 입력하세요 : ')
	console.log(password);
	if(password==boardarray[i].bpassword){
		boardarray.splice(i,1);
		alert("삭제가 완료되었습니다.");boardlist();
	}else{
		alert("비밀번호가 일치하지 않습니다."); return;
	}
}

titleclick();
function titleclick(){
	let titleclick = document.querySelector(".boardlist-viewtitle");
	console.log(titleclick)
}


function count(i){
	//alert("나 클릭했니")
	//console.log(boardarray)
	//let check = boardarray[i].check;
	//console.log("check확인 : " + check);
	
	let view= boardarray[i].bview;
	console.log(boardarray[i].bview);
	console.log(boardarray[i].bview+=1);
	console.log(boardarray[i].bview);
}
