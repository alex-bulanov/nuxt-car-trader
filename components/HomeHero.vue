<script setup lang="ts"></script>

<template>
	<section
		class="home-hero relative h-[100svh] w-full bg-no-repeat bg-cover bg-bottom bg-[url('https://avatars.mds.yandex.net/i?id=ec23475c669821aac4908e25dec6dd985205e10f-9137846-images-thumbs&n=13')]"
	>
		<div class="home-hero__wrapper absolute z-20 flex justify-center items-center h-full w-full">
			<div class="home-hero__text min-w-[320px] w-full max-w-[500px] text-center">
				<UContainer>
					<h1 class="home-hero__title mb-6 text-4xl text-white md:text-6xl">Find your drive</h1>
					<SearchBar class="home-hero__search-bar" />
				</UContainer>
			</div>
		</div>
		<div class="home-hero__overlay absolute z-10 h-full w-full bg-black/45"></div>
	</section>
</template>
