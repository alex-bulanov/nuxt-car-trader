<script setup lang="ts">
useHead({
	title: 'Create'
})
</script>

<template>
	<div class="page-create">
		<main class="page-create__main py-25">
			<UContainer>
				<div class="page-create__wrapper grid grid-cols-1 gap-x-4 gap-y-14">
					<div class="page-create__text-col col-span-1">
						<div class="page-create__text-wrapper flex justify-between items-center">
							<h1 class="page-create__title text-3xl md:text-6xl">Create a new listing</h1>
						</div>
					</div>
					<div class="page-create__form-col col-span-1">
						<CreateForm />
					</div>
				</div>
			</UContainer>
		</main>
	</div>
</template>
