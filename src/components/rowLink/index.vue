<template>
    <el-button-group>
        <el-button 
            size="mini" 
            :type="btn.type" 
            @click.native="handleClick(btn)" 
            v-for="btn in limitList" 
            :key="btn.action">
            {{ btn.name }}
        </el-button>
    </el-button-group>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>