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
    
});


    
    
    
           