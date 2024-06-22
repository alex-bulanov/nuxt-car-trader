<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
	city: string().required('You must enter an city')
})

type Schema = InferType<typeof schema>

const state = reactive({
	city: undefined
})

function onSubmit(event: FormSubmitEvent<Schema>) {
	navigateTo(`/city/${state.city}/car/`)
}
</script>

<template>
	<div class="search-bar">
		<UForm :schema="schema" :state="state" @submit="onSubmit">
			<UFormGroup class="text-start" name="city">
				<UInput
					v-model="state.city"
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
							type="submit"
							:ui="{ rounded: 'rounded-none rounded-e-full' }"
						/>
					</template>
				</UInput>
			</UFormGroup>
		</UForm>
	</div>
</template>
