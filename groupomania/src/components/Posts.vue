<template>
<div>
<div class="col-lg-7 offset-lg-3 mx-auto">
    <h2>Tous les posts</h2>
    <div class="row mx-auto"  v-for="post in posts" :key="post">
        <div v-if="post" class="col-lg-8 mx-auto jumbotron">
			<div class="card my-3 bg-primary mx-auto">
            <ul>
                <li> {{ post }} </li>
            </ul>
            </div>
            <div class="col">
                        <button type="submit" @click.prevent="" class="btn btn-fposts btn-block btn-sm bg-info text-dark font-weight-bold"><i class="fa fa-pencil" aria-hidden="true"></i>Modifier</button>
                    </div>
		</div>
        <div class="col">
                        <button type="submit" @click.prevent="" class="btn btn-fposts btn-block btn-sm bg-info text-dark font-weight-bold"><i class="fa fa-pencil" aria-hidden="true"></i>Supprimer</button>
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
      posts: [],
      pseudo: localStorage.getItem("pseudo"),
             
    };
  },
created(){ 
    axios.get('http://localhost:3000/api/auth/post', {
        headers: {
            Authorization: "Bearer" + localStorage.getItem("token")
        }
    }) 
},
methods: {
   getPost(){
        axios.get('http://localhost:3000/api/auth/post', {
        headers: {
            Authorization: "Bearer" + localStorage.getItem("token")
        },
      })
    
   }
}
}
</script>