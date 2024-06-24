<script setup lang="ts">
const { listings } = useCars()
</script>

<template>
	<div class="listing-feed">
		<div class="listing-feed__wrapper grid grid-cols-1 gap-6 md:gap-10">
			<ClientOnly>
				<ListingCard v-for="listing in listings" :key="listing.id" :listing="listing" />
			</ClientOnly>
		</div>
	</div>
</template>
