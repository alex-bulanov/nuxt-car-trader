import cars from '@/data/cars.json'
import type Car from '@/types/Car'

export default defineEventHandler(event => {
	const params = event.context.params as { city: string }
	const { make, minPrice, maxPrice } = getQuery(event) as { make: string; minPrice: string; maxPrice: string }

	const { city } = params
	let filteredCars = cars.filter(car => car.city.toLowerCase() === city.toLowerCase())

	if (make) {
		filteredCars = filteredCars.filter(car => car.make.toLowerCase() === make.toLowerCase())
	}

	if (minPrice) {
		filteredCars = filteredCars.filter(car => car.price >= parseInt(minPrice))
	}

	if (maxPrice) {
		filteredCars = filteredCars.filter(car => car.price <= parseInt(maxPrice))
	}

	return filteredCars as Car[]
})
