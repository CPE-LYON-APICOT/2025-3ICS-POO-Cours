<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
	</script>
<Slide><h3>Généralités sur la POO</h3>
	<Slide>
		
		<p>
			La programmation orientée objet (POO) est un paradigme de programmation qui repose sur la notion d'objets. 
			Un objet est une instance d'une classe, qui regroupe des données (attributs) et des comportements (méthodes).
		</p>
		
		
	</Slide>
	<Slide>
		<p>Pour créer un objet, on utilise le mot-clé <b>new</b> suivi du nom de la classe.</p>
		<p>Chaque classe possède un constructeur par défaut qui peut être redéfini afin de personnaliser la création de l'objet.</p>
		<Code>
			{`
			public class Personne {
				String nom;
				String prenom;
				int age;

				public Personne(String nom, String prenom, int age) {
					this.nom = nom;
					this.prenom = prenom;
					this.age = age;
				}
			}
			
			var p = new Personne("PICOT","Alexis",28);
`}
		</Code>
		
	</Slide>
	<Slide>
		<p>Il peut y avoir plusieurs constructeurs dans une classe, on parle de surcharge de constructeurs.</p>
		<Code>
			{`
			public class Personne {
				String nom;
				String prenom;
				int age;

				public Personne(String nom, String prenom, int age) {
					this.nom = nom;
					this.prenom = prenom;
					this.age = age;
				}
				public Personne(String numéroEtudiant) {
					// Recherche de l'étudiant dans la base de données à partir de son numéro
					this(nom,prenom,age);
				}
			}
`}
		</Code>
	
	</Slide>
	<Slide>
		<p>Les modificateurs d'accès permettent de définir la visibilité des attributs et des méthodes.</p>
		<p>Il existe 4 modificateurs d'accès :</p>
		<ul>
			<li><code>public</code> : accessible partout</li>
			<li><code>protected</code> : accessible dans la classe et ses sous-classes</li>
			<li><code>private</code> : accessible uniquement dans la classe</li>
			<li><code>default</code> : accessible uniquement dans le package</li>
		</ul>
		<p class="text-important">
			Nous verrons plus tard l'intérêt de ces modificateurs d'accès, ne soyez pas surpris si vous ne les comprenez pas tout de suite.
		</p>
	</Slide>
	<Slide>
		<h3>Gestion des erreurs</h3>
			<p>La gestion des exceptions permet de gérer les erreurs qui peuvent survenir lors de l'exécution d'un programme.</p>
			<p>En Java, on utilise les blocs <code>try</code>, <code>catch</code>, et <code>finally</code> pour gérer les exceptions.</p>
			<Code>
				{`
				try {
					// Code qui peut générer une exception
					int a = 10/0;
					// ou, on peut générer une exception personnalisée
					throw new Exception("Erreur personnalisée");
				} catch (Exception e) {
					// Code pour gérer l'exception
					System.out.println("Erreur : " + e.getMessage());
				} finally {
					// Code qui sera exécuté qu'il y ait une exception ou non
				}
				`}
			</Code>
			

	</Slide>
</Slide>