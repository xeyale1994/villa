const bars = document.querySelector(".bars");
const topl = document.querySelector(".topl");
const centerl = document.querySelector(".centerl");
const bottoml = document.querySelector(".bottoml");
const headBottomRight = document.querySelector(".headBottomRight");




console.log(centerl.hasAttribute("style"));
bars.addEventListener("click", function(){
    if(centerl.hasAttribute("style") === false){
        topl.style.cssText = "position: relative;top: 10px;left: 0;transform: rotate(45deg);";
        centerl.style.display = "none";
        bottoml.style.cssText = " bottom: 15px;left: 0;transform: rotate(-45deg);"
        headBottomRight.style.left = "0%";
    }else{
        topl.style.cssText = "";
        centerl.style.display = "";
        bottoml.style.cssText = ""
        centerl.removeAttribute("style");
        headBottomRight.style.left = "-200%";
       
    }
})





/* 

.bars
         background-color: yellow; 
       display: block;
       height: 30px;
       width: 40px;
       position: relative;
   }

   .bars .topl{
       transition: 1s all;
       width: 35px;
       height: 5px;
       display: block;
       background-color: rgb(0, 0, 0);
       border-radius: 5px;
       position: relative;
       top: 10px;
       left: 0;
       transform: rotate(45deg);
   }
   .bars .centerl{
       width: 35px;
       height: 5px;
       display: block;
       background-color: black;
       border-radius: 5px;
       position: absolute;
       top: 50%;
       left: 0%;
       transform: translate(0%,-50%);
       display: none;
   }
   .bars .bottoml{
       width: 35px;
       height: 5px;
       display: block;
       background-color: black;
       border-radius: 5px;
       position: absolute;
       bottom: 15px;
       left: 0;
       transform: rotate(-45deg);
   }


*/