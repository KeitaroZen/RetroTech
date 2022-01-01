let btn1, btn2, btn3, readMoreDiv;


const showHide1 = () => {
    readMoreDiv = document.querySelector("#more1");
    if (readMoreDiv.style.display === "block") {
            readMoreDiv.style.display = "none";
            btn1.textContent = "Read More...";
	
    } else {
      readMoreDiv.style.display = "block";
      btn1.textContent = "Read Less...";
    }
  }
  
 
  
btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', showHide1, false);




const showHide2 = () => {
    readMoreDiv = document.querySelector("#more2");
    if (readMoreDiv.style.display === "block") {
            readMoreDiv.style.display = "none";
            btn2.textContent = "Read More...";
    } else {
      readMoreDiv.style.display = "block";
      btn2.textContent = "Read Less...";
    }
  }
  
btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', showHide2, false);

btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function Gamecubeb () {
  const GamecubeStartUp = {
    Controller: 'Z Button',
    Players: 'four',
    Audio: [
      {sound: "Monkey"},
      {sound: "Laughter"},
      {sound: "Ninja"},
      {sound: "Drumming"},
      {sound: "Chanted"},
    ]
  }
  
  let gamecube_partA = Handlebars.compile($('#History_Gamecube').html())

  let gamecube_partB = gamecube_partA(GamecubeStartUp)
  
  $(document.body).html(gamecube_partB)

  GGStartUp();

})


  
btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function Xboxb () {
  
  

	  const XboxFacts = {
    Sales: '24 Million Units',
    Lifespan: 'eight years',
    ExclusiveGames: [
      {gameTitle: "Conker Live & Reloaded"},
      {gameTitle: "Fable"},
      {gameTitle: "Project Gotham Racing"}
    ]
  }
  
  

  let xbox_partA = Handlebars.compile($('#History_Xbox').html())

  let xbox_partB = xbox_partA(XboxFacts)
  
  $(document.body).html(xbox_partB)

  conker();
  fable();
  projectgotem() 
  
}
)

function conker() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "images/ConkerLiveReloadedBox.jpg");
  x.setAttribute("width", "300");
  x.setAttribute("height", "500");
  x.setAttribute("alt", "Conker Box Art");
  document.body.appendChild(x);
}

function fable() {
  var y = document.createElement("IMG");
  y.setAttribute("src", "images/fable.jpg");
  y.setAttribute("width", "300");
  y.setAttribute("height", "500");
  y.setAttribute("alt", "Fable Box Art");
  document.body.appendChild(y);
}

function projectgotem() {
  var z = document.createElement("IMG");
  z.setAttribute("src", "images/projectgotemracing.jpg");
  z.setAttribute("width", "300");
  z.setAttribute("height", "500");
  z.setAttribute("alt", "Project Gotem Racing Box Art");
  document.body.appendChild(z);
}

function GGStartUp() {
  var GG = document.createElement("IMG");
  GG.setAttribute("src", "images/gamecube-startup.gif");
  GG.setAttribute("width", "800");
  GG.setAttribute("height", "500");
  GG.setAttribute("alt", "Gamecube Startup Screen");
  document.body.appendChild(GG);
}





const DynamicButton1 = document.querySelector('.top10PS1')
DynamicButton1.addEventListener('click', event => {
  const li1 = document.createElement('li')
  li1.textContent = 'Final Fantasy VII'

  const li2 = document.createElement('li')
  li2.textContent = 'Tomb Raider'

  const li3 = document.createElement('li')
  li3.textContent = 'Persona'

  const li4 = document.createElement('li')
  li4.textContent = 'Harry Potter'

  const li5 = document.createElement('li')
  li5.textContent = 'Digimon Rumble Arena'
  
  const li6 = document.createElement('li')
  li6.textContent = 'WWF Smackdown!'
  
  const li7 = document.createElement('li')
  li7.textContent = 'Need For Speed'

  const list = document.querySelector('ol')
  list.appendChild(li1)
  list.appendChild(li2)
  list.appendChild(li3)
  list.appendChild(li4)
  list.appendChild(li5)
  list.appendChild(li6)
  list.appendChild(li7)
  
})

$(document).ready(function() {
    $('.gallery img').css('opacity', 0.6)
   
    $('.gallery img').on({
      mouseenter:function() {
        $(this).stop().fadeTo(1000, 1)
      },
      mouseleave:function() {
        $(this).stop().fadeTo(1000, 0.6)
      }
    })
    
  
   })
   
$(document).ready(function(){
  $("#beforeafter").twentytwenty({
    default_offset_pct: 0.7
})
})



  
