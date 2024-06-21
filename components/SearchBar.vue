<script setup lang="ts"></script>

<template>
	<div class="search-bar">
		<UInput
			class="search-bar__input"
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
					class="search-bar__submit"
					size="xl"
					label="Search"
					:ui="{ rounded: 'rounded-none rounded-e-full' }"
				/>
			</template>
		</UInput>
	</div>
</template>
