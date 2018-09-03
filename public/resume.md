## 个人信息
- 陈志鹏 男 22岁
- 本科学历 浙江大学宁波理工学院 2018届 毕业生
- 主修专业: 软件工程
- Github: https://github.com/czp3009
- 个人博客: https://www.hiczp.com/
- 邮箱: czp3009@gmail.com
- 手机: 15336593671

## 专业技能
- 熟练使用 Spring Boot / Spring Data JPA / Spring Security / Thymeleaf / Gradle / GIT / RabbitMQ / Retrofit / Reactor3 / MyBatis / MySQL / JavaFX
- 熟练掌握 Kotlin 语言以及使用 Kotlin 进行 Spring 开发.
- 熟练使用 React / React-Dom / React-Router / parcel / yarn
- 熟悉 Spring Cloud, 知晓 Dubbo.
- 了解 Python, 可以编写简易 Python 脚本.
- 熟悉 Bash, 可以用 Bash 满足日常运维需要.
- 日常使用 Linux 编程, 熟悉 Linux 等 *nix 操作系统下的编程及运维.
- 了解基本网络技术, 包括 CSRF / MITM / Sniffer / SQL Injection
- 可以流畅阅读绝大多数英文技术文档, 论坛, 博客.
- 学习过 c/c++, 对 gcc/clang 比较了解, 懂得内存分配和指针概念.
- 熟练使用 git, 懂得如何多人共同编写项目.
- 有写博客的习惯, 平时会记录一些解决问题的思路在博客上.

## 工作经历
- 杭州拓麦科技有限公司
    - Java 后端开发工程师
    - 负责常规 Web 项目与 SDK 以及公司内部库的开发
    - 2017-04 至 2018-06

## 项目经历
- 杭州拓麦科技有限公司内部用 Spring Boot 脚手架项目
    - 由于开始新项目总是很麻烦, 因此本人开发了该项目用于快速开始新的 Spring Boot 项目.
    - 项目中包含了方便开发的一些工具类, 例如 Protobuf 封装类型的工具类, Swagger(SpringFox) 支持 Protobuf 用的插件类.
    - 使用 Spring Boot AutoConfigure 实现一些内容的自动配置(starter), 例如自编写的 MyBatis 插件的自动注册使其支持标准 JPA 生命周期注解(@PostPersist, @PreUpdate 等).
    - 搭建公司内部使用的的 Nexus 来管理公司内部库并由此实现 gitlab 的自动化构建, 测试, 发布为 docker 等.

- 杭州拓麦科技有限公司 为 杭州网易公司 外包的 面单打印系统
    - 该项目的主要功能是接收客户数据来生成面单并打印.
    - 该项目的云端部分用于管理面单模板并生成面单图片. 本地部分用于在仓库内缓存拉取的图片并打印面单.
    - 本人在该项目中负责开发云端部分中的面单管理功能, 包括前端的面单模板设计器与后端交互所需的各个 API. 负责开发云端部分中的本地服务反向上线与存活性检查功能, 云端与本地的数据交互 API, 以及本地服务打印失败的报警功能等.
    - 同时还负责数据库结构以及各 API 接口的设计.

- Bilibili API
    - 该项目用于方便的在 Java 中调用 Bilibili 的 API.
    - 目前实现了直播站的 API. 可用于直播站签到, 抽奖, 搜索, 关注主播, 获取直播间实时弹幕, 发送弹幕, 送礼物 等.
    - 使用 Retrofit 来增加 Restful 部分的 API 的代码可读性.
    - 使用 Netty 作为 Socket 部分的主要框架, 实现了对各种数据包对应的事件的封装, 方便使用者非阻塞调用.
    - 项目地址: https://github.com/czp3009/bilibili-api 

- 在线判题系统(OJ)
    - 该项目用于判断用户提交的代码是否正确(能否通过预设的测试用例).
    - 通过 Linux 权限机制(chmod, chroot, selinux, network namespace 等)来实现沙盒系统.
    - 实现了查看题目, 提交代码(c, cpp, java), 查看提交结果等基本功能.
    - 后端采用 Spring Cloud 实现判题集群, 使用 RabbitMQ 来存储并分发判题任务. 使用 Kotlin 编写微服务, 使用 Spring JPA 作为 ORM.
    - 前端使用 ReactJs 实现了前后端分离的单页应用, 使用 parcel 构建项目并缩小文件体积.
    - 项目地址 https://github.com/czp3009/online-judge

- 学校内部使用的软件工程专业信息展示网站
    - 该项目类似门户网站, 用于学院内部信息展示, 受班导委托而开发.
    - 该项目为普通用户提供文章的查看功能, 为管理员提供文章编辑与系统监视器功能.
    - 使用 Spring Security 来实现登陆与角色管理, 使用 Thymeleaf 作为模板引擎来呈现界面.
    - 遵循 DB First 原则, 利用 Spring JPA, 通过 Java 类来生成数据表结构, 避免部署时的麻烦.
    - 项目地址: https://github.com/czp3009/speciality-website

## 致谢
感谢您花时间阅读我的简历，期待能有机会和您共事.
