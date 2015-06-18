Router.configure({
  layoutTemplate: 'home',
})

Template.home.helpers({
  
});

Template.home.events({
  
});

Template.home.events({
  'click .header_text': function () {
  	var array = Puns.find().fetch();
    var total = Puns.find().count();
    var pun_url = '';
    var randomNum = Math.floor((Math.random() * total));
    console.log(randomNum);
    console.log(array[randomNum]);
    pun_url = array[randomNum]["joke"]
    	.toString()
    		.replace(/ /g, "+")
    		.replace(/&/g, "%26")
  			.replace(/>/g, "&gt;")
  			.replace(/!/g, "%21")
  			.replace(/</g, "&lt;")
  			.replace(/'/g, "%27")
  			.replace(/"/g, "%22");


    console.log(pun_url);
    $('.pun').html(array[randomNum]["joke"]);
    $("a.tweet-button").attr("href", "https://twitter.com/intent/tweet?text=" + pun_url)
    //console.log(total);
  }
});