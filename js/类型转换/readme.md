# 基本数据类型的转换
1. 转布尔值
2. 转数字
3. 转字符串
4. 原始值转对象

# 对象转原始值
- 转字符串 调用的其实就是Object.prototype.toString()这方法
1. {}.toString() 返回由"[object" 和class （内部属性）和"]" 组成的字符串
2. [].toString()  返回由数组内部元素以逗号拼接的字符串
3. xx.toString() 直接返回字符字面量

- valueOf

let a = new String('123')
a.valueOf()  //打印'123'

用于转换包装类

# ToPrimitive
ToPrimitive(obj,Number) ==>Number({})
1. 如果参数obj为基本类型那么直接返回
2. 否则，调用valueOf 方法，如果得到原始值则返回
3. 否则，调用toString方法，如果得到原始值则返回
4. 否则，报错

ToPrimitive(obj,String) ==>String({})

1. 如果参数obj为基本类型那么直接返回
2. 否则，调用toString 方法，如果得到原始值则返回
3. 否则，调用valueOf方法，如果得到原始值则返回
4. 否则，报错


# 对象转布尔都是true


# 一元运算符 +


# 二元运算符 +
lprim + rprim == To primitive(v1) + primitive(v2)

1. 当+两边有一个是字符串，则按字符串的形式进行拼接
2. 否则转到number进行计算
