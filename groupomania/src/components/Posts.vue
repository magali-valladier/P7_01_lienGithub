<template>
<div>
<div class="col-lg-7 offset-lg-3 mx-auto my-5">
    <h2>Tous les posts</h2>
    <div class="row mx-auto my-5" v-for="post in posts" :key="post.id">
        <div class="col-lg-8 mx-auto bg-primary ">
			<div class="card my-3 mx-auto">
                {{ post.content }} 
            </div>
            <div class="card my-3 mx-auto">
                <img :src="post.image">
</div>
            <div class="form-group ">
                <div class="my-2">
                        <button type="submit" @click.prevent="" class="btn btn-fposts btn-sm bg-info text-dark font-weight-bold"><i class="fa fa-pencil" aria-hidden="true"></i>Modifier</button>
                        </div>
                        <div>
                        <button type="submit" @click.prevent="" class="btn btn-fposts btn-sm bg-info text-dark font-weight-bold"><i class="fa fa-pencil" aria-hidden="true"></i>Supprimer</button>                   
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
    posts: [],
    pseudo: localStorage.getItem("pseudo"),
    image:""  
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
}

}
</script>