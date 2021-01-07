export const hateoas = (hateoasParam, response) => {
  const keys = Object.getOwnPropertyNames(response);
  if (keys.includes(hateoasParam)) return response[hateoasParam];
  for (let i = 0; i < keys.length; i++) {
    if (typeof response[keys[i]] === 'object') {
      return hateoas(hateoasParam, response[keys[i]]);
    }
  }
};
