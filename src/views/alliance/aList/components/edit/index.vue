<template>
    <pg-box :isShowBox="show" @close="close">
        <pg-edit-title>{{title}}</pg-edit-title>
        <el-form ref="form" :model="form" label-width="100px" :inline="true">
            <pg-group-title>基本信息</pg-group-title>
            <el-form-item label="加盟商编码" prop="num">
                <el-input v-model="form.num"></el-input>
            </el-form-item>
            <el-form-item label="加盟商名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="等级" prop="rank">
                <el-select v-model="form.rank">
                    <el-option :label="item.label" :value="item.value" v-for="item in ranks" :key="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="拓展专员" prop="tuozhanzhuanyuan">
                <el-input v-model="form.tuozhanzhuanyuan"></el-input>
            </el-form-item>
            <el-form-item label="联系人" prop="lianxiren">
                <el-input v-model="form.lianxiren"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" prop="phone">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <div>
                <el-form-item label="所属区域" prop="area">
                    <span>{{form.area || '无'}}</span>&nbsp;&nbsp;
                    <el-button type="primary" plain @click="showPop">选择区域</el-button>
                </el-form-item>
            </div>
            <el-form-item label="证件类型" prop="zhengjianleixing">
                <el-select v-model="form.zhengjianleixing">
                    <el-option :label="item.label" :value="item.value" v-for="item in types" :key="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="证件号码" prop="zhengjianhaoma">
                <el-input v-model="form.zhengjianhaoma"></el-input>
            </el-form-item>
            <pg-group-title>结算账户</pg-group-title>
            <el-table
                    :data="form.list"
                    highlight-current-row
                    border
                    stripe
                    style="width: 100%; margin: 20px 0;">
                <el-table-column align="center" prop="khm" label="开户名" ></el-table-column>
                <el-table-column align="center" prop="khh" label="开户行" ></el-table-column>
                <el-table-column align="center" prop="yhkh" label="银行卡号"></el-table-column>
                <el-table-column align="center" fixed="right" label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="setDefault(scope.row)">设为默认</el-button>
                        <el-button type="danger" size="mini" @click="del(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div>
                <el-form-item label="开户名">
                    <el-input v-model="card.khm"></el-input>
                </el-form-item>
                <el-form-item label="开户行">
                    <el-input v-model="card.khh"></el-input>
                </el-form-item>
                <el-form-item label="银行卡号">
                    <el-input v-model="card.yhkh"></el-input>
                </el-form-item>
            </div>
            <div style="text-align: right"><el-button type="primary" plain>增加卡号</el-button></div>
            <div style="margin-top: 20px;">
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
