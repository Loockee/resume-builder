<template>
  <a-layout-header class="header">
    <div class="logo"/>
    <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">Data plateform</a-menu-item>
      <a-menu-item key="2" disabled>Dashboard</a-menu-item>
      <a-menu-item key="3" disabled>Api</a-menu-item>
      <a-menu-item key="4" disabled>Tester</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
  export default {
      name: 'Header'
  }
</script>
