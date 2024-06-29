import type Car from '@/types/Car'

export const useFetchCar = async (id: string) => {
	const { data, error } = await useFetch(`/api/car/${id}/`)

	if (error.value) {
		throw createError({ ...error.value, statusMessage: 'Unable to fetch car' })
	}

	const car = data.value as Car

	return { car }
}
