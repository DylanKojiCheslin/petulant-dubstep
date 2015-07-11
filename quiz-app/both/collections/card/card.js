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
    lavel: "Difficulty on a scale of 1 to 100",
    max: 100,
    min: 1,
  }
});

Card = new Mongo.Collection("Card");
Card.attachSchema(CardSchema);
//Card.initEasySearch('tags');
// EasySearch.createSearchIndex('tags', {
//    'collection': Card,
//    'field': "tags",
//    'limit': 10,
//    'use' : 'mongo-db'
//  });
EasySearch.createSearchIndex('tags', {
  'field' : 'tags',
  'collection' : Card,
  // 'limit' : 20,
  'use' : 'mongo-db',
  'props' : {
  'query' : function (searchString, opts) {
    // Default query
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    return query;
    }
  }
});
