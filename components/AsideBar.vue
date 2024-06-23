<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { makes } = useCars()

const modal = reactive({
	make: false,
	location: false,
	price: false
})

const city = ref<string>()
const priceRange = reactive({
	min: undefined,
	max: undefined
})

const priceRangeText = computed(() => {
	const minPrice = route.query.minPrice
	const maxPrice = route.query.maxPrice

	if (!minPrice && !maxPrice) return 'Any'
	else if (!minPrice && maxPrice) {
		return `< $${maxPrice}`
	} else if (minPrice && !maxPrice) {
		return `> $${minPrice}`
	} else {
		return `$${minPrice} - $${maxPrice}`
	}
})

const handleUpdateModal = (key: keyof typeof modal) => {
	modal[key] = !modal[key]
}

const handleChangeLocation = () => {
	if (!city.value) return
	if (!isNaN(parseInt(city.value))) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Invalide city format'
		})
	}

	handleUpdateModal('location')
	navigateTo(`/city/${city.value}/car/${route.params.make}`)
	city.value = ''
}

const handleChangeMake = (make: string) => {
	handleUpdateModal('make')
	navigateTo(`/city/${route.params.city}/car/${make}`)
}

const handleChangePrice = () => {
	handleUpdateModal('price')

	if (priceRange.min && priceRange.max) {
		if (priceRange.min > priceRange.max) return
	}

	router.push({
		query: {
			minPrice: priceRange.min,
			maxPrice: priceRange.max
		}
	})
}
</script>

<template>
	<div class="aside-bar border min-h-[200px] shadow">
		<div class="aside-bar__wrapper flex flex-col min-h-[200px]">
			<!-- Location -->
			<div class="aside-bar__row relative grow border-b flex justify-between space-x-4 p-5">
				<div class="aside-bar__row-title font-semibold">Location</div>
				<div class="aside-bar__row-value text-blue-400 capitalize" @click="handleUpdateModal('location')">
					{{ route.params.city }}
				</div>
				<div
					v-if="modal.location"
					class="absolute z-20 top-full right-0 border w-full p-5 bg-white shadow md:top-1/2 md:-right-[calc(100%_+_16px)]"
				>
					<UInput v-model="city" />
					<div class="mt-4">
						<UButton block label="Apply" @click="handleChangeLocation" />
					</div>
				</div>
			</div>
			<!-- Make -->
			<div class="aside-bar__row relative grow border-b flex justify-between space-x-4 p-5">
				<div class="aside-bar__row-title font-semibold">Make</div>
				<div class="aside-bar__row-value text-blue-400 capitalize" @click="handleUpdateModal('make')">
					{{ route.params.make || 'Any' }}
				</div>
				<div
					v-if="modal.make"
					class="absolute top-full right-0 z-20 border min-w-full p-5 bg-white shadow md:top-1/2 md:left-full md:min-w-max"
				>
					<div class="grid grid-cols-3 gap-4">
						<p
							v-for="(make, index) in makes"
							:key="index"
							class="whitespace-nowrap"
							@click="handleChangeMake(make)"
						>
							{{ make }}
						</p>
					</div>
				</div>
			</div>
			<!-- Price -->
			<div class="aside-bar__row relative grow flex justify-between space-x-4 p-5">
				<div class="aside-bar__row-title font-semibold">Price</div>
				<div class="aside-bar__row-value text-blue-400 capitalize" @click="handleUpdateModal('price')">
					{{ priceRangeText }}
				</div>
				<div
					v-if="modal.price"
					class="absolute top-full right-0 z-20 border w-full p-5 bg-white shadow md:top-1/2 md:-right-[calc(100%_+_16px)]"
				>
					<div class="grid grid-cols-2 gap-4">
						<UInput v-model="priceRange.min" type="number" placeholder="Min" />
						<UInput v-model="priceRange.max" type="number" placeholder="Max" />
					</div>
					<div class="mt-4">
						<UButton block label="Apply" @click="handleChangePrice" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
