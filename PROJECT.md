1 创建新项目 ：npx create-react-app my-app

2 暴露webpack: yarn eject

3 分离开发、生产环境的webpack并压缩代码：  



## 注意 node-sass安装问题

一般直接yarn add node-sass会下载出错，因为链接问题，所以选择淘宝镜像下载：

yarn add node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

重新下载本份代码时，node-sass可能安装出错就是这个原因 ，所以，需要切换源地址，

或者将package.json的node-sass先删掉，等安装完包后，再切换源下载node-sass

-------------另一种很好的办法：
主要步骤：先在文件的目录下新建一个名为.npmrc的文件，然后写上一行

sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
这行的意思就是将原本应该要到外国下载的node-sass转到下载国内的镜像

保存后，再用yarn(如果你有安装yarn的话)或npm install进行安装依赖即可
