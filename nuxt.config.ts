// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: {
		host: '0.0.0.0'
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			titleTemplate: '%s | Cartrader',
			meta: [],
			link: []
		}
	},
	modules: [
		'@nuxtjs/stylelint-module',
		'@nuxtjs/eslint-module',
		'@nuxtjs/supabase',
		'@nuxt/ui',
		'@nuxt/image',
		'@vueuse/nuxt'
	],
	css: ['~/assets/scss/main.scss'],
	colorMode: {
		preference: 'light'
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "@/assets/scss/general/variables.scss" as *;
					`
				}
			}
		}
	},
	runtimeConfig: {
		public: {
			baseUrl: process.env.BASE_URL || 'http://localhost:3000'
		}
	},
	supabase: {
		redirect: false
	}
})
