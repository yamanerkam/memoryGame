console.log("yes")
const preSec=document.getElementById("pre")
const boxPlay=document.querySelector(".main")
const timee = document.getElementById("time")
const score = document.getElementById("score")
const finale = document.getElementById("post")
const again = document.getElementById("again")
var idd=""
var seconds = 0;
var timeCont=false
function secondss() {
if(timeCont){
  seconds += 1;
    timee.innerText =  seconds
} ;
}
function can(){
  clearInterval(secondss);
}

var scoreCal=0
var timeeer = setInterval(secondss, 1000);

var library = {
  pokemon: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980129/memory/Pokemon/Mewtwo.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980142/memory/Pokemon/Mew.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980154/memory/Pokemon/Articuno.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980164/memory/Pokemon/Zapdos.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980175/memory/Pokemon/Moltres.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980186/memory/Pokemon/Eevee.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980129/memory/Pokemon/Mewtwo.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980142/memory/Pokemon/Mew.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980154/memory/Pokemon/Articuno.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980164/memory/Pokemon/Zapdos.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980175/memory/Pokemon/Moltres.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980186/memory/Pokemon/Eevee.png'
  ],
  starwars: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547980981/memory/starwars/anakin%20skywalker.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981009/memory/starwars/luke%20skywalker.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981022/memory/starwars/Obi%20wann.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981054/memory/starwars/Han%20solo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981074/memory/starwars/chewbacca.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981095/memory/starwars/yoda.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981117/memory/starwars/dark%20sidious.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981141/memory/starwars/dark%20vador.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981165/memory/starwars/padme.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981190/memory/starwars/leia.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980981/memory/starwars/anakin%20skywalker.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981009/memory/starwars/luke%20skywalker.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981022/memory/starwars/Obi%20wann.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981054/memory/starwars/Han%20solo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981074/memory/starwars/chewbacca.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981095/memory/starwars/yoda.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981117/memory/starwars/dark%20sidious.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981141/memory/starwars/dark%20vador.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981165/memory/starwars/padme.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981190/memory/starwars/leia.jpg'
    
  ],
  lotr: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547981408/memory/lotr/gandalf.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981438/memory/lotr/sauron.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981469/memory/lotr/Aragorn.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981501/memory/lotr/legolas.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981535/memory/lotr/Gimli.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981603/memory/lotr/golum.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981645/memory/lotr/sam.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981686/memory/lotr/saroumane.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981738/memory/lotr/bilbo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981802/memory/lotr/frodo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981408/memory/lotr/gandalf.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981438/memory/lotr/sauron.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981469/memory/lotr/Aragorn.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981501/memory/lotr/legolas.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981535/memory/lotr/Gimli.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981603/memory/lotr/golum.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981645/memory/lotr/sam.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981686/memory/lotr/saroumane.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981738/memory/lotr/bilbo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981802/memory/lotr/frodo.jpg'
    
  ],
  disney: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547982044/memory/disney/mickey.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982088/memory/disney/mowgli.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982610/memory/disney/tarzan.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982620/memory/disney/simba.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982628/memory/disney/aladin.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982636/memory/disney/blanche%20neige.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982644/memory/disney/alice.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982653/memory/disney/peter%20pan.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982663/memory/disney/pinocchio.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982738/memory/disney/raiponce.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982044/memory/disney/mickey.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982088/memory/disney/mowgli.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982610/memory/disney/tarzan.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982620/memory/disney/simba.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982628/memory/disney/aladin.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982636/memory/disney/blanche%20neige.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982644/memory/disney/alice.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982653/memory/disney/peter%20pan.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982663/memory/disney/pinocchio.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982738/memory/disney/raiponce.jpg'
    
  ],
  pixar: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547982971/memory/pixar/up.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982987/memory/pixar/buzz.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983000/memory/pixar/woody.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983016/memory/pixar/Remy.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983032/memory/pixar/Mike.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983077/memory/pixar/Nemo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983114/memory/pixar/wall-e.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983169/memory/pixar/Mr-Incredible.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983381/memory/pixar/sully.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983403/memory/pixar/flash%20mcqueen.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982971/memory/pixar/up.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982987/memory/pixar/buzz.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983000/memory/pixar/woody.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983016/memory/pixar/Remy.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983032/memory/pixar/Mike.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983077/memory/pixar/Nemo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983114/memory/pixar/wall-e.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983169/memory/pixar/Mr-Incredible.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983381/memory/pixar/sully.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983403/memory/pixar/flash%20mcqueen.jpg'
  ],
  harrypotter: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547998926/memory/harrypotter/harry.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547998958/memory/harrypotter/ron.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547998992/memory/harrypotter/hermione.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999106/memory/harrypotter/dumbledore.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999032/memory/harrypotter/malfoy.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999143/memory/harrypotter/voldemort.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999401/memory/harrypotter/rogue.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999196/memory/harrypotter/hagrid.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999271/memory/harrypotter/sirius.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999577/memory/harrypotter/neville.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547998926/memory/harrypotter/harry.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547998958/memory/harrypotter/ron.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547998992/memory/harrypotter/hermione.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999106/memory/harrypotter/dumbledore.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999032/memory/harrypotter/malfoy.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999143/memory/harrypotter/voldemort.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999401/memory/harrypotter/rogue.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999196/memory/harrypotter/hagrid.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999271/memory/harrypotter/sirius.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999577/memory/harrypotter/neville.jpg',
    
    
  ]
}


document.addEventListener("click",(e)=>{
if(e.target.className=="themes"){
  preSec.className="hidden"
  idd = e.target.id
  console.log(idd)


  var names = [];
  localStorage.setItem("names", JSON.stringify(names));
  var storedNames = JSON.parse(localStorage.getItem("names"));
  console.log(storedNames)
  for (let index = 0; index < 10; index++) {

    let numPic = Math.floor((Math.random() * 20) );
    let numBox = Math.floor((Math.random() * 20) );

    if(numPic!=names[numPic] && numBox!=names[numBox] && numBox!=numPic){
      console.log("index: "+ index)
      names[numPic]=numPic
      names[numBox]=numBox
      localStorage.setItem("names", JSON.stringify(names));
    
      var img1 = document.createElement("img"); 
      var img2 = document.createElement("img");
      
      img1.src = library[idd][index]; 
      img2.src = library[idd][index];
      boxPlay.children[numPic].appendChild(img1);
      boxPlay.children[numBox].appendChild(img2);
      boxPlay.children[numPic].children[0].className="hidden"
      boxPlay.children[numBox].children[0].className="hidden"
     
      console.log(numPic,numBox)
    }else if (index!=10){
      console.log("index: "+ index)
      index=index-1
    }
    
    

    
  }

  timeCont=true

  
  
}


})



//var cancel = setInterval(incrementSeconds, 1000);

//localStorage.clear();
var control=[];
var number=0;
var controll=0
document.addEventListener("click",(e)=>{
  
  
  if(e.target.className!="themes" && e.target.children[0].className=="hidden"&&controll<2 && e.target.children[0].className!="matched" && e.target.children[0].className!="open"){
    e.target.children[0].className="open"
    controll+=1
  }
  if(controll==2){

    for (let index = 0; index < 20; index++) {
      if(boxPlay.children[index].children[0].className=="open"){
        //console.log(boxPlay.children[index].children[0])
        control[number]=boxPlay.children[index].children[0]
        //console.log(control[number])
        number+=1
      }
    }


    if(control[0].src==control[1].src){
      console.log("yes")
      control[0]=null
      control[1]=null
      number=0
      controll=0
      scoreCal+=1
      score.textContent=scoreCal
      if(scoreCal==10){
       finale.className=""
       clearInterval(timeeer);
      }

      for (let index = 0; index < 20; index++) {
        if(boxPlay.children[index].children[0].className=="open"){
          boxPlay.children[index].children[0].className="matched"
        }
      }
      
    }

    else{

      setTimeout( ()=>{
        console.log("no")

        for (let index = 0; index < 20; index++) {
          if(boxPlay.children[index].children[0].className=="open"){
            boxPlay.children[index].children[0].className="hidden"
          }
        }
        control[0]=null
        control[1]=null
        number=0
        controll=0

        }, 1000)


     
    }
    
  }
})


again.addEventListener("click",()=>{
  location.reload();
})
