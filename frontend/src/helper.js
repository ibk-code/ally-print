"use strict"

function cleartimer(x) {
    clearTimeout(x)
}
  function loading(i,x,a) {
    // if(i === 0){
        // x.classList.add("loaderanimation")
    // }else{
        let timer1 = setTimeout(() => {
            x.classList.add("loaderanimation")
        }, i * 1200);
    // }
    let timer2 = setTimeout(() => {
        if(!a[0].classList.contains("loader")){
            x.classList.remove("loaderanimation");
            console.log("yay")
            setTimeout(() => {
                loading(i,x,a)
            },0)
        }
    },a.length * 1200 )

    if (!document.querySelector('.loader')) {
        // console.lo
        cleartimer(timer1)
        cleartimer(timer2)
        return
    }


  }


  let loader = () => {
    let elem = document.querySelectorAll(".loaderelem" );
    console.log(elem);

    let nodeelem = Array.from(elem);
    nodeelem.forEach((x,i,a) => {
        loading(i,x,a);
    })
  }

  export {loader};