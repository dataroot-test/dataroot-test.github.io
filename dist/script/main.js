(function($) {
$(function() {

  $('input, select').styler();
  $('input, checkbox').styler('destroy');

});
})(jQuery);


function PopUpShow(id){
	var elem = id;
	console.log(elem);
    $(id).show();
}
function PopUpHide(id){
    $(id).hide();
}

