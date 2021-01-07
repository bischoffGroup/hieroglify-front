const validationRequirementsMixin = {
  mounted() {
    this.valid();
  },
  methods: {
    valid() {
      const fields = this.validationRequirements;
      if (fields === undefined) {
        throw new Error('¿MIXIN? field validationRequirements not found');
      } else {
        let validation = false;
        fields.forEach(field => {
          if (this[field] !== undefined) validation = true;
        });
        if (validation === false) {
          fields.forEach(field => {
            throw new Error(`¿MIXIN? value of ${field} field not found`);
          });
        }
      }
    }
  }
};

export default validationRequirementsMixin;
