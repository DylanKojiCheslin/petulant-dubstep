Template.card.events({
  "click .effect__click": function(event, template){
    $(event.currentTarget).toggleClass("flipped");
  },
  "click .startEditingCard": function (event, template){
    $(event.currentTarget).parent().toggle(false);
    $(event.currentTarget).parent().parent().children('.cardUpdate').toggle(true);
    //toggle other sibling submitEditCart
    //$(".submitEditCard").parent().children('.addCard')
  },
  "click .submitEditCard": function (event, template){
    $(event.currentTarget).parent().toggle(false);
    $(event.currentTarget).parent().parent().children('.cardOutline').toggle(true);
  }
});
//
// Template.card.events({
//   "click .effect__click .editCard": function(){
//     Session.set("editedCardId", this._id);
//   }
// });
//
// Template.card.helpers({
//   editedCardDoc: function () {
//     return People.findOne(Session.get("editedCardId"));
//   },
//   isEditedCard: function () {
//     return Session.equals("editedCardId", this._id);
//   },
//   formType: function () {
//     if (Session.get("editedCardId")) {
//       return "update";
//     } else {
//       return "disabled";
//     }
//   },
//   disableButtons: function () {
//     return !Session.get("editedCardId");
//   }
// });
