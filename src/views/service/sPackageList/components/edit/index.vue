<template>
    <pg-box :isShowBox="show" @close="close">
        <pg-edit-title>{{title}}</pg-edit-title>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules" :inline="true">
            <pg-group-title>组合信息</pg-group-title>
            <el-form-item label="套餐编码" prop="packageNum">
                <el-input v-model="form.packageNum"></el-input>
            </el-form-item>
            <el-form-item label="套餐名称" prop="packageName">
                <el-input v-model="form.packageName"></el-input>
            </el-form-item>
            <el-form-item label="套餐价" prop="price">
                <el-input style="width: 200px;" v-model="form.price"></el-input><span>&nbsp;&nbsp;元/次</span>
            </el-form-item>
            <pg-group-title>组合明细</pg-group-title>
            <el-button type="primary" @click="addGoods">增加</el-button>
            <el-table
                    :data="form.list"
                    highlight-current-row
                    border
                    stripe
                    style="width: 100%; margin: 20px 0;">
                <el-table-column align="center" prop="fwbm" label="服务编码"></el-table-column>
                <el-table-column align="center" prop="fwmc" label="服务名称"></el-table-column>
                <el-table-column align="center" label="包含服务次数">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.bhfwcs"></el-input>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="yj" label="原价"></el-table-column>
                <el-table-column align="center" fixed="right" label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button type="danger" size="mini" @click="del(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <pg-group-title>服务套餐展示</pg-group-title>
            <el-form-item label="请选择">
                <pg-img-upload multiple @success="uploadSuccess"></pg-img-upload>
            </el-form-item>
            <br>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>
    </pg-box>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
