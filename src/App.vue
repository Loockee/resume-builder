<template>
  <a-layout id="components-layout-demo-top-side-2">
    <AppHeader />
    <a-layout>
      <AppSlider />
      <a-layout style="padding: 0 24px 24px">
        <AppBreadcrumb />
          <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
              <router-view></router-view>
          </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style>
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, .2);
    margin: 16px 28px 16px 0;
    float: left;
  }
</style>

<script>
    import AppHeader from './components/AppHeader';
    import AppSlider from "./components/AppSlider";
    import AppBreadcrumb from "./components/AppBreadcrumb";
    export default {
        name: 'app',
        components: {
            AppBreadcrumb,
            AppSlider,
            AppHeader
        },
        data() {
            return {
                collapsed: false,
            }
        }
    }
</script>
