import socket
import threading

# 服务器配置
HOST = '127.0.0.1'
PORT = 12345

# 存储连接的客户端信息
clients = []


def handle_client(client_socket, addr):
    """
    处理单个客户端的函数
    """
    print(f"Accepted connection from {addr}")
    
    # 将客户端信息存储到列表中
    clients.append({"socket": client_socket, "address": addr})
    
    try:
        while True:
            # 接收客户端发送的数据
            data = client_socket.recv(1024)
            if not data:
                break
            
            # 处理收到的数据
            print(f"Received data from {addr}: {data.decode('utf-8')}")
            
            # 这里可以添加具体的业务逻辑
            
    except Exception as e:
        print(f"Error handling connection from {addr}: {str(e)}")
    finally:
        # 关闭客户端连接
        client_socket.close()
        print(f"Connection from {addr} closed")


def start_server():
    """
    启动服务器
    """
    # 创建套接字对象
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    
    try:
        # 绑定主机和端口
        server_socket.bind((HOST, PORT))
        # 监听连接，设置最大连接数
        server_socket.listen(5)
        
        print(f"Server listening on {HOST}:{PORT}")
        
        while True:
            # 等待客户端连接
            client_socket, addr = server_socket.accept()
            
            # 创建一个新线程处理客户端连接
            client_thread = threading.Thread(target=handle_client, args=(client_socket, addr))
            client_thread.start()
            
    except Exception as e:
        print(f"Server error: {str(e)}")
    finally:
        # 关闭服务器套接字
        server_socket.close()


if __name__ == "__main__":
    start_server()
