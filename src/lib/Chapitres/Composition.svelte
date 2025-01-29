<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
	</script>
<Slide>
	<h3>La composition</h3>
	<Slide>
		<p>
			La composition permet de créer des objets complexes en combinant des objets plus simples.
			C'est comme assembler des pièces de Lego pour construire une structure plus grande.
		</p>
		<p>
			En POO, la composition est le principe d'avoir des instances de classes comme attributs d'une
			autre classe. Ce n'est pas sans rappeler la notion de clé étrangère en base de données.
		</p>
	</Slide>
	<Slide>
		<p>
			Par exemple, une voiture est composée de plusieurs parties : un moteur, des roues, un châssis,
			etc. Chaque partie peut être une instance d'une classe.
		</p>
		<PlantUml>
			{`
	class Moteur {
	  +demarrer()
	}

	class Roue {
	  +tourner()
	}

	class Voiture {
	  -moteur: Moteur
	  -roues: Roue[]
	  +conduire()
	}
	`}
		</PlantUml>
		<p>
			La composition favorise la réutilisation du code et rend le système plus flexible. Par
			exemple, on peut remplacer le moteur d'une voiture sans modifier la classe Voiture.
		</p>
	</Slide>

	<Slide>
		<div class="r-fit-text">
			<p>
				Un des intérêts de la programmation objet réside dans les relations que ces objets
				entretiennent les uns avec les autres. Ces relations sont construites par les développeurs
				et constituent ce que l’on appelle l’architecture d’une application. Il existe deux
				relations fondamentales en programmation objet :
			</p>
			<dl class="simple">
				<dt><strong>est un</strong> (<em>is-a</em>)</dt>
				<dd>
					<p>
						Cette relation permet de créer une chaîne de relation d’identité entre des classes. Elle
						indique qu’une classe peut être assimilée à une autre classe qui correspond à une notion
						plus abstraite ou plus générale. On parle <span class="text-important">d’héritage</span>
						pour désigner le mécanisme qui permet d’implémenter ce type de relation.
					</p>
				</dd>
				<dt><strong>a un</strong> (<em>has-a</em>)</dt>
				<dd>
					<p>
						Cette relation permet de créer une relation de dépendance d’une classe envers une autre.
						Une classe a besoin des services d’une autre classe pour réaliser sa fonction. On parle
						également de relation de <span class="text-important">composition</span> pour désigner ce
						type de relation.
					</p>
				</dd>
			</dl>
		</div>
	</Slide>
	<Slide>
		<div class="flex flex-row items-center">
			<PlantUml>
				{`
		abstract class Animal {
		  +crier()
		}

		class Chien extends Animal {
		  +crier()
		}

		class Chat extends Animal {
		  +crier()
		}

		class Maitre {
		  -animal: Animal
		  +promenerAnimal()
		}
		  Maitre *-- Animal
		`}
			</PlantUml>
			<Code class="language-java">
				{`
		abstract class Animal {
			abstract void crier();
		}
		class Maitre {
			Animal animal;
			void presenterAnimal() {
				System.out.println("Voici le cri de votre animal");
				animal.crier();
			}
		}
		class Chien extends Animal {
			void crier() {
				System.out.println("Wouaf wouaf");
			}
		}

		class Chat extends Animal {
			void crier() {
				System.out.println("Miaou miaou");
			}
		}

		
		`}
			</Code>
		</div>
	</Slide>
	<Slide>
		<p>Normalement, le maître n'est pas censé avoir un comportement propre à un animal.</p>
		<p>
			Le maître possède un animal, mais il ne semble pas possible de savoir de quel animal il s'agit
		</p>
		<p>Chaque langage propose une manière de tester le type d'un objet</p>
	</Slide>
	<Slide>
		<p>Par exemple, on veut promener l'animal uniquement si c'est un chien</p>
		<p>
			Si l'on veut faire ça propre, on devrait créer un attribut <code>animalPromenable</code> dans la
			classe animal
		</p>
		<p>Toutefois, la POO est un concept, pas une règle absolue</p>
		<p>Il est possible de tester si un Animal est un Chien depuis la classe maître</p>
	</Slide>
	<Slide className="scale-90">
		<h3>Cast et instanceof</h3>
		<p>
			En Java, on peut utiliser l'opérateur <code>instanceof</code> pour vérifier si un objet est une
			instance d'une classe spécifique.
			Pour convertir un objet en une instance de classe spécifique, on utilise un <code>(cast)</code>.
		</p>
		<Code class="language-java">
			{`
				class Maitre {
					Animal animal;
					void promenerAnimal() {
						if (animal instanceof Chien) {
							System.out.println("On va promener le chien");
							((Chien) animal).crier();
						} else {
							System.out.println("Cet animal ne peut pas être promené");
						}
					}
				}
				`}
		</Code>
		<p>
			Dans cet exemple, on vérifie si l'animal est une instance de la classe <code>Chien</code>
			avant de le promener. Si c'est le cas, on effectue un cast pour appeler la méthode
			<code>crier</code>
			spécifique à la classe <code>Chien</code>.
		</p>
	</Slide>
</Slide>
