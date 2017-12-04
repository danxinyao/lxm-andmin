<template>
    <pg-box :isShowBox="show" @close="close">
        <pg-edit-title>{{title}}</pg-edit-title>
        <el-table
                :data="form"
                highlight-current-row
                border
                stripe
                style="width: 100%; margin: 20px 0;">
            <el-table-column align="center" prop="dpbm" label="店铺编码" width="100"></el-table-column>
            <el-table-column align="center" prop="dpmc" label="店铺名称" width="100"></el-table-column>
            <el-table-column align="center" prop="dplx" label="店铺类型" width="100"></el-table-column>
            <el-table-column align="center" prop="mdlx" label="门店类型" width="100"></el-table-column>
            <el-table-column align="center" prop="qy" label="区域" width="100"></el-table-column>
            <el-table-column align="center" prop="dz" label="地址" width="100"></el-table-column>
            <el-table-column align="center" prop="gsqrk" label="该市区人口（万）" width="100"></el-table-column>
            <el-table-column align="center" prop="ssd" label="所属加盟商" width="100"></el-table-column>
            <el-table-column align="center" prop="yhkh" label="联系人姓名" width="100"></el-table-column>
            <el-table-column align="center" prop="khm" label="联系电话" width="100"></el-table-column>
            <el-table-column align="center" prop="khh" label="招商专员" width="100"></el-table-column>
            <el-table-column align="center" prop="yhkh" label="客户经理" width="100"></el-table-column>
            <el-table-column align="center" prop="khm" label="开店时间" width="100"></el-table-column>
            <el-table-column align="center" prop="khh" label="门店商圈" width="100"></el-table-column>
            <el-table-column align="center" prop="yhkh" label="门店形象" width="100"></el-table-column>
            <el-table-column align="center" prop="khm" label="店铺面积（㎡）" width="100"></el-table-column>
            <el-table-column align="center" prop="khh" label="月租金" width="100"></el-table-column>
            <el-table-column align="center" prop="yhkh" label="营业状态" width="100"></el-table-column>
            <el-table-column align="center" prop="khh" label="发饰专柜数量" width="100"></el-table-column>
            <el-table-column align="center" prop="yhkh" label="化妆品货柜数量" width="100"></el-table-column>
        </el-table>
        <el-button size="small" @click="close">关闭</el-button>
    </pg-box>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
