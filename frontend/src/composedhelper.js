function cleartimer(x) {
    clearTimeout(x)
}

//adding animation class to each element
let u = i => {
    let timer1
    return (x) => {
        timer1 = setTimeout(() => {
            x.classList.add("loaderanimation")
        }, i * 1200);
        console.log("hello")
        return timer1
    }
}


let t = (i) => {
    let timer2 
    return (x) => {
        return (a) => {
            return(loading) => {
                timer2 = setTimeout(() => {
                    if(document.querySelector(".loader")){
                        x.classList.remove("loaderanimation");
                        console.log("yay")
                        setTimeout(() => {
                            loading(x,i,a)
                        },a.length * 50)
                    }
                },a.length * 1200 )
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