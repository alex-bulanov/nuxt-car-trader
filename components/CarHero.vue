<script setup lang="ts">
import type Car from '@/types/Car'

interface Props {
	car: Car
}

defineProps<Props>()
</script>

<template>
	<div class="car-hero col-span-4 md:col-span-12">
		<div class="car-hero__wrapper flex flex-col space-y-4">
			<div class="car-hero__image-container">
				<img class="car-hero__image w-full h-full object-cover" :src="car.url" alt="" />
			</div>
			<h1 class="car-hero__title text-4xl font-semibold">{{ car.name }}</h1>
			<div
				class="car-hero__info border-b flex items-center justify-between space-x-4 pb-4 text-sm text-slate-500"
			>
				<div class="car-hero__info flex space-x-4">
					<div class="car-hero__info-title">{{ car.seats }} seats</div>
					<div>|</div>
					<div class="car-hero__info-value">{{ car.miles }} miles</div>
				</div>
				<div class="car-hero__price flex space-x-4">
					<div class="car-hero__price-value text-2xl font-semibold">${{ car.price }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
