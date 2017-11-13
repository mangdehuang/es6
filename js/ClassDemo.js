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
    console.log(typeof A);
    console.log(A.prototype);
    console.log(Object.keys(A.prototype));


    console.log(a.hasOwnProperty('a'));
    console.log(a.hasOwnProperty('printf'));
    console.log(A.prototype.hasOwnProperty('printf'));
    console.log(a.__proto__.hasOwnProperty('printf'));

    const myClass = class Me{
        getClassName(){
            return Me.name;
        }
    }
    console.log(new myClass().getClassName());
})();