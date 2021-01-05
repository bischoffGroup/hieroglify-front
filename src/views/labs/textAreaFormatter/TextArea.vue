<template>
  <v-container>
    <v-content>
      <molecular-notify-snack-bar />
      <v-row>
        <v-col class="col-6">
          <v-card>
            <v-card-title>Formatter</v-card-title>
            <v-card-text>
              <v-textarea
                outlined
                label="Outlined textarea"
                @change="changeData"
                v-model="texto"
              ></v-textarea>
              <v-btn @click="changeData">click</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="col-6">
          <v-card>
            <v-card-title>Display</v-card-title>
            <v-card-text>
              <atomic-pre-default :concrete-values="formatter" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
import AtomicPreDefault from '@/components/atoms/concrete/pre/AtomicPreDefault';
import MolecularNotifySnackBar from '@/components/molecules/MolecularNotifySnackBar';

export default {
  name: 'TextArea',
  components: { MolecularNotifySnackBar, AtomicPreDefault },
  data() {
    return {
      texto: '',
      formatter: {},
    };
  },
  methods: {
    changeData() {
      this.formatter = JSON.stringify(this.texto.split('\n'));
    },
    clear() {
      this.texto = '';
    },
  },
};
</script>

<style scoped></style>
