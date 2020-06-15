<template>
  <div>
    <el-container style="position: absolute;top:0;left:0;right:0;bottom:0;overflow:hidden">
      <el-header class="d-flex align-items-center" style="background:#545c64">
        <a class="h5 text-light text-white mb-0 mr-auto">{{$conf.logo}}</a>
        <el-menu
          :default-active="navbar.activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item :index="index | toNumber"  v-for="(item,index) in navbar.list" :key="index">{{item.name}}</el-menu-item>
          <el-submenu index="100">
            <template slot="title">
              <el-avatar
                size="small"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></el-avatar>
              summer
            </template>
            <el-menu-item index="100-1">修改</el-menu-item>
            <el-menu-item index="100-2">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
          @select="slideSelect"
      default-active="0">
      <el-menu-item :index="index | toNumber" v-for="(item,index) in slideMeau" :key="index">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
        </el-aside>
        <el-main>
          <li v-for="i in 100" :key="i">{{i}}</li>
        </el-main>
      </el-container>
    </el-container>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import common from '@/common/mixins/common.js';
export default {
  mixins:[common],
  name: "layout",
  data() {
    return {
      navbar:''
    };
  },
  created(){
    this.navbar = this.$conf.navbar
  },
  methods: {
    handleSelect(key) {
      this.navbar.activeIndex = key;
    },
    slideSelect(key) {
      this.slideMeauActive = key
    },
  },
  computed:{
    slideMeau(){
      return this.navbar.list[this.navbar.activeIndex].submenu || []
    },
    slideMeauActive:{
      get(){
        return this.navbar.list[this.navbar.activeIndex].subActive || '0'
      },
      set(val){
        this.navbar.list[this.navbar.activeIndex].subActive = val
      }
    }
  }
};
</script>
<style>
</style>