function colo(){
    var col=["a4.jpg","b4.jpg","c4.jpg","d4.jpg","e4.jpg","f4.jpg","g4.jpg","h4.jpg","i4.jpg","j4.jpg"
    ,"k4.jpg","l4.jpg","m4.jpg","n4.jpg","p4.jpg"]
    var len=col.length;
    var ran=Math.random()*len;
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../assets/images/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){colo()},5000)
}
function imgk(pic,heading,discription){
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imgheading").innerHTML=heading;
    document.getElementById("imgparagraph").innerHTML=discription;
    bigscreen.style.display="flex" 
    fullimg.src=pic;
}
function imgv(){
    document.getElementById("bigscreen").setAttribute("style","display:none")
    console.log("calling")
}