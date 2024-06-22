<script setup lang="ts">
import type Car from '@/types/Car'

interface Props {
	car: Car
}

defineProps<Props>()
</script>

<template>
	<div
		class="car-card border shadow overflow-hidden cursor-pointer min-h-[200px]"
		@click="navigateTo(`/car/${car.name}-${car.id}`)"
	>
		<div class="car-card__wrapper grid grid-cols-1 gap-y-6 min-h-[200px] sm:grid-cols-12 sm:gap-x-4">
			<div class="car-card__image-container col-span-1 sm:col-span-5">
				<img class="car-card__image w-full h-full object-cover" :src="car.url" alt="" />
			</div>
			<div class="car-card__body col-span-1 sm:col-span-7">
				<div class="car-card__text h-full py-2.5">
					<p class="car-card__title mb-2 text-2xl text-blue-700">{{ car.name }}</p>
					<p class="car-card__description mb-4 text-sm text-gray-700">
						{{ car.description }}
					</p>
					<p class="car-card__price text-xl font-semibold">${{ car.price }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
