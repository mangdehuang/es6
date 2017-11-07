/**
 * Created by Administrator on 2017/11/7.
 */
(function () {

    // function IteratorD(arr) {
    //     let index = 0;
    //     return {
    //         next(){
    //             return index < arr.length ?
    //                 {value:arr[index],done:false}:
    //                 {value:undefined,done:true};
    //         }
    //     }
    // }
    const  arr = [2,31,3];
    console.log(arr[Symbol.iterator]);//function
    let it = arr[Symbol.iterator]();
    console.log(it.next());

    let [x,y] = arr;
    console.log(x,y);

    let s = 'aaa';
    console.log([...s]);

    let m = new Map();
    m.set('a',1).set('b',2);

    for(let i of s){
        console.log(i);
    }

    for(let i of arr){
        console.log(i);
    }

    for(let [key,value] of m){
        console.log(key,value);
    }

})();