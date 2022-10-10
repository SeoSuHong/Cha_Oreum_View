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
// 필터 검색 기능
function search() {
    let field = $('#field').val();
    let keyword = $('#keyword').val();

    if(keyword == '') {
        alert('검색 키워드를 입력해 주세요.');
    } else {
        if(field === 'title') {
            $('#title').val(keyword);
            $('#nickname').val('');
        } else {
            $('#nickname').val(keyword);
            $('#title').val('');
        }
        indexForm.submit();
    }
}

// 정렬 기능
function sort(s) {
    $('#sort').val(s);
    indexForm.submit();
}

// 페이지 클릭 시
$(function() {
    $('.page').click(function() {
        let page = $(this).text();
        $('#page').val(page);

        indexForm.submit();
    })
})

function scrollToTop() {
    let timeOut;

    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
        window.scrollBy(0,-50);
        timeOut=setTimeout('scrollToTop()',10);
    }
    else clearTimeout(timeOut);
}