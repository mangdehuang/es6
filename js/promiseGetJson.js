/**
 * Created by Administrator on 2017/10/31.
 */
(function () {
    var getJson = function (url) {
        return new Promise(function (res,rej) {
            let client = new XMLHttpRequest();
            client.open("GET",url);
            client.onreadystatechange = handler;
            client.responseType = 'json';
            client.setRequestHeader("Accept","application/json");
            client.send();

            function  handler() {
                if(this.readyState !== 4){
                    return;
                }
                if(this.status === 200){
                    res(this.response);
                }else{
                    rej(new Error());
                }
            }
        });
    };

    // getJson('../data/data.json').then(res => {
    //     console.log(res);
    // },err => {
    //     console.log(err);
    // }).then();
    //
    // /**
    //  * 链式调用
    //  */
    // getJson('../data/data.json')
    //     .then(res => {
    //         console.log('1');
    //         console.log(res);
    //         return getJson(res.url);
    //     }).then(res => {
    //         console.log('2');
    //         console.log(res);
    //     }).catch(err => console.log(err));
    //
    //
    // new Promise((res,rej) =>{
    //     res('ok');
    //     throw new Error('test');
    // }).then(res => console.log(res))
    //     .catch(error => console.log(error));


    getJson('../data').then(res => {
        return 'success';
    }).then(res => {
        console.log(res);
        throw  new Error('error');
    }).catch(error => console.log(error));
})();