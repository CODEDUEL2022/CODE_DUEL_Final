module.exports = [
  {
    message: 'What is the name of component?',
    name: 'name',
    type: 'input',
    validate: (answer) => {
      if (answer !== '') {
        return true;
      }
    },
  },
];
