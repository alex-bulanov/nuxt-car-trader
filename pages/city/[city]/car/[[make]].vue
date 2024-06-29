<script setup lang="ts">
const route = useRoute()
const city = route.params.city as string

const { cars } = await useFetchCars(city, {
	minPrice: route.query.minPrice,
	maxPrice: route.query.maxPrice,
	make: route.params.make
})

watch(
	() => route.query,
	() => window.location.reload()
)
</script>

<template>
	<div class="page-make">
		<CarsFeed v-if="cars && cars.length > 0" :cars="cars" />
		<div v-else>
			<h1 class="text-4xl font-semibold">No Cars Found With Filters</h1>
		</div>
	</div>
</template>
