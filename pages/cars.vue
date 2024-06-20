<script setup lang="ts">
useHead({
	title: 'Cars'
})
</script>

<template>
	<div class="page-cars">
		<!-- HEADER -->
		<header class="header fixed top-0 left-0 z-50 w-full border-b py-4 bg-white shadow">
			<UContainer>
				<div class="header__wrapper flex justify-between items-center gap-1">
					<a class="font-mono text-3xl" href="/">Cartrader</a>
				</div>
			</UContainer>
		</header>
		<!-- HEADER -->

		<main class="py-25">
			<UContainer>
				<div class="page-cars__wrapper grid grid-cols-4 gap-x-4 gap-y-14 md:grid-cols-12 md:gap-x-6">
					<!-- ASIDE -->
					<div class="col-span-4 md:col-span-4">
						<div class="aside border min-h-[200px] shadow">
							<div class="aside__wrapper flex flex-col min-h-[200px]">
								<div class="relative grow border-b flex justify-between space-x-4 p-5">
									<div class="font-semibold">Location</div>
									<div class="text-blue-400 capitalize">Toronto</div>
									<!-- <div
										class="absolute top-full right-0 border w-full p-5 shadow md:top-1/2 md:-right-[calc(100%_+_16px)]"
									>
										<UInput />
										<div class="mt-4">
											<UButton block label="Apply" />
										</div>
									</div> -->
								</div>
								<div class="relative grow border-b flex justify-between space-x-4 p-5">
									<div class="font-semibold">Make</div>
									<div class="text-blue-400 capitalize">Toyota</div>
									<!-- <div
										class="absolute top-full right-0 border w-full p-5 shadow md:top-1/2 md:-right-[calc(100%_+_16px)]"
									>
										<UInput />
										<div class="mt-4">
											<UButton block label="Apply" />
										</div>
									</div> -->
								</div>
								<div class="relative grow flex justify-between space-x-4 p-5">
									<div class="font-semibold">Price</div>
									<div class="text-blue-400 capitalize">Any</div>
									<!-- <div
										class="absolute top-full right-0 border w-full p-5 shadow md:top-1/2 md:-right-[calc(100%_+_16px)]"
									>
										<UInput />
										<div class="mt-4">
											<UButton block label="Apply" />
										</div>
									</div> -->
								</div>
							</div>
						</div>
					</div>
					<!-- ASIDE -->
					<!-- CARDS -->
					<div class="col-span-4 md:col-span-8">
						<div class="feed">
							<div class="feed__wrapper grid grid-cols-1 gap-6 md:gap-10">
								<!-- CAR CARD -->
								<div class="car-card border shadow overflow-hidden cursor-pointer min-h-[200px]">
									<div
										class="car-card__wrapper grid grid-cols-1 gap-y-6 min-h-[200px] sm:grid-cols-12 sm:gap-x-4"
									>
										<div class="car-card__image-container col-span-1 sm:col-span-5">
											<img
												class="car-card__image w-full h-full object-cover"
												src="https://get.wallhere.com/photo/car-vehicle-rear-view-sports-car-Ferrari-performance-car-LaFerrari-supercar-land-vehicle-automotive-design-race-car-automobile-make-luxury-vehicle-557404.jpg"
												alt=""
											/>
										</div>
										<div class="car-card__text col-span-1 sm:col-span-7">
											<div class="h-full py-2.5">
												<p class="car-card__title mb-2 text-2xl text-blue-700">
													Ferrari LaFerrari
												</p>
												<p class="car-card__description mb-4 text-sm text-gray-700">
													Lorem ipsum dolor sit amet consectetur adipisicing elit.
												</p>
												<p class="car-card__price text-xl font-semibold">$49,555</p>
											</div>
										</div>
									</div>
								</div>
								<!-- CAR CARD -->
							</div>
						</div>
					</div>
					<!-- CARDS -->
				</div>
			</UContainer>
		</main>
	</div>
</template>
