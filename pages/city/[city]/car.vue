<script setup lang="ts">
const route = useRoute()

useHead({
	title: `${route.params.make ? toTitleCase(route.params.make) + ' in ' : 'Cars in '} ${toTitleCase(route.params.city)}`
})

function toTitleCase(str: string): string {
	return str.replace(/\w\S*/g, function (txt: string): string {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	})
}
</script>

<template>
	<div class="cars-page">
		<main class="cars-page__main py-25">
			<UContainer>
				<div class="cars-page__wrapper grid grid-cols-4 gap-x-4 gap-y-14 md:grid-cols-12 md:gap-x-6">
					<!-- ASIDE -->
					<div class="cars-page__aside-col col-span-4 md:col-span-4">
						<AsideBar />
					</div>
					<!-- CARDS -->
					<div class="cars-page__feed-col col-span-4 md:col-span-8">
						<NuxtPage />
					</div>
				</div>
			</UContainer>
		</main>
	</div>
</template>
