window.onscroll = function() {myFunction()};
function myFunction() {

if (document.body.scrollTop > 100) {
     document.getElementById("fade").className = "fadeIn";
       document.getElementById("fade").style.opacity = 1;

} else if (document.body.scrollTop < 400) {
      document.getElementById("fade").className = "fadeOut";
      document.getElementById("fade").style.opacity = 0;
   }

   if (document.body.scrollTop > 650) {
        document.getElementById("fade2").className = "fadeIn";
          document.getElementById("fade2").style.opacity = 1;

   } else if (document.body.scrollTop < 800) {
         document.getElementById("fade2").className = "fadeOut";
         document.getElementById("fade2").style.opacity = 0;
      }

      if (document.body.scrollTop > 1000) {
           document.getElementById("fade3").className = "fadeIn";
             document.getElementById("fade3").style.opacity = 1;

      } else if (document.body.scrollTop < 1200) {
            document.getElementById("fade3").className = "fadeOut";
            document.getElementById("fade3").style.opacity = 0;
         }

         if (document.body.scrollTop > 1500) {
              document.getElementById("fade4").className = "fadeIn";
                document.getElementById("fade4").style.opacity = 1;

         } else if (document.body.scrollTop < 1500) {
               document.getElementById("fade4").className = "fadeOut";
               document.getElementById("fade4").style.opacity = 0;
            }

            if (document.body.scrollTop > 1800) {
                 document.getElementById("fade5").className = "fadeIn";
                   document.getElementById("fade5").style.opacity = 1;

            } else if (document.body.scrollTop < 1900) {
                  document.getElementById("fade5").className = "fadeOut";
                  document.getElementById("fade5").style.opacity = 0;
               }
}

function info(){
  var img = document.getElementsByTagName('img');
  for(var i = 0, img = img.length; i < len; i++) {
      img[i].onclick = function () {
         document.body.style.background = "lightblue";
      }
  }
}
