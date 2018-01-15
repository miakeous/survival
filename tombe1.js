function tombe(positionX,positionY){
    /** Position du mob dans le canvas **/
    this.posX =positionX;
    this.posY=positionY;
    this.mechant = mechant;
    /**placement dans le sprite png**/
    this.sx = 96;
    this.sy=50;
    /**taille sur le sprite png**/
    this.wx = 32;
    this.wy= 48;
    /**taille sur le canvas**/
    this.tx = 64;
    this.ty=64;
    this.direction = {"petite" : 96  , "moyenne" : 128 , "grosse" :160, "boss": 192 };


    this.subit = false;

    /**on définit l'origine des mobs**/
    this.tombe = new Image();
    this.tombe.src= "tombe.png";


    /**ajout des méthodes utiles**/
    this.getZombie = function(){return this.tombe;}
    this.setTombe = function(k){switch (k){
        case "zombie" : this.sx =  this.direction.petite;break;
        case "groszombie" : this.sx = this.direction.moyenne;break;
        case "gros2zombie" : this.sx = this.direction.grosse;break;
        case "boss" : this.sx = this.direction.boss;break;

    }

    }
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