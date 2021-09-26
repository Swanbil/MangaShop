<template>
    <div class="register">
        <h1 class="title mt-5 p-2">
            Register
            <b-icon icon="person-circle" aria-hidden="true"></b-icon>
        </h1>
        <div class="form ">
            <b-form-input class="m-3" type="text" v-model="newUser.username" placeholder="Username" required></b-form-input>
            <b-form-input class="m-3" type="password" v-model="newUser.password" placeholder="Password" required></b-form-input>
            <b-form-input class="m-3" type="password" v-model="checkPassword" placeholder="Confirm password" required></b-form-input>
            <b-button class="btn m-3 text-light" @click="register()">Register</b-button>
        </div>
        <div v-if="response.isOk & response.text !=''" class="response bg-success text-light">
            <h6>{{response.text}}</h6>
        </div>
        <div v-if="!response.isOk & response.text !=''" class="response bg-danger text-light">
            <h6>{{response.text}}</h6>
        </div>     
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name: 'Register',
    data() {
      return{
          newUser:{
              username:'',
              password:''
          },
          checkPassword:'',
          response: {
            isOk: false,
            text: "",
        }

      }  
    },
    methods:{
        async register(){
            this.response.text="";
            if(this.checkPassword == this.newUser.password){
                try{
                    const response = await axios.post('/api/register',{newUser:this.newUser});
                    this.response.text = response.data.message;
                    this.response.isOk = true;
                    this.newUser.username = "";
                    this.newUser.password = "";
                    this.checkPassword = "";
                }
                catch(error){
                   this.response.isOk = false;
                    this.response.text = error.response.data.message;
                }
            }
            else{
                this.response.text = "Your two passwords are not same";
            }
        }
    }
}
</script>

<style scoped>
.register{
    margin:5% 25% 5% 25%;
    display:flex;
    flex-direction: column;
    padding:15px;
    justify-content: center;
    border: 10px solid rgb(41, 39, 39);
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
.response{
    margin:5% 15% 5% 15%;
}
.title{
    color:#277ac7;
}
</style>
