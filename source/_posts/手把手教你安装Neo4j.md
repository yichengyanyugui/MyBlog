---

title: 手把手教你安装Neo4j

date: 2026.01.21

categories:  Neo4j

tags:
- neo4j

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

（3）「Win+R」，输入**cmd**，打开终端，输入**neo4j.bat console**，如果看到以下结果则成功。

```bash
neo4j.bat console
```

![](/img/post/2-3.png)

（4）在浏览器中访问[本地端口](http://localhost:7474/)7474，就可访问。第一登录需要输入初始用户名称和密码，均为**neo4j**，登录后需要修改密码。

![](/img/post/2-4.png)

（5）登录进入之后，按照步骤运行例子（最后一步只需点击即可）。

![](/img/post/2-5.png)

（6）点击运行就可以看到一个图结构的示例。

![](/img/post/2-6.png)

# 4.安装Neo4j Desktop（可忽略）

（1）[Neo4j开发中心](https://neo4j.com/deployment-center/)找到**Neo4j Desktop**，选择**Windows**并下载安装。

![](/img/post/2-7.png)

（2）打开后选择Local instances并创建Instance

![](/img/post/2-8.png)

![](/img/post/2-9.png)

![](/img/post/2-10.png)