/**
 * Created by Administrator on 2017/10/31.
 * promise简单使用
 * 用图片加载完 来判断成功
 * append一个图片
 */
(function () {
    let pics = ['pic.jpg','pic.jpg'];
    var asyImg = function (url) {
        let p = new Promise((res,rej) => {
            const pic = new Image();
            pic.src = url;
            pic.onload = () => res(pic);
            pic.onerror = () => rej();
            console.log('333');
        });
        p.then( res => {
            document.body.appendChild(res);
            console.log('234');
            },
            rej => console.log('error')
        );
        console.log('456');
        return p;
    };
    asyImg(pics[0]);
})();
/*
   333
   456
   234
 */