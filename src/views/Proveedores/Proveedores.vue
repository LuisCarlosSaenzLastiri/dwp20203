<template>
    <ion-content class="ion-padding">
        <ion-split-pane content-id="main-content">
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
                <div>
                    <formprov :propprov="proveedor"></formprov>
                </div>
                <div>
                    <listprov @mievento="eventoRecibido"></listprov>
                </div>
            </div>
        </ion-split-pane>
    </ion-content>
    <ion-footer>
        <ion-toolbar>
            <ion-title>Footer</ion-title>
        </ion-toolbar>
    </ion-footer>
</template>
<script lang="ts" src="./Proveedores"></script>