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
	$('#wurst1').hide();
	$('#wurst2').show();
}).mouseleave(function() {
	$('#faul-Sprechblase').css('visibility', 'hidden');
	$('#wurst1').show();
	$('#wurst2').hide();
});
/*--------------Verderben zweite Grafik Anfang-------------*/

/*--------------meistgekaufte dritte Grafik Anfang-------------*/
$('#Meistgekauft').hover(function() {
	$('#Meistgekauft-Sprechblase').css('visibility', 'visible');
	$('#Meistgekauft').addClass('show-items');
}).mouseleave(function() {
	$('#Meistgekauft-Sprechblase').css('visibility', 'hidden');
	$('#Meistgekauft').removeClass('show-items');
});
/*--------------meistgekaufte Grafik Ende-------------*/

/*--------------Herkunft vierte Grafik Anfang-------------*/
$('#herkunft').hover(function() {
	$('#herkunft-Sprechblase').css('visibility', 'visible');
	//$('#Apfel').hide();
	$('#herkunft').addClass('show-them');
}).mouseleave(function() {
	$('#herkunft-Sprechblase').css('visibility', 'hidden');
	//$('#Apfel').show();
	$('#herkunft').removeClass('show-them');
});
/*--------------Herkunft vierte Ende-------------*/

/*--------------verschwendung fuenfte Grafik Anfang-------------*/
$('#verschwendung').hover(function() {
	$('#verschwendung-Sprechblase').css('visibility', 'visible');
}).mouseleave(function() {
	$('#verschwendung-Sprechblase').css('visibility', 'hidden');
});
/*--------------verschwendung fuenfte Ende-------------*/

/*--------------rind sechste Grafik Anfang-------------*/
$('#rind').hover(function() {
	$('#rind-Sprechblase, #CO2').css('visibility', 'visible');
	$('#rind').addClass('show-c');
}).mouseleave(function() {
	$('#rind-Sprechblase, #CO2').css('visibility', 'hidden');
	$('#rind').removeClass('show-c');
});

/*--------------rind sechste Ende-------------*/

/*--------------ausgaben siebte Grafik Anfang-------------*/
$('#ausgaben').hover(function() {
	$('#ausgaben-Sprechblase').css('visibility', 'visible');
	$('#hintergrund_7_, #hintergrund_6_, #hintergrund_5_, #hintergrund_4_, #hintergrund_3_').css({'fill': 'white','stroke': '#27348B'});
}).mouseleave(function() {
	$('#ausgaben-Sprechblase').css('visibility', 'hidden');
	$('#hintergrund_7_, #hintergrund_6_, #hintergrund_5_, #hintergrund_4_, #hintergrund_3_').css({'fill': '#27348B', 'stroke': 'white'});
});
/*--------------ausgaben siebte Ende-------------*/

/*--------------schlange achte Grafik Anfang-------------*/
$('#schlange').hover(function() {
	$('#schlange-Sprechblase').css('visibility', 'visible');
}).mouseleave(function() {
	$('#schlange-Sprechblase').css('visibility', 'hidden');
});
/*--------------schlange achte Ende-------------*/

/*--------------kasse neunte Grafik Anfang-------------*/
$('#kasse').hover(function() {
	$('#kasse-Sprechblase').css('visibility', 'visible');
}).mouseleave(function() {
	$('#kasse-Sprechblase').css('visibility', 'hidden');
});
/*--------------kasse neunte Ende-------------*/




















