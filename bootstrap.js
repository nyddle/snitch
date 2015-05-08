// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Events.find().count() === 0) {
    var data = [
      {name: "Meteor Principles",
       text: "Some event..."
      },
      {name: "Languages",
       text: "Some event..."
      },
      {name: "Favorite Scientists",
       text: "Some event..."
      }
    ];

    var timestamp = (new Date()).getTime();
    _.each(data, function(list) {
      var event_id = Events.insert({name: list.name, text: list.text, createdAt: new Date(timestamp) });

    });
  }
});
