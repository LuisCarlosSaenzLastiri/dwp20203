import {
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
    IonList
} from "@ionic/vue";
import { defineComponent } from "vue";
import listprov from "./listadoproveedores.vue";
import formprov from "./formproveedores.vue";

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
        listprov,
        formprov
    },
    methods: {
        eventoRecibido(prov) {
            console.log("evento disparado");
            this.proveedor = prov;
        },
        

    }
});