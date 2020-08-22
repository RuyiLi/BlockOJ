## Scripts
`npm run serve` - Start the frontend development server and opens the home page in the default browser. Runs on port 1234 by default. Supports HMR.

`npm run build` - Compiles source files into the `build` folder.
 
 `npm run dev` - Runs `build` script and starts the web server on the specified port (defaults to 8000).

## Judging

BE SURE TO USE LINUX FOR SAMPLE JUDGE

SAMPLE JUDGE
```
cd src/server
gcc judging/judge.c -o judging/judge.out
node squareMyNumbers.js
```

Rough idea of how to use
```js
// Testing judge
const compile = require('./compile.js');

var js = `
var n = Number(window.prompt(''));
for (let i = 0; i < n; i++) {
    var x = Number(window.prompt(''));
    window.alert(x*x);
}
`;

var problem = {
    number: 0,
    cases: 4
}
compile(js, problem, (response) => {
    console.log(response);
    // This callback is called ONCE at the end of judging
});

/*
EACH PROBLEM HAS 1 INPUT FILE: EX. PROBLEM 0 HAS INPUT FILE in/0.txt
SO FORMAT EACH PROBLEM LIKE THIS: "single input will contain T cases" (ie. in program have to loop T times)

EACH PROBLEM CAN HAVE AS MANY TEST CASE FILES: EX. PROBLEM 0 HAS 4 FILES IN test/0/1.txt, ..., test/0/4.txt
*/
```