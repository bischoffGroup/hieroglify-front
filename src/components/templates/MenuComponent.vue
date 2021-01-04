<template>
  <v-list dense>
    <v-list-group no-action @click="push('dashboard')">
      <template slot="activator">
        <v-list-item dense>
          <v-list-item-icon>
            <v-icon>fas fa-tachometer-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
      </template>
    </v-list-group>
    <v-list-group no-action>
      <template slot="activator">
        <v-list-item dense>
          <v-list-item-icon>
            <v-icon dense>fas fa-book</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logs</v-list-item-title>
        </v-list-item>
      </template>
      <v-list-item @click="push('importacoes.erros')" dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-title>Erros</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="push('importacoes.historico')" dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-title>Histórico</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
    <v-list-group no-action>
      <template v-slot:activator>
        <v-list-item dense>
          <v-list-item-icon>
            <v-icon dense>fa-boxes</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Importações</v-list-item-title>
        </v-list-item>
      </template>
      <v-list-item @click="push('import.product.imported')" dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-title>Produtos Importados</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="push('import.material.imported')" dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-title>Materiais Importados</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="push('import.material.nimported')" dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-title>Materiais Não importados</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="push('import.product.nimported')" dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-title>Produtos Não importados</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
    <v-list-group no-action>
      <template slot="activator">
        <v-list-item dense>
          <v-list-item-icon>
            <v-icon dense>fas fa-random</v-icon>
          </v-list-item-icon>
          <v-list-item-title>De/Para</v-list-item-title>
        </v-list-item>
      </template>
      <v-list-item @click="push('classificacoesMateriais')" dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-title>Classificações de Materiais</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="push('classificacoesProdutos')" dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-title>Classificações de Produtos</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
    <v-list-group no-action>
      <template slot="activator">
        <v-list-item dense>
          <v-list-item-icon>
            <v-icon dense>fas fa-box-open</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Carga de dados</v-list-item-title>
        </v-list-item>
      </template>
      <v-list-item @click="push('dataload.productInformation')" dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-title>Ficha Téc.</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="push('dataload.product')" dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-title>Combinações</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="push('dataload.productSize')" dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-title>Grades</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  methods: {
    push(name) {
      if (name !== this.$router.history.current.name) {
        console.log("foi", name);
        this.$router.push({ name: name });
      }
    }
  }
};
</script>
