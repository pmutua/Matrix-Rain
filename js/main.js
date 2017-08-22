var symbol;

function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(0);

}

function draw() {

}

function Symbol(x, y) {
    this.x = x;
    this.y = y;
    this.value = value;

    this.setToRandomSymbol = function() {
        this.value = String.fromCharCode(0x30A0 + round(0, 96))

    }
    this.render = function() {
        fill(0, 255, 70);
        text(this.value, this.x, this.y);
    }
}

function Stream() {

}