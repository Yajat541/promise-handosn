let answer1=document.querySelector(".answer1");

function calculate(num1,num2){
    return num1*num2;
}
function displayDate(name,age){
    console.log(`${name} : age is ${age}`)
    answer1.innerHTML=`${name} : age is ${age}`;
}
displayDate("Yajat",calculate(22,1));


let answer2=document.querySelector(".answer2");

setTimeout(() => {
   console.log("1");
   answer2.innerHTML="1 <br>"
   setTimeout(() => {
    console.log("2");
    answer2.innerHTML=answer2.innerHTML+ "2<br>"
    setTimeout(() => {
       console.log("3");
       answer2.innerHTML=answer2.innerHTML+ "3 <br>"
       setTimeout(() => {
        console.log("4");
        answer2.innerHTML=answer2.innerHTML+ "4 <br>"
        setTimeout(() => {
           console.log("5") 
           answer2.innerHTML=answer2.innerHTML+ "5 <br>"
           setTimeout(() => {
            console.log("6")
            answer2.innerHTML=answer2.innerHTML+ "6 <br>"
            setTimeout(() => {
               console.log("7") 
               answer2.innerHTML=answer2.innerHTML+ "7 <br>"
            }, 7000);
           }, 6000);
        }, 5000);
       }, 4000); 
    }, 3000);
   }, 2000); 
}, 1000);

let answer3=document.querySelector(".answer3")
function promisechain(alpha,timeout){
   return new Promise((res,rej)=>{
      setTimeout(() => {
         console.log(alpha);
         answer3.innerHTML=answer3.innerHTML+ alpha + "<br>"
         res("The promise is resolved!!!...")
      }, timeout);
   })
}
function visible(){
   promisechain("1",1000)
   .then(()=>promisechain("2", 2000))
   .then(()=>promisechain("3", 3000))
   .then(()=>promisechain("4", 4000))
   .then(()=>promisechain("5", 5000))
   .then(()=>promisechain("6", 6000))
   .then(()=>promisechain("7", 7000))
}
visible();

let answer4=document.querySelector(".answer4")
let variable=true
function promisefun(){
   return new Promise ((res,rej)=>{
      if(variable){
         res("promise resolved succesfully...")
      }
      else{
         rej(Error("Promise Rejected!!!"))
      }
   })
}
promisefun(variable).then((data)=>{
   console.log(data);
   answer4.innerHTML=data
}).catch((err)=>{
   console.log(err);
})


let answer5=document.querySelector(".answer5")
function divide(num1, num2, callback) {
   let output = num1 / num2;
   callback(output);
   }
         
   function division(output) {
   console.log('The result is: ' + output);
   answer5.innerHTML = " This result is " + output
   }
         
divide(200, 100,  division);

let answer6=document.querySelector(".answer6")
setTimeout(()=>{
   console.log("1")
   answer6.innerHTML = "1 <br>"
   setTimeout(()=>{
       console.log("2")
       answer6.innerHTML = answer6.innerHTML+ "2 <br>"
       setTimeout(()=>{
           console.log("3");
           answer6.innerHTML = answer6.innerHTML + "3 <br>"
           setTimeout(()=>{
               console.log("4");
               answer6.innerHTML = answer6.innerHTML + "4 <br>"
               setTimeout(()=>{
                   console.log("5");
                   answer6.innerHTML = answer6.innerHTML + "5 <br>"
                   setTimeout(()=>{
                       console.log("6");
                       answer6.innerHTML = answer6.innerHTML+ "6 <br>"
                       setTimeout(()=>{
                           console.log("7")
                           answer6.innerHTML = answer6.innerHTML + "7 <br>"
                       },7000)
                   },6000)
               },5000)
           },4000)
       },3000)
   },2000)
},1000)

// question 7
let answer7=document.querySelector(".answer7");
function findsum(num1,num2){
   let pr=new Promise((res,rej)=>{
      setTimeout(() => {
         let sum=num1+num2;
         if(isNaN(sum)){
            rej("Try again! Enter a valid number");
         }else{
            res(sum);
         }
      },2000);
   })
   return pr;
}
findsum(12,24).then((ans)=>{
   answer7.innerHTML= "Sum = " + ans;
}).catch((err)=>{
   console.log(err);
})

// question 8
let answer8=document.querySelector(".answer8");
function fetchData() {
   return new Promise((res)=>{
      setTimeout(() => {
         res("Data received!!!...")
      }, 2000);
   })
}

async function printData(){
   console.log("Fetching data ...");
   answer8.innerHTML="Fetching data ..."+ "<br>"
   const data=await fetchData();
   console.log(data);
   answer8.innerHTML=answer8.innerHTML + data;
}
printData();

// question 9
let answer9=document.querySelector(".answer9");
function mypromise(num ){
   return new Promise((resolve, reject)=>{
       if(num%2 === 0){
           resolve("This is even ")
       }
       else{
           rej("This is Odd ")
       }
   })
}

const mypromise1 = new Promise((resolve, reject)=>{
   if(true){
       resolve(" hi EAC _01 ")
   }
   else{
       reject(" Soryy !!!! ")
   }
})

Promise.all([mypromise(20), mypromise1]).then((data)=>{
   console.log(data)
   answer9.innerHTML = data
}).catch((data)=>{
   console.log(data)
   answer9.innerHTML = data
})



