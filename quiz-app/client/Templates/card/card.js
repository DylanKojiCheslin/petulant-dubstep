Template.card.events({
  "click .effect__click": function(event, template){
    $(event.currentTarget).toggleClass("flipped");
  },
  "click .startEditingCard": function (event, template){
    $(event.currentTarget).parent().toggle(false);
    $(event.currentTarget).parent().parent().children('.cardUpdate').toggle(true);

  },
  "click .submitEditCard": function (event, template){
    $(event.currentTarget).parent().toggle(false);
    $(event.currentTarget).parent().parent().children('.cardOutline').toggle(true);
  }
});
