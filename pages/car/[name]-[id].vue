<script setup lang="ts">
const route = useRoute()

const { toTitleCase } = useUtilities()

useHead({
	title: `${toTitleCase(route.params.name as string)}`
})
</script>

<template>
	<div class="page-car">
		<main class="page-car__main py-25">
			<UContainer>
				<div class="page-car__wrapper grid grid-cols-4 gap-x-4 gap-y-6 md:grid-cols-12 md:gap-x-6">
					<div class="page-car__hero-col col-span-4 md:col-span-12">
						<CarHero />
					</div>
					<div class="page-car__characteristics-col col-span-4 md:col-span-12">
						<CarCharacteristics />
					</div>
					<div class="page-car__description-col col-span-4 md:col-span-12">
						<CarDescription />
					</div>
					<div class="page-car__form-col col-span-4 md:col-span-12">
						<CarForm />
					</div>
				</div>
			</UContainer>
		</main>
	</div>
</template>
