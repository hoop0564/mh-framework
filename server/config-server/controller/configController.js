const Code = require('../../shared/server/Code');
const serverConfig = require('../../../config/serverConfig');
const fs = require('fs');

let logic = module.exports;

const configServices = [
    Code.ServiceType.login,
    Code.ServiceType.gateway,
    Code.ServiceType.game,
    Code.ServiceType.pay,
    // Code.ServiceType.sdk,
];

logic.getConfig = function ({type}, cb) {

    let result = {
        code: Code.OK,
        etcd: serverConfig.etcd,
    };

    if (configServices.includes(type)) {
        const path = `${__dirname}/../../../config/${type}-configs`;
        fs.readdirSync(path).forEach(function (fileName) {
            const filePath = path + '/' + fileName;
            result[fileName] = fs.readFileSync(filePath, 'utf8');
        });
    }

    switch (type) {
        case Code.ServiceType.monitor:
            result.mongo = serverConfig.monitor.mongo;
            break;

        case Code.ServiceType.game:
            result.mongo = serverConfig.game.mongo;
            break;

        default:
            break;
    }

    cb(null, result);
};
