# networkCloud1.1
it will be token to user for college

本系统已获准许，将应用于开发者所属高校的实验室等机构。
本系统禁止用于商用但可供学习交流。
我的邮箱为：yanmingyu55@gmail.com，欢迎大佬对不足的地方提出指正。

机构管理及交流综合平台，目前适配为本专业实验室内部使用的形式，后期将会对数据库及参数进行调整。
项目后端组成：基于golang的Gin框架，mysql，redis
  
本项目包括：
  -机构管理及交流综合平台前台的后端部分
  -机构管理及交流综合平台后台的前端部分（dist解包形式）
  -机构管理及交流综合平台后台的后端部分
  
MYSQL和REDIS的配置在dao文件夹内，mysql所需表的参数及函数均存在于models文件夹中。

需创建静态文件夹./uploadPic
结构：
  ./uploadPic
    -artPic
    -headPic
 
需创建存放系统日志文件夹 ./systemLog


系统即将调整部分：
  -添加库能够主动检索学校和机构名称
  -将年级更名为机构代号
  -可能将部分功能重构以降低耦合度
  -将添加即时通信功能以方面用户之间沟通
