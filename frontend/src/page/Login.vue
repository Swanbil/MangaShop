<template>
    <div id="login">
        <h1 class="title mt-5 p-2">
            Login
            <b-icon icon="person-circle" aria-hidden="true"></b-icon>
        </h1>
        <div class="form ">
            <b-form-input class="m-3" type="text" v-model="user.username" placeholder="Username" required></b-form-input>
            <b-form-input class="m-3" type="password" v-model="user.password" placeholder="Password" required></b-form-input>
            <b-button class="btn m-3 text-light" @click="login()">Login</b-button>
        </div>
        <div id="register">
            You don't have an account, sign in
            <router-link class="link" to="/register">here</router-link>
        </div>
        <div id="response mb-5">
            {{response}}
        </div>
    </div>
</template>

<script>
import axios from 'axios';
const jwt = require('jsonwebtoken');
export default {
   name:'Login',
   props: {
    isLog: Boolean,
    isAdmin: Boolean
  },
   data(){
       return{
           user:{
               username:'',
               password:''
           },
           response:'',
       }
   },
   methods:{
       async login(){
           try{
                const response = await axios.post('/api/login',{user:this.user});
                const token = response.data.token
                localStorage.setItem('token',token)
                const decodeToken = jwt.decode(token)
                this.response = response.data.message;
                const isLog = decodeToken.log;
                const isAdmin = decodeToken.admin;
                console.log(decodeToken);
                this.$emit('clicked', isLog);
                this.$emit('changeAdmin', isAdmin);
                this.$router.push({name:'Home'})
           }
           catch(e){
               console.log(e);
           }
           
       }
   }
}
</script>

<style scoped>
#login{
    margin:5% 25% 5% 25%;
    display:flex;
    flex-direction: column;
    padding:15px;
    justify-content: center;
    border: 10px solid rgb(63, 63, 63);
    border-radius:2%;
    background-color: rgb(250, 250, 250);
    box-shadow: 10px 5px 5px rgb(163, 161, 161);
    
}
.form{
    margin: 5% 30% 10px 30%;  
}
.btn{
    width:100%;
    background-color: #277ac7;
    font-weight: bold;
}
.btn:hover{
    background-color: #519ee6;
}
.title{
    color:#277ac7;
}
#register{
    margin-bottom:5%;
}
</style>