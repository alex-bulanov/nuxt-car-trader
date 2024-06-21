<script setup lang="ts"></script>

<template>
	<div class="page-make">
		<main class="page-make__main py-25">
			<UContainer>
				<div class="page-make__wrapper grid grid-cols-4 gap-x-4 gap-y-14 md:grid-cols-12 md:gap-x-6">
					<!-- ASIDE -->
					<div class="page-make__aside-col col-span-4 md:col-span-4">
						<AsideBar />
					</div>
					<!-- CARDS -->
					<div class="page-make__feed-col col-span-4 md:col-span-8">
						<CarsFeed />
					</div>
				</div>
			</UContainer>
		</main>
	</div>
</template>
