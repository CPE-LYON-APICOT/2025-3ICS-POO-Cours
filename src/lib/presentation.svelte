<script lang="ts">
	import Slide from './deck/slide.svelte'
</script>

<Slide animate={true}>
	<h1 class="capitalize">{import.meta.env.VITE_PAGE_TITLE}</h1>
</Slide>