<template>
    <el-table 
        :data="list" 
        highlight-current-row 
        border 
        stripe 
        style="width: 100%" 
        @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="packageNum" label="编码" width="100"></el-table-column>
        <el-table-column align="center" prop="packageName" label="套装名称" width="150"></el-table-column>
        <el-table-column align="center" prop="price" label="原价" width="100"></el-table-column>
        <el-table-column align="center" prop="youhuiprice" label="套餐优惠价" width="100"></el-table-column>
        <el-table-column align="center" prop="editTime" label="修改时间" width="150"></el-table-column>
        <el-table-column align="center" prop="editUser" label="修改人" width="150"></el-table-column>
        <el-table-column align="center" prop="status" label="状态" width="150"></el-table-column>
        <el-table-column align="center" prop="note" label="备注" width="300"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" width="150">
            <template slot-scope="scope">
                <!-- <el-button type="primary" size="mini" @click="edit(scope.row)">编辑</el-button>
                <el-button type="danger" size="mini" @click="del(scope.row)">删除</el-button> -->
                <pg-row-link 
                    @edit="handleClick"
                    :btns="rowLink"
                    :row="scope.row">
                </pg-row-link>
            </template>
        </el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>