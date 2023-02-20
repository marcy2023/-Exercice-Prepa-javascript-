let x = 4, y = 2, z = -2;
x = x + 1;
x = x - 1;

y = y * 2;

if(x == y == z){
    console.log("les trois variables sont egales")
}
else if(x == y|| x == z|| y == z){
    console.log("les deux variables sont de valeur egale")
}
else{
    console.log("les trois variables sont differentes")
}