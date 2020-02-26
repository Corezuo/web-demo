### 请求优化

1.减少http请求：javascript合并（1，2，3），css合并，图片合并。
2.使用CDN内容分发。
3.添加Expire/Cache-Control头
4.启用Gzip压缩。
5.将css放在页面最上面：即head标签中。
6.将css和JavaScript作为外部文件引用。
7.减少DNS查询：比如将文件都放在同一个服务器上。
8.压缩css和javascript。
9.避免重定向：增加了浏览器到服务器的访问次数。
10.配置实体标签：
11.使用ajax缓存

	
### 媒体查询（Media Queries）

1.Media Queries能在不同的条件下使用不同的样式，使用页面达到不同的渲染效果。
2.媒体类型(Media Type)
    1）w3c总共列出了10种媒体类型：
        screen：主要用于彩色电脑屏幕；其他类型参见：https://www.w3.org/TR/CSS2/media.html#media-types
    2）引入媒体类型方法有多种：
        link方式：<link rel="stylesheet" type="text/css" href="../css/print.css" media="print" />
        xml方式：<?xml-stylesheet rel="stylesheet" media="screen" href="css/style.css" ?>
        @import方式
            a.在CSS样式文件中调用另一个CSS样式文件：@import url("css/reset.css") screen;
            b.在<style>...</style>中调用：<style type="text/css"> @import url("css/style.css") all;</style>
        @media方式
            a.样式文件中使用：
            @media screen{
                选择器{
                    属性：属性值；
                }
            }
            b.在<style>...</style>中调用：
            <style type="text/css">
                @media screen{
                    选择器{
                        属性：属性值；
                    }
                }
            </style>
3.媒体特性
    1）常用的特性w3c共列出来13种，具体参阅：https://www.w3.org/TR/css3-mediaqueries/#media1
    2）屏幕最大宽度Max Width或屏幕最小宽度Min Width：
            <link rel="stylesheet" media="screen and (max-width:600px)" href="small.css" type="text/css" />
    3）多个Media Queries使用：
            <link rel="stylesheet" media="screen and (min-width:600px) and (max-width:900px)" href="style.css" type="text/css" />
    4）设备屏幕的输出宽度Device Width：
            <link rel="stylesheet" media="screen and (max-device-width: 480px)" href="iphone.css" type="text/css" />
            其中：表示iphone.css样式适用于最大设备宽度为480px，max-device-width所指的是设备的实际分辨率，也就是指可视面积分辨率。
    5）not关键字
            <link rel="stylesheet" media="not print and (max-width: 1200px)" href="print.css" type="text/css" />
            not关键字是用来排除某种制定的媒体类型，换句话来说就是用于排除符合表达式的设备。
    6）only关键字
        <link rel="stylesheet" media="only screen and (max-device-width:240px)" href="android240.css" type="text/css" />
        only用来定某种特定的媒体类型，可以用来排除不支持媒体查询的浏览器。
    7）其他：
        1.如果没有明确指定Media Type，那么其默认为all。
        2.使用逗号（，）被用来表示并列或者表示或：
            <link rel="stylesheet" type="text/css" href="style.css" media="handheld and (max-width:480px), screen and (min-width:960px)" />
            上面代码中style.css样式被用在宽度小于或等于480px的手持设备上，或者被用于屏幕宽度大于或等于960px的设备上。
            

> 分辨率

1.显示分辨率：指显示器所能显示的像素有多少。
2.图像分辨率（PPI）：
    定义：指单位英寸中包含的像素点数；换句话就是一个对角线长度为1英寸的正方形内所拥有的像素数。
        计算：PPI = 根号（横向的平方 + 纵向的平方）/ 屏幕尺寸
3.像素px是没有实际的物理尺寸的，是一个相对单位，表现为一个色块。

设备像素比devicePixelRatio：
1.PPI就是每英寸内有多少像素点，这个像素点就是设备像素（物理像素）。
2.设备独立像素：
    a.独立于设备的用于逻辑上衡量像素的单位，与屏幕无关。
    b.可以通过screen.width/height属性来获取设备独立像素值（css像素），
    c.无论手机是否切换到横屏，获取的值不变。所以通过上面获取的是设备独立像素，而不是设备的分辨率。
3.设备像素比（dpr）＝ 物理像素 / 设备独立像素  //在某一方向上，x方向或者y方向。
    示例：
        iphonex 屏幕分辨率 2436*1125， 
                ppi：458
        screen.width/height：812*375  （屏幕宽度/高度）
        设备像素比：3
4.1px的css像素并不一定等于1px的物理像素；决定用几个物理像素去显示1px的css像素，这个规则就是设备像素比。
5.切图要分为 2x和3x用于不同的设备，通过media query适配。
6.图片的默认的高度px 不等于通过css 设定的高度px。

> viewport（视口）

元素：<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
    1）layout viewport：是网页的所有内容，他可以全部或者部分展示给用户。
    2）visual viewport：就是当前显示给用户内容的窗口，你可以拖动或者放大缩小网页。
    3）属性值：
        width        ：设置layout viewport的宽度，使用device-width表示设备的宽度。
        initial-scale：页面首次显示时的缩放级别，取值 1.0页面无缩放。
        user-scalable：是否可对页面进行缩放，默认yes 允许，no 禁止缩放。

> 字体

1.手机系统有自己默认的字体，且都不支持微软雅黑，中文可以使用默认，数字和字母使用如下：
    body{font-family:Helvetica;}
2.腾讯中文字体：
    方正兰亭中黑简   FZLanTingHeiS-B
    方正兰亭黑简     FZLanTingHeiS-M
    方正兰亭刊黑简   FZLanTingHeiS-R
    方正兰亭超细黑简 FZLanTingHeiS-L
3.图标字体的制作：
    1）制作icon.svg 矢量图。
    2）工具网站：https://icomoon.io/ 

lib-flexible：
    原理：js会根据不同的设备添加不同的data-dpr值，同时会给html加上对应的font-size的值。
    其中：
    1）使用rem指相对于根元素的字体大小的单位。
    2）字号仍使用px作为单位。使用[data-dpr]属性来区分不同dpr下的文本字号大小。
    3）10px  = 1rem 在根元素（font-size = 10px的时候）
    参考：https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html


flexible的方案已过时，新方案：
    1）实现页面适配：通过PostCSS的插件postcss-px-to-viewport把px转换成vw。
    2）更好的实现长宽比，特别是针对于img、vedio和iframe元素，通过PostCSS插件postcss-aspect-ratio-mini来实现。
    3）解决1px的问题，使用PostCSS插件postcss-write-svg,自动生成border-image或者background-image的图片。
    参考：https://www.w3cplus.com/css/vw-for-layout.html

> 解决IOS不能使用jquery的ON事件：

1.不使用document，绑定到dom元素上：
    $(".btn").on("click",function(){});
    // 问题：新增元素的事件绑定不生效。
2.利用css解决，给dom元素加上手型：
    .slid{ cursor: pointer; }
3.元素上面加一个空的onclick=""事件

> 浏览器内核

IE浏览器内核        Trident内核，也是俗称的IE内核
Chrome浏览器内核    统称为Chromium内核或Chrome内核，以前是Webkit内核，现在是Blink内核
Firefox浏览器内核   Gecko内核，俗称Firefox内核
Safari浏览器内核    Webkit内核
Opera浏览器内核     最初是自己的Presto内核，后来加入谷歌大军，从Webkit又到了Blink内核

浏览器内核识别码
-ms                IE内核识别码
-moz               火狐firefox内核识别码
-webkit            谷歌【chrome】/苹果【safari】内核识别码
-o                 欧朋【opera】内核识别码