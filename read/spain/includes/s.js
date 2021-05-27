var base="images/pic_";
var myPhoto=new Array();
var schmoo=new Array('023','026','030','035','042','045','047','048','049','053','056','057','058','063','064','065','068');
var loadedPix = (!(navigator.userAgent.indexOf('Netscape6')+1));
var loaded = (!(navigator.userAgent.indexOf('Netscape6')+1));

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

	myCaption[0]="The silly dual-pedal rental bike in the park. Welcome to Sevilla!";
	myCaption[1]="The three most valuable resources: Melanie,  bottled water and the Tower Of Gold.";
	myCaption[2]="Behind me, the Giralda. This tower has no steps up to the top - it\'s all ramped so you can ride a horse up! We wanted to be up there when the carillon was cooking up some tunes. With earplugs, of course!";
	myCaption[3]="The Alcazar gardens. Fine, be that way. Nobody can have a horrible time here in Paradise…";
	myCaption[4]="Women in Spain never stop playing dolls. They just dress up their children…" ;
	myCaption[5]="Cars honking, traffic stopped. This is the kids\' version of religious street parades with heavy platforms and costumes. The band was good! Mostly horns and drums playing a slow, stagger-step dirge. Takes a lot of breath control and timing." ;
	myCaption[6]="Is this the same parade or a new one? 100 pesetas for the little girls passing the basket among the cerveza-swilling caf&eacute;-goers. Distant church bells peal encouragement. The kids stop every few minutes to rest the poor penitentitos underneath the heavily decorated platform." ;
	myCaption[7]="El Acqueducto. Evidence of civilization a thousand years past." ;
	myCaption[8]="Ugly apartments despoil the Roman ruins. These buildings seemed as imaginatively designed as some of the bleakest in East Berlin." ;
	myCaption[9]="\"<i>She can turn the world on with her smile…</i>\" <br />This photo makes me think of the <i>That Girl</i> opening sequence.  I\'m not quite sure but I think Melanie\'s looking for avian targets at which to throw the soon-to-be-exploding hat. This disposable sombrero stayed mostly in Spain at trip\'s end, though I\'m sure some bits of straw are still in my dirty clothes." ;
	myCaption[10]="Okay, more amazing quasi-Moorish designs. The style of living this patio seems to encourage is just too smart, open and sensible for Western Civvies. This building makes the local Sevillans think of how Pontius Pilate might have lived. Decadent!" ;
	myCaption[11]="In the garden of delights. With little fountains like this dotting the acreage, who needs power-hungry air conditioners?" ;
	myCaption[12]="Lost. We got in here for free by accident so maybe we can accidentally stay forever…" ;
	myCaption[13]="\"La Habanita\" in Sevilla has veggie food to die for! Go there! Now! Order a bunch of stuff! Thank you." ;
	myCaption[14]="The one bike trip we take and here we get stuck in some kind of Lilliputian comedy.";
	myCaption[15]="Impressive ruins of a long-lost 1992 World\'s Fair. This is the abandoned light rail station with tattered roofing." ;
	myCaption[16]="The streets are small and scenic with rotting stucco next to freshly painted new construction. Watch out for dog leavings! Suddenly we get misty-eyed for the \"Verde y Limpia\" slogans back in Madrid that don\'t actually stop the dog owners but at least there is a cleaning crew out early each morning with high-pressure hoses." ;

	for (var i=0;i<myCaption.length;i++) 
			 if (document.getElementById) {
		 document.getElementById('MiCaption').innerHTML=myCaption[e];
		}

}

function fillPMe(e) {
	melCaption=new Array();
	melCaption[0]="Spain has wonderful parks. You\'d never guess Michael and I were snarling at each other in 95-degree heat just moments before this photo.  We stumbled into this tidy, verdant place and were soon cooing at each other just like the white doves that flutter all over Seville.  Freely groping adolescents on the park\'s lawns made me wonder what the teenage pregnancy rate is.";
	melCaption[1]="Torre, schmorre.  Why am I drinking bottled water when the tap water tastes so good?";
	melCaption[2]="Seville Cathedral-- final resting place of Christopher Columbus and some fine Zurbar&aacute;n canvases.  My acquaintance with American-style  Catholicism was poor preparation for Seville's intense religiosity.  We joined other tourists in our bewilderment over such items as saints' relics and realistic devotional images of martyrs.";
	melCaption[3]="Yet another wonderful park.  Instead of pigeons, the trees are thick with pairs of cooing white doves.";
	melCaption[4]="In the U.S. we\'d misidentify these dresses as \"flamenco\" costumes.  Gypsy flamenco performers from Seville\'s Triana district would indeed wear these flounced dresses, which is probably how the non-Andalusian world got the notion these are just Roma stage wear. ";
	melCaption[5]="We were in Seville fully a month after Semana Santa, which by all accounts is an exhausting, all-day-all-night spectacle of religious expression.  There was still plenty of feeling left, not only in the form of candies shaped like ominously hooded <i>penitentes</i> but also in these processions of pubescent boys.";
	melCaption[6]="\"Okay, on the map North is on the left, the river runs left to right, the Alameda de Hercules is just right of the river, the restaurant the guide book recommends is a block left from the bullfight ring, and we are lost.\"";
	melCaption[7]="It\'s not that the International Style apartment blocks behind me are more hideous than those in, say, Emeryville.  They\'re just more offensive because they\'re plunked next to and on top of graceful, energy-efficient, human-scaled buildings.";
	melCaption[8]="I bet if we looked more closely we\'d see Roman grafitti beneath the faux hip-hop tags.";
	melCaption[9]="<i>\"Yoohoo!  Don Juan!  Quick, while he\'s changing film!\"</i>";
	melCaption[10]="La Casa de Pilatos exemplifies what I consider the most reasonable of human dwelling styles.  I can think of no better response to a hot afternoon than to enjoy it at safe remove, seated just off the patio in the shade with a fountain gurgling somewhere in the orange trees.";
	melCaption[11]="I\'m pretending to be Theda Bara with that heavy-lidded look.";
	melCaption[12]="Spanish landscaping impressed me as yet another logical adaptation to the climate- no imbecile lawn-watering necessary to maintain these oases of palms, oranges, roses and herbs.";
	melCaption[13]="The server at La Habanita took a shine to us for some reason.  After we pestered him all meal long to teach us how to say various food terms in Spanish, at the end he poured all three of us shots of Canary Island rum, a velvety, vanilla-flavored liquour I\'d never tasted before.  \"Me gusta!\"";
	melCaption[14]="The man at the bike rental taught us a new phrase when we requested bikes on a sweltering morning to ride to a Roman ruin seven or eight miles away on the <i>carretera</i>: \" 	&#161;Mata!\" (you\'ll be killed, you damn fool Yankee tourists!)";
	melCaption[15]="The abandoned grounds of Expo \'92 proved to be excellent cycling-- all those paved roads and no traffic, because the economic vitality this event was supposed to produce just hasn\'t hit yet.  During my visit I kept thinking of our hometown mayor, who maintains that hosting the Super Bowl will really thrust our city\'s modest economy into orbit.  Well, I can say Seville got a terrific place for a rave for all the expense of Expo \'92.";
	melCaption[16]="I finally traced my sense of <i>dej&aacute; vu</i> when strolling down Seville\'s tiny streets to the fact that several American shopping malls, most notably Country Club Plaza in Kansas City, Missouri, have attempted to simulate these picturesque pathways.  For more realism I suggest the mall-owners add noisy scooters hurtling by at fifty miles an hour and <i>cervecerias</i> every two paces or so.";

	for (var i=0;i<melCaption.length;i++) 
			 if (document.getElementById) {
		 document.getElementById('MeCaption').innerHTML=melCaption[e];
		}

}

