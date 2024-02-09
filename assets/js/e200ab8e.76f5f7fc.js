"use strict";(self.webpackChunkworkshop_container=self.webpackChunkworkshop_container||[]).push([[112],{9748:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(7624),o=r(2172);const i={title:"1. Erste Schritte",sidebar_position:2},s="Erste Schritte",a={id:"erste_schritte",title:"1. Erste Schritte",description:"Die Kommandozeile",source:"@site/docs/01_erste_schritte.md",sourceDirName:".",slug:"/erste_schritte",permalink:"/workshop-container/docs/erste_schritte",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01_erste_schritte.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"1. Erste Schritte",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Einf\xfchrung",permalink:"/workshop-container/docs/intro"}},c={},d=[{value:"Die Kommandozeile",id:"die-kommandozeile",level:2},{value:"Hello World (mit Docker)",id:"hello-world-mit-docker",level:2},{value:"Dein erster Container \ud83c\udf89",id:"dein-erster-container-",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"erste-schritte",children:"Erste Schritte"}),"\n",(0,t.jsx)(n.h2,{id:"die-kommandozeile",children:"Die Kommandozeile"}),"\n",(0,t.jsxs)(n.p,{children:["Mit Docker installiert und funktionsf\xe4hig, ist jetzt der richtige Zeitpunkt, dich mit der Befehlszeilenanwendung vertraut zu machen. Die Verwendung von Docker besteht darin, mindestens einen Befehl zu verwenden. ",(0,t.jsx)(n.code,{children:"docker --help"})," zeigt die verf\xfcgbaren Optionen."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker --help\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Usage: docker COMMAND\n\nA self-sufficient runtime for containers\n\nOptions:\n      --config string      Location of client config files (default "/home/user/.docker")\n  -D, --debug              Enable debug mode\n      --help               Print usage\n  -H, --host list          Daemon socket(s) to connect to\n  -l, --log-level string   Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")\n      --tls                Use TLS; implied by --tlsverify\n      --tlscacert string   Trust certs signed only by this CA (default "/home/user/.docker/ca.pem")\n      --tlscert string     Path to TLS certificate file (default "/home/user/.docker/cert.pem")\n      --tlskey string      Path to TLS key file (default "/home/user/.docker/key.pem")\n      --tlsverify          Use TLS and verify the remote\n  -v, --version            Print version information and quit\n\nManagement Commands:\n  config      Manage Docker configs\n  container   Manage containers\n  image       Manage images\n  network     Manage networks\n  node        Manage Swarm nodes\n  plugin      Manage plugins\n  secret      Manage Docker secrets\n  service     Manage services\n  stack       Manage Docker stacks\n  swarm       Manage Swarm\n  system      Manage Docker\n  volume      Manage volumes\n\nCommands:\n  attach      Attach local standard input, output, and error streams to a running container\n  build       Build an image from a Dockerfile\n  commit      Create a new image from a container\'s changes\n  cp          Copy files/folders between a container and the local filesystem\n  create      Create a new container\n  diff        Inspect changes to files or directories on a container\'s filesystem\n  events      Get real time events from the server\n  exec        Run a command in a running container\n  export      Export a container\'s filesystem as a tar archive\n  history     Show the history of an image\n  images      List images\n  import      Import the contents from a tarball to create a filesystem image\n  info        Display system-wide information\n  inspect     Return low-level information on Docker objects\n  kill        Kill one or more running containers\n  load        Load an image from a tar archive or STDIN\n  login       Log in to a Docker registry\n  logout      Log out from a Docker registry\n  logs        Fetch the logs of a container\n  pause       Pause all processes within one or more containers\n  port        List port mappings or a specific mapping for the container\n  ps          List containers\n  pull        Pull an image or a repository from a registry\n  push        Push an image or a repository to a registry\n  rename      Rename a container\n  restart     Restart one or more containers\n  rm          Remove one or more containers\n  rmi         Remove one or more images\n  run         Run a command in a new container\n  save        Save one or more images to a tar archive (streamed to STDOUT by default)\n  search      Search the Docker Hub for images\n  start       Start one or more stopped containers\n  stats       Display a live stream of container(s) resource usage statistics\n  stop        Stop one or more running containers\n  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE\n  top         Display the running processes of a container\n  unpause     Unpause all processes within one or more containers\n  update      Update configuration of one or more containers\n  version     Show the Docker version information\n  wait        Block until one or more containers stop, then print their exit codes\n\nRun \'docker COMMAND --help\' for more information on a command.\n'})}),"\n",(0,t.jsx)(n.p,{children:"Um die f\xfcr einen spezifischen Befehl verf\xfcgbaren Schalter zu sehen, tippe:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker <command> --help\n"})}),"\n",(0,t.jsx)(n.p,{children:"Um systemweite Informationen \xfcber Docker zu sehen, benutze:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker info\n"})}),"\n",(0,t.jsx)(n.h2,{id:"hello-world-mit-docker",children:"Hello World (mit Docker)"}),"\n",(0,t.jsx)(n.p,{children:"Docker-Container werden aus Docker-Images ausgef\xfchrt. Standardm\xe4\xdfig ziehen sie diese Images von Docker Hub, einer Docker-Registry, die von Docker Inc, dem Unternehmen hinter dem Docker-Projekt, verwaltet wird. Jeder kann seine Docker-Images auf Docker Hub erstellen und hosten, daher findest du f\xfcr viele Anwendungen und Linux-Distributionen Docker-Images, die auf Docker Hub gehostet werden."}),"\n",(0,t.jsx)(n.p,{children:"Um zu \xfcberpr\xfcfen, ob du auf Docker Hub zugreifen und Images herunterladen kannst, tippe:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run hello-world\n"})}),"\n",(0,t.jsx)(n.p,{children:"Die Ausgabe, die Folgendes beinhalten sollte, deutet darauf hin, dass Docker korrekt zu funktionieren scheint:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Hello from Docker.\nThis message shows that your installation appears to be working correctly.\n...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"dein-erster-container-",children:"Dein erster Container \ud83c\udf89"}),"\n",(0,t.jsx)(n.p,{children:"Mit diesem Befehl haben wir gerade unseren ersten Container auf unserem Computer ausgef\xfchrt. Er f\xfchrte einen einfachen Prozess aus, der eine Nachricht auf der Standardausgabe ausgab, der Container selbst ist jedoch nicht sehr n\xfctzlich."}),"\n",(0,t.jsx)(n.h1,{id:"docker-dokumentation",children:"Docker Dokumentation"}),"\n",(0,t.jsxs)(n.p,{children:["Besuche ",(0,t.jsx)(n.a,{href:"https://docs.docker.com",children:"https://docs.docker.com"})," und mache dich mit den Dokumentationen sowie den Referenzen vertraut. In diesem Training verwenden wir Docker CE, daher k\xf6nnte es auch sinnvoll sein, diesen Abschnitt in der Dokumentation zu \xfcberpr\xfcfen."]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Frage: Muss ich den Namen des Docker Images auswendig kennen?"}),(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Nein! Es gibt Unmengen von ",(0,t.jsx)(n.strong,{children:"Images"}),", die von Unternehmen, Open-Source-Projekten und Einzelpersonen bereitgestellt werden. Du kannst diese Images in verschiedenen Registries suchen, einige der bekannteren sind ",(0,t.jsx)(n.a,{href:"https://hub.docker.com",children:"Docker Hub"})," und ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry",children:"Github Container Registry"}),". Sieh dir das n\xe4chste Lab f\xfcr weitere Details an."]})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},2172:(e,n,r)=>{r.d(n,{I:()=>a,M:()=>s});var t=r(1504);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);