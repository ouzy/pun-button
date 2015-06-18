

Template.home.rendered = function () {
  //console.log(Puns.find({}).count());
};



Template.body.events({
  ".header_text": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;

    

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});

Template.body.helpers({
  joke: function () {
    // Show newest tasks first
    return Puns.find({}, {sort: {createdAt: -1}});
  }
});

