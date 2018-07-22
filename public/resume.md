## 个人信息
- 陈志鹏 男 22岁
- 本科学历 浙江大学宁波理工学院 2018届 毕业生
- 主修专业: 软件工程
- Github: https://github.com/czp3009
- 个人博客: https://www.hiczp.com/
- 邮箱: czp3009@gmail.com
- 手机: 15336593671
- 求职意向: Java 后端开发

## 工作经历
- 杭州拓麦科技有限公司
    - Java 后端开发工程师
    - 负责常规 Web 项目与 SDK 开发
    - 2017-11 至 2018-05

## 项目经历
- 杭州拓麦科技有限公司内部用 Spring Boot 脚手架项目
    - 该项目用于快速开始新的 Spring Boot 项目.
    - 项目中预设了公司内部规定的一系列设置和偏好, 对常用内容进行了简单封装, 例如 Protobuf 封装类(静态工具类), Swagger(SpringFox) 支持 Protobuf 用的插件类.
    - 使用 Spring Boot AutoConfigure 实现一些内容的自动配置, 例如自编写的 MyBatis 插件的自动注册使其支持标准 JPA 生命周期注解(@PostPersist, @PreUpdate 等), 项目配置文件的自动拷出(拷贝到工作目录从而方便使用)等.
    - 使用公司内部搭建的 Nexus 来保存公司内部使用的第三方库并由此实现 CI 的自动化构建, 测试, 发布为 docker 等.

- 杭州拓麦科技有限公司 为 杭州网易公司 外包的 面单打印系统
    - 该项目的主要目的是避免仓库服务商(京东与顺丰)可以直接从网易得到文本形式的客户数据, 因此使用一个第三方编写的系统来生成最终面单图片, 从而使得仓库服务商不能很容易的获取到客户数据.
    - 该项目分为两个部分, 云端部分与仓库本地部分.
    - 云端部分可以部署在互联网任意位置, 通过传入的数据, 来生成最终面单图片(寄送地址, 姓名, 手机号, 水印等).
    - 本地部分部署在仓库内, 作用是拉取(惰性或主动)云端生成的图片并在本地服务器上进行缓存(网易方给出的需求中要求本地服务器能缓存至少一天的图片量以免出现仓库断网而导致停工的情况). 之后通过仓库内部的操作员来控制面单的打印, 本地系统需要自动识别并调用局域网内的打印机进行面单打印.
    - 云端部分还包括对本地部分的状态维护(反向上线), 面单模板管理(服务器通过操作员输入的面单模板来填充文本和图片), 所有服务器(包括云端服务器在内, 都部署在一个负载均衡中间件后面)的状态监控(资源用量)和报警.
    - 项目涉及到多名开发者, 我在其中负责所有部分的框架和基本架构搭建与管理并开发云端系统的除了生成图片之外的所有部分. 并对 SDK 开发提出过建议(SDK 用于提供给网易对接部门调用我们的系统, 包括传入面单数据, 请求打印对应面单等, 分为 Java 和 C# 两个版本).

- 学校内部使用的软件工程专业信息展示网站
    - 该项目由班导委托, 我负责整个项目前端和后端的全部开发. 实现了一个类博客 Web 应用.
    - 该应用主要提供文章展示功能, 普通用户可以浏览管理员许可的文章. 管理员可以增加、修改、删除文章以及文章分类的管理. 超级管理员可以增加管理员和修改其他管理员信息. 同时附有系统负载显示和文章数量以及浏览统计显示.
    - 由于开发时间短, 该项目采取最快速的开发策略. 所有页面首先由模板引擎(Thymeleaf)充填变量后直接由后端返回, 一部分交互功能采用 JavaScript 通过 AJAX 与后端的 RESTFul API 通信从而获得数据来实现.
    - 用户验证只采用了默认的 Cookie 实现(Spring Boot Security), Token 形式的 OAuth2 并未实现.
    - 为项目编写了简易的初始化向导, 运行后按控制台提示操作即可完成初始化设定.
    - 项目地址: https://github.com/czp3009/speciality-website

- 简易在线判题系统(OJ)
    - 该项目是毕设项目, 实现了一个提交代码后给出代码是否正确(是否能通过预设的测试用例)的系统.
    - 由于学校要求比较低, 因此并未实现复杂的沙盒机制, 而简单的通过 Linux 权限机制(chmod, chroot, selinux, network namespace 等)来实现.
    - 主要实现了查看题目集, 查看题目, 提交代码(c, cpp, java), 查看历史提交记录(判题对错)等基本功能.
    - 后端采用 Spring Cloud(eureka, ribbon, zuul) 实现集群, 使用 Spring Boot 2.0 与 Kotlin 代码实现微服务, dao 层采用 Spring Boot JPA(Hibernate), HikariCP, MySQL 实现持久化, 使用 RabbitMQ 作为消息队列实现任务的异步处理与分配. 如果必要, 可以通过添加 Radis 依赖来替换默认的 Spring Cache 实现从而提升吞吐量.
    - 前端使用 ReactJs 作为单页应用框架(react-router), 使用 parcel 作为构建系统.
    - 项目地址 https://github.com/czp3009/online-judge

- Bilibili API
    - 出于兴趣而编写了此项目, 用于实现 B站 API 的 Java 调用.
    - 由于 B站 API 繁多且规范性不佳, 项目进度缓慢, 目前仅实现了 live.bilibili.com 站点的 API. 可用于直播站签到, 抽奖, 搜索, 关注主播, 获取直播间实时弹幕(socket), 发送弹幕, 送礼物 等.
    - 通过事件机制(Google guava 的 EventBus)来很方便的让使用者在对应弹幕推送数据流(使用 Netty 作为 SocketIO 框架实现异步调用)中出现所需数据包时被回调到. 通过 Retrofit(底层调用 OkIO 的 OkHttpClient) 作为 RESTFul 框架来实现方便的调用.
    - 项目地址: https://github.com/czp3009/bilibili-api 

- Bilibili 弹幕机
    - 由于日常使用 Ubuntu 编写代码, 为了在 Linux 平台直播时(直播学习月赔过亿)可以方便的查看弹幕而编写此程序.
    - 功能: 可以查看并持续接受任意直播间的弹幕流推送. 可以登录 B站 并发送弹幕到直播间(使用上文提到的 Bilibili API).
    - 插件系统: 插件系统底层由 pf4j 实现, 可以为弹幕机添加更多功能而不影响程序主体.
    - 项目地址: https://github.com/czp3009/danmuji
    - ps: 之前使用 JavaFX 重构该项目但是结构比较混乱, 打算抽空用 Kotlin 再重构一遍.

- 社团管理系统
    - 该系统原本是 .Net 课程(学校课程只教授 C#)大作业, 由于我的电脑上没有安装 Windows, 故采用 .Net Core 与 Jetbrains Rider(那时候还是 EAP, 挺卡的) 进行开发.
    - 开发此项目时 .Net Core 版本很低, 现在版本的 .Net Core 已经有了大量变化, 因此这个项目基本是没用的, 单纯作为对 .Net Core 的了解与学习.
    - 主要功能: 普通用户可以注册与登录，浏览、查看、加入、退出、申请创建社团以及创建和加入社团活动. 管理员可以审批社团创建申请、活动创建申请(简单的 CRUD 与数据传递).
    - 使用了以下 .Net Core 方面的框架与技术: .Net Core, ASP .Net Core, .Net Identity Core, .Net Core Routing, .Net Core Code Generator, EntityFrameWork Core, MySQL EntityFrameWork Core, Razor Core, .Net Core Database Migration, .Net Core Command Line Tool, LinQ.
    - 主要前端技术(现在版本的 .Net Core 可能已经改了默认工具链): Bootstrap, jQuery, jQuery-validation, glup, bower.
    - 项目地址: https://github.com/czp3009/DotnetHomework

- WordPress 抽奖插件
    - 虽然自己不用 WordPress, 但是从一个同好群的群主得知, 一些 WP 站长经常通过 WP 的评论功能来进行抽奖(roll 一些奖品什么的), 因此我编写了这个插件.
    - 通过在文章里写入 \[wordpress_lottery\] 这个字符串, 当文章在前台被浏览时会在对应位置出现一个输入框和按钮. 在输入框中输入目标中奖人数后点击按钮即可在该文章的评论区中抽奖, 插件会返回获奖者的昵称和评论 ID.
    - 这个插件之前重构过一次, 确保了主流浏览器的兼容性(除了 Edge, 由于 Edge 的 JavaScript 基本库不全)与大版本的 WordPress 兼容性.
    - 项目地址: https://github.com/czp3009/wordpress-lottery
    - WordPress 插件商店地址: https://wordpress.org/plugins/wp-lottery/

## 专业技能
- 熟练使用 OpenJDK / Spring Boot / Spring Boot Web / Spring Data JPA / Spring Security / Spring Session / Hibernate / Hibernate-validation / Thymeleaf / Maven / Gradle / GIT / RabbitMQ / Retrofit / Reactor3 / MySQL / SQL Server / SWING / JavaFX
- 熟练使用 React / React-Dom / React-Router / parcel / npm / yarn
- 了解 Spring Cloud, 知晓 Dubbo.
- 了解 Python , 可以编写简易 Python 脚本.
- 熟悉 Bash , 可以用 Bash 满足日常运维需要.
- 日常使用 Linux 编程, 熟悉 Linux 等 *nix 操作系统下的编程及运维, 懂得部署并详细配置大多数常用 Linux 服务, 例如 ssh / web / ftp / mail
- 了解基本网络技术, 包括 CSRF / MITM / Sniffer / SQL Injection . 了解并懂得使用基本的安全测试工具, 例如 WireShark / nmap / sqlmap
- 可以流畅阅读绝大多数英文技术文档、论坛、博客.
- 学习过 c/c++, 对 gcc/g++/clang/clang++ 比较了解, 懂得内存分配和指针概念.
- 使用过 Unreal, Unity, 对游戏开发有笼统概念.
- 学校教授过 Android 开发, 对移动端原生开发有基本认识.
- 对操作系统, 数据结构, 设计模式和算法有所了解, 懂得如何避免无谓的性能浪费.
- 熟练使用 git, 懂得如何多人共同编写项目.
- 有写博客的习惯, 平时会记录一些解决问题的思路在博客上, 博客地址见上文.

## 致谢
感谢您花时间阅读我的简历，期待能有机会和您共事.
