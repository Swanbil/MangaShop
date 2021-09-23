<template>
    <div id="login">
        <h1 class="title mt-5 p-2">
            Login
            <b-icon icon="person-circle" aria-hidden="true"></b-icon>
        </h1>
        <div class="form ">
            <b-form-input class="m-3" type="text" v-model="user.username" placeholder="Username" required></b-form-input>
            <b-form-input class="m-3" type="password" v-model="user.password" placeholder="Password" required></b-form-input>
            <b-button class="btn m-3 text-dark" @click="login()">Login</b-button>
        </div>

        {{response}}
        
    </div>

    

</template>

<script>
import axios from 'axios';
export default {
   name:'Login',
   data(){
       return{
           user:{
               username:'',
               password:''
           },
           response:''
       }
   },
   methods:{
       async login(){
           try{
                const response = await axios.post('/api/login',{user:this.user});
                this.response = response.data.message
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
    margin:5% 20% 5% 20%;
    display:flex;
    flex-direction: column;
    padding:8px;
    justify-content: center;
    border: 10px solid #c1b3a3;
    border-radius:2%;
    background-color: rgb(250, 250, 250);
    
}
.form{
    margin: 5% 30% 10px 30%;  
}
.btn{
    width:100%;
    background-color: rgb(250, 250, 229);
    font-weight: bold;
}
.btn:hover{
    background-color: rgb(199, 199, 184);
}
</style>