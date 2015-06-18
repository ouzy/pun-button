if (Meteor.isClient) {
  Puns = new Mongo.Collection("puns"); 
}

if (Meteor.isServer) {
  Puns = new Mongo.Collection("puns"); 
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
