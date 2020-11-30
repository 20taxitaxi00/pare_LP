
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


    // ハンバーガーメニュー
	$('#q7-btn').on('click',function(){
		let isActive = $(this).hasClass('on');
		toggleDrower(isActive);
    });
    
    // ドロワー
	function toggleDrower(isActive) {
	    $('.js-hamburger')
	    if (isActive) {
	      $('#drower-bg').fadeOut(600);
	    } else {
	      $('#drower-bg').fadeIn(600);
	    }
	    $('.js-hamburger').toggleClass('on');
	    $('.js-drower').toggleClass('on');
	  }


});

