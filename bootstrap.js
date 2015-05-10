// if the database is empty on server start, create some sample data.
Meteor.startup(function () {

  if (Meteor.isServer) {

      Events.remove({});

      if (Events.find().count() === 0) {
        var data = [
          {name: "Meteor Principles",
           app: "app1",
           text: "Some event..."
          },
          {name: "Languages",
           app: "app1",
           text: "Some event..."
          },
          {name: "Favorite Scientists",
           app: "app2",
           text: "Some event..."
          }
        ];

        var timestamp = (new Date()).getTime();
        _.each(data, function(list) {
          var event_id = Events.insert({name: list.name, text: list.text, app: list.app, createdAt: new Date(timestamp) });

        });
      }
  }
});
