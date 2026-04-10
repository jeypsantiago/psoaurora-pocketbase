import{S as kt,i as gt,s as vt,T as St,V as q,U as _t,d as c,h as ae,W as wt,t as G,a as K,y as X,X as ct,Y as yt,q as $t,Z as Pt,c as Ct,b as d,u as t,m as oe,l as s,z as f,x as u,j as se,o as k,G as dt,p as Rt,B as ne,C as Tt}from"./index-ptO8SeqW.js";import{F as Ot}from"./FieldsQueryParam-B0w5NF6Y.js";function pt(i,o,a){const n=i.slice();return n[7]=o[a],n}function ut(i,o,a){const n=i.slice();return n[7]=o[a],n}function ht(i,o,a){const n=i.slice();return n[12]=o[a],n[14]=a,n}function At(i){let o;return{c(){o=f("or")},m(a,n){d(a,o,n)},d(a){a&&c(o)}}}function bt(i){let o,a,n=i[12]+"",m,b=i[14]>0&&At();return{c(){b&&b.c(),o=u(),a=s("strong"),m=f(n)},m(r,h){b&&b.m(r,h),d(r,o,h),d(r,a,h),t(a,m)},p(r,h){h&2&&n!==(n=r[12]+"")&&X(m,n)},d(r){r&&(c(o),c(a)),b&&b.d(r)}}}function ft(i,o){let a,n=o[7].code+"",m,b,r,h;function g(){return o[6](o[7])}return{key:i,first:null,c(){a=s("button"),m=f(n),b=u(),k(a,"class","tab-item"),ne(a,"active",o[2]===o[7].code),this.first=a},m($,_){d($,a,_),t(a,m),t(a,b),r||(h=Tt(a,"click",g),r=!0)},p($,_){o=$,_&8&&n!==(n=o[7].code+"")&&X(m,n),_&12&&ne(a,"active",o[2]===o[7].code)},d($){$&&c(a),r=!1,h()}}}function mt(i,o){let a,n,m,b;return n=new _t({props:{content:o[7].body}}),{key:i,first:null,c(){a=s("div"),se(n.$$.fragment),m=u(),k(a,"class","tab-item"),ne(a,"active",o[2]===o[7].code),this.first=a},m(r,h){d(r,a,h),oe(n,a,null),t(a,m),b=!0},p(r,h){o=r;const g={};h&8&&(g.content=o[7].body),n.$set(g),(!b||h&12)&&ne(a,"active",o[2]===o[7].code)},i(r){b||(K(n.$$.fragment,r),b=!0)},o(r){G(n.$$.fragment,r),b=!1},d(r){r&&c(a),ae(n)}}}function Dt(i){var ot,st;let o,a,n=i[0].name+"",m,b,r,h,g,$,_,Z=i[1].join("/")+"",ie,De,re,We,ce,C,de,L,pe,R,x,Ue,ee,H,Be,ue,te=i[0].name+"",he,Fe,be,j,fe,T,me,Me,Y,O,_e,qe,ke,Le,V,ge,He,ve,Se,E,we,A,ye,je,N,D,$e,Ye,Pe,Ve,v,Ee,B,Ne,Ie,Je,Ce,Qe,Re,ze,Ge,Ke,Te,Xe,Ze,F,Oe,I,Ae,W,J,P=[],xe=new Map,et,Q,w=[],tt=new Map,U;C=new St({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${i[5]}');

        ...

        const authData = await pb.collection('${(ot=i[0])==null?void 0:ot.name}').authWithPassword(
            '${i[4]}',
            'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${i[5]}');

        ...

        final authData = await pb.collection('${(st=i[0])==null?void 0:st.name}').authWithPassword(
          '${i[4]}',
          'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}});let M=q(i[1]),S=[];for(let e=0;e<M.length;e+=1)S[e]=bt(ht(i,M,e));B=new _t({props:{content:"?expand=relField1,relField2.subRelField"}}),F=new Ot({props:{prefix:"record."}});let le=q(i[3]);const lt=e=>e[7].code;for(let e=0;e<le.length;e+=1){let l=ut(i,le,e),p=lt(l);xe.set(p,P[e]=ft(p,l))}let z=q(i[3]);const at=e=>e[7].code;for(let e=0;e<z.length;e+=1){let l=pt(i,z,e),p=at(l);tt.set(p,w[e]=mt(p,l))}return{c(){o=s("h3"),a=f("Auth with password ("),m=f(n),b=f(")"),r=u(),h=s("div"),g=s("p"),$=f(`Authenticate with combination of\r
        `),_=s("strong"),ie=f(Z),De=f(" and "),re=s("strong"),re.textContent="password",We=f("."),ce=u(),se(C.$$.fragment),de=u(),L=s("h6"),L.textContent="API details",pe=u(),R=s("div"),x=s("strong"),x.textContent="POST",Ue=u(),ee=s("div"),H=s("p"),Be=f("/api/collections/"),ue=s("strong"),he=f(te),Fe=f("/auth-with-password"),be=u(),j=s("div"),j.textContent="Body Parameters",fe=u(),T=s("table"),me=s("thead"),me.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr>',Me=u(),Y=s("tbody"),O=s("tr"),_e=s("td"),_e.innerHTML='<div class="inline-flex"><span class="label label-success">Required</span> <span>identity</span></div>',qe=u(),ke=s("td"),ke.innerHTML='<span class="label">String</span>',Le=u(),V=s("td");for(let e=0;e<S.length;e+=1)S[e].c();ge=f(`\r
                of the record to authenticate.`),He=u(),ve=s("tr"),ve.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>The auth record password.</td>',Se=u(),E=s("div"),E.textContent="Query parameters",we=u(),A=s("table"),ye=s("thead"),ye.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',je=u(),N=s("tbody"),D=s("tr"),$e=s("td"),$e.textContent="expand",Ye=u(),Pe=s("td"),Pe.innerHTML='<span class="label">String</span>',Ve=u(),v=s("td"),Ee=f(`Auto expand record relations. Ex.:\r
                `),se(B.$$.fragment),Ne=f(`\r
                Supports up to 6-levels depth nested relations expansion. `),Ie=s("br"),Je=f(`\r
                The expanded relations will be appended to the record under the\r
                `),Ce=s("code"),Ce.textContent="expand",Qe=f(" property (eg. "),Re=s("code"),Re.textContent='"expand": {"relField1": {...}, ...}',ze=f(`).\r
                `),Ge=s("br"),Ke=f(`\r
                Only the relations to which the request user has permissions to `),Te=s("strong"),Te.textContent="view",Xe=f(" will be expanded."),Ze=u(),se(F.$$.fragment),Oe=u(),I=s("div"),I.textContent="Responses",Ae=u(),W=s("div"),J=s("div");for(let e=0;e<P.length;e+=1)P[e].c();et=u(),Q=s("div");for(let e=0;e<w.length;e+=1)w[e].c();k(o,"class","m-b-sm"),k(h,"class","content txt-lg m-b-sm"),k(L,"class","m-b-xs"),k(x,"class","label label-primary"),k(ee,"class","content"),k(R,"class","alert alert-success"),k(j,"class","section-title"),k(T,"class","table-compact table-border m-b-base"),k(E,"class","section-title"),k(A,"class","table-compact table-border m-b-base"),k(I,"class","section-title"),k(J,"class","tabs-header compact combined left"),k(Q,"class","tabs-content"),k(W,"class","tabs")},m(e,l){d(e,o,l),t(o,a),t(o,m),t(o,b),d(e,r,l),d(e,h,l),t(h,g),t(g,$),t(g,_),t(_,ie),t(g,De),t(g,re),t(g,We),d(e,ce,l),oe(C,e,l),d(e,de,l),d(e,L,l),d(e,pe,l),d(e,R,l),t(R,x),t(R,Ue),t(R,ee),t(ee,H),t(H,Be),t(H,ue),t(ue,he),t(H,Fe),d(e,be,l),d(e,j,l),d(e,fe,l),d(e,T,l),t(T,me),t(T,Me),t(T,Y),t(Y,O),t(O,_e),t(O,qe),t(O,ke),t(O,Le),t(O,V);for(let p=0;p<S.length;p+=1)S[p]&&S[p].m(V,null);t(V,ge),t(Y,He),t(Y,ve),d(e,Se,l),d(e,E,l),d(e,we,l),d(e,A,l),t(A,ye),t(A,je),t(A,N),t(N,D),t(D,$e),t(D,Ye),t(D,Pe),t(D,Ve),t(D,v),t(v,Ee),oe(B,v,null),t(v,Ne),t(v,Ie),t(v,Je),t(v,Ce),t(v,Qe),t(v,Re),t(v,ze),t(v,Ge),t(v,Ke),t(v,Te),t(v,Xe),t(N,Ze),oe(F,N,null),d(e,Oe,l),d(e,I,l),d(e,Ae,l),d(e,W,l),t(W,J);for(let p=0;p<P.length;p+=1)P[p]&&P[p].m(J,null);t(W,et),t(W,Q);for(let p=0;p<w.length;p+=1)w[p]&&w[p].m(Q,null);U=!0},p(e,[l]){var nt,it;(!U||l&1)&&n!==(n=e[0].name+"")&&X(m,n),(!U||l&2)&&Z!==(Z=e[1].join("/")+"")&&X(ie,Z);const p={};if(l&49&&(p.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[5]}');

        ...

        const authData = await pb.collection('${(nt=e[0])==null?void 0:nt.name}').authWithPassword(
            '${e[4]}',
            'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),l&49&&(p.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[5]}');

        ...

        final authData = await pb.collection('${(it=e[0])==null?void 0:it.name}').authWithPassword(
          '${e[4]}',
          'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),C.$set(p),(!U||l&1)&&te!==(te=e[0].name+"")&&X(he,te),l&2){M=q(e[1]);let y;for(y=0;y<M.length;y+=1){const rt=ht(e,M,y);S[y]?S[y].p(rt,l):(S[y]=bt(rt),S[y].c(),S[y].m(V,ge))}for(;y<S.length;y+=1)S[y].d(1);S.length=M.length}l&12&&(le=q(e[3]),P=ct(P,l,lt,1,e,le,xe,J,yt,ft,null,ut)),l&12&&(z=q(e[3]),$t(),w=ct(w,l,at,1,e,z,tt,Q,Pt,mt,null,pt),Ct())},i(e){if(!U){K(C.$$.fragment,e),K(B.$$.fragment,e),K(F.$$.fragment,e);for(let l=0;l<z.length;l+=1)K(w[l]);U=!0}},o(e){G(C.$$.fragment,e),G(B.$$.fragment,e),G(F.$$.fragment,e);for(let l=0;l<w.length;l+=1)G(w[l]);U=!1},d(e){e&&(c(o),c(r),c(h),c(ce),c(de),c(L),c(pe),c(R),c(be),c(j),c(fe),c(T),c(Se),c(E),c(we),c(A),c(Oe),c(I),c(Ae),c(W)),ae(C,e),wt(S,e),ae(B),ae(F);for(let l=0;l<P.length;l+=1)P[l].d();for(let l=0;l<w.length;l+=1)w[l].d()}}}function Wt(i,o,a){let n,m,b,{collection:r}=o,h=200,g=[];const $=_=>a(2,h=_.code);return i.$$set=_=>{"collection"in _&&a(0,r=_.collection)},i.$$.update=()=>{var _;i.$$.dirty&1&&a(1,m=((_=r==null?void 0:r.passwordAuth)==null?void 0:_.identityFields)||[]),i.$$.dirty&2&&a(4,b=m.length==0?"NONE":"YOUR_"+m.join("_OR_").toUpperCase()),i.$$.dirty&1&&a(3,g=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:dt.dummyCollectionRecord(r)},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "identity": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])},a(5,n=dt.getApiExampleUrl(Rt.baseURL)),[r,m,h,g,b,n,$]}class Ft extends kt{constructor(o){super(),gt(this,o,Wt,Dt,vt,{collection:0})}}export{Ft as default};
