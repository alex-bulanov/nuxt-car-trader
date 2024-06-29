import type Car from '@/types/Car'

export const useFetchCars = async (city: string, filters: any) => {
	const { data, error } = await useFetch(`/api/cars/${city}`, {
		params: {
			...filters
		}
	})

	if (error.value) {
		throw createError({ ...error.value, statusMessage: 'Unable to fetch cars' })
	}

	const cars = data.value as Car[]

	return { cars }
}
