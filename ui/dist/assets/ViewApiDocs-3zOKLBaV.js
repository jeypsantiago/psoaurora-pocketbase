import{S as lt,i as st,s as nt,T as at,U as tt,V as K,d as r,h as X,t as j,a as V,y as ve,X as Je,Y as ot,q as it,Z as rt,c as dt,b as d,u as l,m as Y,l as a,z as _,x as b,j as Z,o as m,G as Ke,p as ct,B as W,C as pt}from"./index-ptO8SeqW.js";import{F as ut}from"./FieldsQueryParam-B0w5NF6Y.js";function Xe(o,s,n){const i=o.slice();return i[6]=s[n],i}function Ye(o,s,n){const i=o.slice();return i[6]=s[n],i}function Ze(o){let s;return{c(){s=a("p"),s.innerHTML="Requires superuser <code>Authorization:TOKEN</code> header",m(s,"class","txt-hint txt-sm txt-right")},m(n,i){d(n,s,i)},d(n){n&&r(s)}}}function We(o,s){let n,i,v;function p(){return s[5](s[6])}return{key:o,first:null,c(){n=a("button"),n.textContent=`${s[6].code} `,m(n,"class","tab-item"),W(n,"active",s[2]===s[6].code),this.first=n},m(c,f){d(c,n,f),i||(v=pt(n,"click",p),i=!0)},p(c,f){s=c,f&20&&W(n,"active",s[2]===s[6].code)},d(c){c&&r(n),i=!1,v()}}}function et(o,s){let n,i,v,p;return i=new tt({props:{content:s[6].body}}),{key:o,first:null,c(){n=a("div"),Z(i.$$.fragment),v=b(),m(n,"class","tab-item"),W(n,"active",s[2]===s[6].code),this.first=n},m(c,f){d(c,n,f),Y(i,n,null),l(n,v),p=!0},p(c,f){s=c,(!p||f&20)&&W(n,"active",s[2]===s[6].code)},i(c){p||(V(i.$$.fragment,c),p=!0)},o(c){j(i.$$.fragment,c),p=!1},d(c){c&&r(n),X(i)}}}function ft(o){var ze,Ge;let s,n,i=o[0].name+"",v,p,c,f,w,C,ee,z=o[0].name+"",te,$e,le,F,se,x,ne,$,G,ye,N,P,we,ae,Q=o[0].name+"",oe,Ce,ie,Fe,re,S,de,q,ce,A,pe,R,ue,Re,I,O,fe,Oe,be,Te,h,De,B,Pe,Be,Ee,me,xe,_e,Se,qe,Ae,he,Ie,Me,E,ke,M,ge,T,H,y=[],He=new Map,Le,L,k=[],Ue=new Map,D;F=new at({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${o[3]}');

        ...

        const record = await pb.collection('${(ze=o[0])==null?void 0:ze.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[3]}');

        ...

        final record = await pb.collection('${(Ge=o[0])==null?void 0:Ge.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    `}});let g=o[1]&&Ze();B=new tt({props:{content:"?expand=relField1,relField2.subRelField"}}),E=new ut({});let J=K(o[4]);const je=e=>e[6].code;for(let e=0;e<J.length;e+=1){let t=Ye(o,J,e),u=je(t);He.set(u,y[e]=We(u,t))}let U=K(o[4]);const Ve=e=>e[6].code;for(let e=0;e<U.length;e+=1){let t=Xe(o,U,e),u=Ve(t);Ue.set(u,k[e]=et(u,t))}return{c(){s=a("h3"),n=_("View ("),v=_(i),p=_(")"),c=b(),f=a("div"),w=a("p"),C=_("Fetch a single "),ee=a("strong"),te=_(z),$e=_(" record."),le=b(),Z(F.$$.fragment),se=b(),x=a("h6"),x.textContent="API details",ne=b(),$=a("div"),G=a("strong"),G.textContent="GET",ye=b(),N=a("div"),P=a("p"),we=_("/api/collections/"),ae=a("strong"),oe=_(Q),Ce=_("/records/"),ie=a("strong"),ie.textContent=":id",Fe=b(),g&&g.c(),re=b(),S=a("div"),S.textContent="Path Parameters",de=b(),q=a("table"),q.innerHTML='<thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to view.</td></tr></tbody>',ce=b(),A=a("div"),A.textContent="Query parameters",pe=b(),R=a("table"),ue=a("thead"),ue.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',Re=b(),I=a("tbody"),O=a("tr"),fe=a("td"),fe.textContent="expand",Oe=b(),be=a("td"),be.innerHTML='<span class="label">String</span>',Te=b(),h=a("td"),De=_(`Auto expand record relations. Ex.:\r
                `),Z(B.$$.fragment),Pe=_(`\r
                Supports up to 6-levels depth nested relations expansion. `),Be=a("br"),Ee=_(`\r
                The expanded relations will be appended to the record under the\r
                `),me=a("code"),me.textContent="expand",xe=_(" property (eg. "),_e=a("code"),_e.textContent='"expand": {"relField1": {...}, ...}',Se=_(`).\r
                `),qe=a("br"),Ae=_(`\r
                Only the relations to which the request user has permissions to `),he=a("strong"),he.textContent="view",Ie=_(" will be expanded."),Me=b(),Z(E.$$.fragment),ke=b(),M=a("div"),M.textContent="Responses",ge=b(),T=a("div"),H=a("div");for(let e=0;e<y.length;e+=1)y[e].c();Le=b(),L=a("div");for(let e=0;e<k.length;e+=1)k[e].c();m(s,"class","m-b-sm"),m(f,"class","content txt-lg m-b-sm"),m(x,"class","m-b-xs"),m(G,"class","label label-primary"),m(N,"class","content"),m($,"class","alert alert-info"),m(S,"class","section-title"),m(q,"class","table-compact table-border m-b-base"),m(A,"class","section-title"),m(R,"class","table-compact table-border m-b-base"),m(M,"class","section-title"),m(H,"class","tabs-header compact combined left"),m(L,"class","tabs-content"),m(T,"class","tabs")},m(e,t){d(e,s,t),l(s,n),l(s,v),l(s,p),d(e,c,t),d(e,f,t),l(f,w),l(w,C),l(w,ee),l(ee,te),l(w,$e),d(e,le,t),Y(F,e,t),d(e,se,t),d(e,x,t),d(e,ne,t),d(e,$,t),l($,G),l($,ye),l($,N),l(N,P),l(P,we),l(P,ae),l(ae,oe),l(P,Ce),l(P,ie),l($,Fe),g&&g.m($,null),d(e,re,t),d(e,S,t),d(e,de,t),d(e,q,t),d(e,ce,t),d(e,A,t),d(e,pe,t),d(e,R,t),l(R,ue),l(R,Re),l(R,I),l(I,O),l(O,fe),l(O,Oe),l(O,be),l(O,Te),l(O,h),l(h,De),Y(B,h,null),l(h,Pe),l(h,Be),l(h,Ee),l(h,me),l(h,xe),l(h,_e),l(h,Se),l(h,qe),l(h,Ae),l(h,he),l(h,Ie),l(I,Me),Y(E,I,null),d(e,ke,t),d(e,M,t),d(e,ge,t),d(e,T,t),l(T,H);for(let u=0;u<y.length;u+=1)y[u]&&y[u].m(H,null);l(T,Le),l(T,L);for(let u=0;u<k.length;u+=1)k[u]&&k[u].m(L,null);D=!0},p(e,[t]){var Ne,Qe;(!D||t&1)&&i!==(i=e[0].name+"")&&ve(v,i),(!D||t&1)&&z!==(z=e[0].name+"")&&ve(te,z);const u={};t&9&&(u.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        const record = await pb.collection('${(Ne=e[0])==null?void 0:Ne.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `),t&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final record = await pb.collection('${(Qe=e[0])==null?void 0:Qe.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    `),F.$set(u),(!D||t&1)&&Q!==(Q=e[0].name+"")&&ve(oe,Q),e[1]?g||(g=Ze(),g.c(),g.m($,null)):g&&(g.d(1),g=null),t&20&&(J=K(e[4]),y=Je(y,t,je,1,e,J,He,H,ot,We,null,Ye)),t&20&&(U=K(e[4]),it(),k=Je(k,t,Ve,1,e,U,Ue,L,rt,et,null,Xe),dt())},i(e){if(!D){V(F.$$.fragment,e),V(B.$$.fragment,e),V(E.$$.fragment,e);for(let t=0;t<U.length;t+=1)V(k[t]);D=!0}},o(e){j(F.$$.fragment,e),j(B.$$.fragment,e),j(E.$$.fragment,e);for(let t=0;t<k.length;t+=1)j(k[t]);D=!1},d(e){e&&(r(s),r(c),r(f),r(le),r(se),r(x),r(ne),r($),r(re),r(S),r(de),r(q),r(ce),r(A),r(pe),r(R),r(ke),r(M),r(ge),r(T)),X(F,e),g&&g.d(),X(B),X(E);for(let t=0;t<y.length;t+=1)y[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function bt(o,s,n){let i,v,{collection:p}=s,c=200,f=[];const w=C=>n(2,c=C.code);return o.$$set=C=>{"collection"in C&&n(0,p=C.collection)},o.$$.update=()=>{o.$$.dirty&1&&n(1,i=(p==null?void 0:p.viewRule)===null),o.$$.dirty&3&&p!=null&&p.id&&(f.push({code:200,body:JSON.stringify(Ke.dummyCollectionRecord(p),null,2)}),i&&f.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}),f.push({code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}))},n(3,v=Ke.getApiExampleUrl(ct.baseURL)),[p,i,c,v,f,w]}class ht extends lt{constructor(s){super(),st(this,s,bt,ft,nt,{collection:0})}}export{ht as default};
