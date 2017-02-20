var assert = require("assert");
  http = require('http');
describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('/Sample.txt', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000/Sample.txt', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('/manifest.json', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000/manifest.json', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
describe('/liftpayload.zip', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000/liftpayload.zip', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
describe('/bluemix-lift-slingshot-setup-mac.zip', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000/bluemix-lift-slingshot-setup-mac.zip', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
describe('/bluemix-lift-slingshot-setup-win.exe', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000/bluemix-lift-slingshot-setup-win.exe', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
describe('/bluemix-lift-slingshot-setup-linux.bin', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000/bluemix-lift-slingshot-setup-linux.bin', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('/bluemix-lift-slingshot-setup-mac.zip.SHA-256', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000/bluemix-lift-slingshot-setup-mac.zip.SHA-256', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
describe('/bluemix-lift-slingshot-setup-win.exe.SHA-256', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000/bluemix-lift-slingshot-setup-win.exe.SHA-256', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
describe('/bluemix-lift-slingshot-setup-linux.bin.SHA-256', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000/bluemix-lift-slingshot-setup-linux.bin.SHA-256', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
