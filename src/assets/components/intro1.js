
setInterval(() => {
    let r= Math.random() * 100;
    let g= Math.random() * 100;
    let b= Math.random() * 100;
let color=`rgb(${r},${g},${b})`;
    document.querySelector("span").style.color=color;
},4000);