<script setup lang="ts">
interface Props {
	features: string[]
}

defineProps<Props>()
</script>

<template>
	<div class="car-features">
		<div class="car-features__wrapper border-b pb-4 flex flex-col space-y-1">
			<div
				v-for="(feature, index) in features"
				:key="index"
				class="car-features__row flex items-center space-x-4"
			>
				<p class="car-features__row-icon">✓</p>
				<p class="car-features__row-value text-sm">{{ feature }}</p>
			</div>
		</div>
	</div>
</template>
