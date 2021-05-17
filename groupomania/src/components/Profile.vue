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
                <p> {{ pseudo }}</p>
                </div>
                 <b-link class="btn btn-light btn-lg mb-5" to="Allpost">Voir le forum</b-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {required} from "vuelidate/lib/validators"; 
//import axios from "axios";


export default {
name: 'profile',
data() {
    return {
    token: localStorage.getItem('token'),   
    image: "",
    name: "",
    pseudo: localStorage.getItem('pseudo'),
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
} 
}
</script>