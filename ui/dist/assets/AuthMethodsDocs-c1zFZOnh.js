import{S as Be,i as Ce,s as Te,T as Le,V as Q,d as u,h as ae,t as z,a as I,y as J,X as $e,Y as Se,q as Ue,Z as je,c as qe,b as d,u as a,m as ne,l as c,z as w,x as k,j as ie,o as h,p as oe,G as Re,B as N,C as De,U as Ee}from"./index-ptO8SeqW.js";import{F as Fe}from"./FieldsQueryParam-B0w5NF6Y.js";function we(n,s,l){const o=n.slice();return o[8]=s[l],o}function Me(n,s,l){const o=n.slice();return o[8]=s[l],o}function Ae(n,s){let l,o=s[8].code+"",p,b,i,f;function m(){return s[6](s[8])}return{key:n,first:null,c(){l=c("button"),p=w(o),b=k(),h(l,"class","tab-item"),N(l,"active",s[1]===s[8].code),this.first=l},m(v,y){d(v,l,y),a(l,p),a(l,b),i||(f=De(l,"click",m),i=!0)},p(v,y){s=v,y&4&&o!==(o=s[8].code+"")&&J(p,o),y&6&&N(l,"active",s[1]===s[8].code)},d(v){v&&u(l),i=!1,f()}}}function Pe(n,s){let l,o,p,b;return o=new Ee({props:{content:s[8].body}}),{key:n,first:null,c(){l=c("div"),ie(o.$$.fragment),p=k(),h(l,"class","tab-item"),N(l,"active",s[1]===s[8].code),this.first=l},m(i,f){d(i,l,f),ne(o,l,null),a(l,p),b=!0},p(i,f){s=i;const m={};f&4&&(m.content=s[8].body),o.$set(m),(!b||f&6)&&N(l,"active",s[1]===s[8].code)},i(i){b||(I(o.$$.fragment,i),b=!0)},o(i){z(o.$$.fragment,i),b=!1},d(i){i&&u(l),ae(o)}}}function Ge(n){var ke,ge;let s,l,o=n[0].name+"",p,b,i,f,m,v,y,g=n[0].name+"",O,ce,V,M,X,L,Y,A,E,re,F,S,ue,Z,G=n[0].name+"",K,de,W,U,x,P,ee,fe,te,T,le,j,se,B,q,$=[],me=new Map,pe,R,_=[],be=new Map,C;M=new Le({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${n[3]}');

        ...

        const result = await pb.collection('${(ke=n[0])==null?void 0:ke.name}').listAuthMethods();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${n[3]}');

        ...

        final result = await pb.collection('${(ge=n[0])==null?void 0:ge.name}').listAuthMethods();
    `}}),T=new Fe({});let H=Q(n[2]);const he=e=>e[8].code;for(let e=0;e<H.length;e+=1){let t=Me(n,H,e),r=he(t);me.set(r,$[e]=Ae(r,t))}let D=Q(n[2]);const _e=e=>e[8].code;for(let e=0;e<D.length;e+=1){let t=we(n,D,e),r=_e(t);be.set(r,_[e]=Pe(r,t))}return{c(){s=c("h3"),l=w("List auth methods ("),p=w(o),b=w(")"),i=k(),f=c("div"),m=c("p"),v=w("Returns a public list with all allowed "),y=c("strong"),O=w(g),ce=w(" authentication methods."),V=k(),ie(M.$$.fragment),X=k(),L=c("h6"),L.textContent="API details",Y=k(),A=c("div"),E=c("strong"),E.textContent="GET",re=k(),F=c("div"),S=c("p"),ue=w("/api/collections/"),Z=c("strong"),K=w(G),de=w("/auth-methods"),W=k(),U=c("div"),U.textContent="Query parameters",x=k(),P=c("table"),ee=c("thead"),ee.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr>',fe=k(),te=c("tbody"),ie(T.$$.fragment),le=k(),j=c("div"),j.textContent="Responses",se=k(),B=c("div"),q=c("div");for(let e=0;e<$.length;e+=1)$[e].c();pe=k(),R=c("div");for(let e=0;e<_.length;e+=1)_[e].c();h(s,"class","m-b-sm"),h(f,"class","content txt-lg m-b-sm"),h(L,"class","m-b-xs"),h(E,"class","label label-primary"),h(F,"class","content"),h(A,"class","alert alert-info"),h(U,"class","section-title"),h(P,"class","table-compact table-border m-b-base"),h(j,"class","section-title"),h(q,"class","tabs-header compact combined left"),h(R,"class","tabs-content"),h(B,"class","tabs")},m(e,t){d(e,s,t),a(s,l),a(s,p),a(s,b),d(e,i,t),d(e,f,t),a(f,m),a(m,v),a(m,y),a(y,O),a(m,ce),d(e,V,t),ne(M,e,t),d(e,X,t),d(e,L,t),d(e,Y,t),d(e,A,t),a(A,E),a(A,re),a(A,F),a(F,S),a(S,ue),a(S,Z),a(Z,K),a(S,de),d(e,W,t),d(e,U,t),d(e,x,t),d(e,P,t),a(P,ee),a(P,fe),a(P,te),ne(T,te,null),d(e,le,t),d(e,j,t),d(e,se,t),d(e,B,t),a(B,q);for(let r=0;r<$.length;r+=1)$[r]&&$[r].m(q,null);a(B,pe),a(B,R);for(let r=0;r<_.length;r+=1)_[r]&&_[r].m(R,null);C=!0},p(e,[t]){var ve,ye;(!C||t&1)&&o!==(o=e[0].name+"")&&J(p,o),(!C||t&1)&&g!==(g=e[0].name+"")&&J(O,g);const r={};t&9&&(r.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        const result = await pb.collection('${(ve=e[0])==null?void 0:ve.name}').listAuthMethods();
    `),t&9&&(r.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final result = await pb.collection('${(ye=e[0])==null?void 0:ye.name}').listAuthMethods();
    `),M.$set(r),(!C||t&1)&&G!==(G=e[0].name+"")&&J(K,G),t&6&&(H=Q(e[2]),$=$e($,t,he,1,e,H,me,q,Se,Ae,null,Me)),t&6&&(D=Q(e[2]),Ue(),_=$e(_,t,_e,1,e,D,be,R,je,Pe,null,we),qe())},i(e){if(!C){I(M.$$.fragment,e),I(T.$$.fragment,e);for(let t=0;t<D.length;t+=1)I(_[t]);C=!0}},o(e){z(M.$$.fragment,e),z(T.$$.fragment,e);for(let t=0;t<_.length;t+=1)z(_[t]);C=!1},d(e){e&&(u(s),u(i),u(f),u(V),u(X),u(L),u(Y),u(A),u(W),u(U),u(x),u(P),u(le),u(j),u(se),u(B)),ae(M,e),ae(T);for(let t=0;t<$.length;t+=1)$[t].d();for(let t=0;t<_.length;t+=1)_[t].d()}}}function He(n,s,l){let o,{collection:p}=s,b=200,i=[],f={},m=!1;v();async function v(){l(5,m=!0);try{l(4,f=await oe.collection(p.name).listAuthMethods())}catch(g){oe.error(g)}l(5,m=!1)}const y=g=>l(1,b=g.code);return n.$$set=g=>{"collection"in g&&l(0,p=g.collection)},n.$$.update=()=>{n.$$.dirty&48&&l(2,i=[{code:200,body:m?"...":JSON.stringify(f,null,2)},{code:404,body:`
                {
                  "status": 404,
                  "message": "Missing collection context.",
                  "data": {}
                }
            `}])},l(3,o=Re.getApiExampleUrl(oe.baseURL)),[p,b,i,o,f,m,y]}class Ie extends Be{constructor(s){super(),Ce(this,s,He,Ge,Te,{collection:0})}}export{Ie as default};
