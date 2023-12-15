import datetime
from xmlrpc.server import SimpleXMLRPCServer
import xmlrpc.client
import _thread
import time

#消息列表
g_msg=[]
#线上玩家列表
g_player_list={}

sm_attack_monster = '1001'
sm_get_playerlv = '1002'
sm_player_offline ='1003'


#服务器业务逻辑处理
def _offline(player):
    g_player_list[player['pid']]={}

def attack_monster(msg):
    print('打怪')
    g_player_list[msg['pid']]['lev']= g_player_list[msg['pid']]['lev'] + 30
    return g_player_list[msg['pid']]['lev']

def get_player_lv(pid):
    print('获取玩家等级')
    return g_player_list[pid]['lev']#g_player_list[msg['pid']]['lev']

def player_offline(msg,ptr_func):
    print('玩家下线')
    #函数指针用发 ptr_func指向内部函数_offline
    ptr_func(msg)
    return 'ok'

def operator(id,msg):
    if sm_attack_monster == id:
        return attack_monster(msg)
    if sm_get_playerlv == id:
        return get_player_lv(msg)
    if sm_player_offline == id:
        return player_offline(msg,_offline)

#服务器消息处理
def deal_msg(msg):
    g_player_list[msg['pid']]=msg
    msgid = g_player_list[msg['pid']]['id']
    print('处理消息号为:' + g_player_list[msg['pid']]['id'])
    operator(msgid,g_player_list[msg['pid']])

def login(dir):
    g_msg.append(dir)
    time.sleep(2)
    print('玩家:'+ dir['name'] + '登录成功！')
    return g_player_list[dir['pid']]

def attack(dir):
    g_msg.append(dir)
    time.sleep(2)
    return g_player_list[dir['pid']]

def player_offline(player):
    g_msg.append(player)
    time.sleep(2)
    return 'ok'

def get_player_info(pid):
    return get_player_lv(pid)

def deal_player():
    while True:
        global g_msg
        if len(g_msg)>0:
            msg = g_msg.pop()
            deal_msg(msg)

# 创建线程处理客户端消息
try:
   _thread.start_new_thread(deal_player, ())
except:
   print ("Error: 无法启动线程")

localhost='127.0.0.1'
server = SimpleXMLRPCServer((localhost, 8001))
print('Listening on port 8000...')
server.register_function(login, "login")
server.register_function(attack, "attack")
server.register_function(player_offline, "player_offline")
server.register_function(get_player_info, "get_player_info")
server.serve_forever()

#服务器run
#while 1:
   #pass