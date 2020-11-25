<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>Listado Proveedores {{ mipropiedad }}</ion-card-title>
        </ion-card-header>
        <ion-list>
            <ion-item-sliding v-for="prov in proveedores" :key="prov">
                <ion-item>
                    <ion-label>{{ prov.rfc }} - {{ prov.razon}}</ion-label>
                </ion-item>
                <ion-item-options side="end">
                    <ion-item-option @click="editItem(prov)">Modificar</ion-item-option>
                    <ion-item-option @click="deleteItem(prov)">Borrar</ion-item-option>
                </ion-item-options>
            </ion-item-sliding>
        </ion-list>
    </ion-card>
</template>
<script type="ts" src="./listadoproveedores.ts"></script>