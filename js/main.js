var symbolSize = 60;
var stream;

function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(0);
    stream = new Stream();
    stream.generateSymbols();
    textSize(symbolSize);
}

function draw() {
    background(0);
    stream.render();

}

function Symbol(x, y, speed) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.switchInterval = round(random(2, 20));

    this.setToRandomSymbol = function() {
        if (frameCount % this.switchInterval == 0) {
            this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));

        }

    }

    //NO LONGER USING THIS DEFINED ANOTHER FUNCTION CALLED STREAMS TO HANDLE THIS

    // this.render = function() {
    //     fill(0, 255, 70);
    //     text(this.value, this.x, this.y);
    //     this.rain();
    //     this.setToRandomSymbol();
    // }

    this.rain = function() {
        //when the symbol reaches the bottom it loops back 

        //THIS IS THE LONG WAY OF WRITING THE CONDITION STATEMENT 

        // if (this.y >= height) {
        //     this.y = 0;
        // } else {
        //     this.y += this.speed;
        // }

        //SHORTCUT using ternary 
        this.y = (this.y >= height) ? 0 : this.y += this.speed;

    }

}

function Stream() {
    this.symbols = []
    this.totalSymbols = round(random(5, 30));
    this.speed = random(5, 20);


    this.generateSymbols = function() {
        var y = 0;
        var x = width / 2;

        for (var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(x, y, this.speed);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= symbolSize;
        }
    }

    this.render = function() {
        //add anonymous symbol in for each loop 
        this.symbols.forEach(function(symbol) {
            fill(0, 255, 70);
            text(symbol.value, symbol.x, symbol.y);
            symbol.rain();
            symbol.setToRandomSymbol();

        });
    }

}