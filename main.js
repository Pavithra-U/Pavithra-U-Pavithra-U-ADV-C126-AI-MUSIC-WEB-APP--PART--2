song.skz = "Surfin.mp3";
song.rv = "Jelly Rv_Irene and seulgi.mp3"
song.ch = "CHUNG HA_Killing Me.mp3"

function preload()
{
    song.skz = loadSound("music.skz.mp3");
    song.rv = loadSound("music.rv.mp3");
    song.ch = loadSound("music.ch.mp3");
}


rightWristX = 0;
rightWristY = 0;

lefWristX = 0;
leftWristY = 0;

function setup()
{
    convas = createCanvas(600,500);
    canvas.centre();

    video = creatCapture(VIDEO);
    video.hide()

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {

        rightWristX =results[0].pose.rightWrist.x;
        rightWristY =results[0].pose.rigthWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = "+rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftWristx + "leftWristY = " +leftWristY);

    }
}

function draw()
{
    image(video,0,0,600,500);

}

function play()
{
    song.play();
    song.setVolume(1)
    song.rate(1)
}