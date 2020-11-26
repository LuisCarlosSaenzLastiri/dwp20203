<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>Formulario de alta de proveedores</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-align-self-end" size="6">
                        <ion-item>
                            <ion-label position="float">Razón social</ion-label>
                            <ion-input :value="propprov.razon" @input="propprov.razon = $event.target.value"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="float">RFC</ion-label>
                            <ion-input :value="propprov.rfc" @input="propprov.rfc = $event.target.value"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="float">Dirección</ion-label>
                            <ion-input :value="propprov.direccion" @input="propprov.direccion = $event.target.value"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="float">Email</ion-label>
                            <ion-input :value="propprov.email" @input="propprov.email = $event.target.value"></ion-input>
                        </ion-item>
                        <ion-button color="primary" @click="insert()">Enviar</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-card-content>
    </ion-card>
</template>
<script type="ts" src="./formproveedores.ts"></script>