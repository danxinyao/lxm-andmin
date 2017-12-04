<template>
    <pg-box :isShowBox="show" @close="close">
        <pg-edit-title>{{title}}</pg-edit-title>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules" :inline="true">
            <pg-group-title>基本信息</pg-group-title>
            <div>
                <el-form-item label="肌肤编码" prop="num">
                    <el-input v-model="form.num"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="肌肤名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="备注" prop="note">
                    <el-input v-model="form.note"></el-input>
                </el-form-item>
            </div>
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
