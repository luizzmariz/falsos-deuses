//dados do menu//
var load 
var tela= 1

//dados de funcionalidades do sistema de perguntas e respostas
var dfg = 0
var gfd = 0

//posições
var menuy = 440
var menux1 = 40;
var menux2 = 155;
var menux3 = 270;
var textx = 30
var texty1 = 300
var texty2 = 340


//tamanhos
var larguramenu = 190;
var alturamenu = 50;
var larguratextbox = 440;
var alturatextbox1 = 120;
var alturatextbox2 = 80;
  
//criar espaço do jogo//
function setup() {
  createCanvas(500, 500);
  frameRate(10)
}

//carregar arquivos//
function preload() {
  Bf1=loadImage('images/BGfloresta1.jpg')
  Bf2=loadImage('images/BGfloresta2.jpg')
  Bf3=loadImage('images/BGfloresta3.jpg')
  Bf4=loadImage('images/BGfloresta4.jpg')
  Bp1=loadImage('images/BGpraia1.jpg')
  Bp2=loadImage('images/BGpraia2.jpg')
  Pajef=loadImage('images/Pajefloresta1.png')
  Pajec=loadImage('images/Pajeceu1.png')
  Pajer=loadImage('images/Pajerio1.png')
  Credito1=loadImage('images/Fotocredito1.png')
  Credito2=loadImage('images/Fotocredito2.png')
  fontnormal=loadFont('font/Malik-Regular.ttf')
  fontbold=loadFont('font/Malik-Bold.ttf')
}

//funcionamento do jogo//
function draw() {
  
//1a etapa//
  
//fases (perguntas)
  var cont 
  let K
  function fase() {
  if (dfg <= 1) {
    gfd = 0
        BG = Bf1
    Paje = Pajef
  }
  else if (dfg > 1 && dfg <= 3) {
    gfd = 1
        BG = Bf2
    Paje = Pajec
  }
  else if (dfg > 3 && dfg <= 5) {
    gfd = 2
        BG = Bf3
    Paje = Pajer
  }
  else if (dfg > 5) {
    tela = 4
  }
    K = i
      Pergs = [Perg1[i],Perg2[i],Perg3[i]]
      RespA = [RespA1[i],RespA2[i],RespA3[i]]
      RespB = [RespB1[i],RespB2[i],RespB3[i]]
  }
  
//perguntas
  p10='Qual o fruto surgido da morte de um índio ?';
  p20='Do Jenipapo e do Urucum retiramos o necessário para ?';  
  p30='Pindorama se refere a terra das ?';  
  p40='O principal jeito de obtermos alimentos é ?';  
  p50='Usamos o céu para marcação do tempo. Isto é ?';  
  p60='Kuarahy e Nhamandu se referem a ?';  
  p70='Alguns de nós utilizam o que chamam de ?';  
  p80='Colibri e Homem velho são ?';  
  p90='A procura de sua mãe, 3 botos criaram o que chamamos de ?';  
  p100='Antes do consumo, a água em nossa vida deve ser ?'; 
  p110='Transporte, fonte de comida e lazer, tudo isso há em ?';
  p120='Bem como das terras e do céu, das águas tiramos ?';
  let Perg1 = [p10,p20,p30,p40]
  let Perg2 = [p50,p60,p70,p80]
  let Perg3 = [p90,p100,p110,p120]
  
//Respostas A
  a10='Guaraná';
  a20='Alimentação';  
  a30='Serras';  
  a40='Caça';  
  a50='Verdade';  
  a60='O céu';  
  a70='Chatuba';  
  a80='Constelações';  
  a90='Pororoca';  
  a100='Dominada'; 
  a110='Uma serra';
  a120='Vida';
  let RespA1 = [a10,a20,a30,a40]
  let RespA2 = [a50,a60,a70,a80]
  let RespA3 = [a90,a100,a110,a120]

//Respostas B
  b10='Maracujá';
  b20='Pintura';  
  b30='Palmeiras';  
  b40='Cultivo';  
  b50='Mentira';  
  b60='O sol';  
  b70='Gnômon';  
  b80='Aves';  
  b90='També';  
  b100='Reverenciada'; 
  b110='Um rio';
  b120='Morte';
  let RespB1 = [b10,b20,b30,b40]
  let RespB2 = [b50,b60,b70,b80]
  let RespB3 = [b90,b100,b110,b120]

//tela menu
  if(tela == 1) {
    menu()
  }
  
//tela derrota
  else if(tela ==-1) {
    derrota()
  }
  
//tela regras
  else if(tela == 2) {
    regras()
  }
  
//tela créditos
  else if(tela == 3) {
    creditos()
  }
  
//tela jogo inicio
  else if(tela == 4) {
    prepro()
  }
  
//tela jogo perguntas e respostas
  else if(tela == 5) {
    jogo()
}

//2a etapa//
  
//função menu
  function menu() {
        
//configurações visuais
    textFont(fontbold)
    BG = Bp2
    background(BG);
    textFont(fontbold);
    textSize(45)
    fill(30);
      rect(50,50,400,100)
    fill(130,150,20)
      text("FALSOS DEUSES",75,120)
    textSize(25);
   
//botões inativos
    fill(30);
    strokeWeight(3)
      rect(menux1,menuy,larguramenu,alturamenu);
      rect(menux3,menuy,larguramenu,alturamenu);
      rect(menux3+150,menuy-80,25,25)
    
//imagem do botão de créditos 
    image(Credito2,menux3+150,menuy-80)

//comando do botão jogar
    if(mouseX >= menux1 && mouseX <= menux1+larguramenu && mouseY >= menuy && mouseY <= menuy+alturamenu){
      fill(50);
      rect(menux1,menuy,larguramenu,alturamenu);
      if(mouseIsPressed) {
        tela=4 
      }
    }
    fill(130,150,20);
    text("JOGAR",menux1+60,menuy+35)

//comando do botão regras
    if(mouseX >= menux3 && mouseX <= menux3+larguramenu && mouseY >= menuy && mouseY <= menuy+alturamenu){
      fill(50);
        rect(menux3,menuy,larguramenu,alturamenu);
      if(mouseIsPressed) {
        tela=2
      }
    }
    fill(210,90,30);
      text("REGRAS",menux3+50,menuy+35);
   
//comando do botão créditos
    if(mouseX >= menux3+150 && mouseX <= menux3+175 && mouseY >= menuy-80 && mouseY <= menuy-55){
      fill(50);
        rect(menux3+150,menuy-80,25,25);
      
//imagem do botão de créditos 
    image(Credito2,menux3+150,menuy-80)
      
      if(mouseIsPressed) {
        tela=3
      }
    }
  }
  
//função tela de derrota
  function derrota() {
        
//configurações visuais
    BG = Bf4
    background(BG)
    fill(30)
      rect(textx,texty2,larguratextbox,alturatextbox2)
    
//texto derrota
       textSize(25);
    fill(210,90,30);
    textFont(fontbold);
      text("DERROTA",textx+160,texty2+25)
    textFont(fontnormal)
    textSize(15)
    fill(255)
      text("VOCÊ NÃO CONSEGUIU",textx+140,texty2+50)
    
//botão inativo
    fill(30);
      rect(menux2,menuy,larguramenu,alturamenu);
    
//comando do botão voltar
    if(mouseX >= menux2 && mouseX <= menux2+larguramenu && mouseY >= menuy && mouseY <= menuy+alturamenu){
      fill(50);
        rect(menux2,menuy,larguramenu,alturamenu);
      if(mouseIsPressed) {
        tela=1
        dfg = 0
      }
    }
    textSize(25);
    textFont(fontbold);
    fill(130,150,20);
      text("VOLTAR",menux1+160,menuy+35);
  }
  
//função tela de regras
  function regras() {
      
//configurações visuais
    BG = Bf1
    background(BG);
    fill(30);
      rect(textx,120,larguratextbox,260);
     textFont(fontnormal);
    
//texto regras
    fill(255);
      textSize(15);
        text("ESSE JOGO FOI FEITO PARA ALUNOS DO 7° ANO."+"\n"+"\n"+"ESTUDE HISTÓRIA PARA ENTENDER A AVENTURA DE LECRAM E SUA LUTA CONTRA OS FALSOS DEUSES. O FOCO DO JOGO SERÁ TRATAR DAS HABILIDADES EF07HI08 E EF07HI09.",textx+15,230,larguratextbox-20,360-5);
    fill(210,90,30);
    textSize(25);
     textFont(fontbold);
      text("REGRAS DO VIDA",textx+110,180);
    
//botão inativo
    fill(30);
      rect(menux2,menuy,larguramenu,alturamenu);
    
//comando do botão voltar
    if(mouseX >= menux2 && mouseX <= menux2+larguramenu && mouseY >= menuy && mouseY <= menuy+alturamenu){
      fill(50);
        rect(menux2,menuy,larguramenu,alturamenu);
      if(mouseIsPressed) {
        tela=1
      }
    }
    textSize(25);
    textFont(fontbold);
    fill(130,150,20);
      text("VOLTAR",menux1+160,menuy+35);
  }
  
//função tela de créditos
  function creditos() {
        
//configurações visuais
    BG = Bf2
    background(BG);
    image(Credito1,0,0)
    fill(30)
      rect(textx,texty2,larguratextbox,alturatextbox2)

//texto aluno
    textSize(25);
    fill(210,90,30);
    textFont(fontbold);
      text("ALUNO",textx+180,texty2+25)
    textFont(fontnormal)
    textSize(15)
    fill(255)
      text("LUIZ EDUARDO DE MEDEIROS MARIZ",textx+95,texty2+50)

//botão inativo
    fill(30);
      rect(menux2,menuy,larguramenu,alturamenu);
    
//comando do botão voltar
    if(mouseX >= menux2 && mouseX <= menux2+larguramenu && mouseY >= menuy && mouseY <= menuy+alturamenu){
      fill(50);
        rect(menux2,menuy,larguramenu,alturamenu);
      if(mouseIsPressed) {
        tela=1
      }
    }
    textSize(25);
    textFont(fontbold);
    fill(130,150,20);
      text("VOLTAR",menux1+160,menuy+35);
  }
  
//função tela de pré/pós-jogo
  function prepro() {
        BG = Bp1
    background(BG)
    fill(30);
      rect(textx,120,larguratextbox,260);
    
//botão inativo
    fill(30);
      rect(menux2,menuy,larguramenu,alturamenu);
    
//texto esta preparado?
    if (dfg == 0) {
    fill(255)
    textSize(17)
    text("Certo dia, o pequeno índio Lecram caminhava pela praia quando se deparou com o surgimento de grandes figuras no horizonte, jamais vistas, e delas sairam Deuses. Com suas peles brilhantes, pediram para o indiozinho lhes trazer suas maiores riquezas, que eles dariam muito mais em troca."+"\n"+"\n"+"Então, Lecram saiu em sua jornada para pedir aos pajés das 3 tribos as suas maiores ríquezas: As Terras, Os Céus e As Águas",textx+20 ,140,textx+larguratextbox-60,235)
    }
    
//tetxo parabéns
     if (dfg > 5) {
    fill(255)
    textSize(25)
    text("PARABÉNS, VOCÊ CONSEGUIU!",textx+35 ,180)
    textSize(15)
    text('Você conseguiu todas as riquezas de sua terra passando pela aprovação de todos os chefes das tribos. O pequeno Lecram voltou para os deuses e deu o fruto de seu trabalho para eles. Os deuses, deram a ele coisas jamais antes vistas!'+'\n'+'\n'+'Coisas brilhantes, cheirosas, mágicas... Mas o índio começou a perceber que cometeu um erro, os Deuses tomaram tudo e deram nada. Falsos, Falsos Deuses.',textx+20 ,220,textx+larguratextbox-60,235)
    }
    
//comando do botão seguir
    if(mouseX >= menux2 && mouseX <= menux2+larguramenu && mouseY >= menuy && mouseY <= menuy+alturamenu){
      fill(50);
        rect(menux2,menuy,larguramenu,alturamenu);
      if(mouseIsPressed) {
        if(dfg == 0) {
        tela = 5
        
//comando de aleatoridade da pergunta 
        i=parseInt(random(4))
        fase()
        }
        else if(dfg > 5) {
          tela = 1
          dfg = 0
        }
      }
    }

//texto seguir
       textSize(25);
    textFont(fontbold);
    fill(130,150,20);
      text("SEGUIR",menux1+165,menuy+35);
  }
  
//função tela de jogo
  function jogo() {
    //configurações visuais
    background(BG);
    image(Paje,0,0)
    fill(30)
      rect(textx,texty2,larguratextbox,alturatextbox2)
          
//texto da pergunta 
    textSize(15)
    fill(255)
      text(Pergs[gfd],textx+15,texty2+10,190,150)
    
//botões inativos
    fill(30);
      rect(menux1,menuy,larguramenu,alturamenu);
      rect(menux3,menuy,larguramenu,alturamenu);
 
//comando do botão a    
    if(mouseX >= menux1 && mouseX <= menux1+larguramenu && mouseY >= menuy && mouseY <= menuy+alturamenu){
      fill(50);
      rect(menux1,menuy,larguramenu,alturamenu);

//comando da aleatorização das respostas (acerto/erro)
      if(i==0||i==3) {
      if(mouseIsPressed) {
        dfg++
        i=parseInt(random(4))
          if (K==i){
            i=parseInt(random(4))
          }
        fase()
        console.log(dfg)
      }
      }
      else if(i==1||i==2) {
      if(mouseIsPressed) {
        tela = -1
      }
      }
    }
    
//encaixe da resposta 1
    fill(130,150,20);
    textSize(22);
    textFont(fontbold)
    text(RespA[gfd],menux1+10,menuy+35)
    
//comando do botão b
    if(mouseX >= menux3 && mouseX <= menux3+larguramenu && mouseY >= menuy && mouseY <= menuy+alturamenu){
      fill(50);
        rect(menux3,menuy,larguramenu,alturamenu);
      
//comando da aleatorização das respostas (acerto/erro)
      if(i==0||i==3) {
      if(mouseIsPressed) {
        tela = -1
      }
      }
      else if(i==1||i==2) {
      if(mouseIsPressed) {
        dfg++
        i=parseInt(random(4))
          if (K==i){
            i=parseInt(random(4))
          }
        fase()
        console.log(dfg)
      }
      }
    }
    
//encaixe da resposta 2
    fill(130,150,20);
    textSize(22);
    textFont(fontbold)
      text(RespB[gfd],menux3+10,menuy+35);
   
  }
}