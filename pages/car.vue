<script setup lang="ts">
useHead({
	title: 'Car'
})
</script>

<template>
	<div class="page-car">
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
				<div class="page-car__wrapper grid grid-cols-4 gap-x-4 gap-y-6 md:grid-cols-12 md:gap-x-6">
					<!-- HERO -->
					<div class="page-car__hero col-span-4 md:col-span-12">
						<div class="page-car__hero-wrapper flex flex-col space-y-4">
							<div class="page-car__image-container">
								<img
									class="page-car__image w-full h-full object-cover"
									src="https://get.wallhere.com/photo/car-vehicle-rear-view-sports-car-Ferrari-performance-car-LaFerrari-supercar-land-vehicle-automotive-design-race-car-automobile-make-luxury-vehicle-557404.jpg"
									alt=""
								/>
							</div>
							<h1 class="page-car__title text-4xl font-semibold">Ferrari LaFerrari</h1>
							<div
								class="page-car__info border-b flex items-center justify-between space-x-4 pb-4 text-sm text-slate-500"
							>
								<div class="page-car__info flex space-x-4">
									<div>2 seats</div>
									<div>|</div>
									<div>67,444 miles</div>
								</div>
								<div class="page-car__price flex space-x-4">
									<div class="text-2xl font-semibold">$49,555</div>
								</div>
							</div>
						</div>
					</div>
					<!-- CHARACTERISTICS -->
					<div class="page-car__characteristics col-span-4 md:col-span-12">
						<div class="page-car__characteristics-wrapper flex flex-col space-y-4">
							<div class="page-car__characteristic border-b pb-4">
								<div class="page-car__characteristic-wrapper flex items-center space-x-4">
									<p class="page-car__characteristic-icon">✓</p>
									<p class="page-car__characteristic-text text-sm">Leather interior</p>
								</div>
							</div>
						</div>
					</div>
					<!-- DESCRIPTION -->
					<div class="page-car__description col-span-4 md:col-span-12">
						<p class="">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex voluptatum ipsa. Quaerat,
							eius animi. Assumenda aspernatur harum beatae commodi!
						</p>
					</div>
					<!-- CONTACT -->
					<div class="page-car__contact col-span-4 md:col-span-12">
						<UForm class="mx-auto grid grid-cols-1 gap-y-4 sm:max-w-[400px]">
							<div class="col-span-1">
								<UFormGroup label="Name" name="name">
									<UInput />
								</UFormGroup>
							</div>
							<div class="col-span-1">
								<UFormGroup label="Email" name="email">
									<UInput />
								</UFormGroup>
							</div>
							<div class="col-span-1">
								<UFormGroup label="Phone" name="phone">
									<UInput />
								</UFormGroup>
							</div>
							<div class="col-span-1">
								<UFormGroup label="Message" name="message">
									<UTextarea />
								</UFormGroup>
							</div>
							<div class="col-span-1 flex items-end">
								<UButton size="xl" block type="submit"> Submit </UButton>
							</div>
						</UForm>
					</div>
				</div>
			</UContainer>
		</main>
	</div>
</template>
