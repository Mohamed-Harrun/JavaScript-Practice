// promise

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("walked");
        },1500)
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("kitchen cleaned");
        },3000)
    })
}

function outTheTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("trash outed");
        },1000)
    })
}

// walkDog().then(value =>{console.log(value); return cleanKitchen() })
//          .then(value =>{console.log(value); return outTheTrash()})
//          .then(value =>{console.log(value);console.log("you finished all");
         
//          })

// while using the await  we don't need to method chaining.

async function doChores() {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const outTheTrashResult = await outTheTrash();
    console.log(outTheTrashResult);
}

doChores();