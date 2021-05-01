<template>
<div>
		
<div class="col-lg-7 offset-lg-3 mx-auto">
    <div class="row mx-auto">
        <div class="col-lg-8 mx-auto">
			<div class="card my-3 bg-primary mx-auto">
                <div class="card-header">
					<div>
                        <img class="rounded-circle" width="50" src="https://picsum.photos/80/80/?random?image=4">
                    </div>
                    <p class="text-white">{{ pseudo }}</p>
                </div>
            <div class="card-body py-2">
                <div class="d-flex">
                    <div class="col" v-if="!create">
                        <form @submit.prevent="create">
                            <div class="form-group mb-0">
                                <label class="sr-only" for="post">Créer un post</label>
                                <textarea name="post" type="text" v-model="content" class="form-control border-0" id="post" rows="2" placeholder="Quoi de neuf aujourd'hui ?" required></textarea>
                            </div>
                        </form>
                    </div>
                    <div v-else>
                <h4>Post envoyé !</h4>
                <button class="btn btn-success" @click="newPost">Add</button>
                </div>
                </div>
            </div>
            <div class="card-footer p-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-fposts btn-block btn-sm bg-info text-dark font-weight-bold" ><i class="fa fa-picture-o" aria-hidden="true"></i>Ajouter un media</button>
                    </div>
					<div class="col">
                        <button type="submit" @click.prevent="create" class="btn btn-fposts btn-block btn-sm bg-info text-dark font-weight-bold"><i class="fa fa-pencil" aria-hidden="true"></i>Envoyer</button>
                    </div>
                </div>
                
            </div>
        </div>
		</div>
	</div>
</div>
</div>
</template>

<script>
import {required, maxLength,} from "vuelidate/lib/validators"; 
import axios from "axios";

export default {
name: "create",
  data() {
    return {
      pseudo: localStorage.getItem("pseudo"),
      content: "",
      userId: localStorage.getItem("userId"),
      submitStatus: null,
    };
  },
validations: {
    content: {
        required,
        maxLength: maxLength(255)
    }
},
methods:{
async create() {
    const data = {
        content: this.content
    };

await axios.post('http://localhost:3000/api/auth/post', data)
    .then(res => {
        this.userId = localStorage.getItem("token");
        this.post.id = res.data.id;
        console.log(res.data);
        this.submitStatus = true;
    })
    .catch(e => {
        console.log(e);
    })
},
newPost() {
    this.submitStatus = null;
    this.post = {};
}
}
}
	
</script>

<style scoped>

</style>