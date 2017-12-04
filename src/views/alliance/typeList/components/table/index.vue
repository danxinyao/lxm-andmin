<template>
    <el-table 
        :data="list" 
        highlight-current-row 
        border 
        stripe 
        style="width: 100%" 
        @selection-change="selectChange">
        <el-table-column fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column prop="num" label="编码" width="100"></el-table-column>
        <el-table-column prop="name" label="分类名称" min-width="100"></el-table-column>
        <el-table-column prop="checker" label="上级分类名称" min-width="100"></el-table-column>
        <el-table-column prop="tax" label="分类税率" min-width="100"></el-table-column>
        <el-table-column prop="editTime" label="修改时间" min-width="100"></el-table-column>
        <el-table-column prop="editUser" label="修改人" min-width="100"></el-table-column>
        <el-table-column prop="status" label="状态" min-width="100"></el-table-column>
        <el-table-column prop="note" label="备注" min-width="100"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
                <!-- <el-button type="primary" size="mini" @click="edit(scope.row)">编辑</el-button>
                <el-button type="danger" size="mini" @click="del(scope.row)">删除</el-button> -->
                <pg-row-link 
                    @edit="handleClick"
                    @del="handleClick"
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