---

title: 手把手教你安装JDK

date: 2026.01.21

categories:  Java

tags:
- JDK
- Java环境
- 开发环境

id: 1

---

# 1.下载JDK

可选择以下官方 / 主流渠道之一：

- [OracleJDK](https://www.oracle.com/java/technologies/downloads/)
- OpenJDK（Adoptium / Temurin）

打开网址，选择Windows x64 版本，点击网址下载即可。

![](/img/post/1-1.png)

# 2.安装JDK

双击直接安装即可，安装地址默认（C:\Program Files\Java\jdk-21.0.10）或者自定义都可以。

# 3.配置环境变量

（1）右键 **此电脑 → 属性**。

![](/img/post/1-2.png)

（2）点击 **高级系统设置**。

![](/img/post/1-3.png)

（3）选择 **环境变量**。

![](/img/post/1-4.png)

（4）在「系统变量」中点击 **新建**，选择前面地址里的bin目录地址。

![](/img/post/1-5.png)

（5）点完所有「确定」，然后「Win+R」，输入**cmd**，打开终端，输入**java -version**，如果看到以下结果则成功。

```bash
java -version
```

![](/img/post/1-6.png)
