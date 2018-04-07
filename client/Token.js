export class Token
{
    constructor(color, column, row)
    {
        this._color = color;
        this._column = column;
        this._row = row;

    }

    set column(column)
    {
        this.column = column;
    }
    set row(row)
    {
        this.row = row;
    }
    set color(color)
    {
        this.color = color;
    }
    get column() {
        return this._column;
    }

    get row() {
        return this._row;
    }

    get color() {
        return this._color;
    }

}