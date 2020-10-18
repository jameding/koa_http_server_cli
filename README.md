# 基于KOA2的HTTP服务项目模板

还在为繁琐的搭建项目操作烦躁吗？使用此模板，解放双手！


#### 项目目录

* config 项目端口等服务配置在serverConfig中配置；接口定义在controller下的若干yaml文件中；
* controller 接口的所在位置
* logs 日志文件所在位置
* node_modules 
* service 项目中的一些通用逻辑存放于此处
* package.json
* server.js
* start.js 项目运行入口

#### 初始化方法

* 根据实际情况，修改package.json中的name、description、url等
* npm install
* node start.js

#### 开发流程

* 在config/controller/*.yaml中定义接口
* 重启服务，将根据接口，生成接口模板文件；
* 开发接口
* 重启服务，访问localhost:port/${yaml文件的名字},调试接口

# END
