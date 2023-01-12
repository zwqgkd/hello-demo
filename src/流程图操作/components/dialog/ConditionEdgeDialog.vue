<template>
    <el-form :model="form" label-width="120px">

        <el-form-item label="选择Y,N边">
            <el-select v-model="form.flag" placeholder="please select Y or N">
                <el-option label="Y" value="Y" />
                <el-option label="N" value="N" />
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            form:{
                flag:''
            }
        }
    },
    methods:{
        onSubmit(){
            //传给父窗口
            window.opener.postMessage({flag: this.form.flag});
            window.close()
        }
    }
}
</script>
