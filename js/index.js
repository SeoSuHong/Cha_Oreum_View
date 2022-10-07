// aside
// 카테고리 숨기기 클릭 시 카테고리 숨김
$(function() {
    $('.hide').click(function() {
        $('aside').animate({width:'0px'}, 500);
        $('#hideMenu').hide();
        setTimeout(function() {
            $('#showMenu').show();
        }, 500);
    })
    $('.show').click(function() {
        $('aside').animate({width:'300px'}, 500);
        $('#showMenu').hide();
        setTimeout(function() {
            $('#hideMenu').show();
        }, 500)
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

// 카테고리 클릭 시 parameter 저장 후 페이지 이동
$(function() {
    let categories = $('.subCategory');
    let hideCategory = $('#category');

    $(categories).click(function() {
        let name = $(this).children('p').text();

        hideCategory.val(name);
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
        submit();
    }
}

// 정렬 기능
function sort(s) {
    $('#sort').val(s);
    submit();
}

// 컨텐츠


// submit
function submit(page) {
    let category = $('#category').val();
    let title = $('#title').val();
    let nickname = $('#nickname').val();
    let sort = $('#sort').val();

    let url = 'index.html?c=' + category + '&t=' + title + '&n=' + nickname + '&s=' + sort + '&p=' + page;

    indexForm.action = url;
    indexForm.submit();
}