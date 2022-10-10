<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { default as axios } from 'axios';
import router from '@/router';
import { useUserStore } from '@/stores/user';
const ruleFormRef = ref<FormInstance>();
const checkboxRememberMe = ref(false);


const ruleForm = reactive({
  username: '',
  pass: '',
});

const rules = reactive<FormRules>({
  username: [{ required: true, message: 'Chưa nhập Tên đăng nhập', trigger: 'change' }],
  pass: [{ required: true, message: 'Chưa nhập Mật khẩu', trigger: 'change' }],
});
let isLoading = ref(false);
let LgText = ref('ĐĂNG NHẬP');
let ShowMsg = ref(false);
let alertType = ref();
let alertMsg = ref('dummy');

const setCookie = (value: string) => {
  const now = new Date();
  let time = now.getTime();
  time += 3600 * 1000;
  now.setTime(time);
  console.log(new Date(Date.parse(now.toUTCString())));
  document.cookie = 'token=' + value + '; expires=' + now.toUTCString() + ';';
};

const Authenticated = async (username: string, pw: string) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/api/login',
    params: { username: username, password: pw }
  };

  const response = await axios.request(options);
  return response.data;
};
const submitForm = async (formEl: FormInstance | undefined) => {
  // isLoading.value = true;
  // LgText.value = 'ĐANG ĐĂNG NHẬP';
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      Authenticated(ruleForm.username, ruleForm.pass)
        .then(rs => {
          setCookie(rs.access_token);
          useUserStore().isLoggedIn = true;
          router.replace(sessionStorage.getItem('redirectPath') || '/defaultpath');
          sessionStorage.removeItem('redirectPath');
          // alertMsg.value = rs;
          // alertType.value = 'success';
          // ShowMsg.value = true;
          // LgText.value = 'ĐANG CHUYỂN HƯỚNG';
        })
        .catch(rs => {
          alertMsg.value = rs.response.data.message;
          alertType.value = 'error';
          ShowMsg.value = true;
          isLoading.value = false;
          LgText.value = 'ĐĂNG NHẬP';
        });
    } else {
      isLoading.value = false;
      LgText.value = 'ĐĂNG NHẬP';
    }
  });
};

</script>
<template>
  <div class="login-page">
    <div class="login-box">
      <div id="login-form">
        <p class="form-title animate__animated animate__fadeInUp">Welcome back</p>
        <p class="animate__animated animate__fadeInUp animate__delay-2s animate__fast">Đăng nhập vào Dashboard</p>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon>
          <el-form-item prop="username" size="large">
            <el-input v-model="ruleForm.username" class="mb-2 animate__animated animate__fadeInUp animate__delay-3s animate__fast" placeholder="Tên đăng nhập" size="large">
              <template #prefix>
                <el-icon class="el-input__icon">
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="pass" size="large">
            <el-input v-model="ruleForm.pass" placeholder="Mật khẩu" size="large" show-password type="password" class="mb-2 animate__animated animate__fadeInUp animate__delay-4s animate__fast">
              <template #prefix>
                <el-icon class="el-input__icon">
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          
          <el-alert :title="alertMsg" :type="alertType" :closable="false" v-show="ShowMsg" class="mb-2 animate__animated animate__fadeInUp" />
          <el-form-item class="">
            <el-checkbox v-model="checkboxRememberMe" label="Ghi nhớ đăng nhập" size="large" class="animate__animated animate__fadeInUp animate__delay-5s animate__fast"/>
            <el-button class="w-100 animate__animated animate__fadeInUp animate__delay-5s animate__fast" type="primary" size="large"
              @click="submitForm(ruleFormRef)" :loading="isLoading">
              {{LgText}}</el-button>
          </el-form-item>

        </el-form>

      </div>
      <div class="illustration-wrapper py-5 pe-5">
        <img src="../assets/img/workload-planning.png" alt="Login">
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --bg-round-a: #4481eb;
  --bg-round-b: #04befe;
  --animate-delay:  .3s;
}

html.dark {
  --bg-round-a: #28293d;
  --bg-round-b: #1c1c28;
}
</style>
<style scoped>
.login-page:before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(-45deg, var(--bg-round-a), var(--bg-round-b));
  transform: translateY(-50%);
  transition: 1.8s ease-in-out;
  animation-name: BubbleTopLeft;
  animation-duration: 2s;
  top: 30px;
  left: -500px;
  width: 1500px;
  height: 1500px;
}

@keyframes BubbleTopLeft {
  from {
    top: 0;
    left: -12px;
    width: 20px;
    height: 20px;
  }

  to {
    top: 30px;
    left: -500px;
    width: 1500px;
    height: 1500px;
  }
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--el-bg-color)
}

.login-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  background-color: var(--el-bg-color-1);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  margin: 0 auto;
  border-radius: 12px;
  z-index: 1;
}

#login-form {
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  padding: 60px;
  transition: 1.8s ease-in-out;
}

#login-form p {
  margin-bottom: 30px;
  user-select: none;
}

#login-form p.form-title {
  font-size: 42px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 0;
}


.illustration-wrapper {
  display: flex;
  align-items: flex-end;
  max-width: 800px;
  min-height: 100%;
}

.illustration-wrapper img {
  display: block;
  width: 100%;
}

@media screen and (max-width: 1023px) {
  .login-box {
    flex-direction: column;
    box-shadow: none;
  }

  .illustration-wrapper {
    max-width: 100%;
    min-height: auto;
  }

  #login-form {
    max-width: 100%;
  }
}
</style>
