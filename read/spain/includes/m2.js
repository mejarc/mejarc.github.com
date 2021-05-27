var base="images/pic_";
var myPhoto=new Array();
var schmoo=new Array('092');
var loadedPix = (!(navigator.userAgent.indexOf('Netscape6')+1));
// Pre-load
if (document.images) {
	for (i=0;i<schmoo.length;i++)
	{
		myPhoto[i] = new Image;
		myPhoto[i].src = base + schmoo[i] + ".jpg";
	}
}

//Onclick function
function fillDivPhoto(e) {
	if (document.images && loadedPix)
	{
		document.images["MainPhoto"].src = myPhoto[e].src;
	}
}

function fillPMi(e) {
	myCaption=new Array();
	myCaption[0]="…So we could get a good shot of the Museum of Ham! That is the real name of this place, I kid you not. If that weren\'t bad enough, it is a chain! The powdery, darkened legs of ham hanging up are so numerous it makes me want to inquire as to the vintage of some of the ones farthest up toward the ceiling. Truly a pork-lover\'s (or pig-hater\'s) heaven.";
	
	for (var i=0;i<myCaption.length;i++) 
			 if (document.getElementById && loadedPix) {
		 document.getElementById('MiCaption').innerHTML=myCaption[e];
		}
}
function fillPMe(e) {
	melCaption=new Array();
	melCaption[0]="El Museo del Jam&oacute;n- this little veggie had none.  All that life essence flowing through my unhindered circulatory system and into my facial muscles makes me look smug.";
	
	
	for (var i=0;i<melCaption.length;i++) 
			 if (document.getElementById) {
		 document.getElementById('MeCaption').innerHTML=melCaption[e];
		}
}

