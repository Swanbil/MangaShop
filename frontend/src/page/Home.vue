<template>
    <div id="home">
        <h1 class="title mt-5">
            <b-icon icon="book-half" aria-hidden="true"></b-icon>
            MangaSHOP
        </h1>
        <h4 class="subtitle mt-4">The first e-commerce website of mangas in the world ⛩️</h4>
        <section class="services mt-5">
            <h3 class="pt-3">Services</h3>
            <hr class="separator">
            <ul class="list-services row-no-gutters">
                <li class="service col">
                    <b-icon icon="book" aria-hidden="true" font-scale="4"></b-icon>
                    <h5 class="mt-3">See the last release of mangas available on our shop</h5>

                </li>
                <li class="service col">
                    <b-icon icon="cart4" aria-hidden="true" font-scale="4"></b-icon>
                    <h5 class="mt-3">Shop your favorite mangas and discover new universe</h5>
                </li>
            </ul>
        </section>
    </div>

</template>

<script>
export default {
   name:'Home'
}
</script>

<style scoped>
.services{
    background-color:rgb(247, 245, 245);
}
.list-services{
    display: flex;
    flex-direction: row;
    color:rgb(41, 39, 39);
}
.service{
    list-style: none;
    padding:5%;
}
.separator{
    margin:auto;
	margin-top:3%;
	height:5px;
	width:20%;
    color:rgb(65, 133, 236);   
}
.title{
    color:#277ac7;
    font-weight:800
}
.subtitle{
    font-style: italic;
}
h3{
    font-weight: 600;
    color:rgb(41, 39, 39);
    font-style:italic;
}
</style>