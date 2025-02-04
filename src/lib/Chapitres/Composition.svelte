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
			C'est comme assembler des briques Lego pour construire une structure plus grande.
		</p>
		<p>
			En POO, la composition consiste à avoir des instances de classes en tant qu'attributs d'une autre classe.
			Cela rappelle la notion de clé étrangère en base de données.
		</p>
	</Slide>
	<Slide>
		<p>
			Par exemple, une voiture est composée de plusieurs parties : un moteur, des roues, un châssis, etc.
			Chaque partie peut être une instance d'une classe.
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
			La composition favorise la réutilisation du code et rend le système plus flexible. Par exemple, on peut remplacer le moteur d'une voiture sans modifier la classe Voiture.
		</p>
	</Slide>

	<Slide>
		<div class="r-fit-text">
			<p>
				L'un des intérêts de la programmation orientée objet réside dans les relations que les objets entretiennent entre eux.
				Ces relations, construites par les développeurs, constituent l'architecture d'une application.
				Il existe deux relations fondamentales en programmation objet :
			</p>
			<dl class="simple">
				<dt><strong>est un</strong> (<em>is-a</em>)</dt>
				<dd>
					<p>
						Cette relation permet d'exprimer qu'une classe peut être assimilée à une autre classe, représentant une notion plus abstraite ou plus générale.
						On parle d'<span class="text-important">héritage</span> pour désigner ce mécanisme.
					</p>
				</dd>
				<dt><strong>a un</strong> (<em>has-a</em>)</dt>
				<dd>
					<p>
						Cette relation permet d'exprimer qu'une classe dépend des services d'une autre.
						On parle également de relation de <span class="text-important">composition</span> pour désigner ce type de relation.
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
		<p>
			Normalement, le maître n'est pas censé adopter le comportement propre à un animal.
			Il possède un animal, mais il n'est pas possible de déterminer de quel type d'animal il s'agit.
			Chaque langage propose un moyen de tester le type d'un objet.
		</p>
	</Slide>
	<Slide>
		<p>Par exemple, on souhaite promener l'animal uniquement s'il s'agit d'un chien.</p>
		<p>
			Si l'on veut faire cela de manière propre, on devrait créer un attribut <code>animalPromenable</code> dans la classe Animal.
		</p>
		<p>Toutefois, la POO est un concept, pas une règle absolue.</p>
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
