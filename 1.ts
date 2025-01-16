let a: string = String(prompt("Что повторить"));
let c: string = "";
let bb: number = Number(prompt("Сколько раз?"));

function repeatmy() {
  for (let index = 0; index < bb; index++) {
    c += a;
  }
  return alert(c);
}

repeatmy();
