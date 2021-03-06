// image switcher; thanks to Peter-Paul Koch.
// It prevents NS 6 from accessing because of preload/looping bug.

var base="./images/icon_";
var nrm = new Array();
var hilite = new Array();
var stuff = new Array('men','women');
var loaded = (!(navigator.userAgent.indexOf('Netscape6')+1));
// Pre-load part.
if (document.images) {
	for (i=0;i<stuff.length;i++)
	{
		nrm[i] = new Image;
		nrm[i].src = base + stuff[i] + ".gif";
		hilite[i] = new Image;
		hilite[i].src = base + stuff[i] + "_on.gif";
	}
}

//Mouseover and mouseout functions
function over(no){
	if (document.images && loaded)
	{
		document.images[stuff[no]].src = hilite[no].src;
	}
}

function out(no){
	if (document.images && loaded)
	{
		document.images[stuff[no]].src = nrm[no].src;
	}
}

