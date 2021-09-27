<template>
    <div class="carts">
        <h1 class="mt-5">Cart</h1>
        <div class="cart" v-for="c in cart" :key="c.id">
            {{c.title}} {{c.price}}$ {{c.quantity}}
        </div>
    </div>
</template>

<script>

export default{
    name:'Cart',
    props:{
        isLog : Boolean,
        cart : Array
    },
    methods:{
        //methods to add an other item or remove item
    }

}
</script>
