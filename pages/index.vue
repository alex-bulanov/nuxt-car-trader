<script setup lang="ts">
useHead({
	title: 'Home'
})
</script>

<template>
	<div class="page-home">
		<!-- HEADER -->
		<header class="header fixed top-0 left-0 z-50 w-full border-b py-4 bg-white shadow">
			<UContainer>
				<div class="header__wrapper flex justify-between items-center gap-1">
					<a class="font-mono text-3xl" href="/">Cartrader</a>
				</div>
			</UContainer>
		</header>
		<!-- HEADER -->

		<!-- HERO -->
		<section
			class="hero relative h-[100svh] w-full bg-no-repeat bg-cover bg-bottom bg-[url('https://avatars.mds.yandex.net/i?id=ec23475c669821aac4908e25dec6dd985205e10f-9137846-images-thumbs&n=13')]"
		>
			<div class="hero__wrapper absolute z-20 flex justify-center items-center h-full w-full">
				<div class="hero__text min-w-[320px] w-full max-w-[500px] text-center">
					<UContainer>
						<h1 class="hero__title mb-6 text-4xl text-white md:text-6xl">Find your drive</h1>
						<!-- SEARCH -->
						<div class="home__search">
							<UInput
								icon="i-heroicons-magnifying-glass-20-solid"
								size="xl"
								color="white"
								placeholder="Search..."
								:ui="{
									rounded: 'rounded-full',
									icon: { trailing: { pointer: '', padding: 'p-0' } }
								}"
							>
								<template #trailing>
									<UButton
										size="xl"
										label="Search"
										:ui="{ rounded: 'rounded-none rounded-e-full' }"
									/>
								</template>
							</UInput>
						</div>
					</UContainer>
				</div>
			</div>
			<div class="absolute z-10 h-full w-full bg-black/45"></div>
		</section>
		<!-- HERO -->
	</div>
</template>
