<template>
  <div id="app">
    <v-app>
      <router-view/>
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #FAFAFA;
}

.v-application p{
  margin-bottom: 0px;
}
.v-stepper, .v-stepper__header{
  box-shadow:unset;
}
</style>
