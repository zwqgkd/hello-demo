<template>

    <div class="common-layout">
        <el-container>
            <el-aside class="login-aside" width="50%">
            </el-aside>
            <el-main class="login-main">
                <div class="user-login">
                    <div class="user-login-top">
                        <img class="logo" src="../imgs/login_logo.png">
                        <div> <span style="font-size: 2rem; color: azure;">格力工业视觉算法平台</span></div>

                    </div>
                    <div class="mini-account">
                        <input v-model="account" placeholder="请输入账号"
                            style="border-radius:4px;width: 50%;height: 30px;margin-top: 30px;">
                    </div>
                    <div class="mini-password">
                        <input v-model="password" placeholder="请输入密码"
                            style="border-radius:4px;width: 50%;height: 30px;margin-top: 8px;">
                    </div>
                    <!-- 登录页面跳转到主页面 -->
                    <div>
                        <button data-v-659840cf="" type="submit" class="login-btn"
                            @click="onLoginBtnClick('MSG_ENDLOGIN')"
                            style="width: 50%; margin-top: 30px;height: 40px;background-color: rgb(53, 28, 177);">
                            <span style="color:aliceblue;">登 录</span>
                        </button>

                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
    import { account, password, onLoginBtnClick } from '../js/login'

</script>

<style>
    .common-layout {
        height: 100%;
    }

    .el-container {
        height: 100%;
    }

    .user-login {
        position: relative;
        top: 20%;
        text-align: center;
    }

    .login-aside {
        background-image: url(../imgs/login_left.png);
        background-repeat: no-repeat;

        background-size: 50% 100%;
        background-attachment: fixed
    }

    .login-main {
        background-color: rgb(6, 6, 53);
    }
</style>