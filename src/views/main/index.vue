<template>
    <el-container class="main">
        <el-header style=" height: 60px; line-height: 60px; text-align: left; background-color: #20a0ff; color: #fff;">
            <strong class="web_title">管理后台</strong>
            <div class="logout">
                <el-button type="text" @click="logOut">退出</el-button>
            </div>
        </el-header>
        <el-container style="height: 100%;">
            <el-aside width="200px" style="background-color: #fff; border: 1px solid #e6e6e6; box-sizing: border-box;">
                <el-menu 
                    :default-active="$route.path" 
                    router
                    style="height: 100%; border: none;">
                    <el-submenu :index="'index' + (menuIndex + 1)" v-for="(menu, menuIndex) in menuList" :key="menuIndex">
                        <template slot="title">
                            <i :class="menu.iconCls"></i>
                            {{ menu.name }}
                        </template>
                        <el-menu-item :index="child.path" v-for="child in menu.children" :key="child.name">
                            {{ child.name }}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main style="background-color: rgb(238, 241, 246); padding: 10px;">
                <strong class="title">
                    {{ $route.name }}
                </strong>
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .main {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .web_title {
        font-size: 26px;
        float: left;
    }
    .logout {
        float: right;
        .el-button--text {
            color: #fff;
        }
    }
    .title {
        display: block;
        color: #657385;
        font-size: 26px;
        margin-bottom: 10px;
    }
    .fade-enter-active {
        animation: fade-in .5s linear;
    }
    .fade-leave-active {
        opacity: 0;
    }
    @keyframes fade-in {
        0% { opacity: 0 }
        100% { opacity: 1 }
    }
    @keyframes fade-out {
        0% { opacity: 0 }
        100% { opacity: 1 }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>