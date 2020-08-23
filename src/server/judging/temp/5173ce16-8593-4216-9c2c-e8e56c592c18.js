
	  	// INSERT INTO BEGINNING OF EVERY SUBMISSION
	  	const fs = require('fs');
	  	var COMPILE_ln = 0;
	  	var COMPILE_stdin = fs.readFileSync(0, 'utf-8').toString().split(/\r?\n/);
	  	const window = {
			prompt: () => {
				if (COMPILE_ln + 1> COMPILE_ln.length) {
					return '';
				}
      		return COMPILE_stdin[COMPILE_ln++];
      		},
	  	}
	

		var __MD792 = window.prompt();
	  	while(__MD792--) {

  	var list, i;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


list = window.prompt().split(' ');
var i_end = list.length;
var i_inc = 1;
if (1 > i_end) {
  i_inc = -i_inc;
}
for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
  list[(i - 1)] = (Number((list[(i - 1)])));
}
console.log(list.slice().sort(listsGetSortCompare("NUMERIC", 1))[0]);


  	}

  	