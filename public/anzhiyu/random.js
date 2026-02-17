var posts=["2026/01/26/企业核心用户中心系统/","2026/01/21/手把手教你安装JDK/","2026/01/26/手把手教你安装MySQL/","2026/01/21/手把手教你安装Neo4j/","2026/01/26/把手教你安装Ant Design Pro/","2026/01/26/把手教你安装Node.js/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };