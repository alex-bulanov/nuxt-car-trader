<script setup lang="ts">
useHead({
	title: 'Home'
})
</script>

<template>
	<div>
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
			<div class="hero__wrapper absolute z-10 flex justify-center items-center h-full w-full">
				<div class="hero__text w-1/2 text-center">
					<h1 class="hero__title text-6xl text-white">Find your drive</h1>
				</div>
			</div>
			<div class="absolute z-10 h-full w-full bg-black/45"></div>
		</section>
		<!-- HERO -->
	</div>
</template>
