

// sounds

var dishwasher = new Howl({
	urls: ['audio/clips/dishwasher.mp3'],
	loop: true,
	volume: .2,
	sprite: {
	  clip: [0, 7100],
	}
});

var gong = new Howl({
	urls: ['audio/clips/gong.mp3'],
	sprite: {
	  clip: [0, 3000],
	},
	onend: function() {
    	console.log('gong rung');
    	$('#one').removeClass('gongplaying');
  	}
});


$("#one").on('mouseenter', function(){
	// console.log('entered');
	dishwasher.play('clip');
	$("#one").addClass('active');
});


$("#one").on('mouseleave', function(){
	// console.log('exited');
	dishwasher.pause();
	$('#one'). removeClass('active');
});

$("#one").on('click', function(){
	// console.log('clicked');
	gong.play('clip').fade(1,0,3000);
    $('#one').addClass('gongplaying');
});


// * * * 

// sounds attributions

// https://archive.org/details/Dishwasher

// gong: sascha muller
// https://archive.org/details/rz073










// * * * * * * * * * * * * * * * * * * * * * * * * * * 

// board 1

// start creating a group of elements

// count   = 25;

// for (var i = 0; i < count; i++) {

// 	div = document.createElement('div');
// 	div.className = "sphere";

// 	div.style.backgroundColor = randomColor({
// 		hue: 'monochrome', 
// 		luminosity: 'light'
// 		// hue: 'red'
// 	});

// 	document.getElementById("container").appendChild(div);

// }

// var testcolor = randomColor({hue: 'monochrome', count: 24});

// console.log(testcolor);

// var spheres = $(".sphere");

// console.log(spheres);

// $(".sphere").each(function(index){
	
// 	var bc = $(this).css('background-color');
// 	    bcShadow = "'0px 0px 4px 2px " + bc + "'";
// 	$(this).css('box-shadow', bcShadow);
// 	// $(this).css('borderStyle', 'solid');
// 	// $(this).css('borderColor', 'black');
// 	// console.log(bc);
// });


// $(".sphere").eq(3).addClass("magnet").attr("id", "one");
// $(".sphere").eq(5).addClass("magnet").attr("id", "two");
// $(".sphere").eq(9).addClass("magnet").attr("id", "three");
// $(".sphere").eq(11).addClass("magnet").attr("id", "four");
// $(".sphere").eq(18).addClass("magnet").attr("id", "five");











