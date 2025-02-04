<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
	</script>
<Slide>
	<h3>L'héritage</h3>
	<Slide>
		<p>
			En POO, l'héritage est un mécanisme qui permet de créer une nouvelle classe à partir d'une classe existante.
		</p>
	</Slide>
	<Slide>
		<p>
			La classe existante est appelée <span class="text-important">classe mère</span> ou
			<span class="text-important">classe de base</span>.
		</p>
	</Slide>
	<Slide>
		<p>
			La nouvelle classe est appelée <span class="text-important">classe fille</span> ou
			<span class="text-important">classe dérivée</span>.
		</p>
		<p>La classe fille peut aussi ajouter des attributs et des méthodes qui lui sont propres.</p>
		<Code>
			{`
		class Animal {
			void crier(){
				print("Je suis un animal");
			}
		}

		class Chien extends Animal {
			boolean inscritLOF;
		}
		`}
		</Code>
		<p>
			On utilise le mot-clé <code class="code text-important">extends</code> pour hériter d'une classe.
		</p>
	</Slide>

	<Slide>
		<p>
			La classe fille hérite des attributs et des méthodes de la classe mère. Elle peut aussi
			redéfinir les méthodes de la classe mère.
		</p>
		<p>Redéfinir une méthode s'appelle <span class="text-important">redéfinition</span>.</p>
	</Slide>
	<Slide>
		<p>Pourquoi redéfinir une méthode ?</p>
		<ul>
			<li>Adapter le comportement de la méthode à la classe fille.</li>
			<li>Modifier le comportement de la méthode.</li>
		</ul>
	</Slide>
	<Slide>
		<p>
			Ici, nous avons une classe Animal et une classe Chien qui hérite de la classe Animal.
		</p>
		<p>
			On veut qu'un chien fasse "Wouaf" et qu'un animal, si ce n'est pas précisé, fasse "Je suis un animal".
		</p>
		<Code>
			{`
class Animal {
	void crier(){
		print("Je suis un animal");
	}
}

class Chien extends Animal {
	void crier(){
		print("Wouaf wouaf");
	}
}`}
		</Code>
	</Slide>
	<Slide>
		<p>On peut aussi appeler la méthode de la classe mère.</p>
		<Code lines="8|1-12">
			{`
class Animal {
	void crier(){
		print("Je suis un animal");
	}
}
	class Chien extends Animal {
		void crier(){
			super.crier();
			print(", Wouaf wouaf");
			// Je suis un animal, Wouaf wouaf
		}
	}
`}
		</Code>
	</Slide>
	<Slide>
		<h3>Les classes abstraites</h3>
		<p>
			Une classe abstraite est une classe qui ne peut pas être instanciée et qui est destinée à être
			héritée par d'autres classes.
		</p>
		<p>
			Elle peut contenir des méthodes abstraites, c'est-à-dire des méthodes sans implémentation, qui
			doivent être redéfinies dans les classes filles.
		</p>
	</Slide>
	<Slide>
		<h3>Pourquoi utiliser des classes abstraites ?</h3>
		<ul>
			<li>Pour définir un comportement commun à plusieurs classes.</li>
			<li>Pour forcer les classes filles à implémenter certaines méthodes.</li>
			<li>Surtout, il n'a parfois aucun sens d'instancier une classe.</li>
		</ul>
	</Slide>
	<Slide>
		<Code>
			{`
		abstract class Forme {
			abstract double calculerSurface();
		}
			`}
		</Code>
		<div class="flex flex-row">
			<Code class="language-java">
				{`class Cercle extends Forme {
				double rayon;
	
				Cercle(double rayon) {
					this.rayon = rayon;
				}
	
				double calculerSurface() {
					return Math.PI * rayon * rayon;
				}
			}
	
			`}
			</Code>
			<Code class="language-java">
				{`class Triangle extends Forme {
				double base, hauteur;
	
				Triangle(double base, double hauteur) {
					this.base = base;
					this.hauteur = hauteur;
				}
	
				double calculerSurface() {
					return (base * hauteur) / 2;
				}
			}
			`}
			</Code>
			
		</div>
		
	</Slide>
	<Slide>
		<p>
			Dans cet exemple, la classe <code class="code text-important">Forme</code> est abstraite et
			contient une méthode abstraite <code class="code text-important">calculerSurface</code>.
		</p>
		<p>
			Les classes <code class="code text-important">Cercle</code> et
			<code class="code text-important">Triangle</code> héritent de <code class="code text-important">Forme</code> et implémentent la méthode
			<code class="code text-important">calculerSurface</code>.
		</p>
		<p>Comment voudriez-vous coder la surface d'une forme ? C'est impossible !</p>
	</Slide>




	
</Slide>