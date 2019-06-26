# 前端开发平台

```

    es6
    "webpack": "4.28.3",
    "react": "^16.8.6",
    "react-redux": "^7.0.2",
```

### Clone code

```git clone git@192.168.90.66:mia/pixlink-600k.git```

### Setting up Dev

#### Yarn

> 安装 Yarn

~~~shell
npm install yarn -g

> 在国内推荐使用 npm 淘宝镜像
```shell
yarn config set registry  https://registry.npm.taobao.org
~~~

> 由于我们使用 gulp，接下来安装 gulp-cli 

```shell
yarn global add gulp-cli
```

> 在开发目录文件夹下安装依赖

```shell
yarn
```

### Server

打开命令行，跳转到代码文件夹，gulp管理 

```shell
gulp config --pro [productname]   #不执行此命令则按上次执行过的产品编译，第一次则使用默认值
yarn start
```

将会自动打开浏览器运行代码

### Build

发布产品

```shell
gulp config --pro [productname]   #不执行此命令则按上次执行过的产品编译，第一次则使用默认值
gulp build
```

## Versioning

查看 ./CHANGELOG.md

[下载] (<http://192.168.90.66/mia/pixlink-600k/tags>)



### MAKEFILE的页面编译

```
后台makefile修改：
首次下载代码 ：
git clone git@192.168.90.66:mia/pixlink-600k.git
cd pixlink-600k
yarn 
gulp config --pro [productname]
gulp build
//gulp config --pro ME1202-DT01
--------------------------------------------------
非首次下载代码：
cd pixlink-600k
git pull
yarn 
gulp config --pro ME1202-DT01
gulp build
//gulp config --pro ME1202-DT01

-----------结束
[productname] 主要有：ME1202-DL01 ，ME1202-DT01
gulp config --pro [productname] 示例：
gulp config --pro ME1202-DT01

上面gulp build下面再多加一条命令：
gulp config --pro ME1202-DT01
原因：切换到别的地方就修改了源码， 预防git pull冲突  


```



# 问题

+ bootstart要手动引入样式？那如何直接引用node_modules里面的样式？

  不能的话，是不是我没必要下载bootstart?