'use strict';

let loaderanimation;

function cleartimer(x) {
  clearTimeout(x)
}

//element animation function
let u = (i) => {
  // let timer1;
  loaderanimation = [{color: '#eeeeee'}, {color: '#cacaca'},{color: '#a5a3a3'},{color: '#a1a1a1'},{color: '#ed6e2e'}];

  return (x) => {
    x.animate(loaderanimation, {
      duration: 1000,
      delay: i * 1000
    })
  }
}

//function to recall loader when product is not loaded
let t = (i) => {
  let timer2 
  return (x) => {
      return (a) => {
          return(loading) => {
              timer2 = setTimeout(() => {
                  if(document.querySelector(".loader")){
                      setTimeout(() => {
                          loading(x,i,a)
                      },a.length * 50)
                  }
              },a.length * 1000 )
              return timer2
          }
      }
  }
}

//call the timer and if items loaded clear loader
let last = (x,i,a) => {
  let timer1 = u(i)(x);
  let timer2 = t(i)(x)(a)(last)

  if (!document.querySelector('.loader')) {
      cleartimer(timer1)
      cleartimer(timer2)
      console.log("Unmounted")
  }
}

//convert loader elemennts to array
let elemToArray = (elem) => {
  let ele = document.querySelectorAll(`.${elem}`);
  return () => {
     return Array.from(ele);
  }
}

//run animation on each elem
let load = (elem) => {
  return elem.forEach((x,i,a) => {
      last(x,i,a)
  })
}

//call loader animation on each
let loader = () => {
  let elem = elemToArray('loaderelem')();
  load(elem);
}

export {loader};