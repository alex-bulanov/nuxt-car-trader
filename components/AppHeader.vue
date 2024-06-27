<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const handleLogout = async () => {
	const { error } = await supabase.auth.signOut()

	if (error) {
		console.log('error', error)
	}

	navigateTo('/')
}
</script>

<template>
	<header class="app-header fixed top-0 left-0 z-50 w-full border-b py-4 bg-white shadow">
		<UContainer>
			<div class="app-header__wrapper flex justify-between items-center gap-1">
				<div class="app-header__logo logo">
					<NuxtLink class="logo__link font-mono text-2xl" to="/">Cartrader</NuxtLink>
				</div>
				<div v-if="user" class="app-header__profile flex items-center space-x-4">
					<NuxtLink class="app-header__profile-link text-sm" to="/profile/listings/">Profile</NuxtLink>
					<UButton color="red" variant="ghost" label="logout" @click="handleLogout" />
				</div>
				<div v-else class="app-header__profile">
					<NuxtLink class="app-header__profile-link text-sm" to="/login/">Login</NuxtLink>
				</div>
			</div>
		</UContainer>
	</header>
</template>
