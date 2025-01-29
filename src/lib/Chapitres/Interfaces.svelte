<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Gpt from '$lib/deck/gpt.svelte'
	import Markdown from '$lib/deck/markdown.svelte'
	import Notes from '$lib/deck/notes.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
	import Presentation from '$lib/presentation.svelte'
	import ProgOoSchema from '$lib/Seance1/ProgOOSchema.svelte'
	import Page from '$routes/+page.svelte'
	import Composition from './Composition.svelte'
	import Heritage from './Heritage.svelte'
	import Introduction from './Introduction.svelte'
</script>

<Slide>
	<Slide
		><h3>L'héritage multiple</h3>
		<p>Comment hériter de deux classes ?</p>

		<PlantUml>
			{`
                abstract class Animal {}
                abstract class AnimalVolant extends Animal {}
                abstract class AnimalNageur extends Animal {}
                class Canard extends AnimalVolant, AnimalNageur {}
            `}
		</PlantUml>
		<p class="fragment">
			En Java, ce n'est pas possible !
			<br /> En revanche, on peut utiliser l'interface pour simuler l'héritage multiple
		</p>
	</Slide>
</Slide>
<Slide>
	<h3>Les interfaces</h3>
	<Slide>
		<p>
			Une interface est un type de référence qui est similaire à une classe abstraite qui ne
			contient que des méthodes abstraites.
		</p>
		<p>Une interface n'a pas de code "par défaut", seulement des signatures de méthodes.</p>
		<Code
			>{`
    
    public interface ArticleLouable {
      float reserver(Date from, Date to); 
      float rendre(int penalite);    
    }
        `}</Code
		>
	</Slide>

	<Slide>
		<h3>Implémentation d’une interface</h3>
		<p>
			Une classe signale les interfaces qu’elle implémente grâce au mot-clé <code>implements</code>.
			Une classe concrète doit fournir une implémentation pour toutes les méthodes d’une interface,
			soit dans sa déclaration, soit parce qu’elle en hérite.
		</p>
	</Slide>
	<Slide>
		<h3>Implémentation d’une interface</h3>
		<Code className="h-[70vh]"
			>{`
    public class SiegeAuto extends Accessoire implements ArticleLouable {
    
        @Override
        public float reserver(Date from, Date to) {
        // ...
        }
    
        @Override
        public float rendre(int penalite) {
        // ...
        }
    }
    `}</Code
		>
	</Slide>
	<Slide>
		<h3>Implémentation d’une interface</h3>
		<p>
			Une interface permet de mutualiser une implémentation entre des classes qui n’ont pas de lien
			d’héritage.<br />
			Si une classe implémente une inteface, ses classes dérivées héritent de cette implémentation,
			<b>il est toutefois possible de surcharger cette implémentation</b>
		</p>
	</Slide>
	
	<Slide>
		<h3>Comment choisir entre une classe abstraite et une interface ?</h3>
		<ul class=" text-4xl">
			<li>
				<b>Classe abstraite</b> : Si fondamentalement vous pouvez dire "Un Dauphin est un Animal",
				alors vous <i>pouvez</i> utiliser une classe abstraite.<br />
			</li>
			<li>
				<b>Interface</b> : Si il est plus juste de dire "Un Dauphin peut nager", alors vous
				<i>devriez</i>
				utiliser une interface.
				<ul>
					<li>
						Si quelque chose qui n'aurait rien à voir avec vos animaux pouvait nager utilisez une
						interface.<br />
						Par exemple un avion et un oiseau peuvent voler, mais ils n'ont rien à voir l'un avec l'autre.
					</li>
					<li>
						Sinon, utilisez une interface si vous sentez qu'une classe fille pourrait avoir besoin
						d'hériter de plusieurs classes, prévoyez plutôt une interface.
					</li>
				</ul>
			</li>
		</ul>
	</Slide>
    <Slide>
		<h3>Comment choisir entre une classe abstraite et une interface ?</h3>
		<div class=" flex flex-row justify-center items-center">
			<PlantUml>
				{`
            @startuml
            !theme crt-green
            skinparam backgroundColor transparent
            interface Nager {
                + nager()
            }

            interface Pondre {
                + pondre()
            }

            abstract class Animal
            abstract class Mammifère extends Animal
            abstract class Reptile extends Animal

            class Dauphin extends Mammifère implements Nager
            class Crocodile extends Reptile implements Nager
            class TortueMarine extends Reptile implements Nager, Pondre
            class Lézard extends Reptile implements Pondre
            class Lion extends Mammifère
            @enduml
        `}
			</PlantUml>

			<PlantUml>
				{`
                @startuml
                !theme crt-amber
                skinparam backgroundColor transparent
                abstract class Animal
                abstract class Mammifère extends Animal
                abstract class Reptile extends Animal

                abstract class MammifèreNageur extends Mammifère {
                    + nager()
                }

                abstract class ReptileNageur extends Reptile {
                    + nager()
                }

                abstract class ReptilePondeur extends Reptile {
                    + pondre()
                }

                abstract class ReptileNageurPondeur extends Reptile {
                    + nager()
                    + pondre()
                }

                class Dauphin extends MammifèreNageur
                class Crocodile extends ReptileNageur
                class TortueMarine extends ReptileNageurPondeur
                class Lézard extends ReptilePondeur
                class Lion extends Mammifère
                @enduml

                `}
			</PlantUml>
		</div>
	</Slide>
	
	<Slide>
		<h3>Préambule au polymorphisme</h3>
        <p>Vos méthodes peuvent prendre en paramètre une interface, ce qui permet de passer n'importe quel objet qui implémente cette interface.</p>
        <Code class=" highlighter language-java"
            >{`
            public class BassinAquatique {
                public void faireNager(Nageur nageur) {
                    nageur.nager();
                    //Ici, qu'ils soient un humain, un dauphin ou un crocodile, 
                    // les instances de ces classes peuvent nager 
                    // peu importe que ce soit des mammifères ou des reptiles
                }
            }
            `}</Code>

	</Slide>
	<Slide>
		<h3>Héritage d’interface</h3>
		<p>
			Une interface peut hériter d’une ou plusieurs autres interfaces. Dans ce cas, elle hérite de
			toutes les méthodes déclarées dans les interfaces parentes. Pour déclarer un héritage, on
			utilise le mot-clé <code>extends</code>.
		</p>
		<Code className="highlighter language-java"
			>{`
            interface Herbivore {
                void manger(Plante plante);
            }
            interface Carnivore {
                void manger(Animal animal);
            }
            interface Omnivore extends Herbivore, Carnivore {
                void manger(Plante plante);
                void manger(Animal animal);
            }

            `}</Code
		>
	</Slide>
	<Slide>
		<h3>Héritage d’interface</h3>

		<p>
			Comme chaque interface introduit un nouveau type, il est possible de contrôler grâce au
			mot-clé <code>instanceof</code> qu’une variable, un paramètre ou un attribut est bien une instance
			compatible avec cette interface.
		</p>
		<Code className="highlighter language-java"
			>{`
                interface Omnivore extends Herbivore, Carnivore {...}
                class Humain implements Omnivore {...}

                var bob = new Humain();
                if (bob instanceof Carnivore) {
                    System.out.println("bob mange de la viande");
                }
                if (bob instanceof Herbivore) {
                    System.out.println("bob mange des plantes");
                }
            `}</Code
		>
	</Slide>
	<Slide>
		<h3>Les interfaces marqueurs</h3>
		<p>
			Une interface sans méthode est appelée une interface marqueur. <br/>
            Elle est utilisée pour "Tagguer" une classe.
		</p>
           <p>On les utilise ainsi </p>
        <Code className="highlighter language-java"
            >{`
            interface IConfidential {}
            class DossierMedical implements IConfidential {}
            ...
            void logguerDansUnFichier(Object p) {
                if (p instanceof IConfidential) {
                    return; //On ne loggue pas les informations confidentielles
                }
            }
            `}</Code>
    
        <p>Rappelez-vous, comme on peut implémenter plusieurs interfaces, n'importe quelle classe peut implémenter une interface marqueur.</p>
	</Slide>
	<Slide>
        <h3>Conventions de nommage</h3>
        <ul>
            <li> Les interfaces sont nommées avec un nom qui commence par "I" suivi d'un nom.</li>
            <li> Le nom est un adjectif ou un nom qui décrit un comportement.</li>
            <li> Exemple :
                <ul>
                    <li>IVolant</li>
                    <li>IConfidentiel</li>
                    <li><s>INageur</s></li>
                    <li><s>Bateau</s></li>
                    <li><s>Vitesse</s></li>

                </ul>
            </li>


        </ul>
    </Slide>
</Slide>
