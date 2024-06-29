import cars from '@/data/cars.json'
import type Car from '@/types/Car'

export default defineEventHandler(event => {
	const { id } = event.context.params as { id: string }

	const car = cars.find(car => car.id === parseInt(id)) as Car | null

	if (!car) {
		throw createError({
			status: 404,
			statusMessage: `Car with id of ${id} doesn not exist`
		})
	}

	return car
})
