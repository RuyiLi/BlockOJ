
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

  	var n, remaining, i;


n = Number(window.prompt());
remaining = window.prompt().split(' ');
var i_inc = 1;
if (1 > n) {
  i_inc = -i_inc;
}
for (i = 1; i_inc >= 0 ? i <= n : i >= n; i += i_inc) {
  // The card wasn't found in the list of remaining cards
  if (remaining.indexOf(i) + 1 == 0) {
    console.log(i);
  }
}

for (var count = 0; count < n; count++) {
}


  	}

  	