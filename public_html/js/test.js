$(document).ready(function(){ 

	//Default theme
	$("#default_theme").live("click", function(){
		 jConfirm('Default theme would remove your theme customizations.', 'Default theme', function (ans) {
                if (!ans)
				{
                    return false;
				}
				else
				{
					var the_sid = $('#the_surveyid').val();
					$.ajax({
					type: "POST",
					url: "/survey/default_theme.php?surveyid="+the_sid,
					datatype: "json",
						success: function(data)
						{
             				location.reload(true);
		   				},
						error: function(XMLHttpRequest, exception) 
						{
						   if (XMLHttpRequest.status == 404)
						   {
							   alert('404: Requested page not found.\nPlease try to submit again.');
						   } 
						   else if (XMLHttpRequest.status == 500)
						   {
							   alert('500: Internal Server Error.\nPlease try to submit again.');
						   } 
						   else if (exception === 'parsererror')
						   {
							   alert('Parse error has been occurred.\nPlease try to submit again.');
						   } 
						   else if (exception === 'timeout')
						   {
							   alert("Server detected connection problem.\nPlease try to submit again.");
						   } 
						   else if (exception === 'abort')
						   {
							   alert('Asynchronous request aborted.\nPlease try to submit again.');
						   }
						   else  if (XMLHttpRequest.status === 0)
						   {
							   alert('Network connection failed.\nPlease try to submit again.');
						   } 
						   else
						   {
							   alert('Uncaught Exception.\nPlease try to submit again.');
						   }
						}
        			});
				}
            });													  
	});
	
	
	//Make accordion
    $(function() {
		var icons = {
			header: "ui-icon-triangle-1-e",
			activeHeader: "ui-icon-circle-arrow-s"
			};
		$( "#accordion" ).accordion({
			autoHeight: false,
			navigation: true,
			collapsible: true,
			icons: icons
		});
	});

	//Text enter in header
	$("#txtheaertext").live("change keyup", function(){
		var head_tvalue = $("#txtheaertext").val();
		$('#the_news').html(head_tvalue);
		$('#hidThemeChange').val(1);
	});
	
	//change font size theme
	$('#the_head_font').change(function() {
		var headfont = $('#the_head_font').val();
		$('#the_qheader .text').css('font-size', headfont+"px");
		$('#hidThemeChange').val(1);
	});
	
	//font size survey title
	$('#thefontsize_qtitle').change(function() {
		var qtitlefontsize = $('#thefontsize_qtitle').val();
		$('#the_qtitle').css('font-size', qtitlefontsize+"px");
		$('#thefontsize_qtitle').val(qtitlefontsize);
		//$('#thefontsize_restit').val(qtitlefontsize);
		$('#hidThemeChange').val(1);
	});
	
	//chage survey description font family
	$('#thefontfamily_qdesc').change(function() {
		var qdescfontfmi = $('#thefontfamily_qdesc').val();
		$('#the_qdescr').css('font-family', qdescfontfmi);
		$('#hidThemeChange').val(1);
	});
	
	$('#thefontsize_qdesc').change(function() {// new  
		var qtitlefontsize = $('#thefontsize_qdesc').val();
		$('#the_qdescr').css('font-size', qtitlefontsize+"px");
	    $('#hidThemeChange').val(1);
	});
	
	//chage survey quesiton font family
	$('#thefontfamily_qtext').change(function() {
		var questfontfmi = $('#thefontfamily_qtext').val();
		$('#the_quesiton').css('font-family', questfontfmi);
		$('#hidThemeChange').val(1);
	});
	
	//font size survey quesiton
	$('#thefontsize_qtext').change(function() {
		var questfontsize = $('#thefontsize_qtext').val();
		$('#the_quesiton').css('font-size', questfontsize+"px");
		$('#hidThemeChange').val(1);
	});
	
	//Font size result title
	$('#thefontsize_result_title').change(function() {
		var resulttifsize = $('#thefontsize_result_title').val();
		$('#thepre_rtitle').css('font-size', resulttifsize+'px');
		$('#thefontsize_restit').val(resulttifsize);
		$('#hidThemeChange').val(1);
	});
	
	//Font size result description
	$('#thefontsize_result_desc').change(function() {
		var resulttifdesc = $('#thefontsize_result_desc').val();
		$('#thepre_rdesc').css('font-size', resulttifdesc+'px');
		$('#thefontsize_resdec').val(resulttifdesc);
		$('#hidThemeChange').val(1);
	});
	
	//Font family result title
	$('#thefontfamily_restitle').change(function() {
		var resulttiffm = $('#thefontfamily_restitle').val();
		$('#thepre_rtitle').css('font-family', resulttiffm);
		$('#hidThemeChange').val(1);
	});
	
	//Font family result description
	$('#thefontfamily_resdesc').change(function() {
		var resulttifmdesc = $('#thefontfamily_resdesc').val();
		$('#thepre_rdesc').css('font-family', resulttifmdesc);									 								 					 									 
		$('#hidThemeChange').val(1);
	});


    //change submit button text
    $('#thsmabtn').change(function(){
    var thsmabtn_text =  $('#thsmabtn').val();
    $('#thsmabtn').val(thsmabtn_text);
    $('#hidThemeChange').val(1);
    });
	
	//change next button text
    $('#thnxtbtn').change(function(){
    var thnxtbtn_text =  $('#thnxtbtn').val();
    $('#thnxtbtn').val(thnxtbtn_text);
    $('#hidThemeChange').val(1);
    });



	//remove photo from headerupload_photo_button and any banner image if exist from old theme
	$('#removeheadpic').live("click",function(){
		var the_sid = $('#the_surveyid').val()
		$.ajax({
		type: "POST",
		url: "/survey/removeheadimage.php?the_surveyid="+the_sid,
		datatype: "json",
		success: function(data){
		//alert(data);// testing  
		$('#upload_photo_button').css('display','block');
		$('#upload_img_load').css('display','none');
		$('#image_head_p').html('')
		$('#them_headimg').html('');
		$("#theme_hdleft").html(''); //   
		$('#hid_cmpny_logo').val('0'); //   
		$('.image_logo').css('display','none');
		$('.logo_size_content').css('display','none'); // added by   self
		$('#divLogoPos').hide(); //   
		$('#hid_headlogo').val('na');//   - added
		$('#hid_hdimg_pos').val('na');
		$('#hid_headbanner').val('na');//   - added(compatibility) 
		$('#hidThemeChange').val(1);
		},
		error: function(XMLHttpRequest, exception) 
		{
		   if (XMLHttpRequest.status == 404)
		   {
			   alert('404: Requested page not found.\nPlease try to submit again.');
		   } 
		   else if (XMLHttpRequest.status == 500)
		   {
			   alert('500: Internal Server Error.\nPlease try to submit again.');
		   } 
		   else if (exception === 'parsererror')
		   {
			   alert('Parse error has been occurred.\nPlease try to submit again.');
		   } 
		   else if (exception === 'timeout')
		   {
			   alert("Server detected connection problem.\nPlease try to submit again.");
		   } 
		   else if (exception === 'abort')
		   {
			   alert('Asynchronous request aborted.\nPlease try to submit again.');
		   }
		   else  if (XMLHttpRequest.status === 0)
		   {
			   alert('Network connection failed.\nPlease try to submit again.');
		   } 
		   else
		   {
			   alert('Uncaught Exception.\nPlease try to submit again.');
		   }
		}
		});
	});
	
	//change background image tile and scratch
	$('.the_sttiel').live("click",function(){
		var val = $(this).attr('id');
		$('.bgiconsme').css('border','1px solid #fff');
		$(this).parent().css('border','1px solid #999');
				if(val === '0') //tile
				{
					$('.the_preview_box').css('background-size','auto')		
					$('.the_preview_box').css('background-repeat','repeat')
					$('.the_preview_box').css('background-position','top left')
				}
				else if(val=='1') //center iamge
				{
					$('.the_preview_box').css('background-size','auto')		
					$('.the_preview_box').css('background-repeat','no-repeat')
					$('.the_preview_box').css('background-position','center')
				}
				else if(val=='2')  // stretch 
				{
					$('.the_preview_box').css('background-size','100% 100%')		
					$('.the_preview_box').css('background-repeat','no-repeat')
				}
				else if(val=='3')   // center fill according to width
				{	
					$('.the_preview_box').css('background-size','auto 100%');
					$('.the_preview_box').css('background-repeat','no-repeat');
					$('.the_preview_box').css('background-position','center');
				}
				else if(val=='4')  // center fit accrding to height
				{
					$('.the_preview_box').css('background-size','100% auto');		
					$('.the_preview_box').css('background-repeat','no-repeat');
					$('.the_preview_box').css('background-position','center');
				}
				$('#the_sttiel').val(val);
		$('#hidThemeChange').val(1);
	});
	
	//chagne background color hide and show
	$('.the_rad_bg').live("change",function(){
		var chng= $(this).val();
			if(chng=='1')  //on clicked
			{
				var bg_hd = $('#the_head_bgcolor').val();
				$('#hid_head_bgcolor').val(bg_hd.substring(1));
				$('#the_qheader').css('background-color',bg_hd)
			}
			else  //Transparent background
			{
				$('#the_qheader').css('background-color','transparent')
				$('#hid_head_bgcolor').val('transparent');
			}
		$('#hidThemeChange').val(1);
	});
	
	//remove backgroudn custom pic
	$('#removebackpic').live("click",function(){
		var the_sid = $('#the_surveyid').val()
		$.ajax({
		type: "POST",
		url: "/survey/removebackimage.php?the_surveyid="+the_sid,
		datatype: "json",
		success: function(data){
		$('#back_upload_photo_button').css('display','block');
		$('#customimg').css('display','block');
		$('#back_clrtheme').css('display','block');
		$('#image_bg_p').html('');
		$('.the_preview_box').css('background-image','none');
		$('#hid_backcustom').val('na');
		},
		error: function(XMLHttpRequest, exception) 
		{
		   if (XMLHttpRequest.status == 404)
		   {
			   alert('404: Requested page not found.\nPlease try to submit again.');
		   } 
		   else if (XMLHttpRequest.status == 500)
		   {
			   alert('500: Internal Server Error.\nPlease try to submit again.');
		   } 
		   else if (exception === 'parsererror')
		   {
			   alert('Parse error has been occurred.\nPlease try to submit again.');
		   } 
		   else if (exception === 'timeout')
		   {
			   alert("Server detected connection problem.\nPlease try to submit again.");
		   } 
		   else if (exception === 'abort')
		   {
			   alert('Asynchronous request aborted.\nPlease try to submit again.');
		   }
		   else  if (XMLHttpRequest.status === 0)
		   {
			   alert('Network connection failed.\nPlease try to submit again.');
		   } 
		   else
		   {
			   alert('Uncaught Exception.\nPlease try to submit again.');
		   }
		}
		});
	});
	//uploda image end
	
	
	//-----------------------------------------------------------//
	
	// To be added for compatibility - 
	//change background extension image position
    $('.the_sttiel_wall').live("click",function(){
    var val = $(this).attr('id');
		$('.waliconsme').css('border','1px solid #fff');
		$(this).parent().css('border','1px solid #999');
		    if(val === '0') //tile
		    {
			    $('.the_box').css('background-size','auto');		
			    $('.the_box').css('background-repeat','repeat');
			    $('.the_box').css('background-position','top left');
		    }
		    else if(val=='1') //center iamge
		    {
			    $('.the_box').css('background-size','auto');		
			    $('.the_box').css('background-repeat','no-repeat');
			    $('.the_box').css('background-position','center');
		    }
		    else if(val=='2')  // stretch 
		    {
			    $('.the_box').css('background-size','100% 100%');		
			    $('.the_box').css('background-repeat','no-repeat');
		    }
		    else if(val=='3')   // center fill according to width
		    {	
			    $('.the_box').css('background-size','auto 100%');
			    $('.the_box').css('background-repeat','no-repeat');
			    $('.the_box').css('background-position','center');
			    
		    }
		    else if(val=='4')  // center fit accrding to height
		    {
			    
			    $('.the_box').css('background-size','100% auto');		
			    $('.the_box').css('background-repeat','no-repeat');
			    $('.the_box').css('background-position','center');
		    }
			$('#the_sttiel_wall').val(val);
            $('#hidThemeChange').val(1);
    });
	
	
	//-------------------------------------------------------------------------------------------------------------------------------------------
	// change header image position when image already exists frm db or uploaded 
	
    $('.the_hd_position').live("change",function(){
    if($('.the_hd_position').val() == 'left')
    {
        $('#theme_hdleft').show();
		if($('#hid_headlogo').val().search("amazonaws") != -1){
			$('#them_headimg').filter(':first').css('float','left');
			$('#theme_hdleft').hide();
		}else{
			$('#them_headimg').hide();
		}
        $('#hid_hdimg_pos').val('left');
        $('#the_qtitle').css({'width':'100%','padding':'8px 10px'});
    }else if($('.the_hd_position').val() == 'right')
	{
		$('#theme_hdleft').hide();
        $('#them_headimg').show();
		if($('#hid_headlogo').val().search("amazonaws") != -1){
			$('#them_headimg').filter(':first').css('float','right');
		}
        $('#hid_hdimg_pos').val('right');
        $('#the_qtitle').css({'width':'100%','padding':'5px 10px'});
    }else
    {
        $('#theme_hdleft').hide();
        $('#them_headimg').show();
		if($('#hid_headlogo').val().search("amazonaws") != -1){
			$('#them_headimg').filter(':first').css('float','none');
		}
        $('#hid_hdimg_pos').val('top');
        $('#the_qtitle').css({'width':'100%','padding':'5px 10px'});
    }
    });
	
	// set image  pos as retrieved frm DB
	if($('.the_hd_position').val() == 'left')
    {
        $('#theme_hdleft').show();
		if($('#hid_headlogo').val().search("amazonaws") != -1){
			$('#them_headimg').filter(':first').css('float','left');
		}else{
			$('#them_headimg').hide();
		}
        $('#hid_hdimg_pos').val('left');
        $('#the_qtitle').css({'width':'100%','padding':'8px 10px'});
    }
    else if($('.the_hd_position').val() == 'top')
    {
        $('#theme_hdleft').hide();
        $('#them_headimg').show();
		if($('#hid_headlogo').val().search("amazonaws") != -1){
			$('#them_headimg').filter(':first').css('float','none');
		}
        $('#hid_hdimg_pos').val('top');
        $('#the_qtitle').css({'width':'100%','padding':'5px 10px'});
    }
	else if($('.the_hd_position').val() == 'right')
    {
        $('#theme_hdleft').hide();
        $('#them_headimg').show();
		if($('#hid_headlogo').val().search("amazonaws") != -1){
			$('#them_headimg').filter(':first').css('float','right');
		}
        $('#hid_hdimg_pos').val('right');
        $('#the_qtitle').css({'width':'100%','padding':'5px 10px'});
    }
	else{
		$('#them_headimg').hide();
		$('#theme_hdleft').hide();
	}
	
	//chagne button styles of 'submit'
	var btnbg = $('#hid_btnback_clr').val();
	var darkbtn = ColorLuminance("#"+btnbg, -0.2);
	$('#the_btn_pre').css('border', '1px solid '+darkbtn);

	//chagne button styles of 'next'	
	var nxtbg = $('#hid_nxtback_clr').val();
	var darknxt = ColorLuminance("#"+nxtbg, -0.2);
	$('#the_nxt_pre').css('border', '1px solid '+darknxt);
	$('#pred_thumb_19').css('border','2px solid #eeeeee !important;');
	//predefine theme select
	$('.pred_thumb').live("click",function(){
		var pre_id = $(this).attr('id');


		$('.pred_thumb').removeClass('thSelected');
		$(this).addClass('thSelected');


        if(pre_id == 'pred_thumb_19')
        {
            $('.pred_thumb_19').css('border','1px solid #eeeeee !important;');
        }
        else
        {
            $('.pred_thumb').css('border','3px solid #eeeeee');
        }
		$('#'+pre_id).css('border','3px solid #3c8ac9');
		
		var font_clr = '';
		var font_bgclr = '';
		var btnbg_clr ='';
		
		if(pre_id=='pred_thumb_1')
		{
			font_clr ='000000'; font_bgclr = 'ffffff'; btnbg_clr = '444444'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({
								'background-image' :  'url("https://proprofs-cdn.s3.amazonaws.com/images/QM/user_images/1/no_image1.jpg")',
								'background-position' : 'center center',
								'background-repeat' : 'no-repeat',
								'background-color' : '#'+font_bgclr								
							});/* newly added */
			$('#hid_backcolor').val(font_bgclr);  //Background color hidden
			$('#hid_backpreimg').val('na'); //predefind iamges
			$('#hid_backcustom').val('na'); //custom images
			$('#hid_border').val('ffffff');
			$('#the_border').css('background-color' ,'#ffffff');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Segoe UI'});
			$('.font_theme_family').val('Segoe UI');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
		}
		else if(pre_id=='pred_thumb_2')
		{
			font_clr ='FE0190'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/QM/user_images/theme/images/FloralPatternBackground.jpg'; btnbg_clr = 'FE0190'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			$('#hid_border').val('fffc9e');
			$('#the_border').css('background-color' ,'#fffc9e');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
		}
		else if(pre_id=='pred_thumb_3')
		{
			font_clr ='31D1E1'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/QM/user_images/theme/images/background_theme1.jpg'; btnbg_clr = '31D1E1'; btn_clr ='dddddd';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff','background-size':'auto 100%'});
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'0px','background-color':'ffffff'});
			$('#hid_border').val('444444');
			$('#the_border').css('background-color' ,'#444444');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Helvetica'});
			$('.font_theme_family').val('Helvetica');
			$('#the_sttiel').val('2');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
		}
		else if(pre_id=='pred_thumb_4')
		{
			font_clr ='004B84'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/QM/user_images/theme/images/wood.jpg';  btnbg_clr='004B84'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('#hid_border').val('999999');
			$('#the_border').css('background-color' ,'#999999');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
		}
		else if(pre_id=='pred_thumb_5')
		{
			font_clr ='000000'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/QM/user_images/theme/icons/pre_5.png'; btnbg_clr='000000'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('#hid_border').val('999999');
			$('#the_border').css('background-color' ,'#999999');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
		}
		else if(pre_id=='pred_thumb_6')
		{
			font_clr ='ffffff'; btnbg_clr='459912'; btn_clr ='ffffff'; font_bgclr = '5C5C6F';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#5C5C6F');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Lucida Sans'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'color':'#ffffff'});
			$('.font_theme_family').val('Lucida Sans');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
		}
		else if(pre_id=='pred_thumb_7')
		{
			font_clr ='ffffff'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/QM/user_images/theme/images/leather.jpg'; btnbg_clr='000000'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
		}
		else if(pre_id=='pred_thumb_8')
		{
			font_clr ='ffffff'; var btnbg_clr='f2853c'; btn_clr ='ffffff'; font_bgclr = '000000';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('F60043');
			$('#the_border').css('background-color' ,'#000000'); 
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Source sans pro'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'color':'#ffffff'});
			$('.font_theme_family').val('Source sans pro');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
		}
		else if(pre_id=='pred_thumb_9')
		{
			font_clr ='ffffff'; var btnbg_clr='edd432'; btn_clr ='ffffff'; font_bgclr = '3E73B0';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('00ff00');
			$('#the_border').css('background-color' ,'#3E73B0');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Helvetica'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'color':'#ffffff'});
			$('.font_theme_family').val('Helvetica');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
		}
		else if(pre_id=='pred_thumb_10')  //the_quesiton
		{
			font_clr ='ffffff'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/1452023/66664.jpg'; btnbg_clr='edd432'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Open Sans, Arial, sans-serif'});
			$('.font_theme_family').val('Open Sans, Arial, sans-serif');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Open Sans, Arial, sans-serif'});
			
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#ffffff');
			
			$('#the_qtitle').css({'font-family' :'Open Sans, Arial, sans-serif'});
			$('#the_qtitle').css({'color' :'#ffffff'});
			$('#the_answer').css({'color' :'#ffffff'});
			$('#quiz_desc_clr').css({'color' :'#ffffff'});
			$('#the_qtitle').css({'font-size' :'30px '});
			$('#the_qdescr').css({'font-size' :'16px '});
			$('#the_quesiton').css('font-size','22px');
			$('#the_quesiton').css({'font-weight' :'400 '});
			$('#the_answer').css('font-size','16px');
		    $('#the_explanation').css('font-size','22px');
			$('#thepre_rtitle').css('font-size','22px');
			$('#thepre_rdesc').css('font-size','18px');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

			$('#thefontsize_qtitle').val(30); 
			$('#thefontsize_qdesc').val(16);
			$('#thefontsize_qtext').val(22);
			$('#thefontsize_ansopt').val(16);
			$('#thefontsize_result_title').val(22);
			$('#thefontsize_result_desc').val(18);

		    //Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Open Sans, Arial, sans-serif'});
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			
			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val('16');

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
				   $('.the_answer').css('font-size', ansfontsize+'px');
				}
				else if(the_meqtype=='essay')  
				{
				   $('#the_txtesy').css('font-size', ansfontsize+'px');
				}
				$('#hidThemeChange').val(1);
			});
			
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'background-color':'#edd432'});
			
		}
		else if(pre_id=='pred_thumb_11')
		{
			font_clr ='1b4e7b'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/1452023/91784.jpg'; btnbg_clr='f2853c'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'1b4e7b'});
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'1b4e7b'});
			
			$('#the_qtitle').css({'font-size' :'35px '});
			$('#the_qdescr').css({'font-size' :'16px '});
			$('#the_quesiton').css('font-size','24px');
			$('#the_answer').css('font-size','16px');
		    $('#the_explanation').css('font-size','18px');
			$('#thepre_rtitle').css('font-size','22px');
			$('#thepre_rdesc').css('font-size','18px');
		    
			$('#thefontsize_qtitle').val(35); 
			$('#thefontsize_qdesc').val(16);
			$('#thefontsize_qtext').val(24);
			$('#thefontsize_ansopt').val(16);
			$('#thefontsize_result_title').val(22);
			$('#thefontsize_result_desc').val(18);
			
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto'});
			$('.font_theme_family').val('Roboto');
			//Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Roboto'});
			$('#the_qtitle').css({'color' :'#1b4e7b'});
				
			$('#the_answer').css({'color' :'#1b4e7b'});
			
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('1b4e7b');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Roboto');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-family', 'Roboto');
				}
				$('#hidThemeChange').val(1);
			});
	
			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', ansfontsize+'px');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-size', ansfontsize+'px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'background-color':'#f2853c'});
			
		}
		else if(pre_id=='pred_thumb_12')
		{
			font_clr ='424242'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/1452023/10238118024.jpg'; btnbg_clr='008000'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'424242'});
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Lucida Sans'});
			$('.font_theme_family').val('Lucida Sans');
			//Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Lucida Sans'});
			$('#the_answer').css({'color' :'#ffffff'});
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

			
			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Lucida Sans');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-family', 'Lucida Sans');
				}
				$('#hidThemeChange').val(1);
			});
	
			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', ansfontsize+'px');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-size', ansfontsize+'px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'color':''});
		}
		else if(pre_id=='pred_thumb_13')
		{
			font_clr ='5b5b5b'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/67523/2877620454.jpg'; btnbg_clr='3C8AC9'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			
			
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto'});
			$('.font_theme_family').val('Roboto');
			//Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Roboto'});
			
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			
			$('#the_qtitle').css({'color' :'#4d4d4d'});
			$('#the_qtitle').css({'font-size' :'30px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#thefontsize_qtitle').val(30);
			$('#thefontsize_qtext').val(22);
			$('#thefontsize_ansopt').val(16);
			$('#the_quesiton').css('font-size','22px');
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			
			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Roboto');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-family','Roboto');
				}
				$('#hidThemeChange').val(1);
			});
	
			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', '16px');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-size', '18px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'color':''});
		}	
		else if(pre_id=='pred_thumb_17')
		{
			font_clr ='ffffff'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/1452023/76072.jpg'; btnbg_clr='329a16'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'KG Ten Thousand Reasons Alt'});
			$('.font_theme_family').val('KG Ten Thousand Reasons Alt');
			$('#the_border').css('background-color' ,'#ffffff');
			$('#the_answer').css({'color' :'#ffffff'});
			
			//Font family the_btn_pre
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'KG Ten Thousand Reasons Alt'});
			
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'color':'#ffffff'});
			$('#the_qtitle').css({'color' :'#ffffff'});
			$('#the_qtitle').css({'font-size' :'25px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#thefontsize_qtitle').val(30);
			$('.the_btn_pre').css({'color' :'#ffffff'});
		    $('#the_quesiton').css({'font-size' :'20px'});
			$('#hid_qtxt_color').val('20px');
			$('#the_quesiton').css({'font-weight' :'800 '});
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			
			
			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'KG Ten Thousand Reasons Alt');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-family', 'KG Ten Thousand Reasons Alt');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'background-color':'#329a16'});
	    }
		else if(pre_id=='pred_thumb_18') 
		{
			font_clr ='424242'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/1452023/57505.jpg'; btnbg_clr='459912'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			
			
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'PT Serif'});
			$('.font_theme_family').val('PT Serif');
			
			//Font_family 
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'PT Serif'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-size':'18px'});
			
			$('#the_quesiton').css('font-size','22px');
			$('.the_btn_pre').css({'color':'#ffffff'}); //the_btn_pre
			$('#the_qtitle').css({'color':'#'+font_clr, 'font-size':'30px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#the_qtitle').css('font-size','30px');
			$('#the_qtitle').css({'font-size' :'30px '});
			$('#the_qdescr').css({'font-size' :'16px '});
			$('#the_quesiton').css('font-size','20px');
			$('#the_answer').css('font-size','16px');
		    $('#the_explanation').css('font-size','18px');
			$('#thepre_rtitle').css('font-size','22px');
			$('#thepre_rdesc').css('font-size','18px');
		    
			$('#thefontsize_qtitle').val(30); 
			$('#thefontsize_qdesc').val(16);
			$('#thefontsize_qtext').val(20);
			$('#thefontsize_ansopt').val(16);
			$('#thefontsize_result_title').val(22);
			$('#thefontsize_result_desc').val(18);

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#ffffff');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			
			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'PT Serif');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-family', 'PT Serif');
				}
				$('#hidThemeChange').val(1);
			});
	
			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', ansfontsize+'px');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-size', ansfontsize+'px');
				}
				$('#hidThemeChange').val(1);
			});

	        //chagne font family theme
			$('#the_header_font').change(function() {
				var headfontfmi = $('#the_header_font').val();
				$('#the_qheader .text').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});

			//chage survey title font family
			$('#thefontfamily_qtitle').change(function() {
				var qtitlefontfmi = $('#thefontfamily_qtitle').val();
				$('#the_qtitle').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'background-color':'#459912'});
		}
		else if(pre_id=='pred_thumb_19')
		{
			font_clr ='000000'; btnbg_clr='52a1e2'; btn_clr ='ffffff'; font_bgclr = 'ffffff';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#ffffff');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Lucida Sans'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'color':'#000000'});
			$('.font_theme_family').val('Lucida Sans');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
		}
		
		else if(pre_id=='pred_thumb_20') //11
		{
			font_clr ='1b4e7b'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/1452023/6811697447.jpg'; btnbg_clr='f2853c'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'1b4e7b'});
			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'1b4e7b'});
			
			$('#the_qtitle').css({'font-size' :'35px '});
			$('#the_qdescr').css({'font-size' :'16px '});
			$('#the_quesiton').css('font-size','24px');
			$('#the_answer').css('font-size','16px');
		    $('#the_explanation').css('font-size','18px');
			$('#thepre_rtitle').css('font-size','22px');
			$('#thepre_rdesc').css('font-size','18px');
		    
			$('#thefontsize_qtitle').val(35); 
			$('#thefontsize_qdesc').val(16);
			$('#thefontsize_qtext').val(24);
			$('#thefontsize_ansopt').val(16);
			$('#thefontsize_result_title').val(22);
			$('#thefontsize_result_desc').val(18);
			
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto'});
			$('.font_theme_family').val('Roboto');
			//Font family the_txtsingle color
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Roboto'});
			$('#the_qtitle').css({'color' :'#1b4e7b'});
				
			$('#the_answer').css({'color' :'#1b4e7b'});
			$('#the_txtsingle,#the_txtsingle1').css({'color' :'#1b4e7b'}); //the_txtsingle

			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('1b4e7b');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			
			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Roboto');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-family', 'Roboto');
				}
				$('#hidThemeChange').val(1);
			});
	
			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', ansfontsize+'px');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-size', ansfontsize+'px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'background-color':'#f2853c'});
			
		}
		
		else if(pre_id=='pred_thumb_21') 
		{
			font_clr ='ffffff'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/1452023/2562355565.jpg'; btnbg_clr='459912'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			
			
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'PT Serif'});
			$('.font_theme_family').val('PT Serif');
			
			//Font_family 
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'PT Serif'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-size':'18px'});
			
			$('#the_quesiton').css('font-size','22px');
			$('.the_btn_pre').css({'color':'#ffffff'}); //the_btn_pre
			$('#the_qtitle').css({'color':'#'+font_clr, 'font-size':'30px'});
			$('#the_qtitle').css('font-size','30px');
			$('#the_qtitle').css({'font-size' :'30px '});
			$('#the_qdescr').css({'font-size' :'16px '});
			$('#the_quesiton').css('font-size','20px');
			$('#the_answer').css('font-size','16px');
		    $('#the_explanation').css('font-size','18px');
			$('#thepre_rtitle').css('font-size','22px');
			$('#thepre_rdesc').css('font-size','18px');
			$('#the_answer').css({'color' :'#1b4e7b'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr}); //the_txtsingle

			$('#thefontsize_qtitle').val(30); 
			$('#thefontsize_qdesc').val(16);
			$('#thefontsize_qtext').val(20);
			$('#thefontsize_ansopt').val(16);
			$('#thefontsize_result_title').val(22);
			$('#thefontsize_result_desc').val(18);

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#ffffff');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			
			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'PT Serif');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-family', 'PT Serif');
				}
				$('#hidThemeChange').val(1);
			});
	
			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', ansfontsize+'px');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-size', ansfontsize+'px');
				}
				$('#hidThemeChange').val(1);
			});

	        //chagne font family theme
			$('#the_header_font').change(function() {
				var headfontfmi = $('#the_header_font').val();
				$('#the_qheader .text').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});

			//chage survey title font family qtitle
			$('#thefontfamily_qtitle').change(function() {
				var qtitlefontfmi = $('#thefontfamily_qtitle').val();
				$('#the_qtitle').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'background-color':'#459912'});
		}
		else if(pre_id=='pred_thumb_22') 
		{
			font_clr ='424242'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/1452023/3216518590.jpg'; btnbg_clr='459912'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			
			
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'PT Serif'});
			$('.font_theme_family').val('PT Serif');
			
			//Font_family 
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'PT Serif'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-size':'18px'});
			
			$('#the_quesiton').css('font-size','22px');
			$('.the_btn_pre').css({'color':'#ffffff'}); //the_btn_pre
			$('#the_qtitle').css({'color':'#'+font_clr, 'font-size':'30px'});
			$('#the_qtitle').css('font-size','30px');
			$('#the_qtitle').css({'font-size' :'30px '});
			$('#the_qdescr').css({'font-size' :'16px '});
			$('#the_quesiton').css('font-size','20px');
			$('#the_answer').css('font-size','16px');
		    $('#the_explanation').css('font-size','18px');
			$('#thepre_rtitle').css('font-size','22px');
			$('#thepre_rdesc').css('font-size','18px');
			$('#the_answer').css({'color':'#'+font_clr});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		    
			$('#thefontsize_qtitle').val(30); 
			$('#thefontsize_qdesc').val(16);
			$('#thefontsize_qtext').val(20);
			$('#thefontsize_ansopt').val(16);
			$('#thefontsize_result_title').val(22);
			$('#thefontsize_result_desc').val(18);

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#ffffff');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			
			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'PT Serif');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-family', 'PT Serif');
				}
				$('#hidThemeChange').val(1);
			});
	
			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', ansfontsize+'px');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-size', ansfontsize+'px');
				}
				$('#hidThemeChange').val(1);
			});

	        //chagne font family theme
			$('#the_header_font').change(function() {
				var headfontfmi = $('#the_header_font').val();
				$('#the_qheader .text').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});

			//chage survey title font family
			$('#thefontfamily_qtitle').change(function() {
				var qtitlefontfmi = $('#thefontfamily_qtitle').val();
				$('#the_qtitle').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'background-color':'#459912'});
		}
		else if(pre_id=='pred_thumb_23') 
		{
			font_clr ='424242'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/1452023/57505.jpg'; btnbg_clr='459912'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			
			
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'PT Serif'});
			$('.font_theme_family').val('PT Serif');
			
			//Font_family 
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'PT Serif'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-size':'18px'});
			
			$('#the_quesiton').css('font-size','22px');
			$('.the_btn_pre').css({'color':'#ffffff'});
			$('#the_qtitle').css({'color':'#'+font_clr, 'font-size':'30px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#the_qtitle').css('font-size','30px');
			$('#the_qtitle').css({'font-size' :'30px '});
			$('#the_qdescr').css({'font-size' :'16px '});
			$('#the_quesiton').css('font-size','20px');
			$('#the_answer').css('font-size','16px');
		    $('#the_explanation').css('font-size','18px');
			$('#thepre_rtitle').css('font-size','22px');
			$('#thepre_rdesc').css('font-size','18px');
		    
			$('#thefontsize_qtitle').val(30); 
			$('#thefontsize_qdesc').val(16);
			$('#thefontsize_qtext').val(20);
			$('#thefontsize_ansopt').val(16);
			$('#thefontsize_result_title').val(22);
			$('#thefontsize_result_desc').val(18);

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#ffffff');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);
			
			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'PT Serif');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-family', 'PT Serif');
				}
				$('#hidThemeChange').val(1);
			});
	
			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);
				
				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', ansfontsize+'px');
				}
				else if(the_meqtype=='essay')  
				{
					$('#the_txtesy').css('font-size', ansfontsize+'px');
				}
				$('#hidThemeChange').val(1);
			});

	        //chagne font family theme
			$('#the_header_font').change(function() {
				var headfontfmi = $('#the_header_font').val();
				$('#the_qheader .text').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});

			//chage survey title font family
			$('#thefontfamily_qtitle').change(function() {
				var qtitlefontfmi = $('#thefontfamily_qtitle').val();
				$('#the_qtitle').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'background-color':'#459912'});
		}
		//raman's code
		else if(pre_id=='pred_thumb_24')
		{

			font_clr ='5b5b5b'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/1452023/1796566667.jpg'; btnbg_clr='3C8AC9'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});


			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto'});
			$('.font_theme_family').val('Roboto');
			//Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Roboto'});

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});

			$('#the_qtitle').css({'color' :'#4d4d4d'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#the_qtitle').css({'font-size' :'30px'});
			$('#thefontsize_qtitle').val(30);
			$('#thefontsize_qtext').val(22);
			$('#thefontsize_ansopt').val(16);
			$('#the_quesiton').css('font-size','22px');
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);

			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Roboto');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-family','Roboto');
				}
				$('#hidThemeChange').val(1);
			});

			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', '16px');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-size', '18px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'color':''});

		}
		else if(pre_id=='pred_thumb_25')
		{
			font_clr ='4D4D4D'; btnbg_clr='52a1e2'; btn_clr ='ffffff'; font_bgclr = 'CFD8DD';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#CFD8DD');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#4D4D4D' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'color':'#4D4D4D'});
			$('.font_theme_family').val('Roboto,sans-serif');

		}

		else if(pre_id=='pred_thumb_26')
		{

			font_clr ='4D4D4D'; btnbg_clr='3C8AB5'; btn_clr ='ffffff'; font_bgclr = 'F5F5F5';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#F5F5F5');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#4D4D4D' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'color':'#4D4D4D'});
			$('.font_theme_family').val('Roboto,sans-serif');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		}

		else if(pre_id=='pred_thumb_27')
		{

			font_clr ='5b5b5b'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/1452023/1067933857.jpg'; btnbg_clr='3C8AC9'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff', 'background-position': 'right top'});


			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto'});
			$('.font_theme_family').val('Roboto');
			//Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Roboto'});

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});

			$('#the_qtitle').css({'color' :'#4d4d4d'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#the_qtitle').css({'font-size' :'30px'});
			$('#thefontsize_qtitle').val(30);
			$('#thefontsize_qtext').val(22);
			$('#thefontsize_ansopt').val(16);
			$('#the_quesiton').css('font-size','22px');
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);

			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Roboto');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-family','Roboto');
				}
				$('#hidThemeChange').val(1);
			});

			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', '16px');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-size', '18px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'color':''});

		}
		else if(pre_id=='pred_thumb_28')
		{

			font_clr ='5b5b5b'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/67523/6316243392.jpg'; btnbg_clr='3C8AC9'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff', 'background-position': 'right top'});


			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto'});
			$('.font_theme_family').val('Roboto');
			//Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Roboto'});

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});

			$('#the_qtitle').css({'color' :'#4d4d4d'});
			$('#the_qtitle').css({'font-size' :'30px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#thefontsize_qtitle').val(30);
			$('#thefontsize_qtext').val(22);
			$('#thefontsize_ansopt').val(16);
			$('#the_quesiton').css('font-size','22px');
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);

			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Roboto');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-family','Roboto');
				}
				$('#hidThemeChange').val(1);
			});

			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', '16px');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-size', '18px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'color':''});

		}
		else if(pre_id=='pred_thumb_29')
		{

			font_clr ='5b5b5b'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/67523/6066164331.jpg'; btnbg_clr='3C8AC9'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff', 'background-position': 'right top'});


			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto'});
			$('.font_theme_family').val('Roboto');
			//Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Roboto'});

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});

			$('#the_qtitle').css({'color' :'#4d4d4d'});
			$('#the_qtitle').css({'font-size' :'30px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#thefontsize_qtitle').val(30);
			$('#thefontsize_qtext').val(22);
			$('#thefontsize_ansopt').val(16);
			$('#the_quesiton').css('font-size','22px');
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);

			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Roboto');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-family','Roboto');
				}
				$('#hidThemeChange').val(1);
			});

			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', '16px');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-size', '18px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'color':''});

		}

		else if(pre_id=='pred_thumb_30')
		{

			font_clr ='5b5b5b'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/67523/6861344740.jpg'; btnbg_clr='3C8AC9'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff', 'background-position': 'right top'});


			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto'});
			$('.font_theme_family').val('Roboto');
			//Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Roboto'});

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});

			$('#the_qtitle').css({'color' :'#4d4d4d'});
			$('#the_qtitle').css({'font-size' :'30px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#thefontsize_qtitle').val(30);
			$('#thefontsize_qtext').val(22);
			$('#thefontsize_ansopt').val(16);
			$('#the_quesiton').css('font-size','22px');
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);

			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Roboto');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-family','Roboto');
				}
				$('#hidThemeChange').val(1);
			});

			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', '16px');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-size', '18px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'color':''});

		}
		else if(pre_id=='pred_thumb_31')
		{

			font_clr ='5b5b5b'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/67523/6357348094.jpg'; btnbg_clr='3C8AC9'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff', 'background-position': 'right top'});


			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto'});
			$('.font_theme_family').val('Roboto');
			//Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Roboto'});

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});

			$('#the_qtitle').css({'color' :'#4d4d4d'});
			$('#the_qtitle').css({'font-size' :'30px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#thefontsize_qtitle').val(30);
			$('#thefontsize_qtext').val(22);
			$('#thefontsize_ansopt').val(16);
			$('#the_quesiton').css('font-size','22px');
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);

			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Roboto');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-family','Roboto');
				}
				$('#hidThemeChange').val(1);
			});

			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', '16px');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-size', '18px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'color':''});

		}
		else if(pre_id=='pred_thumb_32')
		{

			font_clr ='5b5b5b'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/67523/28602105953.jpg'; btnbg_clr='3C8AC9'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff', 'background-position': 'right top'});


			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto'});
			$('.font_theme_family').val('Roboto');
			//Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Roboto'});

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});

			$('#the_qtitle').css({'color' :'#4d4d4d'});
			$('#the_qtitle').css({'font-size' :'30px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#thefontsize_qtitle').val(30);
			$('#thefontsize_qtext').val(22);
			$('#thefontsize_ansopt').val(16);
			$('#the_quesiton').css('font-size','22px');
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);

			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Roboto');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-family','Roboto');
				}
				$('#hidThemeChange').val(1);
			});

			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', '16px');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-size', '18px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'color':''});

		}

		else if(pre_id=='pred_thumb_33')
		{

			font_clr ='5b5b5b'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/67523/7505884224.jpg'; btnbg_clr='f2853c'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff', 'background-position': 'right top'});


			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'Roboto'});
			$('.font_theme_family').val('Roboto');
			//Font family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'Roboto'});

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});

			$('#the_qtitle').css({'color' :'#4d4d4d'});
			$('#the_qtitle').css({'font-size' :'30px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#thefontsize_qtitle').val(30);
			$('#thefontsize_qtext').val(22);
			$('#thefontsize_ansopt').val(16);
			$('#the_quesiton').css('font-size','22px');
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#000000');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);

			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {
				var ansfontfmi = $('#thefontfamily_ansopt').val();

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'Roboto');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-family','Roboto');
				}
				$('#hidThemeChange').val(1);
			});

			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', '16px');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-size', '18px');
				}
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'color':'#f2853c'});

		}
		else if(pre_id=='pred_thumb_34')
		{

			font_clr ='ffffff'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/67523/1027232192.jpg'; btnbg_clr='f2853c'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});


			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'PT Serif'});
			$('.font_theme_family').val('PT Serif');

			//Font_family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'PT Serif'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-size':'18px'});

			$('#the_quesiton').css('font-size','22px');
			$('.the_btn_pre').css({'color':'#ffffff'}); //the_btn_pre
			$('#the_qtitle').css({'color':'#'+font_clr, 'font-size':'30px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#the_qtitle').css('font-size','30px');
			$('#the_qtitle').css({'font-size' :'30px '});
			$('#the_qdescr').css({'font-size' :'16px '});
			$('#the_quesiton').css('font-size','20px');
			$('#the_answer').css('font-size','16px');
		    $('#the_explanation').css('font-size','18px');
			$('#thepre_rtitle').css('font-size','22px');
			$('#thepre_rdesc').css('font-size','18px');

			$('#thefontsize_qtitle').val(30);
			$('#thefontsize_qdesc').val(16);
			$('#thefontsize_qtext').val(20);
			$('#thefontsize_ansopt').val(16);
			$('#thefontsize_result_title').val(22);
			$('#thefontsize_result_desc').val(18);

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#ffffff');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);

			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {


				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'PT Serif');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-family', 'PT Serif');
				}
				$('#hidThemeChange').val(1);
			});

			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', ansfontsize+'px');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-size', ansfontsize+'px');
				}
				$('#hidThemeChange').val(1);
			});

	        //chagne font family theme
			$('#the_header_font').change(function() {
				var headfontfmi = $('#the_header_font').val();
				$('#the_qheader .text').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});

			//chage survey title font family
			$('#thefontfamily_qtitle').change(function() {
				var qtitlefontfmi = $('#thefontfamily_qtitle').val();
				$('#the_qtitle').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'background-color':'#f2853c'});

		}

		else if(pre_id=='pred_thumb_35')
		{

			font_clr ='ffffff'; var img1 = 'https://proprofs-cdn.s3.amazonaws.com/images/SM/user_images/67523/5747010819.jpg'; btnbg_clr='f2853c'; btn_clr ='ffffff';
			$('.the_preview_box').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});


			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre,#the_nxt_pre').css({'font-family':'PT Serif'});
			$('.font_theme_family').val('PT Serif');

			//Font_family
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-family':'PT Serif'});
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,.the_btn_pre').css({'font-size':'18px'});

			$('#the_quesiton').css('font-size','22px');
			$('.the_btn_pre').css({'color':'#ffffff'}); //the_btn_pre
			$('#the_qtitle').css({'color':'#'+font_clr, 'font-size':'30px'});
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});
			$('#the_qtitle').css('font-size','30px');
			$('#the_qtitle').css({'font-size' :'30px '});
			$('#the_qdescr').css({'font-size' :'16px '});
			$('#the_quesiton').css('font-size','20px');
			$('#the_answer').css('font-size','16px');
		    $('#the_explanation').css('font-size','18px');
			$('#thepre_rtitle').css('font-size','22px');
			$('#thepre_rdesc').css('font-size','18px');

			$('#thefontsize_qtitle').val(30);
			$('#thefontsize_qdesc').val(16);
			$('#thefontsize_qtext').val(20);
			$('#thefontsize_ansopt').val(16);
			$('#thefontsize_result_title').val(22);
			$('#thefontsize_result_desc').val(18);

			$('.bg_img_div').css({'background-image':'url(' + img1 + ')','border':'none','box-shadow':'none','background-color':'ffffff'});
			$('#hid_border').val('000000');
			$('#the_border').css('background-color' ,'#ffffff');
			$('#hid_backcolor').val('ffffff');
			$('#hid_backpreimg').val(img1);
			$('#hid_backcustom').val(img1);

			//chage survey answer font family
			var the_meqtype = $('#the_question_type').val();
			$('#thefontfamily_ansopt').change(function() {


				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-family', 'PT Serif');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-family', 'PT Serif');
				}
				$('#hidThemeChange').val(1);
			});

			//font size survey answer
			$('#thefontsize_ansopt').change(function() {
				var ansfontsize = $('#thefontsize_ansopt').val(16);

				if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
				{
					$('.the_answer').css('font-size', ansfontsize+'px');
				}
				else if(the_meqtype=='essay')
				{
					$('#the_txtesy').css('font-size', ansfontsize+'px');
				}
				$('#hidThemeChange').val(1);
			});

	        //chagne font family theme
			$('#the_header_font').change(function() {
				var headfontfmi = $('#the_header_font').val();
				$('#the_qheader .text').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});

			//chage survey title font family
			$('#thefontfamily_qtitle').change(function() {
				var qtitlefontfmi = $('#thefontfamily_qtitle').val();
				$('#the_qtitle').css('font-family', 'PT Serif');
				$('#hidThemeChange').val(1);
			});
			//button color according to theme
			$("#quiz_buttonbg_clr").css({'background-color':'#f2853c'});

		}

		else if(pre_id=='pred_thumb_36')
		{ //the_btn_pre
			font_clr ='fff'; btnbg_clr='ececec'; btn_clr ='4d4d4d'; font_bgclr = '3288d4';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#CFD8DD');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#fff' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'color':'#fff'});
			$('.font_theme_family').val('Roboto,sans-serif');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		}


		else if(pre_id=='pred_thumb_37')
		{ //the_btn_pre
			font_clr ='fff'; btnbg_clr='ececec'; btn_clr ='4d4d4d'; font_bgclr = '636363';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#636363');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#fff' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'color':'#fff'});
			$('.font_theme_family').val('Roboto,sans-serif');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		}
		else if(pre_id=='pred_thumb_38')
		{ //the_btn_pre
			font_clr ='fff'; btnbg_clr='ececec'; btn_clr ='4d4d4d'; font_bgclr = '517eb5';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#517eb5');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#fff' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'color':'#fff'});
			$('.font_theme_family').val('Roboto,sans-serif');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		}
		else if(pre_id=='pred_thumb_39')
		{ //the_btn_pre color
			font_clr ='000'; btnbg_clr='517eb5'; btn_clr ='ffffff'; font_bgclr = 'd7d7d7';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#517eb5');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#000' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'color':'#000'});
			$('.font_theme_family').val('Roboto,sans-serif');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		}


		else if(pre_id=='pred_thumb_40')
		{ //the_btn_pre
			font_clr ='fff'; btnbg_clr='ececec'; btn_clr ='4d4d4d'; font_bgclr = '436799';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#517eb5');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#fff' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'color':'#fff'});
			$('.font_theme_family').val('Roboto,sans-serif');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		}
		else if(pre_id=='pred_thumb_41')
		{ //the_btn_pre
			font_clr ='fff'; btnbg_clr='ececec'; btn_clr ='4d4d4d'; font_bgclr = '919191';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#517eb5');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#fff' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'color':'#fff'});
			$('.font_theme_family').val('Roboto,sans-serif');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		}
		else if(pre_id=='pred_thumb_42')
		{ //the_btn_pre
			font_clr ='fff'; btnbg_clr='ececec'; btn_clr ='4d4d4d'; font_bgclr = '55877c';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#517eb5');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#fff' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'color':'#fff'});
			$('.font_theme_family').val('Roboto,sans-serif');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		}

		else if(pre_id=='pred_thumb_43')
		{ //the_btn_pre
			font_clr ='4d4d4d'; btnbg_clr='3c8ac9'; btn_clr ='fff'; font_bgclr = 'e1d9f2';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#517eb5');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#4d4d4d' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'color':'#4d4d4d'});
			$('.font_theme_family').val('Roboto,sans-serif');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		}
		else if(pre_id=='pred_thumb_44')
		{ //the_btn_pre
			font_clr ='ffffff'; btnbg_clr='3c8ac9'; btn_clr ='fff'; font_bgclr = '788597';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#517eb5');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#ffffff' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'color':'#ffffff'});
			$('.font_theme_family').val('Roboto,sans-serif');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		}
		else if(pre_id=='pred_thumb_45')
		{ //the_btn_pre
			font_clr ='4d4d4d'; btnbg_clr='3c8ac9'; btn_clr ='fff'; font_bgclr = 'd3e1ee';
			$('.the_preview_box').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('.bg_img_div').css({'background-image':'none','border':'none','box-shadow':'none','background-color':'#'+font_bgclr});
			$('#hid_border').val('666666');
			$('#the_border').css('background-color' ,'#517eb5');
			$('#hid_backcolor').val(font_bgclr);
			$('#hid_backpreimg').val('na');
			$('#hid_backcustom').val('na');
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'font-family':'Roboto,sans-serif','color':'#4d4d4d' });
			$('.theme_preview_box, .the_qtitle, .the_qdescr,.the_quesiton,.the_answer,#thepre_rtitle,#thepre_rdesc,#the_nxt_pre').css({'color':'#4d4d4d'});
			$('.font_theme_family').val('Roboto,sans-serif');
			$('#the_txtsingle,#the_txtsingle1').css({'color':'#'+font_clr});

		}





		//*************** THEME FRAMES END **********
		
		
		$('.the_answer').css('font-size','16px');
		$('#the_qheader').css({'background':'transparent', 'min-height':'40px'})
		$("input:radio.the_rad_bg[value=0]").attr("checked","true");
		$('#hid_head_bgcolor').val('transparent');
		$('#theme_head_bg').css('background-color','#ffffff');
		$('#hid_qtitle_color').val(font_clr);
		
		
		$('#the_qdescr').css('color','#'+font_clr);
		$('#hid_qdesc_color').val(font_clr);
		
		$('#the_quesiton').css('color','#'+font_clr);
		$('#hid_qtxt_color').val(font_clr);
		
		$('.the_answer').css('color','#'+font_clr);
		$('#hid_ansop_color').val(font_clr);
		
		$('#thepre_lablel, #thepre_rdesc, #thepre_rtitle').css('color', '#'+font_clr);
		$('#the_label, #hid_rtit_color, #hid_rdesc_color').val(font_clr);
        
        $('#hid_updatepre').val('1');     
        updatehrefs();
        
		var darkbtn = ColorLuminance("#"+btnbg_clr, -0.2);
		$('.the_btn_pre').css({'background-color':'#'+btnbg_clr, 'border':'1px solid '+darkbtn, 'color':'#'+btn_clr});
		$('#the_nxt_pre').css({'background-color':'#'+btnbg_clr, 'border':'1px solid '+darkbtn, 'color':'#'+btn_clr});
		$('#hid_btnback_clr').val(btnbg_clr);
		$('#btn_backclr').css('background-color','#'+btnbg_clr);
		$('#hid_btntxt_clr').val(btn_clr);
		
		$('#the_qdescr').css('font-size','14px');
		var qtitlefontsize=18;
		var the_meqtype=$('#the_question_type').val();
		
		if(the_meqtype=='multichoice'||the_meqtype=='multi')
		{
			$('.the_answer').css('font-size',qtitlefontsize+"px");
		}
		if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
		{
			$('.the_answer').css('font-size', qtitlefontsize+"px");
		}
		else if(the_meqtype=='essay')  
		{
			$('#the_txtesy').css('font-size', qtitlefontsize+"px");
		}
		$('#hidThemeChange').val(1);
       
		if(pre_id=='pred_thumb_1'){
			$('.delete_bg_img').css('display','none');/*newly added*/
		}else{
			$('.delete_bg_img').css('display','block');
		}
        
        //updating thumbnail for save my theme pop up
        if($('#hid_backcustom').val() == 'na'){
            $('#divPreview').css('background','#'+$('#hid_backcolor').val());
        }
        else{
            $('#divPreview').css('background','url('+$('#hid_backcustom').val()+')');
        }
        $('#strTheme').css({'color':'#'+$('#hid_qtitle_color').val(),'font-size':'17px'});
        $('#strPreview').css('color','#'+$('#hid_qtxt_color').val());
	});
			
	// For background image			
	$('a#bg_change_img').fancybox({				
		fitToView	: false,
		width		: 1024,
		height		: 565,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		helpers: { 
        title: null
    	},
		type		: 'ajax'
	});
	// for background extension(wallpaper) as new theme -  
	$('a#wal_change_img').fancybox({				
		fitToView	: false,
		width		: 1024,
		height		: 542,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		helpers: { 
        title: null
    	},
		type		: 'ajax'
	});
			
	
	$('.quiz_title_clr').colorpicker({
		parts:  [ 'map', 'bar', 'footer'],
        alpha:  false,
		altAlpha: true,
		altField: '#quiz_title_clr',
		select:	function(event, color) {
			addToEventLog7(color.formatted);
		},
							
	});
	
		$('.quiz_buttonbg_clr').colorpicker({
		parts:  [ 'map', 'bar', 'footer'],
        alpha:  false,
		altAlpha: true,
		altField: '#quiz_buttonbg_clr',
		select:	function(event, color) {
			the_btn_backclr(color.formatted);//color selected for 'submit' button applies to the 'next' button as well-- newly added  
		},
							
	});


	$('.quiz_buttontxt_clr').colorpicker({
		parts:  [ 'map', 'bar', 'footer'],
        alpha:  false,
		altAlpha: true,
		altField: '#quiz_buttontxt_clr',
		select:	function(event, color) {
			the_btn_txtclr(color.formatted);// color selected for text of 'submit' button applies to the text of 'next' button as well-- newly added  
		},
							
	});


	$('.quiz_desc_clr').colorpicker({
		parts:  [ 'map', 'bar', 'footer'],
        alpha:  false,
		altAlpha: true,		
		altField: '#quiz_desc_clr',
		swatchesWidth:	173,
		select:	function(event, color) {
			addToEventLog2(color.formatted);
		},
	});
							
	$('.quiz_question_clr').colorpicker({
		parts:  [ 'map', 'bar', 'footer' ],
        alpha:  false,
		altAlpha: true,
		altField: '#quiz_question_clr',
		swatchesWidth:	173,
		select:			function(event, color) {
			addToEventLog3(color.formatted);
		},
	});
							
	$('.quiz_answer_clr').colorpicker({
		parts:  [ 'map', 'bar', 'footer'],
        alpha:  false,
		altAlpha: true,
		altField: '#quiz_answer_clr',
		swatchesWidth:	173,
		select:			function(event, color) {
						addToEventLog4(color.formatted);
					},
		});
							
							
	$('.quiz_rtitle_clr').colorpicker({
		parts:  [ 'map', 'bar', 'footer'],
        alpha:  false,
		altAlpha: true,
		altField: '#quiz_rtitle_clr',
		swatchesWidth:	173,
		select:			function(event, color) {
						addToEventLog5(color.formatted);
					},
	});
							
	$('.quiz_rdesc_clr').colorpicker({
		parts:  [ 'map', 'bar', 'footer'],
        alpha:  false,
		altAlpha: true,
		altField: '#quiz_rdesc_clr',
		swatchesWidth:	173,
		select:	function(event, color) {
					addToEventLog6(color.formatted);
				},
	});
	// Background image delete
	$(".delete_bg_img").click(function() {																														
		$('.the_preview_box').css('background-color','#fff');
		$('.the_preview_box').css('background-image','');
		$('#hid_backcustom').val('na');
		$('#hid_backpreimg').val('na');
		$('#hid_backcolor').val('ffffff');
		$('#the_sttiel').val('na');// newly added  
		$('.bg_img_div').css('background-color','#fff');
		$('.bg_img_div').css({
								'background-image' :  'url("https://proprofs-cdn.s3.amazonaws.com/images/QM/user_images/1/no_image1.jpg")',
								'background-position' : 'center center',
								'background-repeat' : 'no-repeat'								
							});
        $(this).css('display','none');
        $('#hid_updatepre').val('1');     
        updatehrefs();
		$('#hidThemeChange').val(1);
	});
	// Background extension(wallpaper) Delete newly added-  
	$(".delete_wal_img").click(function() {																														
		$('.the_box').css('background-color','#fff');
		$('.the_box').css('background-image','');
		$('#hid_wallcustom').val('na');
		$('#hid_wallpreimg').val('na');
		$('#hid_wallcolor').val('ffffff');
		$('#the_sttiel_wall').val('na');// newly added  
		$('.bg_img_div_ext').css('background-color','#fff');
		$('.bg_img_div_ext').css({
								'background-image' : 'url("https://proprofs-cdn.s3.amazonaws.com/images/QM/user_images/1/no_image1.jpg")',
								'background-position' : 'center center',
								'background-repeat' : 'no-repeat'								
							});
		$('#hidThemeChange').val(1);
	});
	
	
	$('#txt_logo_size_h').live('change keyup paste', function(){
		var log_height = $('#txt_logo_size_h').val();
	    $('.hlogo_size').css('height',log_height+'px');
		$('.hlogo_size').css('width','auto');
        var cssw= $('.hlogo_size').css('width').replace("px","");
        $('#txt_logo_size_w').val(cssw);
        $('#logo_size').val(log_height+"X"+cssw);
		$('#hidThemeChange').val(1);
	});
	
	$('#txt_logo_size_w').live('change keyup paste', function(){
		//var log_height = $('#txt_logo_size_w').val();
		var log_width = $('#txt_logo_size_h').val();
        $('.hlogo_size').css('width',log_width+'px');
		$('.hlogo_size').css('height','auto');
        var cssh= $('.hlogo_size').css('height').replace("px","");
        $('#txt_logo_size_h').val(cssh);
        $('#logo_size').val(cssh+"X"+log_width);
		$('#hidThemeChange').val(1);
	});
});

function the_lbl_txtclr(clr)
{
	$('#thepre_lablel').css('color', '#'+clr);
	$('#the_label').val(clr);
}

function the_theme_head(clr)
{
	$('#the_qheader .text').css('color', '#'+clr);
	$('#hid_head_color').val(clr);
}

function the_head_bgcolor(clr)
{
	$('#hid_head_bgcolor').val(clr);
	$('#the_qheader').css({'display' : 'block', 'background-color' : '#' + clr});
	$('#hid_head_bgcolor').val(clr);
	$("input:radio.the_rad_bg[value=1]").attr("checked","true");
}

function the_back_bg(clr)
{
	$('.the_preview_box').css('background-image', 'none');
	$('.the_preview_box').css('background-color', '#' + clr);
	$('#hid_backcolor').val(clr);
	$('#hid_backpreimg').val('na');
	$('#hid_backcustom').val('na');
}
// changes the background extension - 
function wall_back_bg(clr)
{
	$('.the_box').css('background-image', 'none');
    $('.the_box').css('background-color', '#' + clr, 'important');
    $('#hid_wallcolor').val(clr);
    $('#hid_wallpreimg').val('na');
    $('#hid_wallcustom').val('na');
}

function the_btn_backclr(clr)
{	
	// for 'submit' Button
	$('#the_btn_pre').css('background-color', '#' + clr , 'important');
	$('#hid_btnback_clr').val(clr);
	var btnbg = $('#hid_btnback_clr').val();
	var darkbtn = ColorLuminance("#"+clr, -0.2);
	$('#the_btn_pre').css('border', '1px solid '+darkbtn);
	
	// for 'next' Button
	$('#the_nxt_pre').css('background-color','#'+ clr,'important');
    $('#hid_nxtback_clr').val(clr);
    var nxtbg=$('#hid_nxtback_clr').val();
    var darknxt=ColorLuminance("#"+clr,-0.2);
    $('#the_nxt_pre').css('border','1px solid '+darknxt);
    $('#hidThemeChange').val(1);
}


function the_btn_txtclr(clr)
{
	// for 'submit' Button
	$('#the_btn_pre').css('color', '#' + clr, 'important');
	$('#hid_btntxt_clr').val(clr);
	$('#the_nxt_pre').css('color','#'+ clr,'important');
    $('#hid_nxttxt_clr').val(clr);
    $('#hidThemeChange').val(1);
}

function addToEventLog7(clrs)
{
	$('#quiz_title_clr').css('background-color','#'+clrs);	
	$('#the_qtitle').css('color', '#' + clrs);
	$('#hid_qtitle_color').val(clrs);
    $('#strTheme').css({'color':'#'+$('#hid_qtitle_color').val(),'font-size':'17px'});
}
function addToEventLog2(clrs)
{
	$('#quiz_desc_clr').css('background-color','#'+clrs);	
	$('#the_qdescr').css('color', '#' + clrs);
	$('#hid_qdesc_color').val(clrs);
}
function addToEventLog3(clrs)
{
	$('#quiz_question_clr').css('background-color','#'+clrs);	
	$('#the_quesiton').css('color', '#' + clrs);
	$('#hid_qtxt_color').val(clrs);
    $('#strPreview').css('color','#'+$('#hid_qtxt_color').val());
}
function addToEventLog4(clrs)
{
	$('#quiz_answer_clr').css('background-color','#'+clrs);	
	$('#hid_ansop_color').val(clrs);
	var the_meqtype = $('#the_question_type').val();
	
	if(the_meqtype=='multichoice' || the_meqtype=='multi' || the_meqtype=='file_upload' || the_meqtype=='grid' || the_meqtype=='AddressAll' || the_meqtype=='list' || the_meqtype=='date' || the_meqtype=='Phone' || the_meqtype=='Email' || the_meqtype=='Name' || the_meqtype=='SingleTextBox' || the_meqtype=='ranking')
		{
			$('.the_answer').css('color', '#' + clrs);
		}
		else if(the_meqtype=='essay')  
		{
			$('#the_txtesy').css('color', '#' + clrs);
		}
	
}
function addToEventLog5(clrs)
{
	$('#quiz_rtitle_clr').css('background-color','#'+clrs);	
	$('#thepre_rtitle').css('color', '#' + clrs);
	$('#hid_rtit_color').val(clrs);
}
function addToEventLog6(clrs)
{
	$('#quiz_rdesc_clr').css('background-color','#'+clrs);	
	$('#thepre_rdesc').css('color', '#' + clrs);
	$('#hid_rdesc_color').val(clrs);
}
function updatehrefs()
{

    var updatehid  =  $('#hid_updatepre').val();
    var hidbgcolro =  $('#hid_backcolor').val();
    var hidbgimg =  $('#hid_backpreimg').val();
    var hidbgimg1 =  $('#hid_backcustom').val();
    var the_sid = $('#the_surveyid').val();
    var url = '/survey/bg_img.php?v=bgimg&sid='+the_sid;
    if(updatehid == '1')
    {
        if(hidbgimg=='na' && hidbgimg1=='na')
        {
            url +='&bgimgs=na&edited=1&bgclrsp='+hidbgcolro;
        }
        else
        {
            hidbgimg1  = hidbgimg1.replace("https://","");    
            url +='&bgclrsp=na&bgimgs='+hidbgimg1+'&edited=1';
        }
        $('#bg_change_img').attr('href',url);
    }
}

/**************************************
* From Old Theme * compatibility
******************

//removing background image start
function removeBackpic()
{
    $('#hidBkact').val(0);
	$('#customimg').css('display','block');
	$('#back_clrtheme').css('display','block');
	$('#hid_backcustom').val('na');
	$('.the_preview_box').css('background-image','none');
	document.getElementById('uploaded_bk_image').src='';
	$('#bk_div_container').css('display','block');	
	$('#bk_remove').css('display','none');
	$('#uploaded_bk_image').attr('src','');
	$('#uploaded_bk_image').css('display','none');
	$('#uplded_bkimg_name').val('');
    $('#divBkImage').css('display','none');
    toggleUploader(2);
}
//removing background image end

//removing background extension image start
function removeWallpic()
{
    $('#hidWallact').val(0);
	$('#customimg2').css('display','block');
	$('#wall_clrtheme').css('display','block');
	$('#hid_wallcustom').val('na');
	$('.the_box').css('background-image','none');
	document.getElementById('uploaded_wall_image').src='';
	$('#wall_div_container').css('display','block');	
	$('#wall_remove').css('display','none');
	$('#uploaded_wall_image').attr('src','');
	$('#uploaded_wall_image').css('display','none');
	$('#uplded_wallimg_name').val('');
    $('#divWallImage').css('display','none');
    toggleUploader(3);
}
//removing background extension image end

//removing header image start
function removeHeadpic()
{
    $('#hidHdact').val(0);
    $('#hid_headlogo').val('na');
    $('#hd_div_container').css('display','block');    
    $('#hd_remove').css('display','none');
    $('#uploaded_hd_image').attr('src','');
    $('#uploaded_hd_image').css('display','none');
    $('#uplded_hdimg_name').val('');
    $('#divHdImage').css('display','none');
    $("#them_headimg").html('');
    $("#theme_hdleft").html('');
    $("#the_qtitle").css('width','100%');
    $('#hid_cmpny_logo').val('0');
    $('#divLogoPos').hide();
    $('#hid_hdimg_pos').val('na');
    $('#rdl_logo').attr("checked","checked");
    toggleUploader(1);
}
//removing header image end

//removing banner image start
function removeBnrpic()
{
    $('#hidBnract').val(0);
    $('#hid_headbanner').val('na');
    $('#bnr_div_container').css('display','block');    
    $('#bnr_remove').css('display','none');
    $('#uploaded_bnr_image').attr('src','');
    $('#uploaded_bnr_image').css('display','none');
    $('#uplded_bnrimg_name').val('');
    $('#divBnrImage').css('display','none');
    $("#them_headimg").html('');
    $("#the_qtitle").css('width','100%');
    $('#hid_cmpny_logo').val('0');
    $('#rdl_banner').attr("checked","checked");
    toggleUploader(1);
}
//removing banner image end

//toggling between banner image and logo
$('.rdl_hdr').live('click',function(){
    if($('#rdl_logo').is(':checked'))
    {        
        $('#hd_link_container').show();
        $('#divBnrImage').hide();
        $('#head_upload_image').show();
        $('#bnr_upload_image').hide();
        $('#bnr_link_container').hide();
        if($('#uploaded_hd_image').attr('src') != '')
        {
            $('#divHdImage').show();
        }
        HeaderUploader('logo');
        if(chk_for_banner == 0)
        {
            banneruploader.destroy();
        }
    }
    else
    {
        $('#head_upload_image').hide();
        $('#bnr_upload_image').show();
        $('#hd_link_container').hide();
        $('#bnr_link_container').show();
        $('#divHdImage').hide();
        if($('#uploaded_bnr_image').attr('src') != '')
        {
            $('#divBnrImage').show();
        }
        HeaderUploader('banner');
        if(chk_for_header == 0)
        {
            headeruploader.destroy();
        }
    }
});
*/

