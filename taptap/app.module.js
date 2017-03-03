(function(){
    "use strict";
    
    angular
        .module("App", []);


 }());   

// (function(){
//     "use strict";
    
//     angular
//         .module("App", ["ngRouge"])
//         .controller("myGame", Game);
    
//     Game.$inject = ["$scope", "$element","$interval"];

//     function Game ($scope, $element, $interval){
            
//             var ctx = $element[0].getContext("2d");
            
//             var height = $element[0].height = window.innerHeight;
//             var width  = $element[0].width = window.innerWidth;
//     }

//  }());   

// .directive('app',['$interval', function($interval){
//      return {
//          restrict: "A",
//          link: function(scope, element){
//           var ctx = element[0].getContext('2d');
         
//           // You commented this out because everytime you resized
//           // the browser it erased on `resized`.
//           // window.addEventListener('resize', resizeCanvas, false);
//                 element[0].height = window.innerHeight;
//                 element[0].width = window.innerWidth;
        
//       // variable that decides if something should be drawn on mousemove
//           var gameInc = 40;
       
//         (function(){
//               var c;
       
//             $interval(function loop(){
//                 if(gameInc === 50){
//                     ctx.clearRect(0,0, element[0].width, element[0].height);
//                     return;
//                 }
               
//                 gameInc++;
//                 if(gameInc <= 5) {
//                 ctx.fillStyle = '#faf';
               
//                      ctx.beginPath();
//                  c = ctx.arc(
//                     Math.floor((Math.random() * 1000) + 1), 
//                     Math.floor((Math.random() * 1000) + 1),
//                                50,
//                                 0,
//                                2 * Math.PI
//                               );
//                 ctx.fill();
//     //              ctx.fillRect(
//     //                Math.floor((Math.random() * 1000) + 1),
//     //                Math.floor((Math.random() * 1000) + 1), 
//     //                80,88
//     //            );
//                 }
//                 if(gameInc > 6) {
//                 ctx.fillStyle = '#8161F4';
//                 ctx.beginPath();
//                  c = ctx.arc(
//                     Math.floor((Math.random() * 1000) + 1), 
//                     Math.floor((Math.random() * 1000) + 1),
//                                50,
//                                 0,
//                                2 * Math.PI
//                               );
//                 ctx.fill();
//     //              ctx.fillRect(
//     //                Math.floor((Math.random() * 1000) + 1),
//     //                Math.floor((Math.random() * 1000) + 1), 
//     //                80,88
//     //            );
//                 }
//             }, 500);
            
//       ;
        
         
//           }());
           
//             element.bind('click', function(event){
//                 event.preventDefault();
//                  e.stopPropagation();
// //            ctx.fillStyle = '#000';
// //                ctx.beginPath();
// //                 c = ctx.arc(
// //                    Math.floor((Math.random() * 1000) + 1), 
// //                    Math.floor((Math.random() * 1000) + 1),
// //                               50,
// //                                0,
// //                               2 * Math.PI
// //                              );
// //                ctx.fill();

//           });
     
//     }
//   };
// }]);


















//var canvas=document.getElementById("canvas");
//var ctx=canvas.getContext("2d");
//var BB,BBoffsetX,BBoffsetY;
//setBB();
//
//var rect={x:100,y:100,w:75,h:40};
//
//ctx.fillRect(rect.x,rect.y,rect.w,rect.h);
//
//
//canvas.onmousedown=handleMousedown;
//
//function handleMousedown(e){
//  e.preventDefault();
//  e.stopPropagation();
//  var mx=e.clientX-BBoffsetX;
//  var my=e.clientY-BBoffsetY;
//  if(mx>=rect.x && mx<=rect.x+rect.w && my>=rect.y && my<=rect.y+rect.h){
//    alert("clicked in rect");
//  }
//}
//
//function setBB(){
//  BB=canvas.getBoundingClientRect();
//  BBoffsetX=BB.left;
//  BBoffsetY=BB.top;
//}
 