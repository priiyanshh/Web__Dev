// -------case 01------->

// console.log("first");
// setTimeout(function(){
//     console.log("after 3 sec")
// } , 3000 )
// console.log("end");


// ------case 02------>>


// console.log("first");
// setTimeout(function(){
//     console.log("after 3 sec")
// } , 3000 )
// setTimeout(function() {
//     console.log("after 4 sec")
// }, 4000 )
// setTimeout(function() {
//     console.log("after 0 sec")
// }, 0 )
// console.log("end");


// -----------case 03----------->

// function step1(fn){
//     setTimeout(function(){
//         console.log("after 2 secs")
//         fn();
//     } , 2000)
// }

// function step2(){
//     setTimeout(function(){
//         console.log("after 4 secs")
//     } , 4000)
// }

// step1(function(){
//     step2();
// });

// step1(step2);


// --------- challenge insta -----------


function step1(cb){
    setTimeout(function(){
        console.log("selecting image")
        cb("selecting image");
    },2000)
}

function step2(image , cb){
    setTimeout(function(){
        console.log(`filter applied on ${image}`)
        cb('filtered image')
    },2000)
}
function step3(filteredImage , cb){
    setTimeout(function(){
        console.log(`adding caption to ${filteredImage}`)
        cb('filtered image with caption')
    } , 2000)
}
function step4(final){
    setTimeout(function(){
        console.log(`uploading you ${final}...`)
    } , 2000)
}

// callback hell (horizontally grow)
step1(function(image){
    step2(image , function(filteredImage){
        step3(filteredImage , function(final){
            step4(final)
        });
    });
});


