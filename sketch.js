let param1, param2
let scaleX = 400
let scaleY = 400

function setup() {
  createCanvas(1000, 1000).parent("canvas").mouseClicked(randomOne);
  noFill();
  background(0);
  frameRate(60)

  params = new URLSearchParams(window.location.search)

  if(params.get("xp") && params.get("yp")) {
    param1 = parseInt(params.get("yp"));
    param2 = parseInt(params.get("xp"));
    updateLink()
  } else {
    randomOne()
  }
}

function randomOne() {
  background(0);
  param1 = floor(random(1, 13));
  param2 = floor(random(1, 13));
  
  updateLink()
}

function updateLink () {
  
  const link = `https://weightan.github.io/EulerCurveJS?xp=${param2}&yp=${param1}`
  
  select("#permalink").html(link).attribute("href", link)
}


function draw() {
  
  translate(width / 2, height / 2)
  
  beginShape()
  
  stroke(255, 15);
  strokeWeight(1);
  
  
    
    for (let j = -3; j < 3; j += 0.01) {

      let x = trapezoid_rule (bigX, 0, j, 200);
      let y = trapezoid_rule (bigY, 0, j, 200);
        
      curveVertex(scaleX*x, scaleY*y);
      //curveVertex(300*x, 300*y);
      
    } 
  

  endShape()
}


function bigY(ts){
  if (param1 == 1){
    
    return sin(ts*ts - radians(frameCount/5))*cos(ts- radians(frameCount/5));
    
  } else if (param1 == 2){
    
    return sin(ts*ts)*cos(ts- radians(frameCount/5));
    
  } else if (param1 == 3){
    
    return sin(ts*ts - radians(frameCount/5))*cos(ts);
    
  } else if (param1 == 4){
    
    return cos(ts*ts - radians(frameCount/5))*sin(ts- radians(frameCount/5));
    
  } else if (param1 == 5){
    
    return cos(ts*ts)*sin(ts- radians(frameCount/5));
    
  } else if (param1 == 6){
    
    return cos(ts*ts - radians(frameCount/5))*sin(ts);
    
  } else if (param1 == 7){
    
    return sin(ts*ts - radians(frameCount/5))*sin(ts- radians(frameCount/5));
    
  } else if (param1 == 8){
    
    return sin(ts*ts)*sin(ts- radians(frameCount/5));
    
  } else if (param1 == 9){
    
    return sin(ts*ts - radians(frameCount/5))*sin(ts);
    
  }else if (param1 == 10){
    
    return cos(ts*ts - radians(frameCount/5))*cos(ts- radians(frameCount/5));
    
  } else if (param1 == 11){
    
    return cos(ts*ts )*cos(ts- radians(frameCount/5));
    
  } else if (param1 == 12){
    
    return cos(ts*ts - radians(frameCount/5))*cos(ts);
    
  } 
  
}

function bigX(ts){
  if (param2 == 1){
    
    return sin(ts*ts - radians(frameCount/5))*cos(ts- radians(frameCount/5));
    
  } else if (param2 == 2){
    
    return sin(ts*ts)*cos(ts- radians(frameCount/5));
    
  } else if (param2 == 3){
    
    return sin(ts*ts - radians(frameCount/5))*cos(ts);
    
  }else if (param2 == 4){
    
    return cos(ts*ts - radians(frameCount/5))*sin(ts- radians(frameCount/5));
    
  } else if (param2 == 5){
    
    return cos(ts*ts)*sin(ts- radians(frameCount/5));
    
  } else if (param2 == 6){
    
    return cos(ts*ts - radians(frameCount/5))*sin(ts);
    
  } else if (param2 == 7){
    
    return sin(ts*ts - radians(frameCount/5))*sin(ts- radians(frameCount/5));
  
  } else if (param2 == 8){

    return sin(ts*ts )*sin(ts*ts - radians(frameCount/5/5));
    
  } else if (param2 == 9){
    
    return sin(ts*ts - radians(frameCount/5))*sin(ts);
    
  }else if (param2 == 10){
    
    return cos(ts*ts - radians(frameCount/5))*cos(ts- radians(frameCount/5));
    
  } else if (param2 == 11){
    
    return cos(ts*ts )*cos(ts- radians(frameCount/5));
    
  } else if (param2 == 12){
    
    return cos(ts*ts - radians(frameCount/5))*cos(ts);
    
  }  
}  

function trapezoid_rule (func, a, b, nseg){
  let dx = 1.0 * (b - a) / nseg
  let sum = 0.5 * (func(a) + func(b))
  for (let i = 1; i <= nseg; i += 1) {
    sum += func(a + i * dx)
  }
  return sum * dx
}




