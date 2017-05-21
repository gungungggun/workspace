import Hello from './hello';

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log("Hello, I'm " + this.getName());
  }
  getName() {
    return this.name;
  }
}

(function() {

  var hello = new Hello();

  hello.say(); //-> Hello Webpack!!
  hello.say2(); //-> Hello Webpack!!

	var person = new Person('gun');

	console.log(person.sayHello());

})();
