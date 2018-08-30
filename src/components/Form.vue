<template>
  <div>
    <div class="form-wrap">
    <Form :model="formInline" :rules="formRule"  ref="formValidate">
      <FormItem prop="tel">
        <Input type="text" v-model="formInline.tel" placeholder="Enter your tel"></Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="text" v-model="formInline.password" placeholder="Enter your password"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="Submit()">Submit</Button>
        <Button @click="Reset()" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        tel: '',
        password: ''
      },
      formRule: {
        tel: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},
          {pattern: /^1[34578]\d{9}$/, message: '手机号的格式错误', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    Submit () {
      this.$refs.formValidate.validate((valid) => {
        console.log(valid)
      })
    },
    Reset () {
      this.$refs.formValidate.resetFields()
    }
  }
}
</script>
<style scoped>
.form-wrap {
  width: 300px;
  margin-left: 20px;
}
</style>
