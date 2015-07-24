Template.updateCard.helpers({

  Card: function () {
    return Card.findOne({_id: this.params._id});
  }
});
