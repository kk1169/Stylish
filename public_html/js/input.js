(function ($) {
    
    var methods = {
        initi : function(t){
            
            if($(t).parent().hasClass('st-addon')){
                $(t).on('focus',function(){
                    var $this = $(this);
                    $this.siblings('i').addClass('st-focused-icon');
                });

                $(t).on('blur',function(){
                    var $this = $(this);
                    $this.siblings('i').removeClass('st-focused-icon');
                });
            }
            

        }
      
    };
    
    $.fn.STInput = function() {     
        methods.initi(this);
    };
    
   
    
    $(document).ready(function(){
        $('.st-form-control').STInput();
    });
    
}(jQuery));