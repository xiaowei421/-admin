//http请求中常用的响应头的含义：
/*
    Location:                       这个头配合302状态码使用， 告诉用户端找谁。
    Server:                         服务器通过这个头， 告诉浏览器服务器的类型
    Content - Encoding:             服务器通过这个头， 告诉浏览器数据采用的压缩格式。
    Content - Length:               服务器通过这个头， 告诉浏览器回送数据的长度。
    Content - Language：            服务器通过这个头， 告诉服务器的语言环境。
    Content - Type:                 服务器通过这个头， 回送数据的类型
    Last - Modified:                服务器通过这个头， 告诉浏览器当前资源的缓存时间。
    Refresh:                        服务器通过这个头， 告诉浏览器隔多长时间刷新一次。
    Content - Disposition:          服务器通过这个头， 告诉浏览器以下载的方式打开数据。
    Transfer - Encoding:            服务器通过这个头， 告诉浏览器数据的传送格式。
    ETag:                           与缓存相关的头。
    Expires:                        服务器通过这个头， 告诉浏览器把回送的数据缓存多长时间。 - 1 或0不缓存。
    Cache - Control和Pragma：       服务器通过这个头， 也可以控制浏览器不缓存数据。
    Connection:                     服务器通过这个头， 响应完是保持链接还是关闭链接。
    Date:                           告诉客户机， 返回响应的时间。
*/