# map + parseInt 经典题

- 我在解这道题的时候去看了一下MDN文档
   map  支持接收一个callback  返回值是由callback的每一项组成的新数组
   callback 在执行时会接收到 item 当前项  index 下标  array 数组本身
   
   parseInt 就是当前的callback  item  ，  可以选的参数 radix?  进制值

   默认十进制

   0无效，使用10
   1进制 item 为2  NaN
   2进制 item 为3  NaN