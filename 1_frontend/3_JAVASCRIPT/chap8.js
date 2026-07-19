// ARRAY METHOD 
// 1.forEach 
let arr = [1,2,3,4,5,6,7];
arr.forEach((el)=>{
    console.log(el);
});

arr.forEach(function(el){
    console.log(el);
});

let print =  function(el){
    console.log(el);
};
arr.forEach(print);

// for oobject
let ary =[
    {
        name:"aman",
        marks:95
    },{
        name:"shradha",
        marks:96
    }
];
ary.forEach((student)=>{
    console.log(student.marks);
});