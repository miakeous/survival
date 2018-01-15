/** Projet Jabascript d'un jeu de type survival créer par Pierre Tardiveau et Emile Chomton **/





/** Création de la class Zombie de niveau 2**/
function zombie(positionX,positionY){
    this.nom = "zombie";
    /** Position du mob dans le canvas **/
    this.posX =positionX;
    this.posY=positionY;
    /**Quantité de points rapportée*/
    this.value=1;
    /**placement dans le sprite png**/
    this.sx = 0;
    this.sy=0;
    /**taille sur le sprite png**/
    this.wx = 32;
    this.wy= 48;
    /**taille sur le canvas**/
    this.tx = 64;
    this.ty=64;
    this.direction = {"gauche" : 0  , "milieu" : 32 , "droite" :64 };
    this.poslifeX = 0;
    this.poslifeY = 50;
    this.vie = {"full" : 50, "mid" :62 , "fin" :84 };
    /**Points de vie du mob**/
    this.life = 1;
    this.subit = false;
    this.lifes = 1;
    /**on définit l'origine des mobs**/
    this.pikachu = new Image();
    this.pikachu.src= "zombie.png";
    /** on définit la position **/
    this.pos = "gauche";
    /**ajout des méthodes utiles**/
    this.setDirection = function(i){this.sx = i;}
    this.setPos=function (){this.posY+=2;}
    this.getValue = function(){return this.value;}
    this.getnom = function(){return this.nom};
    this.getDamage = function(i){this.life -= i;}
    this.getLife = function(){return this.life;}
    this.getZombie = function(){return this.pikachu;}
    this.getPosY = function(){return this.posY;}
    this.getDirection = function(k){switch (k){
        case 0 : return this.direction.gauche;
        case 1 : return this.direction.gauche;
        case 2 : return this.direction.gauche;
        case 3 : return this.direction.milieu;
        case 4 : return this.direction.milieu;
        case 5 : return this.direction.milieu;
        case 6 : return this.direction.droite;
        case 7 : return this.direction.droite;
        case 8 : return this.direction.droite;

    }}
}

/** Création de la class Zombie de niveau 2**/
function grosZombie(positionX,positionY){
    this.nom = "groszombie";
    this.posX =positionX;
    this.value = 3;
    this.posY=positionY;
    this.life = 3;
    this.lifes = 3;
    this.sx = 192;
    this.sy=0;
    this.wx = 32;
    this.wy= 48;
    this.tx = 92;
    this.ty=92;
    this.subit = false;
    this.direction = {"gauche" : 192  , "milieu" : 224 , "droite" :256 };
    this.poslifeX = 0;
    this.poslifeY = 50;
    this.vie = {"full" : 48, "mid" :62 , "fin" :84 };
    /**on définit l'origine des mobs**/
    this.zomb = new Image();
    this.zomb.src= "zombie.png";
    /** on définit la position **/
    this.pos = "gauche";
    /**ajout des méthodes utiles**/
    this.setDirection = function(i){this.sx = i;}
    this.setPos=function (){this.posY+=1;}
    this.getDamage = function(i){this.life -= i;}
    this.getValue = function(){return this.value;}
    this.getLife = function(){return this.life;}
    this.getZombie = function(){return this.zomb;}
    this.getPosY = function(){return this.posY;}
    this.getnom = function(){return this.nom};
    this.getDirection = function(k){switch (k){
        case 0 : return this.direction.gauche;
        case 1 : return this.direction.gauche;
        case 2 : return this.direction.gauche;
        case 3 : return this.direction.milieu;
        case 4 : return this.direction.milieu;
        case 5 : return this.direction.milieu;
        case 6 : return this.direction.droite;
        case 7 : return this.direction.droite;
        case 8 : return this.direction.droite;

    }}
}
/** Création de la class Zombie de niveau 3**/
function gros2Zombie(positionX,positionY){
    this.nom = "gros2zombie";
    this.posX =positionX;
    this.value = 5;
    this.posY=positionY;
    this.life = 5;
    this.lifes = 5;
    this.sx = 0;
    this.sy=192;
    this.wx = 32;
    this.wy= 48;
    this.tx = 128;
    this.ty=128;
    this.subit = false;
    this.direction = {"gauche" : 0  , "milieu" : 32 , "droite" :64 };
    this.poslifeX = 0;
    this.poslifeY = 50;
    this.vie = {"full" : 48, "mid" :62 , "fin" :84 };
    /**on définit l'origine des mobs**/
    this.zomb = new Image();
    this.zomb.src= "zombie.png";
    /** on définit la position **/
    this.pos = "gauche";
    /**ajout des méthodes utiles**/
    this.setDirection = function(i){this.sx = i;}
    this.setPos=function (){this.posY+=1.25;}
    this.getDamage = function(i){this.life -= i;}
    this.getLife = function(){return this.life;}
    this.getZombie = function(){return this.zomb;}
    this.getValue = function(){return this.value;}
    this.getPosY = function(){return this.posY;}
    this.getnom = function(){return this.nom};
    this.getDirection = function(k){switch (k){
        case 0 : return this.direction.gauche;
        case 1 : return this.direction.gauche;
        case 2 : return this.direction.gauche;
        case 3 : return this.direction.milieu;
        case 4 : return this.direction.milieu;
        case 5 : return this.direction.milieu;
        case 6 : return this.direction.droite;
        case 7 : return this.direction.droite;
        case 8 : return this.direction.droite;

    }}
}


/** Création de la class Zombie de niveau 3**/
function boss(positionX,positionY){
    this.nom = "boss";
    this.posX =positionX;
    this.value = 30;
    this.posY=positionY;
    this.life = 25;
    this.lifes = 25;
    this.sx = 192;
    this.sy=192;
    this.wx = 32;
    this.wy= 48;
    this.tx = 128;
    this.ty=128;
    this.subit = false;
    this.direction = {"gauche" : 192  , "milieu" : 224 , "droite" :256 };
    this.poslifeX = 0;
    this.poslifeY = 50;
    this.vie = {"full" : 48, "mid" :62 , "fin" :84 };
    /**on définit l'origine des mobs**/
    this.zomb = new Image();
    this.zomb.src= "zombie.png";
    /** on définit la position **/
    this.pos = "gauche";
    this.dead = false;
    /**ajout des méthodes utiles**/
    this.setDirection = function(i){this.sx = i;}
    this.setPos=function (){this.posY+=0.5;}
    this.getnom = function(){return this.nom};
    this.getDamage = function(i){this.life -= i;}
    this.getLife = function(){return this.life;}
    this.getZombie = function(){return this.zomb;}
    this.getValue = function(){return this.value;}
    this.getPosY = function(){return this.posY;}
    this.getDirection = function(k){switch (k){
        case 0 : return this.direction.gauche;
        case 1 : return this.direction.gauche;
        case 2 : return this.direction.gauche;
        case 3 : return this.direction.milieu;
        case 4 : return this.direction.milieu;
        case 5 : return this.direction.milieu;
        case 6 : return this.direction.droite;
        case 7 : return this.direction.droite;
        case 8 : return this.direction.droite;

    }}
}



/**Class qui définit le plateau des ennemis sur le canvas, c'est un Array qui contient les mechants**/
function Ennemis(){
    /**Quantité de mob présent sur la map**/
    this.total = 0;
    /**Array des mob present sur la map**/
    this.mechant = new Array();
    this.boss = new Array();
    /**Ajout d'un méchant sur la map**/
    this.addMechant = function(mechant){
        this.mechant.push(mechant);
        this.total +=1;
    }
    this.addBoss= function(mechant){
        this.boss.push(mechant);

    }
    this.bossDead = false;
    /**suppression du mob i**/
    this.remove = function(i){
        //console.log(i)
        delete this.mechant[i];
        this.total-=1;
        if(this.mechant.length==0){
            this.mechant =new Array();
        }
    }
    this.setDead = function(){
        this.bossDead = true;
        };
    this.isDead = function(){
       return this.bossDead
    }
    this.getBoss = function(){
        this.mechant.forEach(function(valeur){
            if(valeur.getnom() == "boss"){
                return valeur.getLife();

            }
            return 10;

            })
    }

}
/**Class qui définit le joueur**/
function player(){
    /**Quantité totale de points**/
    this.points =0;
    /**Vie du joueur**/
    this.life = 10;
    /**Gameloop compteur pour niveau de difficulté**/
    this.loop = 0;
    /**Ajout de points **/
    this.addPoint = function(i){
        this.points += i;
        //console.log(this.points)
    }
    /**Perte de vie**/
    this.getDmg = function() {
        this.life-=1;
    }
}

function tombe(positionX,positionY){
    /** Position du mob dans le canvas **/
    this.posX =positionX;
    this.posY=positionY;

    /**placement dans le sprite png**/
    this.sx = 96;
    this.sy=50;
    /**taille sur le sprite png**/
    this.wx = 32;
    this.wy= 48;
    /**taille sur le canvas**/
    this.tx = 64;
    this.ty=64;
    /**on définit l'origine des mobs**/
    this.tombe = new Image();
    this.tombe.src= "tombe.png";
    /**ajout des méthodes utiles**/
    this.getZombie = function(){return this.tombe;}

}
function tombe1(positionX,positionY){
    /** Position du mob dans le canvas **/
    this.posX =positionX;
    this.posY=positionY;

    /**placement dans le sprite png**/
    this.sx = 128;
    this.sy=50;
    /**taille sur le sprite png**/
    this.wx = 32;
    this.wy= 48;
    /**taille sur le canvas**/
    this.tx = 64;
    this.ty=64;
    /**on définit l'origine des mobs**/
    this.tombe = new Image();
    this.tombe.src= "tombe.png";
    /**ajout des méthodes utiles**/
    this.getZombie = function(){return this.tombe;}

}
function tombe2(positionX,positionY){
    /** Position du mob dans le canvas **/
    this.posX =positionX;
    this.posY=positionY;

    /**placement dans le sprite png**/
    this.sx = 160;
    this.sy=50;
    /**taille sur le sprite png**/
    this.wx = 38;
    this.wy= 48;
    /**taille sur le canvas**/
    this.tx = 64;
    this.ty=64;
    /**on définit l'origine des mobs**/
    this.tombe = new Image();
    this.tombe.src= "tombe.png";
    /**ajout des méthodes utiles**/
    this.getZombie = function(){return this.tombe;}

}
function tombe3(positionX,positionY){
    /** Position du mob dans le canvas **/
    this.posX =positionX;
    this.posY=positionY;

    /**placement dans le sprite png**/
    this.sx = 209;
    this.sy=50;
    /**taille sur le sprite png**/
    this.wx = 38;
    this.wy= 48;
    /**taille sur le canvas**/
    this.tx = 64;
    this.ty=64;
    /**on définit l'origine des mobs**/
    this.tombe = new Image();
    this.tombe.src= "tombe.png";
    /**ajout des méthodes utiles**/
    this.getZombie = function(){return this.tombe;}

}



function fullTombe(){
    /**Quantité de mob présent sur la map**/
    this.total = 0;
    /**Array des mob present sur la map**/
    this.mechant = new Array();
    /**Ajout d'un méchant sur la map**/
    this.addMechant = function(mechant){
        this.mechant.push(mechant);
        this.total +=1;
    }
    /**suppression du mob i**/
    this.remove = function(i){
        //console.log(i)
        delete this.mechant[i];
        this.total-=1;
        if(this.mechant.length==0){
            this.mechant =new Array();
        }
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











/**Fonction qui affiche le jardin**/
var drawGarden = function () {

    for(i=0 ; i<12;i++){
        for(j =0;j<16;j++){
            ctx.drawImage(grass,68,130,60,60,i*50,j*50,51,51);
        }
    }
};

/**Fonction général d'affichage d'un element sur le canvas a represente une image i,j la position de celle ci**/
var drawIma = function (a,i , j ) {
    ctx.drawImage(a, i,j);
};


/**fonction qui affiche le jeux (elle est rapelée a chaque loop du jeux)**/
var drawGame = function (ennemis,player) {

    /**on verifie si on a perdu ou pas**/
if(loose==false && win == false) {
    /**on vérifie si le joueur a demandé une pause**/
    if (pause == true) {
        /**on affiche l'ecran de pause et on stop l'execution du jeux**/

        ctx.drawImage(pauses, 0, 0);
    }

    else {
        /**on lance l'update visuelle sur chaque composant*/
        loop++;
        ctx.clearRect(0, 0, 500, 500);
        drawGarden();
        drawLife(player.life);
        drawScore();
        drawOpp(ennemis);
        drawTombe(tombes)
        drawTime();
        //console.log(player.points)
    }
}
else if(loose ==true){
    /**on affiche You lose sur l'écran et on stop le jeux**/
    drawLoose();
}else if(win ==true){
    drawWin();
}



};
/**Fonction qui est appelé a chaque update qui permet de faire bouger les ennemis**/
var avance = function(ennemis){
    ennemis.mechant.forEach(function(valeur){
        valeur.setPos();
        valeur.setDirection(valeur.getDirection(loop%9));
       /* if(loop%3==0){
            if(valeur.pos == "gauche"){
                valeur.setDirection(valeur.direction.droite);
                console.log("On est a gauche");
                valeur.pos = "droite";
            }
            else{
                valeur.setDirection(valeur.direction.gauche);
                console.log("On est a droite");
                valeur.pos = "gauche";
            }
        }*/

    //console.log(valeur.sx);
        });
        ennemis.boss.forEach(function(valeur){
            valeur.setPos();
            valeur.setDirection(valeur.getDirection(loop%9));
        });

}
/**on fonction qui regarde se des ennemis doivent disparaitre de la map**/
var kill= function(ennemis,tombes){

    for(i=0;i<ennemis.mechant.length;i++){
        if(ennemis.mechant[i]==undefined){

        }else{
            /**On regarde si c'est le joueur qui l'a tué**/
            if(ennemis.mechant[i].getLife()<=0  ){
                if(pop == false){
                    if(ennemis.getBoss() <= 0){
                        console.log("LE BOSS EST MORT")
                        ennemis.setDead();
                    }

                }
                joueur.addPoint(ennemis.mechant[i].getValue());
                ennemis.remove(i)
                tombes.remove(i);


                //console.log("tu es mort bb")
                //ennemis.mechant[i].pop();


            }
            /**Ou si le mob est arrivé en bas **/
            else if(ennemis.mechant[i].getPosY()>810){
               joueur.getDmg();
                ennemis.remove(i);
                tombes.remove(i);

            }

        }

    }
}
/**Fonction qui affiche les mobs sur la map**/
var drawOpp = function(ennemis){
    ennemis.mechant.forEach(function(valeur){
        ctx.drawImage(valeur.getZombie(), valeur.sx, valeur.sy, valeur.wx, valeur.wy, valeur.posX, valeur.posY, valeur.tx, valeur.ty);
        ctx.drawImage(valeur.getZombie(), valeur.poslifeX, valeur.poslifeY, 35, 13, valeur.posX,(valeur.posY -valeur.wy/2), valeur.tx, 15);
        if(valeur.subit == true){
            ctx.drawImage(damage,40,50,30,55,xposition-30,yposition-10,64,64);
            valeur.subit = false;
        }
    })



}

var drawTombe = function(tombes){
    tombes.mechant.forEach(function(valeur){
        ctx.drawImage(valeur.getZombie(), valeur.sx, valeur.sy, valeur.wx, valeur.wy, valeur.posX, valeur.posY, valeur.tx, valeur.ty);

    })


}
/**Fonction qui affiche le score du joueur**/
var drawScore = function(){
    ctx.font ="30px Arial";
    ctx.fillText(joueur.points + " Points",400,25);
}
/**Fonction qui affiche la vie du joueur**/
var drawLife = function(i){
    var heart = new Image();
    heart.src = "vie.png";
    for(j=0;j<i;j++){

        ctx.drawImage(heart, 0, 0, 30, 30, 200+j*10, 0 , 30, 30);
    }}
/**Affiche 'You Lose' à l'écran**/
var drawLoose = function(){
    ctx.font = "50px Arial";
    ctx.fillText("You Lose",150,400);

}
var drawWin = function(){
    ctx.font = "50px Arial";
    ctx.fillText("You Win",150,400);

}

    /**Affichage du timer **/
    var drawTime = function(){
        ctx.font ="20px Arial";
        //console.log(dateDiff(dat, new Date()));
        ctx.fillText((timer.min) +" : "+ (timer.sec) ,50,25);
    }



/**Fonction qui vérifie si on touche un ennemis quand on click sur l'ecran**/
var verifie = function(){
    ennemis.mechant.forEach(function(valeur){
        var vie = 0;
        /**Pour chacun des mobs on vérifie si  la position du click est contenu dans  position y +/- la moitié de sa taille on enleve 5 pixel pour que ce soit plus dur  **/
        if(valeur.posY-valeur.ty/2+5<yposition && yposition <valeur.posY+valeur.ty/2-5){
            /**Pour chacun des mobs on vérifie si la position du click est contenu dans sa position x + sa taille  **/
            if(valeur.posX+5<xposition && xposition<valeur.posX+valeur.tx-5){
                valeur.getDamage(1);
                if(valeur.life > parseInt(valeur.lifes/2) && valeur.life != valeur.lifes)
                    valeur.poslifeY = valeur.vie.mid;
                else if(valeur.life <= parseInt(valeur.lifes/2))
                    valeur.poslifeY = valeur.vie.fin;
                valeur.subit = true;
                //console.log("je te touche");
            }
        }
    })
    ennemis.boss.forEach(function(valeur){
        var vie = 0;
        /**Pour chacun des mobs on vérifie si  la position du click est contenu dans  position y +/- la moitié de sa taille on enleve 5 pixel pour que ce soit plus dur  **/
        if(valeur.posY-valeur.ty/2+5<yposition && yposition <valeur.posY+valeur.ty/2-5){
            /**Pour chacun des mobs on vérifie si la position du click est contenu dans sa position x + sa taille  **/
            if(valeur.posX+5<xposition && xposition<valeur.posX+valeur.tx-5){
                valeur.getDamage(1);
                if(valeur.life > parseInt(valeur.lifes/2) && valeur.life != valeur.lifes)
                    valeur.poslifeY = valeur.vie.mid;
                else if(valeur.life <= parseInt(valeur.lifes/2))
                    valeur.poslifeY = valeur.vie.fin;
                valeur.subit = true;
                //console.log("je te touche");
            }
        }
    })
}


/** On recupere la position du click sur le canvas et on adapte a en fonction de la taille de l'ecran pour toujours avoir la position dans le canvas**/
var getClickPosition = function (e) {

    xposition = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft -((getWidth()-600)/2);
    yposition = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop-((getHeight()-800)/2)+22.5;
    play()
    //console.log("X : " + xposition);
    //console.log("Y : " + yposition)
    verifie(xposition,yposition)

}

/** on recupere la largeur de l'ecran (browser ouvert **/
function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}
/** on recupere la hauteur de l'ecran (browser ouvert **/
function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

function position() {
    var x = new Number();
    var y = new Number();

    x = event.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft -((getWidth()-600)/2);
    y = event.clientY + document.body.scrollTop
        + document.documentElement.scrollTop-((getHeight()-800)/2);

    ctx.drawImage(cible, 0, 0,431,406, x, y, 32, 32);
    //console.log(x);
    //console.log(y);
    }







/** On écoute si le joueur demande un pause en Cliquant sur la barre espace **/
document.onkeydown = function(e){
    if(e.keyCode == 0 || e.keyCode == 32) {
        console.log(pause);
        pause = !pause;

    }
}
/** On écoute si le joueur click dans le canvas **/
//document.addEventListener("click",getClickPosition,false);
document.getElementById("cv").addEventListener("click",getClickPosition,false);






/**Fonction qui update toute nos variables a chaque étape du gameLoop **/
function update(ts) {
    timer.sec = parseInt(ts/1000)%60;
    timer.min = parseInt(((ts/1000)/60)%60);
    timer.msec = parseInt(ts%1000);
    //timer = dateDiff(dat,new Date());
   // console.log(timer.min);
    //console.log(timer.sec);
    //console.log(timer.msec);
    if(joueur.life>0 && (ts < 200000)) {
        /** on gere la vitesse de pop ainsi que le type du mob en fonction des stage  **/
       // if (loop > 100 + spam * variation) {
            if(pause ==false){


            //console.log((getWidth() - 600) / 4 - 300);
            var xc = (Math.random() * 550) - 1;
            var yc = 50 + (Math.random() * 100) - 1;



            // On gere l'apparition des zombies en fonctions du timer
            if( ts <30000 && timer.msec < 20){
                if(timer.sec%2 == 0){
                    ennemis.addMechant(new zombie(xc, yc));
                    tombes.addMechant(new tombe(xc+10,yc-60));

                }
                    //ennemis.addMechant(new grosZombie(xc, yc));

            }
            else if(ts >30000 && ts < 100000 && timer.msec< 20 ){
                if(timer.sec%4 == 0){
                    ennemis.addMechant(new grosZombie(xc, yc));
                    tombes.addMechant(new tombe1(xc+10,yc-60));
                }


                else if(timer.sec%2 == 0){
                    ennemis.addMechant(new zombie(xc, yc));
                    tombes.addMechant(new tombe(xc+10,yc-60))
                    //console.log("ici");
                }
            }
            else if(ts > 100000 && ts < 140000 && timer.msec< 20){
                if(timer.sec%6 == 0){
                    ennemis.addMechant(new gros2Zombie(xc, yc));
                    tombes.addMechant(new tombe2(xc+10,yc-60));
                }

                else if(timer.sec%4 == 0){
                    ennemis.addMechant(new grosZombie(xc, yc));
                    tombes.addMechant(new tombe1(xc+10,yc-60));
                }

                else if(timer.sec%2 == 0){
                    ennemis.addMechant(new zombie(xc, yc));
                    tombes.addMechant(new tombe(xc+10,yc-60));
                }
                if(ts>135000){
                    bosstime.play();
                    bosstime.volume = 0.3;
                    ambiance.volume= 0.6;
                }
                if(ts>136000){

                    bosstime.volume = 0.4;
                    ambiance.volume= 0.5;
                }
                if(ts>137000){

                    bosstime.volume = 0.5;
                    ambiance.volume= 0.3;
                }
                if(ts>138000){

                    bosstime.volume = 0.6;
                    ambiance.volume = 0.2;
                }
                if(ts>139000){

                    bosstime.volume = 0.8;
                    ambiance.pause();
                }

            }


            else if(timer.min >= 2 && timer.sec >= 20){

                    if(pop == true){
                        bosstime.volume = 1;
                        ennemis.addMechant(new boss(xc, yc));
                        ennemis.addBoss(new boss(xc, yc));
                        console.log("laaaaaaaaaaa");
                        tombes.addMechant(new tombe3(xc+10,yc-60));
                        console.log("laaaaaaaaaaa");

                        console.log("laaaaaaaaaaa");

                        console.log("laaaaaaaaaaa");

                        pop = false;
                    }
                    if(ennemis.isDead()==true){
                        console.log("on est la les enfants");
                        win = true;
                    }

            }
            else if(timer.min > 3 && timer.sec>=20){
                loose=true;

            }
        loose = false;
        avance(ennemis);
        kill(ennemis, tombes);
        //console.log((new Date().getMinutes() - dat.getMinutes()) +" : "+ (new Date().getSeconds()- dat.getSeconds()));
    }
    }
    else{
        loose = true;
        ambiance.pause();
        bosstime.pause();
    }
}

/** Fonction qui draw a chaque étape du gameloop la scene le terrain ainsi que les mobs **/
function draw() {
        drawGame(ennemis,joueur);
}



/** la gameLoop du jeux **/
function mainLoop(ts) {
    if(pause == false){
        update(ts);
        draw(ts);

    }
    else{
        ctx.drawImage(pauses, 0, 0);
    }
    requestAnimationFrame(mainLoop);
}
/**Fonction qui joue un son quand on tir sur le canvas**/
var audio = new Audio('laser.mp3');
var play = function(){
    audio.play();
}

var ambiance = new Audio("zombie.mp3");
ambiance.volume = 0.7;
var bosstime = new Audio("boss.mp3");
/** On initialise et on lance le jeux **/
var sx =0   ;
var variation = 75;
var pause = false;
var joueur = new player();
var ennemis = new Ennemis();
var tombes = new fullTombe();
var loop = 0;
var loose = false;
var spam=0;
var dat = new Date();
var win = false;
var grass = new Image();
grass.src = "fond.png";
var cible = new Image();
cible.src = "cible.png";
var damage = new Image();
damage.src = "zombie.png";
var timer = {"min" : 0 , "sec" : 0, "msec" : 0};
var timer2 = null;
var pop = true;
ennemis.addMechant(new zombie(250,100));
tombes.addMechant(new tombe(250, 90));
var pauses = new Image();
pauses.src = "pause.png"

var cs = document.getElementById("cv");

ctx = cs.getContext("2d");

timer2 =timer2 = {"min" : 0 , "sec" : 0, "msec" : 0};
ambiance.play();
requestAnimationFrame(mainLoop);
