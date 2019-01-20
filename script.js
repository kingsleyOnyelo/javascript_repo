let parallelogram = {
    height:20,
    base:40,
    area: function(height,base){
        return height*base;
    }
}

console.log(parallelogram.area(20,54));

let cylinder = {
    pie =3.14,
    radius= 5,
    height= 43,
    volume = function(pie,radius,height){
        return pie * radius*radius*height;
    }
}

console.log(cylinder.volume(3.14,5,43));

let rectangle = {
    lenght=76,
    base=23,
    areaRect = function(lenght,base){
        return lenght*base;
    }
}

console.log(rectangle.areaRect(34,45));