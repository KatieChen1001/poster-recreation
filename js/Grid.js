"use strict"

class Grid {
  constructor (_width,_height,len){
    this.sideLen = len;
    this.width = _width;
    this.height = _height;
    this.rad = this.sideLen - 20;
    this.strokeSize = 10;
    this.radArc = this.rad - this.strokeSize;
    this.myColorRect= [
      {h:253, s: 17, b: 80},
      {h:191, s:64, b:83},
      {h:46, s:69, b:99},
      {h:358, s:83, b:85},
      {h:199, s:148, b:92},
      {h:190, s:72, b:60},
      {h:239, s:66, b:41},
      {h:46, s:69, b:99},
      {h:9, s:84, b:97},
      {h:39, s:19, b:78},
      {h:316, s:57, b:60},
      {h:31, s:80, b:86},
      {h:193, s:12, b:70},
      {h:346, s:49, b:91},
      {h:11, s:81, b:80},
      {h:186, s:41, b:66},
      {h:1, s:48, b:86},
      {h:174, s:80, b:60},
      {h:9, s:67, b:93},
      {h:53, s:65, b:89},
      {h:266, s:24, b:62},
      {h:346, s:53, b:88},
      {h:32, s:71, b:87},
      {h:204, s:25, b:56},
      {h:193, s:72, b:68},
    ];

    this.myColorCir= [
      {h:290, s:44, b:40,weight:1},
      {h:334, s:52, b:81,weight:2},
      {h:358, s:83, b:85,weight:1},
      {h:199, s:148, b:92,weight:2},
      {h:190, s:72, b:60,weight:1},
      {h:239, s:66, b:41,weight:1},
      {h:190, s:63, b:82,weight:1},
      {h:205, s:7, b:34,weight:1},
      {h:357, s:85, b:80,weight:1},
      {h:358, s:59, b:88,weight:2},
      {h:226, s:33, b:75,weight:1},
      {h:314, s:58, b:61,weight:2},
      {h:206, s:99, b:57,weight:1},
      {h:10, s:82, b:93,weight:1},
      {h:36, s:79, b:89,weight:1},
      {h:52, s:58, b:98,weight:2},
    ];

    this.myColorArc= [
      {h:253, s: 17, b: 80},
      {h:191, s:64, b:83},
      {h:46, s:69, b:99},
      {h:358, s:83, b:85},
      {h:199, s:148, b:92},
      {h:190, s:72, b:60},
      {h:239, s:66, b:41},
      {h:46, s:69, b:99},
      {h:9, s:84, b:97},
      {h:39, s:19, b:78},
      {h:316, s:57, b:60},
      {h:31, s:80, b:86},
      {h:193, s:12, b:70},
      {h:346, s:49, b:91},
      {h:11, s:81, b:80},
      {h:186, s:41, b:66},
      {h:1, s:48, b:86},
      {h:174, s:80, b:60},
      {h:9, s:67, b:93},
      {h:53, s:65, b:89},
      {h:266, s:24, b:62},
      {h:346, s:53, b:88},
      {h:32, s:71, b:87},
      {h:204, s:25, b:56},
      {h:193, s:72, b:68},
    ];
  }

  display(colNum){
    push();
    noStroke();
    colorMode(HSB);
    if (colNum == 1){
      for (var y = 0; y < this.height; y += this.sideLen){
        push();
        var actualWidth = this.sideLen/colNum;
        var clr = floor(random(this.myColorRect.length));
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b);
        this.myColorRect.splice(clr,1);
        rect(0, y, actualWidth, this.sideLen);
        pop();
      }
    } else if (colNum == 2){
      for (var y = 0; y < this.height; y += this.sideLen){
        push();
        var actualWidth = this.sideLen/colNum;
        var clr = floor(random(this.myColorRect.length));
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b + 50);
        rect(this.sideLen, y, actualWidth, this.sideLen);
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b );
        rect( this.sideLen+ actualWidth, y, actualWidth, this.sideLen);
        this.myColorRect.splice(clr,1);
        pop();
      }
    } else if (colNum == 3){
      for (var y = 0; y < this.height; y += this.sideLen){
        push();
        var actualWidth = this.sideLen/colNum;
        var clr = floor(random(this.myColorRect.length));
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b + 50);
        rect(this.sideLen*2, y, actualWidth, this.sideLen);
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b);
        rect( this.sideLen*2+ actualWidth, y, actualWidth, this.sideLen);
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b - 30);
        rect( this.sideLen*2+ actualWidth *2, y, actualWidth, this.sideLen);
        this.myColorRect.splice(clr,1);
        pop();
      }
    } else if (colNum == 4){
      for (var y = 0; y < this.height; y += this.sideLen){
        push();
        var actualWidth = this.sideLen/colNum;
        var clr = floor(random(this.myColorRect.length));
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b + 20);
        rect(this.sideLen*3, y, actualWidth, this.sideLen);
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b);
        rect( this.sideLen*3+ actualWidth, y, actualWidth, this.sideLen);
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b -20);
        rect( this.sideLen*3+ actualWidth *2, y, actualWidth, this.sideLen);
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b - 50);
        rect( this.sideLen*3+ actualWidth *3, y, actualWidth, this.sideLen);
        this.myColorRect.splice(clr,1);
        pop();

      }
    } else if (colNum == 5){
      for (var y = 0; y < this.height; y += this.sideLen){
        push();
        var actualWidth = this.sideLen/colNum;
        var clr = floor(random(this.myColorRect.length));
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b + 20);
        rect(this.sideLen*4, y, actualWidth, this.sideLen);
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b );
        rect( this.sideLen*4+ actualWidth, y, actualWidth, this.sideLen);
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b - 10);
        rect( this.sideLen*4+ actualWidth *2, y, actualWidth, this.sideLen);
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b - 30);
        rect( this.sideLen*4+ actualWidth *3, y, actualWidth, this.sideLen);
        fill(this.myColorRect[clr].h, this.myColorRect[clr].s, this.myColorRect[clr].b - 70);
        rect( this.sideLen*4+ actualWidth *4, y, actualWidth, this.sideLen);
        pop();
      }
    }
    pop();
  }

  drawCircle(){
    push();
    noStroke();
    colorMode(HSB);
    var tempLen = this.sideLen/2;
    var chances = 0;
    for (var x = tempLen; x < this.width; x += this.sideLen){
      var clr = floor(random(this.myColorCir.length));
      fill(this.myColorCir[clr].h, this.myColorCir[clr].s, this.myColorCir[clr].b);
      if (this.myColorCir[clr].weight == 1 ){
        this.myColorCir.splice(clr, 1);
      }
      ellipse(x, tempLen, this.rad, this.rad);
    }
    for (var x = tempLen; x < this.width; x += this.sideLen){
      var clr = floor(random(this.myColorCir.length));
      fill(this.myColorCir[clr].h, this.myColorCir[clr].s, this.myColorCir[clr].b);
      if (this.myColorCir[clr].weight == 1 ){
        this.myColorCir.splice(clr, 1);
      }
      ellipse(x, tempLen + this.sideLen, this.rad, this.rad);
    }
    for (var x = tempLen; x < this.width; x += this.sideLen){
      var clr = floor(random(this.myColorCir.length));
      fill(this.myColorCir[clr].h, this.myColorCir[clr].s, this.myColorCir[clr].b);
      if (this.myColorCir[clr].weight == 1 ){
        this.myColorCir.splice(clr, 1);
      }
      ellipse(x, tempLen + this.sideLen *2, this.rad, this.rad);
    }
    for (var x = tempLen; x < this.width; x += this.sideLen){
      var clr = floor(random(this.myColorCir.length));
      fill(this.myColorCir[clr].h, this.myColorCir[clr].s, this.myColorCir[clr].b);
      if (this.myColorCir[clr].weight == 1 ){
        this.myColorCir.splice(clr, 1);
      }
      ellipse(x, tempLen + this.sideLen*3, this.rad, this.rad);
    }
    for (var x = tempLen; x < this.width; x += this.sideLen){
      var clr = floor(random(this.myColorCir.length));
      fill(this.myColorCir[clr].h, this.myColorCir[clr].s, this.myColorCir[clr].b);
      this.myColorCir.splice(clr, 1);
      ellipse(x, tempLen + this.sideLen*4, this.rad, this.rad);
    }
    pop();

  }


  drawArc(){
    push();
    strokeWeight(this.strokeSize);
    colorMode(HSB);
    noFill();
    var tempLen = this.sideLen/2;
    for (var x = tempLen; x < this.width; x += this.sideLen){
      var angle = random(0, TWO_PI);
      var clr = floor(random(this.myColorArc.length));
      stroke(this.myColorArc[clr].h, this.myColorArc[clr].s, this.myColorArc[clr].b);
      arc(x, tempLen, this.radArc, this.radArc, angle, angle+PI);
      this.myColorArc.splice(clr, 1);
    }
    for (var x = tempLen; x < this.width; x += this.sideLen){
      var angle = random(0, TWO_PI);
      var clr = floor(random(this.myColorArc.length));
      stroke(this.myColorArc[clr].h, this.myColorArc[clr].s, this.myColorArc[clr].b);
      arc(x, tempLen + this.sideLen, this.radArc, this.radArc, angle, angle+PI);
      this.myColorArc.splice(clr, 1);
    }
    for (var x = tempLen; x < this.width; x += this.sideLen){
      var angle = random(0, TWO_PI);
      var clr = floor(random(this.myColorArc.length));
      stroke(this.myColorArc[clr].h, this.myColorArc[clr].s, this.myColorArc[clr].b);
      arc(x, tempLen + this.sideLen * 2, this.radArc, this.radArc, angle, angle+PI);
      this.myColorArc.splice(clr, 1);
    }
    for (var x = tempLen; x < this.width; x += this.sideLen){
      var angle = random(0, TWO_PI);
      var clr = floor(random(this.myColorArc.length));
      stroke(this.myColorArc[clr].h, this.myColorArc[clr].s, this.myColorArc[clr].b);
      arc(x, tempLen + this.sideLen * 3, this.radArc, this.radArc, angle, angle+PI);
      this.myColorArc.splice(clr, 1);
    }
    for (var x = tempLen; x < this.width; x += this.sideLen){
      var angle = random(0, TWO_PI);
      var clr = floor(random(this.myColorArc.length));
      stroke(this.myColorArc[clr].h, this.myColorArc[clr].s, this.myColorArc[clr].b);
      arc(x, tempLen + this.sideLen * 4, this.radArc, this.radArc, angle, angle+PI);
      this.myColorArc.splice(clr, 1);
    }
    pop();
  }


}
