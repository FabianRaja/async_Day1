let toDisplay=document.querySelector(".display");

const print=(message,cb=()=>{})=>{
    cb();
}

print(setTimeout(()=>toDisplay.innerText=10,1000),
    ()=>(print(setTimeout(()=>toDisplay.innerText=9,2000),
        ()=>(print(setTimeout(()=>toDisplay.innerText=8,3000),
            ()=>(print(setTimeout(()=>toDisplay.innerText=7,4000),
                ()=>(print(setTimeout(()=>toDisplay.innerText=6,5000),
                    ()=>(print(setTimeout(()=>toDisplay.innerText=5,6000),
                        ()=>(print(setTimeout(()=>toDisplay.innerText=4,7000),
                            ()=>(print(setTimeout(()=>toDisplay.innerText=3,8000),
                                ()=>(print(setTimeout(()=>toDisplay.innerText=2,9000),
                                    ()=>(print(setTimeout(()=>toDisplay.innerText=1,10000),
                                        ()=>(print(setTimeout(()=>toDisplay.innerText="Happy Independance Day",11000))))))))))))))))))))));







                                        








