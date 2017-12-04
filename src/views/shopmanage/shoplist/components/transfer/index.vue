<template>
    <pg-box :isShowBox="show" @close="close">
        <pg-edit-title>{{title}}</pg-edit-title>
        <el-form ref="form" :model="form" label-width="120px" :rules="rules" :inline="true"  v-if="type==1" style="margin:50px 0;">
            <el-form-item label="当前加盟商" prop="teamname">
                <el-input v-model="form.teamname" :disabled="true"></el-input>
            </el-form-item>
            <br>
            <el-form-item label="转让至加盟商" label-width="120px" prop="active">
                <el-select v-model="form.active">
                    <el-option :label="active.label" :value="active.value" v-for="active in actives" :key="active.value"></el-option>
                </el-select>
            </el-form-item>                                            
        </el-form>  
        <pg-content v-if="type == 2">
            <pg-search-form
                slot="search-form"
                v-model="query"
                :default-form="defaultQuery"
                :more="moreQuery"
                :is-show-more="isShowMoreQuery"
                @openMore="toggleOpen"
                @search="search">
            </pg-search-form>  
            <!-- 按钮 -->
            <pg-operations 
                slot="operations" 
                :btns="operations" 
                @add="add">
            </pg-operations>                                
            <!-- 列表 -->
            <pg-table 
                slot="list-table"
                :list="customerList">
            </pg-table> 
            <!-- 分页 -->
            <pg-pagination 
                slot="pagination" 
                @size-change="sizeChange" 
                @current-change="currentChange" 
                :page-size="pageSize" 
                :total="total">
            </pg-pagination>                       
        </pg-content>            
        <el-form>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>
    </pg-box>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>

