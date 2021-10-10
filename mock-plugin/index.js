class MockPLugin {
  constructor() {
    this.hooks = {
      "initialize": this.init.bind(this),
    };
  }

  init() {
    console.log('--------> Execute Init hook <---------');
  }
}

module.exports = MockPLugin;
