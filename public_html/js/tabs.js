(function ($) {
    
    var methods = {
        initi : function(t){
               
            var Stabs_Child = t.children();
            var Stabs_Child_Length = t.children().length;
            var Stabs_Child_Active;

            for(i=0; i<Stabs_Child_Length; i++){
                if($(Stabs_Child[i]).hasClass('st-tabs-menu-active')){
                    Stabs_Child_Active = i;
                }
            }
            
            
            $('.st-tabs .st-tabs-menu li').on('click',function(){
                var ClickedIndex = $(this).index();
                var FindParent = $(this).parent().parent().parent();
                var ContentChild = $(FindParent).children('.st-tabs-content').children();
                //MENU LIST
                $(Stabs_Child).removeClass('st-tabs-menu-active');
                $(this).addClass('st-tabs-menu-active');
                
                //CONTNET LIST
                $(ContentChild).removeClass('st-tab-content-active');
                $($(ContentChild).eq(ClickedIndex)).addClass('st-tab-content-active');
                
            });
        }
      
    };
    
    $.fn.STtabs = function() {     
        methods.initi(this);
    };
    
   
    
    $(document).ready(function(){
        $('.st-tabs-menu ul').STtabs();
    });
    
}(jQuery));
