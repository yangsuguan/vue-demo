<template>
  <div class="hello">
    <Row>
      <Col :gutter="16" span="4" v-for="(item, index) in routerList" :key="index">
        <Button class="btn-pri" type="primary" @click="jump(item)">{{item}}</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      routerList: [
        'Form',
        'Table'
      ]
    }
  },
  methods: {
    jump (link) {
      this.$router.push(`/${link}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn-pri {
    width: 100%;
    height: 50px;
    border-radius: 0;
    border: 1px solid #fff;
  }
</style>
