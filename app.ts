interface numberSequence{
    getSequence() : number[];
}

class fibonacci implements numberSequence{
    sequence: number[];
    constructor(max:number){
        let previous: number = 0;
        let current: number = 1;
        let result: number[] = [previous, current];
        for (var i = 0; i < max; i++){
            result.push(previous + current);
            let intermediate: number = previous + current;
            previous = current;
            current = intermediate;
        }
        this.sequence = result;
    }

    getSequence():number[]{
        return this.sequence;
    }
}

let sequence: numberSequence = new fibonacci(20);

console.log(sequence.getSequence())
