Events = new Mongo.Collection("events");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    events: function () {
      return Events.find({});
    }
  });
}
