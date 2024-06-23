<script setup lang="ts">
const { cars } = useCars()

const favorite = useLocalStorage<Record<string, boolean>>('favorite', {})

const handleFavorite = (id: string) => {
	if (favorite.value[id]) {
		delete favorite.value[id]
	} else {
		favorite.value = {
			...favorite.value,
			[id]: true
		}
	}
}
</script>

<template>
	<div class="cars-feed">
		<div class="cars-feed__wrapper grid grid-cols-1 gap-6 md:gap-10">
			<ClientOnly>
				<CarCard
					v-for="car in cars"
					:key="car.id"
					:car="car"
					:is-favored="car.id in favorite"
					@update-favored="handleFavorite"
				/>
			</ClientOnly>
		</div>
	</div>
</template>
