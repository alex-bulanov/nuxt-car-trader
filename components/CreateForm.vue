<script setup lang="ts">
import { object, string, number, mixed, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const { makes } = useCars()
const currentYear = new Date().getFullYear()

const schema = object({
	make: string().required('You need to choose one of the options'),
	model: string().required('You must specify the model'),
	year: number()
		.transform((value, originalValue) => {
			// Преобразование пустых строк в undefined
			return originalValue === '' ? undefined : value
		})
		.typeError('Year must be a number')
		.required('You must specify the year')
		.min(1900, 'Year cannot be earlier than 1900')
		.max(currentYear, `Year cannot be later than ${currentYear}`),
	miles: number().required('You must specify the number of miles you have traveled'),
	price: number()
		.transform((value, originalValue) => {
			// Преобразование пустых строк в undefined
			return originalValue === '' ? undefined : value
		})
		.required('You must specify the price'),
	city: string().required('You must specify the city'),
	seats: number()
		.transform((value, originalValue) => {
			// Преобразование пустых строк в undefined
			return originalValue === '' ? undefined : value
		})
		.required('You must specify the seats'),
	features: string().required('You must specify the features'),
	image: mixed()
		.required('You must upload an image')
		.test('file-type', 'Only image files are allowed', value => {
			if (!value) return true // Skip if no value provided

			// Check if value is a File object and validate its type
			if (value instanceof File) {
				return value.type.startsWith('image/')
			} else {
				return false // Return false if value is not a File
			}
		})
})

type Schema = InferType<typeof schema>

const preview = ref<any>(null)
const state = reactive({
	make: undefined,
	model: undefined,
	year: undefined,
	miles: undefined,
	price: undefined,
	city: undefined,
	seats: undefined,
	features: undefined,
	description: undefined,
	image: null as File | null
})

function hanledChange(files: File[]) {
	const file = files[0] || null

	if (file) {
		const reader = new FileReader()
		reader.onload = e => {
			preview.value = e.target?.result
		}
		state.image = file
		reader.readAsDataURL(file)
	} else {
		state.image = null
	}
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
	// Do something with event.data
	await console.log(event.data)
}
</script>

<template>
	<UForm :schema="schema" :state="state" class="w-full md:max-w-[400px] space-y-4" @submit="onSubmit">
		<UFormGroup label="Make" name="make" required>
			<USelectMenu v-model="state.make" :options="makes" placeholder="Select car" />
		</UFormGroup>
		<UFormGroup label="Model" name="model" required>
			<UInput v-model="state.model" placeholder="Specify the model" />
		</UFormGroup>
		<UFormGroup label="Year" name="year" required>
			<UInput v-model="state.year" type="number" placeholder="Year" />
		</UFormGroup>
		<UFormGroup label="Miles" name="miles" required>
			<UInput v-model="state.miles" type="number" placeholder="Miles" />
		</UFormGroup>
		<UFormGroup label="Price" name="price" required>
			<UInput v-model="state.price" type="number" placeholder="Price" />
		</UFormGroup>
		<UFormGroup label="City" name="city" required>
			<UInput v-model="state.city" placeholder="city" />
		</UFormGroup>
		<UFormGroup label="Seats" name="seats" required>
			<UInput v-model="state.seats" placeholder="seats" />
		</UFormGroup>
		<UFormGroup label="Features" name="features" required>
			<UInput v-model="state.features" placeholder="features" />
		</UFormGroup>
		<UFormGroup label="Image" name="image" required>
			<UInput type="file" accept="image/*" size="sm" icon="i-heroicons-folder" @change="hanledChange" />
		</UFormGroup>
		<UFormGroup label="Description" name="description">
			<UTextarea v-model="state.description" placeholder="description" />
		</UFormGroup>

		<div v-if="preview" class="">
			<img :src="preview" alt="" />
		</div>

		<UButton type="submit"> Submit </UButton>
	</UForm>
</template>
