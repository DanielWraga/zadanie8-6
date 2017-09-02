var a = prompt('jaka wartosc'),
	b = 4,
	value;

value = (a * a) + (2 * a * b) - (b * b);
console.log(value);
alert ('wynik=' + value);

if (value > 0) {
	alert ('wynik dodatni');
} else if (value == 0) {
	alert ('wynik = 0');
} else {
	alert('wynik jest ujemny');
}
  