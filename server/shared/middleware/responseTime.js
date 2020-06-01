/**
 * message response time metric
 */
const reportFormat = require('../metrics/reportFormat');
const command = require('../metrics/command');

/**
 *
 * @param app object server entity
 * @returns function
 */
module.exports = function (app) {

    return function (req, res, next) {

        req.__begintime__ = Date.now();
        next();

        if (req.__begintime__) {
            const span = Date.now() - req.__begintime__;
            if (span > 1000) {
                const report = reportFormat.Timeout(app._serviceId, req, span);
                app.NotifyMonitor('/error/add', report);
            }
            command.record(req.originalUrl, span);
            delete req.__begintime__;
        }
    }
};