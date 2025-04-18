let bubbles = [];

function setup() {
  createCanvas(400, 400);

  // 初始化一些泡泡
  for (let i = 0; i < 20; i++) {
    bubbles.push(new Bubble(random(width), random(height), random(10, 40)));
  }
}

function draw() {
  background(220, 220, 255); // 淡藍色背景

  // 更新並顯示每個泡泡
  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }
}

// 泡泡類別
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // 確保泡泡在畫布內反彈
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
  }

  show() {
    noStroke();
    fill(255, 255, 255, 150); // 白色，帶透明度
    ellipse(this.x, this.y, this.r * 2);


}  }  

