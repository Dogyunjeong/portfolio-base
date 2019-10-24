import ajv from '../utilities/ajv';

export const apiValidator = (value) => {
  // TODO: change it to typeschript with typescript-to-json-shcema
  const schema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
    },
  };
  return ajv.validate(schema, value);
};

export default null;
