module.exports = {

    "publicIP": "47.100.205.134",    //本机的外网IP
    "listenPort": {   //每个服务的监听端口
        "config": 6101,     //配置中心服务
        "manage": 6201,     //管理后台服务
        "monitor": 6301,    //监控中心服务
        "game": 6401,       //游戏服务
        "gateway": 6501,    //网关服务
        "login": 6601,      //登陆服务
    },
    "address": {    //服务地址
        "config": "http://localhost:6101",  //配置服务中心地址
        "monitor": "http://47.100.205.134:6301"  //监控服务中心地址
    },
    "etcd": {   //服务发现中间件配置信息
        "hosts": [  //主机信息
            "http://localhost:2379"
        ],
        "username": "", //用户名
        "password": "", //密码
        "ttl": 10   //租约过期时间
    },
    "game": {    //游戏服的配置信息
        "mongo": {  //mongo数据库信息
            "uri": "mongodb://localhost:27017/game",
            "options": {
                "autoIndex": true,
                "poolSize": 100,
                "bufferMaxEntries": 0,
                "useUnifiedTopology": true,
                "useNewUrlParser": true,
            }
        }
    },
    "monitor": {    //监控中心的配置信息
        "mongo": {  //mongo数据库信息
            "uri": "mongodb://localhost:27017/monitor",
            "options": {
                "autoIndex": true,
                "poolSize": 100,
                "bufferMaxEntries": 0,
                "useUnifiedTopology": true,
                "useNewUrlParser": true
            }
        }
    }
};
