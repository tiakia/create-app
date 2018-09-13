/*
 *  功能：防抖函数封装
 *  create by tiankai on 2018-07-25 17:41
 */
export function debounce(fn, interval = 300){
    var timeout = null;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(context, args);
        }, interval);
    };
}
