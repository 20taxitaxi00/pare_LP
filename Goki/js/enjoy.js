$(function(){


    // タブメニュー
    $('.tab-nav a').on('click', function(){
        // activeがあった時の処理
        if ($(this).hasClass('active')) {
            return false;
        }

        // activeがなかった時の処理
        $('.tab-nav a').removeClass('active');
        $(this).addClass('active');
        $('.tab-content > section').removeClass('active');
        $('.tab-content > section').filter(this.hash).addClass('active');
        return false;

        

    });


});