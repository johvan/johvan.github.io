(function () {
    "use strict";
    var app = {
        suit1:   document.querySelectorAll(".inner .box")[0],
        product: document.querySelector(".v1 img")
        // cart: document.querySelector()
        // item: div({
        //    class: "item"
        // })
    };
//    console.log(app.suit1);
//    app.suit1.addEventListener("click", function () {
//        console.log(this);
//    }, false);

    function div(o){
         var div = document.createElement("div");
         div.style.width = o.w;
        div.style.height = o.h;
        div.style.position = o.p;
        div.style.className = o.class;
    }

    function addToCart(x, y, yDown, img,xPos, yPos) {
        var div = document.createElement("div");
        div.style.width = "300px";
        div.style.height = "400px";
        div.style.position = "absolute";
        div.style.className = "";
        div.style.backgroundImage = img;
        div.style.backgroundSize = "300px 400px";
        div.style.backgroundRepeat = "no-repeat";
        div.style.backgroundColor = "lightblue";
        div.style.left = "0px" || xPos;
        div.style.top = "80px" || yPos;
        app.suit1.appendChild(div);
        window.setTimeout(function () {
            div.style.left = x; //x
            div.style.top = y; //y
            div.style.width = "50px";
            div.style.height = "50px";
             div.style.backgroundSize = "50px 50px";
            window.setTimeout(function () {
                div.style.top = yDown;
                window.setTimeout(function () {
                    div.style.opacity = "0";
                }, 1);
            }, 1000);
        }, 1000);
    }

    function isTrue(node, fn){
        if(node){
            return fn();
        } else {
            console.log("Dom Node doesn't exist");
        }
       
       
    }
//    isTrue(app.suit1, function(){
//      return app.suit1.addEventListener("click", function () {
//        return addToCart("720px", "-750px", "-700px", "url('imgs/suit-1.jpg')");
//     }, false);
//    });
//    isTrue(app.suit1, function(){
//         app.suit1.addEventListener("click", function () {
//        addToCart("720px", "-750px", "-700px", "url('imgs/suit-1.jpg')");
//        
//     }, false);
//    });
// 
    
    
    function foo(e) {
          e.preventDefault();
        
        function move(){
            var x = event.pageX;
            var y = event.pageY;
            // app.product.style.position = "absolute";
            var p = app.product.getBoundingClientRect();
            app.product.style.left = x  +"%";
            app.product.style.top = y  +"%";
            console.log(p.left,p.top);
        }
            addEventListener("mousemove", move, true);
            addEventListener("mouseup", function(){
           
            removeEventListener("mousemove", move, true);
             app.product.removeEventListener("mousemove", move, true);
        });
        app.product.addEventListener("mousemove", move, true);
        app.product.addEventListener("mouseup", function(){
            console.log("In here");
            app.product.removeEventListener("mousemove", move, true);
        });
    
};
 app.product.addEventListener("mousedown", foo, true);
 //document.body.addEventListener("mousedown", foo, true);
 addEventListener("click", function(e){
   var x = e.pageX;
   var y = e.pageY;
   console.log("good "+ x,y);
 });
}());