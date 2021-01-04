<template>
  <div>
    <v-app id="sandbox" v-if="me">
      <v-navigation-drawer
        v-model="primaryDrawer.model"
        :clipped="primaryDrawer.clipped"
        :floating="primaryDrawer.floating"
        :mini-variant="primaryDrawer.mini"
        :expand-on-hover="primaryDrawer.expandOnHover"
        :permanent="primaryDrawer.type === 'permanent'"
        :temporary="primaryDrawer.type === 'temporary'"
        app
        overflow
      >
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-content :align="`center`">
              <div>
                <v-img
                  src="./assets/hieroglyfy_white_128px.png"
                  aspect-ratio="1"
                  max-width="128"
                  v-if="$vuetify.theme.dark"
                />
                <v-img
                  src="./assets/hieroglyfy_128px.png"
                  aspect-ratio="1"
                  max-width="128"
                  v-else
                />
              </div>
              <v-list-item-title v-if="!primaryDrawer.mini"
                >HierogliFY</v-list-item-title
              >
              <v-list-item-subtitle v-if="!primaryDrawer.mini">{{
                version
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-divider />
        <menu-component />
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="logout">
              <v-icon dense>fas fa-sign-out-alt</v-icon>
            </v-btn>
          </div>
          <div class="pa-2">
            <v-dialog v-model="dialog" width="80%">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" block>
                  <span v-if="!primaryDrawer.mini">Configurações</span>
                  <v-icon v-else>fa-sliders-h</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-container fluid>
                  <v-row align="center" justify="center">
                    <v-col cols="10">
                      <v-card>
                        <v-card-text>
                          <v-row>
                            <v-col cols="12" md="6">
                              <span>Scheme</span>
                              <v-switch
                                v-model="$vuetify.theme.dark"
                                @change="$vuetify.theme.dark"
                                primary
                                label="Dark"
                              />
                            </v-col>
                            <v-col cols="12" md="6">
                              <span>Drawer</span>
                              <v-radio-group
                                v-model="primaryDrawer.type"
                                column
                              >
                                <v-radio
                                  v-for="drawer in drawers"
                                  :key="drawer"
                                  :label="drawer"
                                  :value="drawer.toLowerCase()"
                                  primary
                                />
                              </v-radio-group>
                              <v-switch
                                v-model="primaryDrawer.clipped"
                                label="Clipped"
                                primary
                              />
                              <v-switch
                                v-model="primaryDrawer.floating"
                                label="Floating"
                                primary
                              />
                              <v-switch
                                v-model="primaryDrawer.mini"
                                label="Mini"
                                primary
                              />
                              <v-switch
                                v-model="primaryDrawer.expandOnHover"
                                label="Expand on-hover"
                                primary
                              />
                            </v-col>
                            <v-col cols="12" md="6">
                              <span>Footer</span>
                              <v-switch
                                v-model="footer.inset"
                                label="Inset"
                                primary
                              />
                            </v-col>
                          </v-row>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer />
                          <v-btn text>Cancel</v-btn>
                          <v-btn text color="primary">Submit</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-dialog>
          </div>
        </template>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="primaryDrawer.clipped" app>
        <v-app-bar-nav-icon
          v-if="primaryDrawer.type !== 'permanent'"
          @click.stop="primaryDrawer.model = !primaryDrawer.model"
        />
        <v-toolbar flat>
          <v-toolbar-title>HierogliFY</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <v-card>
            <bread-component />
            <div>
              <router-view @alerta="alerta" />
              <preloader-component />
            </div>
          </v-card>
        </v-container>
      </v-content>
      <footer-component :current="current" :footer_inset="footer.inset" />
      <Alert ref="alert" />
      <molecular-notify-snack-bar />
    </v-app>
    <login v-else />
  </div>
</template>
<script>
import Bread from "./components/templates/Bread";
import MenuComponent from "./components/templates/MenuComponent";
import FooterComponent from "./components/templates/FooterComponent";
import PreloaderComponent from "./components/templates/PreloaderComponent";
import Login from "./views/auth/Login";
import Alert from "./components/snacks/Alert";
import MolecularNotifySnackBar from "@/components/molecules/MolecularNotifySnackBar";
export default {
  components: {
    MolecularNotifySnackBar,
    Alert,
    "footer-component": FooterComponent,
    "preloader-component": PreloaderComponent,
    login: Login,
    "menu-component": MenuComponent,
    "bread-component": Bread
  },
  computed: {
    me() {
      return this.$store.state.auth.me.id;
    },
    version() {
      return this.$store.state.version.version;
    }
  },
  mounted() {
    this.$store.dispatch("loadVersion");
    /* this.$socket.$subscribe('notification', payload => {
                if(payload.status === 200){
                    this.importacoes_success = this.importacoes_success + 1;
                }else{
                    this.importacoes_errors = this.importacoes_errors +1 ;
                }
            }); */
  },
  destroyed() {
    delete this.$socket.$subscribe;
  },
  data: () => ({
    show: false,
    importacoes_success: 0,
    importacoes_errors: 0,
    dialog: false,
    current: new Date().getFullYear(),
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: false,
      floating: false,
      mini: true,
      expandOnHover: true
    },
    footer: {
      inset: false
    }
  }),
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    alerta(ev) {
      this.$refs.alert.show(ev.type, ev.text);
    }
  }
};
</script>
<style>
#sandbox
  > div.v-application--wrap
  > nav
  > div.v-navigation-drawer__content
  > div
  > div
  > div.v-list-group__header.v-list-item.v-list-item--link.theme--light
  > div.v-list-item__icon.v-list-group__header__append-icon
  > i {
  display: none;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar {
  width: 3px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>
