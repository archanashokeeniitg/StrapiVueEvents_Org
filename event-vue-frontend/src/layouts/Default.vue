<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>E-vents</v-toolbar-title>
      <v-spacer />
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          placeholder="Search ..."
          class="ml-8"
          outlined
          style="max-width: 350px;"
          prepend-inner-icon="mdi-magnify"
          rounded
          dense
          hide-details
        ></v-text-field>
      </v-col>
      <v-btn> Create Event </v-btn>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<static-query>  
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>
