import {
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    alertController,
    IonList
} from "@ionic/vue";
import axios from 'axios';
import { defineComponent } from "vue";
export default defineComponent({
    name: "listprov",
    data() {
        return {
            proveedores: []
        }
    },
    props: {
        mipropiedad: String
    },
    async created() {
        const res = await axios.get("http://localhost:3000/proveedores");
        console.log(res);
        this.proveedores = res.data;
    },
    methods: {
        editItem(prov) {
            //this.proveedor = prov;
            this.$emit("mievento", prov);

        },
        async deleteItem(prov) {

            const confirm = await alertController.create({
                header: 'Eliminar elemento',
                message: 'Esta seguro que desea eliminar el elemento seleccionado...',
                buttons: [{
                        text: 'Eliminar',
                        handler: () => {
                            const res = axios.delete("http://localhost:3000/proveedores/" + prov.id);
                            console.log(res);
                        }
                    },
                    {
                        text: 'Cancelar',
                        handler: () => {
                            console.log('No hace nada');
                        }
                    }
                ]
            });
            confirm.present();

        },
    }
});