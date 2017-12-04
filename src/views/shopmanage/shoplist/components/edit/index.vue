<template>
    <pg-box :isShowBox="show" @close="close">
        <pg-edit-title>{{title}}</pg-edit-title>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules" :inline="true">
            <pg-group-title>基础资料</pg-group-title>
            <br>
            <el-form-item label="店铺编码" prop="teamname">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <el-form-item label="店铺名称" prop="teamname">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <el-form-item label="区域" prop="teamname">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <br>        
            <el-form-item label="店铺类型" prop="active">
                <el-select v-model="form.active">
                    <el-option :label="active.label" :value="active.value" v-for="active in actives" :key="active.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所属加盟商" prop="active">
                <el-select v-model="form.active">
                    <el-option :label="active.label" :value="active.value" v-for="active in actives" :key="active.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="门店等级" prop="active">
                <el-select v-model="form.active">
                    <el-option :label="active.label" :value="active.value" v-for="active in actives" :key="active.value"></el-option>
                </el-select>
            </el-form-item>
            <br>
            <el-form-item label="地址" prop="active">
                <el-select v-model="form.active">
                    <el-option :label="active.label" :value="active.value" v-for="active in actives" :key="active.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="该市区人口" prop="teamname">
                <el-input v-model="form.teamname">
                    <template slot="append">万</template>
                </el-input>
            </el-form-item>
            <br>
            <el-form-item label="详细地址" >
                <el-input v-model="form.active" style="width:300px;" :rows="6"  type="textarea" placeholder="请输入..."></el-input>
            </el-form-item>     
            <br>
            <el-form-item label="备注" >
                <el-input v-model="form.active" style="width:300px;" :rows="6"  type="textarea" placeholder="请输入..."></el-input>
            </el-form-item>     
            <br>
            <pg-group-title>商务资料</pg-group-title>
            <br>
            <el-form-item label="联系人姓名" prop="teamname">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <el-form-item label="联系人电话" prop="teamname">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <el-form-item label="招商专员" prop="teamname">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <br> 
            <el-form-item label="客户经理" prop="teamname">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
                    <br> 
            <pg-group-title>经营资料</pg-group-title>
            <br>
            <el-form-item label="营业状态" prop="active">
                <el-select v-model="form.active">
                    <el-option :label="active.label" :value="active.value" v-for="active in actives" :key="active.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="门店商圈" prop="active">
                <el-select v-model="form.active">
                    <el-option :label="active.label" :value="active.value" v-for="active in actives" :key="active.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="门店形象" prop="active">
                <el-select v-model="form.active">
                    <el-option :label="active.label" :value="active.value" v-for="active in actives" :key="active.value"></el-option>
                </el-select>
            </el-form-item>
            <br>           
            <el-form-item label="店铺面积" prop="teamname">
                <el-input v-model="form.teamname">
                    <template slot="append">m<sup>2</sup></template>
                </el-input>
            </el-form-item>
            <el-form-item label="月租金" prop="teamname">
                <el-input v-model="form.teamname">
                    <template slot="append">元</template>
                </el-input>
            </el-form-item>
            <el-form-item label="改造日期" prop="teamname">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <br> 
            <el-form-item label="发饰专柜数量"  label-width="120px" prop="active">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <el-form-item label="化妆品专柜数量"  label-width="120px" prop="active">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <br> 
            <pg-group-title>财务资料</pg-group-title>
            <br> 
            <el-form-item label="收款账户" prop="active">
                <el-select v-model="form.active">
                    <el-option :label="active.label" :value="active.value" v-for="active in actives1" :key="active.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否需要开票" label-width="150px" prop="active">
                <el-select v-model="form.active">
                    <el-option :label="active.label" :value="active.value" v-for="active in actives1" :key="active.value"></el-option>
                </el-select>
            </el-form-item>
            <br>            
<!--             <el-radio v-model="form.teamname" label="1">中国农业银行深圳支行 刘二 3856 5602 0369 85</el-radio>
            <el-radio v-model="form.teamname" label="1">中国农业银行深圳支行 刘二5 3856 5602 0369 85</el-radio> -->
            <el-form-item label="店铺资质">
                <pg-img-upload multiple @success="uploadSuccess"></pg-img-upload>
                <span>大小不超过 10MB</span>
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

