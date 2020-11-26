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
    IonList,
    alertController,
    IonList
} from "@ionic/vue";
import axios from 'axios';
import { defineComponent } from "vue";
export default defineComponent({
    name: "formprov",
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
    },
    data() {
        return {

        }
    },
    props: {
        propprov: {}
    },
    methods: {
        async insert() {

            if (propprov.id == "" || propprov.id == undefined) {
                //insertar dato nuevo
                const res = await axios.post("http://localhost:3000/proveedores", propprov);
                console.log(res);
                if (res.statusText == "Created") {
                    propproves.push(res.data);
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
                const res = await axios.put("http://localhost:3000/proveedores/" + propprov.id, propprov);
                console.log(res);
                if (res.statusText == "OK") {

                    propprov = {
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