# HTTP/0.9(超文本传输协议)
1. 客户端发送GET请求，请求一个根路径 /index.html
2. 服务器接收到请求后，读取对应的html文件，以ASCII的字符流返回给客户端

- 特点：
1. 只有请求行，没有请求头和请求体
2. 没有响应头
3. 传输的内容是以ASCII的字符流

# HTTP/1.0
 相比于0.9，1.0版本可以支持多种类型文件的下载或者传输

 通过引入请求头和响应头来让客户端和服务端能更加深入的交流，key-value的形式

 - 为什么有了请求头和响应头就能支持多种文件的数据传输

 请求头：accept：text/html
    accept-encoding:gzip,deflate,br
    accept-language:zh-CN

 响应头：content-encoding:br
    content-type:text/html; charset=utf-8

# HTTP/1.1
    持久连接，一个TCP连接建立，可以传输多个HTTP请求，减少了大量TCP连接和断开连接带来的开销

    Connenction:keep-alive || close(默认开启持久连接，也可以关掉)

    浏览器默认支持 6个 TCP持久连接

  - 队头阻塞问题
    1. 管线化：批量发请求（放弃）一次让所有http请求全部都发出去

    
  - 虚拟机：
    请求头：Host 字段
    区分域名地址

  - 动态内容
    (1.0是这么干的，服务端告诉客户端要传的数据有多大，但是如果动态的内容的话就不知道大小)content-Length：1024

    Chunk transfer 机制
    这个就是用来处理动态内容的
    将数据分割成若干个任意大小的数据块，
    每个数据标记好长度，最后发送一个长度为0的数据块来标志发送完毕

# HTTP/2.0
    1.1 的问题：带宽用不满
1. TCP的慢启动：拥塞控制导致一定会慢启动，慢启动导致页面关键资源加载时间推迟
2. 多条TCP连接竞争带宽，导致每条TCP连接中能被分配的带宽大大降低
3. 队头阻塞问题，前一个请求延迟的话，后一个请求便无法发送，导致带宽浪费

- 2.0多路复用
   1. 一个域名只使用一个TCP长连接
   2. 将每一个请求分成一帧一帧的数据进行传输，并打上编号，同时发送给服务端，且可以在重要资源请求中标记为加急
   服务端接收到带有各种编号的数据帧后可以区分哪个数据帧加急，优先整理和响应该请求的数据帧
   （通过引入了二进制分帧层实现多路复用）        请求和响应做好对应的标记


# HTTP/HTTPS
    请求体的样子 GET /images/logo.png HTTP/1.1

    - GET VS POST  (副作用和幂等)   副作用：影响到服务器的资源  幂等：注册10次和20次，不是幂等，但如果更改文章10次和20次，是幂等
    1. GET用于无副作用，幂等的场景，POST用于有副作用，不幂等的场景
    搜索关键字，GET
    注册账号，POST
    2. GET请求能缓存，POST不能
    3. POST相对安全一点，POST的参数是在请求体中，GET的参数，是拼接在URL中
    4. URL的长度是有限的，所以GET请求会受影响
    5. POST支持更多的编码类型，且不对数据类型做限制

- HTTP状态码
    200 204 205 206

    301 302 303 304

    400 401 403 404

    500 501 503

- TLS协议（加密协议）
    HTTPS = HTTP + TLS


    1. 对称加密
    双方都有相同的密钥，双方都知道如何加密和解密

    问题：如何让双方都具有相同的密钥，通过网络传输该密钥，一但被截获，之后的内容，加密也无意义


    2. 非对称加密
    服务端生成公钥和私钥，将公钥发布出来，客户端接收到公钥后生成一个密钥，再利用公钥加密该密钥，传输给服务端，服务端用独有的私钥解密，得到密钥

# HTTP/3.0
2.0的缺陷
1. TCP的队头阻塞：当单个数据包丢失时，TCP会暂停后续的包的传输，先重传丢失的包数据
2. TCP的慢启动

- TCP协议僵化
    TCP常用于物理层，一旦TCP修改，路由器，交换机，防火墙等等全部失效，需要更新

- HTTP3.0基于 
- QUIC协议：基于UDP，在UDP上实现了类似于TCP的多路数据流，可靠性传输等功能
    1. 实现了类似于TCP的流量控制和可靠性传输
    2. 集成了TLS加密功能在里面
    3. 实现了HTTP2中的多路复用






 