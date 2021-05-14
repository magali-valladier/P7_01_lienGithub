<template>
<div>
		
<div class="col-lg-7 offset-lg-3 mx-auto mt-5 mb-5">
    <div class="row mx-auto mt-5">
        <div class="col-lg-8 mx-auto mt-5 mb-5">
			<div class="card mt-5 bg-primary mx-auto mb-5">
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