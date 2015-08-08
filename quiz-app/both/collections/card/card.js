CardSchema = new SimpleSchema({
  question: {
    type: String,
    label: "Question",
    max: 600,
    min: 2
  },
  answer: {
    type: String,
    label: "Answer",
    max: 1000,
    min: 1
  },
  tags: {
    type: [String],
    label: "Tags",
    max: 300,
    min: 1
  },
  addedBy: {
    type: String,
    autoValue: function(){
      if (Meteor.userId()) {return Meteor.user().username}
      else {return "anonymous"}
      }
  },
  difficulty: {
    type: Number,
    label: "Difficulty on a scale of 1 to 100",
    max: 100,
    min: 1
  }
});

Card = new Mongo.Collection("Card");
Card.attachSchema(CardSchema);

EasySearch.createSearchIndex('tags', {
  'field' : 'tags',
  'collection' : Card,
  'use' : 'mongo-db',
  'props' : {
    upperDifficultyLimit : 0,
    lowerDifficultyLimit : 0
  },
  'query' : function (searchString, opts) {
    // Default query
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
    if (this.props.lowerDifficultyLimit) {
      query.difficulty = {$gt: this.props.lowerDifficultyLimit};
    }
    if (this.props.upperDifficultyLimit) {
      query.difficulty = {$lt: this.props.upperDifficultyLimit};
    }
    return query;
    }
});
