<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
	import td1corrige from '$corriges/TD/TD1.pdf?url'
	import td2corrige from '$corriges/TD/TD2.pdf?url'
	import Composition from './Chapitres/Composition.svelte'
	import { writable } from 'svelte/store'
	import { browser } from '$app/environment'
	export const repoUrl = writable((browser && localStorage.getItem('repoUrl')) || null)
	repoUrl.subscribe((val) => {
		if (browser) return (localStorage.repoUrl = val)
	})
</script>

<Slide id="exercices">
	<Slide>
		<h3>Configuration</h3>
		<p>Collez l'URL de votre répo Git</p>
		<input
			class="w-full text-accent-950 text-lg z-50 mb-16"
			type="text"
			placeholder="URL du dépôt git"
			bind:value={$repoUrl}
		/>
	</Slide>
	<Slide>
		<h2>TD</h2>
		<ul>
			<li><a href={$repoUrl + 'TD/TD1.md'}>TD1</a> 
				<!-- <span>/ <a href={td1corrige}>Corrigé</a></span> -->
			</li>
			<li><a href={$repoUrl + 'TD/TD2.md'}>TD2</a> 
				<!-- <span>/ <a href={td2corrige}>Corrigé</a></span> -->
			</li>
		</ul>
	</Slide>
	<Slide>
		<h2>TP</h2>
		<ul>
			<li><a href={$repoUrl + 'TP1/TP1.md'}>TP1</a></li>
		</ul>
	</Slide>
</Slide>
