/**
 * Created by Nobel on 2017/11/6.
 */
(function () {
    let s = new Set([1,2,3]);
    // console.log(s.size);
    // console.log(s);
    // console.log(s.add('a').add('b'));
    // console.log(s.delete('a'));
    // console.log(s.delete('b'));
    // console.log(s.has('a'));
    // console.log(s.has('b'));
    // console.log(s.clear());
    // console.log(s.keys());
    // console.log(s.values());
    // console.log(s.entries());

    // s.forEach(function (value,key ,set) {
    //     value = value+2;
    //     console.log('value:'+value +' key:'+key);
    // });
    // console.log(s);

    // s = new Set([1,1,1,23]);
    // console.log(s);
    s = new Set([...s].map(value => value+2));
    console.log(s);
})();