(function () {
    "use strict";

    angular
        .module("App", [])
        .controller("myGame", Game);

    Game.$inject = ["$element", "$interval", "$timeout", "$window", "$document"];

    function Game($element, $interval, $timeout, $window, $document) {
        var canvas = document.getElementById("game");
        var game = angular.element(canvas);
        var ctx = canvas.getContext("2d");

        var windowWidth = canvas.width = $window.innerWidth;
        var windowHeight = canvas.height = $window.innerHeight;

        const menu = document.querySelector(".game_menu");
        const play = document.querySelector(".play");
        const pause = document.querySelector(".pause");
        const mInfo = document.querySelector(".info");
        const stuff = document.querySelector(".stuff");
        const stuff2 = document.querySelector(".stuff2");
        const mhelp = document.querySelector(".help");
        
        
        const audio = new Audio("../../sound/Marimba_Boy.mp3");
        // const sound1 = new Audio("../../sound/Marimba_Boy.mp3");
        // const sound2 = new Audio("../../sound/Marimba_Boy.mp3");
        // const sound3 = new Audio("../../sound/Marimba_Boy.mp3");
        // const sound4 = new Audio("../../sound/Marimba_Boy.mp3");

        var vm = this;

        vm.play = playGame;
        vm.pause = pauseGame;
        vm.Info = info;
        vm.close = close;
        vm.Help = help;
        vm.open = openMenu; 
        //vm.action = drawGrid;

        //find a way to break this up. if not just use vanilla event listener.
        function playGame() {

            menu.style.display = "none";
            pause.style.display = "block";

            if (audio.paused) {
                audio.play();
            }

            drawGrid();
        }
        // end of play game
        function generateGrid(array, num, randNum, randNum2) {
            if (Array.isArray(array) || Object.prototype.toString.call(array) === "[object Array]") {
                array.push(Math.floor((Math.random() * randNum) + randNum2));
                if (array.length <= num) {
                    generateGrid(array, num, randNum, randNum2);
                }
            }
        };
   
        function drawGrid(event) {
            var zero = 0;
            var one = 0;
            var hold = 0;
            var width = 606;
            var height = 606;
            // over 1000
               var xPos = 300;
               var yPos = 100;
            //
            // less than 500
                var sXPos =  canvas.width  / 2 - width / 2
                var sYPos =  canvas.height / 2 - height / 2;
            //
            var pos = [];
            var grid = [];
            let randColour = [
                "#ff006e",
                "#ea86ff",
                "#7a2bdb",
                "#fb5607",
                "#ffbe0b"
            ];
            ctx.fillStyle = "#000";
            ctx.fillRect(canvas.width  / 2 - 600 / 2, 
            canvas.height  / 2 - 600 / 2, 600, 600);
            generateGrid(grid, 15, 2, 0);
            resize(500, xPos, yPos, 50, 50, 50, 50, 2);

            function resize(w, xPos, yPos, width, height, nX, nY, gap) {
                
                console.log($window.innerWidth);
                           
                if (windowWidth < w) {
                    grid.forEach(function (ele, index, array) {
                        ctx.save();
                        if (ele === 0) {
                            ctx.fillStyle = randColour[Math.floor((Math.random() * 5) + 0)];
                            ctx.fillRect(xPos, yPos, 50, 50);
                            pos.push({
                                x: xPos,
                                y: yPos,
                                w: 50,
                                h: 50
                            });
                            zero += 1;
                        } else if (ele === 1) {
                            ctx.fillStyle = "#919191";
                            ctx.fillRect(xPos, yPos, 50, 50);

                        }
                        //The plus if for the space in between

                        xPos += nX + gap;
                        if (index === 3) {
                            xPos = 300;
                            yPos += nY + gap;
                        } else if (index === 7) {
                            xPos = 300;
                            yPos += nY + gap;
                        } else if (index === 11) {
                            xPos = 300;
                            yPos += nY + gap;

                        }
                        ctx.restore();
                    }); // end of `forEach`
                       canvas.addEventListener("click", function (event) {
                        console.log(true);
                        var x = event.clientX;
                        var y = event.clientY;
                        for (var i = 0; i < pos.length; i += 1) {
                            //This works because of `x < pos[i].x + pos[i].w`.
                            if (x >= pos[i].x && x <= pos[i].x + pos[i].w &&
                                y >= pos[i].y && y <= pos[i].y + pos[i].h) {
                                ctx.clearRect(pos[i].x, pos[i].y, pos[i].w, pos[i].h);
                                pos[i].x = pos[i].y = pos[i].w = pos[i].h = null;
                                console.log(pos);
                                zero -= 1;
                                if (zero === 0) {
                                    drawGrid();
                                    console.log("Redrawed");
                                }
                            }
                        }

                    }, false) // end of `click`
                } // end of `<`
                if (windowWidth > 600) {
                    grid.forEach(function (ele, index, array) {
                        ctx.save();
                        if (ele === 0) {
                            ctx.fillStyle = randColour[Math.floor((Math.random() * 5) + 0)];
                            ctx.fillRect(sXPos, sYPos, 150, 150);
                            pos.push({
                                x: sXPos,
                                y: sYPos,
                                w: 150,
                                h: 150
                            });
                            zero += 1;
                        } else if (ele === 1) {
                            ctx.fillStyle = "#919191";
                            ctx.fillRect(sXPos, sYPos, 150, 150);

                        }
                        // The plus if for the space in between
                        sXPos += 150 + 2;
                        if (index === 3) {
                            sXPos = canvas.width  / 2 - 606 / 2;
                            sYPos += 150 + 2;
                        } else if (index === 7) {
                            sXPos = canvas.width  / 2 - 606 / 2;
                            sYPos += 150 + 2;
                        } else if (index === 11) {
                            sXPos = canvas.width  / 2 - 606 / 2;
                            sYPos += 150 + 2;

                        }
                        ctx.restore();
                    }); // end of `forEach`
                    canvas.addEventListener("click", function (event) {
                        console.log(true);
                        var x = event.clientX;
                        var y = event.clientY;
                        for (var i = 0; i < pos.length; i += 1) {
                            //This works because of `x < pos[i].x + pos[i].w`.
                            if (x >= pos[i].x && x <= pos[i].x + pos[i].w &&
                                y >= pos[i].y && y <= pos[i].y + pos[i].h) {
                                ctx.clearRect(pos[i].x, pos[i].y, pos[i].w, pos[i].h);
                                pos[i].x = pos[i].y = pos[i].w = pos[i].h = null;
                                console.log(pos);
                                zero -= 1;
                                if (zero === 0) {
                                    drawGrid();
                                    console.log("Redrawed");
                                }
                            }
                        }

                    }, false); // end of action
                } // end of `<`

            } // end of `reszie`


        } // end of `drawGrid`
        function pauseGame() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
            return false;

        }
        function openMenu(){
            menu.style.display = "block";
        }

        function info() {
            console.log(stuff.style.display = "block");
             stuff.style.display = "block";
        }
         function close() {
             stuff.style.display = "none";
             stuff2.style.display = "none";
         }

        function help() {
            stuff2.style.display = "block";
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