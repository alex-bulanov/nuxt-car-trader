<script setup lang="ts"></script>

<template>
	<div class="car-hero col-span-4 md:col-span-12">
		<div class="car-hero__wrapper flex flex-col space-y-4">
			<div class="car-hero__image-container">
				<img
					class="car-hero__image w-full h-full object-cover"
					src="https://get.wallhere.com/photo/car-vehicle-rear-view-sports-car-Ferrari-performance-car-LaFerrari-supercar-land-vehicle-automotive-design-race-car-automobile-make-luxury-vehicle-557404.jpg"
					alt=""
				/>
			</div>
			<h1 class="car-hero__title text-4xl font-semibold">Ferrari LaFerrari</h1>
			<div
				class="car-hero__info border-b flex items-center justify-between space-x-4 pb-4 text-sm text-slate-500"
			>
				<div class="car-hero__info flex space-x-4">
					<div class="car-hero__info-title">2 seats</div>
					<div>|</div>
					<div class="car-hero__info-value">67,444 miles</div>
				</div>
				<div class="car-hero__price flex space-x-4">
					<div class="car-hero__price-value text-2xl font-semibold">$49,555</div>
				</div>
			</div>
		</div>
	</div>
</template>
