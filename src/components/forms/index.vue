<template>
  <van-row
    type="flex"
  >
    <van-col span="12" class="form-item-container">
      <form ref="formHook" class="form-wrapper">
        <div>
          <span>所在部门：</span>
          <select 
            v-model="formData.department"
            @change="handleDepartChange"
          >
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
      <ul v-if="departments.length">
        <li
          :key="parent.name"
          v-for="parent in departments"
        >
          <h3>{{parent.name}} {{parent.list ? parent.list.length : 0}}</h3>
          <van-row
            class="name"
            type="flex"
            align="middle"
            justify="space-between"
            :key="child.nickname"
            v-for="child in parent.list"
          >
            <span>{{child.nickname}}</span>
            <div>
              <van-icon 
                name="close"
                @click.native="handleDelUser(child, parent.list)"
              ></van-icon>
              <van-icon 
                name="edit"
                @click.native="handleEditUser(child)"
              ></van-icon>
            </div>
          </van-row>
        </li>
      </ul>
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
      departments: departments,
      listInfo: {
        childIndex: 0,
        parentIndex: 0
      }
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
    },
    handleDelUser(data, list) {
      let {id} = data;
      list = list.filter( v => v.id !== id);
    },
    handleEditUser(data) {
      let {id} = data;
    },
    handleDepartChange(v) {
      let id = Number(v.target.value);
      let departs =  this.departments.find(item => item.id === id);
      this.infoList = departs.list || [];
    }
  }
};
</script>

<style lang="stylus" scoped>
  .name
    padding 5px 10px
    margin-bottom 5px
    background #dedede

  .form-item-container
    max-height 600px
    overflow-y auto
    margin 15px
    border 1px solid #999

  .form-wrapper
    &>div
      padding 15px 30px
</style>