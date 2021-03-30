let param1, param2
let scaleX = 400
let scaleY = 400

function setup() {
  createCanvas(1000, 1000).parent("canvas").mouseClicked(randomOne);
  noFill();
  background(0);
  frameRate(30)

  params = new URLSearchParams(window.location.search)

  if(params.get("xp") && params.get("yp")) {
    param1 = parseInt(params.get("yp"));
    param1 = parseInt(params.get("xp"));
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
  
  const link = `https://weightan.github.io/LissajousCurvesJS?yp=${param1}&xp=${param2}`
  
  select("#permalink").html(link).attribute("href", link)
}

function addVert(i) {
  if (param == 0){
  curveVertex(
    sin(i * freqX + radians(frameCount)) * cos(i * modx + radians(frameCount*3)) * 0.9*width/2 ,
    sin(i * freqY ) * cos(i * mody) * 0.9*height/2
  )
  } else if (param == 1) {
    curveVertex(
    sin(i * freqX + radians(frameCount*3)) * cos(i * modx) * 0.9*width/2 ,
    sin(i * freqY ) * cos(i * mody) * 0.9*height/2
  )
  }else if (param == 2) {
    curveVertex(
    sin(i * freqX + radians(frameCount*3)) * cos(i * modx) * 0.9*width/2 ,
    sin(i * freqY + radians(frameCount*3)) * cos(i * mody) * 0.9*height/2
  )
  }else if (param == 3) {
    curveVertex(
    sin(i * freqX ) * cos(i * modx + radians(frameCount*3)) * 0.9*width/2 ,
    sin(i * freqY ) * cos(i * mody+ radians(frameCount*3)) * 0.9*height/2
  )
  }else if (param == 4) {
    curveVertex(
    sin(i * freqX + radians(frameCount)) * cos(i * modx + radians(frameCount)) * 0.9*width/2 ,
    sin(i * freqY + radians(frameCount)) * cos(i * mody+ radians(frameCount)) * 0.9*height/2
  )
  }else if (param == 5) {
    curveVertex(
    sin(i * freqX*radians(frameCount) +  radians(frameCount)) * cos(i * modx ) * 0.9*width/2 ,
    sin(i * freqY) * cos(i * mody) * 0.9*height/2
  )
  }
}

function draw() {
  
  translate(width / 2, height / 2)
  
  beginShape()
  
  stroke(255, 20);
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
    
    return sin(ts*ts - radians(frameCount))*cos(ts- radians(frameCount));
    
  } else if (param1 == 2){
    
    return sin(ts*ts)*cos(ts- radians(frameCount));
    
  } else if (param1 == 3){
    
    return sin(ts*ts - radians(frameCount))*cos(ts);
    
  } else if (param1 == 4){
    
    return cos(ts*ts - radians(frameCount))*sin(ts- radians(frameCount));
    
  } else if (param1 == 5){
    
    return cos(ts*ts)*sin(ts- radians(frameCount));
    
  } else if (param1 == 6){
    
    return cos(ts*ts - radians(frameCount))*sin(ts);
    
  } else if (param1 == 7){
    
    return sin(ts*ts - radians(frameCount))*sin(ts- radians(frameCount));
    
  } else if (param1 == 8){
    
    return sin(ts*ts)*sin(ts- radians(frameCount));
    
  } else if (param1 == 9){
    
    return sin(ts*ts - radians(frameCount))*sin(ts);
    
  }else if (param1 == 10){
    
    return cos(ts*ts - radians(frameCount))*cos(ts- radians(frameCount));
    
  } else if (param1 == 11){
    
    return cos(ts*ts )*cos(ts- radians(frameCount));
    
  } else if (param1 == 12){
    
    return cos(ts*ts - radians(frameCount))*cos(ts);
    
  } 
  
}

function bigX(ts){
  if (param2 == 1){
    
    return sin(ts*ts - radians(frameCount))*cos(ts- radians(frameCount));
    
  } else if (param2 == 2){
    
    return sin(ts*ts)*cos(ts- radians(frameCount));
    
  } else if (param2 == 3){
    
    return sin(ts*ts - radians(frameCount))*cos(ts);
    
  }else if (param2 == 4){
    
    return cos(ts*ts - radians(frameCount))*sin(ts- radians(frameCount));
    
  } else if (param2 == 5){
    
    return cos(ts*ts)*sin(ts- radians(frameCount));
    
  } else if (param2 == 6){
    
    return cos(ts*ts - radians(frameCount))*sin(ts);
    
  } else if (param2 == 7){
    
    return sin(ts*ts - radians(frameCount))*sin(ts- radians(frameCount));
    
  } else if (param1 == 8){
    
    return sin(ts*ts)*sin(ts- radians(frameCount));
    
  } else if (param2 == 9){
    
    return sin(ts*ts - radians(frameCount))*sin(ts);
    
  }else if (param2 == 10){
    
    return cos(ts*ts - radians(frameCount))*cos(ts- radians(frameCount));
    
  } else if (param2 == 11){
    
    return cos(ts*ts )*cos(ts- radians(frameCount));
    
  } else if (param2 == 12){
    
    return cos(ts*ts - radians(frameCount))*cos(ts);
    
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



