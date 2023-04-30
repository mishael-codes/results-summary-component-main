import scores from "./data.json" assert{type: "json"}

let score0 = scores[0].score;
let score1 = scores[1].score;
let score2 = scores[2].score;
let score3 = scores[3].score;

let rs = document.getElementById('reaction-score').textContent = score0;/*rs = reaction score */
let ms = document.getElementById('memory-score').textContent = score1;/* ms = memory-score */
let vs =  document.getElementById('verbal-score').textContent = score2;/* vs = vrbal-score */
let vis = document.getElementById('visual-score').textContent = score3;/* vis = visual-score */

let total = document.getElementById('total');
total.textContent = ((rs + ms + vs + vis)/4).toFixed(0)
console.log(total)
// console.log(rs, ms, vs, vis)