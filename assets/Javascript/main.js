$('#Einkaufswagen').hover(function() {
	$('#Einkaufswagen-Sprechblase').css('visibility', 'visible');
	$('#Einkaufswagen-color').find('path, rect').css('fill', 'tomato');
}).mouseleave(function() {
	$('#Einkaufswagen-Sprechblase').css('visibility', 'hidden');
	$('#Einkaufswagen-color').find('path, rect').css('fill', '#27348B');
});
