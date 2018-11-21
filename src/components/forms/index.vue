<template>
  <van-row
    type="flex"
  >
    <van-col span="12" class="form-item-container">
      <form ref="formHook" class="form-wrapper">
        <div>
          <span>所在部门：</span>
          <select v-model="formData.department">
            <option 
              :value="d.id"
              :key="d.name"
              v-for="d in departments"
            >{{d.name}}</option>
          </select>
        </div>
        <div>
          <span>名称：</span>
          <input name="nickname" type="text" v-model="formData.nickname">
        </div>
        <div>
          <span>主管：</span>
          <label>
            <input name="is_main" :value="true" type="radio" v-model="formData.is_main">
            <span>是</span>
          </label>
          <label>
            <input name="is_main" :value="false" type="radio" v-model="formData.is_main">
            <span>否</span>
          </label>
        </div>
        <div>
          <span>一句话性格：</span>
          <input name="desc" type="text" v-model="formData.desc">
        </div>
        <div>
          <span>地址：</span>
          <input name="constellation" type="text" v-model="formData.address">
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
          <button type="button" @click="getAllInfo">打印json数据</button>
        </div>
      </form>
    </van-col>
    <van-col span="12" class="form-item-container">
      <pre>{{departments}}</pre>
    </van-col>
  </van-row>
</template>

<script>
import {departments} from '@utils';

let id = 1;

export default {
  name: "forms",
  data() {
    return {
      formData: {
        nickname: "",
        address: "",
        desc: "",
        constellation: "", // 星座
        like: "",
        food: "",
        movie: "",
        is_main: false,
        department: '', // 部门
      },
      infoList: [],
      departments: departments
    };
  },
  mounted() {
    this.$nextTick(_ => {
      document.addEventListener("keydown", _ => {
        if (_.keyCode === 13) {
          this.addUserInfo();
        }
      });
    });
  },
  methods: {
    getAllInfo() {
      console.log(JSON.stringify(this.departments));
    },
    addUserInfo() {
      let {
        nickname,
        address,
        desc,
        constellation, // 星座
        like,
        food,
        movie,
        is_main,
        department,
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
        is_main
      });
      let obj = this.departments.find(v => v.id === department);
      this.$set(obj, 'list', this.infoList)
    }
  }
};
</script>

<style lang="stylus" scoped>
  .form-item-container
    margin 15px
    border 1px solid #999

  .form-wrapper
    &>div
      padding 15px 30px
</style>