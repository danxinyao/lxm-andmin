<template>
    <pg-box :isShowBox="show" @close="close">
        <pg-edit-title>{{title}}门店等级</pg-edit-title>
        <el-form ref="form" :model="form" label-width="120px" :rules="rules" :inline="true">
            <pg-group-title>基本信息</pg-group-title>
            <br>
            <el-form-item label="门店形象编码" prop="teamname">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <br>                      
            <el-form-item label="门店形象名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>  
            <br> 
            <el-form-item label="备注" >
                <el-input v-model="form.active" style="width:300px;" :rows="6"  type="textarea" placeholder="请输入..."></el-input>
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

