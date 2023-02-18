function colo(){
    var col=["a2.webp","b2.jpg","c2.webp","d2.webp","e2.avif","f2.webp","g2.avif","h2.jpg","i2.webp"
    ,"j2.jpg","k2.jpg","l2.jpg","m2.jpg","n2.webp","p2.avif"]
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