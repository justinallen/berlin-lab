

// board 1

// start creating a group of elements

count   = 1200;

for (var i = 0; i < count; i++) {

	div = document.createElement('div');
	div.className = "sphere";

	div.style.backgroundColor = randomColor({
		hue: 'monochrome', 
		luminosity: 'dark'
		// hue: 'red'
	});

	document.getElementById("container").appendChild(div);

}

// var testcolor = randomColor({hue: 'monochrome', count: 24});

// console.log(testcolor);

// var spheres = $(".sphere");

// console.log(spheres);

$(".sphere").each(function(index){
	
	var bc = $(this).css('background-color');
	    bcShadow = "'0px 0px 4px 2px " + bc + "'";
	$(this).css('box-shadow', bcShadow);
	// $(this).css('borderStyle', 'solid');
	// $(this).css('borderColor', 'black');
	// console.log(bc);
});


$(".sphere").eq(32).addClass("magnet").attr("id", "one");
$(".sphere").eq(159).addClass("magnet").attr("id", "two");
$(".sphere").eq(561).addClass("magnet").attr("id", "three");
$(".sphere").eq(773).addClass("magnet").attr("id", "four");
$(".sphere").eq(1184).addClass("magnet").attr("id", "five");


// sounds

var dishwasher = new Howl({
	urls: ['audio/clips/dishwasher.mp3'],
	sprite: {
	  clip: [0, 7100],
	}
});

var fanfare = new Howl({
	urls: ['audio/clips/indian-cricket-trumpet-fanfare.mp3']
});

var eggs = new Howl({
	urls: ['audio/clips/egg.mp3'],
	sprite: {
	  clip: [0, 8000],
	}
});

var vacuumCleaner = new Howl({
	urls: ['audio/clips/staubsauger.mp3'],
	sprite: {
	  clip: [0, 5000],
	}
});

var gnossiene = new Howl({
	  urls: ['audio/clips/gnossienne-3.mp3'],
	  sprite: {
	    opening: [0, 7500],
	  }
	  // fade: {
	  // 	from: 0,
	  // 	to: 1,
	  // 	duration: 3000
	  // }
});



$("#one").on('click', function(){
	dishwasher.play('clip');
});

$("#two").on('click', function(){
	fanfare.play();
});

$("#three").on('click', function(){
	eggs.play('clip');
});

$("#four").on('click', function(){
	vacuumCleaner.play('clip');
});

$("#five").on('click', function(){
	gnossiene.play('opening');
});

// sounds attributions

// Apertura Sintetica Testa - Erik Satie's Synth Reducted Vol.1
// https://archive.org/details/jamendo-084020

// https://archive.org/details/TrumpetFanfare

// vacuum cleaner, loft - vacuum cleaner, loft, cologne, volksgartenstr.10 (June 4, 2008)
// https://archive.org/details/aporee_1716_2464

// https://archive.org/details/Dishwasher

// Poznan, Mateckiego street, kitchen - boiling eggs (November 27, 2012)
// https://archive.org/details/aporee_14738_18675






