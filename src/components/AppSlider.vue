<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :defaultSelectedKeys="['21']"
      :defaultOpenKeys="['3']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu key="1">
        <span slot="title"><a-icon type="user"/>Cockpit 360</span>
        <a-menu-item key="1">Interactions</a-menu-item>
        <a-menu-item key="2">Activities</a-menu-item>
        <a-menu-item key="3">Finesse</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="2">
        <span slot="title"><a-icon type="laptop"/>Replay</span>
        <a-menu-item key="11">Replaying tools</a-menu-item>
        <a-menu-item key="12">Preparing tools</a-menu-item>
        <a-menu-item key="13">Rodeo</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="3">
        <span slot="title"><a-icon type="notification"/>Matulionis</span>
        <a-menu-item @click="injecter" key="21">Injecter</a-menu-item>
        <a-menu-item @click="about" key="22">About</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
  export default {
    name: 'AppSlider',
    data() {
      return {};
    },
    methods: {
      route(routeName) {
        this.$router.push({path: `/${routeName}`});
      },
      injecter() {
        this.route('injecter');
      },
      about() {
        this.route('about');
      }
    }
  }
</script>
