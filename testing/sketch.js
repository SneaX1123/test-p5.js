let votes = [12, 8, 9]
function setup() {
  createCanvas(600, 360);
  background(240);
  fill(61, 112, 80);
  for (let i = 0; i < votes.length; i++) {
    let h = votes[i] * 10;
    rect(90 + i * 160, 280 - h, 70, h);
    fill(0);
    textSize(12);
    text(["Action", "Thriller", "Comedy"][i], 90 + i * 160, 305);
    fill(61, 112, 80)
  }
}
