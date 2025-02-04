<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
	import ProgProceduraleSchema from '$lib/Seance1/ProgProceduraleSchema.svelte'   
	import ProgOOSchema from '$lib/Seance1/ProgOOSchema.svelte'
	</script>
<Slide>
	<Slide><h1>Introduction</h1></Slide>
	<Slide>
		<h2>
			La <span data-fragment-index="1" class="fragment highlight-red">Programmation</span> Orientée Objet
		</h2>
		<p data-fragment-index="1" class="fragment">La programmation, c'est manipuler des données...</p>
		<p data-fragment-index="2" class="fragment">
			<i>Comment structurer ces données et les traitements associés ?</i>
		</p>
	</Slide>

	<Slide>
		<div class="grid-cols-2 grid justify-items-center">
			<h3>Programmation procédurale</h3>
			<h3 data-fragment-index="1" class="fragment">Programmation orientée objet</h3>
			<ProgProceduraleSchema />
			<div data-fragment-index="1" class="fragment">
				<ProgOOSchema />
			</div>
		</div>
	</Slide>
	<Slide>
		<div class="grid-cols-2 grid justify-items-center">
			<h3>Programmation procédurale</h3>
			<h3>Programmation orientée objet</h3>
			<ul>
				<li>Les données et les traitements sont séparés</li>
				<li>Les données sont manipulées par des fonctions</li>
				<li>Les fonctions sont appelées procédures</li>
			</ul>

			<ul>
				<li>Les données et les traitements sont regroupés dans un objet</li>
				<li>
					Un objet est une entité qui regroupe des données et des traitements qui lui sont associés
				</li>
			</ul>
		</div>
	</Slide>
	<Slide>
		<div class="grid-cols-2 grid justify-items-center">
			<h3>Programmation procédurale</h3>
			<h3 class="fragment" data-fragment-index="1">Programmation orientée objet</h3>
			<Code>
				{`
string nom = "Jean";
int age = 25;
string nom2 = "Pierre";
int age2 = 30;

direBonjour(nom, age){
	print("Bonjour " + nom 
	+ ", vous avez " + age + " ans");
}

direBonjour(nom, age);
direBonjour(nom2, age2);
`}
			</Code>
			<Code lines="1-9" class="fragment" data-fragment-index="1">
				{`
class Personne {
	string nom;
	int age;
	
	direBonjour(){
		print("Bonjour " + nom 
		+ ", vous avez " + age + " ans");
	}
}
	var p1 = new Personne("Jean", 25)
	var p2 = new Personne("Pierre", 30)
	p1.direBonjour();
	p2.direBonjour();
`}</Code
			>
		</div>
	</Slide>

	<Slide>
		<h2>La programmation orientée objet</h2>
		<h3>Qu'est-ce que c'est ?</h3>
		<p>
			La programmation orientée objet est un paradigme de programmation, c'est-à-dire une manière de
			programmer, qui repose sur la notion d'objets.
		</p>
		<p>
			Un objet est une entité qui regroupe des données et des traitements qui lui sont associés.
		</p>

		<p>Un objet est censé représenter une entité du monde réel.</p>
		<p class="text-accent-200 font-bold">Il n'est pas obligatoire de programmer en POO !</p>
	</Slide>

	<Slide>
		<p class="font-bold text-accent-200">
			Un objet est censé représenter une entité du monde réel.
		</p>
		<p class="fragment" data-fragment-index="2">
			Par exemple, <span data-fragment-index="3" class="fragment highlight-red"
				>un chien, un chat</span
			>,
			<span data-fragment-index="3" class="fragment highlight-green">une moto, une voiture</span>,
			<span data-fragment-index="3" class="fragment highlight-blue">un ennemi, un PNJ</span>
		</p>
		<p class="fragment" data-fragment-index="3">
			Ou plus <span class="underline font-bold">génériquement</span>, un
			<span class="text-red-500">un animal</span>, un <span class="text-green-500">véhicule</span>,
			un <span class="text-blue-500">personnage</span>
		</p>
	</Slide>
	<Slide>
		<h3 class="uppercase">La généricité</h3>
		<p>Généralisez vos concepts !</p>

		<div class="tree scale-150">
			<ul>
				<li>
					<a href="#">Animal</a>
					<ul>
						<li>
							<a>Chien</a>
						</li>
						<li>
							<a>Chat</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">Véhicule</a>
					<ul>
						<li>
							<a>Voiture</a>
						</li>
						<li>
							<a>Moto</a>
						</li>
						<li class="fragment" data-fragment-index="1">
							<a>Bateau</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">Personnage</a>
					<ul>
						<li>
							<a>Ennemi</a>
							<ul class="fragment" data-fragment-index="1">
								<li><a>Monstre</a></li>
								<li><a>Boss</a></li>
							</ul>
						</li>
						<li>
							<a>PNJ</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</Slide>
	<Slide>
		<h3 class="uppercase">Comment généraliser</h3>
		<p>
			En POO, généraliser s'appelle <span class="text-important"
				>abstraire, faire une abstraction</span
			>
		</p>
		<p class="text-start text-[30px] p-3 bg-accent-950 font-serif">
			Par exemple: <br />
			Si on vous demande de coder un système de location de voiture, soyez assuré, qu'un jour ou l'autre
			votre client vous demandera de prendre en charge les motos !<br />
			Aussi soyez certain que s'il propose des sièges auto pour enfant, il proposera un porte vélo, des
			chaînes pour la montagne ou des valises pour la moto
		</p>
		<p>
			Evidemment, vous ne proposerez pas porte vélo sur une moto !<br />
			Pour autant que ce soit une moto ou une voiture, vous aurez plus ou moins le même code pour gérer
			la location, le retour, le paiement, etc...
		</p>
	</Slide>
	<Slide>
		<h3 class="uppercase">Comment généraliser</h3>
		<div class="flex flex-row justify-center items-baseline">
			<PlantUml>
				{`
			@startuml
			!theme crt-amber
			skinparam backgroundColor transparent
			abstract class Vehicule {		
				+ double prixJour
				+ boolean disponible
				+ int km
				+ string immatriculation
			}
			class Voiture {
				+ int nbPortes
				+ int nbPlaces
			}
			class Moto {
				+ int cylindree
			}
			Vehicule <|-- Voiture
			Vehicule <|-- Moto

			abstract class Accessoire {
				+ double prixJour
				+ boolean disponible
				+ String identifiant
			}
			class SiegeAuto {
				+ int ageMax
			}
			class PorteVelo {
				+ int nbPlaces
			}
			class ChainesMontagne {
				+ string gamme
			}
			Accessoire <|-- SiegeAuto
			Accessoire <|-- PorteVelo
			Accessoire <|-- ChainesMontagne
			@enduml
			`}
			</PlantUml>
			<PlantUml className="fragment">
				{`
			@startuml
			!theme crt-green
			skinparam backgroundColor transparent
			abstract class Louable{
				+ double prixJour
				+ boolean disponible
			}
			abstract class Vehicule extends Louable{		
				+ int km
				+ string immatriculation
			}
			class Voiture {
				+ int nbPortes
				+ int nbPlaces
			}
			class Moto {
				+ int cylindree
			}
			Vehicule <|-- Voiture
			Vehicule <|-- Moto

			abstract class Accessoire extends Louable {
				+ String identifiant
			}
			class SiegeAuto {
				+ int ageMax
			}
			class PorteVelo {
				+ int nbPlaces
			}
			class ChainesMontagne {
				+ string gamme
			}
			Accessoire <|-- SiegeAuto
			Accessoire <|-- PorteVelo
			Accessoire <|-- ChainesMontagne
			
			@enduml
			`}
			</PlantUml>
		</div>
	</Slide>
	<Slide data_background_color="#00353F">
		<h3 class="uppercase">Comment généraliser</h3>

		<p>
			L'opération que l'on vient de voir s'appelle un <i>refactoring</i>, cela nous rends fier
			d'avoir un code parfaitement propre
		</p>
		<p>
			Si vous l'aviez fait dès le départ, vous auriez gagné plus de temps que si vous devez le faire
			plus tard, c'est une <u>certitude</u> !
		</p>
		<p class="text-important">
			Le temps d'implémentation (BUILD) augmente si vous faites beaucoup de POO, mais la maintenance
			(RUN) coûte moins cher et inversement
		</p>
	</Slide>
	<Slide data_background_color="#00353F">
		<h3 class="uppercase">Comment généraliser</h3>
		<p>Un <i>bon</i> ingénieur logiciel sait jusqu'à quel niveau il convient d'abstraire</p>
		<ul>
			<li>Si vous ne le faites pas, vous devez tout casser pour ajouter une fonctionnalité</li>
			<li>
				Si vous le faites trop, votre client paie pour une fonctionnalité qu'il n'utilisera jamais
			</li>
		</ul>

		<p>
			En entreprise, tout est question d'équilibre et vient avec l'expérience.
			<br /><span class="text-important"
				>Dans ce module , faites le plus de zèle possible, exagérez !
			</span>
		</p>
	</Slide>
	<Slide>
		<p>
			Vous venez d'être confronté à un premier concept de la POO: <span class="text-important"
				>l'abstraction</span
			>. Nous avons abstrait le concept de véhicule en lieu et place de voiture et moto
		</p>
		<p>Il existe d'autres concepts que nous allons voir en détail</p>
		<p>
			Retenez que la POO est un "outil", si vous faites du Java, même en codant mal,
			fondamentalement, vous faites de la POO compte tenu de la nature du langage
		</p>
		<p>
			Si la programmation n'est qu'une suite de blocs de code tels des légos, la POO, c'est
			fabriquer des blocs intelligement que vous réutilisez, peu importe que vous construisiez un
			pont ou une maison.
		</p>
	</Slide>
</Slide>