var pythagoras = /** @class */ (function () {
    function pythagoras(max) {
        var previous = 0;
        var current = 1;
        var result = [previous, current];
        for (var i = 0; i < max; i++) {
            result.push(previous + current);
            var intermediate = previous + current;
            previous = current;
            current = intermediate;
        }
        this.sequence = result;
    }
    pythagoras.prototype.getSequence = function () {
        return this.sequence;
    };
    return pythagoras;
}());
console.log(new pythagoras(10).getSequence());
