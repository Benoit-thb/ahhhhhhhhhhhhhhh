
var elem = document.getElementById('btn');


document.addEventListener('click', function(e){

	var elem = document.getElementById('btn');
	var audio = document.getElementById('oh');
	var zem = document.getElementById('bloc');

	if(e.target.id == "btn")
	{
		elem.style.width = 300 + "px";
		audio.play();
		elem.style.display = "none";
		zem.style.animationPlayState = "running";
	}
	if(e.target.id == "tap")
	{
		elem.style.width = 300 + "px";
		audio.play();
		elem.style.display = "none";
		zem.style.animationPlayState = "running";
	}
	console.log(e.target.id);

});
