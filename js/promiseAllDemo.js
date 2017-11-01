/**
 * Created by Administrator on 2017/10/31.
 */
(function () {
    function getAPromise(id) {
        let p = new Promise((res,rej) => {
            // rej("rej");
            throw  new Error('fail');
            // res(id);
        });
        p.then(res => res);
        return p;
    }

    let ps = [14].map((id) => {
        return getAPromise(id);
    });

    Promise.all([ps]).then(res => {
        console.log(res);
    }).catch(err => console.log(err));



    // const p1 = new Promise((resolve, reject) => {
    //     resolve('hello');
    // })
    //     .then(result => result)
    //     .catch(e => e);
    //
    // const p2 = new Promise((resolve, reject) => {
    //     throw new Error('报错了');
    // })
    //     .then(result => result);
    //
    // Promise.all([p1, p2])
    //     .then(result => console.log(result))
    //     .catch(e => console.log(e));
})();