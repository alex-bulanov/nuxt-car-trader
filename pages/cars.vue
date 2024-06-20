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
				<div class="page-cars__wrapper grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
					<!-- ASIDE -->
					<div class="col-span-4">
						<div class="aside border min-h-[190px] shadow">
							<div class="aside__wrapper grid grid-cols-1">
								<div class="relative border-b flex justify-between space-x-4 p-5">
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
								<div class="relative border-b flex justify-between space-x-4 p-5">
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
								<div class="relative border-b flex justify-between space-x-4 p-5">
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
					<!-- CARDS -->
					<div class="col-span-4"></div>
				</div>
			</UContainer>
		</main>
	</div>
</template>
