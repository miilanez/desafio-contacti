<template>
  <div id="app">
    <Sidebar v-if="isAuthenticated" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  },
  computed: {
    ...mapState(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['logout'])
  }
};
</script>

<style>
#app {
  display: flex;
}

#app > * {
  flex: 1;
}
</style>
