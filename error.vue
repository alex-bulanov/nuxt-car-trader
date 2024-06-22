<script setup lang="ts">
const error = useError()

useHead({
	title: 'Error'
})

const handleError = () => {
	clearError({
		redirect: '/'
	})
}
</script>

<template>
	<div class="page-error">
		<main class="page-error__main">
			<div class="page-error__wrapper flex flex-col justify-center h-[100svh]">
				<UContainer>
					<h1 class="page-error__title mb-4 text-3xl text-center">Error: {{ error?.statusCode }}</h1>
					<p class="page-error__message mb-2 text-center">{{ error?.statusMessage }}</p>

					<div class="page-error__actions text-center">
						<UButton size="xl" label="На Главную" @click="handleError" />
					</div>
				</UContainer>
			</div>
		</main>
	</div>
</template>
