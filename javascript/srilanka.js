function colo(){
    var col=["a1.webp","b1.jpg","c1.webp","d1.jpg","e1.jpg","f1.webp","g1.jpeg","h1.webp",
    "i1.webp","k1.jpg","j1.jpg","l1.jpg","m1.jpg","n1.jpg","p1.jpg"]
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