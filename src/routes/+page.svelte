<script lang="ts">
	import Slides from '$lib/deck/slides.svelte'
	import '../app.postcss'
</script>

<svelte:head>
	<title>{import.meta.env.VITE_PAGE_TITLE} - {import.meta.env.VITE_AUTHOR}</title>
	<link rel="icon" href="https://fav.farm/💻" />
</svelte:head>

<Slides />
