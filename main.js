var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromURL("11.jpg",function (Img){ 
        blockImageObject = Img; blockImageObject.scaleToWidth(400); blockImageObject.scaleToHeight(600); blockImageObject.set({ top:0, left:0 }); canvas.add(blockImageObject);
    })
	
}

function playsound(){
	x.play();
    
}
