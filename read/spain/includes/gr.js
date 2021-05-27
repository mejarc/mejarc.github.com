var base="images/pic_";
var myPhoto=new Array();
var schmoo=new Array('070','071','072','074','078','080', '087');
var noNet=(!(document.layers));
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
	if (document.images && loadedPix && noNet)
	{
		document.images["MainPhoto"].src = myPhoto[e].src;
	}
}

function fillPMi(e) {
	myCaption=new Array();
	myCaption[0]="The Big Kahuna, the Alhambra itself. Yes! Here is the peak experience of the whole trip. We went early and stayed late - a whole day. ";
	myCaption[1]="Thinking here of being King for a day. Tough life, rough digs.";
	myCaption[2]="Nice architecture. And the Alhambra is designed well, too.";
	myCaption[3]="Completely safe from being taken by force, the Alhambra could have been taken by siege in about 2 months by cutting off its water supply.";
	myCaption[4]="Near the apex of Alhambra\'s fortifications. This is the ONLY picture with the two of us together on this trip." ;
myCaption[5]="I liked the sexy little point that Moorish arches all flout." ;
myCaption[6]="These complex designs done in plaster took artisans many years and were considered \"inexpensive\" decorations by a labor-rich society." ;
	for (var i=0;i<myCaption.length;i++) 
			 if (document.getElementById) {
		 document.getElementById('MiCaption').innerHTML=myCaption[e];
		}
}
function fillPMe(e) {
	melCaption=new Array();
	melCaption[0]="Hint: get your tickets for the Alhambra in advance, and get them for the earliest admission time available.  As when we visited Mexico\'s Chich&eacute;n Itz&aacute;, we enjoyed a peaceful morning at this UNESCO World Heritage Site simply because bus tours don\'t seem to deliver their cargoes until around ten-thirty.";
	melCaption[1]="It\'s astounding how abused these buildings have been.  When Washington Irving lived in the Alhambra in the  1830\'s this gracious palace was a ruin, hardly surprising after its stints as a prison and as barracks for Napoleon\'s invasion force.  Now protection is the norm as hordes of visitors try to cram into the few areas open to our probably injurious admiration.";
	melCaption[2]="I\'m imagining myself leaning on silk pillows, cooling off with rosewater sorbet.";
	melCaption[3]="We\'re just outside the Alhambra coffee bar, a little stone hut that once sheltered a well.  Now it serves wonderful espresso.";
	melCaption[4]="Nah, we didn\'t come within miles of each other, the whole time.  See, here I am with one of the Oak Ridge Boys or something.";
	melCaption[5]="Destry rides again.";
	melCaption[6]="This plaster was once ablaze with color; some areas still bear traces of paint.";

	for (var i=0;i<melCaption.length;i++) 
			 if (document.getElementById) {
		 document.getElementById('MeCaption').innerHTML=melCaption[e];
		}
}

