<template>
<div>
<div class="col-lg-7 offset-lg-3 mx-auto my-5">
    <h2>Tous les posts</h2>
    <div class="row mx-auto my-5" v-for="post in posts" :key="post.id" :pseudo="post.User.pseudo">
        <div class="col-lg-8 mx-auto bg-primary ">
            <div>
                <img class="rounded-circle" width="50" src="https://picsum.photos/80/80/?random?image=4">
            </div>
            <div>
                <p class="text-white font-weight-bold">{{ pseudo }}</p>
            </div>
			<div class="card my-3 mx-auto">
                {{ post.content }} 
                <div>
            <img id="imgpost" :src="post.imageUrl">
            </div>
            </div>
            <div>
                <div>
                <b-form-textarea name="com" type="text" v-model="com" class="form-control border-0" id="com" rows="2" placeholder="Commenter ce post" required></b-form-textarea>
                </div>
                <div>
                    <button type="submit" @click.prevent="sendCom" class="btn btn-fposts btn-sm bg-info text-dark font-weight-bold"><i class="fa fa-pencil" aria-hidden="true"></i>Commenter</button>                   
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
name: "posts",

data() {
    return {
    token: localStorage.getItem("token"),
    pseudo: post.User.pseudo,
    posts: [],
    post: {
        content: "",
        imageUrl: "",
        userId:""
    },
    newCom: {
        content:"",
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
methods: {
    sendCom() {
        const com = this.newCom;
        console.log(com);
        axios.post('http://localhost:3000/api/posts/' + postId + '/com', comment, {
            headers: {
                Authorization: "Bearer " + this.token
            }
            .then(res => {
                console.log(res);
                alert("Votre commentaire est édité")
            })
            .catch(error => console.log(error))
        })
    }
}

}
</script>

<style scoped>

#imgpost {
 max-width: 200px;
 max-height: 200px;
}
</style>