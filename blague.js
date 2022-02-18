
var elem = document.getElementById('btn');


document.addEventListener('click', function(e){

	var elem = document.getElementById('btn');
	var audio = document.getElementById('oh');

	if(e.target.id == "btn")
	{
		elem.style.width = 300 + "px";
		audio.play();
	}
	console.log(e.target.id);

});