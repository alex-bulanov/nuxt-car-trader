<script setup lang="ts">
const route = useRoute()
const { toTitleCase } = useUtilities()

useHead({
	title: `${toTitleCase(route.params.name as string)}`
})

const { id } = route.params as { id: string }

const { car } = await useFetchCar(id)
</script>

<template>
	<div class="page-car">
		<main class="page-car__main py-25">
			<UContainer>
				<div v-if="car" class="page-car__wrapper grid grid-cols-4 gap-x-4 gap-y-6 md:grid-cols-12 md:gap-x-6">
					<div class="page-car__hero-col col-span-4 md:col-span-12">
						<CarHero :car="car" />
					</div>
					<div class="page-car__features-col col-span-4 md:col-span-12">
						<CarFeatures :features="car.features" />
					</div>
					<div class="page-car__description-col col-span-4 md:col-span-12">
						<CarDescription :description="car.description" />
					</div>
					<div class="page-car__form-col col-span-4 md:col-span-12">
						<CarForm />
					</div>
				</div>
			</UContainer>
		</main>
	</div>
</template>
