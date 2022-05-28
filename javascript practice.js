// in- line comment
/*multiline comment */

//-------------diffeent types of variable-------

var myName = "Annesha"//to declare variable(going to be used through out whole program)
myname =7
let ourname= "Tasneem"//within the scope where it is declared
const pi = 3.14//can't never changed


//-----------emicolon to end the line of js-----------

var a;//onliy declaring
var b= 9;//declaring and assigning
a=b

//-----------allows to see thing in console-----------

console.log(a)

//-----------case sensitive----------------------

var cAmel;
cAmel=9 ;


//-------------adding and substracting,multiplying and dividing,incrementing and decrementing-------------

var c=45-12;
var d=45+12;
var s=45*12;
var f=4/2;
f++;
d--;

//-----------------decimal number--------------

var d=0.2;

a+=12;//a=a+12;



//--------------give \ if you need to escape double qoutation----------------------

var test = " I am a \"double qouted\" string"
console.log(test)

//--------------another way--------------

var test1 = ' I am a "double qouted" string'
console.log(test1)


//----------array------

var arr = ["abcd",44]

//-------nested array------

var g = [["pq",33],["as",44]]

//-----f=[[1,2],[4,3]]----------

var f = g[0][1];
console.log(f)//console 2


//---push ------------

g.push(["man",99]);// insert at last 
console.log(f)

//---------pop----------

var y =g.pop() // remove last element
console.log(y)


//--------similar to pop but remove first-----------

g.shift(); //remove the first element

//-------------similar to push but at first-----------

g.unshift(["aps",783]);//insert first element
console.log(g)



//--------------function-----------

function ourfunc()
{

    console.log("Hey World");
}


// == does type conversion. === strictly does not

var a = [];
var i=0;
while(i<5)
{
    a.push(i);
    i++;
}
console.log(a)



//------------local variable took precedence over a global variable----------

var outwear="T-shirt"

function outfit() {

        var outwear="Sweater";
        return outwear;
}
console.log(outfit());//console will show "sweater"


//--------------creating objects------------------

var mycat={

       "name":"Cat",
       "legs":3,
       "tails":2,
       "an entry":"burger",
       "friends":[]
};

var value=mycat.name;
var myvalue=mycat["an entry"];


//-------------object freeze-----------

function freezeobj( ){
          
          "use strict";
          const MATH_CONSTANTS={
            PI:3.14
          };
          Object.freeze(MATH_CONSTANTS);//now you can't change the value of pi

}


//-----------------make function in different way-----arrow function  =>  ----------

var magic=function(){

     return new Date();
};

//you can writh this in this way 

const magic= ()=>new Date();



//-----------------used mainly for API calls--------------------------

const stats = {
    max : 56.78,
    min : -2.75
};
const half = (function() {

    return function half({ max, min}) {
        return (max+min)/2.0;
    };

})();

console.log(stats);
console.log(half(stats));


//--------------make getter setter by own ---------------

class Book {

    constructor (author){
        this._author = author;//_ means a private variable
    }

    //getter

    get writer(){
        return this._author;
    }
    
    // setter

    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

