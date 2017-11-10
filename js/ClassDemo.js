/**
 * Created by Administrator on 2017/11/7.
 */
(function () {
    function AA(a,b) {
        this.a = a;
        this.b = b;
        return this;
    }
    AA.prototype = {
        constructor:AA,
        printf(){
            console.log(this.a,this.b);
        }
    }
    new AA('hello','world').printf();


    class A{
        constructor (a,b){
            this.a = a;
            this.b = b;
            return this;
        }
        printf(){
            console.log(this.a,this.b);
        }
    }
    let a = new A('hello','world');
    a.printf();

})();