<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :defaultSelectedKeys="['21']"
      :defaultOpenKeys="['3']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu key="0">
        <span slot="title"><a-icon type="user"/>Home</span>
        <a-menu-item key="01" @click="home">Home</a-menu-item>
        <a-menu-item key="02" @click="home">Tool Board</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="1">
        <span slot="title"><a-icon type="user"/>Cockpit 360</span>
        <a-menu-item key="1" @click="cockpit">Home</a-menu-item>
        <a-menu-item key="2">Interactions</a-menu-item>
        <a-menu-item key="3">Activities</a-menu-item>
        <a-menu-item key="4">Finesse</a-menu-item>
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
      home() {
        this.route('');
      },
      cockpit() {
        this.route('cockpit360');
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
