import xmlrpc.client
import datetime
proxy = xmlrpc.client.ServerProxy('http://127.0.0.1:8001/')

#玩家1登录
player1 = proxy.login({'pid':'1', 'id':'1000', 'name': 'jack', 'lev': 16})
print(player1)
#玩家1重新登录
player1 = proxy.login({'pid':'1', 'id':'1000', 'name': 'jack', 'lev': 16})
print(player1)

#玩家2登录
player2 = proxy.login({'pid':'2', 'id':'1000', 'name': 'liu', 'lev': 19})
print(player2)

#玩家1打怪升级
player1['id']='1001'
player1 = proxy.attack(player1)
print(player1)

#查看其它玩家信息
pid='2'
otherplayer = proxy.get_player_info(pid)
print(otherplayer)

#玩家1离线
state = proxy.player_offline(player1)
print(state)


