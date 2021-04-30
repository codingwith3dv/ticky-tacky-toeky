var WOL = /** @class */ (function () {
    function WOL() {
    }
    WOL.prototype.checkWinner = function (cells) {
        var lines = [
            [0,
                1,
                2],
            [3,
                4,
                5],
            [6,
                7,
                8],
            [0,
                3,
                6],
            [1,
                4,
                7],
            [2,
                5,
                8],
            [0,
                4,
                8],
            [2,
                4,
                6]
        ];
        for (var i = 0; i < lines.length; i++) {
            var _a = lines[i], a = _a[0], b = _a[1], c = _a[2];
            if (cells[a] &&
                cells[a] === cells[b] &&
                cells[a] === cells[c]) {
                cells[a] = cells[a].toLowerCase();
                cells[b] = cells[a].toLowerCase();
                cells[c] = cells[a].toLowerCase();
                return cells[a] === cells[a].toLowerCase() ? cells[a].toUpperCase() : cells[a];
            }
        }
        return null;
    };
    return WOL;
}());
export default WOL;
//# sourceMappingURL=winnerOrLosser.js.map