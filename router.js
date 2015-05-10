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
    path: '/newevent',
    where: 'server',
    action: function() {
      this.response.writeHead(200, {'Content-Type': 'text/html'});
      this.response.end('hello from server');

      //doSomethingWithParams(this.request.query);
    }
  });

});

