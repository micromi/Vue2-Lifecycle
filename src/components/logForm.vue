<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">邮箱：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="usernameModel" placeholder="请输入邮箱">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" @keyup.enter="onLogin" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: '',
    };
  },
  computed: {
    userErrors() {
      let status;
      let errorText;
      if (!/@/g.test(this.usernameModel)) {
        status = false;
        errorText = '邮箱应包含@';
      } else {
        status = true;
        errorText = '';
      }
      if (!this.userFlag) {
        errorText = '';
        this.userFlag = true;
      }
      return {
        status,
        errorText,
      };
    },
    passwordErrors() {
      let status;
      let errorText;
      if (/^\w{0,5}$/g.test(this.passwordModel)) {
        status = false;
        errorText = '密码至少6位';
      } else {
        status = true;
        errorText = '';
      }
      if (!this.passwordFlag) {
        errorText = '';
        this.passwordFlag = true;
      }
      return {
        status,
        errorText,
      };
    },
  },
  methods: {
    onLogin() {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '部分选项未通过';
      } else {
        this.errorText = '';
        this.$emit('has-log', this.usernameModel);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
