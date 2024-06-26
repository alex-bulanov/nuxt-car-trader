<script setup lang="ts">
definePageMeta({
	layout: 'empty'
})

useHead({
	title: 'Login'
})

const supabase = useSupabaseClient()

const handleLogin = async () => {
	const { error } = await supabase.auth.signInWithOAuth({
		provider: 'google'
	})

	if (error) {
		console.log('Error -> ', error)
	}
}
</script>

<template>
	<div class="page-login">
		<main class="page-login__main py-25">
			<UContainer>
				<div class="page-login__wrapper text-center">
					<h1 class="page-login__title mb-6 text-4xl text-center md:text-6xl">Login</h1>
					<UButton
						icon="i-logos-google-icon"
						size="xl"
						color="primary"
						variant="solid"
						label="Login with Google"
						:trailing="false"
						@click="handleLogin"
					/>
				</div>
			</UContainer>
		</main>
	</div>
</template>
