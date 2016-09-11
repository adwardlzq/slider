 (function($) {
         var defaultConfig = {
             tdom: "no-slider",
         };
         config = $.extend({}, defaultConfig, config);
         var X = 0;
         var objX = 0;
         var endX, endY;
         var startX, startY;
         var distanceX, distanceY;
         var $this = this;
         this.on('touchstart', function(event) {
             startX = event.targetTouches[0].pageX;
             startY = event.targetTouches[0].pageY;
             objX = (this.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
             var index=$this.index(this);
             $this.each(function(i,e){
         	 	if(i!=index){
         	 		this.style.WebkitTransform = "translateX(" + 0 + "px)";
         	 	}
         	 });
         });
         this.on('touchmove', function(event) {
             endX = event.targetTouches[0].pageX;
             endY = event.targetTouches[0].pageY;
             distanceX = Math.abs(startX - endX);
             distanceY = Math.abs(startY - endY);
             if (distanceX > distanceY && distanceY < $(this).height()) {
                 event.preventDefault();
             } else {
                 return;
             }
             X = endX - startX;
             if (objX == 0) {
                 if (X > 0) {
                     this.style.WebkitTransform = "translateX(" + 0 + "px)";
                 } else if (X < 0) {
                     var l = Math.abs(X);
                     this.style.WebkitTransform = "translateX(" + -l + "px)";
                         this.style.WebkitTransform = "translateX(" + -l + "px)";
                     }
                 }
             } else if (objX < 0) {
                 if (X > 0) {
                     this.style.WebkitTransform = "translateX(" + r + "px)";
                     if (r > 0) {
                         r = 0;
                         this.style.WebkitTransform = "translateX(" + r + "px)";
                     }
                 } else {
                 }

             }
         });
         this.on('touchend', function(event) {
             objX = (this.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
             endX = event.changedTouches[0].pageX;
             distanceX = Math.abs(startX - endX);
             if (objX < 0 && distanceX < 10&&!$(event.target).hasClass(config.tdom)) {
                 event.preventDefault();
                 this.style.WebkitTransform = "translateX(" + 0 + "px)";
                 return;
             }
                 this.style.WebkitTransform = "translateX(" + 0 + "px)";
             } else {
                 $(this).addClass("slider");
             }
             
         });

     };
 })(Zepto);
