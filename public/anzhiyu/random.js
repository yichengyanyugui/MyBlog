var posts=["2026/01/21/手把手教你安装JDK/","2026/01/21/手把手教你安装Neo4j/","2026/01/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };