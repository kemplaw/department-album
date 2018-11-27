<template>
  <van-row
    type="flex"
  >
    <van-col span="12" class="form-item-container">
      <form ref="formHook" class="form-wrapper">
        <div>
          <span>总主管：</span>
          <select 
            v-model="formData.all_did"
          >
            <option 
              :value="user"
              :key="user.nickname"
              v-for="user in users"
            >{{user.nickname}}</option>
          </select>
        </div>
        <button type="button" @click="setUpper">批量设置总负责人</button> 

        <div>
          <span>id: </span>
          <input name="id" type="text" v-model="departData.id">
        </div>
        <div>
          <span>名称：</span>
          <input name="nickname" type="text" v-model="departData.name">
        </div>
        <button type="button" @click="addDepartment">添加部门</button> 

        <div>
          <span>所在部门：</span>
          <select 
            v-model="formData.did"
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
          <span>id: </span>
          <input name="id" type="text" v-model="formData.id">
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
          <van-row
            tag="h3"
            type="flex"
            align="middle"
            justify="space-between"
          >
            <div>
              <input type="checkbox" :value="parent.id" v-model="departIds">
              <span>部门： {{parent.id}} {{parent.name}} (人数)：{{parent.list ? parent.list.length : 0}}</span>
            </div>
            <van-icon 
              name="close"
              @click.native="handleDelDepart(parent.id)"
            ></van-icon>
          </van-row>
          <van-row
            class="name"
            type="flex"
            align="middle"
            justify="space-between"
            :key="child.nickname"
            v-for="child in parent.list"
          >
            <van-row
              type="flex"
              align="middle"
              justify="space-around"
            >
              <span>{{child.nickname}} {{child.id}}</span>
            </van-row>
            <div>
              <van-icon 
                name="close"
                @click.native="handleDelUser(child.id, parent.id)"
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
        did: '', // 部门
        all_did: {}, // 总主管
      },
      departData: {
        id: 1,
        name: '',
        list: [],
      },
      departIds: [],
      infoList: [],
      departments: departments,
      listInfo: {
        childIndex: 0,
        parentIndex: 0
      }
    };
  },
  computed: {
    users() {
      let all = this.departments;
      let list = [];
      if (all.length) {
        all.forEach(v => {
          if (v.list && v.list.length) {
            list = list.concat(v.list.filter(vv => vv.is_main))
          }
        })
      }
      return list;
    },
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
        id = 1,
        nickname,
        address,
        desc,
        constellation, // 星座
        like,
        food,
        movie,
        is_main,
        did,
      } = this.formData;
      this.infoList.push({
        id,
        did,
        desc,
        like,
        food,
        movie,
        is_main,
        address,
        nickname,
        constellation, // 星座
      });
      let obj = this.departments.find(v => v.id === did);
      this.$set(obj, 'list', this.infoList)
    },
    handleDelUser(id, pid) {
      this.departments.forEach(v => {
        let list = v.list;
        if (v.id === pid && list && list.length) {
          console.log(list.filter(vv => vv.id !== id));
          v.list = list.filter(vv => vv.id !== id)
        }
      })
    },
    addDepartment() {
      this.departments.push(this.departData);
    },
    handleDelDepart(did) {
      this.departments = this.departments.filter(v => v.id !== did);
    },
    handleEditUser(data) {
      this.title = '编辑员工';
      this.formData = data;
    },
    handleDepartChange(v) {
      let id = Number(v.target.value);
      let departs =  this.departments.find(item => item.id === id);
      this.infoList = departs.list || [];
    },
    setUpper() {
      
      let departs = this.departIds;
      let departList = this.departments;
      let all_did = this.formData.all_did;
      if (departList.length && departs.length) {
         departList.forEach(v => {
           departs.forEach(vv => {
             if (Number(v.id) === Number(vv)) {
              this.$set(v, 'up_data', all_did)
             }
           })
         })
      }
    },
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