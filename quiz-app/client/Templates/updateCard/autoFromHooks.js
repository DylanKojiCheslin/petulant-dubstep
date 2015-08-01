

  AutoForm.hooks({
    updateCardForm: {
      onSuccess:  function(update, result) {
        Session.set("selectedCardId", "" );
      }
    }
  });
