<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Polymorphisme</h3>
	<Slide>
		<p>
			Le polymorphisme est un concept clé de la programmation orientée objet qui permet à des objets de différents types de
			être traités comme des objets du même type.
		</p>
		<p>
			Il permet d'utiliser une interface commune pour manipuler des objets de classes différentes.
		</p>
	</Slide>
	<Slide>
		<h3>Polymorphisme à la compilation</h3>
		<p>
			Le polymorphisme à la compilation, ou polymorphisme statique, est réalisé par la surcharge de méthodes.
		</p>
		<Code>
			{`
    class MathUtils {
        int additionner(int a, int b) {
            return a + b;
        }

        double additionner(double a, double b) {
            return a + b;
        }
    }
    `}
		</Code>
		<p>
			Dans cet exemple, la méthode <code>additionner</code> est surchargée pour accepter différents types de paramètres.
		</p>
	</Slide>
	<Slide>
		<h3>Polymorphisme à l'exécution</h3>
		<p>
			Le polymorphisme à l'exécution, ou polymorphisme dynamique, est réalisé par la redéfinition de méthodes.
		</p>
		<Code>
			{`
    class Animal {
        void faireDuBruit() {
            System.out.println("L'animal fait du bruit");
        }
    }

    class Chien extends Animal {
        void faireDuBruit() {
            System.out.println("Le chien aboie");
        }
    }

    class Chat extends Animal {
        void faireDuBruit() {
            System.out.println("Le chat miaule");
        }
    }
    `}
		</Code>
		<p class="smaller">
			Dans cet exemple, les classes <code>Chien</code> et <code>Chat</code> redéfinissent la méthode <code>faireDuBruit</code> de la classe <code>Animal</code>.
		</p>
	</Slide>
	<Slide>
		<h3>Utilisation du polymorphisme</h3>
		<p>
			Le polymorphisme permet de traiter des objets de différentes classes de manière uniforme.
		</p>
		<Code>
			{`
    Animal monAnimal = new Chien();
    monAnimal.faireDuBruit(); // Le chien aboie

    monAnimal = new Chat();
    monAnimal.faireDuBruit(); // Le chat miaule
    `}
		</Code>
		<p>
			Dans cet exemple, la variable <code>monAnimal</code> peut référencer des objets de type <code>Chien</code> ou <code>Chat</code> et appeler la méthode <code>faireDuBruit</code>.
		</p>
	</Slide>
	<Slide>
		<h3>Avantages du polymorphisme</h3>
		<ul>
			<li>Facilite la maintenance et l'évolution du code.</li>
			<li>Permet de créer des systèmes plus flexibles et extensibles.</li>
			<li>Encourage l'utilisation d'interfaces et de classes abstraites.</li>
		</ul>
	</Slide>
	<Slide className="smaller">
		<h3>Exemple pratique</h3>
		<p>
			Imaginons une application de gestion de formes géométriques. Chaque forme doit pouvoir calculer sa surface.
		</p>
		<Code>
			{`
    abstract class Forme {
        abstract double calculerSurface();
    }

    class Cercle extends Forme {
        double rayon;
        Cercle(double rayon) {
            this.rayon = rayon;
        }
        double calculerSurface() {
            return Math.PI * rayon * rayon;
        }
    }

    class Rectangle extends Forme {
        double largeur, hauteur;
        Rectangle(double largeur, double hauteur) {
            this.largeur = largeur;
            this.hauteur = hauteur;
        }
        double calculerSurface() {
            return largeur * hauteur;
        }
    }
    `}
		</Code>
	</Slide>
	<Slide>
		<p>
			On peut maintenant utiliser le polymorphisme pour calculer la surface de différentes formes sans se soucier de leur type spécifique.
		</p>
		<Code>
			{`
    Forme maForme = new Cercle(5);
    System.out.println(maForme.calculerSurface()); // Affiche la surface du cercle

    maForme = new Rectangle(4, 6);
    System.out.println(maForme.calculerSurface()); // Affiche la surface du rectangle
    `}
		</Code>
	</Slide>

	<Slide>
		<h3>Utiliser le type le plus générique possible</h3>
		<p>
			Lorsque vous codez des méthodes "polymorphiques", il est recommandé d'utiliser le type le plus générique possible. Cela permet de réutiliser le code plus facilement et de rendre le système plus flexible.
		</p>
		<p>
			Par exemple, si une méthode fonctionne pour un <code>Oiseau</code>, il est pertinent de se demander si elle pourrait s'appliquer à tout <code>Animal</code> ou à une de ses interfaces.
		</p>
	</Slide>
</Slide>


