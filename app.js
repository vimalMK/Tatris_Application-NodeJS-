/*..................................................................
.TTTTTTTTTTTEEEEEEEEEEE.ETTTTTTTTTTRRRRRRRRRR..RIIII..SSSSSSS.....
.TTTTTTTTTTTEEEEEEEEEEE.ETTTTTTTTTTRRRRRRRRRRR.RIIII.SSSSSSSSS....
.TTTTTTTTTTTEEEEEEEEEEE.ETTTTTTTTTTRRRRRRRRRRR.RIIII.SSSSSSSSSS...
....TTTT....EEEE...........TTTT....RRRR...RRRRRRIIIIISSSS..SSSS...
....TTTT....EEEE...........TTTT....RRRR...RRRRRRIIIIISSSS.........
....TTTT....EEEEEEEEEE.....TTTT....RRRRRRRRRRR.RIIII.SSSSSSS......
....TTTT....EEEEEEEEEE.....TTTT....RRRRRRRRRRR.RIIII..SSSSSSSSS...
....TTTT....EEEEEEEEEE.....TTTT....RRRRRRRR....RIIII....SSSSSSS...
....TTTT....EEEE...........TTTT....RRRR.RRRR...RIIII.......SSSSS..
....TTTT....EEEE...........TTTT....RRRR..RRRR..RIIIIISSS....SSSS..
....TTTT....EEEEEEEEEEE....TTTT....RRRR..RRRRR.RIIIIISSSSSSSSSSS..
....TTTT....EEEEEEEEEEE....TTTT....RRRR...RRRRRRIIII.SSSSSSSSSS...
....TTTT....EEEEEEEEEEE....TTTT....RRRR....RRRRRIIII..SSSSSSSS....
..................................................................
.................Company : Invitae Corporation....................
....................vimal moorthy krishna.........................
.....................Date: 3/26/2018..............................
*/


"using strict"

var tetrisObject = require("./tetris.js");


/**
 * Providing input values.
 * calling tetris.js function nodeJS require method.
 * Displaying the output string array in console
 */

var currentboardStatus = ["          ","          ","          ","          ","          ","          ",
                          "          ","          ","          ","          ","          ","          ","          ","          ","          ","          ","          ","X   X   XX","X   X    X","XXXXXXXXXX"];
var inputColumn = 3;
var inputBlock = ["LL ","L  ","L  "];
var boardfinal = tetrisObject.tetris(currentboardStatus, inputColumn, inputBlock);
console.log(boardfinal);
