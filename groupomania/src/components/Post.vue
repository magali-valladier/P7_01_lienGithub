<template>
<div>
		
<div class="col-lg-7 offset-lg-3 mx-auto">
    <div class="row mx-auto">
        <div class="col-lg-8 mx-auto">
			<div class="card my-3 bg-primary mx-auto">
                <div class="card-header">
					<p class="text-white"> {{ post.pseudo }}</p>
                </div>
            <div class="card-body py-2">
                <div class="d-flex">
                    <div class="col">
                       <div>
                           {{ content }}
                       </div>
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
    export default {
        name: 'Post',
       
    }
</script>
<style scoped>

</style>