<script setup>
import { RouterLink, RouterView } from 'vue-router'

import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  EnvironmentOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  SettingOutlined,
  DashboardOutlined
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
 defineComponent({
  components: {
    PieChartOutlined,
    EnvironmentOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    SearchOutlined,
    PlusCircleOutlined,
    SettingOutlined,
    DashboardOutlined
  },
  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),
    };
  },
});
</script>

<template>
   <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <img height="80" src="./assets/logo.svg" alt=""/>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <environment-outlined :style="{fontSize: '17px', color: '#fff'}"/>
          <span class="nav-link" :style="{fontSize: '17px', color: '#fff'}"><RouterLink to="/">Current Location</RouterLink></span>
        </a-menu-item>
        <a-menu-item key="2">
          <search-outlined :style="{fontSize: '17px', color: '#fff'}"/>
          <span class="nav-link" :style="{fontSize: '17px', color: '#fff'}"><RouterLink to="/about">Search Location</RouterLink></span>
        </a-menu-item>
        <a-menu-item key="3">
          <plus-circle-outlined  :style="{fontSize: '17px', color: '#fff'}"/>
          <span :style="{fontSize: '17px', color: '#fff'}">Add Location</span>
        </a-menu-item>
        <a-menu-item key="4">
          <dashboard-outlined :style="{fontSize: '17px', color: '#fff'}"/>
          <span :style="{fontSize: '17px', color: '#fff'}">All Locations</span>
        </a-menu-item>
        <a-menu-item key="5">
          <setting-outlined :style="{fontSize: '17px', color: '#fff'}" />
          <span :style="{fontSize: '17px', color: '#fff'}">Manage Places</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #001529;color: #fff; font-size: 24px;">
        Vue Weather App 
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <RouterView />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
       ©2022 Vue Weather App
      </a-layout-footer>
    </a-layout>
  </a-layout>


 
</template>

<style scoped>

</style>
