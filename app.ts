interface numberSequence{
    getSequence() : number[];
}

class fibonacci implements numberSequence{
    sequence: number[];
    constructor(max:number){
        var previous = 0;
        var current = 1;
        var result = [previous, current];
        for (var i = 0; i < max; i++){
            result.push(previous + current);
            var intermediate = previous + current;
            previous = current;
            current = intermediate;
        }
        this.sequence = result;
    }

    getSequence():number[]{
        return this.sequence;
    }
}

console.log(new fibonaci(20).getSequence())