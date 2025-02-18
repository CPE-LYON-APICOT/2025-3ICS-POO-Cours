<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Les membres statiques</h3>
	<Slide>
		<p>
			Les membres statiques appartiennent à la classe plutôt qu'à une instance spécifique de la
			classe.
		</p>
		<p>Ils sont partagés par toutes les instances de la classe.</p>
		<p>
			Cela signifie que vous pouvez accéder à un membre statique sans créer d'instance de la classe.
		</p>
	</Slide>
	<Slide>
		<h3>Attributs statiques</h3>
		<div class="flex flex-row ">
			<Code class="language-java">
				{`
			// Non-static
			class Compteur {
				int count = 0;

				void increment() {
					count++;
				}
			}

			Compteur c1 = new Compteur();
			Compteur c2 = new Compteur();
			c1.increment();
			c2.increment();
			System.out.println(c1.count); // Affiche 1
			System.out.println(c2.count); // Affiche 1
			`}
			</Code>
			<Code>
				{`
			// Static
			class Compteur {
				static int count = 0;

				static void increment() {
					count++;
				}
			}

			Compteur.increment();
			Compteur.increment();
			System.out.println(Compteur.count); // Affiche 2
			`}
			</Code>
		</div>
		<p class="smaller">
			Notez qu'il n'est pas nécessaire de créer une instance de la classe <code>Compteur</code> pour accéder à l'attribut statique <code>count</code>.
			En outre <code>count</code> est partagé entre toutes les instances de la classe <code>Compteur</code>.
		</p>
	</Slide>
	<Slide>
		<h3>Méthodes statiques</h3>
		<Code>
			{`
	class MathUtils {
		static int additionner(int a, int b) {
			return a + b;
		}
	}
	
	int result = MathUtils.additionner(3, 4);
	`}
		</Code>
		<p>
			La méthode <code>additionner</code> peut être appelée sans créer une instance de la classe
			<code>MathUtils</code>.
		</p>
		<p>
			Remarquez que vous utilisez <code>System.out.println()</code> sans créer d'instance de la classe, il s'agit 		d'une méthode statique.
		</p>
	</Slide>
	<Slide>
		<h3>Limitation des méthodes statiques</h3>
		<Code>
			{`
		class Exemple {
			int instanceVariable = 10;

			static void methodeStatique() {
				// Erreur : impossible d'accéder à une variable d'instance depuis une méthode statique
				// System.out.println(instanceVariable);
			}

			void methodeInstance() {
				System.out.println(instanceVariable); // Ceci est valide
			}
		}
			`}
		</Code>
		<p>
			Une méthode statique ne peut pas accéder directement aux attributs ou méthodes non statiques de la classe. 
			Cela est dû au fait que les méthodes statiques n'ont pas de référence à une instance spécifique de la classe.
		</p>
	</Slide>
	<Slide>
		<h3>Avantages des membres et méthodes statiques</h3>
		<ul>
			<li>Partage des ressources : Les membres statiques sont partagés par toutes les instances de la classe, ce qui permet de partager des données ou des états communs.</li>
			<li>Accès sans instance : Les méthodes et attributs statiques peuvent être utilisés sans créer d'instance de la classe, ce qui simplifie l'accès aux utilitaires et aux constantes.</li>
			<li>Performance : L'accès aux membres statiques peut être plus rapide car il n'y a pas besoin de créer et de gérer des instances d'objets.</li>
			<li>Organisation du code : Les méthodes statiques peuvent regrouper des fonctions utilitaires ou des opérations liées à la classe, améliorant ainsi la lisibilité et la maintenance du code.</li>
		</ul>
	</Slide>
</Slide>
