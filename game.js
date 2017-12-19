function zombie(positionX,positionY){
    this.posX =positionX;
    this.posY=positionY;
    this.life = 1;
    this.pikachu = new Image();
    this.pikachu.src= "pikachu.png";

    this.setPos=function (){

        this.posY+=2;
    }

    this.getDamage = function(i){
        this.life -= i;
    }
    this.getLife = function(){
        return this.life;
    }
    this.getZombie = function(){
        return this.pikachu;
    }
    this.getPosY = function(){
        return this.posY;
    }
}

function Ennemis(){
    this.total = 0;
    this.mechant = new Array();

    this.addMechant = function(mechant){
        this.mechant.push(mechant);
        this.total +=1;
    }
    this.remove = function(i){
        //console.log(i)
        delete this.mechant[i];
        this.total-=1;
        if(this.mechant.length==0){
            this.mechant =new Array();
        }
    }
}

function player(){
    this.points =0;
    this.life = 10;
    this.addPoint = function(i){
        this.points += i;
        console.log(this.points)
    }
    this.getDmg = function() {
        this.life-=1;
    }
}





var ennemis = new Ennemis();
var direction = {
    "ArrowRight": 128,
    "ArrowLeft": 64,
    "ArrowUp": 192,
    "ArrowDown": 0};
var etatV = {
    "a": 0,
    "b": 64,
    "c": 128 ,
    "d": 192
}
var sy = direction["ArrowDown"];

var x=10;
var y =10;

var w=10;
var c=10;

var eclair = new Image();
eclair.src = "pikachu.png";

var grass = new Image();
grass.src = "grass.png";


var pikachu = new Image();
pikachu.src= "pikachu.png";

var pikachu2 = new Image();
pikachu2.src= "pikachu.png";

var arc = new Image();
arc.src= "terre.jpg";

var p = 250;
var u = 300;


var drawGarden = function () {

    for(i=0 ; i<60;i++){
        for(j =0;j<80;j++){
            drawIma(grass,i*10,j*10);
        }
    }
};
var drawIma = function (a,i , j ) {
    ctx.drawImage(a, i,j);
};

var drawGame = function (ennemis,player) {

    if(pause==true){
        var pauses = new Image();
        pauses.src="pause.png"
        ctx.drawImage(pauses,0,0);

    }else{
        ctx.clearRect(0, 0, 500, 500);
        drawGarden();
        //console.log(ennemis.total)
        drawOpp(ennemis);
        avance(ennemis);
        kill(ennemis,player);
        console.log(player.points)

    }



};
var avance = function(ennemis){
    ennemis.mechant.forEach(function(valeur){
        valeur.setPos();
    })
}

var kill= function(ennemis){
    /*ennemis.mechant.forEach(function(valeur){
        if(valeur.getLife()<=0){
            console.log("tu es mort bb")
            valeur.pop();
        }
    })*/
    for(i=0;i<ennemis.mechant.length;i++){
        if(ennemis.mechant[i]==undefined){

        }else{
            if(ennemis.mechant[i].getLife()<=0 || ennemis.mechant[i].getPosY()>810){
               // console.log("tu es mort bb")
                //ennemis.mechant[i].pop();
                ennemis.remove(i)
                joueur.addPoint(1);
            }

        }

    }
}

var drawOpp = function(ennemis){
    ennemis.mechant.forEach(function(valeur){
        ctx.drawImage(valeur.getZombie(), sx, sy, 64, 64, valeur.posX, valeur.posY, 64, 64);
    })


}
var switches = function(a){
    switch(a){
        case 0 : return 0;break;
        //case 1 : return 64;break;
        case 1 : return 128;break;
        // case 3 : return 192;break;
    }
}
var drawEclair = function () {

    ctx.drawImage(eclair, sx, 256, 64, 64, x, y, 64, 64);
    ctx.drawImage(eclair, sx, 256, 64, 64, x, y, 64, 64);
}




var sx =0   ;
var val=0;
var xposition = 0;
var yposition = 0;
var audio = new Audio('kachu.wav');
var play = function(){
    audio.play();
}

var verifie = function(){
    ennemis.mechant.forEach(function(valeur){

        if(valeur.posY-32<yposition && yposition <valeur.posY+32){

           // console.log(valeur.posY-32);
           // console.log(yposition);
           // console.log(valeur.posY+32);

            if(valeur.posX-32<xposition && xposition<valeur.posX+32){
                valeur.getDamage(1)
               // console.log("je te touche");
            }else{
            /*    console.log("raté");
                console.log(valeur.posX-32);
                console.log(xposition);
                console.log(valeur.posX+32);*/
            }
        }else {
           /* console.log(valeur.posY-32);
            console.log(yposition);
            console.log(valeur.posY+32);
            console.log("raté");*/
        }

    })
}

var ctx;
//requestAnimationFrame
var getClickPosition = function (e,ennemis) {

    xposition = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft -350;
    yposition = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop-50;
    verifie(xposition,yposition)


    /*console.log("X : " + xPosition);
    console.log("Y : " + yPosition);
    console.log("La largeur de l'ecran fait : " +getWidth());
    console.log("La largeur de l'ecran fait : " +getHeight());*/
}


function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}
var pause = false;
document.onkeydown = function(e){
    if(e.keyCode == 0 || e.keyCode == 32) {
        console.log(pause);
        pause = !pause;

    }
}
document.addEventListener("click",getClickPosition.bind(ennemis),false);
function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}
var joueur = new player();
    var pay = function(){


        ennemis.addMechant(new zombie(10,10));
        ennemis.addMechant(new zombie(300,10))
        var cs = document.getElementById("cv");
        ctx = cs.getContext("2d");

        gameloop = setInterval(drawGame,10,ennemis,joueur);
        //drawPikachu();

    }

pay();








