(function ($) {
    
    var methods = {
        initi : function(t){
            
            $(t).each(function(){
                var rndno = Math.ceil(Math.random() * (999999 - 0) + 0);
                var element = "<label for='st-check"+rndno+"' class='st-checkbox-label'></label>";
                $(this).attr('id','st-check'+rndno);
                $(this).after(element);
            });
            
            $(t).on('click',function(){
                var thisID = $(this).attr('id');
                if($(this).hasClass('st-active-checkbox')){
                    $(this).addClass('ripple-animate');
                    $(this).removeClass('st-active-checkbox');
                }else{
                    $(this).addClass('ripple-animate');
                    $(this).addClass('st-active-checkbox');
                }
                
                setTimeout(function(){
                    $('#'+thisID).removeClass('ripple-animate');
                },500);
            });
            
            
            
            

        }
      
    };
    
    $.fn.STCheckbox = function() {     
        methods.initi(this);
    };
    
   
    
    $(document).ready(function(){
        $('.st-checkbox').STCheckbox();
    });
    
}(jQuery));