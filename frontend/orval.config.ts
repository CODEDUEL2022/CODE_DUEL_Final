module.exports = {
  codeduel: {
    output: {
      mode: 'tags-split',
      target: 'src/clients/index.ts',
      client: 'swr',
      mock: true,
    },
    input: {
      target: '../schema/openAPI.yaml',
    },
  },
};
