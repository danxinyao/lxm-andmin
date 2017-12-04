<template>
    <el-table 
        :data="list" 
        highlight-current-row 
        border 
        stripe 
        style="width: 100%" >
        <el-table-column align="center" prop="teamname" label="店铺名称" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="原加盟商" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="转让后加盟商" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="操作人" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="操作时间" width="200"></el-table-column>                     
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>