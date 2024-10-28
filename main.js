const num= [1, 2, 3, 4, 5, 6];
let evens=[]

num.forEach (item=>{
  if(item%2===0){
      evens.push(item);
 }})

 console.log(evens);


 const  strings = ["apple", "banana", "cherry", "date"];
let moref=[]
 strings.forEach(item=>{
  if(item.length>5){
      moref.push(item);
 }})

 console.log(moref);


 const words = ["apple", "pear", "orange", "grape", "apricot"];
 let withA=[]

 words.forEach(item=>{
  if(item.startsWith("a")){
      withA.push(item);
 }})

 console.log(withA);

 const numbers = [-5, 3, -2, 8, 0, -1, 7];

 let neg=[]
 let pos=[]

 numbers.forEach(item=>{
 if(item<0){
      neg.push(item);
 }
 else {
  pos.push(item);
}
  
})
 console.log(neg);
 console.log(pos);


 const ordinary = [1, 2, 3, 2, 4, 1, 5];
 let unique=[]

 ordinary.forEach(item=>{
  if(!unique.includes(item)){
      unique.push(item);
 }})

 console.log(unique);

 let str = ["hello", "world1", "test", "abc123", "example"];

let stringsWithoutDigits = [];

str.forEach(str => {
  if (!/\d/.test(str)) {  
    stringsWithoutDigits.push(str);
  }
});

console.log(stringsWithoutDigits);



 let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie" },
    { name: "Dave", age: 22 }
  ];
  
  let usersWithAge = [];
  
  users.forEach(item => {
    if (item.age !== undefined) {
      usersWithAge.push(item);
    }
  });
  
  console.log(usersWithAge);


  let movies = [
      { title: "Movie 1", rating: 6.5 },
      { title: "Movie 2", rating: 8.3 },
      { title: "Movie 3", rating: 7.2 },
      { title: "Movie 4", rating: 5.8 }
    ];

let over7M=[]


movies.forEach(item=>{
    if (item.rating>7){
      over7M.push(item);
    }
})

console.log(over7M);

let randomWORDS = ["one", "two", "three", "four", "five"];

let withodd=[];


randomWORDS.forEach(item=>{
    if(item.length % 2 !==0){
        withodd.push(item);
    }
})

console.log(withodd);

let num10 = [4, 12, 7, 19, 3, 10];

let under10=[];

let over10=[];

num10.forEach(item=>{
    if(item<10){
        under10.push(item);
    }
    else if(item>=10){
        over10.push(item);
    }
})

console.log(under10);
console.log(over10);
  