import{S as $t,i as Mt,s as St,T as qt,V as se,U as Ct,d,h as ge,t as _e,a as he,y as ee,X as Ie,Y as bt,q as Ot,Z as Rt,c as Pt,b as o,u as a,m as we,l as s,z as _,x as f,j as Te,o as k,G as ye,p as Ht,B as Ce,C as Lt,n as te}from"./index-ptO8SeqW.js";import{F as Ft}from"./FieldsQueryParam-B0w5NF6Y.js";function mt(r,e,t){const n=r.slice();return n[10]=e[t],n}function _t(r,e,t){const n=r.slice();return n[10]=e[t],n}function ht(r,e,t){const n=r.slice();return n[15]=e[t],n}function yt(r){let e;return{c(){e=s("p"),e.innerHTML=`<em>Note that in case of a password change all previously issued tokens for the current record
                will be automatically invalidated and if you want your user to remain signed in you need to
                reauthenticate manually after the update call.</em>`},m(t,n){o(t,e,n)},d(t){t&&d(e)}}}function kt(r){let e;return{c(){e=s("p"),e.innerHTML="Requires superuser <code>Authorization:TOKEN</code> header",k(e,"class","txt-hint txt-sm txt-right")},m(t,n){o(t,e,n)},d(t){t&&d(e)}}}function vt(r){let e,t,n,b,p,c,u,m,S,C,P,H,$,M,O,L,I,U,q,R,F,v,g,w;function x(h,T){var le,Q,ne;return T&1&&(m=null),m==null&&(m=!!((ne=(Q=(le=h[0])==null?void 0:le.fields)==null?void 0:Q.find(Yt))!=null&&ne.required)),m?Bt:Dt}let z=x(r,-1),B=z(r);return{c(){e=s("tr"),e.innerHTML='<td colspan="3" class="txt-hint txt-bold">Auth specific fields</td>',t=f(),n=s("tr"),n.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>email</span></div></td> <td><span class="label">String</span></td> <td>The auth record email address.
                    <br/>
                    This field can be updated only by superusers or auth records with &quot;Manage&quot; access.
                    <br/>
                    Regular accounts can update their email by calling &quot;Request email change&quot;.</td>`,b=f(),p=s("tr"),c=s("td"),u=s("div"),B.c(),S=f(),C=s("span"),C.textContent="emailVisibility",P=f(),H=s("td"),H.innerHTML='<span class="label">Boolean</span>',$=f(),M=s("td"),M.textContent="Whether to show/hide the auth record email when fetching the record data.",O=f(),L=s("tr"),L.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>oldPassword</span></div></td> <td><span class="label">String</span></td> <td>Old auth record password.
                    <br/>
                    This field is required only when changing the record password. Superusers and auth records
                    with &quot;Manage&quot; access can skip this field.</td>`,I=f(),U=s("tr"),U.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>New auth record password.</td>',q=f(),R=s("tr"),R.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>New auth record password confirmation.</td>',F=f(),v=s("tr"),v.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>verified</span></div></td> <td><span class="label">Boolean</span></td> <td>Indicates whether the auth record is verified or not.
                    <br/>
                    This field can be set only by superusers or auth records with &quot;Manage&quot; access.</td>`,g=f(),w=s("tr"),w.innerHTML='<td colspan="3" class="txt-hint txt-bold">Other fields</td>',k(u,"class","inline-flex")},m(h,T){o(h,e,T),o(h,t,T),o(h,n,T),o(h,b,T),o(h,p,T),a(p,c),a(c,u),B.m(u,null),a(u,S),a(u,C),a(p,P),a(p,H),a(p,$),a(p,M),o(h,O,T),o(h,L,T),o(h,I,T),o(h,U,T),o(h,q,T),o(h,R,T),o(h,F,T),o(h,v,T),o(h,g,T),o(h,w,T)},p(h,T){z!==(z=x(h,T))&&(B.d(1),B=z(h),B&&(B.c(),B.m(u,S)))},d(h){h&&(d(e),d(t),d(n),d(b),d(p),d(O),d(L),d(I),d(U),d(q),d(R),d(F),d(v),d(g),d(w)),B.d()}}}function Dt(r){let e;return{c(){e=s("span"),e.textContent="Optional",k(e,"class","label label-warning")},m(t,n){o(t,e,n)},d(t){t&&d(e)}}}function Bt(r){let e;return{c(){e=s("span"),e.textContent="Required",k(e,"class","label label-success")},m(t,n){o(t,e,n)},d(t){t&&d(e)}}}function Nt(r){let e;return{c(){e=s("span"),e.textContent="Optional",k(e,"class","label label-warning")},m(t,n){o(t,e,n)},d(t){t&&d(e)}}}function At(r){let e;return{c(){e=s("span"),e.textContent="Required",k(e,"class","label label-success")},m(t,n){o(t,e,n)},d(t){t&&d(e)}}}function jt(r){let e,t=r[15].maxSelect==1?"id":"ids",n,b;return{c(){e=_("Relation record "),n=_(t),b=_(".")},m(p,c){o(p,e,c),o(p,n,c),o(p,b,c)},p(p,c){c&32&&t!==(t=p[15].maxSelect==1?"id":"ids")&&ee(n,t)},d(p){p&&(d(e),d(n),d(b))}}}function Et(r){let e,t,n,b,p;return{c(){e=_("File object."),t=s("br"),n=_(`\r
                        Set to `),b=s("code"),b.textContent="null",p=_(" to delete already uploaded file(s).")},m(c,u){o(c,e,u),o(c,t,u),o(c,n,u),o(c,b,u),o(c,p,u)},p:te,d(c){c&&(d(e),d(t),d(n),d(b),d(p))}}}function Ut(r){let e,t;return{c(){e=s("code"),e.textContent='{"lon":x,"lat":y}',t=_(" object.")},m(n,b){o(n,e,b),o(n,t,b)},p:te,d(n){n&&(d(e),d(t))}}}function It(r){let e;return{c(){e=_("URL address.")},m(t,n){o(t,e,n)},p:te,d(t){t&&d(e)}}}function Jt(r){let e;return{c(){e=_("Email address.")},m(t,n){o(t,e,n)},p:te,d(t){t&&d(e)}}}function Vt(r){let e;return{c(){e=_("JSON array or object.")},m(t,n){o(t,e,n)},p:te,d(t){t&&d(e)}}}function xt(r){let e;return{c(){e=_("Number value.")},m(t,n){o(t,e,n)},p:te,d(t){t&&d(e)}}}function zt(r){let e;return{c(){e=_("Plain text value.")},m(t,n){o(t,e,n)},p:te,d(t){t&&d(e)}}}function gt(r,e){let t,n,b,p,c,u=e[15].name+"",m,S,C,P,H=ye.getFieldValueType(e[15])+"",$,M,O,L;function I(g,w){return g[15].required?At:Nt}let U=I(e),q=U(e);function R(g,w){if(g[15].type==="text")return zt;if(g[15].type==="number")return xt;if(g[15].type==="json")return Vt;if(g[15].type==="email")return Jt;if(g[15].type==="url")return It;if(g[15].type==="geoPoint")return Ut;if(g[15].type==="file")return Et;if(g[15].type==="relation")return jt}let F=R(e),v=F&&F(e);return{key:r,first:null,c(){t=s("tr"),n=s("td"),b=s("div"),q.c(),p=f(),c=s("span"),m=_(u),S=f(),C=s("td"),P=s("span"),$=_(H),M=f(),O=s("td"),v&&v.c(),L=f(),k(b,"class","inline-flex"),k(P,"class","label"),this.first=t},m(g,w){o(g,t,w),a(t,n),a(n,b),q.m(b,null),a(b,p),a(b,c),a(c,m),a(t,S),a(t,C),a(C,P),a(P,$),a(t,M),a(t,O),v&&v.m(O,null),a(t,L)},p(g,w){e=g,U!==(U=I(e))&&(q.d(1),q=U(e),q&&(q.c(),q.m(b,p))),w&32&&u!==(u=e[15].name+"")&&ee(m,u),w&32&&H!==(H=ye.getFieldValueType(e[15])+"")&&ee($,H),F===(F=R(e))&&v?v.p(e,w):(v&&v.d(1),v=F&&F(e),v&&(v.c(),v.m(O,null)))},d(g){g&&d(t),q.d(),v&&v.d()}}}function wt(r,e){let t,n=e[10].code+"",b,p,c,u;function m(){return e[9](e[10])}return{key:r,first:null,c(){t=s("button"),b=_(n),p=f(),k(t,"class","tab-item"),Ce(t,"active",e[2]===e[10].code),this.first=t},m(S,C){o(S,t,C),a(t,b),a(t,p),c||(u=Lt(t,"click",m),c=!0)},p(S,C){e=S,C&8&&n!==(n=e[10].code+"")&&ee(b,n),C&12&&Ce(t,"active",e[2]===e[10].code)},d(S){S&&d(t),c=!1,u()}}}function Tt(r,e){let t,n,b,p;return n=new Ct({props:{content:e[10].body}}),{key:r,first:null,c(){t=s("div"),Te(n.$$.fragment),b=f(),k(t,"class","tab-item"),Ce(t,"active",e[2]===e[10].code),this.first=t},m(c,u){o(c,t,u),we(n,t,null),a(t,b),p=!0},p(c,u){e=c;const m={};u&8&&(m.content=e[10].body),n.$set(m),(!p||u&12)&&Ce(t,"active",e[2]===e[10].code)},i(c){p||(he(n.$$.fragment,c),p=!0)},o(c){_e(n.$$.fragment,c),p=!1},d(c){c&&d(t),ge(n)}}}function Qt(r){var ct,ut;let e,t,n=r[0].name+"",b,p,c,u,m,S,C,P=r[0].name+"",H,$,M,O,L,I,U,q,R,F,v,g,w,x,z,B,h,T,le,Q=r[0].name+"",ne,Je,$e,Ve,Me,de,Se,oe,qe,re,Oe,Y,Re,xe,G,Pe,J=[],ze=new Map,He,ce,Le,K,Fe,Qe,ue,W,De,Ye,Be,Ge,N,Ke,ae,We,Xe,Ze,Ne,et,Ae,tt,je,lt,nt,ie,Ee,pe,Ue,X,fe,V=[],at=new Map,it,be,A=[],st=new Map,Z,j=r[1]&&yt();R=new qt({props:{js:`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${r[4]}');

...

// example update data
const data = ${JSON.stringify(r[7](r[0]),null,4)};

const record = await pb.collection('${(ct=r[0])==null?void 0:ct.name}').update('RECORD_ID', data);
    `,dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${r[4]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(r[7](r[0]),null,2)};

final record = await pb.collection('${(ut=r[0])==null?void 0:ut.name}').update('RECORD_ID', body: body);
    `}});let E=r[6]&&kt(),D=r[1]&&vt(r),ke=se(r[5]);const dt=l=>l[15].name;for(let l=0;l<ke.length;l+=1){let i=ht(r,ke,l),y=dt(i);ze.set(y,J[l]=gt(y,i))}ae=new Ct({props:{content:"?expand=relField1,relField2.subRelField21"}}),ie=new Ft({});let ve=se(r[3]);const ot=l=>l[10].code;for(let l=0;l<ve.length;l+=1){let i=_t(r,ve,l),y=ot(i);at.set(y,V[l]=wt(y,i))}let me=se(r[3]);const rt=l=>l[10].code;for(let l=0;l<me.length;l+=1){let i=mt(r,me,l),y=rt(i);st.set(y,A[l]=Tt(y,i))}return{c(){e=s("h3"),t=_("Update ("),b=_(n),p=_(")"),c=f(),u=s("div"),m=s("p"),S=_("Update a single "),C=s("strong"),H=_(P),$=_(" record."),M=f(),O=s("p"),O.innerHTML=`Body parameters could be sent as <code>application/json</code> or
        <code>multipart/form-data</code>.`,L=f(),I=s("p"),I.innerHTML=`File upload is supported only via <code>multipart/form-data</code>.
        <br/>
        For more info and examples you could check the detailed
        <a href="https://pocketbase.io/docs/files-handling" target="_blank" rel="noopener noreferrer">Files upload and handling docs
        </a>.`,U=f(),j&&j.c(),q=f(),Te(R.$$.fragment),F=f(),v=s("h6"),v.textContent="API details",g=f(),w=s("div"),x=s("strong"),x.textContent="PATCH",z=f(),B=s("div"),h=s("p"),T=_("/api/collections/"),le=s("strong"),ne=_(Q),Je=_("/records/"),$e=s("strong"),$e.textContent=":id",Ve=f(),E&&E.c(),Me=f(),de=s("div"),de.textContent="Path parameters",Se=f(),oe=s("table"),oe.innerHTML='<thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to update.</td></tr></tbody>',qe=f(),re=s("div"),re.textContent="Body Parameters",Oe=f(),Y=s("table"),Re=s("thead"),Re.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr>',xe=f(),G=s("tbody"),D&&D.c(),Pe=f();for(let l=0;l<J.length;l+=1)J[l].c();He=f(),ce=s("div"),ce.textContent="Query parameters",Le=f(),K=s("table"),Fe=s("thead"),Fe.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',Qe=f(),ue=s("tbody"),W=s("tr"),De=s("td"),De.textContent="expand",Ye=f(),Be=s("td"),Be.innerHTML='<span class="label">String</span>',Ge=f(),N=s("td"),Ke=_(`Auto expand relations when returning the updated record. Ex.:\r
                `),Te(ae.$$.fragment),We=_(`\r
                Supports up to 6-levels depth nested relations expansion. `),Xe=s("br"),Ze=_(`\r
                The expanded relations will be appended to the record under the\r
                `),Ne=s("code"),Ne.textContent="expand",et=_(" property (eg. "),Ae=s("code"),Ae.textContent='"expand": {"relField1": {...}, ...}',tt=_(`). Only\r
                the relations that the user has permissions to `),je=s("strong"),je.textContent="view",lt=_(" will be expanded."),nt=f(),Te(ie.$$.fragment),Ee=f(),pe=s("div"),pe.textContent="Responses",Ue=f(),X=s("div"),fe=s("div");for(let l=0;l<V.length;l+=1)V[l].c();it=f(),be=s("div");for(let l=0;l<A.length;l+=1)A[l].c();k(e,"class","m-b-sm"),k(u,"class","content txt-lg m-b-sm"),k(v,"class","m-b-xs"),k(x,"class","label label-primary"),k(B,"class","content"),k(w,"class","alert alert-warning"),k(de,"class","section-title"),k(oe,"class","table-compact table-border m-b-base"),k(re,"class","section-title"),k(Y,"class","table-compact table-border m-b-base"),k(ce,"class","section-title"),k(K,"class","table-compact table-border m-b-lg"),k(pe,"class","section-title"),k(fe,"class","tabs-header compact combined left"),k(be,"class","tabs-content"),k(X,"class","tabs")},m(l,i){o(l,e,i),a(e,t),a(e,b),a(e,p),o(l,c,i),o(l,u,i),a(u,m),a(m,S),a(m,C),a(C,H),a(m,$),a(u,M),a(u,O),a(u,L),a(u,I),a(u,U),j&&j.m(u,null),o(l,q,i),we(R,l,i),o(l,F,i),o(l,v,i),o(l,g,i),o(l,w,i),a(w,x),a(w,z),a(w,B),a(B,h),a(h,T),a(h,le),a(le,ne),a(h,Je),a(h,$e),a(w,Ve),E&&E.m(w,null),o(l,Me,i),o(l,de,i),o(l,Se,i),o(l,oe,i),o(l,qe,i),o(l,re,i),o(l,Oe,i),o(l,Y,i),a(Y,Re),a(Y,xe),a(Y,G),D&&D.m(G,null),a(G,Pe);for(let y=0;y<J.length;y+=1)J[y]&&J[y].m(G,null);o(l,He,i),o(l,ce,i),o(l,Le,i),o(l,K,i),a(K,Fe),a(K,Qe),a(K,ue),a(ue,W),a(W,De),a(W,Ye),a(W,Be),a(W,Ge),a(W,N),a(N,Ke),we(ae,N,null),a(N,We),a(N,Xe),a(N,Ze),a(N,Ne),a(N,et),a(N,Ae),a(N,tt),a(N,je),a(N,lt),a(ue,nt),we(ie,ue,null),o(l,Ee,i),o(l,pe,i),o(l,Ue,i),o(l,X,i),a(X,fe);for(let y=0;y<V.length;y+=1)V[y]&&V[y].m(fe,null);a(X,it),a(X,be);for(let y=0;y<A.length;y+=1)A[y]&&A[y].m(be,null);Z=!0},p(l,[i]){var pt,ft;(!Z||i&1)&&n!==(n=l[0].name+"")&&ee(b,n),(!Z||i&1)&&P!==(P=l[0].name+"")&&ee(H,P),l[1]?j||(j=yt(),j.c(),j.m(u,null)):j&&(j.d(1),j=null);const y={};i&17&&(y.js=`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${l[4]}');

...

// example update data
const data = ${JSON.stringify(l[7](l[0]),null,4)};

const record = await pb.collection('${(pt=l[0])==null?void 0:pt.name}').update('RECORD_ID', data);
    `),i&17&&(y.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${l[4]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(l[7](l[0]),null,2)};

final record = await pb.collection('${(ft=l[0])==null?void 0:ft.name}').update('RECORD_ID', body: body);
    `),R.$set(y),(!Z||i&1)&&Q!==(Q=l[0].name+"")&&ee(ne,Q),l[6]?E||(E=kt(),E.c(),E.m(w,null)):E&&(E.d(1),E=null),l[1]?D?D.p(l,i):(D=vt(l),D.c(),D.m(G,Pe)):D&&(D.d(1),D=null),i&32&&(ke=se(l[5]),J=Ie(J,i,dt,1,l,ke,ze,G,bt,gt,null,ht)),i&12&&(ve=se(l[3]),V=Ie(V,i,ot,1,l,ve,at,fe,bt,wt,null,_t)),i&12&&(me=se(l[3]),Ot(),A=Ie(A,i,rt,1,l,me,st,be,Rt,Tt,null,mt),Pt())},i(l){if(!Z){he(R.$$.fragment,l),he(ae.$$.fragment,l),he(ie.$$.fragment,l);for(let i=0;i<me.length;i+=1)he(A[i]);Z=!0}},o(l){_e(R.$$.fragment,l),_e(ae.$$.fragment,l),_e(ie.$$.fragment,l);for(let i=0;i<A.length;i+=1)_e(A[i]);Z=!1},d(l){l&&(d(e),d(c),d(u),d(q),d(F),d(v),d(g),d(w),d(Me),d(de),d(Se),d(oe),d(qe),d(re),d(Oe),d(Y),d(He),d(ce),d(Le),d(K),d(Ee),d(pe),d(Ue),d(X)),j&&j.d(),ge(R,l),E&&E.d(),D&&D.d();for(let i=0;i<J.length;i+=1)J[i].d();ge(ae),ge(ie);for(let i=0;i<V.length;i+=1)V[i].d();for(let i=0;i<A.length;i+=1)A[i].d()}}}const Yt=r=>r.name=="emailVisibility";function Gt(r,e,t){let n,b,p,c,u,{collection:m}=e,S=200,C=[];function P($){let M=ye.dummyCollectionSchemaData($,!0);return n&&(M.oldPassword="12345678",M.password="87654321",M.passwordConfirm="87654321",delete M.verified,delete M.email),M}const H=$=>t(2,S=$.code);return r.$$set=$=>{"collection"in $&&t(0,m=$.collection)},r.$$.update=()=>{var $,M,O;r.$$.dirty&1&&t(1,n=(m==null?void 0:m.type)==="auth"),r.$$.dirty&1&&t(6,b=(m==null?void 0:m.updateRule)===null),r.$$.dirty&2&&t(8,p=n?["id","password","verified","email","emailVisibility"]:["id"]),r.$$.dirty&257&&t(5,c=(($=m==null?void 0:m.fields)==null?void 0:$.filter(L=>!L.hidden&&L.type!="autodate"&&!p.includes(L.name)))||[]),r.$$.dirty&1&&t(3,C=[{code:200,body:JSON.stringify(ye.dummyCollectionRecord(m),null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to update record.",
                  "data": {
                    "${(O=(M=m==null?void 0:m.fields)==null?void 0:M[0])==null?void 0:O.name}": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `},{code:403,body:`
                {
                  "status": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}])},t(4,u=ye.getApiExampleUrl(Ht.baseURL)),[m,n,S,C,u,c,b,P,p,H]}class Xt extends $t{constructor(e){super(),Mt(this,e,Gt,Qt,St,{collection:0})}}export{Xt as default};
