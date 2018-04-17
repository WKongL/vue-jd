## 京东金融
本项目使用vue(2.5.9) + sass + webpack（3.10.0）构建来完成，学习如何利用组件化、CSS的模块化来开发，如何使用webpack来构建项目。

### 项目收获
#### 自适应
自适应是在开发手机端的时候都会遇到的问题，因为市面上有多种的机型需要适配的。而本项目是在vue中配置px2rem-loader把px转换成rem，然后通过js计算font-size值。项目使用的js请参考[这里](https://github.com/imochen/hotcss)
> [CSS像素、物理像素、逻辑像素、设备像素比、PPI、Viewport](https://github.com/jawil/blog/issues/21)

#### webpack
通过自己使用webpack来构建项目，了解到从0开始的一个基本过程。文件的入口和输出，期间通过插件提取css，html自动注入js文件等。提高了后续开发的效率。
entry    配置入口

module    配置loader

plugins    配置插件

output    配置输出

resolve    查询文件

devServer    开启服务
#### 组件化
组件化不合理，在后续开发中将会难以把控。在本项目中，根据需求抽象出一个简单的组件，该组件只有一个title和一个slot插槽，还有一些基本的样式。这样再后续开发中只要把自己的内容放到插槽中即刻使用，可复用，可继承。而遇到一些功能性，样式上一致的模块也能合拼一个组件出来。
#### CSS Module
CSS Module是保证相同的类名根据不同的路径和组件名称得到不同的 md5 值，保证了最终的类名隔离。

### 项目总结
在本项目中学习到组件化，webpack的构建工作，自适应等。一个好的组件化，可以让后续的开发节省不少的时间。自己使用webpack构建项目，也能容易把控和添加自己所需要的插件。当然该项目还有一些的地方可以改进，vue-router的懒加载，数据获取后端而不是通过data来模拟，vuex的使用等等，希望能通过日后的学习，能逐步完善本项目。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9000
npm start

# build for production with minification
npm run build
```