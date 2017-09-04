export default class Man {
  constructor(name) {
    this.name = name
  }

  say() {
    console.log('I\'m ' + this.name)
  }
}

export class Woman {
  constructor(name) {
    this.name = name
  }

  say() {
    console.log('I\'m ' + this.name + '.:)')
  }
}
