<script lang="ts">
	import Slide from '$lib/deck/slide.svelte'
	import Heritage from '$lib/Chapitres/Heritage.svelte'
	import Introduction from '$lib/Chapitres/Introduction.svelte'
	import Composition from '$lib/Chapitres/Composition.svelte'
	import Interfaces from '$lib/Chapitres/Interfaces.svelte'
	import Encapsulation from '$lib/Chapitres/Encapsulation.svelte'
	import Gnralits from './Chapitres/Généralités.svelte'
	import Code from './deck/code.svelte'
	import Reveal from 'reveal.js'
	import Gpt from './deck/gpt.svelte'
	import Exercices from './Exercices.svelte'
</script>

<Slide animate={true}>
	<h1 class="capitalize">{import.meta.env.VITE_PAGE_TITLE}</h1>
	<a class="print:hidden" href="/?print-pdf" target="_blank">Version imprimable 🖨</a><br />
	<a class="print:hidden" href="/?view=scroll" target="_blank">Version défilable</a><br/>
	<a class="print:hidden" href="#/exercices" >Lien vers les TP/TD</a>
</Slide>

<Slide data_background_color="#00353F">
	<Slide>
		<h2>Présentation du module</h2>
		<ul>
			<li>Pourquoi la POO</li>
			<li>Mise en oeuvre en Java</li>
			<li>Concepts avancés</li>
			<li>Projet</li>
		</ul>
	</Slide>
	<Slide>
		<h2>Déroulé</h2>

		<ol>
			<li>CM en début de cours</li>
			<li>TD</li>
			<li>TP/Projet</li>
		</ol>
	</Slide>
	<Slide>
		<h2>Modalités d'examen</h2>
		<ul>
			<li>DS portant sur ce qui est abordé en <b>TD</b></li>
			<li>Projet</li>
			<li>Contrôle continu sur la rigueur en cours</li>
		</ul>
	</Slide>
	<Slide>
		<h2>Mise en place des TDs/TPs</h2>
		<p>Les TD</p>
	</Slide>
</Slide>

<Introduction />
<Slide>
	<h3>Les concepts de la POO</h3>
	<ol>
		<li>Généralités</li>
		<li>L'héritage</li>
		<li>La composition</li>
		<li>Les interfaces</li>
		<li>L'encapsulation</li>
		<li>Le polymorphisme</li>
	</ol>
</Slide>
<Gnralits />
<Heritage />
<Composition />
<Interfaces />
<Encapsulation />



<Exercices/>