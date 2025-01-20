//filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

//filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

//filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);

//function filterAnagrams(arg0: string,arg1: string[]) {
//throw new Error("Function not implemented.");
//}
// []

function prop(el: string, standart: string) {
  let s: number = 0;
  let standartadd: string[] = standart.split("");
  let popadd: string[] = [];
  let elif: string;
  let error = 0;
  if (el.length == standart.length) {
    for (let index = 0; index < standart.length; index++) {
      //получили значение цикл
      elif = el[index];
      console.log(elif);
      for (let index2 = 0; index2 < standart.length; index2++) {
        if (elif == standartadd[index2] && !popadd.includes(String(index2))) {
          s++;
          popadd.push(String(index2));
          console.log(`${popadd} tttt`);
        }
        if (!standartadd.includes(elif)) {
          error = 1;
        }
      }
    }
  }
  if (s == standart.length && error == 0) {
    console.log("ssss");
    return el;
  }
  return "";
}

let stand: string = "racer";
let cont: string[] = ["crazer", "carer", "racar", "caers", "racer"];
console.log(filterItems(stand, cont));

function filterItems(standart: string, content: string[]) {
  return content.filter((el: string) => prop(el, standart));
}

// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(fruits, "ap"));
// Определите тип исходя из структуры объектаc