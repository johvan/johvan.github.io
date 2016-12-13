(function () {
    "use strict";

    angular
        .module("App", [])
        .controller("myGame", Game)
        .directive('onTouch', [function() {
                return function(scope, element, attr) {

                    element.on("action", function(event) {
                        scope.$apply(function() { 
                            scope.$eval(attr.onTouch); 
                        });
                    });
                };
            }])

    Game.$inject = ["$element", "$interval", "$timeout", "$window", "$document"];

    function Game($element, $interval, $timeout, $window, $document) {
        var canvas = document.getElementById("game");
        var game = angular.element(canvas);
        var ctx = canvas.getContext("2d");

        var width = canvas.width = $window.innerWidth;
        var height = canvas.height = $window.innerHeight;

        const menu = document.querySelector(".game_menu");
        const play = document.querySelector(".play");
        const pause = document.querySelector(".pause");

        const audio = new Audio("../../sound/Marimba_Boy.mp3");

        let randColour = [
            "#ff006e",
            "#ea86ff",
            "#7a2bdb",
            "#fb5607",
            "#ffbe0b"
        ];


        var vm = this;

        vm.play = playGame;
        vm.pause = pauseGame;
        vm.action = playGame()();


        console.log(vm.action);

        function playGame() {

            menu.style.display = "none";
            pause.style.display = "block";
            if (audio.paused) {
                audio.play();
            }

            function generateGrid(array, num, randNum, randNum2) {
                if (Array.isArray(array) || Object.prototype.toString.call(array) === "[object Array]") {
                    array.push(Math.floor((Math.random() * randNum) + randNum2));
                    if (array.length <= num) {
                        generateGrid(array, num, randNum, randNum2);
                    }
                }
            };

            function generateColor() {

            }

            function remove() {
                ctx.clearRect(200, 200, 300, 300);
            }

            return function drawGrid() {
                    var zero = 0;
                    var one = 0;
                    var xPos = 300;
                    var yPos = 300;
                    var width = 50;
                    var height = 50;
                    var pos = [];
                    var grid = [];

                    generateGrid(grid, 15, 2, 0);
                    grid.forEach(function (ele, index, array) {
                        ctx.save();
                        if (ele === 0) {
                            ctx.fillStyle = randColour[Math.floor((Math.random() * 5) + 0)];
                            ctx.fillRect(xPos, yPos, width, height);
                            pos.push({
                                x: xPos,
                                y: yPos,
                                w: width,
                                h: height,

                            });
                            zero += 1;
                        } else if (ele === 1) {
                            ctx.fillStyle = `blue`;
                            ctx.fillRect(xPos, yPos, 50, 50);
                            one += 1;
                        }
                        //The plus if for the space in between
                        xPos += 50 + 2;
                        if (index === 3) {
                            xPos = 300;
                            yPos += 50 + 2;
                        } else if (index === 7) {
                            xPos = 300;
                            yPos += 50 + 2;
                        } else if (index === 11) {
                            xPos = 300;
                            yPos += 50 + 2;
                        }
                        ctx.restore();
                    }); // end of `forEach`
                    return function action(event) {
                        
                        var x = event.clientX;
                        var y = event.clientY;
                        for (var i = 0; i < pos.length; i += 1) {
                            //This works because of `x < pos[i].x + pos[i].w`.
                            if (x >= pos[i].x && x <= pos[i].x + pos[i].w &&
                                y >= pos[i].y && y <= pos[i].y + pos[i].h) {
                                ctx.clearRect(pos[i].x, pos[i].y, pos[i].w, pos[i].h);
                                // pos[i].x = pos[i].y = pos[i].w = pos[i].h = null;
                                console.log(pos);
                                zero -= 1;
                                if (zero === 0) {
                                    drawGrid();
                                }
                            }
                        }
                    }

                } // end of `drawGrid`
        };

        function pauseGame() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
            return false;

        };

        function info() {

        }

        function help() {




        }
    }

}());

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
//  if(mx >= rect.x && mx <= rect.x+rect.w && my>=rect.y && my<=rect.y+rect.h){
//    alert("clicked in rect");
//  }
//}
//
//function setBB(){
//  BB=canvas.getBoundingClientRect();
//  BBoffsetX=BB.left;
//  BBoffsetY=BB.top;
//}