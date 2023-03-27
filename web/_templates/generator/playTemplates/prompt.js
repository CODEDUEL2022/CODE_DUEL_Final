module.exports = [
  {
    message: 'What is the name of play page template?',
    name: 'name',
    type: 'input',
    validate: (answer) => {
      if (answer !== '') {
        return true;
      }
    },
  },
];
