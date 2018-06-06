(function ($) {
    
   
    $(document).ready(function(){
        
        
        
        $('.st-dropdown-toggle a').on('click',function(e){
            e.preventDefault();
            var target = $(this).attr('data-target');       
            
            if(target != undefined){
                if($('#'+target).hasClass('st-dropdown-active')){
                    $($(this).parent().parent()).removeClass('open');
                    $('#'+target).removeClass('st-dropdown-active');
                }else{
                    $($(this).parent().parent()).addClass('open');
                    $('#'+target).addClass('st-dropdown-active');
                }
            }else{
                var targetParent = $(this).parent().parent();
                
                
                if($(targetParent).children('.st-dropdown-menu').hasClass('st-dropdown-active')){
                     $(targetParent).removeClass('open');
                    $(targetParent).children('.st-dropdown-menu').removeClass('st-dropdown-active');
                }else{
                     $(targetParent).addClass('open');
                    $(targetParent).children('.st-dropdown-menu').addClass('st-dropdown-active');
                }
            }
        });
    });
    
}(jQuery));
