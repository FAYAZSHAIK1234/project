function vis()        
        { 
            document.getElementById("a").removeAttribute("type")
            document.getElementById("b").setAttribute("src","./assets/icons/open smile.png")
        }
        function hid()
        {
            document.getElementById("a").setAttribute("type","password")
            document.getElementById("b").setAttribute("src","./assets/icons/closed smile.png")
        }
        function auth(){
            var password="fayyu123"
            var email="sfayaz359@gmail.com"
            var userpass=document.getElementById("a").value 
            var useremail=document.getElementById("email").value 
            if(useremail==email && userpass==password)
            {
                document.getElementById("good").setAttribute("action","./html/travelling.html")
                document.getElementById("login").setAttribute("type","submit")
                document.getElementById("result").innerHTML=" "
                document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,rgb(255,17,120),rgb(88, 14, 224))"
            }
            else if(useremail!=email && userpass==password)
            {
                document.getElementById("cont").style.borderColor="blue";
                document.getElementById("email").style.borderColor="red";
                document.getElementById("result").innerHTML="Entered the wrong email"
                document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,red,rgb(255,17,120))"
            }
            else if(useremail==email && userpass!=password)
            {
                document.getElementById("cont").style.borderColor="red";
                document.getElementById("email").style.borderColor="blue";
                document.getElementById("result").innerHTML="Entered the wrong password"
                document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,rgb(255,17,120),red)"
            }
            else
            {
                document.getElementById("email").style.borderColor="red";
                document.getElementById("cont").style.borderColor="red";
                document.getElementById("result").innerHTML="Entered the wrong email and password"
                document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,rgb(134, 4, 4),red)"
            }
        }