/**
 * Created by Administrator on 2017/10/31.
 * 将p1作为第二个promise对象的 res函数的参数  p1决定状态了p2的状态
 */
(function () {
    let p1 = new Promise((res,rej) => {
        setTimeout(() => rej(new Error("fail")),3000);
    });
    let p2 = new Promise((res,rej) => {
        setTimeout(() => res(p1),1000);
    });
    p2.then(res => console.log(res)).catch(error => console.log(error));
    //Error:fail

    // new Promise((res,rej) => {
    //    return res(1);
    //     console.log("2");
    // }).then(res => {
    //     console.log(res);
    // });
    //2  1
})();