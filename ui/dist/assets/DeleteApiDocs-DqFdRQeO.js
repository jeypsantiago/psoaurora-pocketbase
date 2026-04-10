import{S as Re,i as Ee,s as Pe,T as Te,V as H,d as p,h as De,t as te,a as le,y as ee,X as he,Y as Be,q as Oe,Z as Ie,c as qe,b as f,u as i,m as Ce,l as c,z as y,x as k,j as we,o as m,G as Ae,p as Me,B as z,C as Le,U as Se}from"./index-ptO8SeqW.js";function ke(a,l,s){const o=a.slice();return o[6]=l[s],o}function ge(a,l,s){const o=a.slice();return o[6]=l[s],o}function ve(a){let l;return{c(){l=c("p"),l.innerHTML="Requires superuser <code>Authorization:TOKEN</code> header",m(l,"class","txt-hint txt-sm txt-right")},m(s,o){f(s,l,o)},d(s){s&&p(l)}}}function ye(a,l){let s,o,h;function r(){return l[5](l[6])}return{key:a,first:null,c(){s=c("button"),s.textContent=`${l[6].code} `,m(s,"class","tab-item"),z(s,"active",l[2]===l[6].code),this.first=s},m(n,d){f(n,s,d),o||(h=Le(s,"click",r),o=!0)},p(n,d){l=n,d&20&&z(s,"active",l[2]===l[6].code)},d(n){n&&p(s),o=!1,h()}}}function $e(a,l){let s,o,h,r;return o=new Se({props:{content:l[6].body}}),{key:a,first:null,c(){s=c("div"),we(o.$$.fragment),h=k(),m(s,"class","tab-item"),z(s,"active",l[2]===l[6].code),this.first=s},m(n,d){f(n,s,d),Ce(o,s,null),i(s,h),r=!0},p(n,d){l=n,(!r||d&20)&&z(s,"active",l[2]===l[6].code)},i(n){r||(le(o.$$.fragment,n),r=!0)},o(n){te(o.$$.fragment,n),r=!1},d(n){n&&p(s),De(o)}}}function Ue(a){var fe,me;let l,s,o=a[0].name+"",h,r,n,d,$,D,F,M=a[0].name+"",G,se,K,C,N,P,V,g,L,ae,S,E,oe,X,U=a[0].name+"",Y,ne,Z,ie,J,T,Q,B,W,O,x,w,I,v=[],ce=new Map,re,q,b=[],de=new Map,R;C=new Te({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a[3]}');

        ...

        await pb.collection('${(fe=a[0])==null?void 0:fe.name}').delete('RECORD_ID');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        await pb.collection('${(me=a[0])==null?void 0:me.name}').delete('RECORD_ID');
    `}});let _=a[1]&&ve(),j=H(a[4]);const ue=e=>e[6].code;for(let e=0;e<j.length;e+=1){let t=ge(a,j,e),u=ue(t);ce.set(u,v[e]=ye(u,t))}let A=H(a[4]);const pe=e=>e[6].code;for(let e=0;e<A.length;e+=1){let t=ke(a,A,e),u=pe(t);de.set(u,b[e]=$e(u,t))}return{c(){l=c("h3"),s=y("Delete ("),h=y(o),r=y(")"),n=k(),d=c("div"),$=c("p"),D=y("Delete a single "),F=c("strong"),G=y(M),se=y(" record."),K=k(),we(C.$$.fragment),N=k(),P=c("h6"),P.textContent="API details",V=k(),g=c("div"),L=c("strong"),L.textContent="DELETE",ae=k(),S=c("div"),E=c("p"),oe=y("/api/collections/"),X=c("strong"),Y=y(U),ne=y("/records/"),Z=c("strong"),Z.textContent=":id",ie=k(),_&&_.c(),J=k(),T=c("div"),T.textContent="Path parameters",Q=k(),B=c("table"),B.innerHTML='<thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody>',W=k(),O=c("div"),O.textContent="Responses",x=k(),w=c("div"),I=c("div");for(let e=0;e<v.length;e+=1)v[e].c();re=k(),q=c("div");for(let e=0;e<b.length;e+=1)b[e].c();m(l,"class","m-b-sm"),m(d,"class","content txt-lg m-b-sm"),m(P,"class","m-b-xs"),m(L,"class","label label-primary"),m(S,"class","content"),m(g,"class","alert alert-danger"),m(T,"class","section-title"),m(B,"class","table-compact table-border m-b-base"),m(O,"class","section-title"),m(I,"class","tabs-header compact combined left"),m(q,"class","tabs-content"),m(w,"class","tabs")},m(e,t){f(e,l,t),i(l,s),i(l,h),i(l,r),f(e,n,t),f(e,d,t),i(d,$),i($,D),i($,F),i(F,G),i($,se),f(e,K,t),Ce(C,e,t),f(e,N,t),f(e,P,t),f(e,V,t),f(e,g,t),i(g,L),i(g,ae),i(g,S),i(S,E),i(E,oe),i(E,X),i(X,Y),i(E,ne),i(E,Z),i(g,ie),_&&_.m(g,null),f(e,J,t),f(e,T,t),f(e,Q,t),f(e,B,t),f(e,W,t),f(e,O,t),f(e,x,t),f(e,w,t),i(w,I);for(let u=0;u<v.length;u+=1)v[u]&&v[u].m(I,null);i(w,re),i(w,q);for(let u=0;u<b.length;u+=1)b[u]&&b[u].m(q,null);R=!0},p(e,[t]){var be,_e;(!R||t&1)&&o!==(o=e[0].name+"")&&ee(h,o),(!R||t&1)&&M!==(M=e[0].name+"")&&ee(G,M);const u={};t&9&&(u.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        await pb.collection('${(be=e[0])==null?void 0:be.name}').delete('RECORD_ID');
    `),t&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await pb.collection('${(_e=e[0])==null?void 0:_e.name}').delete('RECORD_ID');
    `),C.$set(u),(!R||t&1)&&U!==(U=e[0].name+"")&&ee(Y,U),e[1]?_||(_=ve(),_.c(),_.m(g,null)):_&&(_.d(1),_=null),t&20&&(j=H(e[4]),v=he(v,t,ue,1,e,j,ce,I,Be,ye,null,ge)),t&20&&(A=H(e[4]),Oe(),b=he(b,t,pe,1,e,A,de,q,Ie,$e,null,ke),qe())},i(e){if(!R){le(C.$$.fragment,e);for(let t=0;t<A.length;t+=1)le(b[t]);R=!0}},o(e){te(C.$$.fragment,e);for(let t=0;t<b.length;t+=1)te(b[t]);R=!1},d(e){e&&(p(l),p(n),p(d),p(K),p(N),p(P),p(V),p(g),p(J),p(T),p(Q),p(B),p(W),p(O),p(x),p(w)),De(C,e),_&&_.d();for(let t=0;t<v.length;t+=1)v[t].d();for(let t=0;t<b.length;t+=1)b[t].d()}}}function je(a,l,s){let o,h,{collection:r}=l,n=204,d=[];const $=D=>s(2,n=D.code);return a.$$set=D=>{"collection"in D&&s(0,r=D.collection)},a.$$.update=()=>{a.$$.dirty&1&&s(1,o=(r==null?void 0:r.deleteRule)===null),a.$$.dirty&3&&r!=null&&r.id&&(d.push({code:204,body:`
                null
            `}),d.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to delete record. Make sure that the record is not part of a required relation reference.",
                  "data": {}
                }
            `}),o&&d.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}),d.push({code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}))},s(3,h=Ae.getApiExampleUrl(Me.baseURL)),[r,o,n,h,d,$]}class ze extends Re{constructor(l){super(),Ee(this,l,je,Ue,Pe,{collection:0})}}export{ze as default};
