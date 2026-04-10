import{S as Ne,i as Je,s as Ke,T as Qe,U as xe,V as K,d,h as Q,t as z,a as E,y as de,X as Oe,Y as Ge,q as Ie,Z as We,c as Xe,b as u,u as o,m as G,l as s,z as k,x as p,j as I,o as b,G as Ve,p as Ye,B as W,C as Ze}from"./index-ptO8SeqW.js";import{F as et}from"./FieldsQueryParam-B0w5NF6Y.js";function ze(r,a,l){const n=r.slice();return n[5]=a[l],n}function Ee(r,a,l){const n=r.slice();return n[5]=a[l],n}function Ue(r,a){let l,n=a[5].code+"",m,_,i,h;function g(){return a[4](a[5])}return{key:r,first:null,c(){l=s("button"),m=k(n),_=p(),b(l,"class","tab-item"),W(l,"active",a[1]===a[5].code),this.first=l},m(v,w){u(v,l,w),o(l,m),o(l,_),i||(h=Ze(l,"click",g),i=!0)},p(v,w){a=v,w&4&&n!==(n=a[5].code+"")&&de(m,n),w&6&&W(l,"active",a[1]===a[5].code)},d(v){v&&d(l),i=!1,h()}}}function je(r,a){let l,n,m,_;return n=new xe({props:{content:a[5].body}}),{key:r,first:null,c(){l=s("div"),I(n.$$.fragment),m=p(),b(l,"class","tab-item"),W(l,"active",a[1]===a[5].code),this.first=l},m(i,h){u(i,l,h),G(n,l,null),o(l,m),_=!0},p(i,h){a=i;const g={};h&4&&(g.content=a[5].body),n.$set(g),(!_||h&6)&&W(l,"active",a[1]===a[5].code)},i(i){_||(E(n.$$.fragment,i),_=!0)},o(i){z(n.$$.fragment,i),_=!1},d(i){i&&d(l),Q(n)}}}function tt(r){var De,Fe;let a,l,n=r[0].name+"",m,_,i,h,g,v,w,A,X,S,U,ue,j,M,pe,Y,x=r[0].name+"",Z,he,fe,N,ee,D,te,T,oe,be,F,C,ae,me,le,_e,f,ke,P,ge,ve,ye,se,$e,ne,Se,we,Te,re,Ce,Re,B,ie,H,ce,R,L,$=[],Pe=new Map,Be,O,y=[],qe=new Map,q;v=new Qe({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${r[3]}');

        ...

        const authData = await pb.collection('${(De=r[0])==null?void 0:De.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${r[3]}');

        ...

        final authData = await pb.collection('${(Fe=r[0])==null?void 0:Fe.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);
    `}}),P=new xe({props:{content:"?expand=relField1,relField2.subRelField"}}),B=new et({props:{prefix:"record."}});let J=K(r[2]);const Ae=e=>e[5].code;for(let e=0;e<J.length;e+=1){let t=Ee(r,J,e),c=Ae(t);Pe.set(c,$[e]=Ue(c,t))}let V=K(r[2]);const Me=e=>e[5].code;for(let e=0;e<V.length;e+=1){let t=ze(r,V,e),c=Me(t);qe.set(c,y[e]=je(c,t))}return{c(){a=s("h3"),l=k("Auth refresh ("),m=k(n),_=k(")"),i=p(),h=s("div"),h.innerHTML=`<p>Returns a new auth response (token and record data) for an
        <strong>already authenticated record</strong>.</p> <p>This method is usually called by users on page/screen reload to ensure that the previously stored data
        in <code>pb.authStore</code> is still valid and up-to-date.</p>`,g=p(),I(v.$$.fragment),w=p(),A=s("h6"),A.textContent="API details",X=p(),S=s("div"),U=s("strong"),U.textContent="POST",ue=p(),j=s("div"),M=s("p"),pe=k("/api/collections/"),Y=s("strong"),Z=k(x),he=k("/auth-refresh"),fe=p(),N=s("p"),N.innerHTML="Requires <code>Authorization:TOKEN</code> header",ee=p(),D=s("div"),D.textContent="Query parameters",te=p(),T=s("table"),oe=s("thead"),oe.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',be=p(),F=s("tbody"),C=s("tr"),ae=s("td"),ae.textContent="expand",me=p(),le=s("td"),le.innerHTML='<span class="label">String</span>',_e=p(),f=s("td"),ke=k(`Auto expand record relations. Ex.:\r
                `),I(P.$$.fragment),ge=k(`\r
                Supports up to 6-levels depth nested relations expansion. `),ve=s("br"),ye=k(`\r
                The expanded relations will be appended to the record under the\r
                `),se=s("code"),se.textContent="expand",$e=k(" property (eg. "),ne=s("code"),ne.textContent='"expand": {"relField1": {...}, ...}',Se=k(`).\r
                `),we=s("br"),Te=k(`\r
                Only the relations to which the request user has permissions to `),re=s("strong"),re.textContent="view",Ce=k(" will be expanded."),Re=p(),I(B.$$.fragment),ie=p(),H=s("div"),H.textContent="Responses",ce=p(),R=s("div"),L=s("div");for(let e=0;e<$.length;e+=1)$[e].c();Be=p(),O=s("div");for(let e=0;e<y.length;e+=1)y[e].c();b(a,"class","m-b-sm"),b(h,"class","content txt-lg m-b-sm"),b(A,"class","m-b-xs"),b(U,"class","label label-primary"),b(j,"class","content"),b(N,"class","txt-hint txt-sm txt-right"),b(S,"class","alert alert-success"),b(D,"class","section-title"),b(T,"class","table-compact table-border m-b-base"),b(H,"class","section-title"),b(L,"class","tabs-header compact combined left"),b(O,"class","tabs-content"),b(R,"class","tabs")},m(e,t){u(e,a,t),o(a,l),o(a,m),o(a,_),u(e,i,t),u(e,h,t),u(e,g,t),G(v,e,t),u(e,w,t),u(e,A,t),u(e,X,t),u(e,S,t),o(S,U),o(S,ue),o(S,j),o(j,M),o(M,pe),o(M,Y),o(Y,Z),o(M,he),o(S,fe),o(S,N),u(e,ee,t),u(e,D,t),u(e,te,t),u(e,T,t),o(T,oe),o(T,be),o(T,F),o(F,C),o(C,ae),o(C,me),o(C,le),o(C,_e),o(C,f),o(f,ke),G(P,f,null),o(f,ge),o(f,ve),o(f,ye),o(f,se),o(f,$e),o(f,ne),o(f,Se),o(f,we),o(f,Te),o(f,re),o(f,Ce),o(F,Re),G(B,F,null),u(e,ie,t),u(e,H,t),u(e,ce,t),u(e,R,t),o(R,L);for(let c=0;c<$.length;c+=1)$[c]&&$[c].m(L,null);o(R,Be),o(R,O);for(let c=0;c<y.length;c+=1)y[c]&&y[c].m(O,null);q=!0},p(e,[t]){var He,Le;(!q||t&1)&&n!==(n=e[0].name+"")&&de(m,n);const c={};t&9&&(c.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        const authData = await pb.collection('${(He=e[0])==null?void 0:He.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);
    `),t&9&&(c.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final authData = await pb.collection('${(Le=e[0])==null?void 0:Le.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);
    `),v.$set(c),(!q||t&1)&&x!==(x=e[0].name+"")&&de(Z,x),t&6&&(J=K(e[2]),$=Oe($,t,Ae,1,e,J,Pe,L,Ge,Ue,null,Ee)),t&6&&(V=K(e[2]),Ie(),y=Oe(y,t,Me,1,e,V,qe,O,We,je,null,ze),Xe())},i(e){if(!q){E(v.$$.fragment,e),E(P.$$.fragment,e),E(B.$$.fragment,e);for(let t=0;t<V.length;t+=1)E(y[t]);q=!0}},o(e){z(v.$$.fragment,e),z(P.$$.fragment,e),z(B.$$.fragment,e);for(let t=0;t<y.length;t+=1)z(y[t]);q=!1},d(e){e&&(d(a),d(i),d(h),d(g),d(w),d(A),d(X),d(S),d(ee),d(D),d(te),d(T),d(ie),d(H),d(ce),d(R)),Q(v,e),Q(P),Q(B);for(let t=0;t<$.length;t+=1)$[t].d();for(let t=0;t<y.length;t+=1)y[t].d()}}}function ot(r,a,l){let n,{collection:m}=a,_=200,i=[];const h=g=>l(1,_=g.code);return r.$$set=g=>{"collection"in g&&l(0,m=g.collection)},r.$$.update=()=>{r.$$.dirty&1&&l(2,i=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:Ve.dummyCollectionRecord(m)},null,2)},{code:401,body:`
                {
                  "status": 401,
                  "message": "The request requires valid record authorization token to be set.",
                  "data": {}
                }
            `},{code:403,body:`
                {
                  "status": 403,
                  "message": "The authorized record model is not allowed to perform this action.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "status": 404,
                  "message": "Missing auth record context.",
                  "data": {}
                }
            `}])},l(3,n=Ve.getApiExampleUrl(Ye.baseURL)),[m,_,i,n,h]}class st extends Ne{constructor(a){super(),Je(this,a,ot,tt,Ke,{collection:0})}}export{st as default};
