/**
 * 1.- To check a variable's type, we can use "typeof"
 *      > typeof "foo"
        "string"
        > typeof true
        "boolean"
        > typeof 42
        "number"       
 *   - Variables has invalid name when:
        + Start with a number
        + Contain special characters (&,*,(,),...)
        + Same with key word (var,let,int,...)
       Examples: 98cuong
                 cuong&nguyen
                 letcuongplay 
 * 2.let x = prompt("Enter radius");
     console.log("Area", Number(x) * Number(x) * 3.14);
   3.let x = prompt("Enter the temperature in Celius");
     console.log(Number(x) * 33.8);
    Turtle excercise:
    1.Square
    for(i=0;i<5;i++){
        fd(100)
        rt(90)
        console.log(i);
    }
    2.Triangle
    rt(30) 
    for(i=0;i<3;i++){
        fd(100)
        rt(120)
        console.log(i);
    }
    3.Circle
    for(i=0;i<360;i++){
        fd(1)
        rt(1)
        console.log(i);
    }
    4.Multi-Circle
    for(a=0;a<100;a++){
            rt(5)
        for(i=0;i<360;i++){
            fd(1)
            rt(1)
        console.log(i);
        }
    }
 */