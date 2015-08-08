Template.rangeFilter.events({

"submit .rangeFilterForm": function(e){


  e.preventDefault();


    var newLowerLimit = parseInt(event.target.lowerQuantity.value);
    var newUpperLimit = parseInt(event.target.upperQuantity.value);


  EasySearch.changeProperty('tags', 'lowerDifficultyLimit', newLowerLimit);

  EasySearch.changeProperty('tags', 'upperDifficultyLimit', newUpperLimit);

  var instance = EasySearch.getComponentInstance({
    index: 'tags'
  });


  instance.paginate(1);
  instance.triggerSearch();
  }
});
