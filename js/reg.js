// aside
// 카테고리 숨기기 클릭 시 카테고리 숨김
$(function() {
    $('.hide_btn').click(function() {
        $('aside').animate({width:'0px'}, 500);
        $('#hideMenu').hide();
        setTimeout(function() {
            $('#showMenu').show();
            $('aside').css({"border-right":'none'});
        }, 500);
    })
    $('.show_btn').click(function() {
        $('aside').animate({width:'300px'}, 500);
        $('#showMenu').hide();
        setTimeout(function() {
            $('#hideMenu').show();
        }, 500)
        $('aside').css({"border-right":'2px solid #AEAEAE'});
    })
})

// 메인 카테고리 클릭 시 서브 카테고리 슬라이드
$(function() {
    $('.mainCategory').click(function() {
        let sub = $(this).next();
        let sub_cnt = $(sub).children().length;
        const sub_height = 42;

        if($(sub).css('height') === '0px') {
            $(sub).animate({height:sub_cnt*sub_height+"px"}, 300);
        } else {
            $(sub).animate({height:'0'}, 300);
        }
    })
})

// 카테고리 클릭 시 parameter 전달
$(function() {
    let categories = $('.subCategory');

    $(categories).click(function() {
        let name = $(this).children('p').text();

        location.href = 'index.html?c=' + name;
    })
})


// main
// 내용 부분 summernote 에디터 적용
$(document).ready(function() {
	//여기 아래 부분
	$('#contents').summernote({
		  height: 500,                 // 에디터 높이
		  minHeight: null,             // 최소 높이
		  maxHeight: null,             // 최대 높이
		  lang: "ko-KR",					// 한글 설정
		  placeholder: '최대 2048자까지 쓸 수 있습니다'	//placeholder 설정
          
	});
});