<script setup lang="ts">
const route = useRoute()

const { toTitleCase } = useUtilities()

useHead({
	title: `${route.params.make ? toTitleCase(route.params.make as string) + ' in ' : 'Cars in '} ${toTitleCase(route.params.city as string)}`
})
</script>

<template>
	<div class="cars-page">
		<main class="cars-page__main py-25">
			<UContainer>
				<div class="cars-page__wrapper grid grid-cols-4 gap-x-4 gap-y-14 md:grid-cols-12 md:gap-x-6">
					<NuxtErrorBoundary>
						<div class="cars-page__aside-col col-span-4 md:col-span-4">
							<AsideBar />
						</div>
						<div class="cars-page__feed-col col-span-4 md:col-span-8">
							<NuxtPage />
						</div>
						<template #error="{ error }">
							<div class="cars-page__error-col col-span-4 md:col-span-12">
								<div class="flex flex-col items-center">
									<h1 class="mb-4 text-3xl text-center">Sorry, something went wrong</h1>
									<div class="mb-4">
										<code>
											{{ error }}
										</code>
									</div>
									<UButton size="xl" label="Go Back" @click="error.value = null" />
								</div>
							</div>
						</template>
					</NuxtErrorBoundary>
				</div>
			</UContainer>
		</main>
	</div>
</template>
