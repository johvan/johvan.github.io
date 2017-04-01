
angular
 .module('App',[])
    .controller('myCtrl', function($scope){
     
})
 .directive('app',['$interval', function($interval){
     return {
         restrict: "A",
         link: function(scope, element){
          
          var ctx = element[0].getContext('2d');
          
          var red    = document.querySelector('.red');
          var green  = document.querySelector('.green');
          var yellow = document.querySelector('.yellow');
          var purple = document.querySelector('.purple');
          var blue   = document.querySelector('.blue');
          var orange = document.querySelector('.orange');
         
      
          // You commented this out because everytime you resized
          // the browser it erased on `resized`.
           window.addEventListener('resize', resizeCanvas);
          
          function resizeCanvas() {
                element[0].height = window.innerHeight;
                element[0].width = window.innerWidth;
          }
            resizeCanvas();
          // variable that decides if something should be drawn on mousemove
          var drawing = false;
   
          // the last coordinates before the current move
          var lastX;
          var lastY;
             
             
           element.bind('mousedown', function(event){
            if(event.offsetX !== undefined){
              lastX = event.offsetX - event.currentTarget.offsetLeft;
              lastY = event.offsetY - event.currentTarget.offsetTop;
            } else {
              lastX = event.layerX - event.currentTarget.offsetLeft;
              lastY = event.layerY - event.currentTarget.offsetTop;
            }
                // begins new line
                //ctx.beginPath(); //This 
                drawing = true;
            });
           element.bind('mousemove', function(event){
            if(drawing){
              // get current mouse position
              if(event.offsetX!==undefined){
                currentX = event.offsetX;
                currentY = event.offsetY;
              } else {
                lastX = event.layerX - event.currentTarget.offsetLeft;
                lastY = event.layerY - event.currentTarget.offsetTop;
              }
          
    
            drawR(lastX, lastY, currentX, currentY);
            red.addEventListener('click', function(){
                ctx.strokeStyle = "red";
            });
            green.addEventListener('click', function(){
                ctx.strokeStyle = "green";
            });
            yellow.addEventListener('click', function(){
                ctx.strokeStyle = "yellow";
            });
            purple.addEventListener('click', function(){
                ctx.strokeStyle = "purple";
            });
            blue.addEventListener('click', function(){
                ctx.strokeStyle = "blue";
            });
            orange.addEventListener('click', function(){
                ctx.strokeStyle = "orange";
            });
              // set current coordinates to last one
              lastX = currentX;
              lastY = currentY;
            }
        
          });
          element.bind('mouseup', function(event){
            // stop drawing
            drawing = false;
          });

      
      
          function drawR(lX, lY, cX, cY){
            ctx.beginPath();
            // line from
            ctx.moveTo(lX,lY);
            // to
            ctx.lineTo(cX,cY);
            // color

            // draw it
            ctx.lineWidth = 4;
            ctx.lineCap = "round"; // This fixed the issue, when you draw you 
            ctx.stroke();
            }
      
    }
  };
}])

 

// angular
//  .module('App',[])
//     .controller('ui', function($scope){
//    alert('asds');  
// });






//Always remeber bind variable to the $scope
//http://stackoverflow.com/questions/26447923/how-to-clear-or-stop-timeinterval-in-angularjs
//http://codepen.io/matt-west/pen/bGdEC
//http://plnkr.co/edit/aG4paH?p=info //link to refrence.
