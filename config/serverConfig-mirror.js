module.exports = {

    "publicIP": "139.224.16.218",    //本机的外网IP
    "listenPort": {   //每个服务的监听端口
        "config": 6101,     //配置中心服务
        "manage": 6201,     //管理后台服务
        "monitor": 6301,    //监控中心服务
        "game": 6401,       //游戏服务 16核即 6401-6416
        "gateway": 6501,    //网关服务 cluster模式
        "login": 6601,      //登陆服务 每台启3个实例即 6601-6603
        "pay": 6701,    //支付服务
        "log": 6801,        //日志服务（文华补充下）
        "sdk": 6901,    //sdk服务
    },
    "address": {    //服务地址
        "config": "http://10.10.64.148:6101",  //配置服务中心地址
        "monitor": "http://139.224.16.218:6301"  //监控服务中心地址
    },
    "etcd": {   //服务发现中间件配置信息
        "hosts": [  //主机信息
            "http://10.10.64.148:2379"
        ],
        "username": "", //用户名
        "password": "", //密码
        "ttl": 10   //租约过期时间
    },
    "game": {    //游戏服的配置信息
        "mongo": {  //mongo数据库信息
            "uri": "mongodb://root:%40wGdnd7f%24Xl!WZ%5E%26@dds-uf660a433931fed41.mongodb.rds.aliyuncs.com:3717,dds-uf660a433931fed42.mongodb.rds.aliyuncs.com:3717,dds-uf660a433931fed43.mongodb.rds.aliyuncs.com:3717/mohungames?authSource=admin&replicaSet=mgset-31564573",
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
            "uri": "mongodb://root:%40wGdnd7f%24Xl!WZ%5E%26@dds-uf660a433931fed41.mongodb.rds.aliyuncs.com:3717,dds-uf660a433931fed42.mongodb.rds.aliyuncs.com:3717,dds-uf660a433931fed43.mongodb.rds.aliyuncs.com:3717/monitor?authSource=admin&replicaSet=mgset-31564573",
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
