var _width;
var _height;
var len;
var grid;

function setup(){
  _width = 500;
  _height = _width;
  createCanvas(_width, _height);
  len = _width/5;
  grid = new Grid (_width, _height, len);
}

function draw(){
  background(0);
  grid.display(1);
  grid.display(2);
  grid.display(3);
  grid.display(4);
  grid.display(5);
  grid.drawCircle();
  grid.drawArc();
  noLoop();
}
