import{s as ge,n as N,z as Qe,r as We,A as De}from"../chunks/scheduler.D4WuhzBw.js";import{S as he,i as be,q as P,t as q,a as S,u as T,v as M,r as j,d as a,b as u,e as g,y as b,h as v,j as h,l as _,c as Q,w as L,f as ne,g as Z,k as Y,A as me,B as de,C as Ne,D as Re,z as Ke}from"../chunks/index.BrheVP-q.js";import{S as J,C as se,P as He,a as Ze}from"../chunks/plantUml.BlGlfeNy.js";import{w as Ye}from"../chunks/index.D8jzovuw.js";const Xe=!1,et=!0,Pa=Object.freeze(Object.defineProperty({__proto__:null,prerender:et,ssr:Xe},Symbol.toStringTag,{value:"Module"})),tt=""+new URL("../assets/TD1.BPxddsqE.html",import.meta.url).href,lt=""+new URL("../assets/TD2.DmF0wZ-D.html",import.meta.url).href,Fe=""+new URL("../assets/TP1.wlZYs3rQ.html",import.meta.url).href,ye=""+new URL("../assets/TP2.BOqwCClJ.html",import.meta.url).href,Ge=""+new URL("../assets/README.wObKFzTv.html",import.meta.url).href;function nt(m){let e,r="En POO, l'héritage est un mécanisme qui permet de créer une nouvelle classe à partir d'une classe existante.";return{c(){e=h("p"),e.textContent=r},l(l){e=g(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1cxtphb"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function st(m){let e,r=`La classe existante est appelée <span class="text-important">classe mère</span> ou
			<span class="text-important">classe de base</span>.`;return{c(){e=h("p"),e.innerHTML=r},l(l){e=g(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-17c6x0h"&&(e.innerHTML=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function it(m){let e=`
		class Animal {
			void crier(){
				print("Je suis un animal");
			}
		}

		class Chien extends Animal {
			boolean inscritLOF;
		}
		`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function rt(m){let e,r=`La nouvelle classe est appelée <span class="text-important">classe fille</span> ou
			<span class="text-important">classe dérivée</span>.`,l,t,f="La classe fille peut aussi ajouter des attributs et des méthodes qui lui sont propres.",n,s,p,i,$='On utilise le mot-clé <code class="code text-important">extends</code> pour hériter d&#39;une classe.',x;return s=new se({props:{$$slots:{default:[it]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.innerHTML=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment),p=_(),i=h("p"),i.innerHTML=$},l(o){e=g(o,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1uk6o90"&&(e.innerHTML=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-hn2jyx"&&(t.textContent=f),n=v(o),M(s.$$.fragment,o),p=v(o),i=g(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-fb6via"&&(i.innerHTML=$)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),T(s,o,c),u(o,p,c),u(o,i,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),s.$set(C)},i(o){x||(S(s.$$.fragment,o),x=!0)},o(o){q(s.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(n),a(p),a(i)),P(s,o)}}}function at(m){let e,r=`La classe fille hérite des attributs et des méthodes de la classe mère. Elle peut aussi\r
			redéfinir les méthodes de la classe mère.`,l,t,f='Redéfinir une méthode s&#39;appelle <span class="text-important">redéfinition</span>.';return{c(){e=h("p"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1def0s3"&&(e.textContent=r),l=v(n),t=g(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1a0mvav"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function ut(m){let e,r="Pourquoi redéfinir une méthode ?",l,t,f="<li>Adapter le comportement de la méthode à la classe fille.</li> <li>Modifier le comportement de la méthode.</li>";return{c(){e=h("p"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-j021i9"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1crh2p0"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function ot(m){let e=`
class Animal {
	void crier(){
		print("Je suis un animal");
	}
}

class Chien extends Animal {
	void crier(){
		print("Wouaf wouaf");
	}
}`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function $t(m){let e,r="Ici, nous avons une classe Animal et une classe Chien qui hérite de la classe Animal.",l,t,f=`On veut qu'un chien fasse "Wouaf" et qu'un animal, si ce n'est pas précisé, fasse "Je suis un animal".`,n,s,p;return s=new se({props:{$$slots:{default:[ot]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-ypxylr"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-319dd2"&&(t.textContent=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function ft(m){let e=`
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
`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ct(m){let e,r="On peut aussi appeler la méthode de la classe mère.",l,t,f;return t=new se({props:{lines:"8|1-12",$$slots:{default:[ft]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-640ijp"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function pt(m){let e,r="Les classes abstraites",l,t,f=`Une classe abstraite est une classe qui ne peut pas être instanciée et qui est destinée à être\r
			héritée par d'autres classes.`,n,s,p=`Elle peut contenir des méthodes abstraites, c'est-à-dire des méthodes sans implémentation, qui\r
			doivent être redéfinies dans les classes filles.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.textContent=p},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-dn4vrw"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1jofbl9"&&(t.textContent=f),n=v(i),s=g(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-16o0spv"&&(s.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function mt(m){let e,r="Pourquoi utiliser des classes abstraites ?",l,t,f="<li>Pour définir un comportement commun à plusieurs classes.</li> <li>Pour forcer les classes filles à implémenter certaines méthodes.</li> <li>Surtout, il n&#39;a parfois aucun sens d&#39;instancier une classe.</li>";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1fw1imw"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1jeb803"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function dt(m){let e=`
		abstract class Forme {
			abstract double calculerSurface();
		}
			`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function vt(m){let e=`class Cercle extends Forme {
				double rayon;
	
				Cercle(double rayon) {
					this.rayon = rayon;
				}
	
				double calculerSurface() {
					return Math.PI * rayon * rayon;
				}
			}
	
			`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function _t(m){let e=`class Triangle extends Forme {
				double base, hauteur;
	
				Triangle(double base, double hauteur) {
					this.base = base;
					this.hauteur = hauteur;
				}
	
				double calculerSurface() {
					return (base * hauteur) / 2;
				}
			}
			`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function xt(m){let e,r,l,t,f,n,s;return e=new se({props:{$$slots:{default:[dt]},$$scope:{ctx:m}}}),t=new se({props:{class:"language-java",$$slots:{default:[vt]},$$scope:{ctx:m}}}),n=new se({props:{class:"language-java",$$slots:{default:[_t]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),r=_(),l=h("div"),j(t.$$.fragment),f=_(),j(n.$$.fragment),this.h()},l(p){M(e.$$.fragment,p),r=v(p),l=g(p,"DIV",{class:!0});var i=ne(l);M(t.$$.fragment,i),f=v(i),M(n.$$.fragment,i),i.forEach(a),this.h()},h(){L(l,"class","flex flex-row")},m(p,i){T(e,p,i),u(p,r,i),u(p,l,i),T(t,l,null),Q(l,f),T(n,l,null),s=!0},p(p,i){const $={};i&1&&($.$$scope={dirty:i,ctx:p}),e.$set($);const x={};i&1&&(x.$$scope={dirty:i,ctx:p}),t.$set(x);const o={};i&1&&(o.$$scope={dirty:i,ctx:p}),n.$set(o)},i(p){s||(S(e.$$.fragment,p),S(t.$$.fragment,p),S(n.$$.fragment,p),s=!0)},o(p){q(e.$$.fragment,p),q(t.$$.fragment,p),q(n.$$.fragment,p),s=!1},d(p){p&&(a(r),a(l)),P(e,p),P(t),P(n)}}}function Ct(m){let e,r=`Dans cet exemple, la classe <code class="code text-important">Forme</code> est abstraite et
			contient une méthode abstraite <code class="code text-important">calculerSurface</code>.`,l,t,f=`Les classes <code class="code text-important">Cercle</code> et
			<code class="code text-important">Triangle</code> héritent de <code class="code text-important">Forme</code> et implémentent la méthode
			<code class="code text-important">calculerSurface</code>.`,n,s,p="Comment voudriez-vous coder la surface d'une forme ? C'est impossible !";return{c(){e=h("p"),e.innerHTML=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),s=h("p"),s.textContent=p},l(i){e=g(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1211hcu"&&(e.innerHTML=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-cie1c9"&&(t.innerHTML=f),n=v(i),s=g(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1ie4rof"&&(s.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function gt(m){let e,r="L'héritage",l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E,z,I,W,K;return t=new J({props:{$$slots:{default:[nt]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[st]},$$scope:{ctx:m}}}),p=new J({props:{$$slots:{default:[rt]},$$scope:{ctx:m}}}),$=new J({props:{$$slots:{default:[at]},$$scope:{ctx:m}}}),o=new J({props:{$$slots:{default:[ut]},$$scope:{ctx:m}}}),C=new J({props:{$$slots:{default:[$t]},$$scope:{ctx:m}}}),w=new J({props:{$$slots:{default:[ct]},$$scope:{ctx:m}}}),D=new J({props:{$$slots:{default:[pt]},$$scope:{ctx:m}}}),O=new J({props:{$$slots:{default:[mt]},$$scope:{ctx:m}}}),z=new J({props:{$$slots:{default:[xt]},$$scope:{ctx:m}}}),W=new J({props:{$$slots:{default:[Ct]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment),s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),x=_(),j(o.$$.fragment),c=_(),j(C.$$.fragment),d=_(),j(w.$$.fragment),V=_(),j(D.$$.fragment),B=_(),j(O.$$.fragment),E=_(),j(z.$$.fragment),I=_(),j(W.$$.fragment)},l(A){e=g(A,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-taqcdc"&&(e.textContent=r),l=v(A),M(t.$$.fragment,A),f=v(A),M(n.$$.fragment,A),s=v(A),M(p.$$.fragment,A),i=v(A),M($.$$.fragment,A),x=v(A),M(o.$$.fragment,A),c=v(A),M(C.$$.fragment,A),d=v(A),M(w.$$.fragment,A),V=v(A),M(D.$$.fragment,A),B=v(A),M(O.$$.fragment,A),E=v(A),M(z.$$.fragment,A),I=v(A),M(W.$$.fragment,A)},m(A,k){u(A,e,k),u(A,l,k),T(t,A,k),u(A,f,k),T(n,A,k),u(A,s,k),T(p,A,k),u(A,i,k),T($,A,k),u(A,x,k),T(o,A,k),u(A,c,k),T(C,A,k),u(A,d,k),T(w,A,k),u(A,V,k),T(D,A,k),u(A,B,k),T(O,A,k),u(A,E,k),T(z,A,k),u(A,I,k),T(W,A,k),K=!0},p(A,k){const H={};k&1&&(H.$$scope={dirty:k,ctx:A}),t.$set(H);const U={};k&1&&(U.$$scope={dirty:k,ctx:A}),n.$set(U);const te={};k&1&&(te.$$scope={dirty:k,ctx:A}),p.$set(te);const re={};k&1&&(re.$$scope={dirty:k,ctx:A}),$.$set(re);const G={};k&1&&(G.$$scope={dirty:k,ctx:A}),o.$set(G);const X={};k&1&&(X.$$scope={dirty:k,ctx:A}),C.$set(X);const ae={};k&1&&(ae.$$scope={dirty:k,ctx:A}),w.$set(ae);const y={};k&1&&(y.$$scope={dirty:k,ctx:A}),D.$set(y);const ee={};k&1&&(ee.$$scope={dirty:k,ctx:A}),O.$set(ee);const ue={};k&1&&(ue.$$scope={dirty:k,ctx:A}),z.$set(ue);const oe={};k&1&&(oe.$$scope={dirty:k,ctx:A}),W.$set(oe)},i(A){K||(S(t.$$.fragment,A),S(n.$$.fragment,A),S(p.$$.fragment,A),S($.$$.fragment,A),S(o.$$.fragment,A),S(C.$$.fragment,A),S(w.$$.fragment,A),S(D.$$.fragment,A),S(O.$$.fragment,A),S(z.$$.fragment,A),S(W.$$.fragment,A),K=!0)},o(A){q(t.$$.fragment,A),q(n.$$.fragment,A),q(p.$$.fragment,A),q($.$$.fragment,A),q(o.$$.fragment,A),q(C.$$.fragment,A),q(w.$$.fragment,A),q(D.$$.fragment,A),q(O.$$.fragment,A),q(z.$$.fragment,A),q(W.$$.fragment,A),K=!1},d(A){A&&(a(e),a(l),a(f),a(s),a(i),a(x),a(c),a(d),a(V),a(B),a(E),a(I)),P(t,A),P(n,A),P(p,A),P($,A),P(o,A),P(C,A),P(w,A),P(D,A),P(O,A),P(z,A),P(W,A)}}}function ht(m){let e,r;return e=new J({props:{$$slots:{default:[gt]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class bt extends he{constructor(e){super(),be(this,e,null,ht,ge,{})}}function wt(m){let e,r,l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O;return{c(){e=de("svg"),r=de("g"),l=de("title"),t=Y("Layer 1"),f=de("g"),n=de("rect"),s=de("text"),p=Y("Données"),i=de("text"),$=Y("FonctionA"),x=de("text"),o=Y("FonctionB"),c=de("text"),C=Y("FonctionC"),d=de("text"),w=Y("FonctionD"),V=de("line"),D=de("line"),B=de("line"),O=de("line"),this.h()},l(E){e=me(E,"svg",{width:!0,height:!0,xmlns:!0});var z=ne(e);r=me(z,"g",{});var I=ne(r);l=me(I,"title",{});var W=ne(l);t=Z(W,"Layer 1"),W.forEach(a),f=me(I,"g",{id:!0});var K=ne(f);n=me(K,"rect",{fill:!0,stroke:!0,x:!0,y:!0,width:!0,height:!0,id:!0}),ne(n).forEach(a),s=me(K,"text",{fill:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var A=ne(s);p=Z(A,"Données"),A.forEach(a),i=me(K,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var k=ne(i);$=Z(k,"FonctionA"),k.forEach(a),x=me(K,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var H=ne(x);o=Z(H,"FonctionB"),H.forEach(a),c=me(K,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var U=ne(c);C=Z(U,"FonctionC"),U.forEach(a),d=me(K,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var te=ne(d);w=Z(te,"FonctionD"),te.forEach(a),V=me(K,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ne(V).forEach(a),D=me(K,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ne(D).forEach(a),B=me(K,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ne(B).forEach(a),O=me(K,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ne(O).forEach(a),K.forEach(a),I.forEach(a),z.forEach(a),this.h()},h(){L(n,"fill","#FFDFB8"),L(n,"stroke","none"),L(n,"x","170"),L(n,"y","0"),L(n,"width","150"),L(n,"height","300"),L(n,"id","svg_1"),L(s,"fill","black"),L(s,"stroke","black"),L(s,"x","205"),L(s,"y","150"),L(s,"id","svg_2"),L(s,"font-size","24"),L(s,"font-family","Noto Sans JP"),L(s,"text-anchor","start"),L(s,"xml:space","preserve"),L(i,"class","fill-current"),L(i,"stroke","none"),L(i,"x","0"),L(i,"y","50"),L(i,"id","svg_3"),L(i,"font-size","24"),L(i,"font-family","Noto Sans JP"),L(i,"text-anchor","start"),L(i,"xml:space","preserve"),L(x,"class","fill-current"),L(x,"stroke","none"),L(x,"x","0"),L(x,"y","109.99901"),L(x,"id","svg_4"),L(x,"font-size","24"),L(x,"font-family","Noto Sans JP"),L(x,"text-anchor","start"),L(x,"xml:space","preserve"),L(c,"class","fill-current"),L(c,"stroke","none"),L(c,"x","0"),L(c,"y","170"),L(c,"id","svg_5"),L(c,"font-size","24"),L(c,"font-family","Noto Sans JP"),L(c,"text-anchor","start"),L(c,"xml:space","preserve"),L(d,"class","fill-current"),L(d,"stroke","none"),L(d,"x","0"),L(d,"y","230"),L(d,"id","svg_6"),L(d,"font-size","24"),L(d,"font-family","Noto Sans JP"),L(d,"text-anchor","start"),L(d,"xml:space","preserve"),L(V,"stroke-width","5"),L(V,"class","stroke-current"),L(V,"x1","113.53031"),L(V,"y1","222.00012"),L(V,"x2","158.37456"),L(V,"y2","222.00012"),L(V,"id","svg_7"),L(D,"stroke-width","5"),L(D,"class","stroke-current"),L(D,"x1","113.53031"),L(D,"y1","162.00012"),L(D,"x2","158.37456"),L(D,"y2","162.00012"),L(D,"id","svg_8"),L(B,"stroke-width","5"),L(B,"class","stroke-current"),L(B,"x1","113.53031"),L(B,"y1","101.99914"),L(B,"x2","158.37456"),L(B,"y2","101.99914"),L(B,"id","svg_9"),L(O,"stroke-width","5"),L(O,"class","stroke-current"),L(O,"x1","113.53031"),L(O,"y1","42.00012"),L(O,"x2","158.37455"),L(O,"y2","42.00012"),L(O,"id","svg_10"),L(f,"id","svg_11"),L(e,"width","320"),L(e,"height","300"),L(e,"xmlns","http://www.w3.org/2000/svg")},m(E,z){u(E,e,z),Q(e,r),Q(r,l),Q(l,t),Q(r,f),Q(f,n),Q(f,s),Q(s,p),Q(f,i),Q(i,$),Q(f,x),Q(x,o),Q(f,c),Q(c,C),Q(f,d),Q(d,w),Q(f,V),Q(f,D),Q(f,B),Q(f,O)},p:N,i:N,o:N,d(E){E&&a(e)}}}class Lt extends he{constructor(e){super(),be(this,e,null,wt,ge,{})}}function Ht(m){let e,r,l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E,z,I,W;return{c(){e=de("svg"),r=de("g"),l=de("title"),t=Y("Layer 1"),f=de("g"),n=de("path"),s=de("text"),p=Y("Données"),i=de("text"),$=Y("MéthodeA"),x=de("text"),o=Y("MéthodeB"),c=de("line"),C=de("line"),d=de("g"),w=de("path"),V=de("text"),D=Y("Données"),B=de("text"),O=Y("MéthodeA"),E=de("text"),z=Y("MéthodeB"),I=de("line"),W=de("line"),this.h()},l(K){e=me(K,"svg",{width:!0,height:!0,xmlns:!0});var A=ne(e);r=me(A,"g",{});var k=ne(r);l=me(k,"title",{});var H=ne(l);t=Z(H,"Layer 1"),H.forEach(a),f=me(k,"g",{id:!0});var U=ne(f);n=me(U,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),ne(n).forEach(a),s=me(U,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var te=ne(s);p=Z(te,"Données"),te.forEach(a),i=me(U,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var re=ne(i);$=Z(re,"MéthodeA"),re.forEach(a),x=me(U,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var G=ne(x);o=Z(G,"MéthodeB"),G.forEach(a),c=me(U,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ne(c).forEach(a),C=me(U,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ne(C).forEach(a),U.forEach(a),d=me(k,"g",{id:!0});var X=ne(d);w=me(X,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),ne(w).forEach(a),V=me(X,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ae=ne(V);D=Z(ae,"Données"),ae.forEach(a),B=me(X,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var y=ne(B);O=Z(y,"MéthodeA"),y.forEach(a),E=me(X,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ee=ne(E);z=Z(ee,"MéthodeB"),ee.forEach(a),I=me(X,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ne(I).forEach(a),W=me(X,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ne(W).forEach(a),X.forEach(a),k.forEach(a),A.forEach(a),this.h()},h(){L(n,"id","svg_1"),L(n,"d","m170,2.75867l150,0l0,116l-150,0l0,-116z"),L(n,"opacity","undefined"),L(n,"stroke","none"),L(n,"fill","#FFDFB8"),L(s,"stroke","black"),L(s,"fill","black"),L(s,"x","208"),L(s,"y","70"),L(s,"id","svg_2"),L(s,"font-size","24"),L(s,"font-family","Noto Sans JP"),L(s,"text-anchor","start"),L(s,"xml:space","preserve"),L(i,"class","fill-current"),L(i,"stroke","none"),L(i,"x","0"),L(i,"y","40"),L(i,"id","svg_3"),L(i,"font-size","24"),L(i,"font-family","Noto Sans JP"),L(i,"text-anchor","start"),L(i,"xml:space","preserve"),L(x,"class","fill-current"),L(x,"stroke","none"),L(x,"x","0"),L(x,"y","100"),L(x,"id","svg_4"),L(x,"font-size","24"),L(x,"font-family","Noto Sans JP"),L(x,"text-anchor","start"),L(x,"xml:space","preserve"),L(c,"stroke-width","5"),L(c,"class","stroke-current"),L(c,"x1","113.53031"),L(c,"y1","91.75781"),L(c,"x2","158.37456"),L(c,"y2","91.75781"),L(c,"id","svg_9"),L(C,"stroke-width","5"),L(C,"class","stroke-current"),L(C,"x1","113.53031"),L(C,"y1","31.75879"),L(C,"x2","158.37455"),L(C,"y2","31.75879"),L(C,"id","svg_10"),L(f,"id","svg_12"),L(w,"id","svg_13"),L(w,"d","m170,182.07234l150,0l0,116l-150,0l0,-116z"),L(w,"opacity","undefined"),L(w,"stroke","none"),L(w,"fill","#FFDFB8"),L(V,"stroke","black"),L(V,"fill","black"),L(V,"x","208"),L(V,"y","250"),L(V,"id","svg_14"),L(V,"font-size","24"),L(V,"font-family","Noto Sans JP"),L(V,"text-anchor","start"),L(V,"xml:space","preserve"),L(B,"class","fill-current"),L(B,"stroke","none"),L(B,"x","0"),L(B,"y","220"),L(B,"id","svg_15"),L(B,"font-size","24"),L(B,"font-family","Noto Sans JP"),L(B,"text-anchor","start"),L(B,"xml:space","preserve"),L(E,"class","fill-current"),L(E,"stroke","none"),L(E,"x","0"),L(E,"y","280"),L(E,"id","svg_16"),L(E,"font-size","24"),L(E,"font-family","Noto Sans JP"),L(E,"text-anchor","start"),L(E,"xml:space","preserve"),L(I,"stroke-width","5"),L(I,"class","stroke-current"),L(I,"x1","113.53031"),L(I,"y1","271.07148"),L(I,"x2","158.37456"),L(I,"y2","271.07148"),L(I,"id","svg_17"),L(W,"stroke-width","5"),L(W,"class","stroke-current"),L(W,"x1","113.53031"),L(W,"y1","211.07246"),L(W,"x2","158.37455"),L(W,"y2","211.07246"),L(W,"id","svg_18"),L(d,"id","svg_19"),L(e,"width","320"),L(e,"height","300"),L(e,"xmlns","http://www.w3.org/2000/svg")},m(K,A){u(K,e,A),Q(e,r),Q(r,l),Q(l,t),Q(r,f),Q(f,n),Q(f,s),Q(s,p),Q(f,i),Q(i,$),Q(f,x),Q(x,o),Q(f,c),Q(f,C),Q(r,d),Q(d,w),Q(d,V),Q(V,D),Q(d,B),Q(B,O),Q(d,E),Q(E,z),Q(d,I),Q(d,W)},p:N,i:N,o:N,d(K){K&&a(e)}}}class Pt extends he{constructor(e){super(),be(this,e,null,Ht,ge,{})}}function qt(m){let e,r="Introduction";return{c(){e=h("h1"),e.textContent=r},l(l){e=g(l,"H1",{"data-svelte-h":!0}),b(e)!=="svelte-v1pk48"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function St(m){let e,r='La <span data-fragment-index="1" class="fragment highlight-red">Programmation</span> Orientée Objet',l,t,f="La programmation, c'est manipuler des données...",n,s,p="<i>Comment structurer ces données et les traitements associés ?</i>";return{c(){e=h("h2"),e.innerHTML=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.innerHTML=p,this.h()},l(i){e=g(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-idwyvx"&&(e.innerHTML=r),l=v(i),t=g(i,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b(t)!=="svelte-ccoak9"&&(t.textContent=f),n=v(i),s=g(i,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b(s)!=="svelte-ja2tch"&&(s.innerHTML=p),this.h()},h(){L(t,"data-fragment-index","1"),L(t,"class","fragment"),L(s,"data-fragment-index","2"),L(s,"class","fragment")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function Tt(m){let e,r,l="Programmation procédurale",t,f,n="Programmation orientée objet",s,p,i,$,x,o;return p=new Lt({}),x=new Pt({}),{c(){e=h("div"),r=h("h3"),r.textContent=l,t=_(),f=h("h3"),f.textContent=n,s=_(),j(p.$$.fragment),i=_(),$=h("div"),j(x.$$.fragment),this.h()},l(c){e=g(c,"DIV",{class:!0});var C=ne(e);r=g(C,"H3",{"data-svelte-h":!0}),b(r)!=="svelte-cax56s"&&(r.textContent=l),t=v(C),f=g(C,"H3",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1roygcu"&&(f.textContent=n),s=v(C),M(p.$$.fragment,C),i=v(C),$=g(C,"DIV",{"data-fragment-index":!0,class:!0});var d=ne($);M(x.$$.fragment,d),d.forEach(a),C.forEach(a),this.h()},h(){L(f,"data-fragment-index","1"),L(f,"class","fragment"),L($,"data-fragment-index","1"),L($,"class","fragment"),L(e,"class","grid-cols-2 grid justify-items-center items-start")},m(c,C){u(c,e,C),Q(e,r),Q(e,t),Q(e,f),Q(e,s),T(p,e,null),Q(e,i),Q(e,$),T(x,$,null),o=!0},p:N,i(c){o||(S(p.$$.fragment,c),S(x.$$.fragment,c),o=!0)},o(c){q(p.$$.fragment,c),q(x.$$.fragment,c),o=!1},d(c){c&&a(e),P(p),P(x)}}}function Mt(m){let e,r="<h3>Programmation procédurale</h3> <h3>Programmation orientée objet</h3> <ul><li>Les données et les traitements sont séparés</li> <li>Les données sont manipulées par des fonctions</li> <li>Les fonctions sont appelées procédures</li></ul> <ul><li>Les données et les traitements sont regroupés dans un objet</li> <li>Un objet est une entité qui regroupe des données et des traitements qui lui sont associés</li></ul>";return{c(){e=h("div"),e.innerHTML=r,this.h()},l(l){e=g(l,"DIV",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1x5o9oi"&&(e.innerHTML=r),this.h()},h(){L(e,"class","grid-cols-2 grid justify-items-center items-start")},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function jt(m){let e=`
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
`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function At(m){let e=`
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
`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function kt(m){let e,r,l="Programmation procédurale",t,f,n="Programmation orientée objet",s,p,i,$,x;return p=new se({props:{$$slots:{default:[jt]},$$scope:{ctx:m}}}),$=new se({props:{lines:"1-9",class:"fragment","data-fragment-index":"1",$$slots:{default:[At]},$$scope:{ctx:m}}}),{c(){e=h("div"),r=h("h3"),r.textContent=l,t=_(),f=h("h3"),f.textContent=n,s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),this.h()},l(o){e=g(o,"DIV",{class:!0});var c=ne(e);r=g(c,"H3",{"data-svelte-h":!0}),b(r)!=="svelte-cax56s"&&(r.textContent=l),t=v(c),f=g(c,"H3",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(f)!=="svelte-12kylpq"&&(f.textContent=n),s=v(c),M(p.$$.fragment,c),i=v(c),M($.$$.fragment,c),c.forEach(a),this.h()},h(){L(f,"class","fragment"),L(f,"data-fragment-index","1"),L(e,"class","grid-cols-2 grid justify-items-center items-start")},m(o,c){u(o,e,c),Q(e,r),Q(e,t),Q(e,f),Q(e,s),T(p,e,null),Q(e,i),T($,e,null),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),p.$set(C);const d={};c&1&&(d.$$scope={dirty:c,ctx:o}),$.$set(d)},i(o){x||(S(p.$$.fragment,o),S($.$$.fragment,o),x=!0)},o(o){q(p.$$.fragment,o),q($.$$.fragment,o),x=!1},d(o){o&&a(e),P(p),P($)}}}function Dt(m){let e,r="La programmation orientée objet",l,t,f="Qu'est-ce que c'est ?",n,s,p=`La programmation orientée objet est un paradigme de programmation, c'est-à-dire une manière de\r
			programmer, qui repose sur la notion d'objets.`,i,$,x="Un objet est une entité qui regroupe des données et des traitements qui lui sont associés.",o,c,C="Un objet est censé représenter une entité du monde réel.",d,w,V="Il n'est pas obligatoire de programmer en POO !";return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("h3"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.textContent=x,o=_(),c=h("p"),c.textContent=C,d=_(),w=h("p"),w.textContent=V,this.h()},l(D){e=g(D,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-18a0qr8"&&(e.textContent=r),l=v(D),t=g(D,"H3",{"data-svelte-h":!0}),b(t)!=="svelte-a8zqi8"&&(t.textContent=f),n=v(D),s=g(D,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1k4w8ku"&&(s.textContent=p),i=v(D),$=g(D,"P",{"data-svelte-h":!0}),b($)!=="svelte-12m33sn"&&($.textContent=x),o=v(D),c=g(D,"P",{"data-svelte-h":!0}),b(c)!=="svelte-vtaxgj"&&(c.textContent=C),d=v(D),w=g(D,"P",{class:!0,"data-svelte-h":!0}),b(w)!=="svelte-1dwz205"&&(w.textContent=V),this.h()},h(){L(w,"class","text-accent-200 font-bold")},m(D,B){u(D,e,B),u(D,l,B),u(D,t,B),u(D,n,B),u(D,s,B),u(D,i,B),u(D,$,B),u(D,o,B),u(D,c,B),u(D,d,B),u(D,w,B)},p:N,d(D){D&&(a(e),a(l),a(t),a(n),a(s),a(i),a($),a(o),a(c),a(d),a(w))}}}function Et(m){let e,r="Un objet est censé représenter une entité du monde réel.",l,t,f=`Par exemple, <span data-fragment-index="3" class="fragment highlight-red">un chien, un chat</span>,
			<span data-fragment-index="3" class="fragment highlight-green">une moto, une voiture</span>,
			<span data-fragment-index="3" class="fragment highlight-blue">un ennemi, un PNJ</span>`,n,s,p=`Ou plus <span class="underline font-bold">génériquement</span>, un
			<span class="text-red-500">un animal</span>, un <span class="text-green-500">véhicule</span>,
			un <span class="text-blue-500">personnage</span>`;return{c(){e=h("p"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),s=h("p"),s.innerHTML=p,this.h()},l(i){e=g(i,"P",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1te9lxn"&&(e.textContent=r),l=v(i),t=g(i,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(t)!=="svelte-12p87au"&&(t.innerHTML=f),n=v(i),s=g(i,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(s)!=="svelte-v03uzp"&&(s.innerHTML=p),this.h()},h(){L(e,"class","font-bold text-accent-200"),L(t,"class","fragment"),L(t,"data-fragment-index","2"),L(s,"class","fragment"),L(s,"data-fragment-index","3")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function zt(m){let e,r="La généricité",l,t,f="Généralisez vos concepts !",n,s,p='<ul><li><a href="#">Animal</a> <ul><li><a>Chien</a></li> <li><a>Chat</a></li></ul></li> <li><a href="#">Véhicule</a> <ul><li><a>Voiture</a></li> <li><a>Moto</a></li> <li class="fragment" data-fragment-index="1"><a>Bateau</a></li></ul></li> <li><a href="#">Personnage</a> <ul><li><a>Ennemi</a> <ul class="fragment" data-fragment-index="1"><li><a>Monstre</a></li> <li><a>Boss</a></li></ul></li> <li><a>PNJ</a></li></ul></li></ul>';return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("div"),s.innerHTML=p,this.h()},l(i){e=g(i,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1t0g1h3"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-ptm47t"&&(t.textContent=f),n=v(i),s=g(i,"DIV",{class:!0,"data-svelte-h":!0}),b(s)!=="svelte-1dkw2h"&&(s.innerHTML=p),this.h()},h(){L(e,"class","uppercase"),L(s,"class","tree scale-150")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function It(m){let e,r="Comment généraliser",l,t,f='En POO, généraliser s&#39;appelle <span class="text-important">abstraire, faire une abstraction</span>',n,s,p=`Par exemple: <br/>
			Si on vous demande de coder un système de location de voiture, soyez assuré, qu&#39;un jour ou l&#39;autre
			votre client vous demandera de prendre en charge les motos !<br/>
			Aussi soyez certain que s&#39;il propose des sièges auto pour enfant, il proposera un porte vélo, des
			chaînes pour la montagne ou des valises pour la moto`,i,$,x=`Evidemment, vous ne proposerez pas un porte vélo sur une moto !<br/>
			Pour autant que ce soit une moto ou une voiture, vous aurez plus ou moins le même code pour gérer
			la location, le retour, le paiement, etc...`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),s=h("p"),s.innerHTML=p,i=_(),$=h("p"),$.innerHTML=x,this.h()},l(o){e=g(o,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-ykrbcj"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1n8l9pz"&&(t.innerHTML=f),n=v(o),s=g(o,"P",{class:!0,"data-svelte-h":!0}),b(s)!=="svelte-j2wzwr"&&(s.innerHTML=p),i=v(o),$=g(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-zl5qb0"&&($.innerHTML=x),this.h()},h(){L(e,"class","uppercase"),L(s,"class","text-start text-[30px] p-3 bg-accent-950 font-serif")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function Ot(m){let e=`
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
			`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ut(m){let e=`
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
			`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Vt(m){let e,r="Comment généraliser",l,t,f,n,s,p;return f=new He({props:{$$slots:{default:[Ot]},$$scope:{ctx:m}}}),s=new He({props:{className:"fragment",$$slots:{default:[Ut]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("div"),j(f.$$.fragment),n=_(),j(s.$$.fragment),this.h()},l(i){e=g(i,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-ykrbcj"&&(e.textContent=r),l=v(i),t=g(i,"DIV",{class:!0});var $=ne(t);M(f.$$.fragment,$),n=v($),M(s.$$.fragment,$),$.forEach(a),this.h()},h(){L(e,"class","uppercase"),L(t,"class","flex flex-row justify-center items-baseline")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),T(f,t,null),Q(t,n),T(s,t,null),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),f.$set(x);const o={};$&1&&(o.$$scope={dirty:$,ctx:i}),s.$set(o)},i(i){p||(S(f.$$.fragment,i),S(s.$$.fragment,i),p=!0)},o(i){q(f.$$.fragment,i),q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t)),P(f),P(s)}}}function Bt(m){let e,r="Comment généraliser",l,t,f=`L&#39;opération que l&#39;on vient de voir s&#39;appelle un <i>refactoring</i>, cela nous rends fier
			d&#39;avoir un code parfaitement propre`,n,s,p=`Si vous l&#39;aviez fait dès le départ, vous auriez gagné plus de temps que si vous devez le faire
			plus tard, c&#39;est une <u>certitude</u> !`,i,$,x=`Le temps d'implémentation (BUILD) augmente si vous faites beaucoup de POO, mais la maintenance\r
			(RUN) coûte moins cher et inversement`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),s=h("p"),s.innerHTML=p,i=_(),$=h("p"),$.textContent=x,this.h()},l(o){e=g(o,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-ykrbcj"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-19capqt"&&(t.innerHTML=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1p4u8wq"&&(s.innerHTML=p),i=v(o),$=g(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1q6rsrm"&&($.textContent=x),this.h()},h(){L(e,"class","uppercase"),L($,"class","text-important")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function Jt(m){let e,r="Comment généraliser",l,t,f="Un <i>bon</i> ingénieur logiciel sait jusqu&#39;à quel niveau il convient d&#39;abstraire",n,s,p="<li>Si vous ne le faites pas, vous devez tout casser pour ajouter une fonctionnalité</li> <li>Si vous le faites trop, votre client paie pour une fonctionnalité qu&#39;il n&#39;utilisera jamais</li>",i,$,x=`En entreprise, tout est question d&#39;équilibre et vient avec l&#39;expérience.
			<br/><span class="text-important">Dans ce module , faites le plus de zèle possible, exagérez !</span>`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),s=h("ul"),s.innerHTML=p,i=_(),$=h("p"),$.innerHTML=x,this.h()},l(o){e=g(o,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-ykrbcj"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1yhe1kd"&&(t.innerHTML=f),n=v(o),s=g(o,"UL",{"data-svelte-h":!0}),b(s)!=="svelte-td1gcp"&&(s.innerHTML=p),i=v(o),$=g(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-1xonbz6"&&($.innerHTML=x),this.h()},h(){L(e,"class","uppercase")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function Nt(m){let e,r='Vous venez d&#39;être confronté à un premier concept de la POO: <span class="text-important">l&#39;abstraction</span>. Nous avons abstrait le concept de véhicule en lieu et place de voiture et moto',l,t,f="Il existe d'autres concepts que nous allons voir en détail",n,s,p=`Retenez que la POO est un "outil", si vous faites du Java, même en codant mal,\r
			fondamentalement, vous faites de la POO compte tenu de la nature du langage`,i,$,x=`Si la programmation n'est qu'une suite de blocs de code tels des légos, la POO, c'est\r
			fabriquer des blocs intelligement que vous réutilisez, peu importe que vous construisiez un\r
			pont ou une maison.`;return{c(){e=h("p"),e.innerHTML=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.textContent=x},l(o){e=g(o,"P",{"data-svelte-h":!0}),b(e)!=="svelte-x8us8p"&&(e.innerHTML=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-shulm4"&&(t.textContent=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1j5v9so"&&(s.textContent=p),i=v(o),$=g(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-1mpxnz5"&&($.textContent=x)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function Rt(m){let e,r,l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E,z,I,W,K,A;return e=new J({props:{$$slots:{default:[qt]},$$scope:{ctx:m}}}),l=new J({props:{$$slots:{default:[St]},$$scope:{ctx:m}}}),f=new J({props:{$$slots:{default:[Tt]},$$scope:{ctx:m}}}),s=new J({props:{$$slots:{default:[Mt]},$$scope:{ctx:m}}}),i=new J({props:{$$slots:{default:[kt]},$$scope:{ctx:m}}}),x=new J({props:{$$slots:{default:[Dt]},$$scope:{ctx:m}}}),c=new J({props:{$$slots:{default:[Et]},$$scope:{ctx:m}}}),d=new J({props:{$$slots:{default:[zt]},$$scope:{ctx:m}}}),V=new J({props:{$$slots:{default:[It]},$$scope:{ctx:m}}}),B=new J({props:{$$slots:{default:[Vt]},$$scope:{ctx:m}}}),E=new J({props:{data_background_color:"#00353F",$$slots:{default:[Bt]},$$scope:{ctx:m}}}),I=new J({props:{data_background_color:"#00353F",$$slots:{default:[Jt]},$$scope:{ctx:m}}}),K=new J({props:{$$slots:{default:[Nt]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),r=_(),j(l.$$.fragment),t=_(),j(f.$$.fragment),n=_(),j(s.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(x.$$.fragment),o=_(),j(c.$$.fragment),C=_(),j(d.$$.fragment),w=_(),j(V.$$.fragment),D=_(),j(B.$$.fragment),O=_(),j(E.$$.fragment),z=_(),j(I.$$.fragment),W=_(),j(K.$$.fragment)},l(k){M(e.$$.fragment,k),r=v(k),M(l.$$.fragment,k),t=v(k),M(f.$$.fragment,k),n=v(k),M(s.$$.fragment,k),p=v(k),M(i.$$.fragment,k),$=v(k),M(x.$$.fragment,k),o=v(k),M(c.$$.fragment,k),C=v(k),M(d.$$.fragment,k),w=v(k),M(V.$$.fragment,k),D=v(k),M(B.$$.fragment,k),O=v(k),M(E.$$.fragment,k),z=v(k),M(I.$$.fragment,k),W=v(k),M(K.$$.fragment,k)},m(k,H){T(e,k,H),u(k,r,H),T(l,k,H),u(k,t,H),T(f,k,H),u(k,n,H),T(s,k,H),u(k,p,H),T(i,k,H),u(k,$,H),T(x,k,H),u(k,o,H),T(c,k,H),u(k,C,H),T(d,k,H),u(k,w,H),T(V,k,H),u(k,D,H),T(B,k,H),u(k,O,H),T(E,k,H),u(k,z,H),T(I,k,H),u(k,W,H),T(K,k,H),A=!0},p(k,H){const U={};H&1&&(U.$$scope={dirty:H,ctx:k}),e.$set(U);const te={};H&1&&(te.$$scope={dirty:H,ctx:k}),l.$set(te);const re={};H&1&&(re.$$scope={dirty:H,ctx:k}),f.$set(re);const G={};H&1&&(G.$$scope={dirty:H,ctx:k}),s.$set(G);const X={};H&1&&(X.$$scope={dirty:H,ctx:k}),i.$set(X);const ae={};H&1&&(ae.$$scope={dirty:H,ctx:k}),x.$set(ae);const y={};H&1&&(y.$$scope={dirty:H,ctx:k}),c.$set(y);const ee={};H&1&&(ee.$$scope={dirty:H,ctx:k}),d.$set(ee);const ue={};H&1&&(ue.$$scope={dirty:H,ctx:k}),V.$set(ue);const oe={};H&1&&(oe.$$scope={dirty:H,ctx:k}),B.$set(oe);const fe={};H&1&&(fe.$$scope={dirty:H,ctx:k}),E.$set(fe);const ve={};H&1&&(ve.$$scope={dirty:H,ctx:k}),I.$set(ve);const $e={};H&1&&($e.$$scope={dirty:H,ctx:k}),K.$set($e)},i(k){A||(S(e.$$.fragment,k),S(l.$$.fragment,k),S(f.$$.fragment,k),S(s.$$.fragment,k),S(i.$$.fragment,k),S(x.$$.fragment,k),S(c.$$.fragment,k),S(d.$$.fragment,k),S(V.$$.fragment,k),S(B.$$.fragment,k),S(E.$$.fragment,k),S(I.$$.fragment,k),S(K.$$.fragment,k),A=!0)},o(k){q(e.$$.fragment,k),q(l.$$.fragment,k),q(f.$$.fragment,k),q(s.$$.fragment,k),q(i.$$.fragment,k),q(x.$$.fragment,k),q(c.$$.fragment,k),q(d.$$.fragment,k),q(V.$$.fragment,k),q(B.$$.fragment,k),q(E.$$.fragment,k),q(I.$$.fragment,k),q(K.$$.fragment,k),A=!1},d(k){k&&(a(r),a(t),a(n),a(p),a($),a(o),a(C),a(w),a(D),a(O),a(z),a(W)),P(e,k),P(l,k),P(f,k),P(s,k),P(i,k),P(x,k),P(c,k),P(d,k),P(V,k),P(B,k),P(E,k),P(I,k),P(K,k)}}}function Ft(m){let e,r;return e=new J({props:{$$slots:{default:[Rt]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class yt extends he{constructor(e){super(),be(this,e,null,Ft,ge,{})}}function Gt(m){let e,r=`La composition permet de créer des objets complexes en combinant des objets plus simples.\r
			C'est comme assembler des briques Lego pour construire une structure plus grande.`,l,t,f=`En POO, la composition consiste à avoir des instances de classes en tant qu'attributs d'une autre classe.\r
			Cela rappelle la notion de clé étrangère en base de données.`;return{c(){e=h("p"),e.textContent=r,l=_(),t=h("p"),t.textContent=f},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-8yxrg0"&&(e.textContent=r),l=v(n),t=g(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-welq6c"&&(t.textContent=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Qt(m){let e=`
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
	`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Wt(m){let e,r=`Par exemple, une voiture est composée de plusieurs parties : un moteur, des roues, un châssis, etc.\r
			Chaque partie peut être une instance d'une classe.`,l,t,f,n,s="La composition favorise la réutilisation du code et rend le système plus flexible. Par exemple, on peut remplacer le moteur d'une voiture sans modifier la classe Voiture.",p;return t=new He({props:{$$slots:{default:[Qt]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),n=h("p"),n.textContent=s},l(i){e=g(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1lp8e9i"&&(e.textContent=r),l=v(i),M(t.$$.fragment,i),f=v(i),n=g(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1ahe1ym"&&(n.textContent=s)},m(i,$){u(i,e,$),u(i,l,$),T(t,i,$),u(i,f,$),u(i,n,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),t.$set(x)},i(i){p||(S(t.$$.fragment,i),p=!0)},o(i){q(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(f),a(n)),P(t,i)}}}function Kt(m){let e,r=`<p>L&#39;un des intérêts de la programmation orientée objet réside dans les relations que les objets entretiennent entre eux.
				Ces relations, construites par les développeurs, constituent l&#39;architecture d&#39;une application.
				Il existe deux relations fondamentales en programmation objet :</p> <dl class="smaller"><dt><strong>est un</strong> (<em>is-a</em>)</dt><dd><p>Cette relation permet d&#39;exprimer qu&#39;une classe peut être assimilée à une autre classe, représentant une notion plus abstraite ou plus générale.
						On parle d&#39;<span class="text-important">héritage</span> pour désigner ce mécanisme.</p> </dd><dt><strong>a un</strong> (<em>has-a</em>)</dt><dd><p>Cette relation permet d&#39;exprimer qu&#39;une classe dépend des services d&#39;une autre.
						On parle également de relation de <span class="text-important">composition</span> pour désigner ce type de relation.</p></dd></dl>`;return{c(){e=h("div"),e.innerHTML=r,this.h()},l(l){e=g(l,"DIV",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-swi48g"&&(e.innerHTML=r),this.h()},h(){L(e,"class","")},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function Zt(m){let e=`
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
		`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Yt(m){let e=`
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

		
		`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Xt(m){let e,r,l,t,f;return r=new He({props:{$$slots:{default:[Zt]},$$scope:{ctx:m}}}),t=new se({props:{class:"language-java",$$slots:{default:[Yt]},$$scope:{ctx:m}}}),{c(){e=h("div"),j(r.$$.fragment),l=_(),j(t.$$.fragment),this.h()},l(n){e=g(n,"DIV",{class:!0});var s=ne(e);M(r.$$.fragment,s),l=v(s),M(t.$$.fragment,s),s.forEach(a),this.h()},h(){L(e,"class","flex flex-row items-center")},m(n,s){u(n,e,s),T(r,e,null),Q(e,l),T(t,e,null),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),r.$set(p);const i={};s&1&&(i.$$scope={dirty:s,ctx:n}),t.$set(i)},i(n){f||(S(r.$$.fragment,n),S(t.$$.fragment,n),f=!0)},o(n){q(r.$$.fragment,n),q(t.$$.fragment,n),f=!1},d(n){n&&a(e),P(r),P(t)}}}function el(m){let e,r=`Normalement, le maître n'est pas censé adopter le comportement propre à un animal.\r
			Il possède un animal, mais il n'est pas possible de déterminer de quel type d'animal il s'agit.\r
			Chaque langage propose un moyen de tester le type d'un objet.`;return{c(){e=h("p"),e.textContent=r},l(l){e=g(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1dnx4w"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function tl(m){let e,r="Par exemple, on souhaite promener l'animal uniquement s'il s'agit d'un chien.",l,t,f="Si l&#39;on veut faire cela de manière propre, on devrait créer un attribut <code>animalPromenable</code> dans la classe Animal.",n,s,p="Toutefois, la POO est un concept, pas une règle absolue.",i,$,x="Il est possible de tester si un Animal est un Chien depuis la classe maître";return{c(){e=h("p"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.textContent=x},l(o){e=g(o,"P",{"data-svelte-h":!0}),b(e)!=="svelte-apbbcl"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1u2q183"&&(t.innerHTML=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-65dqp1"&&(s.textContent=p),i=v(o),$=g(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-1fvo9t0"&&($.textContent=x)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function ll(m){let e=`
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
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function nl(m){let e,r="Cast et instanceof",l,t,f=`En Java, on peut utiliser l&#39;opérateur <code>instanceof</code> pour vérifier si un objet est une
			instance d&#39;une classe spécifique.
			Pour convertir un objet en une instance de classe spécifique, on utilise un <code>(cast)</code>.`,n,s,p,i,$=`Dans cet exemple, on vérifie si l&#39;animal est une instance de la classe <code>Chien</code>
			avant de le promener. Si c&#39;est le cas, on effectue un cast pour appeler la méthode
			<code>crier</code>
			spécifique à la classe <code>Chien</code>.`,x;return s=new se({props:{class:"language-java",$$slots:{default:[ll]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),j(s.$$.fragment),p=_(),i=h("p"),i.innerHTML=$},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-vuznue"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1eg9qwa"&&(t.innerHTML=f),n=v(o),M(s.$$.fragment,o),p=v(o),i=g(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-1p8crmu"&&(i.innerHTML=$)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),T(s,o,c),u(o,p,c),u(o,i,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),s.$set(C)},i(o){x||(S(s.$$.fragment,o),x=!0)},o(o){q(s.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(n),a(p),a(i)),P(s,o)}}}function sl(m){let e,r="La composition",l,t,f,n,s,p,i,$,x,o,c,C,d,w,V;return t=new J({props:{$$slots:{default:[Gt]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[Wt]},$$scope:{ctx:m}}}),p=new J({props:{$$slots:{default:[Kt]},$$scope:{ctx:m}}}),$=new J({props:{$$slots:{default:[Xt]},$$scope:{ctx:m}}}),o=new J({props:{$$slots:{default:[el]},$$scope:{ctx:m}}}),C=new J({props:{$$slots:{default:[tl]},$$scope:{ctx:m}}}),w=new J({props:{className:"scale-90",$$slots:{default:[nl]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment),s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),x=_(),j(o.$$.fragment),c=_(),j(C.$$.fragment),d=_(),j(w.$$.fragment)},l(D){e=g(D,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1dl0775"&&(e.textContent=r),l=v(D),M(t.$$.fragment,D),f=v(D),M(n.$$.fragment,D),s=v(D),M(p.$$.fragment,D),i=v(D),M($.$$.fragment,D),x=v(D),M(o.$$.fragment,D),c=v(D),M(C.$$.fragment,D),d=v(D),M(w.$$.fragment,D)},m(D,B){u(D,e,B),u(D,l,B),T(t,D,B),u(D,f,B),T(n,D,B),u(D,s,B),T(p,D,B),u(D,i,B),T($,D,B),u(D,x,B),T(o,D,B),u(D,c,B),T(C,D,B),u(D,d,B),T(w,D,B),V=!0},p(D,B){const O={};B&1&&(O.$$scope={dirty:B,ctx:D}),t.$set(O);const E={};B&1&&(E.$$scope={dirty:B,ctx:D}),n.$set(E);const z={};B&1&&(z.$$scope={dirty:B,ctx:D}),p.$set(z);const I={};B&1&&(I.$$scope={dirty:B,ctx:D}),$.$set(I);const W={};B&1&&(W.$$scope={dirty:B,ctx:D}),o.$set(W);const K={};B&1&&(K.$$scope={dirty:B,ctx:D}),C.$set(K);const A={};B&1&&(A.$$scope={dirty:B,ctx:D}),w.$set(A)},i(D){V||(S(t.$$.fragment,D),S(n.$$.fragment,D),S(p.$$.fragment,D),S($.$$.fragment,D),S(o.$$.fragment,D),S(C.$$.fragment,D),S(w.$$.fragment,D),V=!0)},o(D){q(t.$$.fragment,D),q(n.$$.fragment,D),q(p.$$.fragment,D),q($.$$.fragment,D),q(o.$$.fragment,D),q(C.$$.fragment,D),q(w.$$.fragment,D),V=!1},d(D){D&&(a(e),a(l),a(f),a(s),a(i),a(x),a(c),a(d)),P(t,D),P(n,D),P(p,D),P($,D),P(o,D),P(C,D),P(w,D)}}}function il(m){let e,r;return e=new J({props:{$$slots:{default:[sl]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class rl extends he{constructor(e){super(),be(this,e,null,il,ge,{})}}function al(m){let e=`
                abstract class Animal {}
                abstract class AnimalVolant extends Animal {}
                abstract class AnimalNageur extends Animal {}
                class Canard extends AnimalVolant, AnimalNageur {}
            `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ul(m){let e,r="L'héritage multiple",l,t,f="Comment hériter de deux classes ?",n,s,p,i,$=`En Java, ce n&#39;est pas possible !
			<br/> En revanche, on peut utiliser une interface pour simuler l&#39;héritage multiple.`,x;return s=new He({props:{$$slots:{default:[al]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment),p=_(),i=h("p"),i.innerHTML=$,this.h()},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lz4bxy"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1py5itu"&&(t.textContent=f),n=v(o),M(s.$$.fragment,o),p=v(o),i=g(o,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-mtdftf"&&(i.innerHTML=$),this.h()},h(){L(i,"class","fragment")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),T(s,o,c),u(o,p,c),u(o,i,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),s.$set(C)},i(o){x||(S(s.$$.fragment,o),x=!0)},o(o){q(s.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(n),a(p),a(i)),P(s,o)}}}function ol(m){let e,r;return e=new J({props:{$$slots:{default:[ul]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,t){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}function $l(m){let e=`
    
    public interface ArticleLouable {
      float reserver(Date from, Date to); 
      float rendre(int penalite);    
    }
        `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function fl(m){let e,r="Une interface est un type de référence similaire à une classe abstraite qui ne contient que des méthodes abstraites.",l,t,f=`Une interface n'a pas de code "par défaut", seulement des signatures de méthodes.`,n,s,p;return s=new se({props:{$$slots:{default:[$l]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-knqkk"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1phkx1u"&&(t.textContent=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function cl(m){let e,r="Implémentation d’une interface",l,t,f=`Une classe signale les interfaces qu’elle implémente grâce au mot-clé <code>implements</code>.
			Une classe concrète doit fournir une implémentation pour toutes les méthodes d’une interface,
			soit dans sa déclaration, soit parce qu’elle en hérite.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=r),l=v(n),t=g(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1vu2bky"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function pl(m){let e=`
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
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ml(m){let e,r="Implémentation d’une interface",l,t,f;return t=new se({props:{className:"h-[70vh]",$$slots:{default:[pl]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function dl(m){let e,r="Implémentation d’une interface",l,t,f=`Une interface permet de mutualiser une implémentation entre des classes qui n’ont pas de lien
			d’héritage.<br/>
			Si une classe implémente une interface, ses classes dérivées héritent de cette implémentation,
			mais il est toutefois possible de la surcharger.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=r),l=v(n),t=g(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1p8gsb2"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function vl(m){let e,r="Comment choisir entre une classe abstraite et une interface ?",l,t,f=`<li><b>Classe abstraite</b> : Si, fondamentalement, on peut dire &quot;Un Dauphin est un Animal&quot;,
				alors, vous <i>pouvez</i> utiliser une classe abstraite.<br/></li> <li><b>Interface</b> : S&#39;il est plus juste de dire &quot;Un Dauphin peut nager&quot;, alors vous
				<i>devriez</i>
				utiliser une interface.
				<ul><li>Si quelque chose qui n&#39;aurait rien à voir avec vos animaux pouvait nager, utilisez une
						interface.<br/>
						Par exemple, un avion et un oiseau peuvent voler, mais ils n&#39;ont rien à voir l&#39;un avec l&#39;autre.</li> <li>Sinon, prévoyez plutôt une interface si vous pensez qu&#39;une classe fille pourrait avoir besoin
						d&#39;hériter de plusieurs classes.</li></ul></li>`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f,this.h()},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-95djsx"&&(e.textContent=r),l=v(n),t=g(n,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-exxt3p"&&(t.innerHTML=f),this.h()},h(){L(t,"class","text-4xl")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function _l(m){let e=`
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
        `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function xl(m){let e=`
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

                `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Cl(m){let e,r="Comment choisir entre une classe abstraite et une interface ?",l,t,f,n,s,p;return f=new He({props:{$$slots:{default:[_l]},$$scope:{ctx:m}}}),s=new He({props:{$$slots:{default:[xl]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("div"),j(f.$$.fragment),n=_(),j(s.$$.fragment),this.h()},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-95djsx"&&(e.textContent=r),l=v(i),t=g(i,"DIV",{class:!0});var $=ne(t);M(f.$$.fragment,$),n=v($),M(s.$$.fragment,$),$.forEach(a),this.h()},h(){L(t,"class","flex flex-row justify-center items-center")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),T(f,t,null),Q(t,n),T(s,t,null),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),f.$set(x);const o={};$&1&&(o.$$scope={dirty:$,ctx:i}),s.$set(o)},i(i){p||(S(f.$$.fragment,i),S(s.$$.fragment,i),p=!0)},o(i){q(f.$$.fragment,i),q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t)),P(f),P(s)}}}function gl(m){let e=`
            public class BassinAquatique {
                public void faireNager(Nageur nageur) {
                    nageur.nager();
                    // Ici, qu'ils soient un humain, un dauphin ou un crocodile, 
                    // les instances de ces classes peuvent nager 
                    // peu importe que ce soit des mammifères ou des reptiles
                }
            }
            `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function hl(m){let e,r="Préambule au polymorphisme",l,t,f="Vos méthodes peuvent prendre en paramètre une interface, ce qui permet de passer n'importe quel objet qui l'implémente.",n,s,p;return s=new se({props:{class:" highlighter language-java",$$slots:{default:[gl]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-mwdtiv"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1nz7nr5"&&(t.textContent=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function bl(m){let e=`
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

            `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function wl(m){let e,r="Héritage d’interface",l,t,f=`Une interface peut hériter d’une ou plusieurs autres interfaces. Dans ce cas, elle hérite de
			toutes les méthodes déclarées dans les interfaces parentes. Pour déclarer un héritage, on
			utilise le mot-clé <code>extends</code>.`,n,s,p;return s=new se({props:{className:"highlighter language-java",$$slots:{default:[bl]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-j0acen"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-tpi5ka"&&(t.innerHTML=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function Ll(m){let e=`
                interface Omnivore extends Herbivore, Carnivore {...}
                class Humain implements Omnivore {...}

                var bob = new Humain();
                if (bob instanceof Carnivore) {
                    System.out.println("bob mange de la viande");
                }
                if (bob instanceof Herbivore) {
                    System.out.println("bob mange des plantes");
                }
            `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Hl(m){let e,r="Héritage d’interface",l,t,f="Comme chaque interface introduit un nouveau type, il est possible de contrôler, grâce au mot-clé <code>instanceof</code>, qu’une variable, un paramètre ou un attribut est bien une instance compatible avec cette interface.",n,s,p;return s=new se({props:{className:"highlighter language-java",$$slots:{default:[Ll]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-j0acen"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-19uyonh"&&(t.innerHTML=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function Pl(m){let e=`
            interface IConfidential {}
            class DossierMedical implements IConfidential {}
            ...
            void logguerDansUnFichier(Object p) {
                if (p instanceof IConfidential) {
                    return; // On ne loggue pas les informations confidentielles
                }
            }
            `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ql(m){let e,r="Les interfaces marqueurs",l,t,f=`Une interface sans méthode est appelée une interface marqueur. <br/>
            Elle est utilisée pour étiqueter une classe.`,n,s,p="On les utilise ainsi",i,$,x,o,c="Rappelez-vous, comme on peut implémenter plusieurs interfaces, n'importe quelle classe peut implémenter une interface marqueur.",C;return $=new se({props:{className:"highlighter language-java",$$slots:{default:[Pl]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),s=h("p"),s.textContent=p,i=_(),j($.$$.fragment),x=_(),o=h("p"),o.textContent=c},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-9j49lb"&&(e.textContent=r),l=v(d),t=g(d,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1oln2yg"&&(t.innerHTML=f),n=v(d),s=g(d,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1pg3gma"&&(s.textContent=p),i=v(d),M($.$$.fragment,d),x=v(d),o=g(d,"P",{"data-svelte-h":!0}),b(o)!=="svelte-zr6vig"&&(o.textContent=c)},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),T($,d,w),u(d,x,w),u(d,o,w),C=!0},p(d,w){const V={};w&1&&(V.$$scope={dirty:w,ctx:d}),$.$set(V)},i(d){C||(S($.$$.fragment,d),C=!0)},o(d){q($.$$.fragment,d),C=!1},d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a(x),a(o)),P($,d)}}}function Sl(m){let e,r="Conventions de nommage",l,t,f=`<li>Les interfaces sont nommées avec un nom qui commence par &quot;I&quot; suivi d&#39;un nom.</li> <li>Le nom est un adjectif ou un nom qui décrit un comportement.</li> <li>Exemple :
                <ul><li>IVolant</li> <li>IConfidentiel</li> <li><s>INageur</s></li> <li><s>Bateau</s></li> <li><s>Vitesse</s></li></ul></li>`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1cx5ud7"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-16lqdjx"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Tl(m){let e,r="Les interfaces",l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E,z,I,W,K;return t=new J({props:{$$slots:{default:[fl]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[cl]},$$scope:{ctx:m}}}),p=new J({props:{$$slots:{default:[ml]},$$scope:{ctx:m}}}),$=new J({props:{$$slots:{default:[dl]},$$scope:{ctx:m}}}),o=new J({props:{$$slots:{default:[vl]},$$scope:{ctx:m}}}),C=new J({props:{$$slots:{default:[Cl]},$$scope:{ctx:m}}}),w=new J({props:{$$slots:{default:[hl]},$$scope:{ctx:m}}}),D=new J({props:{$$slots:{default:[wl]},$$scope:{ctx:m}}}),O=new J({props:{$$slots:{default:[Hl]},$$scope:{ctx:m}}}),z=new J({props:{$$slots:{default:[ql]},$$scope:{ctx:m}}}),W=new J({props:{$$slots:{default:[Sl]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment),s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),x=_(),j(o.$$.fragment),c=_(),j(C.$$.fragment),d=_(),j(w.$$.fragment),V=_(),j(D.$$.fragment),B=_(),j(O.$$.fragment),E=_(),j(z.$$.fragment),I=_(),j(W.$$.fragment)},l(A){e=g(A,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lczfm4"&&(e.textContent=r),l=v(A),M(t.$$.fragment,A),f=v(A),M(n.$$.fragment,A),s=v(A),M(p.$$.fragment,A),i=v(A),M($.$$.fragment,A),x=v(A),M(o.$$.fragment,A),c=v(A),M(C.$$.fragment,A),d=v(A),M(w.$$.fragment,A),V=v(A),M(D.$$.fragment,A),B=v(A),M(O.$$.fragment,A),E=v(A),M(z.$$.fragment,A),I=v(A),M(W.$$.fragment,A)},m(A,k){u(A,e,k),u(A,l,k),T(t,A,k),u(A,f,k),T(n,A,k),u(A,s,k),T(p,A,k),u(A,i,k),T($,A,k),u(A,x,k),T(o,A,k),u(A,c,k),T(C,A,k),u(A,d,k),T(w,A,k),u(A,V,k),T(D,A,k),u(A,B,k),T(O,A,k),u(A,E,k),T(z,A,k),u(A,I,k),T(W,A,k),K=!0},p(A,k){const H={};k&1&&(H.$$scope={dirty:k,ctx:A}),t.$set(H);const U={};k&1&&(U.$$scope={dirty:k,ctx:A}),n.$set(U);const te={};k&1&&(te.$$scope={dirty:k,ctx:A}),p.$set(te);const re={};k&1&&(re.$$scope={dirty:k,ctx:A}),$.$set(re);const G={};k&1&&(G.$$scope={dirty:k,ctx:A}),o.$set(G);const X={};k&1&&(X.$$scope={dirty:k,ctx:A}),C.$set(X);const ae={};k&1&&(ae.$$scope={dirty:k,ctx:A}),w.$set(ae);const y={};k&1&&(y.$$scope={dirty:k,ctx:A}),D.$set(y);const ee={};k&1&&(ee.$$scope={dirty:k,ctx:A}),O.$set(ee);const ue={};k&1&&(ue.$$scope={dirty:k,ctx:A}),z.$set(ue);const oe={};k&1&&(oe.$$scope={dirty:k,ctx:A}),W.$set(oe)},i(A){K||(S(t.$$.fragment,A),S(n.$$.fragment,A),S(p.$$.fragment,A),S($.$$.fragment,A),S(o.$$.fragment,A),S(C.$$.fragment,A),S(w.$$.fragment,A),S(D.$$.fragment,A),S(O.$$.fragment,A),S(z.$$.fragment,A),S(W.$$.fragment,A),K=!0)},o(A){q(t.$$.fragment,A),q(n.$$.fragment,A),q(p.$$.fragment,A),q($.$$.fragment,A),q(o.$$.fragment,A),q(C.$$.fragment,A),q(w.$$.fragment,A),q(D.$$.fragment,A),q(O.$$.fragment,A),q(z.$$.fragment,A),q(W.$$.fragment,A),K=!1},d(A){A&&(a(e),a(l),a(f),a(s),a(i),a(x),a(c),a(d),a(V),a(B),a(E),a(I)),P(t,A),P(n,A),P(p,A),P($,A),P(o,A),P(C,A),P(w,A),P(D,A),P(O,A),P(z,A),P(W,A)}}}function Ml(m){let e,r,l,t;return e=new J({props:{$$slots:{default:[ol]},$$scope:{ctx:m}}}),l=new J({props:{$$slots:{default:[Tl]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),r=_(),j(l.$$.fragment)},l(f){M(e.$$.fragment,f),r=v(f),M(l.$$.fragment,f)},m(f,n){T(e,f,n),u(f,r,n),T(l,f,n),t=!0},p(f,[n]){const s={};n&1&&(s.$$scope={dirty:n,ctx:f}),e.$set(s);const p={};n&1&&(p.$$scope={dirty:n,ctx:f}),l.$set(p)},i(f){t||(S(e.$$.fragment,f),S(l.$$.fragment,f),t=!0)},o(f){q(e.$$.fragment,f),q(l.$$.fragment,f),t=!1},d(f){f&&a(r),P(e,f),P(l,f)}}}class jl extends he{constructor(e){super(),be(this,e,null,Ml,ge,{})}}function Al(m){let e,r="L'encapsulation est un concept fondamental de la programmation orientée objet. Elle consiste à cacher les détails internes d'une classe et à ne fournir qu'une interface publique pour interagir avec cette classe.";return{c(){e=h("p"),e.textContent=r},l(l){e=g(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-18kz425"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function kl(m){let e,r="L'encapsulation permet de protéger les données et de contrôler leur accès. Elle rend également le code plus modulaire et plus facile à maintenir.";return{c(){e=h("p"),e.textContent=r},l(l){e=g(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-p7ing"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function Dl(m){let e,r="Pour encapsuler des données, on utilise des modificateurs d'accès qui déterminent la visibilité des attributs et des méthodes d'une classe.",l,t,f="<li><code>public</code> : accessible depuis n&#39;importe où</li> <li><code>private</code> : accessible uniquement depuis la classe elle-même</li> <li><code>protected</code> : accessible depuis la classe et ses sous-classes</li>";return{c(){e=h("p"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1yfugik"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-be97eu"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function El(m){let e=`
    class Personne {
        private String nom;
        private int age;

        public String getNom() {
            return nom;
        }

        public void setNom(String nom) {
            this.nom = nom;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }
    }
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function zl(m){let e,r="Voici un exemple d'encapsulation en Java :",l,t,f;return t=new se({props:{$$slots:{default:[El]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-sf7cl9"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function Il(m){let e,r=`Dans cet exemple, les attributs <code>nom</code> et <code>age</code> sont privés et ne peuvent pas être accédés directement depuis l&#39;extérieur.
			On utilise des méthodes publiques, <code>getNom</code>, <code>setNom</code>, <code>getAge</code> et <code>setAge</code>, pour y accéder et les modifier.`,l,t,f="Fondamentalement, <code>getNom</code> et <code>setNom</code> sont de simples méthodes, mais compte tenu de leur rôle, on les appelle des <i>accesseurs</i> et des <i>mutateurs</i>.";return{c(){e=h("p"),e.innerHTML=r,l=_(),t=h("p"),t.innerHTML=f,this.h()},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1kva8j3"&&(e.innerHTML=r),l=v(n),t=g(n,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-h4vula"&&(t.innerHTML=f),this.h()},h(){L(t,"class","text-important")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Ol(m){let e=`
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ul(m){let e,r=`L&#39;encapsulation permet de contrôler l&#39;accès aux données et de s&#39;assurer qu&#39;elles sont manipulées de manière cohérente.
			Par exemple, on peut ajouter des vérifications dans les méthodes <code>set</code> pour s&#39;assurer que les valeurs sont valides.`,l,t,f;return t=new se({props:{$$slots:{default:[Ol]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.innerHTML=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1ykoszv"&&(e.innerHTML=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function Vl(m){let e,r=`L&#39;utilisation du modificateur <code>protected</code> permet aux classes dérivées d&#39;accéder aux attributs et méthodes de la classe parente.
			Cela est utile lorsque l&#39;on souhaite permettre à des sous-classes d&#39;utiliser ou de modifier des données tout en les protégeant de l&#39;accès direct extérieur.`;return{c(){e=h("p"),e.innerHTML=r},l(l){e=g(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-63vpew"&&(e.innerHTML=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function Bl(m){let e=`
    class Animal {
        protected String nom;

        public Animal(String nom) {
            this.nom = nom;
        }
    }

    class Chien extends Animal {
        public Chien(String nom) {
            super(nom);
        }

        public void aboyer() {
            System.out.println(nom + " aboie !");
        }
    }
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Jl(m){let e,r,l,t="Dans cet exemple, l&#39;attribut <code>nom</code> est protégé, ce qui permet à la classe <code>Chien</code> d&#39;y accéder dans sa méthode <code>aboyer</code>.",f;return e=new se({props:{$$slots:{default:[Bl]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),r=_(),l=h("p"),l.innerHTML=t},l(n){M(e.$$.fragment,n),r=v(n),l=g(n,"P",{"data-svelte-h":!0}),b(l)!=="svelte-68bfas"&&(l.innerHTML=t)},m(n,s){T(e,n,s),u(n,r,s),u(n,l,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),e.$set(p)},i(n){f||(S(e.$$.fragment,n),f=!0)},o(n){q(e.$$.fragment,n),f=!1},d(n){n&&(a(r),a(l)),P(e,n)}}}function Nl(m){let e=`
    class CompteBancaire {
        private double solde;
        public double getSolde() {
            return solde;
        }
        public void deposer(double montant) {
            if (montant > 0) {
                solde += montant;
            }
        }
        public void retirer(double montant) {
            if (montant > 0 && montant <= solde) {
                solde -= montant;
            }
        }
    }
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Rl(m){let e,r=`Les attributs privés sont utilisés pour restreindre l'accès direct aux données sensibles ou critiques,\r
			garantissant ainsi que seules des méthodes contrôlées peuvent les modifier.`,l,t,f,n,s="Dans cet exemple, le solde du compte est privé et ne peut être modifié que par les méthodes <code>deposer</code> et <code>retirer</code>, lesquelles effectuent des vérifications.",p;return t=new se({props:{$$slots:{default:[Nl]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),n=h("p"),n.innerHTML=s,this.h()},l(i){e=g(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-c17ad2"&&(e.textContent=r),l=v(i),M(t.$$.fragment,i),f=v(i),n=g(i,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-13qfjds"&&(n.innerHTML=s),this.h()},h(){L(n,"class","smaller")},m(i,$){u(i,e,$),u(i,l,$),T(t,i,$),u(i,f,$),u(i,n,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),t.$set(x)},i(i){p||(S(t.$$.fragment,i),p=!0)},o(i){q(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(f),a(n)),P(t,i)}}}function Fl(m){let e,r="Verbosité",l,t,f="Le Java est parfois critiqué pour sa verbosité. En effet, le code Java peut sembler plus long et plus complexe que d'autres langages.",n,s,p="Vous devez écrire environ 7 lignes pour déclarer un simple attribut avec ses accesseurs et mutateurs.";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.textContent=p},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11a3931"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-z5t63c"&&(t.textContent=f),n=v(i),s=g(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-173up6e"&&(s.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function yl(m){let e=`
        // C#
        class Personne {
            public string Nom { get; }
            public int Age    { get; set; }
            public int Taille {
                get; 
                set => field = value; 
            }
        }
        `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Gl(m){let e=`
        // Kotlin
        class Personne {
            var nom: String = ""
                private set
            var age: Int = 0
            var taille: Int = 0
                set(value) {
                    field = value
                }
        }
                `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ql(m){let e,r="D'autres langages permettent de déclarer des accesseurs et mutateurs de manière plus concise :",l,t,f,n,s,p,i,$="En Java, un IDE peut générer automatiquement ces méthodes. Cela peut sembler pénible, mais il faut le faire.",x;return f=new se({props:{$$slots:{default:[yl]},$$scope:{ctx:m}}}),s=new se({props:{$$slots:{default:[Gl]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.textContent=r,l=_(),t=h("div"),j(f.$$.fragment),n=_(),j(s.$$.fragment),p=_(),i=h("p"),i.textContent=$,this.h()},l(o){e=g(o,"P",{"data-svelte-h":!0}),b(e)!=="svelte-v898e4"&&(e.textContent=r),l=v(o),t=g(o,"DIV",{class:!0});var c=ne(t);M(f.$$.fragment,c),n=v(c),M(s.$$.fragment,c),c.forEach(a),p=v(o),i=g(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-1mll0hr"&&(i.textContent=$),this.h()},h(){L(t,"class","flex flex-row")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),T(f,t,null),Q(t,n),T(s,t,null),u(o,p,c),u(o,i,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),f.$set(C);const d={};c&1&&(d.$$scope={dirty:c,ctx:o}),s.$set(d)},i(o){x||(S(f.$$.fragment,o),S(s.$$.fragment,o),x=!0)},o(o){q(f.$$.fragment,o),q(s.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(p),a(i)),P(f),P(s)}}}function Wl(m){let e=`
    public void setMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
        envoyerEmailPourPrevenirUtilisateurDeLaModification(email, mobilePhoneNumber);
    }
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Kl(m){let e,r="Maintenance",l,t,f=`En encapsulant les données et en contrôlant leur accès, vous facilitez la maintenance de votre code.\r
			Imaginez que vous avez laissé un attribut public et que vous le modifiez dans 50 endroits différents.\r
			Si vous souhaitez désormais enregistrer chaque modification, vous devrez intervenir à ces 50 endroits.`,n,s,p;return s=new se({props:{$$slots:{default:[Wl]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ky5g9v"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-ucx1td"&&(t.textContent=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function Zl(m){let e,r="Encapsulation",l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E,z,I,W,K,A,k;return t=new J({props:{$$slots:{default:[Al]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[kl]},$$scope:{ctx:m}}}),p=new J({props:{$$slots:{default:[Dl]},$$scope:{ctx:m}}}),$=new J({props:{$$slots:{default:[zl]},$$scope:{ctx:m}}}),o=new J({props:{$$slots:{default:[Il]},$$scope:{ctx:m}}}),C=new J({props:{$$slots:{default:[Ul]},$$scope:{ctx:m}}}),w=new J({props:{$$slots:{default:[Vl]},$$scope:{ctx:m}}}),D=new J({props:{$$slots:{default:[Jl]},$$scope:{ctx:m}}}),O=new J({props:{$$slots:{default:[Rl]},$$scope:{ctx:m}}}),z=new J({props:{data_background_color:"#00353F",$$slots:{default:[Fl]},$$scope:{ctx:m}}}),W=new J({props:{data_background_color:"#00353F",$$slots:{default:[Ql]},$$scope:{ctx:m}}}),A=new J({props:{$$slots:{default:[Kl]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment),s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),x=_(),j(o.$$.fragment),c=_(),j(C.$$.fragment),d=_(),j(w.$$.fragment),V=_(),j(D.$$.fragment),B=_(),j(O.$$.fragment),E=_(),j(z.$$.fragment),I=_(),j(W.$$.fragment),K=_(),j(A.$$.fragment)},l(H){e=g(H,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-d8x7o6"&&(e.textContent=r),l=v(H),M(t.$$.fragment,H),f=v(H),M(n.$$.fragment,H),s=v(H),M(p.$$.fragment,H),i=v(H),M($.$$.fragment,H),x=v(H),M(o.$$.fragment,H),c=v(H),M(C.$$.fragment,H),d=v(H),M(w.$$.fragment,H),V=v(H),M(D.$$.fragment,H),B=v(H),M(O.$$.fragment,H),E=v(H),M(z.$$.fragment,H),I=v(H),M(W.$$.fragment,H),K=v(H),M(A.$$.fragment,H)},m(H,U){u(H,e,U),u(H,l,U),T(t,H,U),u(H,f,U),T(n,H,U),u(H,s,U),T(p,H,U),u(H,i,U),T($,H,U),u(H,x,U),T(o,H,U),u(H,c,U),T(C,H,U),u(H,d,U),T(w,H,U),u(H,V,U),T(D,H,U),u(H,B,U),T(O,H,U),u(H,E,U),T(z,H,U),u(H,I,U),T(W,H,U),u(H,K,U),T(A,H,U),k=!0},p(H,U){const te={};U&1&&(te.$$scope={dirty:U,ctx:H}),t.$set(te);const re={};U&1&&(re.$$scope={dirty:U,ctx:H}),n.$set(re);const G={};U&1&&(G.$$scope={dirty:U,ctx:H}),p.$set(G);const X={};U&1&&(X.$$scope={dirty:U,ctx:H}),$.$set(X);const ae={};U&1&&(ae.$$scope={dirty:U,ctx:H}),o.$set(ae);const y={};U&1&&(y.$$scope={dirty:U,ctx:H}),C.$set(y);const ee={};U&1&&(ee.$$scope={dirty:U,ctx:H}),w.$set(ee);const ue={};U&1&&(ue.$$scope={dirty:U,ctx:H}),D.$set(ue);const oe={};U&1&&(oe.$$scope={dirty:U,ctx:H}),O.$set(oe);const fe={};U&1&&(fe.$$scope={dirty:U,ctx:H}),z.$set(fe);const ve={};U&1&&(ve.$$scope={dirty:U,ctx:H}),W.$set(ve);const $e={};U&1&&($e.$$scope={dirty:U,ctx:H}),A.$set($e)},i(H){k||(S(t.$$.fragment,H),S(n.$$.fragment,H),S(p.$$.fragment,H),S($.$$.fragment,H),S(o.$$.fragment,H),S(C.$$.fragment,H),S(w.$$.fragment,H),S(D.$$.fragment,H),S(O.$$.fragment,H),S(z.$$.fragment,H),S(W.$$.fragment,H),S(A.$$.fragment,H),k=!0)},o(H){q(t.$$.fragment,H),q(n.$$.fragment,H),q(p.$$.fragment,H),q($.$$.fragment,H),q(o.$$.fragment,H),q(C.$$.fragment,H),q(w.$$.fragment,H),q(D.$$.fragment,H),q(O.$$.fragment,H),q(z.$$.fragment,H),q(W.$$.fragment,H),q(A.$$.fragment,H),k=!1},d(H){H&&(a(e),a(l),a(f),a(s),a(i),a(x),a(c),a(d),a(V),a(B),a(E),a(I),a(K)),P(t,H),P(n,H),P(p,H),P($,H),P(o,H),P(C,H),P(w,H),P(D,H),P(O,H),P(z,H),P(W,H),P(A,H)}}}function Yl(m){let e,r;return e=new J({props:{$$slots:{default:[Zl]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class Xl extends he{constructor(e){super(),be(this,e,null,Yl,ge,{})}}function en(m){let e,r=`La programmation orientée objet (POO) est un paradigme de programmation qui repose sur la notion d'objets.\r
			Un objet est une instance d'une classe, regroupant des données (attributs) et des comportements (méthodes).`;return{c(){e=h("p"),e.textContent=r},l(l){e=g(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-jh4mu9"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function tn(m){let e=`
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
			
			var p = new Personne("PICOT", "Alexis", 28);
`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ln(m){let e,r="Pour créer un objet, on utilise le mot-clé <b>new</b> suivi du nom de la classe.",l,t,f="Chaque classe possède un constructeur par défaut qui peut être redéfini afin de personnaliser la création de l'objet.",n,s,p;return s=new se({props:{$$slots:{default:[tn]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.innerHTML=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-17k8ka7"&&(e.innerHTML=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-11ogb43"&&(t.textContent=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function nn(m){let e=`
			public class Personne {
				String nom;
				String prenom;
				int age;

				public Personne(String nom, String prenom, int age) {
					this.nom = nom;
					this.prenom = prenom;
					this.age = age;
				}
				public Personne(String numéroÉtudiant) {
					// Recherche de l'étudiant dans la base de données à partir de son numéro
					this(nom, prenom, age);
				}
			}
`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function sn(m){let e,r="Il peut y avoir plusieurs constructeurs dans une classe, on parle de surcharge de constructeurs.",l,t,f;return t=new se({props:{$$slots:{default:[nn]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1yq3f8o"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function rn(m){let e,r="Les modificateurs d'accès permettent de définir la visibilité des attributs et des méthodes.",l,t,f="Il existe 4 modificateurs d'accès :",n,s,p="<li><code>public</code> : accessible partout</li> <li><code>protected</code> : accessible dans la classe et dans ses sous-classes</li> <li><code>private</code> : accessible uniquement dans la classe</li> <li><code>default</code> : accessible uniquement dans le package</li>",i,$,x="Nous verrons plus tard l'intérêt de ces modificateurs d'accès, ne soyez pas surpris si vous ne les comprenez pas tout de suite.";return{c(){e=h("p"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("ul"),s.innerHTML=p,i=_(),$=h("p"),$.textContent=x,this.h()},l(o){e=g(o,"P",{"data-svelte-h":!0}),b(e)!=="svelte-14phf9s"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-a3flkn"&&(t.textContent=f),n=v(o),s=g(o,"UL",{"data-svelte-h":!0}),b(s)!=="svelte-101pfey"&&(s.innerHTML=p),i=v(o),$=g(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-g1bdlv"&&($.textContent=x),this.h()},h(){L($,"class","text-important")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function an(m){let e=`
				try {
					// Code qui peut générer une exception
					int a = 10/0;
					// ou on peut générer une exception personnalisée
					throw new Exception("Erreur personnalisée");
				} catch (Exception e) {
					// Code pour gérer l'exception
					System.out.println("Erreur : " + e.getMessage());
				} finally {
					// Code qui sera exécuté qu'il y ait une exception ou non
				}
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function un(m){let e,r="Gestion des erreurs",l,t,f="La gestion des exceptions permet de gérer les erreurs qui peuvent survenir lors de l'exécution d'un programme.",n,s,p="En Java, on utilise les blocs <code>try</code>, <code>catch</code> et <code>finally</code> pour gérer les exceptions.",i,$,x;return $=new se({props:{$$slots:{default:[an]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.innerHTML=p,i=_(),j($.$$.fragment)},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6lmlz1"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1mgrawl"&&(t.textContent=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-mv2gtj"&&(s.innerHTML=p),i=v(o),M($.$$.fragment,o)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),T($,o,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),$.$set(C)},i(o){x||(S($.$$.fragment,o),x=!0)},o(o){q($.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i)),P($,o)}}}function on(m){let e,r="Généralités sur la POO",l,t,f,n,s,p,i,$,x,o,c;return t=new J({props:{$$slots:{default:[en]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[ln]},$$scope:{ctx:m}}}),p=new J({props:{$$slots:{default:[sn]},$$scope:{ctx:m}}}),$=new J({props:{$$slots:{default:[rn]},$$scope:{ctx:m}}}),o=new J({props:{$$slots:{default:[un]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment),s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),x=_(),j(o.$$.fragment)},l(C){e=g(C,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lsottk"&&(e.textContent=r),l=v(C),M(t.$$.fragment,C),f=v(C),M(n.$$.fragment,C),s=v(C),M(p.$$.fragment,C),i=v(C),M($.$$.fragment,C),x=v(C),M(o.$$.fragment,C)},m(C,d){u(C,e,d),u(C,l,d),T(t,C,d),u(C,f,d),T(n,C,d),u(C,s,d),T(p,C,d),u(C,i,d),T($,C,d),u(C,x,d),T(o,C,d),c=!0},p(C,d){const w={};d&1&&(w.$$scope={dirty:d,ctx:C}),t.$set(w);const V={};d&1&&(V.$$scope={dirty:d,ctx:C}),n.$set(V);const D={};d&1&&(D.$$scope={dirty:d,ctx:C}),p.$set(D);const B={};d&1&&(B.$$scope={dirty:d,ctx:C}),$.$set(B);const O={};d&1&&(O.$$scope={dirty:d,ctx:C}),o.$set(O)},i(C){c||(S(t.$$.fragment,C),S(n.$$.fragment,C),S(p.$$.fragment,C),S($.$$.fragment,C),S(o.$$.fragment,C),c=!0)},o(C){q(t.$$.fragment,C),q(n.$$.fragment,C),q(p.$$.fragment,C),q($.$$.fragment,C),q(o.$$.fragment,C),c=!1},d(C){C&&(a(e),a(l),a(f),a(s),a(i),a(x)),P(t,C),P(n,C),P(p,C),P($,C),P(o,C)}}}function $n(m){let e,r;return e=new J({props:{$$slots:{default:[on]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class fn extends he{constructor(e){super(),be(this,e,null,$n,ge,{})}}const cn=""+new URL("../assets/TD1.B5LctFM5.pdf",import.meta.url).href,pn=""+new URL("../assets/TD2.D6kSf9tn.pdf",import.meta.url).href,mn=""+new URL("../assets/TD3.Cbwm9oYP.pdf",import.meta.url).href,dn=""+new URL("../assets/TD3Bis.CvsjeAEt.pdf",import.meta.url).href,vn=""+new URL("../assets/TDParc.BMAMZ7Fy.pdf",import.meta.url).href,_n=""+new URL("../assets/Mise-en-place-env.B_q2XZLi.html",import.meta.url).href,xn=""+new URL("../assets/Plantuml.qFHaOZcF.html",import.meta.url).href;function Cn(m){let e,r="Configuration TD",l,t,f="Clonez le dépôt",n,s,p,i,$="Puis collez l'URL de votre répo Git",x,o,c,C;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("a"),t.textContent=f,n=_(),s=h("br"),p=_(),i=h("p"),i.textContent=$,x=_(),o=h("input"),this.h()},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1femyhu"&&(e.textContent=r),l=v(d),t=g(d,"A",{target:!0,href:!0,"data-svelte-h":!0}),b(t)!=="svelte-iaex2q"&&(t.textContent=f),n=v(d),s=g(d,"BR",{}),p=v(d),i=g(d,"P",{"data-svelte-h":!0}),b(i)!=="svelte-1h3gyi7"&&(i.textContent=$),x=v(d),o=g(d,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){L(t,"target","_blank"),L(t,"href","https://classroom.github.com/a/FKWh2cOe"),L(o,"class","w-full text-accent-950 text-lg z-50 mb-16"),L(o,"type","text"),L(o,"placeholder","URL du dépôt git")},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,p,w),u(d,i,w),u(d,x,w),u(d,o,w),Ne(o,m[1]),c||(C=[Re(o,"input",m[2]),Re(o,"input",m[3])],c=!0)},p(d,w){w&2&&o.value!==d[1]&&Ne(o,d[1])},d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(p),a(i),a(x),a(o)),c=!1,We(C)}}}function gn(m){let e,r="TD",l,t,f,n,s,p,i,$,x=`/ <a href="${cn}">Corrigé</a>`,o,c,C,d,w,V,D,B=`/ <a href="${pn}">Corrigé</a>`,O,E,z,I,W,K,A,k=`/ <a href="${mn}">Corrigé</a>`,H,U,te,re,G,X,ae,y=`/ <a href="${dn}">Corrigé</a>`,ee,ue,oe,fe,ve,$e,xe,_e=`/ <a href="${vn}">Corrigé</a>`,Ce,R,le=`<a target="_blank" href="${xn}">Tuto PlantUML</a>`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("ul"),f=h("li"),n=h("a"),s=Y("TD1"),i=_(),$=h("span"),$.innerHTML=x,o=_(),c=h("li"),C=h("a"),d=Y("TD2"),V=_(),D=h("span"),D.innerHTML=B,O=_(),E=h("li"),z=h("a"),I=Y("TD3"),K=_(),A=h("span"),A.innerHTML=k,H=_(),U=h("li"),te=h("a"),re=Y("TD3 Bis (Optionnel)"),X=_(),ae=h("span"),ae.innerHTML=y,ee=_(),ue=h("li"),oe=h("a"),fe=Y("TD4"),$e=_(),xe=h("span"),xe.innerHTML=_e,Ce=_(),R=h("li"),R.innerHTML=le,this.h()},l(ce){e=g(ce,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-fqlmo2"&&(e.textContent=r),l=v(ce),t=g(ce,"UL",{});var pe=ne(t);f=g(pe,"LI",{});var F=ne(f);n=g(F,"A",{target:!0,href:!0});var ie=ne(n);s=Z(ie,"TD1"),ie.forEach(a),i=v(F),$=g(F,"SPAN",{"data-svelte-h":!0}),b($)!=="svelte-1aax1lb"&&($.innerHTML=x),F.forEach(a),o=v(pe),c=g(pe,"LI",{});var we=ne(c);C=g(we,"A",{target:!0,href:!0});var Pe=ne(C);d=Z(Pe,"TD2"),Pe.forEach(a),V=v(we),D=g(we,"SPAN",{"data-svelte-h":!0}),b(D)!=="svelte-icpeey"&&(D.innerHTML=B),we.forEach(a),O=v(pe),E=g(pe,"LI",{});var Le=ne(E);z=g(Le,"A",{target:!0,href:!0});var Te=ne(z);I=Z(Te,"TD3"),Te.forEach(a),K=v(Le),A=g(Le,"SPAN",{"data-svelte-h":!0}),b(A)!=="svelte-r0lu5h"&&(A.innerHTML=k),Le.forEach(a),H=v(pe),U=g(pe,"LI",{});var qe=ne(U);te=g(qe,"A",{target:!0,href:!0});var Me=ne(te);re=Z(Me,"TD3 Bis (Optionnel)"),Me.forEach(a),X=v(qe),ae=g(qe,"SPAN",{"data-svelte-h":!0}),b(ae)!=="svelte-18ptfz9"&&(ae.innerHTML=y),qe.forEach(a),ee=v(pe),ue=g(pe,"LI",{});var Se=ne(ue);oe=g(Se,"A",{target:!0,href:!0});var je=ne(oe);fe=Z(je,"TD4"),je.forEach(a),$e=v(Se),xe=g(Se,"SPAN",{"data-svelte-h":!0}),b(xe)!=="svelte-66ci9c"&&(xe.innerHTML=_e),Se.forEach(a),Ce=v(pe),R=g(pe,"LI",{"data-svelte-h":!0}),b(R)!=="svelte-bz407p"&&(R.innerHTML=le),pe.forEach(a),this.h()},h(){L(n,"target","_blank"),L(n,"href",p=m[1]+"blob/main/TD/TD1.md"),L(C,"target","_blank"),L(C,"href",w=m[1]+"blob/main/TD/TD2.md"),L(z,"target","_blank"),L(z,"href",W=m[1]+"blob/main/TD/TD3.md"),L(te,"target","_blank"),L(te,"href",G=m[1]+"blob/main/TD/TD3Bis.md"),L(oe,"target","_blank"),L(oe,"href",ve=m[1]+"blob/main/TD/TDParc.md")},m(ce,pe){u(ce,e,pe),u(ce,l,pe),u(ce,t,pe),Q(t,f),Q(f,n),Q(n,s),Q(f,i),Q(f,$),Q(t,o),Q(t,c),Q(c,C),Q(C,d),Q(c,V),Q(c,D),Q(t,O),Q(t,E),Q(E,z),Q(z,I),Q(E,K),Q(E,A),Q(t,H),Q(t,U),Q(U,te),Q(te,re),Q(U,X),Q(U,ae),Q(t,ee),Q(t,ue),Q(ue,oe),Q(oe,fe),Q(ue,$e),Q(ue,xe),Q(t,Ce),Q(t,R)},p(ce,pe){pe&2&&p!==(p=ce[1]+"blob/main/TD/TD1.md")&&L(n,"href",p),pe&2&&w!==(w=ce[1]+"blob/main/TD/TD2.md")&&L(C,"href",w),pe&2&&W!==(W=ce[1]+"blob/main/TD/TD3.md")&&L(z,"href",W),pe&2&&G!==(G=ce[1]+"blob/main/TD/TD3Bis.md")&&L(te,"href",G),pe&2&&ve!==(ve=ce[1]+"blob/main/TD/TDParc.md")&&L(oe,"href",ve)},d(ce){ce&&(a(e),a(l),a(t))}}}function hn(m){let e,r="Configuration TP",l,t,f="Configurez votre poste",n,s;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("a"),t.textContent=f,n=_(),s=h("br"),this.h()},l(p){e=g(p,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-jepq66"&&(e.textContent=r),l=v(p),t=g(p,"A",{target:!0,href:!0,"data-svelte-h":!0}),b(t)!=="svelte-m3anz5"&&(t.textContent=f),n=v(p),s=g(p,"BR",{}),this.h()},h(){L(t,"target","_blank"),L(t,"href",_n)},m(p,i){u(p,e,i),u(p,l,i),u(p,t,i),u(p,n,i),u(p,s,i)},p:N,d(p){p&&(a(e),a(l),a(t),a(n),a(s))}}}function bn(m){let e,r="TP",l,t,f=`<li><a target="_blank" href="${Fe}">TP1</a> <span>/ <a target="_blank" href="https://classroom.github.com/a/3pWZu8yR">Clonez le dépot</a></span></li> <li><a target="_blank" href="${ye}">TP2</a> <span>/ <a target="_blank" href="https://classroom.github.com/a/y58GAhhp">Clonez le dépot</a></span></li> <li><a target="_blank" href="${Ge}">Projet</a> <span>/ <a target="_blank" href="https://classroom.github.com/a/mllsoaOR">Clonez le dépot</a></span></li>`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-5mz89q"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1ye3vx8"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function wn(m){let e,r,l,t,f,n,s,p;return e=new J({props:{$$slots:{default:[Cn]},$$scope:{ctx:m}}}),l=new J({props:{id:"TD",$$slots:{default:[gn]},$$scope:{ctx:m}}}),f=new J({props:{$$slots:{default:[hn]},$$scope:{ctx:m}}}),s=new J({props:{id:"TP",$$slots:{default:[bn]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),r=_(),j(l.$$.fragment),t=_(),j(f.$$.fragment),n=_(),j(s.$$.fragment)},l(i){M(e.$$.fragment,i),r=v(i),M(l.$$.fragment,i),t=v(i),M(f.$$.fragment,i),n=v(i),M(s.$$.fragment,i)},m(i,$){T(e,i,$),u(i,r,$),T(l,i,$),u(i,t,$),T(f,i,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&18&&(x.$$scope={dirty:$,ctx:i}),e.$set(x);const o={};$&18&&(o.$$scope={dirty:$,ctx:i}),l.$set(o);const c={};$&16&&(c.$$scope={dirty:$,ctx:i}),f.$set(c);const C={};$&16&&(C.$$scope={dirty:$,ctx:i}),s.$set(C)},i(i){p||(S(e.$$.fragment,i),S(l.$$.fragment,i),S(f.$$.fragment,i),S(s.$$.fragment,i),p=!0)},o(i){q(e.$$.fragment,i),q(l.$$.fragment,i),q(f.$$.fragment,i),q(s.$$.fragment,i),p=!1},d(i){i&&(a(r),a(t),a(n)),P(e,i),P(l,i),P(f,i),P(s,i)}}}function Ln(m){let e,r;return e=new J({props:{id:"exercices",$$slots:{default:[wn]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&18&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}function Hn(m,e,r){let l,t=N,f=()=>(t(),t=Qe(n,i=>r(1,l=i)),n);m.$$.on_destroy.push(()=>t());const n=Ye(localStorage.getItem("repoUrl")||null);f(),n.subscribe(i=>localStorage.repoUrl=i);const s=i=>n.set((i.currentTarget.value.trimEnd()+"/").replace("github.com","github.dev"));function p(){l=this.value,n.set(l)}return[n,l,s,p]}class Pn extends he{constructor(e){super(),be(this,e,Hn,Ln,ge,{repoUrl:0})}get repoUrl(){return this.$$.ctx[0]}}function qn(m){let e,r="Le langage Java";return{c(){e=h("h3"),e.textContent=r},l(l){e=g(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1iqgvdm"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function Sn(m){let e,r="Le langage Java",l,t,f=`<img class="object-contain h-64 w-full" src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg" alt="Java Logo"/> <p class="italic r-strech">Java est un langage de programmation polyvalent, orienté objet et largement utilisé dans le
			développement logiciel. Il a été conçu pour être portable, ce qui signifie qu&#39;il peut
			fonctionner sur différentes plateformes sans nécessiter de modifications importantes.</p>`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1iqgvdm"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1gfokvd"&&(t.innerHTML=f),this.h()},h(){L(t,"class","flex flex-col justify-center")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Tn(m){let e,r="Fonctionnement",l,t,f=`<p>L’indépendance par rapport à l’environnement d’exécution est garantie par la <em>machine virtuelle Java</em>
			(Java Virtual Machine ou <strong>JVM</strong>). En effet, Java est un langage compilé mais le
			compilateur ne produit pas de code natif pour la machine, il produit du
			<a class="reference external" href="https://fr.wikipedia.org/wiki/Bytecode_Java">bytecode</a> :
			un jeu d’instructions compréhensibles par la JVM qu’elle va traduire en code exécutable par la
			machine au moment de l’exécution.</p> <p>Pour qu’un programme Java fonctionne, il faut non seulement que les développeurs aient compilé
			le code source mais il faut également qu’un environnement d’exécution (comprenant la JVM) soit
			installé sur la machine cible.</p> <p>Il existe ainsi deux environnements Java qui peuvent être téléchargés et installés depuis le <a class="reference external" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">site d’Oracle</a> :</p> <dl class="simple"><dt>JRE - Java Runtime Environment</dt><dd><p>Cet environnement fournit uniquement les outils nécessaires à l’exécution de programmes
					Java. Il fournit entre autres la machine virtuelle Java.</p> </dd><dt>JDK - Java Development Kit</dt><dd><p>Cet environnement fournit tous les outils nécessaires à l’exécution mais aussi au
					développement de programmes Java. Il fournit entre autres la machine virtuelle Java et le
					compilateur.</p></dd></dl>`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-zf3p5z"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-13aqvf2"&&(t.innerHTML=f),this.h()},h(){L(t,"class","r-fit-text")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Mn(m){let e=`
					int i = 0;
					i = 4; // OK
					i = "bonjour"; // ERREUR : on tente d'affecter une chaîne de caractères`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function jn(m){let e,r="Le langage Java",l,t,f="Caractéristiques",n,s,p,i,$="S'inspire mais se débarrasse des complexités du C (pointeurs, allocation mémoire, etc.)",x,o,c="Orienté objet !",C,d,w="Gestion automatique de la mémoire",V,D,B,O,E,z,I="Bibliothèque de classes et de packages très riche (graphismes, encryption, etc.)",W,K,A="Polymorphisme et introspection",k;return O=new se({props:{$$slots:{default:[Mn]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("div"),p=h("ul"),i=h("li"),i.textContent=$,x=_(),o=h("li"),o.textContent=c,C=_(),d=h("li"),d.textContent=w,V=_(),D=h("li"),B=Y(`Typage statique fort (à la différence de Python, les variables doivent être déclarées avec
				leur type)
				`),j(O.$$.fragment),E=_(),z=h("li"),z.textContent=I,W=_(),K=h("li"),K.textContent=A,this.h()},l(H){e=g(H,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1iqgvdm"&&(e.textContent=r),l=v(H),t=g(H,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-18h9ipq"&&(t.textContent=f),n=v(H),s=g(H,"DIV",{class:!0});var U=ne(s);p=g(U,"UL",{class:!0});var te=ne(p);i=g(te,"LI",{"data-svelte-h":!0}),b(i)!=="svelte-1r1na5t"&&(i.textContent=$),x=v(te),o=g(te,"LI",{"data-svelte-h":!0}),b(o)!=="svelte-ytdrfv"&&(o.textContent=c),C=v(te),d=g(te,"LI",{"data-svelte-h":!0}),b(d)!=="svelte-jh2a8"&&(d.textContent=w),V=v(te),D=g(te,"LI",{});var re=ne(D);B=Z(re,`Typage statique fort (à la différence de Python, les variables doivent être déclarées avec
				leur type)
				`),M(O.$$.fragment,re),re.forEach(a),E=v(te),z=g(te,"LI",{"data-svelte-h":!0}),b(z)!=="svelte-16sf5lx"&&(z.textContent=I),W=v(te),K=g(te,"LI",{"data-svelte-h":!0}),b(K)!=="svelte-1d499ss"&&(K.textContent=A),te.forEach(a),U.forEach(a),this.h()},h(){L(p,"class","r-strech"),L(s,"class","flex flex-col justify-center")},m(H,U){u(H,e,U),u(H,l,U),u(H,t,U),u(H,n,U),u(H,s,U),Q(s,p),Q(p,i),Q(p,x),Q(p,o),Q(p,C),Q(p,d),Q(p,V),Q(p,D),Q(D,B),T(O,D,null),Q(p,E),Q(p,z),Q(p,W),Q(p,K),k=!0},p(H,U){const te={};U&1&&(te.$$scope={dirty:U,ctx:H}),O.$set(te)},i(H){k||(S(O.$$.fragment,H),k=!0)},o(H){q(O.$$.fragment,H),k=!1},d(H){H&&(a(e),a(l),a(t),a(n),a(s)),P(O)}}}function An(m){let e,r="Conventions",l,t,f=`<ul class="r-strech"><li>Les noms de classe commencent par une majuscule
				<ul><li><code>Visage, Objet</code></li></ul></li> <li>Les mots contenus dans un identificateur commencent par une minuscule
				<ul><li><code>uneClasse, uneMethode, uneVariable</code></li></ul></li> <li>Les constantes sont en majuscules
				<ul><li><code>UNE_CONSTANTE</code></li></ul></li></ul>`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-tghgi6"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1cc378f"&&(t.innerHTML=f),this.h()},h(){L(t,"class","flex flex-col justify-center")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function kn(m){let e,r="Types de données",l,t,f=`<ul class="r-strech"><li>Types primitifs
				<ul><li><code>byte, short, int, long, float, double, char, boolean</code></li></ul></li> <li>Objets (instances de classes)
				<ul><li><code>String, Integer, Float, Double, Boolean, Character, etc.</code></li></ul></li></ul>`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7p2708"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-kgkk9f"&&(t.innerHTML=f),this.h()},h(){L(t,"class","flex flex-col justify-center")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Dn(m){let e=`
				String str = new String() ;
				str = "ceci est une phrase" ;
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function En(m){let e=`
				String str = "ceci est une phrase" ;
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function zn(m){let e,r="Types de données",l,t,f="Le type String",n,s,p,i="Ce n'est pas un type primitif, c'est une classe (d'où la présence de la majuscule)",$,x,o,c,C,d,w="La chaîne de caractères se met entre guillemets",V,D,B,O,E="new",z,I,W;return c=new se({props:{$$slots:{default:[Dn]},$$scope:{ctx:m}}}),I=new se({props:{$$slots:{default:[En]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("ul"),p=h("li"),p.textContent=i,$=_(),x=h("li"),o=Y(`Comme c'est une classe, on utilise le mot-clé new pour créer un objet, on parle d'une
			instance de classe de type String
			`),j(c.$$.fragment),C=_(),d=h("li"),d.textContent=w,V=_(),D=h("li"),B=Y("Exceptionnellement, il est possible de déclarer une chaîne de caractères sans utiliser "),O=h("code"),O.textContent=E,z=_(),j(I.$$.fragment),this.h()},l(K){e=g(K,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7p2708"&&(e.textContent=r),l=v(K),t=g(K,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-8317wg"&&(t.textContent=f),n=v(K),s=g(K,"UL",{});var A=ne(s);p=g(A,"LI",{"data-svelte-h":!0}),b(p)!=="svelte-1q77k0k"&&(p.textContent=i),$=v(A),x=g(A,"LI",{});var k=ne(x);o=Z(k,`Comme c'est une classe, on utilise le mot-clé new pour créer un objet, on parle d'une
			instance de classe de type String
			`),M(c.$$.fragment,k),k.forEach(a),C=v(A),d=g(A,"LI",{"data-svelte-h":!0}),b(d)!=="svelte-1uwz9ag"&&(d.textContent=w),V=v(A),D=g(A,"LI",{});var H=ne(D);B=Z(H,"Exceptionnellement, il est possible de déclarer une chaîne de caractères sans utiliser "),O=g(H,"CODE",{class:!0,"data-svelte-h":!0}),b(O)!=="svelte-1ht496d"&&(O.textContent=E),z=v(H),M(I.$$.fragment,H),H.forEach(a),A.forEach(a),this.h()},h(){L(O,"class","text-purple-400")},m(K,A){u(K,e,A),u(K,l,A),u(K,t,A),u(K,n,A),u(K,s,A),Q(s,p),Q(s,$),Q(s,x),Q(x,o),T(c,x,null),Q(s,C),Q(s,d),Q(s,V),Q(s,D),Q(D,B),Q(D,O),Q(D,z),T(I,D,null),W=!0},p(K,A){const k={};A&1&&(k.$$scope={dirty:A,ctx:K}),c.$set(k);const H={};A&1&&(H.$$scope={dirty:A,ctx:K}),I.$set(H)},i(K){W||(S(c.$$.fragment,K),S(I.$$.fragment,K),W=!0)},o(K){q(c.$$.fragment,K),q(I.$$.fragment,K),W=!1},d(K){K&&(a(e),a(l),a(t),a(n),a(s)),P(c),P(I)}}}function In(m){let e=`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function On(m){let e,r="Syntaxe",l,t,f,n,s,p=`La syntaxe de Java est similaire à celle de C++, mais elle a moins de fonctionnalités basées
			sur les pointeurs. Java est un langage de programmation orienté objet, ce qui signifie que les
			programmes Java sont constitués de classes et d'objets.`,i;return f=new se({props:{id:"code",lines:"1-5",$$slots:{default:[In]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("div"),j(f.$$.fragment),n=_(),s=h("p"),s.textContent=p,this.h()},l($){e=g($,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=r),l=v($),t=g($,"DIV",{class:!0});var x=ne(t);M(f.$$.fragment,x),n=v(x),s=g(x,"P",{class:!0,"data-svelte-h":!0}),b(s)!=="svelte-nq5fh3"&&(s.textContent=p),x.forEach(a),this.h()},h(){L(s,"class","italic r-strech"),L(t,"class","flex flex-col justify-center")},m($,x){u($,e,x),u($,l,x),u($,t,x),T(f,t,null),Q(t,n),Q(t,s),i=!0},p($,x){const o={};x&1&&(o.$$scope={dirty:x,ctx:$}),f.$set(o)},i($){i||(S(f.$$.fragment,$),i=!0)},o($){q(f.$$.fragment,$),i=!1},d($){$&&(a(e),a(l),a(t)),P(f)}}}function Un(m){let e=`
public class Main {
    public static void main(String[] args) {
		String name = "John";
		String name2 = new String("John");
		int age = 30;
		float salary = 1000.0f;
		boolean isJavaFun = false;
		char grade = 'A';
		System.out.println("Hello World");
    }
}`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Vn(m){let e,r="Syntaxe",l,t,f="Les variables",n,s,p,i;return p=new se({props:{id:"code",lines:"3-7",$$slots:{default:[Un]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("div"),j(p.$$.fragment),this.h()},l($){e=g($,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=r),l=v($),t=g($,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-7x7xjx"&&(t.textContent=f),n=v($),s=g($,"DIV",{class:!0});var x=ne(s);M(p.$$.fragment,x),x.forEach(a),this.h()},h(){L(s,"class","flex flex-col justify-center")},m($,x){u($,e,x),u($,l,x),u($,t,x),u($,n,x),u($,s,x),T(p,s,null),i=!0},p($,x){const o={};x&1&&(o.$$scope={dirty:x,ctx:$}),p.$set(o)},i($){i||(S(p.$$.fragment,$),i=!0)},o($){q(p.$$.fragment,$),i=!1},d($){$&&(a(e),a(l),a(t),a(n),a(s)),P(p)}}}function Bn(m){let e=`
public class Main {
    public static void main(String[] args) {
        if (condition) {
            // code block
        } else {
            // code block
        }
        System.out.println("Hello World");
    }
}`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Jn(m){let e,r="Syntaxe",l,t,f="Les structures de contrôle",n,s,p="Condition",i,$,x,o;return x=new se({props:{id:"code",lines:"3-7",$$slots:{default:[Bn]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("h5"),s.textContent=p,i=_(),$=h("div"),j(x.$$.fragment),this.h()},l(c){e=g(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=r),l=v(c),t=g(c,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1ys0pg8"&&(t.textContent=f),n=v(c),s=g(c,"H5",{"data-svelte-h":!0}),b(s)!=="svelte-k67mux"&&(s.textContent=p),i=v(c),$=g(c,"DIV",{class:!0});var C=ne($);M(x.$$.fragment,C),C.forEach(a),this.h()},h(){L($,"class","flex flex-col justify-center")},m(c,C){u(c,e,C),u(c,l,C),u(c,t,C),u(c,n,C),u(c,s,C),u(c,i,C),u(c,$,C),T(x,$,null),o=!0},p(c,C){const d={};C&1&&(d.$$scope={dirty:C,ctx:c}),x.$set(d)},i(c){o||(S(x.$$.fragment,c),o=!0)},o(c){q(x.$$.fragment,c),o=!1},d(c){c&&(a(e),a(l),a(t),a(n),a(s),a(i),a($)),P(x)}}}function Nn(m){let e=`
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            // code block
        }
        System.out.println("Hello World");
    }
}`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Rn(m){let e,r="Syntaxe",l,t,f="Les structures de contrôle",n,s,p="Boucle",i,$,x,o;return x=new se({props:{id:"code",lines:"3-5",$$slots:{default:[Nn]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("h5"),s.textContent=p,i=_(),$=h("div"),j(x.$$.fragment),this.h()},l(c){e=g(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=r),l=v(c),t=g(c,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1ys0pg8"&&(t.textContent=f),n=v(c),s=g(c,"H5",{"data-svelte-h":!0}),b(s)!=="svelte-fyqcl4"&&(s.textContent=p),i=v(c),$=g(c,"DIV",{class:!0});var C=ne($);M(x.$$.fragment,C),C.forEach(a),this.h()},h(){L($,"class","flex flex-col justify-center")},m(c,C){u(c,e,C),u(c,l,C),u(c,t,C),u(c,n,C),u(c,s,C),u(c,i,C),u(c,$,C),T(x,$,null),o=!0},p(c,C){const d={};C&1&&(d.$$scope={dirty:C,ctx:c}),x.$set(d)},i(c){o||(S(x.$$.fragment,c),o=!0)},o(c){q(x.$$.fragment,c),o=!1},d(c){c&&(a(e),a(l),a(t),a(n),a(s),a(i),a($)),P(x)}}}function Fn(m){let e=`
public class Main {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
            // code block
            i++;
        }
        System.out.println("Hello World");
    }
}`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function yn(m){let e,r="Syntaxe",l,t,f="Les structures de contrôle",n,s,p="Boucle",i,$,x,o;return x=new se({props:{id:"code",lines:"3-7",$$slots:{default:[Fn]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("h5"),s.textContent=p,i=_(),$=h("div"),j(x.$$.fragment),this.h()},l(c){e=g(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=r),l=v(c),t=g(c,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1ys0pg8"&&(t.textContent=f),n=v(c),s=g(c,"H5",{"data-svelte-h":!0}),b(s)!=="svelte-fyqcl4"&&(s.textContent=p),i=v(c),$=g(c,"DIV",{class:!0});var C=ne($);M(x.$$.fragment,C),C.forEach(a),this.h()},h(){L($,"class","flex flex-col justify-center")},m(c,C){u(c,e,C),u(c,l,C),u(c,t,C),u(c,n,C),u(c,s,C),u(c,i,C),u(c,$,C),T(x,$,null),o=!0},p(c,C){const d={};C&1&&(d.$$scope={dirty:C,ctx:c}),x.$set(d)},i(c){o||(S(x.$$.fragment,c),o=!0)},o(c){q(x.$$.fragment,c),o=!1},d(c){c&&(a(e),a(l),a(t),a(n),a(s),a(i),a($)),P(x)}}}function Gn(m){let e=`
public class Main {
    public static void main(String[] args) {
        int i = 0;
        do {
            // code block
            i++;
        } while (i < 5);
        System.out.println("Hello World");
    }
}`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Qn(m){let e,r="Syntaxe",l,t,f="Les structures de contrôle",n,s,p="Boucle",i,$,x,o;return x=new se({props:{id:"code",lines:"3-7",$$slots:{default:[Gn]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("h5"),s.textContent=p,i=_(),$=h("div"),j(x.$$.fragment),this.h()},l(c){e=g(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=r),l=v(c),t=g(c,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1ys0pg8"&&(t.textContent=f),n=v(c),s=g(c,"H5",{"data-svelte-h":!0}),b(s)!=="svelte-fyqcl4"&&(s.textContent=p),i=v(c),$=g(c,"DIV",{class:!0});var C=ne($);M(x.$$.fragment,C),C.forEach(a),this.h()},h(){L($,"class","flex flex-col justify-center")},m(c,C){u(c,e,C),u(c,l,C),u(c,t,C),u(c,n,C),u(c,s,C),u(c,i,C),u(c,$,C),T(x,$,null),o=!0},p(c,C){const d={};C&1&&(d.$$scope={dirty:C,ctx:c}),x.$set(d)},i(c){o||(S(x.$$.fragment,c),o=!0)},o(c){q(x.$$.fragment,c),o=!1},d(c){c&&(a(e),a(l),a(t),a(n),a(s),a(i),a($)),P(x)}}}function Wn(m){let e=`
        public class Main {
            public static void main(String[] args) {
                int age = 30;
                switch (age) {
                    case <10:
                        // code block
                        break;
                    case <18:
                        // code block
                        break;
                    default:
                        // code block
                }
                System.out.println("Hello World");
            }
        }`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Kn(m){let e,r="Syntaxe",l,t,f="Les structures de contrôle",n,s,p="Les switch",i,$,x,o;return x=new se({props:{id:"code",lines:"3-13",$$slots:{default:[Wn]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("h5"),s.textContent=p,i=_(),$=h("div"),j(x.$$.fragment),this.h()},l(c){e=g(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=r),l=v(c),t=g(c,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1ys0pg8"&&(t.textContent=f),n=v(c),s=g(c,"H5",{"data-svelte-h":!0}),b(s)!=="svelte-1f33u0k"&&(s.textContent=p),i=v(c),$=g(c,"DIV",{class:!0});var C=ne($);M(x.$$.fragment,C),C.forEach(a),this.h()},h(){L($,"class","flex flex-col justify-center")},m(c,C){u(c,e,C),u(c,l,C),u(c,t,C),u(c,n,C),u(c,s,C),u(c,i,C),u(c,$,C),T(x,$,null),o=!0},p(c,C){const d={};C&1&&(d.$$scope={dirty:C,ctx:c}),x.$set(d)},i(c){o||(S(x.$$.fragment,c),o=!0)},o(c){q(x.$$.fragment,c),o=!1},d(c){c&&(a(e),a(l),a(t),a(n),a(s),a(i),a($)),P(x)}}}function Zn(m){let e=`
			public class Main {
				public static void main(String[] args) {
					try {
						int[] myNumbers = {1, 2, 3};
						System.out.println(myNumbers[10]);
					} catch (Exception e) {
						System.out.println("Something went wrong.");
					}
				}
			}
			`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Yn(m){let e,r="Syntaxe",l,t,f="Les exceptions",n,s,p,i;return p=new se({props:{id:"code",lines:"3-8",$$slots:{default:[Zn]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("div"),j(p.$$.fragment),this.h()},l($){e=g($,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=r),l=v($),t=g($,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-5w960"&&(t.textContent=f),n=v($),s=g($,"DIV",{class:!0});var x=ne(s);M(p.$$.fragment,x),x.forEach(a),this.h()},h(){L(s,"class","flex flex-col justify-center")},m($,x){u($,e,x),u($,l,x),u($,t,x),u($,n,x),u($,s,x),T(p,s,null),i=!0},p($,x){const o={};x&1&&(o.$$scope={dirty:x,ctx:$}),p.$set(o)},i($){i||(S(p.$$.fragment,$),i=!0)},o($){q(p.$$.fragment,$),i=!1},d($){$&&(a(e),a(l),a(t),a(n),a(s)),P(p)}}}function Xn(m){let e=`
import java.util.Random;
public class Main {
	public static void main(String [] args){
		Random r = new Random();
		int a;
		a = r.nextInt(100);
		System.out.println(a + "	" + r.nextInt(20));
	}
}
`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function es(m){let e,r='La génération de nombres "aléatoires"',l,t,f,n;return f=new se({props:{id:"code",lines:"4-6",$$slots:{default:[Xn]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("div"),j(f.$$.fragment),this.h()},l(s){e=g(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1wotoib"&&(e.textContent=r),l=v(s),t=g(s,"DIV",{class:!0});var p=ne(t);M(f.$$.fragment,p),p.forEach(a),this.h()},h(){L(t,"class","flex flex-col justify-center")},m(s,p){u(s,e,p),u(s,l,p),u(s,t,p),T(f,t,null),n=!0},p(s,p){const i={};p&1&&(i.$$scope={dirty:p,ctx:s}),f.$set(i)},i(s){n||(S(f.$$.fragment,s),n=!0)},o(s){q(f.$$.fragment,s),n=!1},d(s){s&&(a(e),a(l),a(t)),P(f)}}}function ts(m){let e=`
import java.util.Scanner ;
public class Main {
	public static void main(String[] args) {
		int i;
		System.out.println("Entrez un entier: ");
		Scanner clavier = new Scanner(System.in);
		i = clavier.nextInt();
		System.out.println("Vous avez entré : "+i);
	}
}
			`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ls(m){let e,r="Syntaxe",l,t,f="La lecture clavier",n,s,p,i,$,x=`<li><code class="inlineCode">nextInt()</code> : gets the next integer</li> <li><code class="inlineCode">nextBoolean()</code> : gets the next Boolean</li> <li><code class="inlineCode">nextDouble()</code> : gets the next double</li> <li><code class="inlineCode">nextFloat()</code> : gets the next float</li> <li><code class="inlineCode">nextShort()</code> : gets the next short</li> <li><code class="inlineCode">next()</code> : gets the next string (a line can have multiple strings
				separated by space)</li> <li><code class="inlineCode">nextLine()</code> : gets the next line</li>`,o;return p=new se({props:{id:"code",lines:"6-7",$$slots:{default:[ts]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("div"),j(p.$$.fragment),i=_(),$=h("ul"),$.innerHTML=x,this.h()},l(c){e=g(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=r),l=v(c),t=g(c,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1f59xtj"&&(t.textContent=f),n=v(c),s=g(c,"DIV",{class:!0});var C=ne(s);M(p.$$.fragment,C),i=v(C),$=g(C,"UL",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-yozt3p"&&($.innerHTML=x),C.forEach(a),this.h()},h(){L($,"class","text-2xl w-1/2"),L(s,"class","flex flex-row justify-center items-center")},m(c,C){u(c,e,C),u(c,l,C),u(c,t,C),u(c,n,C),u(c,s,C),T(p,s,null),Q(s,i),Q(s,$),o=!0},p(c,C){const d={};C&1&&(d.$$scope={dirty:C,ctx:c}),p.$set(d)},i(c){o||(S(p.$$.fragment,c),o=!0)},o(c){q(p.$$.fragment,c),o=!1},d(c){c&&(a(e),a(l),a(t),a(n),a(s)),P(p)}}}function ns(m){let e,r,l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E,z,I,W,K,A,k,H,U,te,re,G,X,ae;return e=new J({props:{$$slots:{default:[qn]},$$scope:{ctx:m}}}),l=new J({props:{$$slots:{default:[Sn]},$$scope:{ctx:m}}}),f=new J({props:{$$slots:{default:[Tn]},$$scope:{ctx:m}}}),s=new J({props:{$$slots:{default:[jn]},$$scope:{ctx:m}}}),i=new J({props:{$$slots:{default:[An]},$$scope:{ctx:m}}}),x=new J({props:{$$slots:{default:[kn]},$$scope:{ctx:m}}}),c=new J({props:{$$slots:{default:[zn]},$$scope:{ctx:m}}}),d=new J({props:{$$slots:{default:[On]},$$scope:{ctx:m}}}),V=new J({props:{$$slots:{default:[Vn]},$$scope:{ctx:m}}}),B=new J({props:{$$slots:{default:[Jn]},$$scope:{ctx:m}}}),E=new J({props:{$$slots:{default:[Rn]},$$scope:{ctx:m}}}),I=new J({props:{$$slots:{default:[yn]},$$scope:{ctx:m}}}),K=new J({props:{$$slots:{default:[Qn]},$$scope:{ctx:m}}}),k=new J({props:{$$slots:{default:[Kn]},$$scope:{ctx:m}}}),U=new J({props:{$$slots:{default:[Yn]},$$scope:{ctx:m}}}),re=new J({props:{$$slots:{default:[es]},$$scope:{ctx:m}}}),X=new J({props:{$$slots:{default:[ls]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),r=_(),j(l.$$.fragment),t=_(),j(f.$$.fragment),n=_(),j(s.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(x.$$.fragment),o=_(),j(c.$$.fragment),C=_(),j(d.$$.fragment),w=_(),j(V.$$.fragment),D=_(),j(B.$$.fragment),O=_(),j(E.$$.fragment),z=_(),j(I.$$.fragment),W=_(),j(K.$$.fragment),A=_(),j(k.$$.fragment),H=_(),j(U.$$.fragment),te=_(),j(re.$$.fragment),G=_(),j(X.$$.fragment)},l(y){M(e.$$.fragment,y),r=v(y),M(l.$$.fragment,y),t=v(y),M(f.$$.fragment,y),n=v(y),M(s.$$.fragment,y),p=v(y),M(i.$$.fragment,y),$=v(y),M(x.$$.fragment,y),o=v(y),M(c.$$.fragment,y),C=v(y),M(d.$$.fragment,y),w=v(y),M(V.$$.fragment,y),D=v(y),M(B.$$.fragment,y),O=v(y),M(E.$$.fragment,y),z=v(y),M(I.$$.fragment,y),W=v(y),M(K.$$.fragment,y),A=v(y),M(k.$$.fragment,y),H=v(y),M(U.$$.fragment,y),te=v(y),M(re.$$.fragment,y),G=v(y),M(X.$$.fragment,y)},m(y,ee){T(e,y,ee),u(y,r,ee),T(l,y,ee),u(y,t,ee),T(f,y,ee),u(y,n,ee),T(s,y,ee),u(y,p,ee),T(i,y,ee),u(y,$,ee),T(x,y,ee),u(y,o,ee),T(c,y,ee),u(y,C,ee),T(d,y,ee),u(y,w,ee),T(V,y,ee),u(y,D,ee),T(B,y,ee),u(y,O,ee),T(E,y,ee),u(y,z,ee),T(I,y,ee),u(y,W,ee),T(K,y,ee),u(y,A,ee),T(k,y,ee),u(y,H,ee),T(U,y,ee),u(y,te,ee),T(re,y,ee),u(y,G,ee),T(X,y,ee),ae=!0},p(y,[ee]){const ue={};ee&1&&(ue.$$scope={dirty:ee,ctx:y}),e.$set(ue);const oe={};ee&1&&(oe.$$scope={dirty:ee,ctx:y}),l.$set(oe);const fe={};ee&1&&(fe.$$scope={dirty:ee,ctx:y}),f.$set(fe);const ve={};ee&1&&(ve.$$scope={dirty:ee,ctx:y}),s.$set(ve);const $e={};ee&1&&($e.$$scope={dirty:ee,ctx:y}),i.$set($e);const xe={};ee&1&&(xe.$$scope={dirty:ee,ctx:y}),x.$set(xe);const _e={};ee&1&&(_e.$$scope={dirty:ee,ctx:y}),c.$set(_e);const Ce={};ee&1&&(Ce.$$scope={dirty:ee,ctx:y}),d.$set(Ce);const R={};ee&1&&(R.$$scope={dirty:ee,ctx:y}),V.$set(R);const le={};ee&1&&(le.$$scope={dirty:ee,ctx:y}),B.$set(le);const ce={};ee&1&&(ce.$$scope={dirty:ee,ctx:y}),E.$set(ce);const pe={};ee&1&&(pe.$$scope={dirty:ee,ctx:y}),I.$set(pe);const F={};ee&1&&(F.$$scope={dirty:ee,ctx:y}),K.$set(F);const ie={};ee&1&&(ie.$$scope={dirty:ee,ctx:y}),k.$set(ie);const we={};ee&1&&(we.$$scope={dirty:ee,ctx:y}),U.$set(we);const Pe={};ee&1&&(Pe.$$scope={dirty:ee,ctx:y}),re.$set(Pe);const Le={};ee&1&&(Le.$$scope={dirty:ee,ctx:y}),X.$set(Le)},i(y){ae||(S(e.$$.fragment,y),S(l.$$.fragment,y),S(f.$$.fragment,y),S(s.$$.fragment,y),S(i.$$.fragment,y),S(x.$$.fragment,y),S(c.$$.fragment,y),S(d.$$.fragment,y),S(V.$$.fragment,y),S(B.$$.fragment,y),S(E.$$.fragment,y),S(I.$$.fragment,y),S(K.$$.fragment,y),S(k.$$.fragment,y),S(U.$$.fragment,y),S(re.$$.fragment,y),S(X.$$.fragment,y),ae=!0)},o(y){q(e.$$.fragment,y),q(l.$$.fragment,y),q(f.$$.fragment,y),q(s.$$.fragment,y),q(i.$$.fragment,y),q(x.$$.fragment,y),q(c.$$.fragment,y),q(d.$$.fragment,y),q(V.$$.fragment,y),q(B.$$.fragment,y),q(E.$$.fragment,y),q(I.$$.fragment,y),q(K.$$.fragment,y),q(k.$$.fragment,y),q(U.$$.fragment,y),q(re.$$.fragment,y),q(X.$$.fragment,y),ae=!1},d(y){y&&(a(r),a(t),a(n),a(p),a($),a(o),a(C),a(w),a(D),a(O),a(z),a(W),a(A),a(H),a(te),a(G)),P(e,y),P(l,y),P(f,y),P(s,y),P(i,y),P(x,y),P(c,y),P(d,y),P(V,y),P(B,y),P(E,y),P(I,y),P(K,y),P(k,y),P(U,y),P(re,y),P(X,y)}}}class ss extends he{constructor(e){super(),be(this,e,null,ns,ge,{})}}function is(m){let e,r=`Le polymorphisme est un concept clé de la programmation orientée objet qui permet à des objets de différents types de\r
			être traités comme des objets du même type.`,l,t,f="Il permet d'utiliser une interface commune pour manipuler des objets de classes différentes.";return{c(){e=h("p"),e.textContent=r,l=_(),t=h("p"),t.textContent=f},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-11q2ge8"&&(e.textContent=r),l=v(n),t=g(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1pdh2kw"&&(t.textContent=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function rs(m){let e=`
    class MathUtils {
        int additionner(int a, int b) {
            return a + b;
        }

        double additionner(double a, double b) {
            return a + b;
        }
    }
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function as(m){let e,r="Polymorphisme à la compilation",l,t,f="Le polymorphisme à la compilation, ou polymorphisme statique, est réalisé par la surcharge de méthodes.",n,s,p,i,$="Dans cet exemple, la méthode <code>additionner</code> est surchargée pour accepter différents types de paramètres.",x;return s=new se({props:{$$slots:{default:[rs]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment),p=_(),i=h("p"),i.innerHTML=$},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-plirla"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1uiqfmv"&&(t.textContent=f),n=v(o),M(s.$$.fragment,o),p=v(o),i=g(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-k07nbj"&&(i.innerHTML=$)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),T(s,o,c),u(o,p,c),u(o,i,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),s.$set(C)},i(o){x||(S(s.$$.fragment,o),x=!0)},o(o){q(s.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(n),a(p),a(i)),P(s,o)}}}function us(m){let e=`
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
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function os(m){let e,r="Polymorphisme à l'exécution",l,t,f="Le polymorphisme à l'exécution, ou polymorphisme dynamique, est réalisé par la redéfinition de méthodes.",n,s,p,i,$="Dans cet exemple, les classes <code>Chien</code> et <code>Chat</code> redéfinissent la méthode <code>faireDuBruit</code> de la classe <code>Animal</code>.",x;return s=new se({props:{$$slots:{default:[us]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment),p=_(),i=h("p"),i.innerHTML=$,this.h()},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18elcun"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-4x0xhv"&&(t.textContent=f),n=v(o),M(s.$$.fragment,o),p=v(o),i=g(o,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-8ipo21"&&(i.innerHTML=$),this.h()},h(){L(i,"class","smaller")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),T(s,o,c),u(o,p,c),u(o,i,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),s.$set(C)},i(o){x||(S(s.$$.fragment,o),x=!0)},o(o){q(s.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(n),a(p),a(i)),P(s,o)}}}function $s(m){let e=`
    Animal monAnimal = new Chien();
    monAnimal.faireDuBruit(); // Le chien aboie

    monAnimal = new Chat();
    monAnimal.faireDuBruit(); // Le chat miaule
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function fs(m){let e,r="Utilisation du polymorphisme",l,t,f="Le polymorphisme permet de traiter des objets de différentes classes de manière uniforme.",n,s,p,i,$="Dans cet exemple, la variable <code>monAnimal</code> peut référencer des objets de type <code>Chien</code> ou <code>Chat</code> et appeler la méthode <code>faireDuBruit</code>.",x;return s=new se({props:{$$slots:{default:[$s]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment),p=_(),i=h("p"),i.innerHTML=$},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1pudvuy"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-w2fuv6"&&(t.textContent=f),n=v(o),M(s.$$.fragment,o),p=v(o),i=g(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-wqomej"&&(i.innerHTML=$)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),T(s,o,c),u(o,p,c),u(o,i,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),s.$set(C)},i(o){x||(S(s.$$.fragment,o),x=!0)},o(o){q(s.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(n),a(p),a(i)),P(s,o)}}}function cs(m){let e,r="Avantages du polymorphisme",l,t,f="<li>Facilite la maintenance et l&#39;évolution du code.</li> <li>Permet de créer des systèmes plus flexibles et extensibles.</li> <li>Encourage l&#39;utilisation d&#39;interfaces et de classes abstraites.</li>";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-cqy8ul"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-xqpuls"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function ps(m){let e=`
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
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ms(m){let e,r="Exemple pratique",l,t,f="Imaginons une application de gestion de formes géométriques. Chaque forme doit pouvoir calculer sa surface.",n,s,p;return s=new se({props:{$$slots:{default:[ps]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-fryfx"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1rk0t8n"&&(t.textContent=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function ds(m){let e=`
    Forme maForme = new Cercle(5);
    System.out.println(maForme.calculerSurface()); // Affiche la surface du cercle

    maForme = new Rectangle(4, 6);
    System.out.println(maForme.calculerSurface()); // Affiche la surface du rectangle
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function vs(m){let e,r="On peut maintenant utiliser le polymorphisme pour calculer la surface de différentes formes sans se soucier de leur type spécifique.",l,t,f;return t=new se({props:{$$slots:{default:[ds]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-og5e84"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function _s(m){let e,r="Utiliser le type le plus générique possible",l,t,f=`Lorsque vous codez des méthodes "polymorphiques", il est recommandé d'utiliser le type le plus générique possible. Cela permet de réutiliser le code plus facilement et de rendre le système plus flexible.`,n,s,p="Par exemple, si une méthode fonctionne pour un <code>Oiseau</code>, il est pertinent de se demander si elle pourrait s&#39;appliquer à tout <code>Animal</code> ou à une de ses interfaces.";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.innerHTML=p},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1gonlod"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-4msycu"&&(t.textContent=f),n=v(i),s=g(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-17qf5k6"&&(s.innerHTML=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function xs(m){let e,r="Polymorphisme",l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B;return t=new J({props:{$$slots:{default:[is]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[as]},$$scope:{ctx:m}}}),p=new J({props:{$$slots:{default:[os]},$$scope:{ctx:m}}}),$=new J({props:{$$slots:{default:[fs]},$$scope:{ctx:m}}}),o=new J({props:{$$slots:{default:[cs]},$$scope:{ctx:m}}}),C=new J({props:{className:"smaller",$$slots:{default:[ms]},$$scope:{ctx:m}}}),w=new J({props:{$$slots:{default:[vs]},$$scope:{ctx:m}}}),D=new J({props:{$$slots:{default:[_s]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment),s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),x=_(),j(o.$$.fragment),c=_(),j(C.$$.fragment),d=_(),j(w.$$.fragment),V=_(),j(D.$$.fragment)},l(O){e=g(O,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18uzcw"&&(e.textContent=r),l=v(O),M(t.$$.fragment,O),f=v(O),M(n.$$.fragment,O),s=v(O),M(p.$$.fragment,O),i=v(O),M($.$$.fragment,O),x=v(O),M(o.$$.fragment,O),c=v(O),M(C.$$.fragment,O),d=v(O),M(w.$$.fragment,O),V=v(O),M(D.$$.fragment,O)},m(O,E){u(O,e,E),u(O,l,E),T(t,O,E),u(O,f,E),T(n,O,E),u(O,s,E),T(p,O,E),u(O,i,E),T($,O,E),u(O,x,E),T(o,O,E),u(O,c,E),T(C,O,E),u(O,d,E),T(w,O,E),u(O,V,E),T(D,O,E),B=!0},p(O,E){const z={};E&1&&(z.$$scope={dirty:E,ctx:O}),t.$set(z);const I={};E&1&&(I.$$scope={dirty:E,ctx:O}),n.$set(I);const W={};E&1&&(W.$$scope={dirty:E,ctx:O}),p.$set(W);const K={};E&1&&(K.$$scope={dirty:E,ctx:O}),$.$set(K);const A={};E&1&&(A.$$scope={dirty:E,ctx:O}),o.$set(A);const k={};E&1&&(k.$$scope={dirty:E,ctx:O}),C.$set(k);const H={};E&1&&(H.$$scope={dirty:E,ctx:O}),w.$set(H);const U={};E&1&&(U.$$scope={dirty:E,ctx:O}),D.$set(U)},i(O){B||(S(t.$$.fragment,O),S(n.$$.fragment,O),S(p.$$.fragment,O),S($.$$.fragment,O),S(o.$$.fragment,O),S(C.$$.fragment,O),S(w.$$.fragment,O),S(D.$$.fragment,O),B=!0)},o(O){q(t.$$.fragment,O),q(n.$$.fragment,O),q(p.$$.fragment,O),q($.$$.fragment,O),q(o.$$.fragment,O),q(C.$$.fragment,O),q(w.$$.fragment,O),q(D.$$.fragment,O),B=!1},d(O){O&&(a(e),a(l),a(f),a(s),a(i),a(x),a(c),a(d),a(V)),P(t,O),P(n,O),P(p,O),P($,O),P(o,O),P(C,O),P(w,O),P(D,O)}}}function Cs(m){let e,r;return e=new J({props:{$$slots:{default:[xs]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class gs extends he{constructor(e){super(),be(this,e,null,Cs,ge,{})}}function hs(m){let e,r=`Les membres statiques appartiennent à la classe plutôt qu'à une instance spécifique de la\r
			classe.`,l,t,f="Ils sont partagés par toutes les instances de la classe.",n,s,p="Cela signifie que vous pouvez accéder à un membre statique sans créer d'instance de la classe.";return{c(){e=h("p"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.textContent=p},l(i){e=g(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1630q1j"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1eojfzb"&&(t.textContent=f),n=v(i),s=g(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-5aucu0"&&(s.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function bs(m){let e=`
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
			`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ws(m){let e=`
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
			`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ls(m){let e,r="Attributs statiques",l,t,f,n,s,p,i,$=`Notez qu&#39;il n&#39;est pas nécessaire de créer une instance de la classe <code>Compteur</code> pour accéder à l&#39;attribut statique <code>count</code>.
			En outre <code>count</code> est partagé entre toutes les instances de la classe <code>Compteur</code>.`,x;return f=new se({props:{class:"language-java",$$slots:{default:[bs]},$$scope:{ctx:m}}}),s=new se({props:{$$slots:{default:[ws]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("div"),j(f.$$.fragment),n=_(),j(s.$$.fragment),p=_(),i=h("p"),i.innerHTML=$,this.h()},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-toavhx"&&(e.textContent=r),l=v(o),t=g(o,"DIV",{class:!0});var c=ne(t);M(f.$$.fragment,c),n=v(c),M(s.$$.fragment,c),c.forEach(a),p=v(o),i=g(o,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-ub3qaw"&&(i.innerHTML=$),this.h()},h(){L(t,"class","flex flex-row "),L(i,"class","smaller")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),T(f,t,null),Q(t,n),T(s,t,null),u(o,p,c),u(o,i,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),f.$set(C);const d={};c&1&&(d.$$scope={dirty:c,ctx:o}),s.$set(d)},i(o){x||(S(f.$$.fragment,o),S(s.$$.fragment,o),x=!0)},o(o){q(f.$$.fragment,o),q(s.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(p),a(i)),P(f),P(s)}}}function Hs(m){let e=`
	class MathUtils {
		static int additionner(int a, int b) {
			return a + b;
		}
	}
	
	int result = MathUtils.additionner(3, 4);
	`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ps(m){let e,r="Méthodes statiques",l,t,f,n,s=`La méthode <code>additionner</code> peut être appelée sans créer une instance de la classe
			<code>MathUtils</code>.`,p,i,$="Remarquez que vous utilisez <code>System.out.println()</code> sans créer d&#39;instance de la classe, il s&#39;agit 		d&#39;une méthode statique.",x;return t=new se({props:{$$slots:{default:[Hs]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),n=h("p"),n.innerHTML=s,p=_(),i=h("p"),i.innerHTML=$},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-n0ip6m"&&(e.textContent=r),l=v(o),M(t.$$.fragment,o),f=v(o),n=g(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1ww0p7q"&&(n.innerHTML=s),p=v(o),i=g(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-17rashm"&&(i.innerHTML=$)},m(o,c){u(o,e,c),u(o,l,c),T(t,o,c),u(o,f,c),u(o,n,c),u(o,p,c),u(o,i,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),t.$set(C)},i(o){x||(S(t.$$.fragment,o),x=!0)},o(o){q(t.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(f),a(n),a(p),a(i)),P(t,o)}}}function qs(m){let e=`
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
			`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ss(m){let e,r="Limitation des méthodes statiques",l,t,f,n,s=`Une méthode statique ne peut pas accéder directement aux attributs ou méthodes non statiques de la classe. \r
			Cela est dû au fait que les méthodes statiques n'ont pas de référence à une instance spécifique de la classe.`,p;return t=new se({props:{$$slots:{default:[qs]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),n=h("p"),n.textContent=s},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-mxao6o"&&(e.textContent=r),l=v(i),M(t.$$.fragment,i),f=v(i),n=g(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-38klnp"&&(n.textContent=s)},m(i,$){u(i,e,$),u(i,l,$),T(t,i,$),u(i,f,$),u(i,n,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),t.$set(x)},i(i){p||(S(t.$$.fragment,i),p=!0)},o(i){q(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(f),a(n)),P(t,i)}}}function Ts(m){let e,r="Avantages des membres et méthodes statiques",l,t,f="<li>Partage des ressources : Les membres statiques sont partagés par toutes les instances de la classe, ce qui permet de partager des données ou des états communs.</li> <li>Accès sans instance : Les méthodes et attributs statiques peuvent être utilisés sans créer d&#39;instance de la classe, ce qui simplifie l&#39;accès aux utilitaires et aux constantes.</li> <li>Performance : L&#39;accès aux membres statiques peut être plus rapide car il n&#39;y a pas besoin de créer et de gérer des instances d&#39;objets.</li> <li>Organisation du code : Les méthodes statiques peuvent regrouper des fonctions utilitaires ou des opérations liées à la classe, améliorant ainsi la lisibilité et la maintenance du code.</li>";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-12gnc3a"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1v701z"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Ms(m){let e,r="Les membres statiques",l,t,f,n,s,p,i,$,x,o,c;return t=new J({props:{$$slots:{default:[hs]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[Ls]},$$scope:{ctx:m}}}),p=new J({props:{$$slots:{default:[Ps]},$$scope:{ctx:m}}}),$=new J({props:{$$slots:{default:[Ss]},$$scope:{ctx:m}}}),o=new J({props:{$$slots:{default:[Ts]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment),s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),x=_(),j(o.$$.fragment)},l(C){e=g(C,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11qpvto"&&(e.textContent=r),l=v(C),M(t.$$.fragment,C),f=v(C),M(n.$$.fragment,C),s=v(C),M(p.$$.fragment,C),i=v(C),M($.$$.fragment,C),x=v(C),M(o.$$.fragment,C)},m(C,d){u(C,e,d),u(C,l,d),T(t,C,d),u(C,f,d),T(n,C,d),u(C,s,d),T(p,C,d),u(C,i,d),T($,C,d),u(C,x,d),T(o,C,d),c=!0},p(C,d){const w={};d&1&&(w.$$scope={dirty:d,ctx:C}),t.$set(w);const V={};d&1&&(V.$$scope={dirty:d,ctx:C}),n.$set(V);const D={};d&1&&(D.$$scope={dirty:d,ctx:C}),p.$set(D);const B={};d&1&&(B.$$scope={dirty:d,ctx:C}),$.$set(B);const O={};d&1&&(O.$$scope={dirty:d,ctx:C}),o.$set(O)},i(C){c||(S(t.$$.fragment,C),S(n.$$.fragment,C),S(p.$$.fragment,C),S($.$$.fragment,C),S(o.$$.fragment,C),c=!0)},o(C){q(t.$$.fragment,C),q(n.$$.fragment,C),q(p.$$.fragment,C),q($.$$.fragment,C),q(o.$$.fragment,C),c=!1},d(C){C&&(a(e),a(l),a(f),a(s),a(i),a(x)),P(t,C),P(n,C),P(p,C),P($,C),P(o,C)}}}function js(m){let e,r;return e=new J({props:{$$slots:{default:[Ms]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class As extends he{constructor(e){super(),be(this,e,null,js,ge,{})}}function ks(m){let e,r=`La généricité permet de créer des classes, des interfaces et des méthodes avec des types\r
			paramétrés.`,l,t,f="Cela permet de réutiliser du code avec différents types sans le dupliquer.";return{c(){e=h("p"),e.textContent=r,l=_(),t=h("p"),t.textContent=f},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-y92tkb"&&(e.textContent=r),l=v(n),t=g(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-xc0rvs"&&(t.textContent=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Ds(m){let e=`
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
	`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Es(m){let e,r="Classes génériques",l,t,f;return t=new se({props:{$$slots:{default:[Ds]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uwteju"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function zs(m){let e=`
	class Util {
		public static <T> void afficher(T element) {
			if (element instanceof String) {
				System.out.println(""" + element + """);
			} else if (element instanceof Double || element instanceof Float) {
				System.out.printf("%.2f%n", element);
			} else {
				System.out.println(element);
			}
		}
	}

	Util.afficher("Hello"); // Affiche "Hello"
	Util.afficher(123.5); // Affiche 123.50
	`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Is(m){let e,r="Méthodes génériques",l,t,f;return t=new se({props:{$$slots:{default:[zs]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ippuop"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function Os(m){let e=`
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
	`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Us(m){let e,r="Interfaces génériques",l,t,f;return t=new se({props:{$$slots:{default:[Os]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1vh4c50"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function Vs(m){let e=`
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
		`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Bs(m){let e,r="Contrôle de type sur les types génériques",l,t,f,n,s=`Le contrôle de type permet de s'assurer que les types utilisés avec les classes et méthodes\r
			génériques sont compatibles, évitant ainsi les erreurs de type à l'exécution.`,p;return t=new se({props:{$$slots:{default:[Vs]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),n=h("p"),n.textContent=s,this.h()},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-n7u5h7"&&(e.textContent=r),l=v(i),M(t.$$.fragment,i),f=v(i),n=g(i,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-gp9ffm"&&(n.textContent=s),this.h()},h(){L(n,"class","smaller")},m(i,$){u(i,e,$),u(i,l,$),T(t,i,$),u(i,f,$),u(i,n,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),t.$set(x)},i(i){p||(S(t.$$.fragment,i),p=!0)},o(i){q(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(f),a(n)),P(t,i)}}}function Js(m){let e=`
    abstract class Animal 
    abstract class Oiseau extends Animal
    class Chien extends Animal
    class Colibri extends Oiseau
    class CageOiseau<T extends Oiseau>{
        T contenu
        void setContenu(T contenu)
    }
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ns(m){let e=`
    public class CageOiseau<T extends Oiseau> {}

    CageOiseau<Oiseau> cageOiseau = new CageOiseau<>();
    cageOiseau.setContenu(new Oiseau());
    cageOiseau.setContenu(new Colibri());
    CageOiseau<Chien> cageChien = new CageOiseau<>(); // Erreur de compilation
    cageChien.setContenu(new Chien()); // Erreur de compilation
    `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Rs(m){let e,r="Restriction des types génériques",l,t,f='Il est possible de "filtrer" les types génériques en utilisant des contraintes.',n,s,p,i,$,x;return p=new He({props:{$$slots:{default:[Js]},$$scope:{ctx:m}}}),$=new se({props:{$$slots:{default:[Ns]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("div"),j(p.$$.fragment),i=_(),j($.$$.fragment)},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7kmo2z"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-h5rwf4"&&(t.textContent=f),n=v(o),s=g(o,"DIV",{});var c=ne(s);M(p.$$.fragment,c),i=v(c),M($.$$.fragment,c),c.forEach(a)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),T(p,s,null),Q(s,i),T($,s,null),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),p.$set(C);const d={};c&1&&(d.$$scope={dirty:c,ctx:o}),$.$set(d)},i(o){x||(S(p.$$.fragment,o),S($.$$.fragment,o),x=!0)},o(o){q(p.$$.fragment,o),q($.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(n),a(s)),P(p),P($)}}}function Fs(m){let e=`
        class Cage<T extends IVolant & Animal>
        class Oiseau extends Animal implements IVolant
        class Avion extends Vehicule implements IVolant 
        Cage --down[hidden]> IVolant
        
`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ys(m){let e=`
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
            
        
                
        `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Gs(m){let e,r="Restriction des types génériques",l,t,f,n,s,p;return f=new He({props:{$$slots:{default:[Fs]},$$scope:{ctx:m}}}),s=new se({props:{$$slots:{default:[ys]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("div"),j(f.$$.fragment),n=_(),j(s.$$.fragment),this.h()},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7kmo2z"&&(e.textContent=r),l=v(i),t=g(i,"DIV",{class:!0});var $=ne(t);M(f.$$.fragment,$),n=v($),M(s.$$.fragment,$),$.forEach(a),this.h()},h(){L(t,"class","flex items-start")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),T(f,t,null),Q(t,n),T(s,t,null),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),f.$set(x);const o={};$&1&&(o.$$scope={dirty:$,ctx:i}),s.$set(o)},i(i){p||(S(f.$$.fragment,i),S(s.$$.fragment,i),p=!0)},o(i){q(f.$$.fragment,i),q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t)),P(f),P(s)}}}function Qs(m){let e=`
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
        `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ws(m){let e,r="Classes génériques avec plusieurs types",l,t,f;return t=new se({props:{$$slots:{default:[Qs]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1j91j4"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function Ks(m){let e=`
        class Util {
            public static <T, U> void afficherDeux(T premier, U second) {
                System.out.println("Premier: " + premier);
                System.out.println("Second: " + second);
            }
        }

        Util.afficherDeux("Hello", 123);    // Affiche "Premier: Hello" et "Second: 123"
        Util.afficherDeux(3.14, true);      // Affiche "Premier: 3.14" et "Second: true"
        `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Zs(m){let e,r="Méthodes génériques avec plusieurs types",l,t,f;return t=new se({props:{$$slots:{default:[Ks]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1btbcib"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function Ys(m){let e,r="Généricité",l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E;return t=new J({props:{$$slots:{default:[ks]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[Es]},$$scope:{ctx:m}}}),p=new J({props:{$$slots:{default:[Is]},$$scope:{ctx:m}}}),$=new J({props:{$$slots:{default:[Us]},$$scope:{ctx:m}}}),o=new J({props:{$$slots:{default:[Bs]},$$scope:{ctx:m}}}),C=new J({props:{$$slots:{default:[Rs]},$$scope:{ctx:m}}}),w=new J({props:{$$slots:{default:[Gs]},$$scope:{ctx:m}}}),D=new J({props:{$$slots:{default:[Ws]},$$scope:{ctx:m}}}),O=new J({props:{$$slots:{default:[Zs]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment),s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),x=_(),j(o.$$.fragment),c=_(),j(C.$$.fragment),d=_(),j(w.$$.fragment),V=_(),j(D.$$.fragment),B=_(),j(O.$$.fragment)},l(z){e=g(z,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1konbvn"&&(e.textContent=r),l=v(z),M(t.$$.fragment,z),f=v(z),M(n.$$.fragment,z),s=v(z),M(p.$$.fragment,z),i=v(z),M($.$$.fragment,z),x=v(z),M(o.$$.fragment,z),c=v(z),M(C.$$.fragment,z),d=v(z),M(w.$$.fragment,z),V=v(z),M(D.$$.fragment,z),B=v(z),M(O.$$.fragment,z)},m(z,I){u(z,e,I),u(z,l,I),T(t,z,I),u(z,f,I),T(n,z,I),u(z,s,I),T(p,z,I),u(z,i,I),T($,z,I),u(z,x,I),T(o,z,I),u(z,c,I),T(C,z,I),u(z,d,I),T(w,z,I),u(z,V,I),T(D,z,I),u(z,B,I),T(O,z,I),E=!0},p(z,I){const W={};I&1&&(W.$$scope={dirty:I,ctx:z}),t.$set(W);const K={};I&1&&(K.$$scope={dirty:I,ctx:z}),n.$set(K);const A={};I&1&&(A.$$scope={dirty:I,ctx:z}),p.$set(A);const k={};I&1&&(k.$$scope={dirty:I,ctx:z}),$.$set(k);const H={};I&1&&(H.$$scope={dirty:I,ctx:z}),o.$set(H);const U={};I&1&&(U.$$scope={dirty:I,ctx:z}),C.$set(U);const te={};I&1&&(te.$$scope={dirty:I,ctx:z}),w.$set(te);const re={};I&1&&(re.$$scope={dirty:I,ctx:z}),D.$set(re);const G={};I&1&&(G.$$scope={dirty:I,ctx:z}),O.$set(G)},i(z){E||(S(t.$$.fragment,z),S(n.$$.fragment,z),S(p.$$.fragment,z),S($.$$.fragment,z),S(o.$$.fragment,z),S(C.$$.fragment,z),S(w.$$.fragment,z),S(D.$$.fragment,z),S(O.$$.fragment,z),E=!0)},o(z){q(t.$$.fragment,z),q(n.$$.fragment,z),q(p.$$.fragment,z),q($.$$.fragment,z),q(o.$$.fragment,z),q(C.$$.fragment,z),q(w.$$.fragment,z),q(D.$$.fragment,z),q(O.$$.fragment,z),E=!1},d(z){z&&(a(e),a(l),a(f),a(s),a(i),a(x),a(c),a(d),a(V),a(B)),P(t,z),P(n,z),P(p,z),P($,z),P(o,z),P(C,z),P(w,z),P(D,z),P(O,z)}}}function Xs(m){let e,r;return e=new J({props:{$$slots:{default:[Ys]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class ei extends he{constructor(e){super(),be(this,e,null,Xs,ge,{})}}function ti(m){let e,r="Présentation",l,t,f=`Les lambdas sont des fonctions anonymes qui permettent de simplifier le code en évitant de
			créer des classes ou des méthodes supplémentaires. Pensez à elles comme à des raccourcis pour
			écrire des fonctions.`,n,s,p=`Elles sont souvent utilisées pour implémenter des interfaces fonctionnelles, c'est-à-dire des
			interfaces qui ne contiennent qu'une seule méthode abstraite.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.textContent=p},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-14nafu8"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1qr4dtq"&&(t.textContent=f),n=v(i),s=g(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1lytgjw"&&(s.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function li(m){let e=`
            (paramètres) -> expression
            (paramètres) -> { instructions }
            `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ni(m){let e=`
            (int a, int b) -> a + b
            () -> System.out.println("Hello, world!")
            (String s) -> { System.out.println(s); }
            `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function si(m){let e,r="Syntaxe des lambdas",l,t,f="La syntaxe des lambdas en Java est la suivante :",n,s,p,i,$="Exemple :",x,o,c;return s=new se({props:{$$slots:{default:[li]},$$scope:{ctx:m}}}),o=new se({props:{$$slots:{default:[ni]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment),p=_(),i=h("p"),i.textContent=$,x=_(),j(o.$$.fragment)},l(C){e=g(C,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1rhlr30"&&(e.textContent=r),l=v(C),t=g(C,"P",{"data-svelte-h":!0}),b(t)!=="svelte-12je3p4"&&(t.textContent=f),n=v(C),M(s.$$.fragment,C),p=v(C),i=g(C,"P",{"data-svelte-h":!0}),b(i)!=="svelte-14lz6sc"&&(i.textContent=$),x=v(C),M(o.$$.fragment,C)},m(C,d){u(C,e,d),u(C,l,d),u(C,t,d),u(C,n,d),T(s,C,d),u(C,p,d),u(C,i,d),u(C,x,d),T(o,C,d),c=!0},p(C,d){const w={};d&1&&(w.$$scope={dirty:d,ctx:C}),s.$set(w);const V={};d&1&&(V.$$scope={dirty:d,ctx:C}),o.$set(V)},i(C){c||(S(s.$$.fragment,C),S(o.$$.fragment,C),c=!0)},o(C){q(s.$$.fragment,C),q(o.$$.fragment,C),c=!1},d(C){C&&(a(e),a(l),a(t),a(n),a(p),a(i),a(x)),P(s,C),P(o,C)}}}function ii(m){let e=`
                import java.util.Arrays;
                import java.util.List;

                public class Lambda {
                    public static void main(String[] args) {
                        List<String> noms = Arrays.asList("Alice", "Bob", "Charlie");
                        // Utilisation de la notation ::
                        noms.forEach(System.out::println);
                        // Affiche Alice, Bob, Charlie
                    }
                }
            `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ri(m){let e,r="Utilisation de la notation ::",l,t,f="La notation <code>::</code> en Java est utilisée pour faire référence à une méthode ou à un constructeur. Elle est souvent utilisée avec les lambdas pour simplifier le code.",n,s,p="Exemple :",i,$,x;return $=new se({props:{$$slots:{default:[ii]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),s=h("p"),s.textContent=p,i=_(),j($.$$.fragment)},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11teg0t"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-70y9fa"&&(t.innerHTML=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-14lz6sc"&&(s.textContent=p),i=v(o),M($.$$.fragment,o)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),T($,o,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),$.$set(C)},i(o){x||(S($.$$.fragment,o),x=!0)},o(o){q($.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i)),P($,o)}}}function ai(m){let e=`
            @FunctionalInterface
            public interface Operation {
                int calculer(int a, int b);
            }

            public class Lambda {
                public static void main(String[] args) {
                Operation addition = (a, b) -> a + b;
                System.out.println(addition.calculer(5, 3)); // Affiche 8
                }
            }
            `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ui(m){let e,r="Exemple d'utilisation",l,t,f="Voici un exemple d'utilisation des lambdas avec une interface fonctionnelle :",n,s,p;return s=new se({props:{$$slots:{default:[ai]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1masex2"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1bzbp9"&&(t.textContent=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function oi(m){let e=`
            public class Lambda {
                public static void main(String[] args) {
                    List<Integer> nombres = Arrays.asList(1, 2, 3, 4, 5);
                    // Utilisation de la bibliothèque Stream
                    nombres.stream().filter(n -> n % 2 == 0).forEach(System.out::println);
                    // Affiche 2 et 4
                }
            }
            `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function $i(m){let e,r="La bibliothèque Stream",l,t,f="La bibliothèque Stream permet de manipuler des collections de manière fonctionnelle.",n,s,p;return s=new se({props:{$$slots:{default:[oi]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-3s5w1x"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1w303ls"&&(t.textContent=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function fi(m){let e,r="La bibliothèque Stream",l,t,f="Exemples de fonctions de <code>stream</code>",n,s,p="<li><code>filter</code> : filtre les éléments d&#39;un <code>stream</code></li> <li><code>map</code> : transforme les éléments d&#39;un <code>stream</code></li> <li><code>reduce</code> : réduit les éléments d&#39;un <code>stream</code></li> <li><code>collect</code> : collecte les éléments d&#39;un <code>stream</code></li>";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.innerHTML=f,n=_(),s=h("ul"),s.innerHTML=p},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-3s5w1x"&&(e.textContent=r),l=v(i),t=g(i,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1jg16if"&&(t.innerHTML=f),n=v(i),s=g(i,"UL",{"data-svelte-h":!0}),b(s)!=="svelte-y0msi3"&&(s.innerHTML=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function ci(m){let e=`
                public class Lambda {
                    public static void main(String[] args) {
                        List<Integer> nombres = 
                            Arrays.asList(1, 2, 3, 4, 5);
                        int somme = 0;
                        for (int n : nombres) {
                            if (n % 2 == 0) {
                                somme += n * 2;
                            }
                        }
                        // Affiche 12
                    }
                }
                `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function pi(m){let e=`
                public class Lambda {
                    public static void main(String[] args) {
                        List<Integer> nombres = 
                            Arrays.asList(1, 2, 3, 4, 5);
                        // Utilisation de la bibliothèque Stream
                        nombres.stream()
                            .filter(n -> n % 2 == 0)
                            .map(n -> n * 2)
                            .reduce(0, (a, b) -> a + b);
                        // Affiche 12
                    }
                }
                `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function mi(m){let e,r="La bibliothèque Stream",l,t,f="Exemples complet",n,s,p,i,$="Utilisation de boucles",x,o,c,C,d,w="Utilisation de Stream",V,D,B;return o=new se({props:{$$slots:{default:[ci]},$$scope:{ctx:m}}}),D=new se({props:{$$slots:{default:[pi]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("div"),p=h("div"),i=h("h6"),i.textContent=$,x=_(),j(o.$$.fragment),c=_(),C=h("div"),d=h("h6"),d.textContent=w,V=_(),j(D.$$.fragment),this.h()},l(O){e=g(O,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-3s5w1x"&&(e.textContent=r),l=v(O),t=g(O,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-yapop1"&&(t.textContent=f),n=v(O),s=g(O,"DIV",{class:!0});var E=ne(s);p=g(E,"DIV",{class:!0});var z=ne(p);i=g(z,"H6",{"data-svelte-h":!0}),b(i)!=="svelte-1m83sp7"&&(i.textContent=$),x=v(z),M(o.$$.fragment,z),z.forEach(a),c=v(E),C=g(E,"DIV",{class:!0});var I=ne(C);d=g(I,"H6",{"data-svelte-h":!0}),b(d)!=="svelte-x4jzjq"&&(d.textContent=w),V=v(I),M(D.$$.fragment,I),I.forEach(a),E.forEach(a),this.h()},h(){L(p,"class","flex-1"),L(C,"class","flex-1"),L(s,"class","flex justify-center")},m(O,E){u(O,e,E),u(O,l,E),u(O,t,E),u(O,n,E),u(O,s,E),Q(s,p),Q(p,i),Q(p,x),T(o,p,null),Q(s,c),Q(s,C),Q(C,d),Q(C,V),T(D,C,null),B=!0},p(O,E){const z={};E&1&&(z.$$scope={dirty:E,ctx:O}),o.$set(z);const I={};E&1&&(I.$$scope={dirty:E,ctx:O}),D.$set(I)},i(O){B||(S(o.$$.fragment,O),S(D.$$.fragment,O),B=!0)},o(O){q(o.$$.fragment,O),q(D.$$.fragment,O),B=!1},d(O){O&&(a(e),a(l),a(t),a(n),a(s)),P(o),P(D)}}}function di(m){let e,r="Généralitées sur les Lambda",l,t,f="<li>Les lambdas sont des fonctions anonymes</li> <li>Elles sont souvent utilisées pour implémenter des interfaces fonctionnelles</li> <li>Une interface fonctionnelle est une interface qui ne contient qu&#39;une seule méthode abstraite</li> <li>La bibliothèque Stream permet de manipuler des collections de manière fonctionnelle</li>";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1yvkeux"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1o4wyjx"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function vi(m){let e=`
                public class Lambda {
                    public static void main(String[] args) {
                        int a = 5;
                        Operation addition = (b) -> a + b;
                        System.out.println(addition.calculer(3)); // Affiche 8
                    }
                }
                `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function _i(m){let e=`
                public class Lambda {
                    public static void main(String[] args) {
                        int a = 5;
                        Operation addition = (b) -> a = a + b; // Erreur de compilation
                    }
                }
                `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function xi(m){let e,r="Portée des variables",l,t,f=`Les lambdas peuvent accéder aux variables locales et aux paramètres des méthodes dans
			lesquelles elles sont déclarées.`,n,s,p,i,$=`En revanche, elles ne peuvent pas modifier les variables locales et les paramètres des
			méthodes dans lesquelles elles sont déclarées.`,x,o,c;return s=new se({props:{$$slots:{default:[vi]},$$scope:{ctx:m}}}),o=new se({props:{$$slots:{default:[_i]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment),p=_(),i=h("p"),i.textContent=$,x=_(),j(o.$$.fragment)},l(C){e=g(C,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1e5jpuk"&&(e.textContent=r),l=v(C),t=g(C,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1kgzcpl"&&(t.textContent=f),n=v(C),M(s.$$.fragment,C),p=v(C),i=g(C,"P",{"data-svelte-h":!0}),b(i)!=="svelte-1ngamoe"&&(i.textContent=$),x=v(C),M(o.$$.fragment,C)},m(C,d){u(C,e,d),u(C,l,d),u(C,t,d),u(C,n,d),T(s,C,d),u(C,p,d),u(C,i,d),u(C,x,d),T(o,C,d),c=!0},p(C,d){const w={};d&1&&(w.$$scope={dirty:d,ctx:C}),s.$set(w);const V={};d&1&&(V.$$scope={dirty:d,ctx:C}),o.$set(V)},i(C){c||(S(s.$$.fragment,C),S(o.$$.fragment,C),c=!0)},o(C){q(s.$$.fragment,C),q(o.$$.fragment,C),c=!1},d(C){C&&(a(e),a(l),a(t),a(n),a(p),a(i),a(x)),P(s,C),P(o,C)}}}function Ci(m){let e,r="Les collecteurs",l,t,f="Les collecteurs sont utilisés pour accumuler les éléments d'un stream dans une collection, une chaîne de caractères, ou une autre structure de données.",n,s,p="Exemples de collecteurs :",i,$,x="<li><code>toList</code> : collecte les éléments dans une liste</li> <li><code>toSet</code> : collecte les éléments dans un ensemble</li> <li><code>joining</code> : concatène les éléments en une chaîne de caractères</li> <li><code>groupingBy</code> : groupe les éléments par une clé</li> <li><code>partitioningBy</code> : partitionne les éléments en deux groupes</li>";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("ul"),$.innerHTML=x},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-g8ycxf"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1s91i32"&&(t.textContent=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-ub31ev"&&(s.textContent=p),i=v(o),$=g(o,"UL",{"data-svelte-h":!0}),b($)!=="svelte-1usc45j"&&($.innerHTML=x)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function gi(m){let e=`
                // Exemples
                var noms = Stream.of("Alice", "Bob", "Charlie").collect(Collectors.toList());
                var nomsSet = Stream.of("Alice", "Bob", "Charlie", "Alice").collect(Collectors.toSet());
                // [Alice, Bob, Charlie] (sans doublons)

                var nomsConcat = Stream.of("Alice", "Bob", "Charlie").collect(Collectors.joining(", "));
                // "Alice, Bob, Charlie"

                var nomsGroupes = Stream.of("Alice", "Bob", "Charlie")
                    .collect(Collectors.groupingBy(String::length));
                // [{3=[Bob], 5=[Alice, Charlie]}
                
                var nomsPartitionnes = Stream.of("Alice", "Bob", "Charlie")
                    .collect(Collectors.partitioningBy(s -> s.length() > 3));
                // {false=[Bob], true=[Alice, Charlie]}
            `,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function hi(m){let e,r="Exemples de collecteurs",l,t,f="Voici quelques exemples d'utilisation des collecteurs :",n,s,p;return s=new se({props:{$$slots:{default:[gi]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1vo69jl"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-jhz8lh"&&(t.textContent=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function bi(m){let e,r="Les intérêts des lambdas",l,t,f="<li>Les lambdas permettent de simplifier le code</li> <li>Elles permettent de rendre le code plus lisible</li> <li>Elles permettent de rendre le code plus concis</li> <li>Elles permettent de rendre le code plus maintenable</li>";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1g293rx"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1a9dw6q"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function wi(m){let e,r="Les lambdas",l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E,z,I,W,K,A,k;return t=new J({props:{$$slots:{default:[ti]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[si]},$$scope:{ctx:m}}}),p=new J({props:{$$slots:{default:[ri]},$$scope:{ctx:m}}}),$=new J({props:{$$slots:{default:[ui]},$$scope:{ctx:m}}}),o=new J({props:{$$slots:{default:[$i]},$$scope:{ctx:m}}}),C=new J({props:{$$slots:{default:[fi]},$$scope:{ctx:m}}}),w=new J({props:{$$slots:{default:[mi]},$$scope:{ctx:m}}}),D=new J({props:{$$slots:{default:[di]},$$scope:{ctx:m}}}),O=new J({props:{$$slots:{default:[xi]},$$scope:{ctx:m}}}),z=new J({props:{$$slots:{default:[Ci]},$$scope:{ctx:m}}}),W=new J({props:{$$slots:{default:[hi]},$$scope:{ctx:m}}}),A=new J({props:{$$slots:{default:[bi]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment),s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),x=_(),j(o.$$.fragment),c=_(),j(C.$$.fragment),d=_(),j(w.$$.fragment),V=_(),j(D.$$.fragment),B=_(),j(O.$$.fragment),E=_(),j(z.$$.fragment),I=_(),j(W.$$.fragment),K=_(),j(A.$$.fragment)},l(H){e=g(H,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-pgwrm2"&&(e.textContent=r),l=v(H),M(t.$$.fragment,H),f=v(H),M(n.$$.fragment,H),s=v(H),M(p.$$.fragment,H),i=v(H),M($.$$.fragment,H),x=v(H),M(o.$$.fragment,H),c=v(H),M(C.$$.fragment,H),d=v(H),M(w.$$.fragment,H),V=v(H),M(D.$$.fragment,H),B=v(H),M(O.$$.fragment,H),E=v(H),M(z.$$.fragment,H),I=v(H),M(W.$$.fragment,H),K=v(H),M(A.$$.fragment,H)},m(H,U){u(H,e,U),u(H,l,U),T(t,H,U),u(H,f,U),T(n,H,U),u(H,s,U),T(p,H,U),u(H,i,U),T($,H,U),u(H,x,U),T(o,H,U),u(H,c,U),T(C,H,U),u(H,d,U),T(w,H,U),u(H,V,U),T(D,H,U),u(H,B,U),T(O,H,U),u(H,E,U),T(z,H,U),u(H,I,U),T(W,H,U),u(H,K,U),T(A,H,U),k=!0},p(H,U){const te={};U&1&&(te.$$scope={dirty:U,ctx:H}),t.$set(te);const re={};U&1&&(re.$$scope={dirty:U,ctx:H}),n.$set(re);const G={};U&1&&(G.$$scope={dirty:U,ctx:H}),p.$set(G);const X={};U&1&&(X.$$scope={dirty:U,ctx:H}),$.$set(X);const ae={};U&1&&(ae.$$scope={dirty:U,ctx:H}),o.$set(ae);const y={};U&1&&(y.$$scope={dirty:U,ctx:H}),C.$set(y);const ee={};U&1&&(ee.$$scope={dirty:U,ctx:H}),w.$set(ee);const ue={};U&1&&(ue.$$scope={dirty:U,ctx:H}),D.$set(ue);const oe={};U&1&&(oe.$$scope={dirty:U,ctx:H}),O.$set(oe);const fe={};U&1&&(fe.$$scope={dirty:U,ctx:H}),z.$set(fe);const ve={};U&1&&(ve.$$scope={dirty:U,ctx:H}),W.$set(ve);const $e={};U&1&&($e.$$scope={dirty:U,ctx:H}),A.$set($e)},i(H){k||(S(t.$$.fragment,H),S(n.$$.fragment,H),S(p.$$.fragment,H),S($.$$.fragment,H),S(o.$$.fragment,H),S(C.$$.fragment,H),S(w.$$.fragment,H),S(D.$$.fragment,H),S(O.$$.fragment,H),S(z.$$.fragment,H),S(W.$$.fragment,H),S(A.$$.fragment,H),k=!0)},o(H){q(t.$$.fragment,H),q(n.$$.fragment,H),q(p.$$.fragment,H),q($.$$.fragment,H),q(o.$$.fragment,H),q(C.$$.fragment,H),q(w.$$.fragment,H),q(D.$$.fragment,H),q(O.$$.fragment,H),q(z.$$.fragment,H),q(W.$$.fragment,H),q(A.$$.fragment,H),k=!1},d(H){H&&(a(e),a(l),a(f),a(s),a(i),a(x),a(c),a(d),a(V),a(B),a(E),a(I),a(K)),P(t,H),P(n,H),P(p,H),P($,H),P(o,H),P(C,H),P(w,H),P(D,H),P(O,H),P(z,H),P(W,H),P(A,H)}}}function Li(m){let e,r;return e=new J({props:{$$slots:{default:[wi]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class Hi extends he{constructor(e){super(),be(this,e,null,Li,ge,{})}}function Pi(m){let e,r="Présentation",l,t,f=`Les collections en Java sont des classes qui permettent de stocker et de manipuler des
			collections d&#39;objets. <br/>Elles offrent des fonctionnalités avancées pour gérer des
			collections de manière dynamique, en permettant d&#39;ajouter, de supprimer, de rechercher et de
			parcourir les éléments d&#39;une collection. <br/>Les collections en Java sont regroupées dans le
			paquetage <code>java.util</code>.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-14nafu8"&&(e.textContent=r),l=v(n),t=g(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1yibals"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function qi(m){let e,r="Les différentes collections",l,t,f=`<li>Listes : <code>ArrayList</code>, <code>LinkedList</code>, <code>Vector</code>,
				<code>Stack</code></li> <li>Ensembles : <code>HashSet</code>, <code>LinkedHashSet</code>, <code>TreeSet</code></li> <li>Cartes : <code>HashMap</code>, <code>LinkedHashMap</code>, <code>TreeMap</code></li> <li>Files d&#39;attente : <code>PriorityQueue</code></li>`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1e6rpuq"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-t9j7cd"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Si(m){let e=`
@startuml

interface Iterable
interface Collection
interface Queue
interface List
interface Set
interface SortedSet
interface NavigableSet
abstract class AbstractSet
class TreeSet
interface Deque
class PriorityQueue
abstract class AbstractSequentialList
abstract class AbstractCollection
abstract class AbstractList
class ArrayList
class Vector
class Stack

Iterable <|.. Collection
Collection <|.. Queue
Collection <|.. List
Collection <|.. Set
Queue <|.. Deque
Set <|.. SortedSet
SortedSet <|.. NavigableSet
Queue <|.. PriorityQueue
Collection <|.. AbstractCollection
AbstractCollection  <|-- AbstractSet
Set <|.. AbstractSet

AbstractCollection <|-- AbstractList
List <|.. AbstractList
NavigableSet <|.. TreeSet
AbstractSet <|-- TreeSet
AbstractSequentialList <|-- LinkedList
Deque <|.. LinkedList
AbstractList <|-- AbstractSequentialList
AbstractList <|-- ArrayList
AbstractList <|-- Vector
Vector <|-- Stack
@enduml

`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ti(m){let e,r,l;return r=new He({props:{$$slots:{default:[Si]},$$scope:{ctx:m}}}),{c(){e=h("div"),j(r.$$.fragment),this.h()},l(t){e=g(t,"DIV",{class:!0});var f=ne(e);M(r.$$.fragment,f),f.forEach(a),this.h()},h(){L(e,"class","flex mt-10 justify-center")},m(t,f){u(t,e,f),T(r,e,null),l=!0},p(t,f){const n={};f&1&&(n.$$scope={dirty:f,ctx:t}),r.$set(n)},i(t){l||(S(r.$$.fragment,t),l=!0)},o(t){q(r.$$.fragment,t),l=!1},d(t){t&&a(e),P(r)}}}function Mi(m){let e,r="L&#39;interface <code>Iterable</code>",l,t,f=`L&#39;interface <code>Iterable</code> est une interface générique qui définit une méthode
			<code>iterator()</code> qui permet de parcourir les éléments d&#39;une collection. <br/>Elle est
			implémentée par toutes les classes qui représentent des collections d&#39;objets.`,n;return{c(){e=h("h3"),e.innerHTML=r,l=_(),t=h("p"),t.innerHTML=f,n=_()},l(s){e=g(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uyrbon"&&(e.innerHTML=r),l=v(s),t=g(s,"P",{"data-svelte-h":!0}),b(t)!=="svelte-ndrmbw"&&(t.innerHTML=f),n=v(s)},m(s,p){u(s,e,p),u(s,l,p),u(s,t,p),u(s,n,p)},p:N,d(s){s&&(a(e),a(l),a(t),a(n))}}}function ji(m){let e,r="Les collections en Java",l,t,f="L&#39;interface <code>Collection</code>",n,s,p=`L&#39;interface <code>Collection</code> est une interface générique qui définit les méthodes
			permettant de manipuler une collection d&#39;objets. <br/>Elle étend l&#39;interface
			<code>Iterable</code>
			et définit des méthodes pour ajouter, supprimer, rechercher et parcourir les éléments d&#39;une collection.`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("h3"),t.innerHTML=f,n=_(),s=h("p"),s.innerHTML=p},l(i){e=g(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-l661wu"&&(e.textContent=r),l=v(i),t=g(i,"H3",{"data-svelte-h":!0}),b(t)!=="svelte-9yvwmh"&&(t.innerHTML=f),n=v(i),s=g(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1pakf3f"&&(s.innerHTML=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function Ai(m){let e,r="L&#39;interface <code>List</code>, <code>Queue</code> et <code>Set</code>",l,t,f=`<p class="flex-1">L&#39;interface <code>List</code> définit les méthodes pour manipuler une collection d&#39;objets ordonnée
				et indexée.</p> <p class="flex-1">L&#39;interface <code>Queue</code> manipule une collection d&#39;objets organisée selon le principe de
				file d&#39;attente.</p> <p class="flex-1">L&#39;interface <code>Set</code> manipule une collection d&#39;objets sans doublons.</p>`;return{c(){e=h("h3"),e.innerHTML=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-w4a6ej"&&(e.innerHTML=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-w1y9z7"&&(t.innerHTML=f),this.h()},h(){L(t,"class","flex flex-row gap-4")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function ki(m){let e,r="Les classes <code>ArrayList</code>, <code>PriorityQueue</code> et <code>TreeSet</code>",l,t,f=`<p class="flex-1">La classe <code>ArrayList</code> est une implémentation de l&#39;interface <code>List</code> qui
				stocke les éléments dans un tableau dynamique.</p> <p class="flex-1">La classe <code>PriorityQueue</code> est une implémentation de l&#39;interface
				<code>Queue</code> qui stocke les éléments dans une file d&#39;attente de priorité.</p> <p class="flex-1">La classe <code>TreeSet</code> est une implémentation de l&#39;interface <code>SortedSet</code> qui
				stocke les éléments dans un arbre binaire équilibré.</p>`;return{c(){e=h("h3"),e.innerHTML=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lkcebm"&&(e.innerHTML=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1cjm5fg"&&(t.innerHTML=f),this.h()},h(){L(t,"class","flex flex-row gap-4")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Di(m){let e=`
		@startuml

interface Iterable {
    + iterator() : Iterator
}

interface Collection {
    + size() : int
    + isEmpty() : boolean
    + contains(Object) : boolean
    + add(Object) : boolean
    + remove(Object) : boolean
    + clear()
}

interface Queue {
    + element() : Object
    + offer(Object) : boolean
    + peek() : Object
    + poll() : Object
}

interface List {
    + get(int) : Object
    + set(int, Object) : Object
    + add(int, Object)
    + remove(int) : Object
    
}

interface Set {

}

class ArrayList {
    + trimToSize()
    + ensureCapacity(int)
	...
}

class PriorityQueue {
	...
    
}

class TreeSet {
    + ceiling(Object) : Object
    + floor(Object) : Object
    + higher(Object) : Object
    + lower(Object) : Object
}

Collection <|.. List
Collection <|.. Queue
Collection <|.. Set
Iterable <|.. Collection
List <|-- ArrayList
Queue <|-- LinkedList
Set <|-- TreeSet

@enduml
`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ei(m){let e,r="Diagramme de classes des collections en Java",l,t,f;return t=new He({props:{$$slots:{default:[Di]},$$scope:{ctx:m}}}),{c(){e=h("p"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-nh95aa"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function zi(m){let e=`
		List<String> arrayList = new ArrayList<>();
		Queue<String> priorityQueue = new PriorityQueue<>();
		Set<String> treeSet = new TreeSet<>();
		
		//Code commun aux collections :
		arrayList.add("Java");
		prorityQueue.add("Java");
		treeSet.add("Java");

		//Code commun au Iterable :
		for (String element : arrayList) {
			System.out.println(element);
		}
		for (String element : priorityQueue) {
			System.out.println(element);
		}
		//Spécifique à chaque implémentation :
		priorityQueue.poll();
		treeSet.ceiling("Java");
		arrayList.get(0);
		`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ii(m){let e,r="Application",l,t,f;return t=new se({props:{$$slots:{default:[zi]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment)},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-o4ufds"&&(e.textContent=r),l=v(n),M(t.$$.fragment,n)},m(n,s){u(n,e,s),u(n,l,s),T(t,n,s),f=!0},p(n,s){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(l)),P(t,n)}}}function Oi(m){let e,r="Les collections en Java",l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O;return t=new J({props:{$$slots:{default:[Pi]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[qi]},$$scope:{ctx:m}}}),p=new J({props:{$$slots:{default:[Ti]},$$scope:{ctx:m}}}),$=new J({props:{$$slots:{default:[Mi]},$$scope:{ctx:m}}}),x=new J({props:{$$slots:{default:[ji]},$$scope:{ctx:m}}}),c=new J({props:{$$slots:{default:[Ai]},$$scope:{ctx:m}}}),d=new J({props:{$$slots:{default:[ki]},$$scope:{ctx:m}}}),V=new J({props:{$$slots:{default:[Ei]},$$scope:{ctx:m}}}),B=new J({props:{$$slots:{default:[Ii]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment),s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),j(x.$$.fragment),o=_(),j(c.$$.fragment),C=_(),j(d.$$.fragment),w=_(),j(V.$$.fragment),D=_(),j(B.$$.fragment)},l(E){e=g(E,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1r7hpea"&&(e.textContent=r),l=v(E),M(t.$$.fragment,E),f=v(E),M(n.$$.fragment,E),s=v(E),M(p.$$.fragment,E),i=v(E),M($.$$.fragment,E),M(x.$$.fragment,E),o=v(E),M(c.$$.fragment,E),C=v(E),M(d.$$.fragment,E),w=v(E),M(V.$$.fragment,E),D=v(E),M(B.$$.fragment,E)},m(E,z){u(E,e,z),u(E,l,z),T(t,E,z),u(E,f,z),T(n,E,z),u(E,s,z),T(p,E,z),u(E,i,z),T($,E,z),T(x,E,z),u(E,o,z),T(c,E,z),u(E,C,z),T(d,E,z),u(E,w,z),T(V,E,z),u(E,D,z),T(B,E,z),O=!0},p(E,z){const I={};z&1&&(I.$$scope={dirty:z,ctx:E}),t.$set(I);const W={};z&1&&(W.$$scope={dirty:z,ctx:E}),n.$set(W);const K={};z&1&&(K.$$scope={dirty:z,ctx:E}),p.$set(K);const A={};z&1&&(A.$$scope={dirty:z,ctx:E}),$.$set(A);const k={};z&1&&(k.$$scope={dirty:z,ctx:E}),x.$set(k);const H={};z&1&&(H.$$scope={dirty:z,ctx:E}),c.$set(H);const U={};z&1&&(U.$$scope={dirty:z,ctx:E}),d.$set(U);const te={};z&1&&(te.$$scope={dirty:z,ctx:E}),V.$set(te);const re={};z&1&&(re.$$scope={dirty:z,ctx:E}),B.$set(re)},i(E){O||(S(t.$$.fragment,E),S(n.$$.fragment,E),S(p.$$.fragment,E),S($.$$.fragment,E),S(x.$$.fragment,E),S(c.$$.fragment,E),S(d.$$.fragment,E),S(V.$$.fragment,E),S(B.$$.fragment,E),O=!0)},o(E){q(t.$$.fragment,E),q(n.$$.fragment,E),q(p.$$.fragment,E),q($.$$.fragment,E),q(x.$$.fragment,E),q(c.$$.fragment,E),q(d.$$.fragment,E),q(V.$$.fragment,E),q(B.$$.fragment,E),O=!1},d(E){E&&(a(e),a(l),a(f),a(s),a(i),a(o),a(C),a(w),a(D)),P(t,E),P(n,E),P(p,E),P($,E),P(x,E),P(c,E),P(d,E),P(V,E),P(B,E)}}}function Ui(m){let e,r;return e=new J({props:{$$slots:{default:[Oi]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class Vi extends he{constructor(e){super(),be(this,e,null,Ui,ge,{})}}function Bi(m){let e,r="Les annotations";return{c(){e=h("h3"),e.textContent=r},l(l){e=g(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function Ji(m){let e=`
                @interface MyAnnotation {
                    String value();
                    int number();
                    Class type();
                }`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Ni(m){let e,r="Les annotations",l,t,f=`Sur la plate-forme Java, une annotation est une interface lors de sa déclaration et une
			instance d&#39;une classe qui implémente cette interface lors de son utilisation.<br/>
			La définition d&#39;une annotation nécessite une syntaxe particulière utilisant le mot clé @interface.
			Une annotation se déclare donc de façon similaire à une interface.`,n,s,p;return s=new se({props:{$$slots:{default:[Ji]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,n=_(),j(s.$$.fragment)},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-kanb15"&&(t.innerHTML=f),n=v(i),M(s.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),s.$set(x)},i(i){p||(S(s.$$.fragment,i),p=!0)},o(i){q(s.$$.fragment,i),p=!1},d(i){i&&(a(e),a(l),a(t),a(n)),P(s,i)}}}function Ri(m){let e,r="Les annotations",l,t,f="À quoi ça sert ?",n,s,p=`À la manière des interfaces marqueur, les annotations permettent de marquer des éléments de
			code, que ce soit des méthodes ou des types, mais aussi de leur associer des informations
			supplémentaires.`,i,$,x=`<strong>Fondamentalement, c&#39;est un peu comme si vous déclariez une méthode getValue() dans une
				interface, et que vous l&#39;implémentiez dans chacune des classes concrètes.<br/>
				Toutefois, la différence est que vous n&#39;avez pas besoin de fournir une implémentation pour les
				méthodes de l&#39;annotation. En plus, l&#39;annotation va se comporter un peu comme une liste d&#39;attributs,
				or, vous savez qu&#39;on ne peut pas mettre d&#39;attributs dans une interface.</strong>`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.innerHTML=x},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=r),l=v(o),t=g(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-xuio5v"&&(t.textContent=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1vagidc"&&(s.textContent=p),i=v(o),$=g(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-17t72gl"&&($.innerHTML=x)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function Fi(m){let e,r="Les annotations",l,t,f="Les annotations prédéfinies",n,s,p=`Java définit un certain nombre d&#39;annotations prédéfinies, qui sont utilisées dans des
			contextes particuliers. Par exemple, l&#39;annotation <code>@Override</code> est utilisée pour indiquer
			qu&#39;une méthode redéfinit une méthode de la classe mère. Vous l&#39;avez déjà utilisée sans le savoir.`,i,$,x=`En l'occurrence, cette dernière ne sert pas à grand-chose, si ce n'est vous mettre un avertissement au
			cas où vous vous trompiez dans le nom de la méthode.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.innerHTML=p,i=_(),$=h("p"),$.textContent=x},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=r),l=v(o),t=g(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-10nfps6"&&(t.textContent=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-17y0hf9"&&(s.innerHTML=p),i=v(o),$=g(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-3k5h4h"&&($.textContent=x)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function yi(m){let e,r="Les annotations",l,t,f=`Les annotations sont très utilisées dans les frameworks Java, comme Spring, Hibernate, JUnit,
			etc. Elles permettent de définir des comportements spécifiques à des classes, des méthodes,
			des attributs, etc.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=r),l=v(n),t=g(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-bo7213"&&(t.textContent=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Gi(m){let e,r="Les annotations",l,t,f="Utilisation avec Spring",n,s,p="@Service et @Autowired",i,$,x=`Imaginez que vous ayez une classe qui a besoin d&#39;une autre classe pour fonctionner. 
			Vous devrez la passer dans le constructeur à la création de votre objet.<br/>
			Par contre, si cette classe a aussi besoin de 5 autres classes, cela devient vite compliqué.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("h5"),s.textContent=p,i=_(),$=h("p"),$.innerHTML=x},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=r),l=v(o),t=g(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=f),n=v(o),s=g(o,"H5",{"data-svelte-h":!0}),b(s)!=="svelte-1yhbv5q"&&(s.textContent=p),i=v(o),$=g(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-1frhzwg"&&($.innerHTML=x)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function Qi(m){let e=`
				@startuml

				class GameService {
					+IMovementService movementService
					+GameStateService stateService
				}

				class GameStateService {
					+Map<Integer, Snake> snakes
					+Map<Point, AbstractAliment> aliments
					+Map<Point, Obstacle> obstacles
				}

				class AlimentService {
					+GameStateService stateService
				}

				class ScoreService {
					+GameStateService gameStateService
				}

				class ObstacleService {
					+GameStateService gameStateService
				}

				class GameOptionsService {
					+GameService gameService
				}

				class AbstractMovementService implements IMovementService {
					+GameStateService stateService
				}

				class ArrowKeyMovementService extends AbstractMovementService {
					+GameStateService stateService
				}

				class ZqsdKeyMovementService extends AbstractMovementService {
					+GameStateService stateService
				}

				GameService --> GameStateService

				GameService -> IMovementService
				GameService -> AlimentService
				GameService -> ScoreService
				GameService -> ObstacleService

				AlimentService --> GameStateService
				ScoreService --> GameStateService
				ObstacleService --> GameStateService
				GameOptionsService --> GameService
				AbstractMovementService --> GameStateService

				@enduml
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Wi(m){let e,r="Les annotations",l,t,f="Utilisation avec Spring",n,s,p="@Service et @Autowired",i,$,x,o,c=`Dans le cadre du prochain TP, votre <code>GameStateService</code> sera injecté dans chacun de
			vos services.<br/>
			Les annotations <code>@Service</code> et <code>@Autowired</code> vous permettront de le faire automatiquement.`,C;return $=new He({props:{$$slots:{default:[Qi]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("h5"),s.textContent=p,i=_(),j($.$$.fragment),x=_(),o=h("p"),o.innerHTML=c,this.h()},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=r),l=v(d),t=g(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=f),n=v(d),s=g(d,"H5",{"data-svelte-h":!0}),b(s)!=="svelte-1yhbv5q"&&(s.textContent=p),i=v(d),M($.$$.fragment,d),x=v(d),o=g(d,"P",{class:!0,"data-svelte-h":!0}),b(o)!=="svelte-mx7ffi"&&(o.innerHTML=c),this.h()},h(){L(o,"class","smaller")},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),T($,d,w),u(d,x,w),u(d,o,w),C=!0},p(d,w){const V={};w&1&&(V.$$scope={dirty:w,ctx:d}),$.$set(V)},i(d){C||(S($.$$.fragment,d),C=!0)},o(d){q($.$$.fragment,d),C=!1},d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a(x),a(o)),P($,d)}}}function Ki(m){let e=`
				@Service
				public class MyService {
					@Autowired
					private MyRepository repository;
				}
				@Service
				public class MyRepository {
					@Autowired
					private ConnexionBdd connexionBdd;
					@Autowired
					private Truc truc;
					@Autowired
					private Machin machin;
				}
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Zi(m){let e,r="Les annotations",l,t,f="Utilisation avec Spring",n,s,p="@Service et @Autowired",i,$,x,o,c=`Nous avons un service qui utilise un repository.<br/> Ce dernier utilise une connexion à la
			base de données, un truc et un machin. <br/>Spring va se charger de créer les instances de
			ces objets et de les injecter dans les classes qui en ont besoin.`,C;return $=new se({props:{$$slots:{default:[Ki]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("h5"),s.textContent=p,i=_(),j($.$$.fragment),x=_(),o=h("p"),o.innerHTML=c,this.h()},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=r),l=v(d),t=g(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=f),n=v(d),s=g(d,"H5",{"data-svelte-h":!0}),b(s)!=="svelte-1yhbv5q"&&(s.textContent=p),i=v(d),M($.$$.fragment,d),x=v(d),o=g(d,"P",{class:!0,"data-svelte-h":!0}),b(o)!=="svelte-ytj90u"&&(o.innerHTML=c),this.h()},h(){L(o,"class","smaller")},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),T($,d,w),u(d,x,w),u(d,o,w),C=!0},p(d,w){const V={};w&1&&(V.$$scope={dirty:w,ctx:d}),$.$set(V)},i(d){C||(S($.$$.fragment,d),C=!0)},o(d){q($.$$.fragment,d),C=!1},d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a(x),a(o)),P($,d)}}}function Yi(m){let e=`
			 	IMovementService service = applicationContext.getBean(ZqsdKeyMovementService.class);	
				//Imaginez que ZqsdKeyMovementService ait un constructeur qui prend 50 paramètres, Spring va se charger de les injecter à votre place
			`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Xi(m){let e,r="Les annotations",l,t,f="Utilisation avec Spring",n,s,p="@Component et @Primary",i,$,x=`<p>Vous voulez utiliser le DP Strategy ?</p> <p>L&#39;annotation @Component permet de dire qu&#39;il pourra y avoir plusieurs classes qui
				implémentent la même interface.</p> <p>L&#39;annotation @Primary permet de dire que c&#39;est cette classe qui sera utilisée par défaut.</p> <p>Vous avez un <code>ApplicationContext</code> que vous pouvez injecter dans vos services et qui
				vous permet de demander une stratégie en fonction de son nom.</p>`,o,c,C;return c=new se({props:{$$slots:{default:[Yi]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("h5"),s.textContent=p,i=_(),$=h("div"),$.innerHTML=x,o=_(),j(c.$$.fragment),this.h()},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=r),l=v(d),t=g(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=f),n=v(d),s=g(d,"H5",{"data-svelte-h":!0}),b(s)!=="svelte-1h7on3i"&&(s.textContent=p),i=v(d),$=g(d,"DIV",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1hmkf1x"&&($.innerHTML=x),o=v(d),M(c.$$.fragment,d),this.h()},h(){L($,"class","smaller")},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),u(d,$,w),u(d,o,w),T(c,d,w),C=!0},p(d,w){const V={};w&1&&(V.$$scope={dirty:w,ctx:d}),c.$set(V)},i(d){C||(S(c.$$.fragment,d),C=!0)},o(d){q(c.$$.fragment,d),C=!1},d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a($),a(o)),P(c,d)}}}function er(m){let e=`
				@Service
				public class GameService {
					@Autowired
					private IMovementService movementService;
					private changeMovementService(string nom) {
							//...
							movementService = applicationContext.getBean(ZqsdKeyMovementService.class);
						}
					}
				}

				@Component
				@Primary
				public class ArrowKeyMovementService implements IMovementService { }
				@Component
				public class ZqsdKeyMovementService implements IMovementService { }
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function tr(m){let e,r="Les annotations",l,t,f="Utilisation avec Spring",n,s,p="@Component et @Primary",i,$,x;return $=new se({props:{class:"smaller",$$slots:{default:[er]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("h5"),s.textContent=p,i=_(),j($.$$.fragment)},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=r),l=v(o),t=g(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=f),n=v(o),s=g(o,"H5",{"data-svelte-h":!0}),b(s)!=="svelte-1h7on3i"&&(s.textContent=p),i=v(o),M($.$$.fragment,o)},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),T($,o,c),x=!0},p(o,c){const C={};c&1&&(C.$$scope={dirty:c,ctx:o}),$.$set(C)},i(o){x||(S($.$$.fragment,o),x=!0)},o(o){q($.$$.fragment,o),x=!1},d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i)),P($,o)}}}function lr(m){let e,r="Les annotations",l,t,f="Utilisation avec Spring",n,s,p="Le principal avantage de Spring est que juste à l'aide d'annotations, vous pouvez définir des services qui seront utilisés par d'autres services.",i,$,x=`Si vous voulez déplacer du code qui devient complexe <strong>ou</strong> que vous voulez utiliser ailleurs, c&#39;est alors très simple, il suffit de faire une nouvelle classe, l&#39;anotter avec @Service
			et injecter ce service où vous voulez.`,o,c,C="Cette manière de coder est plus ou moins un Design Pattern appelé <strong>Dependency Injection</strong>";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.innerHTML=x,o=_(),c=h("p"),c.innerHTML=C,this.h()},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=r),l=v(d),t=g(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=f),n=v(d),s=g(d,"P",{"data-svelte-h":!0}),b(s)!=="svelte-18zogyt"&&(s.textContent=p),i=v(d),$=g(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-84n48u"&&($.innerHTML=x),o=v(d),c=g(d,"P",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-13vmlio"&&(c.innerHTML=C),this.h()},h(){L(c,"class","text-important")},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),u(d,$,w),u(d,o,w),u(d,c,w)},p:N,d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a($),a(o),a(c))}}}function nr(m){let e,r,l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E,z;return e=new J({props:{$$slots:{default:[Bi]},$$scope:{ctx:m}}}),l=new J({props:{$$slots:{default:[Ni]},$$scope:{ctx:m}}}),f=new J({props:{$$slots:{default:[Ri]},$$scope:{ctx:m}}}),s=new J({props:{$$slots:{default:[Fi]},$$scope:{ctx:m}}}),i=new J({props:{$$slots:{default:[yi]},$$scope:{ctx:m}}}),x=new J({props:{$$slots:{default:[Gi]},$$scope:{ctx:m}}}),c=new J({props:{$$slots:{default:[Wi]},$$scope:{ctx:m}}}),d=new J({props:{$$slots:{default:[Zi]},$$scope:{ctx:m}}}),V=new J({props:{$$slots:{default:[Xi]},$$scope:{ctx:m}}}),B=new J({props:{$$slots:{default:[tr]},$$scope:{ctx:m}}}),E=new J({props:{$$slots:{default:[lr]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),r=_(),j(l.$$.fragment),t=_(),j(f.$$.fragment),n=_(),j(s.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(x.$$.fragment),o=_(),j(c.$$.fragment),C=_(),j(d.$$.fragment),w=_(),j(V.$$.fragment),D=_(),j(B.$$.fragment),O=_(),j(E.$$.fragment)},l(I){M(e.$$.fragment,I),r=v(I),M(l.$$.fragment,I),t=v(I),M(f.$$.fragment,I),n=v(I),M(s.$$.fragment,I),p=v(I),M(i.$$.fragment,I),$=v(I),M(x.$$.fragment,I),o=v(I),M(c.$$.fragment,I),C=v(I),M(d.$$.fragment,I),w=v(I),M(V.$$.fragment,I),D=v(I),M(B.$$.fragment,I),O=v(I),M(E.$$.fragment,I)},m(I,W){T(e,I,W),u(I,r,W),T(l,I,W),u(I,t,W),T(f,I,W),u(I,n,W),T(s,I,W),u(I,p,W),T(i,I,W),u(I,$,W),T(x,I,W),u(I,o,W),T(c,I,W),u(I,C,W),T(d,I,W),u(I,w,W),T(V,I,W),u(I,D,W),T(B,I,W),u(I,O,W),T(E,I,W),z=!0},p(I,W){const K={};W&1&&(K.$$scope={dirty:W,ctx:I}),e.$set(K);const A={};W&1&&(A.$$scope={dirty:W,ctx:I}),l.$set(A);const k={};W&1&&(k.$$scope={dirty:W,ctx:I}),f.$set(k);const H={};W&1&&(H.$$scope={dirty:W,ctx:I}),s.$set(H);const U={};W&1&&(U.$$scope={dirty:W,ctx:I}),i.$set(U);const te={};W&1&&(te.$$scope={dirty:W,ctx:I}),x.$set(te);const re={};W&1&&(re.$$scope={dirty:W,ctx:I}),c.$set(re);const G={};W&1&&(G.$$scope={dirty:W,ctx:I}),d.$set(G);const X={};W&1&&(X.$$scope={dirty:W,ctx:I}),V.$set(X);const ae={};W&1&&(ae.$$scope={dirty:W,ctx:I}),B.$set(ae);const y={};W&1&&(y.$$scope={dirty:W,ctx:I}),E.$set(y)},i(I){z||(S(e.$$.fragment,I),S(l.$$.fragment,I),S(f.$$.fragment,I),S(s.$$.fragment,I),S(i.$$.fragment,I),S(x.$$.fragment,I),S(c.$$.fragment,I),S(d.$$.fragment,I),S(V.$$.fragment,I),S(B.$$.fragment,I),S(E.$$.fragment,I),z=!0)},o(I){q(e.$$.fragment,I),q(l.$$.fragment,I),q(f.$$.fragment,I),q(s.$$.fragment,I),q(i.$$.fragment,I),q(x.$$.fragment,I),q(c.$$.fragment,I),q(d.$$.fragment,I),q(V.$$.fragment,I),q(B.$$.fragment,I),q(E.$$.fragment,I),z=!1},d(I){I&&(a(r),a(t),a(n),a(p),a($),a(o),a(C),a(w),a(D),a(O)),P(e,I),P(l,I),P(f,I),P(s,I),P(i,I),P(x,I),P(c,I),P(d,I),P(V,I),P(B,I),P(E,I)}}}function sr(m){let e,r;return e=new J({props:{$$slots:{default:[nr]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class ir extends he{constructor(e){super(),be(this,e,null,sr,ge,{})}}function rr(m){let e,r="Patrons de conception",l,t,f='Cours très bien expliqué : <a href="https://refactoring.guru/fr" target="_blank">Refactoring Guru</a>';return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("p"),t.innerHTML=f,this.h()},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-l6cb4s"&&(e.textContent=r),l=v(n),t=g(n,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-19668a8"&&(t.innerHTML=f),this.h()},h(){L(t,"class","fragment")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function ar(m){let e,r="Qu'est-ce qu'un patron de conception ?",l,t,f=`Un patron de conception est une solution générale à un problème récurrent en conception
			logicielle.`,n,s,p="Les bons développeurs connaissent ces patrons et savent quand les utiliser.",i,$,x="En connaissant bien ces patrons, vous pouvez proposer des fonctionnalités supplémentaires sans surcoût.",o,c,C="Un DP bien identifié permet de communiquer plus facilement avec les autres développeurs !";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.textContent=x,o=_(),c=h("p"),c.textContent=C,this.h()},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ac53e2"&&(e.textContent=r),l=v(d),t=g(d,"P",{"data-svelte-h":!0}),b(t)!=="svelte-klr3xc"&&(t.textContent=f),n=v(d),s=g(d,"P",{"data-svelte-h":!0}),b(s)!=="svelte-rif0m1"&&(s.textContent=p),i=v(d),$=g(d,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-p9bw1x"&&($.textContent=x),o=v(d),c=g(d,"P",{"data-svelte-h":!0}),b(c)!=="svelte-12jq88p"&&(c.textContent=C),this.h()},h(){L($,"class","text-important")},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),u(d,$,w),u(d,o,w),u(d,c,w)},p:N,d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a($),a(o),a(c))}}}function ur(m){let e,r="Les patrons de conception sont-ils indispensables ?",l,t,f="Non, mais ils sont très utiles pour résoudre des problèmes courants de manière efficace.",n,s,p="Il existe de nombreux patrons de conception, mais il est inutile de tous les connaître par cœur !",i,$,x=`C'est un peu comme si nous avions observé des bouts de code qui marchent bien, et que nous les
			avions classés et regroupés pour les proposer à tous.`,o,c,C="Vous utilisez probablement déjà des patrons de conception sans le savoir !";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.textContent=x,o=_(),c=h("p"),c.textContent=C,this.h()},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-qkdteq"&&(e.textContent=r),l=v(d),t=g(d,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1lzbry7"&&(t.textContent=f),n=v(d),s=g(d,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1yjd8fx"&&(s.textContent=p),i=v(d),$=g(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-1gcugiu"&&($.textContent=x),o=v(d),c=g(d,"P",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1k895an"&&(c.textContent=C),this.h()},h(){L(c,"class","text-important")},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),u(d,$,w),u(d,o,w),u(d,c,w)},p:N,d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a($),a(o),a(c))}}}function or(m){let e,r="Analogie",l,t,f=`Une bonne analogie pour les patrons de conception en POO dans la vie réelle serait celle d'une
			cuisine professionnelle dans un restaurant. Voici comment cela fonctionne :`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-gaiqh2"&&(e.textContent=r),l=v(n),t=g(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1e74hoy"&&(t.textContent=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function $r(m){let e,r="Qui prépare les commandes ?",l,t,f="Singleton",n,s,p=`Le chef de cuisine est responsable de la préparation des commandes. Il doit y en avoir
			strictement <b>un seul</b>.<br/>`,i,$,x=`Si vous avez bien suivi, vous connaissez déjà une manière pour qu'un attribut soit partagé par
			toutes les instances d'une classe.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.innerHTML=p,i=_(),$=h("p"),$.textContent=x,this.h()},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ymnqdo"&&(e.textContent=r),l=v(o),t=g(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-ek6eep"&&(t.textContent=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-igcgyy"&&(s.innerHTML=p),i=v(o),$=g(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-sen092"&&($.textContent=x),this.h()},h(){L($,"class","text-important")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function fr(m){let e,r="Qui prépare les commandes ?",l,t,f="Singleton",n,s,p=`Un singleton est une classe avec une méthode statique <code>getInstance</code> qui retourne la
			même instance de la classe à chaque appel.`,i,$,x=`Pour cela, le constructeur de la classe est privé, et la seule manière de créer une instance de
			la classe est d&#39;appeler la méthode <code>getInstance</code> qui fait un <code>new</code>.`,o,c,C='<img src="https://refactoring.guru/images/patterns/diagrams/singleton/structure-fr.png" alt="Singleton"/>';return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.innerHTML=p,i=_(),$=h("p"),$.innerHTML=x,o=_(),c=h("div"),c.innerHTML=C,this.h()},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ymnqdo"&&(e.textContent=r),l=v(d),t=g(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-ek6eep"&&(t.textContent=f),n=v(d),s=g(d,"P",{"data-svelte-h":!0}),b(s)!=="svelte-yw0ri4"&&(s.innerHTML=p),i=v(d),$=g(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-lpvbic"&&($.innerHTML=x),o=v(d),c=g(d,"DIV",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-cupfnk"&&(c.innerHTML=C),this.h()},h(){L(c,"class","flex justify-center")},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),u(d,$,w),u(d,o,w),u(d,c,w)},p:N,d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a($),a(o),a(c))}}}function cr(m){let e,r="Comment les serveurs passent commande ?",l,t,f="Factory",n,s,p=`Les serveurs prennent les commandes des clients et les transmettent au chef de cuisine. Ils ne
			savent pas comment les plats sont préparés, ils ne font que transmettre les commandes.`,i,$,x="Le patron de conception Factory permet de déléguer la création d'objets à une classe Factory.";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.textContent=x,this.h()},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-syq1eh"&&(e.textContent=r),l=v(o),t=g(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-sjvco4"&&(t.textContent=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-k5nwdz"&&(s.textContent=p),i=v(o),$=g(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-xcpn72"&&($.textContent=x),this.h()},h(){L($,"class","text-important")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function pr(m){let e,r="Comment les serveurs passent commande ?",l,t,f="Factory",n,s,p=`Le principe : Je dis au chef de préparer une <code>&quot;Pizza&quot;</code> ou un <code>&quot;Steak&quot;</code>,
			le serveur n&#39;instancie pas une classe &quot;Pizza&quot; car il devrait sinon savoir si on fait`,i,$,x="<li><code>new Pizza(Enum.BaseCreme,[&quot;saumon&quot;,&quot;aneth&quot;],180°, &quot;240 s&quot;)</code></li> <li><code>new Steak(tartare:false)</code></li>",o,c,C=`On préfère lui passer une information standardisée et une <b>Factory</b> utilisée par le chef de
			cuisine se chargera de créer l&#39;objet.`,d,w,V='<img src="https://refactoring.guru/images/patterns/diagrams/factory-method/solution2-fr.png" alt="Factory"/>';return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.innerHTML=p,i=_(),$=h("ul"),$.innerHTML=x,o=_(),c=h("p"),c.innerHTML=C,d=_(),w=h("div"),w.innerHTML=V,this.h()},l(D){e=g(D,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-syq1eh"&&(e.textContent=r),l=v(D),t=g(D,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-sjvco4"&&(t.textContent=f),n=v(D),s=g(D,"P",{"data-svelte-h":!0}),b(s)!=="svelte-18f9g3y"&&(s.innerHTML=p),i=v(D),$=g(D,"UL",{"data-svelte-h":!0}),b($)!=="svelte-nyqhyx"&&($.innerHTML=x),o=v(D),c=g(D,"P",{"data-svelte-h":!0}),b(c)!=="svelte-1ea5q7v"&&(c.innerHTML=C),d=v(D),w=g(D,"DIV",{class:!0,"data-svelte-h":!0}),b(w)!=="svelte-110b8ns"&&(w.innerHTML=V),this.h()},h(){L(w,"class","flex justify-center")},m(D,B){u(D,e,B),u(D,l,B),u(D,t,B),u(D,n,B),u(D,s,B),u(D,i,B),u(D,$,B),u(D,o,B),u(D,c,B),u(D,d,B),u(D,w,B)},p:N,d(D){D&&(a(e),a(l),a(t),a(n),a(s),a(i),a($),a(o),a(c),a(d),a(w))}}}function mr(m){let e=`
				class Serveur {
					public Product prendreCommande(string plat) {
						return Chef.getInstance().préparer(plat);
					}
				}
				class Chef {
					public static Chef getInstance();
					public Product préparer(string plat) {
						switch(plat) {
							case "Pizza":
								return new Pizza(); // Pizza hérite de Product
							case "Steak":
								return new Steak(); // Steak hérite de Product
						}
					}
				}	
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function dr(m){let e,r="Comment les serveurs passent commande ?",l,t,f="Factory",n,s,p,i,$,x,o,c,C=`Dans notre cas, le chef est un singleton et la factory est une méthode de la classe Chef. Les
			DP se combinent !`,d;return x=new se({props:{$$slots:{default:[mr]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("div"),p=h("img"),$=_(),j(x.$$.fragment),o=_(),c=h("p"),c.textContent=C,this.h()},l(w){e=g(w,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-syq1eh"&&(e.textContent=r),l=v(w),t=g(w,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-sjvco4"&&(t.textContent=f),n=v(w),s=g(w,"DIV",{class:!0});var V=ne(s);p=g(V,"IMG",{class:!0,src:!0,alt:!0}),$=v(V),M(x.$$.fragment,V),V.forEach(a),o=v(w),c=g(w,"P",{"data-svelte-h":!0}),b(c)!=="svelte-cyiegd"&&(c.textContent=C),this.h()},h(){L(p,"class","w-2/5"),De(p.src,i="https://refactoring.guru/images/patterns/diagrams/factory-method/structure.png")||L(p,"src",i),L(p,"alt","Factory"),L(s,"class","flex items-center")},m(w,V){u(w,e,V),u(w,l,V),u(w,t,V),u(w,n,V),u(w,s,V),Q(s,p),Q(s,$),T(x,s,null),u(w,o,V),u(w,c,V),d=!0},p(w,V){const D={};V&1&&(D.$$scope={dirty:V,ctx:w}),x.$set(D)},i(w){d||(S(x.$$.fragment,w),d=!0)},o(w){q(x.$$.fragment,w),d=!1},d(w){w&&(a(e),a(l),a(t),a(n),a(s),a(o),a(c)),P(x)}}}function vr(m){let e,r="Comment le chef prévient qu'il a fini ?",l,t,f="Observer",n,s,p=`Lorsque le chef a fini de préparer un plat, il le dépose sur le comptoir. Les serveurs sont
			notifiés et peuvent alors servir le plat aux clients.`,i,$,x=`Le patron de conception Observer permet de définir une relation de type "un à plusieurs" entre
			objets, de sorte que lorsqu'un objet change d'état, tous les objets qui en dépendent sont
			notifiés et mis à jour automatiquement.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.textContent=x,this.h()},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-l8jio1"&&(e.textContent=r),l=v(o),t=g(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-ph591o"&&(t.textContent=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-4x45c1"&&(s.textContent=p),i=v(o),$=g(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1rn4b0j"&&($.textContent=x),this.h()},h(){L($,"class","text-important")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function _r(m){let e,r="Comment le chef prévient qu'il a fini ?",l,t,f="Observer",n,s,p=`Le chef ne va pas maintenir une liste de serveurs, puis lorsqu'il a fini de préparer un
			plat, appeler chacun d'entre eux, savoir s'ils sont disponibles. Imaginez qu'il ait en plus
			des serveurs des livreurs Deliveroo, c'est ingérable.`,i,$,x=`On va plutôt adopter une approche "Je préviens que j'ai fini, ceux que ça intéresse auront
			qu'à venir le chercher".`,o,c,C='<img src="https://refactoring.guru/images/patterns/content/observer/observer-comic-1-fr.png" alt="Observer"/>';return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.textContent=x,o=_(),c=h("div"),c.innerHTML=C,this.h()},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-l8jio1"&&(e.textContent=r),l=v(d),t=g(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-ph591o"&&(t.textContent=f),n=v(d),s=g(d,"P",{"data-svelte-h":!0}),b(s)!=="svelte-qt5c9m"&&(s.textContent=p),i=v(d),$=g(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-w799ge"&&($.textContent=x),o=v(d),c=g(d,"DIV",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1u60quo"&&(c.innerHTML=C),this.h()},h(){L(c,"class","flex justify-center")},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),u(d,$,w),u(d,o,w),u(d,c,w)},p:N,d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a($),a(o),a(c))}}}function xr(m){let e=`
				class Chef {
					public Product préparer(string plat) {
						var plat = new Plat();
						Publisher.getInstance().notify("ready", plat);
					}
				}	
				class Serveur implements Subscriber {
					public Serveur() {
						Publisher.getInstance().subscribe(this);
					}
					public void update(string event, Object o) {
						if(event == "ready") {
							((Product)o).servir("Table 13");
						}
					}
				}
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Cr(m){let e,r="Comment le chef prévient qu'il a fini ?",l,t,f="Observer",n,s,p,i,$,x,o,c,C=`Une fois encore, on a fait le choix que notre Publisher soit un singleton, mais on peut avoir
			plusieurs Publisher, par exemple un Publisher restaurant et un Publisher Deliveroo.`,d;return x=new se({props:{$$slots:{default:[xr]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("div"),p=h("img"),$=_(),j(x.$$.fragment),o=_(),c=h("p"),c.textContent=C,this.h()},l(w){e=g(w,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-l8jio1"&&(e.textContent=r),l=v(w),t=g(w,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-ph591o"&&(t.textContent=f),n=v(w),s=g(w,"DIV",{class:!0});var V=ne(s);p=g(V,"IMG",{class:!0,src:!0,alt:!0}),$=v(V),M(x.$$.fragment,V),V.forEach(a),o=v(w),c=g(w,"P",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-sfk3qa"&&(c.textContent=C),this.h()},h(){L(p,"class","w-2/5"),De(p.src,i="https://refactoring.guru/images/patterns/diagrams/observer/structure.png")||L(p,"src",i),L(p,"alt","Observer"),L(s,"class","flex items-center"),L(c,"class","smaller")},m(w,V){u(w,e,V),u(w,l,V),u(w,t,V),u(w,n,V),u(w,s,V),Q(s,p),Q(s,$),T(x,s,null),u(w,o,V),u(w,c,V),d=!0},p(w,V){const D={};V&1&&(D.$$scope={dirty:V,ctx:w}),x.$set(D)},i(w){d||(S(x.$$.fragment,w),d=!0)},o(w){q(x.$$.fragment,w),d=!1},d(w){w&&(a(e),a(l),a(t),a(n),a(s),a(o),a(c)),P(x)}}}function gr(m){let e,r="Ce client qui fête son anniversaire",l,t,f="Decorator",n,s,p=`Un client fête son anniversaire et demande un gâteau. Le serveur lui apporte un gâteau simple,
			mais le client demande à ce qu'on y ajoute des bougies.`,i,$,x=`Le patron de conception Decorator permet d'attacher de nouvelles fonctionnalités à des objets
			existants de manière dynamique et transparente, sans affecter leur comportement.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.textContent=x,this.h()},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1bbzra2"&&(e.textContent=r),l=v(o),t=g(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1m84yt9"&&(t.textContent=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-su940i"&&(s.textContent=p),i=v(o),$=g(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1kbudz2"&&($.textContent=x),this.h()},h(){L($,"class","text-important")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function hr(m){let e,r="Ce client qui fête son anniversaire",l,t,f="Decorator",n,s,p=`Le serveur ne va pas demander au chef de préparer un gâteau avec bougies, puis un gâteau sans
			bougies, puis un gâteau avec bougies et chantilly, puis un gâteau avec bougies, chantilly et
			glaçage au chocolat.`,i,$,x=`Il va plutôt demander un gâteau simple, puis ajouter des décorations en fonction des demandes
			du client.`,o,c,C='<img src="https://refactoring.guru/images/patterns/content/decorator/decorator-comic-1.png" alt="Decorator"/>';return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.textContent=x,o=_(),c=h("div"),c.innerHTML=C,this.h()},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1bbzra2"&&(e.textContent=r),l=v(d),t=g(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1m84yt9"&&(t.textContent=f),n=v(d),s=g(d,"P",{"data-svelte-h":!0}),b(s)!=="svelte-rakciy"&&(s.textContent=p),i=v(d),$=g(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-1ebgapo"&&($.textContent=x),o=v(d),c=g(d,"DIV",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-xlqfeu"&&(c.innerHTML=C),this.h()},h(){L(c,"class","flex justify-center")},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),u(d,$,w),u(d,o,w),u(d,c,w)},p:N,d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a($),a(o),a(c))}}}function br(m){let e=`
				class Produit {}
				class AvecUneBougieDessus extends Produit {
					public AvecUneBougieDessus(Produit p) {}
					@Override
					public void servir(string table) {
						// Bon anniversaire les ptits indiens 🪇🎺…
						p.servir(table);
					}
				}
				class Serveur implements Subscriber {
					public void update(string event, Object o) {
						if(event == "ready") {
							if(cestUnAnniversaire) {
								o = new AvecUneBougieDessus((Produit)o);
							}
							((Product)o).servir("Table 13");
						}
					}
				}
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function wr(m){let e,r="Ce client qui fête son anniversaire",l,t,f="Decorator",n,s,p,i,$,x,o;return x=new se({props:{$$slots:{default:[br]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("div"),p=h("img"),$=_(),j(x.$$.fragment),this.h()},l(c){e=g(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1bbzra2"&&(e.textContent=r),l=v(c),t=g(c,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1m84yt9"&&(t.textContent=f),n=v(c),s=g(c,"DIV",{class:!0});var C=ne(s);p=g(C,"IMG",{class:!0,src:!0,alt:!0}),$=v(C),M(x.$$.fragment,C),C.forEach(a),this.h()},h(){L(p,"class","w-2/5"),De(p.src,i="https://refactoring.guru/images/patterns/diagrams/decorator/structure.png")||L(p,"src",i),L(p,"alt","Decorator"),L(s,"class","flex items-center")},m(c,C){u(c,e,C),u(c,l,C),u(c,t,C),u(c,n,C),u(c,s,C),Q(s,p),Q(s,$),T(x,s,null),o=!0},p(c,C){const d={};C&1&&(d.$$scope={dirty:C,ctx:c}),x.$set(d)},i(c){o||(S(x.$$.fragment,c),o=!0)},o(c){q(x.$$.fragment,c),o=!1},d(c){c&&(a(e),a(l),a(t),a(n),a(s)),P(x)}}}function Lr(m){let e,r="Chacun paie sa part ou on divise ?",l,t,f="Strategy",n,s,p=`Un groupe de clients a fini de manger et doit payer l&#39;addition. Ils peuvent choisir de diviser
			l&#39;addition en parts égales ou de payer chacun sa part.<br/>
			En plus de ça, ils peuvent choisir de payer en liquide, par carte bancaire ou par ticket restaurant.`,i,$,x=`Le patron de conception Strategy permet de définir une famille d'algorithmes, de les
			encapsuler et de les rendre interchangeables.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.innerHTML=p,i=_(),$=h("p"),$.textContent=x,this.h()},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18nb8g"&&(e.textContent=r),l=v(o),t=g(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-26el53"&&(t.textContent=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-12g4z2l"&&(s.innerHTML=p),i=v(o),$=g(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1x3p561"&&($.textContent=x),this.h()},h(){L($,"class","text-important")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function Hr(m){let e,r="Chacun paie sa part ou on divise ?",l,t,f="Strategy",n,s,p=`Le serveur se charge de faire régler le client, mais comme il y a plein de cas de figure
			différents, il ne va pas faire un <code>if</code> pour chaque cas de figure.`,i,$,x="<li>Je veux payer par ticket resto <i>(valable que le midi)</i></li> <li>J&#39;ai la Mojjo <i>(il faut le prouver)</i></li> <li>En liquide mais gardez la monnaie <i>(l&#39;argent ne va pas dans la caisse directement)</i></li> <li>Sans contact <i>(le TPE fait un appel serveur pour vérifier le solde)</i></li>",o,c,C=`Extrayons chaque type de paiement dans une classe à part, et le serveur n&#39;aura qu&#39;à appeler la
			méthode <code>pay()</code> de l&#39;objet.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.innerHTML=p,i=_(),$=h("ul"),$.innerHTML=x,o=_(),c=h("p"),c.innerHTML=C},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18nb8g"&&(e.textContent=r),l=v(d),t=g(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-26el53"&&(t.textContent=f),n=v(d),s=g(d,"P",{"data-svelte-h":!0}),b(s)!=="svelte-8soov1"&&(s.innerHTML=p),i=v(d),$=g(d,"UL",{"data-svelte-h":!0}),b($)!=="svelte-vzd0n5"&&($.innerHTML=x),o=v(d),c=g(d,"P",{"data-svelte-h":!0}),b(c)!=="svelte-soo1gl"&&(c.innerHTML=C)},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),u(d,$,w),u(d,o,w),u(d,c,w)},p:N,d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a($),a(o),a(c))}}}function Pr(m){let e,r="Chacun paie sa part ou on divise ?",l,t,f="Strategy",n,s,p=`Chaque stratégie de paiement est une classe qui implémente une interface <code>PaymentStrategy</code>
			qui contient une méthode <code>pay()</code>.`,i,$,x=`Le serveur n&#39;a pas à savoir comment chaque stratégie fonctionne, il lui suffit d&#39;appeler la
			méthode <code>pay()</code> de l&#39;objet.`,o,c,C='<img src="https://refactoring.guru/images/patterns/content/strategy/strategy-comic-1-fr.png" alt="Strategy"/>';return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("p"),s.innerHTML=p,i=_(),$=h("p"),$.innerHTML=x,o=_(),c=h("div"),c.innerHTML=C,this.h()},l(d){e=g(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18nb8g"&&(e.textContent=r),l=v(d),t=g(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-26el53"&&(t.textContent=f),n=v(d),s=g(d,"P",{"data-svelte-h":!0}),b(s)!=="svelte-lvh3xh"&&(s.innerHTML=p),i=v(d),$=g(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-3626e9"&&($.innerHTML=x),o=v(d),c=g(d,"DIV",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1yf0ntb"&&(c.innerHTML=C),this.h()},h(){L(c,"class","flex justify-center")},m(d,w){u(d,e,w),u(d,l,w),u(d,t,w),u(d,n,w),u(d,s,w),u(d,i,w),u(d,$,w),u(d,o,w),u(d,c,w)},p:N,d(d){d&&(a(e),a(l),a(t),a(n),a(s),a(i),a($),a(o),a(c))}}}function qr(m){let e=`
				interface PaymentStrategy {
					public int pay();
				}
				class Serveur {
					public void régler(string table, PaymentStrategy p) {
						p.pay();
						addition[table].solde -= addition[table].montant;
					}
				}
				class TicketResto implements PaymentStrategy {
					public int pay() { }
				}
				class Liquide implements PaymentStrategy {
					public int pay() { }
				}
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Sr(m){let e,r="Chacun paie sa part ou on divise ?",l,t,f="Strategy",n,s,p,i,$,x,o,c,C=`On pourrait toujours Décorer les stratégies de paiement, pour ceux qui veulent le ticket de
			carte ou une facture TVA…<br/>Si ça devient trop compliqué, l&#39;extraire dans une Factory.`,d;return x=new se({props:{$$slots:{default:[qr]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),t=h("h4"),t.textContent=f,n=_(),s=h("div"),p=h("img"),$=_(),j(x.$$.fragment),o=_(),c=h("p"),c.innerHTML=C,this.h()},l(w){e=g(w,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18nb8g"&&(e.textContent=r),l=v(w),t=g(w,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-26el53"&&(t.textContent=f),n=v(w),s=g(w,"DIV",{class:!0});var V=ne(s);p=g(V,"IMG",{class:!0,src:!0,alt:!0}),$=v(V),M(x.$$.fragment,V),V.forEach(a),o=v(w),c=g(w,"P",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-100go0c"&&(c.innerHTML=C),this.h()},h(){L(p,"class","w-2/5"),De(p.src,i="https://refactoring.guru/images/patterns/diagrams/strategy/structure.png")||L(p,"src",i),L(p,"alt","Strategy"),L(s,"class","flex justify-center items-center"),L(c,"class","smaller")},m(w,V){u(w,e,V),u(w,l,V),u(w,t,V),u(w,n,V),u(w,s,V),Q(s,p),Q(s,$),T(x,s,null),u(w,o,V),u(w,c,V),d=!0},p(w,V){const D={};V&1&&(D.$$scope={dirty:V,ctx:w}),x.$set(D)},i(w){d||(S(x.$$.fragment,w),d=!0)},o(w){q(x.$$.fragment,w),d=!1},d(w){w&&(a(e),a(l),a(t),a(n),a(s),a(o),a(c)),P(x)}}}function Tr(m){let e,r="Conclusion",l,t,f="Les patrons de conception sont :",n,s,p="<li>Dispensables</li> <li>Très utiles</li> <li>Combinables</li> <li>Universels</li>";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("ul"),s.innerHTML=p},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-d7kqkf"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1lmqdm0"&&(t.textContent=f),n=v(i),s=g(i,"UL",{"data-svelte-h":!0}),b(s)!=="svelte-1vvkxff"&&(s.innerHTML=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function Mr(m){let e,r="Attendus",l,t,f="À l'aide du cours et du site présenté en début de chapitre, maîtrisez-en le plus possible.",n,s,p=`Sans les DP, vous savez coder en POO, mais c'est le niveau débutant. Les DP font de vous un "bien meilleur" développeur.`;return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.textContent=p},l(i){e=g(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7wwxn0"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-thji73"&&(t.textContent=f),n=v(i),s=g(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-145t8ff"&&(s.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function jr(m){let e,r="Attendus",l,t,f="Si vous donnez le TP entier à faire à une IA, il est probable qu'elle vous donne une solution avec peu de DP mais qui répond immédiatement à la demande.",n,s,p="Quand on gère le cas de la carte Mojjo ou de l'anniversaire avec la bougie, si on n'a pas eu le réflexe dès le début d'utiliser les DP, on ne fait que casser son code et recommencer.",i,$,x="Pour le projet, faites le plus de DP possible ! S'il n'y en a pas, je vous demanderai de rajouter une nouvelle fonctionnalité qui cassera tout votre code jusqu'à ce que vous soyez assez prévoyant.";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.textContent=p,i=_(),$=h("p"),$.textContent=x,this.h()},l(o){e=g(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7wwxn0"&&(e.textContent=r),l=v(o),t=g(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-nke0b0"&&(t.textContent=f),n=v(o),s=g(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-29j97r"&&(s.textContent=p),i=v(o),$=g(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-4djlv4"&&($.textContent=x),this.h()},h(){L($,"class","text-important")},m(o,c){u(o,e,c),u(o,l,c),u(o,t,c),u(o,n,c),u(o,s,c),u(o,i,c),u(o,$,c)},p:N,d(o){o&&(a(e),a(l),a(t),a(n),a(s),a(i),a($))}}}function Ar(m){let e,r,l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E,z,I,W,K,A,k,H,U,te,re,G,X,ae,y,ee,ue,oe,fe,ve,$e,xe,_e,Ce;return e=new J({props:{$$slots:{default:[rr]},$$scope:{ctx:m}}}),l=new J({props:{$$slots:{default:[ar]},$$scope:{ctx:m}}}),f=new J({props:{$$slots:{default:[ur]},$$scope:{ctx:m}}}),s=new J({props:{$$slots:{default:[or]},$$scope:{ctx:m}}}),i=new J({props:{$$slots:{default:[$r]},$$scope:{ctx:m}}}),x=new J({props:{$$slots:{default:[fr]},$$scope:{ctx:m}}}),c=new J({props:{$$slots:{default:[cr]},$$scope:{ctx:m}}}),d=new J({props:{className:"smaller",$$slots:{default:[pr]},$$scope:{ctx:m}}}),V=new J({props:{$$slots:{default:[dr]},$$scope:{ctx:m}}}),B=new J({props:{$$slots:{default:[vr]},$$scope:{ctx:m}}}),E=new J({props:{$$slots:{default:[_r]},$$scope:{ctx:m}}}),I=new J({props:{$$slots:{default:[Cr]},$$scope:{ctx:m}}}),K=new J({props:{$$slots:{default:[gr]},$$scope:{ctx:m}}}),k=new J({props:{$$slots:{default:[hr]},$$scope:{ctx:m}}}),U=new J({props:{$$slots:{default:[wr]},$$scope:{ctx:m}}}),re=new J({props:{$$slots:{default:[Lr]},$$scope:{ctx:m}}}),X=new J({props:{$$slots:{default:[Hr]},$$scope:{ctx:m}}}),y=new J({props:{$$slots:{default:[Pr]},$$scope:{ctx:m}}}),ue=new J({props:{$$slots:{default:[Sr]},$$scope:{ctx:m}}}),fe=new J({props:{$$slots:{default:[Tr]},$$scope:{ctx:m}}}),$e=new J({props:{data_background_color:"#00353F",$$slots:{default:[Mr]},$$scope:{ctx:m}}}),_e=new J({props:{data_background_color:"#00353F",$$slots:{default:[jr]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),r=_(),j(l.$$.fragment),t=_(),j(f.$$.fragment),n=_(),j(s.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(x.$$.fragment),o=_(),j(c.$$.fragment),C=_(),j(d.$$.fragment),w=_(),j(V.$$.fragment),D=_(),j(B.$$.fragment),O=_(),j(E.$$.fragment),z=_(),j(I.$$.fragment),W=_(),j(K.$$.fragment),A=_(),j(k.$$.fragment),H=_(),j(U.$$.fragment),te=_(),j(re.$$.fragment),G=_(),j(X.$$.fragment),ae=_(),j(y.$$.fragment),ee=_(),j(ue.$$.fragment),oe=_(),j(fe.$$.fragment),ve=_(),j($e.$$.fragment),xe=_(),j(_e.$$.fragment)},l(R){M(e.$$.fragment,R),r=v(R),M(l.$$.fragment,R),t=v(R),M(f.$$.fragment,R),n=v(R),M(s.$$.fragment,R),p=v(R),M(i.$$.fragment,R),$=v(R),M(x.$$.fragment,R),o=v(R),M(c.$$.fragment,R),C=v(R),M(d.$$.fragment,R),w=v(R),M(V.$$.fragment,R),D=v(R),M(B.$$.fragment,R),O=v(R),M(E.$$.fragment,R),z=v(R),M(I.$$.fragment,R),W=v(R),M(K.$$.fragment,R),A=v(R),M(k.$$.fragment,R),H=v(R),M(U.$$.fragment,R),te=v(R),M(re.$$.fragment,R),G=v(R),M(X.$$.fragment,R),ae=v(R),M(y.$$.fragment,R),ee=v(R),M(ue.$$.fragment,R),oe=v(R),M(fe.$$.fragment,R),ve=v(R),M($e.$$.fragment,R),xe=v(R),M(_e.$$.fragment,R)},m(R,le){T(e,R,le),u(R,r,le),T(l,R,le),u(R,t,le),T(f,R,le),u(R,n,le),T(s,R,le),u(R,p,le),T(i,R,le),u(R,$,le),T(x,R,le),u(R,o,le),T(c,R,le),u(R,C,le),T(d,R,le),u(R,w,le),T(V,R,le),u(R,D,le),T(B,R,le),u(R,O,le),T(E,R,le),u(R,z,le),T(I,R,le),u(R,W,le),T(K,R,le),u(R,A,le),T(k,R,le),u(R,H,le),T(U,R,le),u(R,te,le),T(re,R,le),u(R,G,le),T(X,R,le),u(R,ae,le),T(y,R,le),u(R,ee,le),T(ue,R,le),u(R,oe,le),T(fe,R,le),u(R,ve,le),T($e,R,le),u(R,xe,le),T(_e,R,le),Ce=!0},p(R,le){const ce={};le&1&&(ce.$$scope={dirty:le,ctx:R}),e.$set(ce);const pe={};le&1&&(pe.$$scope={dirty:le,ctx:R}),l.$set(pe);const F={};le&1&&(F.$$scope={dirty:le,ctx:R}),f.$set(F);const ie={};le&1&&(ie.$$scope={dirty:le,ctx:R}),s.$set(ie);const we={};le&1&&(we.$$scope={dirty:le,ctx:R}),i.$set(we);const Pe={};le&1&&(Pe.$$scope={dirty:le,ctx:R}),x.$set(Pe);const Le={};le&1&&(Le.$$scope={dirty:le,ctx:R}),c.$set(Le);const Te={};le&1&&(Te.$$scope={dirty:le,ctx:R}),d.$set(Te);const qe={};le&1&&(qe.$$scope={dirty:le,ctx:R}),V.$set(qe);const Me={};le&1&&(Me.$$scope={dirty:le,ctx:R}),B.$set(Me);const Se={};le&1&&(Se.$$scope={dirty:le,ctx:R}),E.$set(Se);const je={};le&1&&(je.$$scope={dirty:le,ctx:R}),I.$set(je);const Ae={};le&1&&(Ae.$$scope={dirty:le,ctx:R}),K.$set(Ae);const ke={};le&1&&(ke.$$scope={dirty:le,ctx:R}),k.$set(ke);const Ee={};le&1&&(Ee.$$scope={dirty:le,ctx:R}),U.$set(Ee);const ze={};le&1&&(ze.$$scope={dirty:le,ctx:R}),re.$set(ze);const Ie={};le&1&&(Ie.$$scope={dirty:le,ctx:R}),X.$set(Ie);const Oe={};le&1&&(Oe.$$scope={dirty:le,ctx:R}),y.$set(Oe);const Ue={};le&1&&(Ue.$$scope={dirty:le,ctx:R}),ue.$set(Ue);const Ve={};le&1&&(Ve.$$scope={dirty:le,ctx:R}),fe.$set(Ve);const Be={};le&1&&(Be.$$scope={dirty:le,ctx:R}),$e.$set(Be);const Je={};le&1&&(Je.$$scope={dirty:le,ctx:R}),_e.$set(Je)},i(R){Ce||(S(e.$$.fragment,R),S(l.$$.fragment,R),S(f.$$.fragment,R),S(s.$$.fragment,R),S(i.$$.fragment,R),S(x.$$.fragment,R),S(c.$$.fragment,R),S(d.$$.fragment,R),S(V.$$.fragment,R),S(B.$$.fragment,R),S(E.$$.fragment,R),S(I.$$.fragment,R),S(K.$$.fragment,R),S(k.$$.fragment,R),S(U.$$.fragment,R),S(re.$$.fragment,R),S(X.$$.fragment,R),S(y.$$.fragment,R),S(ue.$$.fragment,R),S(fe.$$.fragment,R),S($e.$$.fragment,R),S(_e.$$.fragment,R),Ce=!0)},o(R){q(e.$$.fragment,R),q(l.$$.fragment,R),q(f.$$.fragment,R),q(s.$$.fragment,R),q(i.$$.fragment,R),q(x.$$.fragment,R),q(c.$$.fragment,R),q(d.$$.fragment,R),q(V.$$.fragment,R),q(B.$$.fragment,R),q(E.$$.fragment,R),q(I.$$.fragment,R),q(K.$$.fragment,R),q(k.$$.fragment,R),q(U.$$.fragment,R),q(re.$$.fragment,R),q(X.$$.fragment,R),q(y.$$.fragment,R),q(ue.$$.fragment,R),q(fe.$$.fragment,R),q($e.$$.fragment,R),q(_e.$$.fragment,R),Ce=!1},d(R){R&&(a(r),a(t),a(n),a(p),a($),a(o),a(C),a(w),a(D),a(O),a(z),a(W),a(A),a(H),a(te),a(G),a(ae),a(ee),a(oe),a(ve),a(xe)),P(e,R),P(l,R),P(f,R),P(s,R),P(i,R),P(x,R),P(c,R),P(d,R),P(V,R),P(B,R),P(E,R),P(I,R),P(K,R),P(k,R),P(U,R),P(re,R),P(X,R),P(y,R),P(ue,R),P(fe,R),P($e,R),P(_e,R)}}}function kr(m){let e,r;return e=new J({props:{$$slots:{default:[Ar]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},p(l,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:l}),e.$set(f)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}class Dr extends he{constructor(e){super(),be(this,e,null,kr,ge,{})}}function Er(m){let e,r="Programmation Orientée Objet",l,t,f,n="Version imprimable 🖨",s,p,i,$="Version défilable",x,o,c,C="Lien vers les TP/TD",d,w,V,D="Annexes",B,O,E,z,I="Feedback",W,K,A,k,H="Révisions";return{c(){e=h("h1"),l=Y(r),t=_(),f=h("a"),f.textContent=n,s=h("br"),p=_(),i=h("a"),i.textContent=$,x=h("br"),o=_(),c=h("a"),c.textContent=C,d=h("br"),w=_(),V=h("a"),V.textContent=D,B=_(),O=h("br"),E=_(),z=h("a"),z.textContent=I,W=_(),K=h("br"),A=_(),k=h("a"),k.textContent=H,this.h()},l(U){e=g(U,"H1",{class:!0});var te=ne(e);l=Z(te,r),te.forEach(a),t=v(U),f=g(U,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),b(f)!=="svelte-mxju2i"&&(f.textContent=n),s=g(U,"BR",{}),p=v(U),i=g(U,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),b(i)!=="svelte-1ei5a4k"&&(i.textContent=$),x=g(U,"BR",{}),o=v(U),c=g(U,"A",{class:!0,href:!0,"data-svelte-h":!0}),b(c)!=="svelte-g1grt8"&&(c.textContent=C),d=g(U,"BR",{}),w=v(U),V=g(U,"A",{class:!0,href:!0,"data-svelte-h":!0}),b(V)!=="svelte-1xni7oa"&&(V.textContent=D),B=v(U),O=g(U,"BR",{}),E=v(U),z=g(U,"A",{class:!0,href:!0,"data-svelte-h":!0}),b(z)!=="svelte-1mxxtmy"&&(z.textContent=I),W=v(U),K=g(U,"BR",{}),A=v(U),k=g(U,"A",{class:!0,target:!0,href:!0,"data-svelte-h":!0}),b(k)!=="svelte-1blwm3v"&&(k.textContent=H),this.h()},h(){L(e,"class","capitalize"),L(f,"class","print:hidden"),L(f,"href","/?print-pdf"),L(f,"target","_blank"),L(i,"class","print:hidden"),L(i,"href","/?view=scroll"),L(i,"target","_blank"),L(c,"class","print:hidden"),L(c,"href","#/exercices"),L(V,"class","print:hidden"),L(V,"href","#/annexes"),L(z,"class","print:hidden !text-red-600 m-2 "),L(z,"href","#feedback"),L(k,"class","print:hidden !text-red-600 m-2 "),L(k,"target","_blank"),L(k,"href","/revisions")},m(U,te){u(U,e,te),Q(e,l),u(U,t,te),u(U,f,te),u(U,s,te),u(U,p,te),u(U,i,te),u(U,x,te),u(U,o,te),u(U,c,te),u(U,d,te),u(U,w,te),u(U,V,te),u(U,B,te),u(U,O,te),u(U,E,te),u(U,z,te),u(U,W,te),u(U,K,te),u(U,A,te),u(U,k,te)},p:N,d(U){U&&(a(e),a(t),a(f),a(s),a(p),a(i),a(x),a(o),a(c),a(d),a(w),a(V),a(B),a(O),a(E),a(z),a(W),a(K),a(A),a(k))}}}function zr(m){let e,r="Présentation du module",l,t,f="<li>Pourquoi la POO</li> <li>Mise en oeuvre en Java</li> <li>Concepts avancés</li> <li>Projet</li>";return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-177x7c7"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-hd22yd"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Ir(m){let e,r="Déroulé",l,t,f="<li>CM en début de cours</li> <li>TD</li> <li>TP/Projet</li>";return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("ol"),t.innerHTML=f},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-171i1ti"&&(e.textContent=r),l=v(n),t=g(n,"OL",{"data-svelte-h":!0}),b(t)!=="svelte-se5tp"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Or(m){let e,r="Modalités d'examen",l,t,f="<li>DS portant sur ce qui est abordé en <b>TD</b></li> <li>Projet</li> <li>Contrôle continu sur la rigueur en cours</li>";return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-j3zjqb"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1kc7567"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Ur(m){let e,r="Mise en place des TDs/TPs",l,t,f="Les TD et TP sont à commit régulièrement sur votre dépôt git (voir démonstration)",n,s,p="Seul le projet est à réaliser en binôme";return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("p"),t.textContent=f,n=_(),s=h("p"),s.textContent=p},l(i){e=g(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1xm0e99"&&(e.textContent=r),l=v(i),t=g(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-6avelo"&&(t.textContent=f),n=v(i),s=g(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1ufx4cd"&&(s.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function Vr(m){let e,r,l,t,f,n,s,p;return e=new J({props:{$$slots:{default:[zr]},$$scope:{ctx:m}}}),l=new J({props:{$$slots:{default:[Ir]},$$scope:{ctx:m}}}),f=new J({props:{$$slots:{default:[Or]},$$scope:{ctx:m}}}),s=new J({props:{$$slots:{default:[Ur]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),r=_(),j(l.$$.fragment),t=_(),j(f.$$.fragment),n=_(),j(s.$$.fragment)},l(i){M(e.$$.fragment,i),r=v(i),M(l.$$.fragment,i),t=v(i),M(f.$$.fragment,i),n=v(i),M(s.$$.fragment,i)},m(i,$){T(e,i,$),u(i,r,$),T(l,i,$),u(i,t,$),T(f,i,$),u(i,n,$),T(s,i,$),p=!0},p(i,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:i}),e.$set(x);const o={};$&1&&(o.$$scope={dirty:$,ctx:i}),l.$set(o);const c={};$&1&&(c.$$scope={dirty:$,ctx:i}),f.$set(c);const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),s.$set(C)},i(i){p||(S(e.$$.fragment,i),S(l.$$.fragment,i),S(f.$$.fragment,i),S(s.$$.fragment,i),p=!0)},o(i){q(e.$$.fragment,i),q(l.$$.fragment,i),q(f.$$.fragment,i),q(s.$$.fragment,i),p=!1},d(i){i&&(a(r),a(t),a(n)),P(e,i),P(l,i),P(f,i),P(s,i)}}}function Br(m){let e,r="Les concepts de la POO",l,t,f="<li>Généralités</li> <li>L&#39;héritage</li> <li>La composition</li> <li>Les interfaces</li> <li>L&#39;encapsulation</li> <li>Le polymorphisme</li>";return{c(){e=h("h3"),e.textContent=r,l=_(),t=h("ol"),t.innerHTML=f},l(n){e=g(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1thzgzl"&&(e.textContent=r),l=v(n),t=g(n,"OL",{"data-svelte-h":!0}),b(t)!=="svelte-136at1n"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Jr(m){let e,r="Séance 2";return{c(){e=h("h3"),e.textContent=r},l(l){e=g(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-h3jurd"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function Nr(m){let e,r="Quelle est la différence entre une classe mère et une classe fille ?",l,t,f=`Une classe mère est une classe dont les propriétés et méthodes peuvent être héritées par une
			classe fille. <br/>
			Une classe fille est une classe qui hérite des propriétés et méthodes d&#39;une classe mère.
			<br/> <span class="font-bold text-orange-400">D&#39;une manière générale on doit pouvoir dire &quot;Un chien est un animal&quot; ou &quot;Un bateau est un
				véhicule&quot; ; Animaux et véhicules sont des classes mères. Chien et bateau sont des classes
				filles.</span>`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1vjx2bc"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1obzin6"&&(t.innerHTML=f),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Rr(m){let e,r="Une classe peut-elle hériter de plusieurs classes ?",l,t,f=`Non, en Java une classe ne peut hériter que d'une seule classe. Cependant, elle peut\r
			implémenter plusieurs interfaces.`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),t.textContent=f,this.h()},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-7y0j9h"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1g53i9w"&&(t.textContent=f),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Fr(m){let e,r="Qu'est ce qu'une classe abstraite ?",l,t,f=`Une classe abstraite est une classe qui ne peut pas être instanciée et qui peut contenir des
			méthodes abstraites, c&#39;est-à-dire des méthodes sans implémentation. <br/> <span class="font-bold text-orange-400">Généralement, on utilise une classe abstraite pour représenter un concept général qui ne
				peut être instancié directement.</span>`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1g8priv"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-18yooat"&&(t.innerHTML=f),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function yr(m){let e=`
				class Animal {
					void crier(){
						print("Je suis un animal");
					}
				}
				class Chien extends Animal {
					@Override
					void crier(){
						print("Wouaf wouaf");
					}
				}
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Gr(m){let e,r="Comment redéfinir une méthode dans une classe fille ?",l,t,f,n,s;return n=new se({props:{$$slots:{default:[yr]},$$scope:{ctx:m}}}),{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),f=Y(`Pour redéfinir une méthode dans une classe fille, on utilise le mot-clé @Override au-dessus de\r
			la méthode redéfinie.\r
			`),j(n.$$.fragment),this.h()},l(p){e=g(p,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-ihc9m7"&&(e.textContent=r),l=v(p),t=g(p,"DIV",{class:!0});var i=ne(t);f=Z(i,`Pour redéfinir une méthode dans une classe fille, on utilise le mot-clé @Override au-dessus de\r
			la méthode redéfinie.\r
			`),M(n.$$.fragment,i),i.forEach(a),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(p,i){u(p,e,i),u(p,l,i),u(p,t,i),Q(t,f),T(n,t,null),s=!0},p(p,i){const $={};i&1&&($.$$scope={dirty:i,ctx:p}),n.$set($)},i(p){s||(S(n.$$.fragment,p),s=!0)},o(p){q(n.$$.fragment,p),s=!1},d(p){p&&(a(e),a(l),a(t)),P(n)}}}function Qr(m){let e,r="Qu'est-ce que l'encapsulation ? Pourquoi est-elle importante ?",l,t,f=`L&#39;encapsulation est un concept de la POO qui consiste à cacher les détails internes d&#39;une
			classe et à ne fournir qu&#39;une interface publique pour interagir avec cette classe. <br/> <span class="font-bold text-orange-400">Elle permet de protéger les données et de contrôler leur accès.</span>
			Par exemple, si l&#39;on a un attribut <code>taille</code> dans une classe <code>Personne</code>,
			on ne veut pas que la taille soit négative. On peut donc contrôler l&#39;accès à cet attribut en
			le déclarant privé et en fournissant des méthodes publiques pour y accéder et le modifier.`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-xg99l8"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-10lcfdv"&&(t.innerHTML=f),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Wr(m){let e=`
				class Personne {
					private String nom;

					public String getNom() {
						return nom;
					}

					public void setNom(String nom) {
						this.nom = nom;
					}				
				}
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Kr(m){let e,r="Comment implémenter l'encapsulation en Java ?",l,t,f,n,s="private",p,i,$="public",x,o,c="protected",C,d,w,V,D,B,O;return B=new se({props:{$$slots:{default:[Wr]},$$scope:{ctx:m}}}),{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),f=Y("Pour implémenter l'encapsulation en Java, on utilise des modificateurs d'accès comme "),n=h("code"),n.textContent=s,p=Y(", "),i=h("code"),i.textContent=$,x=Y(", et "),o=h("code"),o.textContent=c,C=Y(". "),d=h("br"),w=Y(`\r
			Puis, on utilise des méthodes publiques, appelées accesseurs et mutateurs, pour accéder et modifier\r
			les attributs privés. `),V=h("br"),D=_(),j(B.$$.fragment),this.h()},l(E){e=g(E,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-3xw39a"&&(e.textContent=r),l=v(E),t=g(E,"DIV",{class:!0});var z=ne(t);f=Z(z,"Pour implémenter l'encapsulation en Java, on utilise des modificateurs d'accès comme "),n=g(z,"CODE",{"data-svelte-h":!0}),b(n)!=="svelte-1f3qn4i"&&(n.textContent=s),p=Z(z,", "),i=g(z,"CODE",{"data-svelte-h":!0}),b(i)!=="svelte-1bnzrax"&&(i.textContent=$),x=Z(z,", et "),o=g(z,"CODE",{"data-svelte-h":!0}),b(o)!=="svelte-cawnbs"&&(o.textContent=c),C=Z(z,". "),d=g(z,"BR",{}),w=Z(z,`\r
			Puis, on utilise des méthodes publiques, appelées accesseurs et mutateurs, pour accéder et modifier\r
			les attributs privés. `),V=g(z,"BR",{}),D=v(z),M(B.$$.fragment,z),z.forEach(a),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(E,z){u(E,e,z),u(E,l,z),u(E,t,z),Q(t,f),Q(t,n),Q(t,p),Q(t,i),Q(t,x),Q(t,o),Q(t,C),Q(t,d),Q(t,w),Q(t,V),Q(t,D),T(B,t,null),O=!0},p(E,z){const I={};z&1&&(I.$$scope={dirty:z,ctx:E}),B.$set(I)},i(E){O||(S(B.$$.fragment,E),O=!0)},o(E){q(B.$$.fragment,E),O=!1},d(E){E&&(a(e),a(l),a(t)),P(B)}}}function Zr(m){let e,r="Qu'est-ce qu'une interface en Java ?",l,t,f=`Une interface est un type de référence en Java qui ne contient que des méthodes sans
			implémentation. <br/> <span class="font-bold text-orange-400">Elle permet de définir un contrat que les classes doivent respecter.</span>`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-qhrkb2"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1g1gl0r"&&(t.innerHTML=f),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function Yr(m){let e=`
				public interface ArticleLouable {
					float reserver(Date from, Date to);
					float rendre(int penalite);
				}

				public class SiegeAuto implements ArticleLouable {
					@Override
					public float reserver(Date from, Date to) {
						// ...
					}

					@Override
					public float rendre(int penalite) {
						// ...
					}
				}
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function Xr(m){let e,r="Comment implémenter une interface en Java ?",l,t,f,n,s="implements",p,i,$,x,o;return x=new se({props:{$$slots:{default:[Yr]},$$scope:{ctx:m}}}),{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),f=Y("Pour implémenter une interface en Java, une classe doit utiliser le mot-clé "),n=h("code"),n.textContent=s,p=Y(`\r
			et fournir une implémentation pour toutes les méthodes de l'interface. `),i=h("br"),$=_(),j(x.$$.fragment),this.h()},l(c){e=g(c,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-p64hds"&&(e.textContent=r),l=v(c),t=g(c,"DIV",{class:!0});var C=ne(t);f=Z(C,"Pour implémenter une interface en Java, une classe doit utiliser le mot-clé "),n=g(C,"CODE",{"data-svelte-h":!0}),b(n)!=="svelte-1ljpoqf"&&(n.textContent=s),p=Z(C,`\r
			et fournir une implémentation pour toutes les méthodes de l'interface. `),i=g(C,"BR",{}),$=v(C),M(x.$$.fragment,C),C.forEach(a),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(c,C){u(c,e,C),u(c,l,C),u(c,t,C),Q(t,f),Q(t,n),Q(t,p),Q(t,i),Q(t,$),T(x,t,null),o=!0},p(c,C){const d={};C&1&&(d.$$scope={dirty:C,ctx:c}),x.$set(d)},i(c){o||(S(x.$$.fragment,c),o=!0)},o(c){q(x.$$.fragment,c),o=!1},d(c){c&&(a(e),a(l),a(t)),P(x)}}}function ea(m){let e,r="Quelle est la différence entre une classe abstraite et une interface ?",l,t,f=`Une classe abstraite peut contenir des méthodes avec une implémentation, tandis qu&#39;une
			interface ne contient que des méthodes abstraites. <br/> <span class="font-bold text-orange-400">Une classe peut hériter d&#39;une seule classe abstraite mais peut implémenter plusieurs
				interfaces.</span>`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-sppbab"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1htd280"&&(t.innerHTML=f),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function ta(m){let e,r="Commet choisir entre une classe abstraite et une interface ?",l,t,f=`Pour choisir entre une classe abstraite et une interface, il faut se poser la question de la
			relation entre les classes. <br/>
			Si la relation est de type &quot;est un&quot;, alors une classe abstraite est plus appropriée. <br/>
			Si la relation est de type &quot;peut faire&quot;, alors une interface est plus appropriée. <br/>
			Par exemple, un Avion et un Oiseau sont tous deux des objets qui peuvent voler, mais ils ne partagent
			pas nécessairement une relation de type &quot;est un&quot;. <br/>
			Dans ce cas, il est plus approprié d&#39;utiliser une interface <code>IVolant</code>.`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-15vllnj"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-19rffgv"&&(t.innerHTML=f),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function la(m){let e=`
				interface Volant {
					void voler();
				}

				interface Nageur {
					void nager();
				}

				class Canard implements Volant, Nageur {
						// ...
						// ...			
				} 
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function na(m){let e,r="Comment utiliser les interfaces pour simuler l'héritage multiple ?",l,t,f,n,s,p,i;return p=new se({props:{$$slots:{default:[la]},$$scope:{ctx:m}}}),{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),f=Y(`En Java, une classe ne peut hériter que d'une seule classe, mais elle peut implémenter\r
			plusieurs interfaces. Cela permet de simuler l'héritage multiple en définissant plusieurs\r
			interfaces que la classe doit implémenter. `),n=h("br"),s=_(),j(p.$$.fragment),this.h()},l($){e=g($,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-15pjdo"&&(e.textContent=r),l=v($),t=g($,"DIV",{class:!0});var x=ne(t);f=Z(x,`En Java, une classe ne peut hériter que d'une seule classe, mais elle peut implémenter\r
			plusieurs interfaces. Cela permet de simuler l'héritage multiple en définissant plusieurs\r
			interfaces que la classe doit implémenter. `),n=g(x,"BR",{}),s=v(x),M(p.$$.fragment,x),x.forEach(a),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m($,x){u($,e,x),u($,l,x),u($,t,x),Q(t,f),Q(t,n),Q(t,s),T(p,t,null),i=!0},p($,x){const o={};x&1&&(o.$$scope={dirty:x,ctx:$}),p.$set(o)},i($){i||(S(p.$$.fragment,$),i=!0)},o($){q(p.$$.fragment,$),i=!1},d($){$&&(a(e),a(l),a(t)),P(p)}}}function sa(m){let e,r="Qu'est-ce que la composition en POO ?",l,t,f=`La composition est un concept de la POO qui permet de créer des objets complexes en combinant
			des objets plus simples. <br/> <span class="font-bold text-orange-400">Elle consiste à avoir des instances de classes en tant qu&#39;attributs d&#39;une autre classe.</span>`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-y5qgqo"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1cj1jzg"&&(t.innerHTML=f),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function ia(m){let e=`
				class Moteur {
					void demarrer() {
						// ...
					}
				}

				class Voiture {
					private Moteur moteur;

					Voiture() {
						this.moteur = new Moteur();
					}

					void conduire() {
						moteur.demarrer();
						// ...
					}
				}
				`,r;return{c(){r=Y(e)},l(l){r=Z(l,e)},m(l,t){u(l,r,t)},p:N,d(l){l&&a(r)}}}function ra(m){let e,r="Donnez un exemple de composition en Java.",l,t,f,n;return f=new se({props:{$$slots:{default:[ia]},$$scope:{ctx:m}}}),{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),j(f.$$.fragment),this.h()},l(s){e=g(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-9ezb79"&&(e.textContent=r),l=v(s),t=g(s,"DIV",{class:!0});var p=ne(t);M(f.$$.fragment,p),p.forEach(a),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(s,p){u(s,e,p),u(s,l,p),u(s,t,p),T(f,t,null),n=!0},p(s,p){const i={};p&1&&(i.$$scope={dirty:p,ctx:s}),f.$set(i)},i(s){n||(S(f.$$.fragment,s),n=!0)},o(s){q(f.$$.fragment,s),n=!1},d(s){s&&(a(e),a(l),a(t)),P(f)}}}function aa(m){let e,r="Qu'est-ce qu'une interface marqueur ?",l,t,f=`Une interface marqueur est une interface sans méthode, utilisée pour étiqueter une classe. <br/> <span class="font-bold text-orange-400">On découvrira plus tard que les annotations sont une alternative plus puissante aux
				interfaces marqueurs.</span>`;return{c(){e=h("h2"),e.textContent=r,l=_(),t=h("div"),t.innerHTML=f,this.h()},l(n){e=g(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-9are5n"&&(e.textContent=r),l=v(n),t=g(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1qoywxi"&&(t.innerHTML=f),this.h()},h(){L(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function ua(m){let e,r="Révisions",l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E,z,I,W,K,A,k,H,U,te,re;return t=new J({props:{$$slots:{default:[Nr]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[Rr]},$$scope:{ctx:m}}}),p=new J({props:{$$slots:{default:[Fr]},$$scope:{ctx:m}}}),$=new J({props:{$$slots:{default:[Gr]},$$scope:{ctx:m}}}),o=new J({props:{$$slots:{default:[Qr]},$$scope:{ctx:m}}}),C=new J({props:{$$slots:{default:[Kr]},$$scope:{ctx:m}}}),w=new J({props:{$$slots:{default:[Zr]},$$scope:{ctx:m}}}),D=new J({props:{$$slots:{default:[Xr]},$$scope:{ctx:m}}}),O=new J({props:{$$slots:{default:[ea]},$$scope:{ctx:m}}}),z=new J({props:{$$slots:{default:[ta]},$$scope:{ctx:m}}}),W=new J({props:{$$slots:{default:[na]},$$scope:{ctx:m}}}),A=new J({props:{$$slots:{default:[sa]},$$scope:{ctx:m}}}),H=new J({props:{$$slots:{default:[ra]},$$scope:{ctx:m}}}),te=new J({props:{$$slots:{default:[aa]},$$scope:{ctx:m}}}),{c(){e=h("h3"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment),s=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),x=_(),j(o.$$.fragment),c=_(),j(C.$$.fragment),d=_(),j(w.$$.fragment),V=_(),j(D.$$.fragment),B=_(),j(O.$$.fragment),E=_(),j(z.$$.fragment),I=_(),j(W.$$.fragment),K=_(),j(A.$$.fragment),k=_(),j(H.$$.fragment),U=_(),j(te.$$.fragment)},l(G){e=g(G,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-zmditw"&&(e.textContent=r),l=v(G),M(t.$$.fragment,G),f=v(G),M(n.$$.fragment,G),s=v(G),M(p.$$.fragment,G),i=v(G),M($.$$.fragment,G),x=v(G),M(o.$$.fragment,G),c=v(G),M(C.$$.fragment,G),d=v(G),M(w.$$.fragment,G),V=v(G),M(D.$$.fragment,G),B=v(G),M(O.$$.fragment,G),E=v(G),M(z.$$.fragment,G),I=v(G),M(W.$$.fragment,G),K=v(G),M(A.$$.fragment,G),k=v(G),M(H.$$.fragment,G),U=v(G),M(te.$$.fragment,G)},m(G,X){u(G,e,X),u(G,l,X),T(t,G,X),u(G,f,X),T(n,G,X),u(G,s,X),T(p,G,X),u(G,i,X),T($,G,X),u(G,x,X),T(o,G,X),u(G,c,X),T(C,G,X),u(G,d,X),T(w,G,X),u(G,V,X),T(D,G,X),u(G,B,X),T(O,G,X),u(G,E,X),T(z,G,X),u(G,I,X),T(W,G,X),u(G,K,X),T(A,G,X),u(G,k,X),T(H,G,X),u(G,U,X),T(te,G,X),re=!0},p(G,X){const ae={};X&1&&(ae.$$scope={dirty:X,ctx:G}),t.$set(ae);const y={};X&1&&(y.$$scope={dirty:X,ctx:G}),n.$set(y);const ee={};X&1&&(ee.$$scope={dirty:X,ctx:G}),p.$set(ee);const ue={};X&1&&(ue.$$scope={dirty:X,ctx:G}),$.$set(ue);const oe={};X&1&&(oe.$$scope={dirty:X,ctx:G}),o.$set(oe);const fe={};X&1&&(fe.$$scope={dirty:X,ctx:G}),C.$set(fe);const ve={};X&1&&(ve.$$scope={dirty:X,ctx:G}),w.$set(ve);const $e={};X&1&&($e.$$scope={dirty:X,ctx:G}),D.$set($e);const xe={};X&1&&(xe.$$scope={dirty:X,ctx:G}),O.$set(xe);const _e={};X&1&&(_e.$$scope={dirty:X,ctx:G}),z.$set(_e);const Ce={};X&1&&(Ce.$$scope={dirty:X,ctx:G}),W.$set(Ce);const R={};X&1&&(R.$$scope={dirty:X,ctx:G}),A.$set(R);const le={};X&1&&(le.$$scope={dirty:X,ctx:G}),H.$set(le);const ce={};X&1&&(ce.$$scope={dirty:X,ctx:G}),te.$set(ce)},i(G){re||(S(t.$$.fragment,G),S(n.$$.fragment,G),S(p.$$.fragment,G),S($.$$.fragment,G),S(o.$$.fragment,G),S(C.$$.fragment,G),S(w.$$.fragment,G),S(D.$$.fragment,G),S(O.$$.fragment,G),S(z.$$.fragment,G),S(W.$$.fragment,G),S(A.$$.fragment,G),S(H.$$.fragment,G),S(te.$$.fragment,G),re=!0)},o(G){q(t.$$.fragment,G),q(n.$$.fragment,G),q(p.$$.fragment,G),q($.$$.fragment,G),q(o.$$.fragment,G),q(C.$$.fragment,G),q(w.$$.fragment,G),q(D.$$.fragment,G),q(O.$$.fragment,G),q(z.$$.fragment,G),q(W.$$.fragment,G),q(A.$$.fragment,G),q(H.$$.fragment,G),q(te.$$.fragment,G),re=!1},d(G){G&&(a(e),a(l),a(f),a(s),a(i),a(x),a(c),a(d),a(V),a(B),a(E),a(I),a(K),a(k),a(U)),P(t,G),P(n,G),P(p,G),P($,G),P(o,G),P(C,G),P(w,G),P(D,G),P(O,G),P(z,G),P(W,G),P(A,G),P(H,G),P(te,G)}}}function oa(m){let e,r="Séance 3";return{c(){e=h("h3"),e.textContent=r},l(l){e=g(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ycjlta"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function $a(m){let e,r="Nous avons vu les concepts de base de la POO en Java :",l,t,f="<li>L&#39;héritage</li> <li>La composition</li> <li>Les interfaces</li> <li>L&#39;encapsulation</li> <li>Le polymorphisme</li>",n,s,p="Assurez vous de savoir définir chacun de ce concepts et de savoir les différencier.";return{c(){e=h("p"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f,n=_(),s=h("p"),s.textContent=p},l(i){e=g(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-amskfb"&&(e.textContent=r),l=v(i),t=g(i,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1ddn4m5"&&(t.innerHTML=f),n=v(i),s=g(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-frup46"&&(s.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,n,$),u(i,s,$)},p:N,d(i){i&&(a(e),a(l),a(t),a(n),a(s))}}}function fa(m){let e,r='En complément, nous avons abordé des notions "avancées" :',l,t,f="<li>La généricité</li> <li>Les collections</li> <li>Les lambdas / programmation fonctionnelle</li> <li>Les classes et méthodes statiques</li>";return{c(){e=h("p"),e.textContent=r,l=_(),t=h("ul"),t.innerHTML=f},l(n){e=g(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-18k7ohe"&&(e.textContent=r),l=v(n),t=g(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1qhua8d"&&(t.innerHTML=f)},m(n,s){u(n,e,s),u(n,l,s),u(n,t,s)},p:N,d(n){n&&(a(e),a(l),a(t))}}}function ca(m){let e,r="Rappels",l,t,f,n,s;return t=new J({props:{$$slots:{default:[$a]},$$scope:{ctx:m}}}),n=new J({props:{$$slots:{default:[fa]},$$scope:{ctx:m}}}),{c(){e=h("h2"),e.textContent=r,l=_(),j(t.$$.fragment),f=_(),j(n.$$.fragment)},l(p){e=g(p,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-dv36h9"&&(e.textContent=r),l=v(p),M(t.$$.fragment,p),f=v(p),M(n.$$.fragment,p)},m(p,i){u(p,e,i),u(p,l,i),T(t,p,i),u(p,f,i),T(n,p,i),s=!0},p(p,i){const $={};i&1&&($.$$scope={dirty:i,ctx:p}),t.$set($);const x={};i&1&&(x.$$scope={dirty:i,ctx:p}),n.$set(x)},i(p){s||(S(t.$$.fragment,p),S(n.$$.fragment,p),s=!0)},o(p){q(t.$$.fragment,p),q(n.$$.fragment,p),s=!1},d(p){p&&(a(e),a(l),a(f)),P(t,p),P(n,p)}}}function pa(m){let e,r="Fin du cours";return{c(){e=h("h1"),e.textContent=r},l(l){e=g(l,"H1",{"data-svelte-h":!0}),b(e)!=="svelte-qfllbu"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function ma(m){let e,r="Ouvrir dans un nouvel onglet",l,t,f="Chargement…",n;return{c(){e=h("a"),e.textContent=r,l=_(),t=h("iframe"),t.textContent=f,this.h()},l(s){e=g(s,"A",{href:!0,target:!0,"data-svelte-h":!0}),b(e)!=="svelte-1dgy70a"&&(e.textContent=r),l=v(s),t=g(s,"IFRAME",{src:!0,width:!0,height:!0,frameborder:!0,marginheight:!0,marginwidth:!0,"data-svelte-h":!0}),b(t)!=="svelte-t2p0ms"&&(t.textContent=f),this.h()},h(){L(e,"href","https://forms.gle/rajvogoRgbi4vWog7"),L(e,"target","_blank"),De(t.src,n="https://docs.google.com/forms/d/e/1FAIpQLSfzgCbzh3EwDfvDsH0w6VfgvnqRvB06hgDPcC-A7rrd_Skrfg/viewform?embedded=true")||L(t,"src",n),L(t,"width","1920"),L(t,"height","1080"),L(t,"frameborder","0"),L(t,"marginheight","0"),L(t,"marginwidth","0")},m(s,p){u(s,e,p),u(s,l,p),u(s,t,p)},p:N,d(s){s&&(a(e),a(l),a(t))}}}function da(m){let e,r="Annexes";return{c(){e=h("h1"),e.textContent=r},l(l){e=g(l,"H1",{"data-svelte-h":!0}),b(e)!=="svelte-lwu4ok"&&(e.textContent=r)},m(l,t){u(l,e,t)},p:N,d(l){l&&a(e)}}}function va(m){let e,r,l,t;return e=new J({props:{$$slots:{default:[da]},$$scope:{ctx:m}}}),l=new ss({}),{c(){j(e.$$.fragment),r=_(),j(l.$$.fragment)},l(f){M(e.$$.fragment,f),r=v(f),M(l.$$.fragment,f)},m(f,n){T(e,f,n),u(f,r,n),T(l,f,n),t=!0},p(f,n){const s={};n&1&&(s.$$scope={dirty:n,ctx:f}),e.$set(s)},i(f){t||(S(e.$$.fragment,f),S(l.$$.fragment,f),t=!0)},o(f){q(e.$$.fragment,f),q(l.$$.fragment,f),t=!1},d(f){f&&a(r),P(e,f),P(l,f)}}}function _a(m){let e,r,l,t,f,n,s,p,i,$,x,o,c,C,d,w,V,D,B,O,E,z,I,W,K,A,k,H,U,te,re,G,X,ae,y,ee,ue,oe,fe,ve,$e,xe,_e,Ce,R,le,ce,pe;return e=new J({props:{animate:!0,$$slots:{default:[Er]},$$scope:{ctx:m}}}),l=new J({props:{data_background_color:"#00353F",$$slots:{default:[Vr]},$$scope:{ctx:m}}}),f=new yt({}),s=new J({props:{$$slots:{default:[Br]},$$scope:{ctx:m}}}),i=new fn({}),x=new bt({}),c=new rl({}),d=new jl({}),V=new Xl({}),B=new J({props:{id:"seance2",$$slots:{default:[Jr]},$$scope:{ctx:m}}}),E=new J({props:{data_background_gradient:"linear-gradient(rgb(40 59 149), rgb(129 23 195 / 41%))",$$slots:{default:[ua]},$$scope:{ctx:m}}}),I=new gs({}),K=new As({}),k=new ei({}),U=new Vi({}),re=new Hi({}),X=new J({props:{id:"seance3",$$slots:{default:[oa]},$$scope:{ctx:m}}}),y=new J({props:{$$slots:{default:[ca]},$$scope:{ctx:m}}}),ue=new Dr({}),fe=new ir({}),$e=new J({props:{$$slots:{default:[pa]},$$scope:{ctx:m}}}),_e=new Pn({}),R=new J({props:{id:"feedback",$$slots:{default:[ma]},$$scope:{ctx:m}}}),ce=new J({props:{id:"annexes",$$slots:{default:[va]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),r=_(),j(l.$$.fragment),t=_(),j(f.$$.fragment),n=_(),j(s.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(x.$$.fragment),o=_(),j(c.$$.fragment),C=_(),j(d.$$.fragment),w=_(),j(V.$$.fragment),D=_(),j(B.$$.fragment),O=_(),j(E.$$.fragment),z=_(),j(I.$$.fragment),W=_(),j(K.$$.fragment),A=_(),j(k.$$.fragment),H=_(),j(U.$$.fragment),te=_(),j(re.$$.fragment),G=_(),j(X.$$.fragment),ae=_(),j(y.$$.fragment),ee=_(),j(ue.$$.fragment),oe=_(),j(fe.$$.fragment),ve=_(),j($e.$$.fragment),xe=_(),j(_e.$$.fragment),Ce=_(),j(R.$$.fragment),le=_(),j(ce.$$.fragment)},l(F){M(e.$$.fragment,F),r=v(F),M(l.$$.fragment,F),t=v(F),M(f.$$.fragment,F),n=v(F),M(s.$$.fragment,F),p=v(F),M(i.$$.fragment,F),$=v(F),M(x.$$.fragment,F),o=v(F),M(c.$$.fragment,F),C=v(F),M(d.$$.fragment,F),w=v(F),M(V.$$.fragment,F),D=v(F),M(B.$$.fragment,F),O=v(F),M(E.$$.fragment,F),z=v(F),M(I.$$.fragment,F),W=v(F),M(K.$$.fragment,F),A=v(F),M(k.$$.fragment,F),H=v(F),M(U.$$.fragment,F),te=v(F),M(re.$$.fragment,F),G=v(F),M(X.$$.fragment,F),ae=v(F),M(y.$$.fragment,F),ee=v(F),M(ue.$$.fragment,F),oe=v(F),M(fe.$$.fragment,F),ve=v(F),M($e.$$.fragment,F),xe=v(F),M(_e.$$.fragment,F),Ce=v(F),M(R.$$.fragment,F),le=v(F),M(ce.$$.fragment,F)},m(F,ie){T(e,F,ie),u(F,r,ie),T(l,F,ie),u(F,t,ie),T(f,F,ie),u(F,n,ie),T(s,F,ie),u(F,p,ie),T(i,F,ie),u(F,$,ie),T(x,F,ie),u(F,o,ie),T(c,F,ie),u(F,C,ie),T(d,F,ie),u(F,w,ie),T(V,F,ie),u(F,D,ie),T(B,F,ie),u(F,O,ie),T(E,F,ie),u(F,z,ie),T(I,F,ie),u(F,W,ie),T(K,F,ie),u(F,A,ie),T(k,F,ie),u(F,H,ie),T(U,F,ie),u(F,te,ie),T(re,F,ie),u(F,G,ie),T(X,F,ie),u(F,ae,ie),T(y,F,ie),u(F,ee,ie),T(ue,F,ie),u(F,oe,ie),T(fe,F,ie),u(F,ve,ie),T($e,F,ie),u(F,xe,ie),T(_e,F,ie),u(F,Ce,ie),T(R,F,ie),u(F,le,ie),T(ce,F,ie),pe=!0},p(F,[ie]){const we={};ie&1&&(we.$$scope={dirty:ie,ctx:F}),e.$set(we);const Pe={};ie&1&&(Pe.$$scope={dirty:ie,ctx:F}),l.$set(Pe);const Le={};ie&1&&(Le.$$scope={dirty:ie,ctx:F}),s.$set(Le);const Te={};ie&1&&(Te.$$scope={dirty:ie,ctx:F}),B.$set(Te);const qe={};ie&1&&(qe.$$scope={dirty:ie,ctx:F}),E.$set(qe);const Me={};ie&1&&(Me.$$scope={dirty:ie,ctx:F}),X.$set(Me);const Se={};ie&1&&(Se.$$scope={dirty:ie,ctx:F}),y.$set(Se);const je={};ie&1&&(je.$$scope={dirty:ie,ctx:F}),$e.$set(je);const Ae={};ie&1&&(Ae.$$scope={dirty:ie,ctx:F}),R.$set(Ae);const ke={};ie&1&&(ke.$$scope={dirty:ie,ctx:F}),ce.$set(ke)},i(F){pe||(S(e.$$.fragment,F),S(l.$$.fragment,F),S(f.$$.fragment,F),S(s.$$.fragment,F),S(i.$$.fragment,F),S(x.$$.fragment,F),S(c.$$.fragment,F),S(d.$$.fragment,F),S(V.$$.fragment,F),S(B.$$.fragment,F),S(E.$$.fragment,F),S(I.$$.fragment,F),S(K.$$.fragment,F),S(k.$$.fragment,F),S(U.$$.fragment,F),S(re.$$.fragment,F),S(X.$$.fragment,F),S(y.$$.fragment,F),S(ue.$$.fragment,F),S(fe.$$.fragment,F),S($e.$$.fragment,F),S(_e.$$.fragment,F),S(R.$$.fragment,F),S(ce.$$.fragment,F),pe=!0)},o(F){q(e.$$.fragment,F),q(l.$$.fragment,F),q(f.$$.fragment,F),q(s.$$.fragment,F),q(i.$$.fragment,F),q(x.$$.fragment,F),q(c.$$.fragment,F),q(d.$$.fragment,F),q(V.$$.fragment,F),q(B.$$.fragment,F),q(E.$$.fragment,F),q(I.$$.fragment,F),q(K.$$.fragment,F),q(k.$$.fragment,F),q(U.$$.fragment,F),q(re.$$.fragment,F),q(X.$$.fragment,F),q(y.$$.fragment,F),q(ue.$$.fragment,F),q(fe.$$.fragment,F),q($e.$$.fragment,F),q(_e.$$.fragment,F),q(R.$$.fragment,F),q(ce.$$.fragment,F),pe=!1},d(F){F&&(a(r),a(t),a(n),a(p),a($),a(o),a(C),a(w),a(D),a(O),a(z),a(W),a(A),a(H),a(te),a(G),a(ae),a(ee),a(oe),a(ve),a(xe),a(Ce),a(le)),P(e,F),P(l,F),P(f,F),P(s,F),P(i,F),P(x,F),P(c,F),P(d,F),P(V,F),P(B,F),P(E,F),P(I,F),P(K,F),P(k,F),P(U,F),P(re,F),P(X,F),P(y,F),P(ue,F),P(fe,F),P($e,F),P(_e,F),P(R,F),P(ce,F)}}}class xa extends he{constructor(e){super(),be(this,e,null,_a,ge,{})}}function Ca(m){let e,r;return e=new xa({}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){T(e,l,t),r=!0},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){q(e.$$.fragment,l),r=!1},d(l){P(e,l)}}}function ga(m){let e,r,l,t,f;return document.title="Programmation Orientée Objet - PICOT Alexis",t=new Ze({props:{$$slots:{default:[Ca]},$$scope:{ctx:m}}}),{c(){e=h("link"),r=h("meta"),l=_(),j(t.$$.fragment),this.h()},l(n){const s=Ke("svelte-v7f1ci",document.head);e=g(s,"LINK",{rel:!0,href:!0}),r=g(s,"META",{name:!0,content:!0}),s.forEach(a),l=v(n),M(t.$$.fragment,n),this.h()},h(){L(e,"rel","icon"),L(e,"href","https://fav.farm/💻"),L(r,"name","timestamp"),L(r,"content",new Date(1746629976224).toLocaleString())},m(n,s){Q(document.head,e),Q(document.head,r),u(n,l,s),T(t,n,s),f=!0},p(n,[s]){const p={};s&1&&(p.$$scope={dirty:s,ctx:n}),t.$set(p)},i(n){f||(S(t.$$.fragment,n),f=!0)},o(n){q(t.$$.fragment,n),f=!1},d(n){n&&a(l),a(e),a(r),P(t,n)}}}function ha(m){switch(new URLSearchParams(window.location.search).get("r")){case"TD1":window.location.href=tt;break;case"TD2":window.location.href=lt;break;case"TP1":window.location.href=Fe;break;case"TP2":window.location.href=ye;break;case"Projet":window.location.href=Ge;break}return[]}class qa extends he{constructor(e){super(),be(this,e,ha,ga,ge,{})}}export{qa as component,Pa as universal};
