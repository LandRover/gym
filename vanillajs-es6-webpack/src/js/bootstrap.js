import Core from './core';

var bootstrap = () => {
    /* global __webpack_public_path:true */
    __webpack_public_path__ = 'get path here @todo';
    console.log('Bootstrap FIRED');
    
    return Core;
}

window.starter = bootstrap();