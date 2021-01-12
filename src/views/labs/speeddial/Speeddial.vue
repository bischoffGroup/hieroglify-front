<template>
  <v-card
    height="700"
    width="100%"
  >
    <v-container fluid>
<!--      <v-speed-dial-->
<!--        v-model="fab"-->
<!--        :top="top"-->
<!--        :bottom="bottom"-->
<!--        :right="right"-->
<!--        :left="left"-->
<!--        :direction="direction"-->
<!--        :open-on-hover="hover"-->
<!--        :transition="transition"-->
<!--        :absolute="true"-->
<!--      >-->
<!--        <template v-slot:activator>-->
<!--          <v-btn-->
<!--            v-model="fab"-->
<!--            color="blue darken-2"-->
<!--            dark-->
<!--            fab-->
<!--          >-->
<!--            <v-icon v-if="fab">-->
<!--              mdi-close-->
<!--            </v-icon>-->
<!--            <v-icon v-else>-->
<!--              mdi-account-circle-->
<!--            </v-icon>-->
<!--          </v-btn>-->
<!--        </template>-->
<!--        <v-btn-->
<!--          fab-->
<!--          dark-->
<!--          small-->
<!--          color="green"-->
<!--        >-->
<!--          <v-icon>mdi-pencil</v-icon>-->
<!--        </v-btn>-->
<!--        <v-btn-->
<!--          fab-->
<!--          dark-->
<!--          small-->
<!--          color="indigo"-->
<!--        >-->
<!--          <v-icon>mdi-plus</v-icon>-->
<!--        </v-btn>-->
<!--        <v-btn-->
<!--          fab-->
<!--          dark-->
<!--          small-->
<!--          color="red"-->
<!--        >-->
<!--          <v-icon>mdi-delete</v-icon>-->
<!--        </v-btn>-->
<!--      </v-speed-dial>-->
        <molecular-speed-dial-download/>
    </v-container>
  </v-card>
</template>

<script>
import MolecularSpeedDialDownload from '@/components/molecules/abstract/MolecularSpeedDialDownload';

export default {
  name: 'Speeddial',
  components: { MolecularSpeedDialDownload },

};
</script>

<style scoped>

</style>
