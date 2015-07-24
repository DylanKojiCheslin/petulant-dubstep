Template.updateCard.helpers({
  selectedCardDoc: function () {
    return Card.findOne(Session.get("selectedCardId"));
  }
});
