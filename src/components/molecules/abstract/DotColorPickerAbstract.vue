<template>
    <v-menu
      :bottom="bottom"
      :right="right"
      :left="left"
      transition="slide-x-transition"
      :close-on-content-click="false"
      @input="colorEmit"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn :color="btnColor" class="dot" v-bind="attrs" v-on="on" icon>
          <v-icon>fas fa-paint-brush</v-icon>
        </v-btn>
      </template>
        <v-row>
          <v-color-picker
            v-model="color"
            hide-inputs
          />
        </v-row>
    </v-menu>
</template>

<script>
import { RGBAToHexA } from '@/utils/colorUtils';

export default {
  name: 'DotColorPickerAbstract',
  props: {
    right: { type: Boolean, required: false, default() { return false; } },
    left: { type: Boolean, required: false, default() { return false; } },
    bottom: { type: Boolean, required: false, default() { return false; } },
    typeReturn: { type: String, required: false, default() { return 'rgba'; } },
    rapidRefresh: { type: Boolean, required: false, default() { return false; } }
  },
  mounted() {
    this.propsValidator();
    this.colorEmit();
  },
  data() {
    return {
      rgba: {
        r: 255, g: 255, b: 255, a: 1
      },
    };
  },
  computed: {
    color: {
      get() {
        return this.rgba;
      },
      set(v) {
        if (this.rapidRefresh) this.colorEmit();
        this.rgba = v;
      },
    },
    btnColor() {
      return `rgba(${this.rgba.r}, ${this.rgba.g}, ${this.rgba.b}, ${this.rgba.a})`;
    }
  },
  methods: {
    propsValidator() {
      if (this.typeReturn !== 'rgba' && this.typeReturn !== 'hexa') {
        throw new Error('Propriedade typeReturn contém valor inválido || !!');
      }
    },
    logs() {
      console.log('oigente');
    },
    colorEmit() {
      let result = this.color;
      if (this.typeReturn === 'hexa') {
        result = RGBAToHexA(this.color.r, this.color.g, this.color.b, this.color.a);
      }
      this.$emit('dotColorPickerAbstractEvent', result);
    }
  }
};
</script>

<style scoped>
.dot {
  width: 35px;
  height: 35px;

}
</style>
