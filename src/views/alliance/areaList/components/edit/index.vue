<template>
    <pg-box :isShowBox="show" @close="close">
        <pg-edit-title>{{title}}</pg-edit-title>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules" :inline="true">
            <pg-group-title>基本信息</pg-group-title>
            <div>
                <el-form-item label="区域编码" prop="num">
                    <el-input v-model="form.num"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="区域名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="上级区域名称" label-width="110px" prop="checker">
                    <span>{{form.checker || '无'}}</span>&nbsp;&nbsp;
                    <el-button type="primary" plain @click="showPop">选择上级</el-button>
                </el-form-item>
            </div>
            <el-form-item label="备注" prop="note">
                <el-input v-model="form.note"></el-input>
            </el-form-item>
            <br>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>
        <div class="el-message-box__wrapper" style="z-index: 2015;" v-if="isShowPop">
            <div class="el-message-box">
                <div class="el-message-box__header">
                    <div class="el-message-box__title"></div>
                    <button type="button" class="el-message-box__headerbtn" @click="hidePop"><i class="el-message-box__close el-icon-close"></i></button>
                </div>
                <div class="el-message-box__content">
                    <div class="el-message-box__message"><p>这是一段内容</p></div>
                </div>
                <div class="el-message-box__btns">
                    <button type="button" class="el-button el-button--default el-button--small el-button--primary ">确定</button>
                </div>
            </div>
        </div>
        <div class="v-modal" style="z-index: 2014;" v-if="isShowPop"></div>
    </pg-box>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
