///open console

function task1(){
let x1=Math.floor(Math.random()*200);
let x2=Math.floor(Math.random()*200);
document.cookie=`x1=${x1}; max-age=120;`;
document.cookie=`x2=${x2}; max-age=120;`;
let sum=0;
let fcookie= document.cookie.split('; ')
for(let i =0; i<fcookie.length;i++){sum+=Number(fcookie[i].split('=')[1]);}
document.write(sum);
}
task1();
let k=0;
function takeinfo(){
  k++;
  function ind(inf,key){let x= inf[key].value;inf[key].value='';return x;}
  let info = document.getElementsByTagName('input');
  document.cookie=`login${k}=${ind(info,0)}; max-age=120;`
  document.cookie=`pass${k}=${ind(info,1)}; max-age=120;`
  document.cookie=`email${k}=${ind(info,2)}; max-age=120;`
  console.log(document.cookie)
}


function ad(){
let result='';let charcode = 0;
  let doc=document.cookie;
  for (let i = 0; i < doc.length; i++) {
    charcode = (doc[i].charCodeAt()) + 2;
    result += String.fromCharCode(charcode);
  }

doc=result;
console.log(doc)
result='';charcode = 0;
  for (var i = 0; i < doc.length; i++) {
    charcode = (doc[i].charCodeAt())-2;
    result += String.fromCharCode(charcode);
  }
doc=result;
console.log(doc)
}

function innd(inf){let x= inf.value;inf.value='';return x;}

function mysystem(){
  let info=document.getElementById('kk');
  console.log(document.cookie)
  let t=document.cookie.split(';');
  let block=document.getElementById('dd')
    dd.innerHTML+=`<br>${t}`;
  switch(innd(info)){
  
    case '1': 
    let text = prompt("text");
    document.cookie=`text${Math.floor(Math.random()*20)}=${text.toString()}; max-age=120;`; console.log(document.cookie);
    break;

    case '2':
    let temparr=createarrofcookie(t);
    let x=prompt('Set index from 0 to '+(temparr.length-1));
    deleteindexCookies(x)
    break;
    case '3':alert("all cookies'll delete "); deleteAllCookies();break;
  }
}
function createarrofcookie(dt){
let obj={};
for(let i=0;i<dt.length;i++){c=dt[i].split('=');obj[c[0]]=c[1];}
let arr=Object.keys(obj)
return arr;
}
function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
function deleteindexCookies(x) {
    var cookies = document.cookie.split(";");
        var cookie = cookies[x];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }