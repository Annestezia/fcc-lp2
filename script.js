feather.replace();

var waypoints = document.querySelector("section,header");
for (var i = waypoints.length - 1; i >= 0; i--) {
  var waypoint = new Waypoint({
    element: waypoints[i],
    handler: function(direction) {
      this.element.classList.add("animated", "fadeIn");
    },
    offset: "65%"
  });
}
// ======================header scroll==============================


// var headerDown = new Waypoint({
//   element: document.querySelector(".nav-items"),
//   handler: function(direction) {
//     console.log(this.element.previousElementSibling.clientHeight);
//     var logoHeight=this.element.previousElementSibling.clientHeight;
//     window.pageYOffset<=0?this.element.style.top=logoHeight+"px":this.element.style.top=0+"px";
//     }
//   });
// var headerUp = new Waypoint({
//   element: document.querySelector(".nav-items"),
//   handler: function(direction) {
//     var logoHeight=this.element.previousElementSibling.clientHeight;
//     window.pageYOffset>logoHeight?this.element.style.top="0px":this.element.style.top=logoHeight+"px";
//     }
//   });
