import{S as xe,i as Ee,s as Je,T as Ne,U as Ve,V as Q,d as i,h as Z,t as V,a as x,y as pe,X as We,Y as ze,q as Qe,Z as Ze,c as Ge,b as c,u as a,m as G,l as o,z as _,x as h,j as I,o as p,G as Be,p as Ie,B as K,C as Ke}from"./index-ptO8SeqW.js";import{F as Xe}from"./FieldsQueryParam-B0w5NF6Y.js";function Fe(s,l,n){const r=s.slice();return r[5]=l[n],r}function Le(s,l,n){const r=s.slice();return r[5]=l[n],r}function je(s,l){let n,r=l[5].code+"",f,g,d,b;function k(){return l[4](l[5])}return{key:s,first:null,c(){n=o("button"),f=_(r),g=h(),p(n,"class","tab-item"),K(n,"active",l[1]===l[5].code),this.first=n},m(v,O){c(v,n,O),a(n,f),a(n,g),d||(b=Ke(n,"click",k),d=!0)},p(v,O){l=v,O&4&&r!==(r=l[5].code+"")&&pe(f,r),O&6&&K(n,"active",l[1]===l[5].code)},d(v){v&&i(n),d=!1,b()}}}function He(s,l){let n,r,f,g;return r=new Ve({props:{content:l[5].body}}),{key:s,first:null,c(){n=o("div"),I(r.$$.fragment),f=h(),p(n,"class","tab-item"),K(n,"active",l[1]===l[5].code),this.first=n},m(d,b){c(d,n,b),G(r,n,null),a(n,f),g=!0},p(d,b){l=d;const k={};b&4&&(k.content=l[5].body),r.$set(k),(!g||b&6)&&K(n,"active",l[1]===l[5].code)},i(d){g||(x(r.$$.fragment,d),g=!0)},o(d){V(r.$$.fragment,d),g=!1},d(d){d&&i(n),Z(r)}}}function Ye(s){let l,n,r=s[0].name+"",f,g,d,b,k,v,O,D,X,y,E,be,J,P,me,Y,N=s[0].name+"",ee,fe,te,M,ae,U,le,W,ne,A,oe,ge,B,S,se,_e,re,ke,m,ve,C,we,$e,Oe,ie,ye,ce,Ae,Se,Te,de,Ce,qe,q,ue,F,he,T,L,$=[],Re=new Map,De,j,w=[],Pe=new Map,R;v=new Ne({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${s[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${s[3]}/api/oauth2-redirect as redirect url.
        const authData = await pb.collection('${s[0].name}').authWithOAuth2({ provider: 'google' });

        // OR authenticate with manual OAuth2 code exchange
        // const authData = await pb.collection('${s[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:url_launcher/url_launcher.dart';

        final pb = PocketBase('${s[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${s[3]}/api/oauth2-redirect as redirect url.
        final authData = await pb.collection('${s[0].name}').authWithOAuth2('google', (url) async {
          await launchUrl(url);
        });

        // OR authenticate with manual OAuth2 code exchange
        // final authData = await pb.collection('${s[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}}),C=new Ve({props:{content:"?expand=relField1,relField2.subRelField"}}),q=new Xe({props:{prefix:"record."}});let z=Q(s[2]);const Me=e=>e[5].code;for(let e=0;e<z.length;e+=1){let t=Le(s,z,e),u=Me(t);Re.set(u,$[e]=je(u,t))}let H=Q(s[2]);const Ue=e=>e[5].code;for(let e=0;e<H.length;e+=1){let t=Fe(s,H,e),u=Ue(t);Pe.set(u,w[e]=He(u,t))}return{c(){l=o("h3"),n=_("Auth with OAuth2 ("),f=_(r),g=_(")"),d=h(),b=o("div"),b.innerHTML=`<p>Authenticate with an OAuth2 provider and returns a new auth token and record data.</p> <p>For more details please check the
        <a href="https://pocketbase.io/docs/authentication#authenticate-with-oauth2" target="_blank" rel="noopener noreferrer">OAuth2 integration documentation
        </a>.</p>`,k=h(),I(v.$$.fragment),O=h(),D=o("h6"),D.textContent="API details",X=h(),y=o("div"),E=o("strong"),E.textContent="POST",be=h(),J=o("div"),P=o("p"),me=_("/api/collections/"),Y=o("strong"),ee=_(N),fe=_("/auth-with-oauth2"),te=h(),M=o("div"),M.textContent="Body Parameters",ae=h(),U=o("table"),U.innerHTML=`<thead><tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>provider</span></div></td> <td><span class="label">String</span></td> <td>The name of the OAuth2 client provider (eg. &quot;google&quot;).</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>code</span></div></td> <td><span class="label">String</span></td> <td>The authorization code returned from the initial request.</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>codeVerifier</span></div></td> <td><span class="label">String</span></td> <td>The code verifier sent with the initial request as part of the code_challenge.</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>redirectURL</span></div></td> <td><span class="label">String</span></td> <td>The redirect url sent with the initial request.</td></tr> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>createData</span></div></td> <td><span class="label">Object</span></td> <td><p>Optional data that will be used when creating the auth record on OAuth2 sign-up.</p> <p>The created auth record must comply with the same requirements and validations in the
                    regular <strong>create</strong> action.
                    <br/> <em>The data can only be in <code>json</code>, aka. <code>multipart/form-data</code> and files
                        upload currently are not supported during OAuth2 sign-ups.</em></p></td></tr></tbody>`,le=h(),W=o("div"),W.textContent="Query parameters",ne=h(),A=o("table"),oe=o("thead"),oe.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',ge=h(),B=o("tbody"),S=o("tr"),se=o("td"),se.textContent="expand",_e=h(),re=o("td"),re.innerHTML='<span class="label">String</span>',ke=h(),m=o("td"),ve=_(`Auto expand record relations. Ex.:\r
                `),I(C.$$.fragment),we=_(`\r
                Supports up to 6-levels depth nested relations expansion. `),$e=o("br"),Oe=_(`\r
                The expanded relations will be appended to the record under the\r
                `),ie=o("code"),ie.textContent="expand",ye=_(" property (eg. "),ce=o("code"),ce.textContent='"expand": {"relField1": {...}, ...}',Ae=_(`).\r
                `),Se=o("br"),Te=_(`\r
                Only the relations to which the request user has permissions to `),de=o("strong"),de.textContent="view",Ce=_(" will be expanded."),qe=h(),I(q.$$.fragment),ue=h(),F=o("div"),F.textContent="Responses",he=h(),T=o("div"),L=o("div");for(let e=0;e<$.length;e+=1)$[e].c();De=h(),j=o("div");for(let e=0;e<w.length;e+=1)w[e].c();p(l,"class","m-b-sm"),p(b,"class","content txt-lg m-b-sm"),p(D,"class","m-b-xs"),p(E,"class","label label-primary"),p(J,"class","content"),p(y,"class","alert alert-success"),p(M,"class","section-title"),p(U,"class","table-compact table-border m-b-base"),p(W,"class","section-title"),p(A,"class","table-compact table-border m-b-base"),p(F,"class","section-title"),p(L,"class","tabs-header compact combined left"),p(j,"class","tabs-content"),p(T,"class","tabs")},m(e,t){c(e,l,t),a(l,n),a(l,f),a(l,g),c(e,d,t),c(e,b,t),c(e,k,t),G(v,e,t),c(e,O,t),c(e,D,t),c(e,X,t),c(e,y,t),a(y,E),a(y,be),a(y,J),a(J,P),a(P,me),a(P,Y),a(Y,ee),a(P,fe),c(e,te,t),c(e,M,t),c(e,ae,t),c(e,U,t),c(e,le,t),c(e,W,t),c(e,ne,t),c(e,A,t),a(A,oe),a(A,ge),a(A,B),a(B,S),a(S,se),a(S,_e),a(S,re),a(S,ke),a(S,m),a(m,ve),G(C,m,null),a(m,we),a(m,$e),a(m,Oe),a(m,ie),a(m,ye),a(m,ce),a(m,Ae),a(m,Se),a(m,Te),a(m,de),a(m,Ce),a(B,qe),G(q,B,null),c(e,ue,t),c(e,F,t),c(e,he,t),c(e,T,t),a(T,L);for(let u=0;u<$.length;u+=1)$[u]&&$[u].m(L,null);a(T,De),a(T,j);for(let u=0;u<w.length;u+=1)w[u]&&w[u].m(j,null);R=!0},p(e,[t]){(!R||t&1)&&r!==(r=e[0].name+"")&&pe(f,r);const u={};t&9&&(u.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${e[3]}/api/oauth2-redirect as redirect url.
        const authData = await pb.collection('${e[0].name}').authWithOAuth2({ provider: 'google' });

        // OR authenticate with manual OAuth2 code exchange
        // const authData = await pb.collection('${e[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),t&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:url_launcher/url_launcher.dart';

        final pb = PocketBase('${e[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${e[3]}/api/oauth2-redirect as redirect url.
        final authData = await pb.collection('${e[0].name}').authWithOAuth2('google', (url) async {
          await launchUrl(url);
        });

        // OR authenticate with manual OAuth2 code exchange
        // final authData = await pb.collection('${e[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),v.$set(u),(!R||t&1)&&N!==(N=e[0].name+"")&&pe(ee,N),t&6&&(z=Q(e[2]),$=We($,t,Me,1,e,z,Re,L,ze,je,null,Le)),t&6&&(H=Q(e[2]),Qe(),w=We(w,t,Ue,1,e,H,Pe,j,Ze,He,null,Fe),Ge())},i(e){if(!R){x(v.$$.fragment,e),x(C.$$.fragment,e),x(q.$$.fragment,e);for(let t=0;t<H.length;t+=1)x(w[t]);R=!0}},o(e){V(v.$$.fragment,e),V(C.$$.fragment,e),V(q.$$.fragment,e);for(let t=0;t<w.length;t+=1)V(w[t]);R=!1},d(e){e&&(i(l),i(d),i(b),i(k),i(O),i(D),i(X),i(y),i(te),i(M),i(ae),i(U),i(le),i(W),i(ne),i(A),i(ue),i(F),i(he),i(T)),Z(v,e),Z(C),Z(q);for(let t=0;t<$.length;t+=1)$[t].d();for(let t=0;t<w.length;t+=1)w[t].d()}}}function et(s,l,n){let r,{collection:f}=l,g=200,d=[];const b=k=>n(1,g=k.code);return s.$$set=k=>{"collection"in k&&n(0,f=k.collection)},s.$$.update=()=>{s.$$.dirty&1&&n(2,d=[{code:200,body:JSON.stringify({token:"JWT_AUTH_TOKEN",record:Be.dummyCollectionRecord(f),meta:{id:"abc123",name:"John Doe",username:"john.doe",email:"test@example.com",avatarURL:"https://example.com/avatar.png",accessToken:"...",refreshToken:"...",expiry:"2022-01-01 10:00:00.123Z",isNew:!1,rawUser:{}}},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "provider": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])},n(3,r=Be.getApiExampleUrl(Ie.baseURL)),[f,g,d,r,b]}class lt extends xe{constructor(l){super(),Ee(this,l,et,Ye,Je,{collection:0})}}export{lt as default};
