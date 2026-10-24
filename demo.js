
//functions

var favActer = "Vijai"
var favPlayer = "Dhoni"
var favmovie = "Leo"

function favourite()
{
    console.log("Fav Acter : "+ favActer)
    console.log("Fav PLayer : "+favPlayer)
    console.log("Fav Movie : "+favmovie)
}

favourite()

function area(l,b)
{
    var area = l*b
    console.log(area)
}

var length = 23
var breath = 64

area(length,breath)

              

function add(a,b)
{
    return (a+b)
}

var sum = add(10,10)

console.log(sum)
 

var homework = false

if(homework)
{
    console.log("Great job!")
}

else
{
    console.log("Finish your homework before playing")
}


var season = "autumn"

if(season == "spring")
{
    console.log("Enjoy the blooming flowers")
}
else if(season == "summer")
{
    console.log("Have fun in sun")
}
else if(season == "autumn"||"fall")
{
    console.log("Admire the colorful leaves")
}
else
{
    console.log("Bundle up and stay warm")
}

for(i = 1; i<=10; i++)
{
    console.log(i + "x2=" + i*2)
}
