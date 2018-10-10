<template>
  <div id="app">
    <common-header v-if="$route.name !== 'Login'"></common-header>
    <left-nav v-if="$route.name !== 'Login'"></left-nav>
    <router-view ></router-view>

  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav'
import CommonHeader from '@/components/CommonHeader'

export default {
  components: {
    'common-header': CommonHeader,
    'left-nav': LeftNav,
  }


}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
