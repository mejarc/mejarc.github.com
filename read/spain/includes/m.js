var base="images/pic_";
var myPhoto=new Array();
var schmoo=new Array('003','007','010','013');
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
	myCaption[0]="Ah, the grim truth dawns on us at our room in Madrid. No luggage, no joy. Someone I know is thinking of ALL the wasted effort spent condensing the perfect clothing selections down into one suitcase.";
	myCaption[1]="Too much stress - time for a Cuban smoke break. One cigar a year can\'t hurt, can it?";
	myCaption[2]="In the court (yard) of Madrid\'s Royal Palace. Same pants for a few days now. Shoes are getting a little ripe…";
	myCaption[3]="Okay, Picasso rocks. Guernica amazes. This is the hallway of La Reina Sophia, a cool museum.";
	for (var i=0;i<myCaption.length;i++) 
			 if (document.getElementById) {
		 document.getElementById("MiCaption").innerHTML=myCaption[e];
		}
}

function fillPMe(e) {
	melCaption=new Array();
	melCaption[0]="I\'m trying to look all Euro-slinky in my sensible, loose-fitting Californian duds.  I never was so obvious a tourist than I was in Madrid, strolling through the designer-clad crowd in my no-heel shoes.";
	melCaption[1]="I confess: I urged him to get that rare treat of a real Cuban cigar, then I wouldn\'t kiss him after he smoked it.<br /><br /> Check out those considerate motorists behind him: I never tired of watching pedestrians being granted right-of-way in all situations, even by taxi cabs.  It made U.S. driving customs seem even more barbarous.";
	melCaption[2]="I envied Michael for those Prana climbing pants, which never showed stains, no matter how many tapas he dribbled on them.  I like also how they camouflage him as he performs calisthenics before the Catedral.";
	melCaption[3]="We\'re approaching art  overdose, and over a week of cultural enrichment is still ahead!";
	for (var i=0;i<melCaption.length;i++) 
			 if (document.getElementById) {
		 document.getElementById("MeCaption").innerHTML=melCaption[e];
	}
}

