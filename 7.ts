console.log(getParams('name=hexlet&count=3&order=asc'))
function getParams(str:string){
  let a = str.split('&')
  var obg: {[key: string]: string} = {}
  
  function aboba(a:string){
    let c = a.split('=')
    let gf = c[0]
    let ggh = c[1]
    console.log(gf, ggh)
    let gg:object={
     [gf] : ggh
    }
    console.log(gg)
    Object.assign(obg, gg);
  }

  a.forEach(aboba)
  return obg
}