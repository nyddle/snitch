Router.map(function() {

  this.route('appEvents', {
    path: '/apps/:app',
    data: function () {
      return { appevents: Events.find({'app' : this.params.app}) };
    },
  });

  this.route('home', {
    path: '/',
    action: function() {
      Router.go('appEvents', { 'appevents' : Events.find({}) });
    }
  });

  this.route('newevent', {
    method: 'POST',
    path: '/newevent',
    where: 'server',
    action: function() {
      console.log(this.request);
      this.response.writeHead(200, {'Content-Type': 'text/html'});
      this.response.end(this.request.body.message);

      Events.insert(this.request.body);
      //doSomethingWithParams(this.request.query);
    }
  });

});

