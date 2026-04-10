import{S as $t,i as qt,s as Tt,T as St,V as ce,U as Ct,d as o,h as $e,t as he,a as ve,y as ae,X as Ne,Y as pt,q as Mt,Z as Pt,c as Ft,b as r,u as i,m as qe,l as a,z as m,x as p,j as Te,o as w,G as we,p as Lt,B as Se,C as Ot,e as Ht,n as fe}from"./index-ptO8SeqW.js";import{F as Rt}from"./FieldsQueryParam-B0w5NF6Y.js";function bt(s,e,t){const l=s.slice();return l[10]=e[t],l}function mt(s,e,t){const l=s.slice();return l[10]=e[t],l}function _t(s,e,t){const l=s.slice();return l[15]=e[t],l}function kt(s){let e;return{c(){e=a("p"),e.innerHTML="Requires superuser <code>Authorization:TOKEN</code> header",w(e,"class","txt-hint txt-sm txt-right")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function yt(s){let e,t,l,c,f,u,_,b,q,y,g,A,S,$,R,P,E,U,M,z,F,T,k,L,ee,Y,I,oe,G,K,W;function ue(h,C){var N,Q,H;return C&1&&(u=null),u==null&&(u=!!((H=(Q=(N=h[0])==null?void 0:N.fields)==null?void 0:Q.find(Wt))!=null&&H.required)),u?At:Bt}let te=ue(s,-1),D=te(s);function X(h,C){var N,Q,H;return C&1&&(E=null),E==null&&(E=!!((H=(Q=(N=h[0])==null?void 0:N.fields)==null?void 0:Q.find(Kt))!=null&&H.required)),E?Nt:Vt}let Z=X(s,-1),O=Z(s);return{c(){e=a("tr"),e.innerHTML='<td colspan="3" class="txt-hint txt-bold">Auth specific fields</td>',t=p(),l=a("tr"),c=a("td"),f=a("div"),D.c(),_=p(),b=a("span"),b.textContent="email",q=p(),y=a("td"),y.innerHTML='<span class="label">String</span>',g=p(),A=a("td"),A.textContent="Auth record email address.",S=p(),$=a("tr"),R=a("td"),P=a("div"),O.c(),U=p(),M=a("span"),M.textContent="emailVisibility",z=p(),F=a("td"),F.innerHTML='<span class="label">Boolean</span>',T=p(),k=a("td"),k.textContent="Whether to show/hide the auth record email when fetching the record data.",L=p(),ee=a("tr"),ee.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>Auth record password.</td>',Y=p(),I=a("tr"),I.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>Auth record password confirmation.</td>',oe=p(),G=a("tr"),G.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>verified</span></div></td> <td><span class="label">Boolean</span></td> <td>Indicates whether the auth record is verified or not.
                    <br/>
                    This field can be set only by superusers or auth records with &quot;Manage&quot; access.</td>`,K=p(),W=a("tr"),W.innerHTML='<td colspan="3" class="txt-hint txt-bold">Other fields</td>',w(f,"class","inline-flex"),w(P,"class","inline-flex")},m(h,C){r(h,e,C),r(h,t,C),r(h,l,C),i(l,c),i(c,f),D.m(f,null),i(f,_),i(f,b),i(l,q),i(l,y),i(l,g),i(l,A),r(h,S,C),r(h,$,C),i($,R),i(R,P),O.m(P,null),i(P,U),i(P,M),i($,z),i($,F),i($,T),i($,k),r(h,L,C),r(h,ee,C),r(h,Y,C),r(h,I,C),r(h,oe,C),r(h,G,C),r(h,K,C),r(h,W,C)},p(h,C){te!==(te=ue(h,C))&&(D.d(1),D=te(h),D&&(D.c(),D.m(f,_))),Z!==(Z=X(h,C))&&(O.d(1),O=Z(h),O&&(O.c(),O.m(P,U)))},d(h){h&&(o(e),o(t),o(l),o(S),o($),o(L),o(ee),o(Y),o(I),o(oe),o(G),o(K),o(W)),D.d(),O.d()}}}function Bt(s){let e;return{c(){e=a("span"),e.textContent="Optional",w(e,"class","label label-warning")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function At(s){let e;return{c(){e=a("span"),e.textContent="Required",w(e,"class","label label-success")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function Vt(s){let e;return{c(){e=a("span"),e.textContent="Optional",w(e,"class","label label-warning")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function Nt(s){let e;return{c(){e=a("span"),e.textContent="Required",w(e,"class","label label-success")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function jt(s){let e;return{c(){e=a("span"),e.textContent="Required",w(e,"class","label label-success")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function Jt(s){let e;return{c(){e=a("span"),e.textContent="Optional",w(e,"class","label label-warning")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function Ut(s){let e,t=s[15].maxSelect===1?"id":"ids",l,c;return{c(){e=m("Relation record "),l=m(t),c=m(".")},m(f,u){r(f,e,u),r(f,l,u),r(f,c,u)},p(f,u){u&32&&t!==(t=f[15].maxSelect===1?"id":"ids")&&ae(l,t)},d(f){f&&(o(e),o(l),o(c))}}}function Dt(s){let e,t,l,c,f,u,_,b,q;return{c(){e=m("File object."),t=a("br"),l=m(`\r
                        Set to empty value (`),c=a("code"),c.textContent="null",f=m(", "),u=a("code"),u.textContent='""',_=m(" or "),b=a("code"),b.textContent="[]",q=m(`) to delete\r
                        already uploaded file(s).`)},m(y,g){r(y,e,g),r(y,t,g),r(y,l,g),r(y,c,g),r(y,f,g),r(y,u,g),r(y,_,g),r(y,b,g),r(y,q,g)},p:fe,d(y){y&&(o(e),o(t),o(l),o(c),o(f),o(u),o(_),o(b),o(q))}}}function Et(s){let e,t;return{c(){e=a("code"),e.textContent='{"lon":x,"lat":y}',t=m(" object.")},m(l,c){r(l,e,c),r(l,t,c)},p:fe,d(l){l&&(o(e),o(t))}}}function It(s){let e;return{c(){e=m("URL address.")},m(t,l){r(t,e,l)},p:fe,d(t){t&&o(e)}}}function xt(s){let e;return{c(){e=m("Email address.")},m(t,l){r(t,e,l)},p:fe,d(t){t&&o(e)}}}function zt(s){let e;return{c(){e=m("JSON array or object.")},m(t,l){r(t,e,l)},p:fe,d(t){t&&o(e)}}}function Qt(s){let e;return{c(){e=m("Number value.")},m(t,l){r(t,e,l)},p:fe,d(t){t&&o(e)}}}function Yt(s){let e,t,l=s[15].autogeneratePattern&&ht();return{c(){e=m(`Plain text value.\r
                        `),l&&l.c(),t=Ht()},m(c,f){r(c,e,f),l&&l.m(c,f),r(c,t,f)},p(c,f){c[15].autogeneratePattern?l||(l=ht(),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(c){c&&(o(e),o(t)),l&&l.d(c)}}}function ht(s){let e;return{c(){e=m("It is autogenerated if not set.")},m(t,l){r(t,e,l)},d(t){t&&o(e)}}}function vt(s,e){let t,l,c,f,u,_=e[15].name+"",b,q,y,g,A=we.getFieldValueType(e[15])+"",S,$,R,P;function E(k,L){return!k[15].required||k[15].type=="text"&&k[15].autogeneratePattern?Jt:jt}let U=E(e),M=U(e);function z(k,L){if(k[15].type==="text")return Yt;if(k[15].type==="number")return Qt;if(k[15].type==="json")return zt;if(k[15].type==="email")return xt;if(k[15].type==="url")return It;if(k[15].type==="geoPoint")return Et;if(k[15].type==="file")return Dt;if(k[15].type==="relation")return Ut}let F=z(e),T=F&&F(e);return{key:s,first:null,c(){t=a("tr"),l=a("td"),c=a("div"),M.c(),f=p(),u=a("span"),b=m(_),q=p(),y=a("td"),g=a("span"),S=m(A),$=p(),R=a("td"),T&&T.c(),P=p(),w(c,"class","inline-flex"),w(g,"class","label"),this.first=t},m(k,L){r(k,t,L),i(t,l),i(l,c),M.m(c,null),i(c,f),i(c,u),i(u,b),i(t,q),i(t,y),i(y,g),i(g,S),i(t,$),i(t,R),T&&T.m(R,null),i(t,P)},p(k,L){e=k,U!==(U=E(e))&&(M.d(1),M=U(e),M&&(M.c(),M.m(c,f))),L&32&&_!==(_=e[15].name+"")&&ae(b,_),L&32&&A!==(A=we.getFieldValueType(e[15])+"")&&ae(S,A),F===(F=z(e))&&T?T.p(e,L):(T&&T.d(1),T=F&&F(e),T&&(T.c(),T.m(R,null)))},d(k){k&&o(t),M.d(),T&&T.d()}}}function wt(s,e){let t,l=e[10].code+"",c,f,u,_;function b(){return e[9](e[10])}return{key:s,first:null,c(){t=a("button"),c=m(l),f=p(),w(t,"class","tab-item"),Se(t,"active",e[2]===e[10].code),this.first=t},m(q,y){r(q,t,y),i(t,c),i(t,f),u||(_=Ot(t,"click",b),u=!0)},p(q,y){e=q,y&8&&l!==(l=e[10].code+"")&&ae(c,l),y&12&&Se(t,"active",e[2]===e[10].code)},d(q){q&&o(t),u=!1,_()}}}function gt(s,e){let t,l,c,f;return l=new Ct({props:{content:e[10].body}}),{key:s,first:null,c(){t=a("div"),Te(l.$$.fragment),c=p(),w(t,"class","tab-item"),Se(t,"active",e[2]===e[10].code),this.first=t},m(u,_){r(u,t,_),qe(l,t,null),i(t,c),f=!0},p(u,_){e=u;const b={};_&8&&(b.content=e[10].body),l.$set(b),(!f||_&12)&&Se(t,"active",e[2]===e[10].code)},i(u){f||(ve(l.$$.fragment,u),f=!0)},o(u){he(l.$$.fragment,u),f=!1},d(u){u&&o(t),$e(l)}}}function Gt(s){var st,at,ot,rt;let e,t,l=s[0].name+"",c,f,u,_,b,q,y,g=s[0].name+"",A,S,$,R,P,E,U,M,z,F,T,k,L,ee,Y,I,oe,G,K=s[0].name+"",W,ue,te,D,X,Z,O,h,C,N,Q,H=[],je=new Map,Me,pe,Pe,le,Fe,Je,be,ne,Le,Ue,Oe,De,B,Ee,re,Ie,xe,ze,He,Qe,Re,Ye,Ge,Ke,Be,We,Xe,de,Ae,me,Ve,ie,_e,x=[],Ze=new Map,et,ke,j=[],tt=new Map,se;M=new St({props:{js:`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${s[4]}');

...

// example create data
const data = ${JSON.stringify(s[7](s[0]),null,4)};

const record = await pb.collection('${(st=s[0])==null?void 0:st.name}').create(data);
`+(s[1]?`
// (optional) send an email verification request
await pb.collection('${(at=s[0])==null?void 0:at.name}').requestVerification('test@example.com');
`:""),dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${s[4]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(s[7](s[0]),null,2)};

final record = await pb.collection('${(ot=s[0])==null?void 0:ot.name}').create(body: body);
`+(s[1]?`
// (optional) send an email verification request
await pb.collection('${(rt=s[0])==null?void 0:rt.name}').requestVerification('test@example.com');
`:"")}});let J=s[6]&&kt(),V=s[1]&&yt(s),ge=ce(s[5]);const lt=n=>n[15].name;for(let n=0;n<ge.length;n+=1){let d=_t(s,ge,n),v=lt(d);je.set(v,H[n]=vt(v,d))}re=new Ct({props:{content:"?expand=relField1,relField2.subRelField"}}),de=new Rt({});let Ce=ce(s[3]);const nt=n=>n[10].code;for(let n=0;n<Ce.length;n+=1){let d=mt(s,Ce,n),v=nt(d);Ze.set(v,x[n]=wt(v,d))}let ye=ce(s[3]);const it=n=>n[10].code;for(let n=0;n<ye.length;n+=1){let d=bt(s,ye,n),v=it(d);tt.set(v,j[n]=gt(v,d))}return{c(){e=a("h3"),t=m("Create ("),c=m(l),f=m(")"),u=p(),_=a("div"),b=a("p"),q=m("Create a new "),y=a("strong"),A=m(g),S=m(" record."),$=p(),R=a("p"),R.innerHTML=`Body parameters could be sent as <code>application/json</code> or
        <code>multipart/form-data</code>.`,P=p(),E=a("p"),E.innerHTML=`File upload is supported only via <code>multipart/form-data</code>.
        <br/>
        For more info and examples you could check the detailed
        <a href="https://pocketbase.io/docs/files-handling" target="_blank" rel="noopener noreferrer">Files upload and handling docs
        </a>.`,U=p(),Te(M.$$.fragment),z=p(),F=a("h6"),F.textContent="API details",T=p(),k=a("div"),L=a("strong"),L.textContent="POST",ee=p(),Y=a("div"),I=a("p"),oe=m("/api/collections/"),G=a("strong"),W=m(K),ue=m("/records"),te=p(),J&&J.c(),D=p(),X=a("div"),X.textContent="Body Parameters",Z=p(),O=a("table"),h=a("thead"),h.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr>',C=p(),N=a("tbody"),V&&V.c(),Q=p();for(let n=0;n<H.length;n+=1)H[n].c();Me=p(),pe=a("div"),pe.textContent="Query parameters",Pe=p(),le=a("table"),Fe=a("thead"),Fe.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',Je=p(),be=a("tbody"),ne=a("tr"),Le=a("td"),Le.textContent="expand",Ue=p(),Oe=a("td"),Oe.innerHTML='<span class="label">String</span>',De=p(),B=a("td"),Ee=m(`Auto expand relations when returning the created record. Ex.:\r
                `),Te(re.$$.fragment),Ie=m(`\r
                Supports up to 6-levels depth nested relations expansion. `),xe=a("br"),ze=m(`\r
                The expanded relations will be appended to the record under the\r
                `),He=a("code"),He.textContent="expand",Qe=m(" property (eg. "),Re=a("code"),Re.textContent='"expand": {"relField1": {...}, ...}',Ye=m(`).\r
                `),Ge=a("br"),Ke=m(`\r
                Only the relations to which the request user has permissions to `),Be=a("strong"),Be.textContent="view",We=m(" will be expanded."),Xe=p(),Te(de.$$.fragment),Ae=p(),me=a("div"),me.textContent="Responses",Ve=p(),ie=a("div"),_e=a("div");for(let n=0;n<x.length;n+=1)x[n].c();et=p(),ke=a("div");for(let n=0;n<j.length;n+=1)j[n].c();w(e,"class","m-b-sm"),w(_,"class","content txt-lg m-b-sm"),w(F,"class","m-b-xs"),w(L,"class","label label-primary"),w(Y,"class","content"),w(k,"class","alert alert-success"),w(X,"class","section-title"),w(O,"class","table-compact table-border m-b-base"),w(pe,"class","section-title"),w(le,"class","table-compact table-border m-b-base"),w(me,"class","section-title"),w(_e,"class","tabs-header compact combined left"),w(ke,"class","tabs-content"),w(ie,"class","tabs")},m(n,d){r(n,e,d),i(e,t),i(e,c),i(e,f),r(n,u,d),r(n,_,d),i(_,b),i(b,q),i(b,y),i(y,A),i(b,S),i(_,$),i(_,R),i(_,P),i(_,E),r(n,U,d),qe(M,n,d),r(n,z,d),r(n,F,d),r(n,T,d),r(n,k,d),i(k,L),i(k,ee),i(k,Y),i(Y,I),i(I,oe),i(I,G),i(G,W),i(I,ue),i(k,te),J&&J.m(k,null),r(n,D,d),r(n,X,d),r(n,Z,d),r(n,O,d),i(O,h),i(O,C),i(O,N),V&&V.m(N,null),i(N,Q);for(let v=0;v<H.length;v+=1)H[v]&&H[v].m(N,null);r(n,Me,d),r(n,pe,d),r(n,Pe,d),r(n,le,d),i(le,Fe),i(le,Je),i(le,be),i(be,ne),i(ne,Le),i(ne,Ue),i(ne,Oe),i(ne,De),i(ne,B),i(B,Ee),qe(re,B,null),i(B,Ie),i(B,xe),i(B,ze),i(B,He),i(B,Qe),i(B,Re),i(B,Ye),i(B,Ge),i(B,Ke),i(B,Be),i(B,We),i(be,Xe),qe(de,be,null),r(n,Ae,d),r(n,me,d),r(n,Ve,d),r(n,ie,d),i(ie,_e);for(let v=0;v<x.length;v+=1)x[v]&&x[v].m(_e,null);i(ie,et),i(ie,ke);for(let v=0;v<j.length;v+=1)j[v]&&j[v].m(ke,null);se=!0},p(n,[d]){var dt,ct,ft,ut;(!se||d&1)&&l!==(l=n[0].name+"")&&ae(c,l),(!se||d&1)&&g!==(g=n[0].name+"")&&ae(A,g);const v={};d&19&&(v.js=`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${n[4]}');

...

// example create data
const data = ${JSON.stringify(n[7](n[0]),null,4)};

const record = await pb.collection('${(dt=n[0])==null?void 0:dt.name}').create(data);
`+(n[1]?`
// (optional) send an email verification request
await pb.collection('${(ct=n[0])==null?void 0:ct.name}').requestVerification('test@example.com');
`:"")),d&19&&(v.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${n[4]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(n[7](n[0]),null,2)};

final record = await pb.collection('${(ft=n[0])==null?void 0:ft.name}').create(body: body);
`+(n[1]?`
// (optional) send an email verification request
await pb.collection('${(ut=n[0])==null?void 0:ut.name}').requestVerification('test@example.com');
`:"")),M.$set(v),(!se||d&1)&&K!==(K=n[0].name+"")&&ae(W,K),n[6]?J||(J=kt(),J.c(),J.m(k,null)):J&&(J.d(1),J=null),n[1]?V?V.p(n,d):(V=yt(n),V.c(),V.m(N,Q)):V&&(V.d(1),V=null),d&32&&(ge=ce(n[5]),H=Ne(H,d,lt,1,n,ge,je,N,pt,vt,null,_t)),d&12&&(Ce=ce(n[3]),x=Ne(x,d,nt,1,n,Ce,Ze,_e,pt,wt,null,mt)),d&12&&(ye=ce(n[3]),Mt(),j=Ne(j,d,it,1,n,ye,tt,ke,Pt,gt,null,bt),Ft())},i(n){if(!se){ve(M.$$.fragment,n),ve(re.$$.fragment,n),ve(de.$$.fragment,n);for(let d=0;d<ye.length;d+=1)ve(j[d]);se=!0}},o(n){he(M.$$.fragment,n),he(re.$$.fragment,n),he(de.$$.fragment,n);for(let d=0;d<j.length;d+=1)he(j[d]);se=!1},d(n){n&&(o(e),o(u),o(_),o(U),o(z),o(F),o(T),o(k),o(D),o(X),o(Z),o(O),o(Me),o(pe),o(Pe),o(le),o(Ae),o(me),o(Ve),o(ie)),$e(M,n),J&&J.d(),V&&V.d();for(let d=0;d<H.length;d+=1)H[d].d();$e(re),$e(de);for(let d=0;d<x.length;d+=1)x[d].d();for(let d=0;d<j.length;d+=1)j[d].d()}}}const Kt=s=>s.name=="emailVisibility",Wt=s=>s.name=="email";function Xt(s,e,t){let l,c,f,u,_,{collection:b}=e,q=200,y=[];function g(S){let $=we.dummyCollectionSchemaData(S,!0);return l&&($.password="12345678",$.passwordConfirm="12345678",delete $.verified),$}const A=S=>t(2,q=S.code);return s.$$set=S=>{"collection"in S&&t(0,b=S.collection)},s.$$.update=()=>{var S,$,R;s.$$.dirty&1&&t(1,l=b.type==="auth"),s.$$.dirty&1&&t(6,c=(b==null?void 0:b.createRule)===null),s.$$.dirty&2&&t(8,f=l?["password","verified","email","emailVisibility"]:[]),s.$$.dirty&257&&t(5,u=((S=b==null?void 0:b.fields)==null?void 0:S.filter(P=>!P.hidden&&P.type!="autodate"&&!f.includes(P.name)))||[]),s.$$.dirty&1&&t(3,y=[{code:200,body:JSON.stringify(we.dummyCollectionRecord(b),null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to create record.",
                  "data": {
                    "${(R=($=b==null?void 0:b.fields)==null?void 0:$[0])==null?void 0:R.name}": {
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
            `}])},t(4,_=we.getApiExampleUrl(Lt.baseURL)),[b,l,q,y,_,u,c,g,f,A]}class tl extends $t{constructor(e){super(),qt(this,e,Xt,Gt,Tt,{collection:0})}}export{tl as default};
