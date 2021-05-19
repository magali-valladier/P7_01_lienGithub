<template>
<div>
<div class="col-lg-7 offset-lg-3 mx-auto my-5">
    <h2>Derniers posts</h2>
    <div class="row mx-auto my-5" v-for="post in posts" :key="post.id">
        <div class="col-lg-8 mx-auto bg-primary ">
            <div>
                <img class="rounded-circle" width="50" src="https://picsum.photos/80/80/?random?image=4">
            </div>
            <div class="text-white font-weight-bold">
                 {{ pseudo + " " + "a écrit"}}
            </div>
			<div class="card my-3 mx-auto">
                {{ post.content }} 
                <div>
            <img id="imgpost" :src="post.imageUrl">
            </div>
            </div>
    </div>
	</div>
</div>
</div>
</template>

<script>

import axios from "axios";


export default {
name: "post",

data() {
    
    return {
    token: "",
    posts: [],
    userId: localStorage.getItem("userId"),
    pseudo: localStorage.getItem("pseudo"),
    post: {
    content: "",
    imageUrl: "",
    }  
};

},
mounted() {
    
axios
.get('http://localhost:3000/api/auth/post', {
       headers: {
                'authorization': 'bearer ' + localStorage.getItem('token')
            }})
    .then((response) => {
        this.posts = response.data;
        console.log(response);
    })
},
computed: {
    postImage() {
        console.log(this.post.imageUrl);
        return `images/${this.imageUrl}`
        
    }
},

}
</script>

<style scoped>

#imgpost {
 max-width: 200px;
 max-height: 200px;
}
</style>