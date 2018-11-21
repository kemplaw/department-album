<template>
  <van-row
    type="flex"
  >
    <van-col span="12">
      <form ref="formHook">
        <div>
          <span>名称：</span>
          <input name="nickname" type="text" v-model="formData.nickname">
        </div>
        <div>
          <span>职位：</span>
          <input name="position" type="text" v-model="formData.position">
        </div>
        <div>
          <span>一句话性格：</span>
          <input name="desc" type="text" v-model="formData.desc">
        </div>
        <div>
          <span>星座：</span>
          <input name="constellation" type="text" v-model="formData.constellation">
        </div>
        <div>
          <span>爱好：</span>
          <input name="like" type="text" v-model="formData.like">
        </div>
        <div>
          <span>美食：</span>
          <input name="food" type="text" v-model="formData.food">
        </div>
        <div>
          <span>电影：</span>
          <input name="movie" type="text" v-model="formData.movie">
        </div>
        <div>
          <button type="button" @click="addUserInfo">添加用户信息</button>
        </div>
      </form>
    </van-col>
    <van-col span="12">
      <pre>{{infoList}}</pre>
    </van-col>
  </van-row>
</template>

<script>

  let id = 1;

  export default {
    name: "forms",
    data() {
      return {
        formData: {
          nickname: '',
          address: '',
          desc: '',
          constellation: '', // 星座
          like: '',
          food: '',
          movie: '',
          position: ''
        },
        infoList: []
      }
    },
    mounted() {
      this.$nextTick(_ => {
        document.addEventListener('keydown', _ => {
          if (_.keyCode === 13) {
            this.addUserInfo();
          }
        })
      })
    },
    methods: {
      addUserInfo() {
        let {
          nickname,
          address,
          desc,
          constellation, // 星座
          like,
          food,
          movie,
          position
        } = this.formData;
        this.infoList.push({
          id: id++,
          nickname,
          address,
          desc,
          constellation, // 星座
          like,
          food,
          movie,
          position
        });
        console.log(this.$refs.formHook);
      }
    }
  }
</script>

<style scoped>

</style>