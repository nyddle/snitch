Events = new Mongo.Collection("events");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
  });
}
/*
    events: function (app) {
      if (app) { 
        return Events.find({'app':app})
      } else {
        return Events.find({});
      }
    }
*/

