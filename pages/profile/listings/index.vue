<script setup lang="ts">
useHead({
	title: 'Profile'
})
</script>

<template>
	<div class="page-listings">
		<main class="page-listings__main py-25">
			<UContainer>
				<div class="page-listings__wrapper grid grid-cols-1 gap-x-4 gap-y-14">
					<div class="page-listings__text-col col-span-1">
						<div class="page-listings__text-wrapper flex justify-between items-center">
							<h1 class="page-listings__title text-3xl md:text-6xl">My Listings</h1>
							<UButton
								icon="i-heroicons-plus-16-solid"
								to="/profile/listings/create"
								:ui="{ rounded: 'rounded-full' }"
							/>
						</div>
					</div>
					<div class="page-listings__feed-col col-span-1">
						<ListingFeed />
					</div>
				</div>
			</UContainer>
		</main>
	</div>
</template>
