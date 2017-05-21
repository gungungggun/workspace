export default class Hello {
  say() {
    console.log('Hello Webpack!!');
  }

	say2(){
       var hello = new Hello2();
		hello.say();
	}
}

class Hello2 {
  say() {
    console.log('Hello2 Webpack!!');
  }
}
