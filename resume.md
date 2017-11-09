## 个人信息

- 陈志鹏 男 21岁
- 本科学历 浙江大学宁波理工学院
- 主修专业: 软件工程
- Github: https://github.com/czp3009
- 个人博客: https://www.hiczp.com/
- 邮箱: czp3009@gmail.com
- 手机: 15336593671
- 实习意向: Java 后端开发

## 项目经历

- 学校内部使用的软件工程专业信息展示网站
    - 该应用主要提供文章展示功能, 普通用户可以浏览管理员许可的文章. 管理员可以增加、修改、删除文章以及文章分类的管理. 超级管理员可以增加管理员和修改其他管理员信息. 同时附有系统负载显示和文章数量以及浏览统计显示.
    - 该项目由班导委托, 我负责整个项目前端和后端的全部开发. 实现了该类博客 Web 应用.
    - 主要涉及到的后端技术: Spring Boot / Spring Security / Spring Session / Spring Data JPA / Hibernate / HikariCP / MySQL / FastJSON
    - 主要涉及到的前端技术: Thymeleaf / Webjars / BootStrap / AdminLTE / Ajax / ReactJs / jQuery / jQuery-validation / Font-Awesome / CSS Animation
    - 构建 OpenJDK1.8 / Maven
    - 由于开发时间短, 该项目采取敏捷开发策略. 所有页面首先由模板引擎充填变量后直接由后端返回, 一部分交互功能采用 JavaScript 通过 AJAX 与后端的 RESTFul API 通信从而获得数据来实现.
    - 用户验证只采用了默认的 Cookie 实现, Token 形式的 OAuth2 并未实现.
    - 为项目编写了简易的初始化向导, 运行后按控制台提示操作即可完成初始化设定.
    - 项目地址: https://github.com/czp3009/speciality-website
    
- Mystery 商城
    - 该项目用于参加 大学生电子商务竞赛.
    - 参赛作品为一款名为 Mr.rui (又名 Mystery) 的 VR 游戏. 该网站为其提供在线商城和交易相关后端 API.
    - 主要涉及到的后端技术: Spring Boot / Spring Security / Spring Session / Spring Data JPA / Hibernate / MySQL / FastJSON / Apache HttpClient
    - 主要涉及到的前端技术: Thymeleaf / Webjars / BootStrap / Bootstrap-dialog / Ajax / ReactJs / jQuery / jQuery-validation / Font-Awesome / CSS 3D Animation / WebGL
    - 项目地址: https://github.com/Undefined-Studio/Mystery-website
    
- 假期离校去向调查网站
    - 由于各班班长要在每次假期前统计全班的假期去向, 包括留校和回家, 因此委托我实现自动化登记.
    - 主要功能: 访问网站并填写表单后提交到服务器, 由服务器记录所有调查数据并展示.
    - 主要涉及到的技术: Spring Boot / Spring Data JPA / Spring Config / MySQL / Thymeleaf / Hibernate Form Validation / HTML5 Form Validation / Bootstrap
    - 项目地址: https://github.com/czp3009/holiday-plan-website
    
- Bilibili 弹幕机
    - 由于日常使用 Ubuntu 操作系统编写代码, 为了在 Linux 平台直播时可以方便的查看弹幕而编写此程序.
    - 功能: 可以查看并持续接受任意直播间的弹幕流推送. 可以登录 B站 并发送弹幕到任意直播间.
    - 插件系统: 插件系统底层由 pf4j 实现, 可以为弹幕机添加更多功能而不影响程序主体.
    - 主要使用的技术: Java AWT Event Queue / Java AWT Event Publish / Java Swing / JetBrains Intellj Forms runtime / Java Socket / Java NIO / slf4j / Java MultiThread / Java Thread Safe
    - 项目地址: https://github.com/czp3009/danmuji
    - 正着手编写全套 B站 API 调用库并使用 JavaFX 重构弹幕机.
    
- Minecraft 屠龙杀小游戏插件
    - Minecraft 是一个在国外比较流行的由 Java 编写的开放世界的客户端游戏, 我为他编写了一个服务端插件.
    - 屠龙杀是一个国内 Minecraft 同好群策划的一种在 Minecraft 内游玩的小游戏, 为了不需要 "上帝" 角色就可以进行游戏, 委托我编写此插件.
    - 插件功能与游戏内容相关，此处略.
    - 主要涉及到: Java Thread Safe / Java NonBlockingQueue / Java Timer / 游戏架构内的 Tick 刷新机制 / 角色和技能的 OOP 设计
    - 项目地址: https://github.com/Undefined-Studio/EnderKiller
    
- 社团管理系统
    - 该系统原本是 .Net 课程大作业, 由于我的电脑上没有安装 Windows 操作系统, 故采用 .Net Core 与 Jetbrains Rider 进行开发.
    - 主要功能: 普通用户可以注册与登录，浏览、查看、加入、退出、申请创建社团以及创建和加入社团活动. 管理员可以审批社团创建申请、活动创建申请.
    - 主要后端技术: .Net Core / ASP .Net Core / .Net Identity Core / .Net Core Routing / .Net Core Code Generator / EntityFrameWork Core / MySQL EntityFrameWork Core / Razor Core / .Net Core Database Migration / .Net Core Command Line Tool / LinQ
    - 主要前端技术: Bootstrap / jQuery / jQuery-validation / glup / bower
    - 开发此项目时的 .Net Core 版本较低并且文档匮乏(Microsoft 官方文档亦不全面), 通过不断地努力和尝试最终完成了预定功能.
    - 项目地址: https://github.com/czp3009/DotnetHomework

- WHMCS 线下充值卡密插件
    - WHMCS 是一款国外流行的全自动账单系统. 为了满足线下充值的需要, 开始了此项目.
    - 该项目为 WHMCS 提供后台卡密发放页面以及前台卡密自助充值页面. 管理员可在线下发放卡密并出售给零售客户, 客户自助充值后将增加账户余额.
    - 主要涉及到的技术: PHP5.4 / WHMCS API / ionCube24 / MySQL
    - 项目地址: https://github.com/czp3009/whmcs-page-kami

- WordPress 抽奖插件
    - 受到一名同好群群主委托, 要求编写一个可以对文章评论区的用户抽奖的插件.
    - 主要功能: 在文章底部显示一个输入框与按钮, 输入获奖人数之后点击按钮即可对该文章的评论区的用户进行抽奖.
    - 主要涉及: PHP7.1 / PHP PDO / WordPress API / WordPress Hook / jQuery / CSS dynamic loading / MySQL / WordPress RESTFul /WordPress AJAX
    - 项目地址: https://github.com/czp3009/wordpress-lottery
    - WordPress 插件商店: https://wordpress.org/plugins/wp-lottery/

## 专业技能

- 熟练使用 OpenJDK8 / Spring Boot / Spring Boot Web / Spring Data JPA / Spring Security / Spring Session / Hibernate / Hibernate-validation / Thymeleaf / Maven / Gradle / GIT / ActiveMQ / Retrofit / Reactor3 / MySQL / SQL Server / SWING
- 熟练使用 Bootstrap / ReactJS / jQuery / jQuery-validation / AJAX / Font-awesome / webpack
- 了解 Spring-cloud / dubbo / ASP .Net Core / vue
- 了解 Python , 具有一定 Python 简易脚本编写能力.
- 熟悉 Bash , 可以用 Bash 满足日常运维需要.
- 日常使用 Linux 编程, 熟悉 Linux 等 *nix 操作系统下的编程及运维, 懂得部署并详细配置大多数常用 Linux 服务, 例如 ssh / web / ftp / mail
- 了解基本网络技术, 包括 CSRF / MITM / Sniffer / SQL Injection . 了解并懂得使用基本的安全测试工具, 例如 WireShark / nmap / sqlmap
- 可以流畅阅读绝大多数英文技术文档、论坛、博客.
- 学习过 c/c++ , 对 gcc/g++ 比较了解, 懂得内存分配和指针概念.
- 对操作系统、数据结构、设计模式和算法有所了解， 懂得如何避免无谓的性能浪费.
- 熟练使用 GIT , 懂得如何多人共同编写项目.
- 有写博客的习惯, 平时会记录一些解决问题的思路在博客上, 博客地址见上文.

## 获奖历史

- 2015 校编程比赛二等奖
- 2014 校编程比赛二等奖


## 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事.
