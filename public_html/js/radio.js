(function ($) {
    
    var methods = {
        initi : function(t){
            
            $(t).each(function(){
                var rndno = Math.ceil(Math.random() * (999999 - 0) + 0);
                var element = "<label for='st-radio"+rndno+"' class='st-radio-label'></label>";
                $(this).attr('id','st-radio'+rndno);
                $(this).after(element);
            });
            
            $(t).on('click',function(){
                
                $(t).removeClass('st-active-radio');
                if($(this).hasClass('st-active-radio')){
                    $(this).removeClass('st-active-radio');
                }else{
                    $(this).addClass('st-active-radio');
                }
            });
            

        }
      
    };
    
    $.fn.STRadio = function() {     
        methods.initi(this);
    };
    
   
    
    $(document).ready(function(){
        $('.st-radio').STRadio();
    });
    
}(jQuery));