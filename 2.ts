let a: string = String(prompt("Номер карты"));
if (a.length != 16) {
  a = "1234567891123456";
}
let star: string = "********************";
let bb: number = Number(prompt("Сколько прячем"));
let staradd: string[] = star.split("", bb);
let endstar = staradd.join("");
let cc: string[] = a.split("");
cc = cc.reverse();
let newcc = cc.join();
let newccadd: string[] = a.split("", 4);
let endcc = newccadd.join("");
console.log(`${endstar}${endcc}`);
