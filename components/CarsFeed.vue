<script setup lang="ts">
const { cars } = useCars()
</script>

<template>
	<div class="cars-feed">
		<div class="cars-feed__wrapper grid grid-cols-1 gap-6 md:gap-10">
			<CarCard v-for="car in cars" :key="car.id" :car="car" />
		</div>
	</div>
</template>
