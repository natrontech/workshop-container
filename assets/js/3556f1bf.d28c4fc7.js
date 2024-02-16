"use strict";(self.webpackChunkworkshop_container=self.webpackChunkworkshop_container||[]).push([[326],{5044:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=i(7624),t=i(2172);const s={title:"8.1 Mehrstufiger Build",sidebar_position:1},d=void 0,l={id:"image_build/08_01_multistage_build",title:"8.1 Mehrstufiger Build",description:"Multistage Builds in Docker bieten eine effiziente Methode, um leichte und optimierte Container-Images zu erstellen. Durch die Verwendung von Multistage Builds kannst du in einem einzigen Dockerfile verschiedene Build-Phasen definieren, wobei jede Phase ein eigenes Basis-Image verwenden kann. Am Ende kannst du selektiv Artefakte von einer Phase zur n\xe4chsten \xfcbertragen, was dazu f\xfchrt, dass das finale Image nur die notwendigen Abh\xe4ngigkeiten und Artefakte enth\xe4lt.",source:"@site/docs/08_image_build/08_01_multistage_build.md",sourceDirName:"08_image_build",slug:"/image_build/08_01_multistage_build",permalink:"/workshop-container/docs/image_build/08_01_multistage_build",draft:!1,unlisted:!1,editUrl:"https://github.com/natrontech/workshop-container/tree/main/docs/08_image_build/08_01_multistage_build.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"8.1 Mehrstufiger Build",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"8. Wie funktioniert das Image-Building?",permalink:"/workshop-container/docs/image_build/"},next:{title:"8.2 Sicherheitsscans",permalink:"/workshop-container/docs/image_build/08_02_security_scanning"}},a={},u=[{value:"Einf\xfchrung in Multistage Builds",id:"einf\xfchrung-in-multistage-builds",level:2},{value:"Beispiel: Optimierung des Python-App-Images",id:"beispiel-optimierung-des-python-app-images",level:2},{value:"Dockerfile vor der Optimierung",id:"dockerfile-vor-der-optimierung",level:3},{value:"Dockerfile nach der Optimierung mit Multistage Build",id:"dockerfile-nach-der-optimierung-mit-multistage-build",level:3},{value:"Erkl\xe4rung",id:"erkl\xe4rung",level:3},{value:"Vorteile",id:"vorteile",level:3},{value:"Bau des Images",id:"bau-des-images",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Multistage Builds in Docker bieten eine effiziente Methode, um leichte und optimierte Container-Images zu erstellen. Durch die Verwendung von Multistage Builds kannst du in einem einzigen Dockerfile verschiedene Build-Phasen definieren, wobei jede Phase ein eigenes Basis-Image verwenden kann. Am Ende kannst du selektiv Artefakte von einer Phase zur n\xe4chsten \xfcbertragen, was dazu f\xfchrt, dass das finale Image nur die notwendigen Abh\xe4ngigkeiten und Artefakte enth\xe4lt."}),"\n",(0,r.jsx)(n.h2,{id:"einf\xfchrung-in-multistage-builds",children:"Einf\xfchrung in Multistage Builds"}),"\n",(0,r.jsx)(n.p,{children:"Das Ziel eines Multistage Builds ist es, die Gr\xf6\xdfe des finalen Images zu minimieren und die Sicherheit zu erh\xf6hen, indem nur die notwendigen Abh\xe4ngigkeiten und Artefakte im finalen Image enthalten sind. Dies ist besonders n\xfctzlich in Sprachen und Umgebungen, in denen der Build-Prozess Abh\xe4ngigkeiten und Tools ben\xf6tigt, die zur Laufzeit nicht erforderlich sind."}),"\n",(0,r.jsx)(n.h2,{id:"beispiel-optimierung-des-python-app-images",children:"Beispiel: Optimierung des Python-App-Images"}),"\n",(0,r.jsx)(n.p,{children:"Angenommen, wir haben eine Python-Webanwendung entwickelt, die wir in einem Docker-Container deployen m\xf6chten. Der Build-Prozess f\xfcr die Anwendung erfordert verschiedene Abh\xe4ngigkeiten, aber f\xfcr die Ausf\xfchrung der Anwendung sind nicht alle Build-Abh\xe4ngigkeiten notwendig."}),"\n",(0,r.jsx)(n.h3,{id:"dockerfile-vor-der-optimierung",children:"Dockerfile vor der Optimierung"}),"\n",(0,r.jsx)(n.p,{children:"Das urspr\xfcngliche Dockerfile k\xf6nnte folgenderma\xdfen aussehen:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Dockerfile",children:'FROM python:3.12-slim\n\nWORKDIR /app\n\nCOPY ./python-app/ /app/\n\nRUN pip install -r requirements.txt\n\nCMD ["python", "app.py"]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"dockerfile-nach-der-optimierung-mit-multistage-build",children:"Dockerfile nach der Optimierung mit Multistage Build"}),"\n",(0,r.jsx)(n.p,{children:"Wir k\xf6nnen das Dockerfile optimieren, indem wir einen Multistage Build verwenden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Dockerfile",metastring:'title="Dockerfile"',children:'# Build-Stage\nFROM python:3.12-slim AS builder\n\nWORKDIR /build\n\nCOPY ./python-app/requirements.txt /build/\n\nRUN pip install --target=/build/dependencies -r requirements.txt\n\n# Final-Stage\nFROM python:3.12-slim\n\nWORKDIR /app\n\nCOPY --from=builder /build/dependencies /usr/local\nCOPY ./python-app/ /app/\n\nCMD ["python", "app.py"]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"erkl\xe4rung",children:"Erkl\xe4rung"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Build-Stage"}),": Diese Stage verwendet das ",(0,r.jsx)(n.code,{children:"python:3.12-slim"}),"-Image, um eine Umgebung f\xfcr den Build-Prozess bereitzustellen. Hier werden die Abh\xe4ngigkeiten der Anwendung installiert. Durch die Verwendung von ",(0,r.jsx)(n.code,{children:"--target=/build/dependencies"})," werden die Abh\xe4ngigkeiten in einem separaten Verzeichnis gespeichert, das sp\xe4ter im finalen Image verwendet werden kann."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Final-Stage"}),": Diese Stage startet ebenfalls mit dem ",(0,r.jsx)(n.code,{children:"python:3.12-slim"}),"-Image, um das finale Image so klein wie m\xf6glich zu halten. Hier werden nur die notwendigen Abh\xe4ngigkeiten aus der Build-Stage kopiert. Anschlie\xdfend wird der Anwendungscode in das Image kopiert."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"vorteile",children:"Vorteile"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Gr\xf6\xdfenreduktion"}),": Das finale Image enth\xe4lt nur die f\xfcr die Ausf\xfchrung der Anwendung notwendigen Abh\xe4ngigkeiten und Artefakte, was zu einem kleineren Image f\xfchrt."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sicherheit"}),": Weniger Code und weniger Abh\xe4ngigkeiten im finalen Image bedeuten eine geringere Angriffsfl\xe4che f\xfcr Sicherheitsl\xfccken."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Effizienz"}),": Multistage Builds erm\xf6glichen die Wiederverwendung von Zwischenimages, was den Build-Prozess beschleunigen kann, besonders wenn mehrere Builds durchgef\xfchrt werden."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"bau-des-images",children:"Bau des Images"}),"\n",(0,r.jsx)(n.p,{children:"Um das Image zu bauen, f\xfchre einfach den folgenden Befehl aus:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker build -t optimierte-python-app .\n"})}),"\n",(0,r.jsx)(n.p,{children:"Durch die Anwendung von Multistage Builds kannst du effizientere, sicherere und kleinere Docker-Images erstellen, die speziell auf die Anforderungen Ihrer Anwendung zugeschnitten sind."})]})}function g(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>d});var r=i(1504);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);