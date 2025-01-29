<script lang="ts">

	import { onMount } from 'svelte'

	import '$lib/plugin/revealjs-fullscreen-code.css'
	import plantumlEncoder from 'plantuml-encoder'
	import Reveal from 'reveal.js'
	import 'reveal.js/dist/reveal.css'
	import 'reveal.js/dist/theme/black.css'
	import Highlight from 'reveal.js/plugin/highlight/highlight'
	import 'reveal.js/plugin/highlight/monokai.css'
	import Markdown from 'reveal.js/plugin/markdown/markdown'
	import Notes from 'reveal.js/plugin/notes/notes'
	import Presentation from '../presentation.svelte'

	import ExternalCode from '@edc4it/reveal.js-external-code'
	onMount(() => {
		const deck = new Reveal({
			plugins: [ExternalCode, Markdown, Highlight, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			autoAnimateUnmatched: true,
			controlsTutorial: true,
			slideNumber: 'c/t',

			hash: true,
			showNotes: true,
			mouseWheel: false,
			transition: 'zoom',
			highlight: {
				highlightOnLoad: true
			},
			minScale: 0.1,
			maxScale: 1.0,
			width: 1280,
			height: 720,
			pdfSeparateFragments: false
			// controls: false,
			// progress: false
		})

		registerPlantUml(deck)
		deck.initialize({
			dependencies: [
				// ...
				{ src: new URL('$lib/plugin/jquery-3.1.1.min.js', import.meta.url).href },
				{ src: new URL('$lib/plugin/revealjs-fullscreen-code.js', import.meta.url).href }
			]
		}).then(() => {
			if (window.location.search.includes('print-pdf')) {
				setTimeout(() => {
					window.print()
			}, 2000)
		}
		})
		window.deck = deck;
	})
	function registerPlantUml(deck: Reveal.Api) {
		deck.registerPlugin({
			id: 'plantuml',
			init(reveal) {
				reveal.addEventListener('ready', () => {
					const elements = document.querySelectorAll('pre code.language-plantuml')
					elements.forEach((element) => {
						const plantuml = element.textContent
						const img = document.createElement('img')

						img.src = ('//www.plantuml.com/plantuml/svg/' +
							plantumlEncoder.encode(plantuml!)) as string
						var oldElem = (element.parentElement as HTMLElement).closest('div.uml') as HTMLElement
						img.className = oldElem.className
						oldElem.outerHTML = img.outerHTML
					})
				})
			}
		})
	}
</script>

<div class="reveal">
	<div class="slides">
		<Presentation />
	</div>
</div>
