export const game = {

    //init the virtual grid (to keep in memory the position of all token on the grid)
    gridOfPlayedTokenPosition: [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
    nbrOfRedTokenPlayed: 0,
    nbrOfYellowTokenPlayed: 0,
    isAWinningShot(playedToken)
    {
        //add current played to the "virtual grid" (to keep in memory the position of all token on the grid)
        game.gridOfPlayedTokenPosition[playedToken.row][playedToken.column] = playedToken.color;


        //if there are enough token of same colour we can start to count the tokens and then check if it's a winning shot
        if((game.nbrOfRedTokenPlayed >= 4 || game.nbrOfYellowTokenPlayed >= 4))
        {

            return game.areTheSameTokenOnVertical(playedToken)
                    || game.areTheSameTokenOnHorizontal(playedToken)
                    || game.countSameTokenOnDiagGoesUpToDown(playedToken)
                    || game.countSameTokenOnDiagGoesDownToUp(playedToken)

                //nbreSameTokenOnRight = game.sameTokenInHorizontalOnLeft(playedToken)
                // let nbreSameTokenOnLeft = game.countSameTokenOnLeftOfPlayedToken(playedToken);
                // console.log('nbre of same token on left:');
                // console.log(nbreSameTokenOnLeft);
                // if(nbreSameTokenOnLeft === 4) return true;
                // else{
                //     let nbreSameTokenOnRight = game.countSameTokenOnRightOfPlayedToken(playedToken);
                //     console.log('nbre of same token on right:');
                //     console.log(nbreSameTokenOnRight)
                //     if(nbreSameTokenOnRight === 4) return true;
                //     else if(nbreSameTokenOnLeft + nbreSameTokenOnRight ===4)
                //     {
                //         return true;
                //     }
            //         else if(game.countSameTokenOnDiagGoesUpToDown(playedToken))
            //         {
            //             return true;
            //         }else if(game.countSameTokenOnDiagGoesDownToUp(playedToken))
            //         {
            //             return true;
            //         }
            //
            //     }
            //
            // }{




        }else return false;
    },

    /**
     * count on the vertical (on the bottom of played token) (
     * @param playedToken
     * @returns {boolean}
     */
    areTheSameTokenOnVertical(playedToken)
    {

        const totalOfNbreOfRows = 6;
        let positionOnRow=0;
        let nbreSameToken= 0;
        console.log('START VERTICAL');
        console.log('*********');
        // let cellsToCheck=totalOfNbreOfRows;
        // cellsToCheck = cellsToCheck-playedToken.row;
        // console.log('nbre of cells to check in vertical');
        // console.log(cellsToCheck);
        for(let j =1; j<= 4;j++)
        {
            if(playedToken.color !== this.gridOfPlayedTokenPosition[playedToken.row+1][playedToken.column]
            || this.gridOfPlayedTokenPosition[playedToken.row+1][playedToken.column] ===0 )
            {
                break;
            }
            else if (playedToken.color === this.gridOfPlayedTokenPosition[playedToken.row+1][playedToken.column])
            {
                console.log('color');
                console.log(this.gridOfPlayedTokenPosition[playedToken.row+1][playedToken.column]);
                nbreSameToken++;
                console.log('vertical: same token on the bottom '+nbreSameToken);
            }

        }
        console.log('total sameToken' +nbreSameToken);
        console.log('END VERTICAL');
        console.log('*********');
        return nbreSameToken ===4;

    },
    areTheSameTokenOnHorizontal(playedToken)
    {
        //let nbreSameTokenOnLeft = game.countSameTokenOnLeftOfPlayedToken(playedToken);
        // let nbreSameTokenOnRight = game.sameTokenInHorizontalOnLeft(playedToken)

        return (game.countSameTokenOnLeftOfPlayedToken(playedToken) ===4
            || game.countSameTokenOnRightOfPlayedToken(playedToken) ===4
            || (game.countSameTokenOnRightOfPlayedToken(playedToken)+game.countSameTokenOnRightOfPlayedToken(playedToken) ===4));
    },
    /**works well
     * count on the horizontal but on the right of played token
     * @param playedToken
     * @returns {number}
     */
    countSameTokenOnRightOfPlayedToken(playedToken)
    {
        //we check on the left
        console.log('START HZ RIGHT');
        console.log('*********');

        let nbreSameToken= 0;
        console.log('played token column')
        console.log(playedToken.column)
        console.log('integer ?')
        console.log(Number.isInteger(playedToken.column))
        //console.log('nbre of cells to check in horizontal left');
        //we calculate the difference (nbre of cells to check in horizontal right)
        //let rowToCheck=6-playedToken.column;
        //console.log(rowToCheck);
        for (let j = 0; j < 4; j++) {
            console.log('value of cells on right');
            console.log(this.gridOfPlayedTokenPosition[playedToken.row][playedToken.column+1])
            if(playedToken.color !== this.gridOfPlayedTokenPosition[playedToken.row][playedToken.column+1]
                || this.gridOfPlayedTokenPosition[playedToken.row][playedToken.column+1] ===0 )
            {
                console.log('right: not the same color or not played');
                break;
            }
            else if (playedToken.color === this.gridOfPlayedTokenPosition[playedToken.row][playedToken.column+1])
            {
                console.log('Same color on right!');
                console.log('nbre of same token on right ');
                nbreSameToken++;
                console.log(nbreSameToken);
            }
        }
        console.log('END HZ RIGHT');
        console.log('*********');
        return nbreSameToken;



    },

    /**work well
     *count on the horizontal but on the left of played token
     * @param playedToken
     * @returns {number}
     */
    countSameTokenOnLeftOfPlayedToken(playedToken)
    {


        console.log('START HZ LEFT');
        console.log('*********');

        let nbreSameToken= 0;
        console.log('played token column')
        console.log(playedToken.column)
        console.log('nbre of cells to check in horizontal left');
        let rowToCheck=playedToken.column;
        console.log(rowToCheck);
        for (let i = 0; i <= rowToCheck; i++) {
            console.log('value of i '+i);
            console.log('current column '+playedToken.column);
            // let previousColumn = playedToken.column-i;
            // console.log('previous column '+previousColumn);

            if(playedToken.color !== this.gridOfPlayedTokenPosition[playedToken.row][playedToken.column-1]
                || this.gridOfPlayedTokenPosition[playedToken.row][playedToken.column-1] ===0
                || this.gridOfPlayedTokenPosition[playedToken.row][playedToken.column-1] === undefined)
            {
                console.log('left: not the same color or not played');
                break;
            }
            else if (playedToken.color === this.gridOfPlayedTokenPosition[playedToken.row][playedToken.column-i])
            {
                console.log('Same color on the left!');
                console.log('nbre of same token on the left');
                nbreSameToken++;
                console.log(nbreSameToken);
            }
        }
        console.log('END HZ LEFT');
        console.log('*********');
        return nbreSameToken;
    },
    /**
     * count nbre of token in a diag that begin Down and goes UP
     * @param playedToken
     * @returns {boolean}
     */
    countSameTokenOnDiagGoesDownToUp(playedToken)
    {

        //check token on the left of the current played token
        console.log('START DIAG DOWN TO UP');
        console.log('*********');
        let positionOnColumn = 0;
        let nbreSameTokenDown= 0;
        let nbreSameTokenRight=0;
        console.log('played token column')
        console.log(playedToken.column)
        //console.log('nbre of cells to check until the bottom');
        //count number of cells from current token until the border on left (goes down)
        //let nbreOfRowToCheck=playedToken.column;
        //console.log(nbreOfRowToCheck);


        for (let i = 1; i <= 4; i++) {
            console.log('value of i '+i);
            console.log('current column '+playedToken.column);
            //let previousColumn = playedToken.column-i;
            //console.log('previous column '+previousColumn);
            if(this.gridOfPlayedTokenPosition[playedToken.row+1][playedToken.column-1] === undefined
                || playedToken.color !== this.gridOfPlayedTokenPosition[playedToken.row+1][playedToken.column-1]
                || this.gridOfPlayedTokenPosition[playedToken.row+1][playedToken.column-1] ===0
            )
            {
                console.log('right: not the same color or not played');
                break;
            }
            else if (playedToken.color === this.gridOfPlayedTokenPosition[playedToken.row+1][playedToken.column-1])
            {
                console.log('Same color on the left!');
                console.log('nbre of same token on right hor');
                nbreSameTokenDown++;
                console.log(nbreSameTokenDown);
            }
        }

        //if the total of same tokens on left don't reach 4 we count the same token on right of current played token
        if(nbreSameTokenDown <4)
        {
            console.log('nbre same token down < 4')

            for (let i = 1; i <= 4; i++) {
                console.log('value of i '+i);
                console.log('current column '+playedToken.column);
                //let previousColumn = playedToken.column-i;
                //console.log('previous column '+previousColumn);
                console.log(this.gridOfPlayedTokenPosition[playedToken.row-1][playedToken.column+1]);
                if(playedToken.color !== this.gridOfPlayedTokenPosition[playedToken.row-1][playedToken.column+1]
                    || this.gridOfPlayedTokenPosition[playedToken.row-1][playedToken.column+1] ===0
                    || this.gridOfPlayedTokenPosition[playedToken.row-1][playedToken.column+1] === undefined)
                {
                    console.log('right: not the same color or not played');
                    break;
                }
                else if (playedToken.color === this.gridOfPlayedTokenPosition[playedToken.row-1][playedToken.column+1])
                {
                    console.log('Same color on the left!');
                    console.log('nbre of same token on right hor');
                    nbreSameTokenRight++;
                    console.log(nbreSameTokenRight);
                }
            }
        }

        console.log('END DIAG DOWN TO UP');
        console.log('*********');
        //check if 4 tokens of same color have been found (just on left, or just on right or on left and on right
        return (nbreSameTokenDown ===4) || (nbreSameTokenRight ===4) || (nbreSameTokenDown+nbreSameTokenRight ===4);



    },
    /**
     *  count nbre of token in a diag that begin Up and goes down
     * @param playedToken
     * @returns {boolean}
     */
    countSameTokenOnDiagGoesUpToDown(playedToken)
    {
        //check token on the left of the current played token
        console.log('START DIAG UP TO DOWN');
        console.log('************************');
        let nbreSameTokenLeft= 0;
        let nbreSameTokenRight= 0;
        console.log('played token column')
        console.log(playedToken.column)


        for (let i = 0; i < 4; i++) {
            console.log('value of i '+i);
            console.log('current row '+playedToken.row);
            console.log('current column '+playedToken.column);
            //console.log('previous column '+previousColumn);
            console.log('type of array');
            //console.log(this.gridOfPlayedTokenPosition[playedToken.row-1][playedToken.column-1]);
            if(playedToken.row === 0)
            {
                break;
            }else if(this.gridOfPlayedTokenPosition[playedToken.row-1][playedToken.column-1] ===0
                    || playedToken.color !== this.gridOfPlayedTokenPosition[playedToken.row-1][playedToken.column-1]){
                break;
            }

            else if (playedToken.color === this.gridOfPlayedTokenPosition[playedToken.row-1][playedToken.column-1])
            {
                console.log('Same color on the left!');
                console.log('nbre of same token on left hor');
                nbreSameTokenLeft++;
                console.log(nbreSameTokenLeft);
            }
        }

        //if token on left don't reach 4 we count the same token on right of current played token
        if(nbreSameTokenLeft <4) {
            console.log('nbre same token down < 4')
            //count number of cells from current token until the border on right
            //nbreOfRowToCheck=game.countNbreOfCellsUntilTheBorder(playedToken.row, playedToken.column);
            //let nbreSameTokenRight=0;
            for (let i = 1; i <= 4; i++) {
                console.log('value of i ' + i);
                console.log('current column ' + playedToken.column);
                //console.log('previous column '+previousColumn);
                console.log(this.gridOfPlayedTokenPosition[playedToken.row+1][playedToken.column + 1]);
                if (playedToken.color !== this.gridOfPlayedTokenPosition[playedToken.row + 1][playedToken.column + 1]
                    || this.gridOfPlayedTokenPosition[playedToken.row + 1][playedToken.column + 1] === 0
                    || this.gridOfPlayedTokenPosition[playedToken.row + 1][playedToken.column + 1] === undefined) {
                    console.log('right: not the same color or not played');
                    break;
                }
                else if (playedToken.color === this.gridOfPlayedTokenPosition[playedToken.row + 1][playedToken.column + 1]) {
                    console.log('Same color on the left!');
                    console.log('nbre of same token on right hor');
                    nbreSameTokenRight++;
                    console.log(nbreSameTokenRight);
                }
            }
        }

        console.log('END DIAG UP TO DOWN');
        console.log('************************');
        return (nbreSameTokenLeft ===4) || (nbreSameTokenRight ===4) || (nbreSameTokenLeft+nbreSameTokenRight ===4);
    },
    createYellowTokens()
    {

        for(let i=0;i<21;i++)
        {
            let $token = $('<div></div>');
            $token.addClass('token');
            $token.addClass('token-yellow');
            $('#tokensYellowToPlay').append($token);

            i++;
        }

    }
    // playNewToken(token)
    // {
    //   this.gridOfPlayedTokenPosition[token.row][token.column] = token.color;
    // }

}