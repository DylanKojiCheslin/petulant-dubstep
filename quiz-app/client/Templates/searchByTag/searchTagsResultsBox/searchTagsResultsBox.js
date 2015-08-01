
Template.searchTagsResultsBox.events({
  'click .startEditingCard': function () {
    Session.set("selectedCardId", this._id);
  }
});

//
// Tracker.autorun(function () {
//   Session.get('selectedCardId');
//   function(){
//
//   };
// });
