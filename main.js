function setup()
{
 canvas=createCanvas(350,350);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/A9PQNpIGJ/model.json",modelLoaded)
}

function draw()
{
  image(video,0,0,350,350);
  classifier.classify(video,gotResult);
}

function modelLoaded()
{
    console.log("Model Loaded!!!");
}

function gotResult(error,results)
{
  if (error) {
      console.log(error);
  } else {
     console.log(results); 
     document.getElementById("object").innerHTML=results[0].label;
     document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
  }

}