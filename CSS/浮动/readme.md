# 块级
1. 默认占据一整行
2. 可以设置宽高


# 行内块
1. 可以同行显示
2. 可以设置宽高

# 行内
1. 可以同行显示
2. 不可以设置宽高


# 浮动
1. 会脱离文档流
2. 文字环绕（最初始的目的）
3. 让块级元素同行显示
4. 浮动可以让行内元素可以设置宽和高
5. 可以使用margin 但是不能使用margin： 0 auto；

# 清除浮动 （清除浮动带来的负面影响）
以让子元素保持他的高度，让父容器不坍塌
1. 给父容器设置高度
2. 在最后一个浮动元素之后添加新的元素，在新元素上做 清除浮动（clear : left） 或者（clear ： both ）
3. 在容器伪元素after上做 清除浮动
4. 在下方被浮动影响的容器上做 清除浮动
5. BFC

# BFC 容器 Block Formatting Context （块级格式化上下文）
- 那些属性可以创建BFC ：
1. float : left || right
2. position : absolute || fixed
3. display: inline-block
4. display: table-cell ...   
5. overflow : auto || hidden || overly || scroll
6. 弹性盒子 （display : flex || inline - flex ）

- BFC的特点：
1. BFC容器在计算高度时，会将浮动元素的高度也计算在内
2. 解决内外margin重叠问题



