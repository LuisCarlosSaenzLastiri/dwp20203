<template>



  <ion-content class="ion-padding">
   <ion-split-pane  content-id="main-content">
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar color="secundary">
          <ion-title>Proveedores</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-list-header>
            Navigate
          </ion-list-header>
          <ion-menu-toggle auto-hide="false">
            <ion-item button>
              <ion-icon slot="start" name='home'></ion-icon>
              <ion-label>
                Home
              </ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon slot="icon-only" name="menu"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
          <ion-title>Nombre del proveedor</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content >
         <ion-grid>
         <ion-row>
      <ion-col class="ion-align-self-end" size="6" >
        <ion-searchbar show-cancel-button="never"></ion-searchbar>
      </ion-col>
      </ion-row>
        </ion-grid>
            <ion-card>
      <ion-card-header>
        <ion-card-subtitle>Proveedores</ion-card-subtitle>
        <ion-card-title>Equipo dinamita</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
        nihil, suscipit facere quae doloremque asperiores deleniti pariatur
        beatae quaerat dolore incidunt ipsa architecto officia, sequi est?
        Minima tempore fugit sint?
      </ion-card-content>
    </ion-card>
      </ion-content>
    </div>

  </ion-split-pane>
  </ion-content>
  

  
  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
  
</template>

<script lang="ts">
import {
  IonSearchbar,
  IonHeader,
  IonMenu,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonLabel,
  IonButton,
  IonItem,IonCol, IonGrid, IonRow
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Proveedores",
  components: {
    IonSearchbar,
    IonHeader,
    IonMenu,
    IonSplitPane,
    IonTitle,
    IonToolbar,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonLabel,
    IonButton,
    IonItem,IonCol, IonGrid, IonRow
  },
});
</script>