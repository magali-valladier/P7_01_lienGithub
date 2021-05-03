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
                    <div class="col">
                        <form 
                        @submit.prevent="send"
                        method="POST"
                        >
                            <div class="form-group mb-0">
                                <div>
                                    <form>
                                    <div class="form-group mb-0">
                                    <div>{{ content }}</div>
                                    </div>
                                    </form>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="card-footer p-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="col">
                        <button type="button" @click.prevent="modifyPost" class="btn btn-fposts btn-block btn-sm bg-info text-dark font-weight-bold" ><i class="fa fa-pencil" aria-hidden="true"></i>Modifier</button>
                    </div>
					<div class="col">
                        <button type="submit" @click.prevent="deletePost" class="btn btn-fposts btn-block btn-sm bg-info text-dark font-weight-bold">Supprimer</button>
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
import { required, maxLength } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "post",
  data() {
    return {
      pseudo: localStorage.getItem("pseudo"),
      content: ""
    };
  },
  validations: {
    content: {
        required,
        maxLength: maxLength(255)
    }
},
methods: {

async modifyPost() {
    await axios.post(
        "http://localhost:3000/api/auth/post/:id", {
         pseudo: localStorage.getItem('pseudo'),
    
       content: this.content})
       .then((response) => {
    (this.submitStatus = "OK"),
    console.log(response),
    this.$router.push("/post");
})
.catch(error => {
    console.log("Impossible de modifier le post :(" + (error));
        })
    }

},
async deletePost() {
    await axios.post(
        "http://localhost:3000/api/auth/post/:id",
        {
        userId: this.userId,
        content: this.content,
        },
    )
.then((response) => {
    (this.submitStatus = "OK"),
    console.log(response),
    this.$router.push("/post");
})
.catch(error => {
    console.log("Impossible de supprimer le post :(" + (error));
        })
    }
}


</script>