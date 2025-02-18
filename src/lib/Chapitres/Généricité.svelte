<script>
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Généricité</h3>
	<Slide>
		<p>
			La généricité permet de créer des classes, des interfaces et des méthodes avec des types
			paramétrés.
		</p>
		<p>Cela permet de réutiliser du code avec différents types sans le dupliquer.</p>
	</Slide>
	<Slide>
		<h3>Classes génériques</h3>
		<Code>
			{`
	class Boite<T> {
		private T contenu;

		public void setContenu(T contenu) {
			this.contenu = contenu;
		}

		public T getContenu() {
			return contenu;
		}
	}

	Boite<String> boiteDeTextes = new Boite<>();
	boiteDeTextes.setContenu("Bonjour");
	System.out.println(boiteDeTextes.getContenu()); // Affiche "Bonjour"
	`}
		</Code>
	</Slide>
	<Slide>
		<h3>Méthodes génériques</h3>
		<Code>
			{`
	class Util {
		public static <T> void afficher(T element) {
			if (element instanceof String) {
				System.out.println("\"" + element + "\"");
			} else if (element instanceof Double || element instanceof Float) {
				System.out.printf("%.2f%n", element);
			} else {
				System.out.println(element);
			}
		}
	}

	Util.afficher("Hello"); // Affiche "Hello"
	Util.afficher(123.5); // Affiche 123.50
	`}
		</Code>
	</Slide>
	<Slide>
		<h3>Interfaces génériques</h3>
		<Code>
			{`
	interface Comparable<T> {
		int comparer(T autre);
	}

	class Personne implements Comparable<Personne> {
		private String nom;

		public Personne(String nom) {
			this.nom = nom;
		}

		public int comparer(Personne autre) {
			return this.nom.compareTo(autre.nom);
		}
	}
	`}
		</Code>
	</Slide>

	<Slide>
		<h3>Contrôle de type sur les types génériques</h3>
		<Code>
			{`
		class Boite<T> {
			private T contenu;

			public void setContenu(T contenu) {
				this.contenu = contenu;
			}

			public T getContenu() {
				return contenu;
			}
		}

		Boite<String> boiteDeTextes = new Boite<>();
		boiteDeTextes.setContenu("Bonjour");
		System.out.println(boiteDeTextes.getContenu()); // Affiche "Bonjour"

		// Erreur de compilation
		Boite<Integer> boiteDeNombres = new Boite<>();
		boiteDeNombres.setContenu("Bonjour"); // Erreur: incompatible types: String cannot be converted to Integer
		`}
		</Code>
		<p class="smaller">
			Le contrôle de type permet de s'assurer que les types utilisés avec les classes et méthodes
			génériques sont compatibles, évitant ainsi les erreurs de type à l'exécution.
		</p>
	</Slide>
	<Slide>
		<h3>Restriction des types génériques</h3>
		<p>Il est possible de "filtrer" les types génériques en utilisant des contraintes.</p>
		<div>
			<PlantUml
				>{`
    abstract class Animal 
    abstract class Oiseau extends Animal
    class Chien extends Animal
    class Colibri extends Oiseau
    class CageOiseau<T extends Oiseau>{
        T contenu
        void setContenu(T contenu)
    }
    `}
			</PlantUml>
			<Code>
				{`
    public class CageOiseau<T extends Oiseau> {}

    CageOiseau<Oiseau> cageOiseau = new CageOiseau<>();
    cageOiseau.setContenu(new Oiseau());
    cageOiseau.setContenu(new Colibri());
    CageOiseau<Chien> cageChien = new CageOiseau<>(); // Erreur de compilation
    cageChien.setContenu(new Chien()); // Erreur de compilation
    `}
			</Code>
		</div>
	</Slide>
	<Slide>
		<h3>Restriction des types génériques</h3>
		<div class="flex items-start">
			<PlantUml>
				{`
        class Cage<T extends IVolant & Animal>
        class Oiseau extends Animal implements IVolant
        class Avion extends Vehicule implements IVolant 
        Cage --down[hidden]> IVolant
        
`}
			</PlantUml>
			<Code>
				{`
        interface IVolant {}
        class Cage<T extends IVolant & Animal> {
            T contenu;
            void setContenu(T contenu) {
                this.contenu = contenu;
            }
        }
        class Oiseau extends Animal implements IVolant {}
        class Avion extends Vehicule implements IVolant {}

        Cage<Oiseau> cageOiseau = new Cage<>();
        Cage<Avion> cageAvion = new Cage<>(); // Erreur de compilation
            
        
                
        `}
			</Code>
		</div>
	</Slide>
    <Slide>
        <h3>Classes génériques avec plusieurs types</h3>
        <Code>
            {`
        class Paire<T, U> {
            private T premier;
            private U second;

            public Paire(T premier, U second) {
                this.premier = premier;
                this.second = second;
            }

            public T getPremier() {
                return premier;
            }

            public U getSecond() {
                return second;
            }
        }

        Paire<String, Integer> paire = new Paire<>("Age", 30);
        System.out.println(paire.getPremier()); // Affiche "Age"
        System.out.println(paire.getSecond()); // Affiche 30
        `}
        </Code>
    </Slide>
    <Slide>
        <h3>Méthodes génériques avec plusieurs types</h3>
        <Code>
            {`
        class Util {
            public static <T, U> void afficherDeux(T premier, U second) {
                System.out.println("Premier: " + premier);
                System.out.println("Second: " + second);
            }
        }

        Util.afficherDeux("Hello", 123);    // Affiche "Premier: Hello" et "Second: 123"
        Util.afficherDeux(3.14, true);      // Affiche "Premier: 3.14" et "Second: true"
        `}
        </Code>
    </Slide>
</Slide>
