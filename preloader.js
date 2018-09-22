(function()
{
	var preload= document.getElementById("preload");
	var loading =0 ;
	var id=setInterval(frame,30); //set time for preloader 

	function frame(){
		if(loading==100)
		{
			clearInterval(id);
			window.open("index.html","_self");
		}
		else
		{
			loading+=1;
			if(loading==90)
			{
				preload.style.animation = "fadeout 1s ease";
			}
		}
	}
})();