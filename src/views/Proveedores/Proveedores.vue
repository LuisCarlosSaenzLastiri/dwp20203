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
          <ion-title>Formulario de alta de proveedores</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content >
         <ion-grid>
         <ion-row>
      <ion-col class="ion-align-self-end" size="6" >
        <ion-item>
          <ion-label position="float">Razón social</ion-label>
          <ion-input :value="proveedor.razon" @input="proveedor.razon = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="float">RFC</ion-label>
          <ion-input :value="proveedor.rfc" @input="proveedor.rfc = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="float">Dirección</ion-label>
          <ion-input :value="proveedor.direccion" @input="proveedor.direccion = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="float">Email</ion-label>
          <ion-input :value="proveedor.email" @input="proveedor.email = $event.target.value"></ion-input>
        </ion-item>
        <ion-button color="primary" @click="insert()">Enviar</ion-button>

      </ion-col>
      </ion-row>
        </ion-grid>
            <ion-card>
      <ion-card-header>
        <ion-card-title>Listado Proveedores</ion-card-title>
      </ion-card-header>
          <ion-list>
              <ion-item-sliding>
                <ion-item>
                  <ion-label>Item</ion-label>
                </ion-item>
                <ion-item-options side="end">
                  <ion-item-option @click="editItem(item)">Modificar</ion-item-option>
                  <ion-item-option @click="deleteItem(item)">Borrar</ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding>
                <ion-item>
                  <ion-label>Item</ion-label>
                </ion-item>
                <ion-item-options side="end">
                  <ion-item-option @click="editItem(item)">Modificar</ion-item-option>
                  <ion-item-option @click="deleteItem(item)">Borrar</ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
            </ion-list>
      <ion-card-content>
        
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
  IonButton,alertController,
  IonItem,IonCol, IonGrid, IonRow,IonList
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  data(){
    return {
      item : "",
      proveedor : {
        razon : "",
        rfc :"",
        direccion : "",
        email : "",
        },
    }
  },
  name: "Proveedores",
  components: {
    IonHeader,
    IonMenu,
    IonSplitPane,
    IonTitle,
    IonToolbar,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonIcon,
    IonLabel,
    IonButton,
    IonItem,IonCol, IonGrid, IonRow,IonList
  },
  methods:{
    async insert() {
            
                const alert = await alertController
                .create({
                    header: 'Acceso concedido',
                    message: "insertar",
                    buttons: ['OK'],
                });
                return alert.present();    
            
            
        },
        async editItem() {
            
                const alert = await alertController
                .create({
                    header: 'Acceso concedido',
                    message: "edit",
                    buttons: ['OK'],
                });
                return alert.present();    
            
            
        },
      async deleteItem() {
            
                const alert = await alertController
                .create({
                    header: 'Acceso concedido',
                    message: "delete",
                    buttons: ['OK'],
                });
                return alert.present();    
            
            
        },
    }
});
</script>