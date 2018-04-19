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


function tetris(currentboardStatus, inputColumn, inputblock) {

    var blocklen = inputblock.length;
    var tempholder = [];
    var count = 1;
    var validInputCheck = false;
    var Rows = 20;
    var Columns = 10;
    var board = new Array();
    var resultArray = new Array();

    /**
     * Inserting the input string array in 2D mertix
     * Validating the board before inserting
     * Vaidating the input block
     */

    try {

        if (inputColumn > Columns - 1) throw input;
        if (currentboardStatus.length > Rows) throw "invalid input";

        for (var i = 0; i < Rows; i++) {
            board[i] = new Array();
            if (currentboardStatus[i].length > Columns || currentboardStatus[i].length == 0 || currentboardStatus[i].length < Columns) throw "invalid input";
            for (var j = 0; j < Columns; j++) {
                board[i][j] = currentboardStatus[i].charAt(j);
            }
        }

        /**
         * Checking for the available empty block in board according to the input block from bottom of the board.
         * Storing the empty block position temporarly in a array datastrucure named "tempholder".
         * Empty the tempholder if the input block does not fits completely and move to the next possible position else fix the position.
         */

        for (var i = Rows - 1; i >= 0 && (blocklen - count) >= 0; i--, count++) {
            var temp = inputblock[blocklen - count];
            var subStringCounter = 0;
            var len = temp.length;



            if (count > 1 && count < blocklen) validInputCheck = true;
            else validInputCheck = false;


            /**
             * Checking the input block length does not exceed the space available in the board and does not contains empty 
               row in between two  non empty rows.
             * Handling the spaces.
             */

            var inputBlockwithoutspaces = temp.replace(/\s/g, '');
            var length_nospace = inputBlockwithoutspaces.length;

            if (length_nospace > Columns - inputColumn || (length_nospace == 0 && validInputCheck == true)) {
                tempholder = [];
                break;
            }

            /**
             * Checks for the pattern of the block and available space in the board
             */

            for (var j = inputColumn; j < Columns && len > 0 && temp != null; j++) {
                if (board[i][j] != " " && temp.charAt(subStringCounter) != " ") {
                    count = 0;
                    tempholder = [];
                    break;
                } else {
                    if (temp.charAt(subStringCounter) != " ") {
                        tempholder.push({
                            value: temp.charAt(subStringCounter),
                            indexi: i,
                            indexj: j
                        });
                        len--;
                        subStringCounter++;
                    } else {
                        len--;
                        subStringCounter++;
                        if ((subStringCounter == temp.length - 1) && (tempholder.length == 0)) {

                            i++;
                            break;
                        }

                    }

                }

            }

        }

        /**
         * Now place the input block in the position calculated.
         * If none of the condition works for the block then the board remains the same       
         */

        tempholder.forEach(function(element) {
            board[element.indexi][element.indexj] = element.value;
        })


        /**
         * Retrieve a row from a matrix
         * @param {Matrix | Array} matrix
         * @param {number} index    Zero based row index
         * @return {Matrix | Array} Returns the row as a vector
         *
         */

        function row(matrix, index) {
            var row = "";
            for (var j = 0; j < Columns; j++) row += matrix[index][j];
            return row;
        }

        for (var i = 0; i < Rows; i++) {
            resultArray[i] = row(board, i);
        }

    } catch (err) {
        return err;
    }
    
    return resultArray;

}
exports.tetris = tetris;
