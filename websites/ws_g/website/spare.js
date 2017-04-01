
angular
 .module('App',[])
    .controller('myCtrl', function($scope){
     
})
 .directive('app',['$interval', function($interval){
     return {
         restrict: "A",
         link: function(scope, element){
          var ctx = element[0].getContext('2d');
         
          // You commented this out because everytime you resized
          // the browser it erased on `resized`.
          // window.addEventListener('resize', resizeCanvas, false);
          
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
        if(event.offsetX!==undefined){
          lastX = event.offsetX;
          lastY = event.offsetY;
        } else {
          lastX = event.clientX;
          lastY = event.clientY;
        }
        
        // begins new line
        ctx.beginPath();
        
        drawing = true;
      });
      element.bind('mousemove', function(event){
        if(drawing){
          // get current mouse position
          if(event.offsetX!==undefined){
            currentX = event.offsetX;
            currentY = event.offsetY;
          } else {
            currentX = event.clientX;
            currentY = event.clientY;
          }
          
          draw(lastX, lastY, currentX, currentY);
          
          // set current coordinates to last one
          lastX = currentX;
          lastY = currentY;
        }
        
      });
      element.bind('mouseup', function(event){
        // stop drawing
        drawing = false;
      });
        
        (function(){   
             var a = 0;
           
            $interval(function loop(){
                if(a === 50){
                    $interval.cancel(loop);
                    return;
                }
                
                a++;
                
                
                if(a < 5) {
                ctx.fillStyle = '#faf';
                ctx.beginPath();
                 var c = ctx.arc(
                    Math.floor((Math.random() * 1000) + 1), 
                    Math.floor((Math.random() * 1000) + 1),
                               50,
                                0,
                               2 * Math.PI
                              );
                ctx.fill();
    //              ctx.fillRect(
    //                Math.floor((Math.random() * 1000) + 1),
    //                Math.floor((Math.random() * 1000) + 1), 
    //                80,88
    //            );
                }
                
                if(a > 6) {
                ctx.fillStyle = '#8161F4';
                ctx.beginPath();
                 var c = ctx.arc(
                    Math.floor((Math.random() * 1000) + 1), 
                    Math.floor((Math.random() * 1000) + 1),
                               50,
                                0,
                               2 * Math.PI
                              );
                ctx.fill();
    //              ctx.fillRect(
    //                Math.floor((Math.random() * 1000) + 1),
    //                Math.floor((Math.random() * 1000) + 1), 
    //                80,88
    //            );
                }
            }, 1000);
         
          }());
     
      function draw(lX, lY, cX, cY){
        
        // line from
        ctx.moveTo(lX,lY);
        // to
        ctx.lineTo(cX,cY);
        // color
        ctx.strokeStyle = "#4bf";
        // draw it
        ctx.lineWidth = 6;
        ctx.stroke();
      }
    }
  };
}]);