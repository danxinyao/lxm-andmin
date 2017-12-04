<template>
    <pg-box :isShowBox="show" @close="close">
        <pg-edit-title>{{title}}</pg-edit-title>
        <!-- 搜索 -->
        <pg-search-form
                v-model="query"
                :default-form="defaultQuery"
                @search="search">
        </pg-search-form>
        <!-- 按钮 -->
        <pg-operations
                :btns="operations"
                @importData="importData"
                @exportData="exportData">
        </pg-operations>
        <!--table-->
        <el-table
                :data="form"
                highlight-current-row
                border
                stripe
                style="width: 100%; margin: 20px 0;">
            <el-table-column align="center" prop="num" label="商品货号"></el-table-column>
            <el-table-column align="center" prop="name" label="商品名称"></el-table-column>
            <el-table-column align="center" prop="price" label="商品价格" width="300">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.price"></el-input>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <pg-pagination
                @size-change="sizeChange"
                @current-change="currentChange"
                :page-size="pageSize"
                :total="total">
        </pg-pagination>
        <div style="margin: 20px 0;">
            <el-button size="small" type="primary" @click="save">保存</el-button>
            <el-button size="small" @click="close">返回</el-button>
        </div>
    </pg-box>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
