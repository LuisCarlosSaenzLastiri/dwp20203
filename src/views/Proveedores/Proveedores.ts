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
    IonButton,
    alertController,
    IonItem,
    IonCol,
    IonGrid,
    IonRow,
    IonList
} from "@ionic/vue";
import axios from 'axios';
import { defineComponent } from "vue";
import listprov from "./listadoproveedores.vue";

export default defineComponent({
    data() {
        return {
            item: "",
            proveedor: {
                razon: "",
                rfc: "",
                direccion: "",
                email: "",
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
        IonIcon,
        IonLabel,
        IonButton,
        IonItem,
        IonCol,
        IonGrid,
        IonRow,
        IonList,
        listprov
    },
    methods: {
        eventoRecibido(prov) {
            console.log("evento disparado");
            this.proveedor = prov;
        },
        async insert() {

            if (this.proveedor.id == "" || this.proveedor.id == undefined) {
                //insertar dato nuevo
                const res = await axios.post("http://localhost:3000/proveedores", this.proveedor);
                console.log(res);
                if (res.statusText == "Created") {
                    this.proveedores.push(res.data);
                    const alert = await alertController
                        .create({
                            header: 'Insertado correctamente',
                            message: "Atencion",
                            buttons: ['OK'],
                        });
                    return alert.present();
                } else {
                    const alert = await alertController
                        .create({
                            header: 'No se ha podido insertar el registro',
                            message: "Atencion",
                            buttons: ['OK'],
                        });
                    return alert.present();
                }

            } else {
                const res = await axios.put("http://localhost:3000/proveedores/" + this.proveedor.id, this.proveedor);
                console.log(res);
                if (res.statusText == "OK") {

                    this.proveedor = {
                        razon: "",
                        rfc: "",
                        direccion: "",
                        email: "",
                    };

                    const alert = await alertController
                        .create({
                            header: 'Modificado correctamente',
                            message: "Atencion",
                            buttons: ['OK'],
                        });
                    return alert.present();

                }

            }



        },

    }
});