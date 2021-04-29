<template>
<div>
	<h1>Posts</h1>
		<p>Nous vous rappelons que respect et entraide sont les maîtres mots ici ! ...</p>

		
<div class="col-lg-7 offset-lg-3 ">
                <div class="row">
                    <div class="col-lg-8">

                        <div class="card my-3 bg-primary">
                            <div class="card-header">
                                <ul class="nav nav-tabs card-header-tabs nav-fill">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Votre message</a>
                                    </li>
                                    </ul>
                            </div>
                            <div class="card-body py-2">
                                <div class="d-flex">
                                    <div>
                                        <img class="rounded-circle" width="50" src="https://picsum.photos/80/80/?random?image=4">
                                    </div>
                                    <div class="col">
                                        <form action="#">
                                            <div class="form-group mb-0">
                                                <label class="sr-only" for="exampleFormControlTextarea1">Post</label>
                                                <textarea class="form-control border-0" id="exampleFormControlTextarea1" rows="2" placeholder="Quoi de neuf aujourd'hui ?"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer p-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="col">
                                        <button type="button" class="btn btn-fposts btn-block btn-sm text-white"><i class="fa fa-picture-o"
                                                aria-hidden="true"></i>Ajouter un media</button>
                                    </div>
									<div class="col">
                                        <button type="button" class="btn btn-fposts btn-block btn-sm text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>Publier</button>
                                    </div>
                                    </div>
                            </div>
                        </div>

<div class="card col-sm-6 mx-auto my-50">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">@Marc Array</div>
                                    <div class="h7 text-muted">Marc Array</div>
                                </div>
                            </div>
                            <div>
                               </div>
                            </div>
                        </div>

                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                        <p class="card-text">
                            Bonjour à tous ! Ravi d'être le premier à poster sur le mur Groupomania ! En espèrant pleins de beaux échanges !
                        </p>
                    </div>
                    <div class="card-footer">
                        
                        <a href="#" class="card-link"><i class="fa fa-comment"></i> Commenter</a>
                        
                    </div>
                </div>
</div>
</div>
                    </div>
					</div>
</template>

<script>
export default {
    name: 'Posts',

}
	
</script>

<style scoped>

</style>