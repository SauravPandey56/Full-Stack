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

// MAP
let num = [1,2,3,4,5,66,7,77];
let double = num.map((el)=>{
    return el*el;
});

// for object 
let students = [{
    name : "saurav",
    marks:86
},
{
    name :"pankaj",
    marks : 88
}
];

let gpa = students.map((el)=>{
    return el.marks/10 ;
});