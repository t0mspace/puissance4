
import {gameInterface } from './interface';
import {game } from './game';
import { Token } from './Token';
import "jquery-ui";
import io from 'socket.io-client';
import styles from '../public/css/styles.css'


//init game and create the tokens of all players


$(document).ready(() => {

    const socket = io();

    socket.on('message', (message) =>{
        alert('Le serveur a un message pour vous : ' +message);
    })

    gameInterface.createRedTokens();
    gameInterface.createYellowTokens();

    //init Jquery-UI parameters
    $('.token').draggable({ revert: "invalid" , obstacle: ".obstacle", preventCollision: true});

    $('#grid td').droppable({

        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" );
            let row_index = $(this).parent().index();
            let col_index = $(this).index();
            let tokenColor='';
            //console.log($(ui.draggable));
            if($(ui.draggable).hasClass('token-red')){
                tokenColor = 'R';
                game.nbrOfRedTokenPlayed++;
            }
            else if($(ui.draggable).hasClass('token-yellow')){
                tokenColor = 'Y';
                game.nbrOfYellowTokenPlayed++;
            }

            // create new Token object
            let playedToken = new Token(tokenColor, col_index, row_index);

            //check if the played token is a winning shot
            if(game.isAWinningShot(playedToken))
            {
                alert('Player ' +playedToken.color+' win');
            }

        }
    });



})