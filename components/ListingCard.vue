<script setup lang="ts">
import type Listing from '@/types/Listing'

interface Props {
	listing: Listing
}

defineProps<Props>()
</script>

<template>
	<div class="listing-card shadow overflow-hidden">
		<div class="listing-card__wrapper grid grid-cols-1 gap-y-6 min-h-[200px] sm:grid-cols-12 sm:gap-x-4">
			<div class="listing-card__image-container col-span-1 sm:col-span-5">
				<NuxtImg class="listing-card__image w-full h-full object-cover" :src="listing.url" alt="" />
			</div>
			<div class="listing-card__body col-span-1 sm:col-span-7">
				<div class="listing-card__text relative h-full p-2.5">
					<div class="listing-card__actions flex justify-end items-center space-x-4">
						<ULink
							active-class="text-primary"
							inactive-class="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-200"
							:to="`/profile/listings/view/${listing.id}`"
						>
							View
						</ULink>
						<UButton icon="i-heroicons-trash-16-solid" color="red" variant="solid">Delete</UButton>
					</div>
					<p class="listing-card__title mb-2 text-2xl text-blue-700">{{ listing.name }}</p>
					<p class="listing-card__description mb-4 text-sm text-gray-700">{{ listing.description }}</p>
					<p class="listing-card__price text-xl font-semibold">$ {{ listing.price }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
