/*
 *  author:		xujiantao - http://www.xujiantao.com
 *	version:	Kslider 1.3
 */
(function($){
    $.fn.Kslider = function(options)
    {
        var SLIDER = $(this);
        var START_INDEX = 0;
        var LI_SIZE = $('li', SLIDER).size();
        var END_INDEX = LI_SIZE - 1;

        var options = $.extend({}, $.fn.Kslider.defaults, options);
		
		function paginatorActive(ranking)
        {
            if($('.paginator').length > 0)
            {
                $('.paginator i', SLIDER).removeAttr('class').eq(ranking).attr('class', 'active');
            }
        }

        var animates = function(animateType, direct)
        {
            if(animateType == 'NEXT')
            {
                START_INDEX = START_INDEX >= END_INDEX ? 0 : START_INDEX + 1;
            }
            else if(animateType == 'PREV')
            {
                START_INDEX = START_INDEX <= 0 ? END_INDEX : START_INDEX - 1;
            }

			var thisDirect = START_INDEX + 1;
            if(direct)
            {
                thisDirect = START_INDEX;
            }
			
			paginatorActive(thisDirect - 1);

            var spacing = (thisDirect - 1) * parseInt(options.effect == 'horizontal' ? options.widthVal : options.heightVal);

            $('ul', SLIDER).trigger('fn_' + options.effect,[-spacing]);
        }
		
		var sliderUpdate = function(){
			var ulWidthParam = 1;
            if(options.effect == 'horizontal')
            {
                ulWidthParam = LI_SIZE;
            }

            $('ul', SLIDER).width(options.widthVal * ulWidthParam);
			
			            if(SLIDER.attr('id'))
            {
                var sliderDom = '#' + SLIDER.attr('id');
            }
            else
            {
                var sliderDom = '.' + SLIDER.attr('class');
            }

            $(sliderDom + ', ' + sliderDom + ' li').width(options.widthVal).height(options.heightVal);

			if($(SLIDER).find('.paginator i').size() == 0)
			{
				for(var i=1; i <= LI_SIZE; i++)
				{
					var activeClass = i == 1 ? ' class="active"' : '';
					
					$(SLIDER).find('.paginator').append('<i' + activeClass + '></i>');
				}
			}
			
			SLIDER.find('.controls > .paginator').css('top', options.heightVal-parseInt(SLIDER.find('.controls .paginator').outerHeight(true))-5);
		}

        $(SLIDER).on('click', '.paginator i', function(){
            START_INDEX = $(this).index() + 1;
            animates(null, true);
        });

        $('.sliderBtn', SLIDER).on('click', function(){
            animates($(this).hasClass('prevBtn') ? 'PREV' : 'NEXT', false);
        });

		$(SLIDER).hover(function(){
			SLIDER.find('.sliderBtn').fadeIn(150);
		}, function(){
			SLIDER.find('.sliderBtn').fadeOut(150);
		});
		
		$(window).bind('resize', function() {
			//sliderUpdate();
        });
		
		$(SLIDER).on("swipe",function(){
			console.log("Swipe detected!");
		});

        $('ul', SLIDER).bind('fn_' + options.effect,function(event, extent){
            switch(options.effect)
            {
                case 'horizontal':
                    $(this).stop().css({
						'-webkit-transform' : 'translate3d(' + extent + 'px, 0, 0)'
					});
					break;

                case 'fade':
                    $(this).hide().css('margin-top',extent).fadeIn('fast');
                    break;

                case 'vertical':
                    $(this).stop().css({
						'-webkit-transform' : 'translate3d(0, ' + extent + 'px, 0)'
					});
					break;

                case 'none':
                    $(this).css('margin-top', extent);
                    break;
            }
        });

        return this.each(function()
        {
			sliderUpdate();

            if(options.autoPlay == 1)
            {
                var picTimer;
                $(SLIDER).hover(function(){

                    clearInterval(picTimer);

                },function(){

                    picTimer = setInterval(function(){
                        animates('NEXT', false);
                    },options.delays);

                }).trigger('mouseleave');
            }
        });
    };

    $.fn.Kslider.version = '1.3';

    $.fn.Kslider.defaults = {
        autoPlay        :        0,
        delays          :        4000,
        widthVal        :        800,
        heightVal       :        300,
        effect          :	     'horizontal',    // horizontal、vertical、fade、none
    };
})(jQuery);