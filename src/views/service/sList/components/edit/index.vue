<template>
    <pg-box :isShowBox="show" @close="close">
        <pg-edit-title>{{title}}</pg-edit-title>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules" :inline="true">
            <pg-group-title>基本信息</pg-group-title>
            <div>
                <el-form-item label="服务类型" prop="type">
                    <el-select v-model="form.type">
                        <el-option :label="item.label" :value="item.value" v-for="item in types" :key="item.value"></el-option>
                    </el-select>
                </el-form-item>
            </div>
            <el-form-item label="服务编码" prop="num">
                <el-input v-model="form.num"></el-input>
            </el-form-item>
            <el-form-item label="服务名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="价位" prop="price">
                <el-input style="width: 200px;" v-model="form.price"></el-input><span>&nbsp;&nbsp;元/次</span>
            </el-form-item>
            <el-form-item label="体验推广价" prop="tiyanprice">
                <el-input style="width: 200px;" v-model="form.tiyanprice"></el-input><span>&nbsp;&nbsp;元/次</span>
            </el-form-item>
            <el-form-item label="适用肌肤" prop="skin">
                <el-select v-model="form.skin">
                    <el-option :label="item.label" :value="item.value" v-for="item in skins" :key="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="操作时间" prop="tiyanprice">
                <el-date-picker type="date" v-model="form.editTime"></el-date-picker>
            </el-form-item>
            <pg-group-title>包含消耗品</pg-group-title>
            <el-button type="primary" @click="addGoods">增加</el-button>
            <el-table
                    :data="form.list"
                    highlight-current-row
                    border
                    stripe
                    style="width: 100%; margin: 20px 0;">
                <el-table-column align="center" prop="spkh" label="商品款号" width="100"></el-table-column>
                <el-table-column align="center" prop="spbm" label="商品编码" width="100"></el-table-column>
                <el-table-column align="center" prop="spmc" label="商品名称" width="100"></el-table-column>
                <el-table-column align="center" label="可消耗次数" width="150">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.kxhcs"></el-input>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="sh" label="色号" width="100"></el-table-column>
                <el-table-column align="center" prop="dj" label="单价" width="100"></el-table-column>
                <el-table-column align="center" fixed="right" label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button type="danger" size="mini" @click="del(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div>
                <el-form-item label="备注" prop="note">
                    <el-input v-model="form.note"></el-input>
                </el-form-item>
            </div>
            <pg-group-title>服务展示</pg-group-title>
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
