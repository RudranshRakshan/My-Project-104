Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML="<img id='image' src='"+data+"'>"
    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wwUxQLRot/model.json", modelloaded);
function modelloaded() {
    console.log("model has loaded");
}

function identify() {
    img = document.getElementById("image");
    classifier.classify(img, gotResult)
}

function gotResult(error, result) {
    if (error){
        console.log(error);
    }
    else{
    console.log(result);
    document.getElementById("resultObject").innerHTML=result[0].label;
    document.getElementById("resultAccuracy").innerHTML=result[0].confidence.toFixed(3);
    }

}

