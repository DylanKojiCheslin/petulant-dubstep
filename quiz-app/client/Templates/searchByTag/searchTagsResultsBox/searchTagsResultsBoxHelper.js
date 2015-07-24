
Template.searchTagsResultsBox.helpers({
    formType: function () {
    if (Session.get("selectedCardId")) {
      return "update";
    } else {
      return "disabled";
    }
  }
});
