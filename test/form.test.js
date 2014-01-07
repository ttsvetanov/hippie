describe('#form', function() {
  it('sets the content-type and accept headers to form', function(done) {
    api()
    .form()
    .opts(function(options) {
      options.headers['Content-Type'].should.eq('application/x-www-form-urlencoded; charset=utf-8');
      done();
    });
  });

  it('converts the data to querystring', function(done) {
    var data = { foo: 'bar' };

    api()
    .form()
    .post('/send-form')
    .send(data)
    .end(function(err, res) {
      var body = JSON.parse(res.body);

      should.not.exist(err);
      body.foo.should.eq(data.foo);

      done();
    });
  });
});
