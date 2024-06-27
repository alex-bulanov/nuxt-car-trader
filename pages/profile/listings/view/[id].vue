<script setup lang="ts">
definePageMeta({
	middleware: ['auth']
})

useHead({
	title: 'View'
})
</script>

<template>
	<div class="page-view">
		<main class="page-view__main py-25">
			<UContainer>
				<MessageFeed />
			</UContainer>
		</main>
	</div>
</template>
