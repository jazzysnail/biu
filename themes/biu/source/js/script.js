var headroom = new Headroom(document.getElementById('header'), {
  "tolerance": 10,
  "offset": 0,
  "classes": {
    "pinned": "slide-up",
    "unpinned": "slide-down"
  }
});
headroom.init();
headroom.destroy();