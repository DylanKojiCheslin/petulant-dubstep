Template.card.events({
  "click .effect__click": function(event, template){
    $(event.currentTarget).toggleClass("flipped");
  }
});
