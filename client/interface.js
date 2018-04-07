export const gameInterface = {

    createRedTokens()
    {

        for(let i=0;i<21;i++)
        {
            let $token = $('<div></div>');
            $token.addClass('token');
            $token.addClass('token-red');
            $('#tokensRedToPlay').append($token);

            i++;
        }

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




}