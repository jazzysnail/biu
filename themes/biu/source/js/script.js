var headroom = new Headroom(document.getElementById('header'), {
  tolerance: 10,
  offset: 500,
  classes: {
  	initial : "animated",
    pinned: "slide-up",
    unpinned: "slide-down"
  }
});
headroom.init();
// to destroy
// headroom.destroy();