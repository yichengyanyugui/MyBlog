var posts=["2026/01/03/hello-world/","2026/01/21/手把手教你安装JDK/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };