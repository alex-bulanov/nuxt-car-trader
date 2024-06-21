<script setup lang="ts">
const state = reactive({
	name: undefined,
	email: undefined,
	phone: undefined,
	message: undefined
})
</script>

<template>
	<UForm class="car-from" :state="state">
		<div class="car-from__wrapper grid grid-cols-1 gap-y-4 sm:max-w-[400px]">
			<div class="col-span-1">
				<UFormGroup label="Name" name="name">
					<UInput v-model="state.name" />
				</UFormGroup>
			</div>
			<div class="col-span-1">
				<UFormGroup label="Email" name="email">
					<UInput v-model="state.email" />
				</UFormGroup>
			</div>
			<div class="col-span-1">
				<UFormGroup label="Phone" name="phone">
					<UInput v-model="state.phone" />
				</UFormGroup>
			</div>
			<div class="col-span-1">
				<UFormGroup label="Message" name="message">
					<UTextarea v-model="state.message" />
				</UFormGroup>
			</div>
			<div class="col-span-1 flex items-end">
				<UButton size="xl" block type="submit"> Submit </UButton>
			</div>
		</div>
	</UForm>
</template>
