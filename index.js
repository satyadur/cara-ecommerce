let bar=document.getElementById("bar")
let close=document.getElementById("close")
let nav= document.getElementById('navbar')

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}
let cert1=document.getElementsByClassName("cart1")
console.log(cert1);
for(let a=0;a<cert1.length;a++){
    console.log(cert1[a]);
    cert1[a].addEventListener("click",(e)=>{
        e.preventDefault()
        console.log("ass");
    })
}
let value1=118;
let to = document.getElementById('to')
console.log(to);
let inp1=Number(document.getElementById("inp1").value)
console.log(inp1);
let inp2=Number(document.getElementById("inp2").value)
console.log(inp2);
let inp3=Number(document.getElementById('inp3').value)
console.log(inp3);
let subt1=Number(document.getElementById("subt1").value)
console.log(subt1);
let finaltotal=document.getElementById("finaltotal")
console.log(finaltotal);
let final=document.getElementById("final")
console.log(final);
let to4=document.getElementById("to4")
console.log(to4);
let f1=document.getElementById('f1')
console.log(f1);
let m1=document.getElementById("m1")
console.log(m1);
let m2=document.getElementById("m2")
console.log(m2);
let m3=document.getElementById("m3")
console.log(m3);
let c1=0;
let c2=0;
let c3=0;
let sum=0;
let sub=0;
f1.addEventListener("click",()=>{
   if(f1.value>=0){
    f1.value= ++c1;
    inp1+=value1
    console.log(inp1);
    to.innerText=`${inp1}`
    sub=inp1+inp2+inp3
    console.log(sub);
    to4.innerText=`${sub}`
    final.innerText=`${sub}`
   }else{
    f1.value= ++c1;
   }
})
m1.addEventListener("click",()=>{
    if(f1.value<=0){
        f1.value=0
    }else{
        f1.value=--c1
    }})
let f2=document.getElementById('f2')
console.log(f2);

let to1=document.getElementById("to1")
console.log(to1);
let v2=138;
f2.addEventListener("click",()=>{
   if(f2.value>=0){
    f2.value= ++c2;
    inp2+=v2;
    console.log(inp2);
    to1.innerText=`${inp2}`
    sub=inp1+inp2+inp3
    console.log(sub);
    to4.innerText=`${sub}`
    final.innerText=`${sub}`
   }else{
    f2.value= ++c2;
   }
})
m2.addEventListener("click",()=>{
    if(f2.value<=0){
        f2.value=0
    }else{
        f2.value=--c2
    }})
let f3=document.getElementById('f3')
console.log(f3);
let v3=128;

let to2=document.getElementById('to2')
console.log(to2);
f3.addEventListener("click",()=>{
   if(f3.value>=0){
    f3.value= ++c3;
    inp3+=v3;
    console.log(inp3);
    to2.innerText=`${inp3}`
    sub=inp1+inp2+inp3
    console.log(sub);
    to4.innerText=`${sub}`
    final.innerText=`${sub}`
   }
   else{
    f3.value= ++c3;
   }
})
m3.addEventListener("click",()=>{
    if(f3.value<=0){
        f3.value=0
    }else{
        f3.value=--c3
    }
})


let table=document.getElementById("tb")
console.log(table);
let bag1=document.getElementById("bag1")
console.log(bag1);
let tr1=document.getElementById("tr1")
let tr2=document.getElementById("tr2")
let tr3=document.getElementById("tr3")
console.log(tr1,tr2,tr3);


let cross=document.getElementById("cross")
console.log(cross);
cross.addEventListener("click",(e)=>{
    e.preventDefault()
    tr1.style.display="none"
})

let cross2=document.getElementById("cross2")
console.log(cross2);
cross2.addEventListener("click",(e)=>{
    e.preventDefault()
    tr2.style.display="none"
})

let cross3=document.getElementById("cross3")
console.log(cross3);
cross3.addEventListener("click",(e)=>{
    e.preventDefault()
    tr3.style.display="none"
})

