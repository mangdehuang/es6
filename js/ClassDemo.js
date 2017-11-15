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



    class B{
        foo(baz){
            bar.call(this,baz);
        }
    }

    function bar(baz) {
        console.log(this,baz);
    }

    new B().foo('test');

    class MyClass1{
        set a(value) {
            // this.a = value;
        }

        get a(){
            // return this.a;
        }
    }

    let my = new MyClass1();
    my.a = '111';
    console.log(my.a);

    class MyClass2{
        static p(){
            console.log('test');
        }
    }
    MyClass2.p();
    // (new MyClass2()).p();

    class Myclass3{
        // prop1 = 1;//不可用
        // static sprop1 = 2;
        constructor(){
            this.prop2 = 2;
            console.log(this.prop1);
        }
    }
    Myclass3.prop3 = 2;

    var o1 = new Myclass3();
    // console.log(o1.prop1);
    console.log(o1.prop2);
    console.log(Myclass3.prop3);
    // console.log(Myclass3.sprop1);

    class MyClass {
         // myProp = {};

        constructor() {
            console.log(this.myProp); // 42
        }
    }
    new MyClass();


    function p1(name) {
        if(new.target === p1){
            this.name = name;
        }else{
            console.log('else');
        }
    }

    var p11 = new p1('111');
    p1.call(p11,'222');


    class Myclass4{
        constructor(name){
            console.log(new.target === Myclass4);
        }
    }

    var m4 = new Myclass4('11');

    class Myclass5{
        constructor(){
            if(new.target !== Myclass5){

            }
        }
    }
})();