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
    type: String,
    label: "tags separated by comma",
    max: 300,
    min: 1
  }
});

Card = new Mongo.Collection("Card");
Card.attachSchema(CardSchema);
