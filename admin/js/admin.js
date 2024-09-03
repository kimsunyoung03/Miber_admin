$(document).ready(function () {

    //어드민 필터클릭
    $('.filter_select').each(function() {
        const $filterGroup = $(this);

        $filterGroup.find('li').click(function() {
            // 해당 필터 그룹 내 모든 li에서 'on' 클래스를 제거
            $filterGroup.find('li').removeClass('on');
            // 클릭한 li에 'on' 클래스 추가
            $(this).addClass('on');
        });
    });
    $('.filter_select2').each(function() {
        const $filterGroup = $(this);

        $filterGroup.find('li').click(function() {
            // 해당 필터 그룹 내 모든 li에서 'on' 클래스를 제거
            $filterGroup.find('li').removeClass('on');
            // 클릭한 li에 'on' 클래스 추가
            $(this).addClass('on');
        });
    });
    $('.filter_select3').each(function() {
        const $filterGroup = $(this);

        $filterGroup.find('li').click(function() {
            // 해당 필터 그룹 내 모든 li에서 'on' 클래스를 제거
            $filterGroup.find('li').removeClass('on');
            // 클릭한 li에 'on' 클래스 추가
            $(this).addClass('on');
        });
    });

});

$(document).ready(function() {
    $('.img_close').hide();
    // 파일 선택 시 이미지 미리보기
    $('input[name="imgfile"]').on('change', function(event) {
        e.stopPropagation(); 
        const input = event.target;
        const label = $(input).parent();
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = $('<img>').attr('src', e.target.result).show();
                // 기존의 이미지가 있으면 제거
                label.find('img').remove();
                // 새 이미지를 추가
                label.append(img);
                // 아이콘 제어
                label.find('.fa-plus').hide();
                label.find('.img_close').show();
            };
            reader.readAsDataURL(file);
        }
    });

    // 이미지 삭제
    $('.img_close').on('click', function(e) {
        e.stopPropagation(); 
        const label = $(this).parent();
        label.find('img').remove();
        label.find('.fa-plus').show();
        $(this).hide();
        label.find('input[type="file"]').val('');
    });

    // 클릭 시 파일 선택 창 열기
    $('.imgfile').on('click', function() {
        if ($(this).find('input[type="file"]').val() === '') {
            $(this).find('input[type="file"]').click();
        }
    });
});