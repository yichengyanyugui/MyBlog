---

title: 手把手教你安装Neo4j

date: 2026.01.21

categories: 开发环境

tags:
  - Neo4j
  - 图数据库
  - 安装教程
  - 环境搭建
  - Graph Database
  - Cypher
  - NoSQL

id: 2

---

# 1.什么是 Neo4j

**Neo4j** 是一款主流的 **图数据库（Graph Database）**， 以 **节点（Node）– 关系（Relationship）– 属性（Property）** 的方式存储数据， 非常适合用于：

- 知识图谱
- 关系分析
- 医学 / 金融 / 推荐系统
- 图算法与复杂关系建模

# 2.安装前准备

Neo4j 依赖 JDK，建议版本在11以上，在命令行中可以验证是否安装。

```bash
java -version
```

如果没有安装，可以参考「[手把手教你安装JDK](../手把手教你安装JDK)」。

# 3.安装Neo4j

详细安装步骤可以参考官方[操作手册](https://neo4j.com/docs/operations-manual/current/installation/windows/#_install_neo4j_using_a_zip_archive)，以下为Neo4j Windows版安装教程：

（1）[Neo4j开发中心](https://neo4j.com/deployment-center/)找到**Graph Database Self-Managed**，选择**Windows社区版**并下载。

![](/img/post/2-1.png)

（2）将下载好的压缩包解压，并将**bin目录**添加到**系统环境变量**中。

![](/img/post/2-2.png)

（3）「Win+R」，输入`cmd`，打开终端，输入`neo4j.bat console`，如果看到以下结果则成功。

```bash
neo4j.bat console
```

![](/img/post/2-3.png)

（4）在浏览器中访问本地端口`http://localhost:7474/`，就可访问。第一登录需要输入初始用户名称和密码，均为**neo4j**，登录后需要修改密码。

![](/img/post/2-4.png)

（5）登录进入之后，按照步骤运行例子（最后一步只需点击即可）。

![](/img/post/2-5.png)

（6）点击运行就可以看到一个图结构的示例。

![](/img/post/2-6.png)

# 4.安装Neo4j Desktop

（1）[Neo4j开发中心](https://neo4j.com/deployment-center/)找到**Neo4j Desktop**，选择**Windows**并下载安装。

![](/img/post/2-7.png)

（2）打开后选择Local instances并创建Instance

![](/img/post/2-8.png)

![](/img/post/2-9.png)

![](/img/post/2-10.png)

**注意**：如果点击 Start 后很快又变回 Stopped，可能是数据库安装路径太长了。以下是问题排查和解决的步骤：

（1）查看日志

如果打开的日志是软件里的，大概率是空的。

![](/img/post/2-11.png)

需要先找到该数据库的位置（以我的为例：`C:\Users\落叶不归梧桐\.Neo4jDesktop2\Data\dbmss\dbms-0ec4d76b-bc21-428f-bdfb-f61cbd8507fc\logs`），打开`neo4j-relate.log`文件，查看文件末尾，就可以看到最新的日志了。

![](/img/post/2-12.png)

![](/img/post/2-13.png)

（2）修改安装路径

- 使用 Windows 键，找到**环境变量**，然后选择**“编辑系统环境变量”**。
- 使用**“环境变量”**按钮，添加一个新的用户变量/系统变量，名称`NEO4J_DESKTOP_DATA_PATH`和值分别为自定义位置，例如`D:\Code\Tool\Neo4j\`。
- 用于`OK`关闭所有对话框。
- 重新启动桌面。

（3）重新创建实例

数据库地址长度确实变短了。

```bash
C:\Users\落叶不归梧桐\.Neo4jDesktop2\Data\dbmss\dbms-0ec4d76b-bc21-428f-bdfb-f61cbd8507fc
D:\Code\Tool\Neo4j\Application\Data\dbmss\dbms-87b11fbd-45dd-4132-85b4-220319e5b3f0
```

重新打开Neo4j Desktop，然后删除原来的实例，按照`4.安装Neo4j Desktop`再重新创建一个就好了。

![](/img/post/2-14.png)