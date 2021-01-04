const valuesFromStoreMixin = {
  methods: {
    getValueFromStoreWithPath() {
      return this.pathToValues.split(".").reduce((o, k) => {
        return o && o[k];
      }, this.$store.state);
    },
    getValueFromStoreWithStringPath(string) {
      return string.split(".").reduce((o, k) => {
        return o && o[k];
      }, this.$store.state);
    },
    replaceValue(object, path, value) {
      const stack = path.split(".");
      while (stack.length > 1) {
        object = object[stack.shift()];
      }
      object[stack.shift()] = value;
    },
    getDeepValueWithArrayPath(object, pathArray) {
      if (pathArray.length === 1) return object[pathArray[0]];
      for (let i = 0; i < pathArray.length; i++) {
        const clonePath = [...pathArray];
        clonePath.shift();
        return this.getDeepValueWithArrayPath(object[pathArray[i]], clonePath);
      }
    }
  }
};
export default valuesFromStoreMixin;
