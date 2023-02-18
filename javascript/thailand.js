function colo(){
    var col=["a3.jpg","b3.webp","c3.jpg","d3.webp","e3.webp","f3.webp","g3.webp","h3.jpg","i3.webp",
    "j3.jpg","k3.webp","l3.jpg","m3.jpg","n3.webp","p3.jpg"]
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