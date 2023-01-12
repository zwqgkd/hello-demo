<template>
    <el-form :model="form" label-width="120px">
        <el-form-item label="控制模块条件">
            <el-input v-model="form.value" />
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
                value:''
            }
        }
    },
    methods:{
        onSubmit(){
            //传给父窗口
            window.opener.postMessage({conditionValue: this.form.value});
            window.close()
        }
    }
}
</script>
