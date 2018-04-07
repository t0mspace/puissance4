const nbreRows = 6,
    nbreGrid = 7;

export class grid
{
    constructor()
    {
        this._title = name;
        this.artist = artist;
        // this.smallCoverUrl=smallCoverUrl;
        this.mediumCoverUrl=mediumCoverUrl;
    }


    // set title(title)
    // {
    //     this.title=title;
    // }

    // set artist(artist)
    // {
    //     this.artist=artist;
    // }

    // set mediumCoverUrl(mediumCoverUrl)
    // {
    //     this.mediumCoverUrl=mediumCoverUrl;
    // }

    // get title()
    // {
    //     return this.title;
    // }

    // get title()
    // {
    //     return this.artist;
    // }

    // get mediumCoverUrl()
    // {
    //     return this.mediumCoverUrl;
    // }



    displayGrid()
    {

        albumHTML += '<div class="album-el">';

        albumHTML += '<h5 class="cd-title">'+this.title+'</h5>';
        albumHTML += '<p class="cd-artist">'+this.artist+'</p>';

        albumHTML += '<img class="cd-cover" src="' + this.coverUrl +'">';

        albumHTML += '</div>';

        return albumHTML;
    }

    drawLine()
    {
        return '<tr><td></td><td></td><td></td><td></td></tr>'
    }



}