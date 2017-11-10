/**
 * Created by Nobel on 2017/11/6.
 */
(function () {
    var d1 = {a:1};
    var d2 = {b:2};
    var obj = {};
    obj[d1] = 1;
    obj[d2] = 2;
    // console.log(obj);
    //[object Object]: 2

    let map = new Map([
        ['a',1],
        ['b',2]
    ]);
    console.log(map);
    console.log(map.size);
})();