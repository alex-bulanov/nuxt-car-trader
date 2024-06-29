<script setup lang="ts">
const route = useRoute()
const city = route.params.city as string

const cars = await useFetchCars(city, {
	minPrice: route.query.minPrice,
	maxPrice: route.query.maxPrice,
	make: route.params.make
})
</script>

<template>
	<div class="page-make">
		<CarsFeed v-if="cars && cars.length > 0" :cars="cars" />
	</div>
</template>
