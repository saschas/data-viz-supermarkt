/*--------------Einkaufswagen erste Grafik Anfang-------------*/
$('#Einkaufswagen').hover(function() {
	$('#Einkaufswagen-Sprechblase').css('visibility', 'visible');
	$('#Einkaufswagen-color').find('path, rect').css('fill', '#E30613');
}).mouseleave(function() {
	$('#Einkaufswagen-Sprechblase').css('visibility', 'hidden');
	$('#Einkaufswagen-color').find('path, rect').css('fill', '#27348B');
});
/*--------------Einkaufswagen erste Grafik Ende-------------*/
/*--------------Verderben zweite Grafik Anfang-------------*/
$('#faul').hover(function() {
	$('#faul-Sprechblase').css('visibility', 'visible');
}).mouseleave(function() {
	$('#faul-Sprechblase').css('visibility', 'hidden');
});

/*--------------Verderben zweite Grafik Anfang-------------*/