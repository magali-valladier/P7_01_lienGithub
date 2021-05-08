<template>
<div>
<div class="col-lg-7 offset-lg-3 mx-auto">
    <h2>Tous les posts</h2>
    <div class="row mx-auto"  v-for="post in posts" :key="post">
        <div v-if="post" class="col-lg-8 mx-auto jumbotron">
			<div class="card my-3 bg-primary mx-auto">
            <ul>
                <li> {{ userId.pseudo }} </li>
                <li> {{ post.content }} </li>
            </ul>
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
      
      token: localStorage.getItem("token"),
      post: [],
      pseudo: localStorage.getItem("pseudo"),
      content: "",
        
    };
  },

methods: {
    getAllPost() {
        const data = {
         token: localStorage.getItem("token"),
      post: [],
      pseudo: localStorage.getItem("pseudo"),
      content: "",
    };
axios.get('http://localhost:3000/api/auth/post' , data, {
    headers:   { 
        Authorization: "Bearer" + localStorage.getItem("token")
    }})
    .then(response => response.json())
    .then(data => this.posts = data)
    }
}
}
</script>