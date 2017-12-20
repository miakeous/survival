function zombie(positionX,positionY){
    this.posX =positionX;
    this.posY=positionY;
    this.value=10;
    this.sx = 0;
    this.sy=0;
    this.wx = 64;
    this.wy= 64;
    this.tx = 64;
    this.ty=64;
    this.life = 1;
    this.pikachu = new Image();
    this.pikachu.src= "pikachu.png";

    this.setPos=function (){

        this.posY+=2;
    }
    this.getValue = function(){
        return this.value;
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
function grosZombie(positionX,positionY){
    this.posX =positionX;
    this.value = 30;
    this.posY=positionY;
    this.life = 3;
    this.sx = 0;
    this.sy=0;
    this.wx = 30;
    this.wy= 30;
    this.tx = 128;
    this.ty=128;
    this.zomb = new Image();
    this.zomb.src= "grosZombie.png";

    this.setPos=function (){

        this.posY+=1;
    }

    this.getDamage = function(i){
        this.life -= i;
    }
    this.getValue = function(){
        return this.value;
    }
    this.getLife = function(){
        return this.life;
    }
    this.getZombie = function(){
        return this.zomb;
    }
    this.getPosY = function(){
        return this.posY;
    }
}
function gros2Zombie(positionX,positionY){
    this.posX =positionX;
    this.value = 60;
    this.posY=positionY;
    this.life = 5;
    this.sx = 95;
    this.sy=0;
    this.wx = 30;
    this.wy= 30;
    this.tx = 128;
    this.ty=128;
    this.zomb = new Image();
    this.zomb.src= "grosZombie.png";

    this.setPos=function (){

        this.posY+=0.75;
    }

    this.getDamage = function(i){
        this.life -= i;
    }
    this.getLife = function(){
        return this.life;
    }
    this.getZombie = function(){
        return this.zomb;
    }
    this.getValue = function(){
        return this.value;
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
    this.loop = 0;
    this.addPoint = function(i){
        this.points += i;
        console.log(this.points)
    }
    this.getDmg = function() {
        this.life-=1;
    }
}






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
if(loose==false) {
    if (pause == true) {
        var pauses = new Image();
        pauses.src = "pause.png"
        ctx.drawImage(pauses, 0, 0);

    } else {
        loop++;
        ctx.clearRect(0, 0, 500, 500);
        drawGarden();
        drawLife(player.life);
        drawScore();
        //console.log(ennemis.total)
        drawOpp(ennemis);

        console.log(player.points)

    }
}
else{
    drawLoose();
}


};
var avance = function(ennemis){
    ennemis.mechant.forEach(function(valeur){
        valeur.setPos();
    })
}

var kill= function(ennemis){
    for(i=0;i<ennemis.mechant.length;i++){
        if(ennemis.mechant[i]==undefined){

        }else{
            if(ennemis.mechant[i].getLife()<=0  ){
                joueur.addPoint(ennemis.mechant[i].getValue());
                ennemis.remove(i)
                console.log("tu es mort bb")
                //ennemis.mechant[i].pop();


            }
            else if(ennemis.mechant[i].getPosY()>810){
               joueur.getDmg();
                ennemis.remove(i)

            }

        }

    }
}

var drawOpp = function(ennemis){
    ennemis.mechant.forEach(function(valeur){
        ctx.drawImage(valeur.getZombie(), valeur.sx, valeur.sy, valeur.wx, valeur.wy, valeur.posX, valeur.posY, valeur.tx, valeur.ty);
    })


}

var drawScore = function(){
    ctx.font ="30px Arial";
    ctx.fillText(joueur.points + " Points",400,25);
}

var drawLife = function(i){
    var heart = new Image();
    heart.src = "vie.png";
    for(j=0;j<i;j++){

        ctx.drawImage(heart, 0, 0, 30, 30, 200+j*10, 0 , 30, 30);
    }}

var drawLoose = function(){

    //ctx.Rect(0,0,600,800);
    ctx.font = "50px Arial";
    ctx.fillText("You Lose",150,400);

    }




var sx =0   ;
var val=0;

var audio = new Audio('kachu.wav');
var play = function(){
    audio.play();
}

var verifie = function(){
    ennemis.mechant.forEach(function(valeur){

        if(valeur.posY-valeur.ty/2<yposition && yposition <valeur.posY+valeur.ty/2){

           /*console.log(valeur.posY-32);
           console.log(yposition);
           console.log(valeur.posY+32);*/

            if(valeur.posX<xposition && xposition<valeur.posX+valeur.tx){
                valeur.getDamage(1)
                console.log("je te touche");
            }else{
              /* console.log("raté X");
                console.log(valeur.posX);
                console.log(xposition);
                console.log(valeur.posX+64);*/
            }
        }else {
          /*  console.log("raté Y");
            console.log(valeur.posY-32);
            console.log(yposition);
            console.log(valeur.posY+32);*/

        }

    })
}



var getClickPosition = function (e) {

    xposition = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft -((getWidth()-600)/2);
    yposition = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop-((getHeight()-800)/2);
    verifie(xposition,yposition)

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
function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}


document.onkeydown = function(e){
    if(e.keyCode == 0 || e.keyCode == 32) {
        console.log(pause);
        pause = !pause;

    }
}
document.addEventListener("click",getClickPosition,false);





function update() {
    if(joueur.life>0) {

        if (loop > 150 + spam * variation) {
            spam++;
            console.log((getWidth() - 600) / 4 - 300);
            var xc = (Math.random() * 300) - 1;
            var yc = 50 + (Math.random() * 100) - 1;
            console.log(xc);
            console.log(yc);

            console.log(spam)
            console.log(variation)
           if(spam%5==0 && spam!=0) {
                console.log("salut");
               ennemis.addMechant(new grosZombie(xc, yc))

           }else if(spam%6==0 && spam >17){
               ennemis.addMechant(new gros2Zombie(xc, yc));
           }
           else
               ennemis.addMechant(new zombie(xc, yc));
            if(spam < 6)
               variation =70;
            else if(spam < 12)
               variation =100;
            else if(spam < 20 )
               variation = 90;
            else
               variation = 105;

        }
        loose = false;
        avance(ennemis);
        kill(ennemis, player);
    }
    else{
        loose = true;
    }
}


function draw() {
        drawGame(ennemis,joueur);
}




function mainLoop() {
    update();
    draw();
    requestAnimationFrame(mainLoop);
}

// Start things off
var sx =0   ;
var variation = 75;
var pause = false;
var joueur = new player();
var ennemis = new Ennemis();
var loop = 0;
var loose = false;
var spam=0;

ennemis.addMechant(new zombie(250,100));

var cs = document.getElementById("cv");
ctx = cs.getContext("2d");
requestAnimationFrame(mainLoop);
