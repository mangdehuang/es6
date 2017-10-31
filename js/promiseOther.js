/**
 * Created by Nobel on 2017/10/31.
 */
(function () {
    setTimeout(() => {
        console.log('timer');
    },100);

    Promise.resolve().then(res => {
        console.log('resolve');
    });

    console.log('ttt');
})();