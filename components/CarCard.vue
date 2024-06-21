<script setup lang="ts"></script>

<template>
	<div class="car-card border shadow overflow-hidden cursor-pointer min-h-[200px]">
		<div class="car-card__wrapper grid grid-cols-1 gap-y-6 min-h-[200px] sm:grid-cols-12 sm:gap-x-4">
			<div class="car-card__image-container col-span-1 sm:col-span-5">
				<img
					class="car-card__image w-full h-full object-cover"
					src="https://get.wallhere.com/photo/car-vehicle-rear-view-sports-car-Ferrari-performance-car-LaFerrari-supercar-land-vehicle-automotive-design-race-car-automobile-make-luxury-vehicle-557404.jpg"
					alt=""
				/>
			</div>
			<div class="car-card__body col-span-1 sm:col-span-7">
				<div class="car-card__text h-full py-2.5">
					<p class="car-card__title mb-2 text-2xl text-blue-700">Ferrari LaFerrari</p>
					<p class="car-card__description mb-4 text-sm text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<p class="car-card__price text-xl font-semibold">$49,555</p>
				</div>
			</div>
		</div>
	</div>
</template>
