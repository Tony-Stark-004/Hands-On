// Functions
//query-1
function sum (){
    console.log();
} 
//query-2
    let addition = (x,y) =>{
    let p =x+y;
    return p;
}
 console.log(addition(4,5));
//query-3
let multiply = (x,y) =>{
    let p =x*y;
    return p;
}
 console.log(multiply(4,5));
//query-4
var x = 21;
    var girl = function () {
        console.log(x);
        var x = 20;
    };
    girl ();
// **OP-undefined,undefined

//query-5
var x = 21;
    girl ();
    console.log(x)
    function girl() {
        console.log(x);
        var x = 20;
    };
// **OP-21
//query-6

    var x = 21;
    a();
    b();
    
      function a() {
        
       x = 20;
      console.log(x);
    };
     function b() {
        
        x = 40;
       console.log(x);
    };
// **OP-20,40

//query-7
function  factorial (n){
    let fact = 1;
    for(let i=n;i>=1;i--){
        fact*=i
    }
    return (fact);
}
console.log(factorial(3));


// inheritance and protoype
//query-1
const parent ={
    firstName:'riya',
    lastName:'sharma',
    name(){
        return(this.firstName+" "+this.lastName)
    }
}
const child={
    __proto__:parent
}
console.log(child.name())
//query-2
    
function person() {
    this.name = 'John'
}
person.prototype.age = 23

const person1 = new person();

console.log(person1.name); 
console.log(person1.age); 

//query-4
var obj1 = {
    name: "Areeb",
     batch:17
 }
 let res = Object.keys(obj1)
 console.log(res)
 
 const mynum = (n)=>{
     for (let i = 1; i <= n; i++) {
         setTimeout( () =>{
           console.log(i)
         }, i * 1000)
       }
   }

  mynum(7);


  
// Promises,async,await
//query-1
const oneperson =(friend, callback) => {
    console.log(`Heyya.its${friend}`);
    callback();
}
const secondperson = () =>{
    console.log(`bye`)
}
oneperson("me",secondperson);
 
//query-2
function calltime(){
    setTimeout(()=>{
        console.log("1");
        setTimeout(()=>{
            console.log("2");
            setTimeout(()=>{
                console.log("3");
                setTimeout(()=>{
                    console.log("4");
                    setTimeout(()=>{
                        console.log("5");
                        setTimeout(()=>{
                            console.log("6");
                            setTimeout(()=>{
                                console.log("7");
                                 },7000)
                            },6000)
                        },5000)
                    },4000)
                },3000)
            },2000)
        },1000)
 }
 calltime()
//query-3
let printNumber =(time, num) =>{
    return new Promise ((resolve, reject)=>{
        if (num){
            setTimeout(()=>{
                resolve(num());
            },time)
        }
        else{
            reject(console.log("failed"))
        }
    })
}
printNumber(0, () =>console.log("Passed")).then(()=>{
    return printNumber(1000,() =>{console.log("1")})
})