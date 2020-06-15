<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-9 col-md-7 col-lg-5 m-auto mt-5">
          <div class="card mt-5">
            <div class="card-header bg-white mb-0">
              <h3 class="text-center text-secondary">{{$conf.logo}}</h3>
            </div>
            <div class="card-body">
              <el-form :rules="rules" ref="rulesform" :model="form" >
                <el-form-item prop="username">
                  <el-input v-model="form.username" placeholder="请输入用户名" size="medium"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    v-model="form.password"
                    type="password"
                    size="medium"
                    placeholder="请输入密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    class="w-100"
                    size="medium"
                    @click="handleSubmit"
                  >立即登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            triggrt: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.rulesform.validate(e => {
        if (!e) return;
        this.$router.push({ name: "index" });
      });
    }
  }
};
</script>