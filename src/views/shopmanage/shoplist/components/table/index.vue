<template>
    <el-table 
        :data="list" 
        highlight-current-row 
        border 
        stripe 
        style="width: 100%" 
        @selection-change="selectChange">
        <el-table-column fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="teamname" label="店铺编码" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="店铺名称" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="店铺类型" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="门店等级" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="区域" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="地址" width="200"></el-table-column>
        <el-table-column align="center" prop="teamname" label="该市区人口（万）" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="所属加盟商" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="联系人姓名" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="联系电话" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="收款账户" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="招商专员" width="200"></el-table-column>
        <el-table-column align="center" prop="teamname" label="客户经理" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="开店时间" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="门店商圈" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="门店形象" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="店铺面积（㎡）" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="月租金" width="200"></el-table-column>
        <el-table-column align="center" prop="teamname" label="营业状态" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="改造日期" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="发饰专柜数量" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="化妆品货柜数量" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="是否需要开票" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="发票类型" width="200"></el-table-column>                        
        <el-table-column align="center" prop="name" label="发票抬头" width="200"></el-table-column>                        
        <el-table-column align="center" prop="name" label="税号" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="店铺资质" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="备注" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="状态" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="修改人" width="200"></el-table-column>                        
        <el-table-column align="center" prop="name" label="修改时间" width="200"></el-table-column>                        
        <el-table-column align="center" fixed="right" label="操作" min-width="300">            
            <template slot-scope="scope">
                <pg-row-link 
                    @edit="edit"
                    @transfer="transfer"
                    @transferDetail="transferDetail"
                    :btns="rowLink"
                    :row="scope.row">
                </pg-row-link>
            </template>
        </el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>