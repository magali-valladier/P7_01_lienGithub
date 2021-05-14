<template>
<div>
		
<div class="col-lg-7 offset-lg-3 mx-auto">
    <div class="row mx-auto">
        <div class="col-lg-8 mx-auto">
			<div class="card my-3 bg-primary mx-auto">
                <div class="card-header">
					<p class="text-white"> Post</p>
                </div>
            <div class="card-body py-2">
                <div class="d-flex">
                    <div class="col">
                        <form v-on:submit.prevent="createPost">
                            <div class="form-group mb-0">
                                <label class="sr-only" for="content">Créer un post</label>
                                <b-form-textarea name="content" type="text" v-model="content" class="form-control border-0" id="content" rows="2" placeholder="Quoi de neuf aujourd'hui ?" required></b-form-textarea>
                            </div>
                       <div class="col">
                        <button class="btn fluid btn-fposts btn-sm bg-info text-dark font-weight-bold">Envoyer</button>
                    </div>
                     </form>
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
name: "sendPost",
  data() {
    return {
    userId: parseInt(localStorage.getItem('userId')),
    content: "",
         
    }
  },
 
validations: {
    content: {
        required,
        maxLength: maxLength(255)
    }
},
methods:{
    
createPost(e) {
 e.preventDefault();   
axios.post('http://localhost:3000/api/auth/post', {
    userId: parseInt(localStorage.getItem('userId')),
    content: this.content,
},
{
headers: {
'Content-Type': 'application/json',
Authorization: 'Bearer ' + localStorage.getItem('token')
}
})

.then((res) => {
    
    this.$router.push('AllPost');
    console.log(res);
    alert("Bravo! Votre post est bien crée");
})
.catch(e => {
        console.log(e + "Impossible d'éditer le post, une erreur est survenue");
});
}
}
}


</script>

<style scoped>

</style>