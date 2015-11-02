export default class Logger {
    /**
     * Fatal errors. Mission critial - application can not run when present.
     * @param {mixed} log
     */
    error(log) {
        return this._log('error', log);
    }
    
    
    /**
     * Warnning only. Should be fixed but application been able to recover.
     * @param {mixed} log
     */
    warn(log) {
        return this._log('warn', log);
    }
    
    
    /**
     * Information only. General info printed.
     * @param {mixed} log
     */
    info(log) {
        return this._log('info', log);
    }
    
    
    /**
     * Debug mode. Print as much as possible to allow quick and easy
     * debugging when needed.
     */
    debug(log) {
        return this._log('debug', log);
    }
    
    
    /**
     * Private method, provides single point of access to the console.log API.
     * prevents mess around the code and a clean way to prevent the output of the log
     * or the sevirity level.
     *
     * @param {string} sevirity
     * @param mixed log
     * @todo consider stacking the log calls, not so important but might be useful for debugging
     * @todo display on debug mode only - currently the whole mode is debug.
     */
    _log(sevirity, log) {
        if ('undefined' !== typeof(console) && 'undefined' !== typeof(console[sevirity])) {
            console[sevirity]([sevirity, log]);
        }
    }
}