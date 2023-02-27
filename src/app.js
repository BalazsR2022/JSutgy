//Gyula életkor vizsgálat switch gyakorlás//

var ageOfGyula = 20;
switch(true){
	case (ageOfGyula < 16): alert('Nem vezethet!');
						break;
	case (ageOfGyula == 16): alert('Már majdnem vezethet!');
						break;
	case (ageOfGyula > 16): alert('Hagy menjen, vezethet!');
						break;
default: alert('Nem lehet ezt értelmezni');
}

var fruits  =['grape', 'apple', 'banana'];

    fruits.sort();

alert (fruits);