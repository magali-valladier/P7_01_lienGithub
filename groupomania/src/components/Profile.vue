<template>
    <div>
        <section class="section">
            <div class="container-fluid">
                <h1>Votre profil</h1>
                <div class="container-fluid bg-info col-6">
                    <div>
                    <img alt="Profil image" class="rounded-circle" src="https://picsum.photos/80/80/?random?image=4">
      </div>
      <div>
          <p>{{pseudo}}</p>
      </div>
                <div class="form-group">
                    <div class="col mx-auto">
                <b-link class="btn btn-light mr-5 font-weight-bold mb-5" to="Allpost">Voir le forum</b-link>
                <b-link class="btn btn-light font-weight-bold mb-5" to="Addpost">Rédiger un post</b-link>
                </div>
                <div>
                <b-link class="btn btn-danger font-weight-bold mb-5" @click.prevent="deleteUser">Supprimer mon compte</b-link>
                </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {required} from "vuelidate/lib/validators"; 
import axios from "axios";


export default {
name: 'profile',
data() {
    return {
    token: localStorage.getItem('token'),   
    image: "",
    name: "",
    pseudo: localStorage.getItem('pseudo'),
    userId: parseInt(localStorage.getItem('userId')),
    submited: false,
        }
    },

validations: {
   name: {
        required,
    },
    
},
methods:{
  handleFileUpload(){
   
      
    this.image = this.$refs.image.files[0];
}, 
deleteUser() {
    const id = this.userId;
    axios.delete('http://localhost:3000/api/auth/' + id, {
        headers: {Authorization: "Bearer " + this.token}
    })
    .then(res => {
        console.log(res);
        alert("Votre compte à bien été supprimé !");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("pseudo");
        this.$router.push('/login');
    })
}
} 
}
</script>