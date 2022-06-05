var fondo, Layle,fondoImg,LayleImg;
var pasoIzquierdo,pasoIzquierdoImg,pasoDerecho,pasoDerechoImg,pasoAbajo,pasoAbajoImg,pasoArriba,pasoArribaImg;
var suelo,sueloImg;
var fIImg,fDImg,fAImg,fABImg;
var pasoAbajoGroup ,pasoArribaGroup,pasoDerechoGroup,pasoIzquierdoGroup;
var score = 0;
function preload(){
LayleImg = loadImage("Layle.png");
fIImg = loadImage("flechaIzquierda.png");
fDImg = loadImage("FlechaDerecha.png");
fAImg = loadImage("FlechaArriba.png");
fABImg = loadImage("FlechaAbajo.png");
fondoImg = loadImage("Game background.png");

}

function setup(){
 fondo = createSprite(800,360,1500,720);
 fondo.addImage("fondo",fondoImg);
 fondo.scale = 2;
Layle = createSprite(500,500,50,70);
Layle.addImage("Layle",LayleImg);
Layle.scale = 0.4;

pasoArribaGroup = new Group();
pasoAbajoGroup = new Group();
pasoDerechoGroup = new Group();
pasoIzquierdoGroup = new Group();

}

function draw(){
createCanvas(1500,720);
if(keyDown("LEFT_ARROW")){
var scoreIzquierdo = 0;
score = score+2;
}

if(keyDown("RIGHT_ARROW")){
var scoreDerecho = 0;
    
    
    }

    if(keyDown("UP_ARROW")){
        Layle.y -= 5;
        
        }
        
        if(keyDown("DOWN_ARROW")){
            Layle.y += 5;
            
            
            }

pasoAbajo();
pasoArriba();
pasoDerecho();
PasoIzquierdo();
drawSprites();

textSize(30);
fill("white");
text("score"+score,800,10);


}

function PasoIzquierdo(){
if(frameCount%60===0){

var fI = createSprite(125,20,10,10);
fI.addImage("flechaIzquierda",fIImg);
fI.scale = 0.03;
fI.velocityY = 2;
fI.lifetime = 700;
pasoIzquierdoGroup.add(fI);


}
}

function pasoDerecho(){
    if(frameCount%100===0){
        var fD = createSprite(200,20,10,10);
        fD.addImage("flechaDerecha",fDImg);
        fD.scale = 0.03;
        fD.velocityY = 2;
        fD.lifetime = 700;
        pasoDerechoGroup.add(fD);
        }   
}

function pasoArriba(){
    if(frameCount%50===0){
        var fA = createSprite(280,20,10,10);
        fA.addImage("flechaArriba",fAImg);
        fA.scale = 0.06;
        fA.velocityY = 2;
        fA.lifetime = 700;
        pasoArribaGroup.add(fA);
            
        }   
}

function pasoAbajo(){
    if(frameCount%130===0){
        var fAB = createSprite(50,20,10,10);
        fAB.addImage("flechaAbajo",fABImg);
        fAB.scale = 0.06;
        fAB.velocityY = 2;
        fAB.lifetime = 700;
        pasoAbajoGroup.add(fAB);
            
        }   
}





