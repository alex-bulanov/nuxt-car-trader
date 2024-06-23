<script setup lang="ts">
import type Car from '@/types/Car'
import heartOutline from '@/assets/images/heartOutline.png'
import heartFilled from '@/assets/images/heartFilled.png'

interface Props {
	car: Car
	isFavored: boolean
}

defineProps<Props>()

const emits = defineEmits<{
	(e: 'updateFavored', id: string): void
}>()
</script>

<template>
	<div
		class="car-card border shadow overflow-hidden cursor-pointer min-h-[200px]"
		@click="navigateTo(`/car/${car.name}-${car.id}`)"
	>
		<div class="car-card__wrapper grid grid-cols-1 gap-y-6 min-h-[200px] sm:grid-cols-12 sm:gap-x-4">
			<div class="car-card__image-container col-span-1 sm:col-span-5">
				<NuxtImg class="car-card__image w-full h-full object-cover" :src="car.url" alt="" />
			</div>
			<div class="car-card__body col-span-1 sm:col-span-7">
				<div class="car-card__text relative h-full py-2.5">
					<img
						class="car-card__favored absolute top-2.5 right-2.5 w-6 h-6 cursor-pointer"
						:src="isFavored ? heartFilled : heartOutline"
						alt=""
						@click.stop="emits('updateFavored', String(car.id))"
					/>
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
