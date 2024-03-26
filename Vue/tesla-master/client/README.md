1. pageXOffset,pageYOffset定义和用法
    pageXOffset 和 pageYOffset 属性返回文档在窗口左上角水平和垂直方向滚动的像素。

    pageXOffset 设置或返回当前页面相对于窗口显示区左上角的 X 位置。pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。

    pageXOffset 和 pageYOffset 属性相等于 scrollX 和 scrollY 属性。

    这些属性是只读的。

    语法
    window.pageXOffset

2. document.documentElement.scrollTop 
   要获取当前页面的滚动条纵坐标位置，用：document.documentElement.scrollTop;

3. document.body.scrollTop 
   网页被卷去的高： document.body.scrollTop;

4. 可见区域高度
   document.documentElement.clientHeight ==> 可见区域高度

5. canvas
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");   // 返回与该canvas元素相关的绘图环境对象
    ctx.fillStyle="#FF0000";    // 	制定该绘图环境在后续的图像填充操作中所使用的颜色、渐变色或图案
    ctx.fillRect(0,0,150,75);   // fillRect() 方法绘制“已填色”的矩形。默认的填充颜色是黑色。context.fillRect(x,y,width,height);