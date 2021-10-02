<template>
  <div class="command">
    <h1 class="mt-5">Command</h1>
    <div class="form-address">
      <b-form-input
        placeholder="Street (ex: 17 rue ...)"
        v-model="address.street"
        class="p-2 m-3"
      ></b-form-input>
      <b-form-input placeholder="City" v-model="address.city" class="p-2 m-3"></b-form-input>
      <b-form-input
        placeholder="Postale Code"
        v-model="address.postalCode"
        class="p-2 m-3"
      ></b-form-input>
      <b-form-input
        placeholder="Country"
        v-model="address.country"
        class="p-2 m-3"
      ></b-form-input>
    </div>

    <b-button @click="command()"  class="btn m-2">Command</b-button>
    <b-modal id="modal-1" title="Notification" @ok="finishCommand()" centered>
      <p class="my-4">
        {{text}}
      </p>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Command",
  data() {
    return {
      address: {
        street: "",
        city: "",
        postalCode: "",
        country: "",
      },
      text:''
    };
  },
  methods: {
    command() {
        if(this.address.street && this.address.city && this.address.postalCode && this.address.country){
            this.text = "Your command has been registred! You will receive your order at your address ("+this.address.street+" "+ this.address.city+" "+ this.address.postalCode+" "+ this.address.country+") in five days ✔️";
        }
        else{
            this.text = "Please your address must be complete";
        }
        this.$bvModal.show('modal-1');
            
    },
    async finishCommand(){
        await axios.delete('/api/cart/clearCart');
        this.$router.push({name:'Home'})
    }
  },
};
</script>

<style scoped>
.form-address{
    margin:0 20% 0 20%;  
}
.btn{
    background-color:#277ac7;
    
}
</style>
