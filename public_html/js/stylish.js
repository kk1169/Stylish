/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    $('.form-group .form-control').focusout(function(){
        if($(this).val() != ''){
            var selectedLabel = $(this).parent().children('.float-label');
            $(selectedLabel).addClass('active');
        }else{
            var selectedLabel = $(this).parent().children('.float-label');
            $(selectedLabel).removeClass('active');
        }
    });
    $('.form-group .form-control').each(function(){
        if($(this).val() != ''){
            var selectedLabel = $(this).parent().children('.float-label');
            $(selectedLabel).addClass('active');
        } else{
            var selectedLabel = $(this).parent().children('.float-label');
            $(selectedLabel).removeClass('active');
        }
    }); 
    
    
    $("[data-toggle='collapse']").on("click", function() {
        var target = $(this).attr('data-target');
        
        if($('#'+target).hasClass('in')){
            $('#'+target).removeClass('in');
        }else{
            $('#'+target).addClass('in');
        }
    });
    
//    
//    
//    $('.btn').on('click',function(){
//        
//        $(this).addClass('ripple-animate');
//        
//        setTimeout(function(){
//            $('.btn').removeClass('ripple-animate');
//        },500);
//    });
    
});


    
    
    
//TABS START
//***********************************************************************************
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
//TABS END


//CHECKBOX START
//***********************************************************************************
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
//CHECKBOX END


//RADIO START
//***********************************************************************************      
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
//RADIO END


//DROPDOWN START
//*********************************************************************************** 
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
//DROPDOWN END


//INPUT START
//*********************************************************************************** 
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
//INPUT END



//MODEL START
//*********************************************************************************** 
(function ($) {
    
    var methods = {
        initi : function(t){
            
//            if($(t).parent().hasClass('st-addon')){
//                $(t).on('focus',function(){
//                    var $this = $(this);
//                    $this.siblings('i').addClass('st-focused-icon');
//                });
//
//                $(t).on('blur',function(){
//                    var $this = $(this);
//                    $this.siblings('i').removeClass('st-focused-icon');
//                });
//            }

            $("[data-toggle='st-model']").on('click',function(){
                var target = $(this).attr('data-target');
        
                if($('#'+target).hasClass('open')){
                    $('#'+target).removeClass('open');
                }else{
                    $('#'+target).addClass('open');
                }
            });
            
            $("[data-dismiss='st-model']").on('click',function(){
                var target = $(this).parent().parent();
                $(target).removeClass('open');
            });
            

        }
      
    };
    
    $.fn.STModel = function() {     
        methods.initi(this);
    };
    
    $(document).ready(function(){
        $('.st-model').STModel();
        
    });
    
}(jQuery));



//ACCORDION
(function ($) {
    
    var methods = {
        initi : function(t){
            var allChildren = $(t).find('li');
            //console.log(allChildren);
            
            $(allChildren).each(function(){
                
                if($(this).children().siblings('ul').length){
                    $(this).children('a').addClass('st-accordion-sub');
                    
                   // console.log($(this).children('.st-accordion-sub'));
                    
                    
                    //$(this).children().append('<span class="material-icons">expand_less</span>');
                    //console.log($(this).children().siblings('ul').length);
                }
            });
            
            $('.st-accordion-sub').each(function(){
               $(this).append('<span class="material-icons">expand_less</span>'); 
            });
            
            
            $('.st-accordion-sub').on('click',function(e){
                
                e.preventDefault();
                
                if($(this).hasClass('open')){
                    $(this).removeClass('open');
                    $(this).siblings('ul').slideToggle('fast');
                }else{
                    $(this).addClass('open');
                    $(this).siblings('ul').slideToggle('fast');
                }
            });
            

        }
      
    };
    
    $.fn.STAccordion = function() {     
        methods.initi(this);
    };
    
    $(document).ready(function(){
        $('.st-accordion').STAccordion();
    });
    
}(jQuery));


//POPUP
(function ($) {
    
    var methods = {
        initi : function(data){
            //var popupSelector = t.selector;
            
            
            //SETTING VALUES
            var popupTarget = data.target;
            var popupMessage = data.message;
            var popupHeader = data.header;
            var popupSaved = data.saved;
            
            var element =   '<div class="st-popup"> '+
                            '   <div class="st-popup-dilog"> '+
                            '       <div class="st-popup-content"> ';
                
            //HEADER SETTING
            if(popupHeader != undefined){     
                element = element + '   <div class="st-popup-header">'+popupHeader+'</div> ';
            }     
            
            //BODY SETTING
             element = element + '   <div class="st-popup-body">'+popupMessage+'</div> '+
                            '           <div class="st-popup-footer"> ';
            
            //ACTION SETTING
            if(popupTarget == 'alert'){
                element = element + '   <button class="btn btn-default st-popup-ok" onclick="'+popupSaved+'">OK</button> ';
            }else if(popupTarget == 'confirm'){
                element = element + '   <button class="btn btn-default st-popup-saved" onclick="'+popupSaved+'">Save</button> ';
                element = element + '   <button class="btn btn-default st-popup-cancel">Cancel</button> ';
            }
                    
            element = element +   '       </div> '+
                            '       </div> '+
                            '   </div> '+
                            '</div>';
                    
            
            $(document).on('click','.st-popup-cancel, .st-popup-saved, .st-popup-ok',function(e){
                e.preventDefault();
                $('.st-popup').hide();
                $('.st-popup').remove();
                
            });
            
            $('body').append(element);

        }
      
    };
    
//    $.fn.STPopup = function(data) {     
//        methods.initi(this,data);
//    };

    STPopup = function(data){
        methods.initi(data);
    }

    
}(jQuery)); 