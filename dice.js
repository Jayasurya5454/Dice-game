function dice()
{
    let x = Math.floor( Math.random()*6 +1);
    let y = Math.floor( Math.random()*6 +1);
    let z = Math.floor( Math.random()*6 +1);
    document.getElementById("x").innerHTML=x;
    document.getElementById("y").innerHTML=y;
    document.getElementById("z").innerHTML=z;
}
