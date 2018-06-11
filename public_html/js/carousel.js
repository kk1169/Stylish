(function ($) {
    
    var methods = {
        initi : function(t){
            
            
            $(t).each(function(){
                var rndno = Math.ceil(Math.random() * (999999 - 0) + 0);
                $(this).attr('id','st-carousel'+rndno);
            });            
  
            
            $('.st-slider-next').on('click',function(){
                var carouselId = $(this).parents('.st-slider').attr('id');
                
                
                var stList = $('#'+carouselId+' ul').children('li').length;
                var SelectedItem;
                var SelectedItemPrev;
                for (var i = 0; i< stList; i++){
                    
                    if($("#"+carouselId+" ul li:eq("+i+")").hasClass('st-slider-active')){
                       SelectedItem = i;
                    }
                }
                $('#'+carouselId+' ul li').removeClass('st-slider-active');
                $('#'+carouselId+' ul li').removeClass('st-slider-pre');
                
                if(SelectedItem == (stList-1)){
                    SelectedItem = 0;
                    SelectedItemPrev = (stList-1);
                }else{
                    SelectedItem = (SelectedItem+1);
                    SelectedItemPrev = SelectedItem-1;
                }
                
                $("#"+carouselId+" ul li:eq("+SelectedItem+")").addClass('st-slider-active');
                $("#"+carouselId+" ul li:eq("+SelectedItemPrev+")").addClass('st-slider-pre');
                
            });
            $('.st-slider-pre').on('click',function(){
                var carouselId = $(this).parents('.st-slider').attr('id');
                
                
                var stList = $('#'+carouselId+' ul').children('li').length;
                var SelectedItem;
                var SelectedItemPrev;
                for (var i = 0; i< stList; i++){
                    
                    if($("#"+carouselId+" ul li:eq("+i+")").hasClass('st-slider-active')){
                       SelectedItem = i;
                    }
                }
                $('#'+carouselId+' ul li').removeClass('st-slider-active');
                $('#'+carouselId+' ul li').removeClass('st-slider-pre');
                
                if(SelectedItem == 0){
                    SelectedItem = (stList-1);
                    SelectedItemPrev = (stList-2);
                }else{
                    SelectedItem = (SelectedItem-1);
                    SelectedItemPrev = (SelectedItem-1);
                }
                
                $("#"+carouselId+" ul li:eq("+SelectedItem+")").addClass('st-slider-active');
                $("#"+carouselId+" ul li:eq("+SelectedItemPrev+")").addClass('st-slider-pre');
                
            });            

        }
      
    };
    
    $.fn.STCarousel = function() {     
        methods.initi(this);
    };
    
   
    
    $(document).ready(function(){
        $('.st-slider').STCarousel();
    });
    
}(jQuery));