<script setup lang="ts"></script>

<template>
	<div class="aside-bar border min-h-[200px] shadow">
		<div class="aside-bar__wrapper flex flex-col min-h-[200px]">
			<div class="aside-bar__row relative grow border-b flex justify-between space-x-4 p-5">
				<div class="aside-bar__row-title font-semibold">Location</div>
				<div class="aside-bar__row-value text-blue-400 capitalize">Toronto</div>
				<!-- <div
										class="absolute top-full right-0 border w-full p-5 shadow md:top-1/2 md:-right-[calc(100%_+_16px)]"
									>
										<UInput />
										<div class="mt-4">
											<UButton block label="Apply" />
										</div>
									</div> -->
			</div>
			<div class="aside-bar__row relative grow border-b flex justify-between space-x-4 p-5">
				<div class="aside-bar__row-title font-semibold">Make</div>
				<div class="aside-bar__row-value text-blue-400 capitalize">Toyota</div>
				<!-- <div
										class="absolute top-full right-0 border w-full p-5 shadow md:top-1/2 md:-right-[calc(100%_+_16px)]"
									>
										<UInput />
										<div class="mt-4">
											<UButton block label="Apply" />
										</div>
									</div> -->
			</div>
			<div class="aside-bar__row relative grow flex justify-between space-x-4 p-5">
				<div class="aside-bar__row-title font-semibold">Price</div>
				<div class="aside-bar__row-value text-blue-400 capitalize">Any</div>
				<!-- <div
										class="absolute top-full right-0 border w-full p-5 shadow md:top-1/2 md:-right-[calc(100%_+_16px)]"
									>
										<UInput />
										<div class="mt-4">
											<UButton block label="Apply" />
										</div>
									</div> -->
			</div>
		</div>
	</div>
</template>
