"use strict";(self.webpackChunkworkshop_container=self.webpackChunkworkshop_container||[]).push([[924],{4452:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=i(7624),t=i(2172);const s={title:"6. Volumes",sidebar_position:7},a=void 0,o={id:"volumes",title:"6. Volumes",description:"\ud83e\udd14 Ich habe einen Container mit einem Datenbankserver laufen. Was passiert mit meinen Daten, wenn ich den Container entferne?",source:"@site/docs/06_volumes.md",sourceDirName:".",slug:"/volumes",permalink:"/workshop-container/docs/volumes",draft:!1,unlisted:!1,editUrl:"https://github.com/natrontech/workshop-container/tree/main/docs/06_volumes.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"6. Volumes",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"5. Container Name",permalink:"/workshop-container/docs/container_name"}},l={},c=[{value:"Ein Volume in einem Container einbinden",id:"ein-volume-in-einem-container-einbinden",level:2},{value:"Zus\xe4tzliche Infos zur Arbeit mit Docker-Volumes",id:"zus\xe4tzliche-infos-zur-arbeit-mit-docker-volumes",level:2},{value:"Docker-Speichertreiber",id:"docker-speichertreiber",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:"\ud83e\udd14 Ich habe einen Container mit einem Datenbankserver laufen. Was passiert mit meinen Daten, wenn ich den Container entferne?"})}),(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"Sie sind weg. Die Docker-Instanz hat keine Persistenzschicht, um Daten dauerhaft zu speichern, lass uns dieses Problem in diesem Kapitel angehen."})})]}),"\n",(0,r.jsx)(n.h2,{id:"ein-volume-in-einem-container-einbinden",children:"Ein Volume in einem Container einbinden"}),"\n",(0,r.jsx)(n.p,{children:"Der MariaDB-Container ist ein gutes Beispiel daf\xfcr, warum es gut ist, ein externes Volume zu haben.\nEs gibt mehrere M\xf6glichkeiten, wie man mit Volumes in Docker arbeiten kann, in diesem Fall werden wir ein von Docker verwaltetes Volume erstellen, um die persistenten Daten unserer MariaDB zu speichern. Das Volume wird von Docker selbst verwaltet."}),"\n",(0,r.jsx)(n.p,{children:"Erstelle das von Docker verwaltete Volume mit:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker volume create volume-mariadb\n"})}),"\n",(0,r.jsx)(n.p,{children:"Nun benutze das erstellte Volume und h\xe4nge es an die MariaDB-Datenbank an."}),"\n",(0,r.jsxs)(n.p,{children:["Mit dem Parameter ",(0,r.jsx)(n.code,{children:"-v"})," das Volume an einen Pfad im Container anh\xe4ngen:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run --name mariadb-container-with-external-volume -v volume-mariadb:/var/lib/mysql -e MARIADB_ROOT_PASSWORD=my-secret-pw -d mariadb\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Siehe ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/storage/volumes/",children:"Dokumentation zu Docker-Volumes"})," f\xfcr mehr Informationen."]}),"\n",(0,r.jsx)(n.p,{children:"Okay, nun erstelle einen neuen Benutzer im MariaDB-Container:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker exec -it mariadb-container-with-external-volume mariadb -uroot -pmy-secret-pw\n"})}),"\n",(0,r.jsx)(n.p,{children:"Im mariadb-Client f\xfchre einige SQL-Befehle aus:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"use mysql\nCREATE USER 'peter'@'%' IDENTIFIED BY 'venkman';\nGRANT SELECT ON * . * TO 'peter'@'%';\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sobald alle Schritte abgeschlossen sind, beende die MySQL-Sitzung und verlasse den Container:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"exit;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Um zu testen, ob Peter korrekt erstellt wurde, einfach mit seinen Anmeldedaten einloggen."}),"\n",(0,r.jsxs)(n.p,{children:["Nun stoppe und entferne den ",(0,r.jsx)(n.code,{children:"mariadb-container-with-external-volume"})," Container."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker stop mariadb-container-with-external-volume\ndocker rm mariadb-container-with-external-volume\n"})}),"\n",(0,r.jsx)(n.p,{children:"Als N\xe4chstes \xfcberpr\xfcfe, ob die Daten noch verf\xfcgbar sind.\nErstelle einen neuen MariaDB-Container mit dem vorherigen Volume:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run --name mariadb-container-with-existing-external-volume \\\n            -v volume-mariadb:/var/lib/mysql \\\n            -e MARIADB_ROOT_PASSWORD=my-secret-pw \\\n            -d mariadb\n"})}),"\n",(0,r.jsx)(n.p,{children:"Der Moment der Wahrheit... Verbinde dich mit dem Datenbankserver mit Peters Anmeldedaten:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker exec -it mariadb-container-with-existing-external-volume mariadb -upeter -pvenkman\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Du solltest nun als ",(0,r.jsx)(n.code,{children:"peter"})," mit deiner Datenbankinstanz verbunden sein. Du kannst dies testen, indem du die Benutzer mit dem SQL-Client auflistest:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"SELECT User FROM mysql.user;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"+-----------------+\n| USER()          |\n+-----------------+\n| peter@localhost |\n+-----------------+\n1 Zeile in Satz (0.00 Sek.)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Jetzt verlasse den MySQL-Client"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"exit;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"zus\xe4tzliche-infos-zur-arbeit-mit-docker-volumes",children:"Zus\xe4tzliche Infos zur Arbeit mit Docker-Volumes"}),"\n",(0,r.jsx)(n.p,{children:"Docker-Volumes k\xf6nnen verwendet werden f\xfcr:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Entkoppeln der gespeicherten Daten vom Container, der die Daten erstellt hat"}),"\n",(0,r.jsx)(n.li,{children:"Umgehen des Copy-on-Write-Systems, um native Festplatten-I/O-Leistung zu erzielen"}),"\n",(0,r.jsx)(n.li,{children:"Umgehen von Copy-on-Write, um einige Dateien aus dem Docker-Commit auszuschliessen"}),"\n",(0,r.jsx)(n.li,{children:"Teilen eines Verzeichnisses zwischen mehreren Containern"}),"\n",(0,r.jsx)(n.li,{children:"Teilen eines Verzeichnisses zwischen dem Host und einem Container"}),"\n",(0,r.jsx)(n.li,{children:"Teilen einer einzelnen Datei zwischen dem Host und einem Container\nEine Alternative zur Arbeit mit Volumes w\xe4re das Einbinden lokaler Verzeichnisse (Host-Ordner) \xfcber einen Pfad in deinen Container. Dies werden wir in Kapitel 08 verwenden."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"docker-speichertreiber",children:"Docker-Speichertreiber"}),"\n",(0,r.jsx)(n.p,{children:"Wenn du viele Docker-Container auf einer Maschine betreibst, ben\xf6tigst du normalerweise viel Speicher. Docker-Volumes und Container-Speicher werden auf einem Dateisystem bereitgestellt. Der folgende Link bietet zus\xe4tzliche Informationen dar\xfcber, wie du das richtige Speichersetup ausw\xe4hlst:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html/managing_containers/managing_storage_with_docker_formatted_containers",children:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html/managing_containers/managing_storage_with_docker_formatted_containers"})}),"\n",(0,r.jsxs)(n.p,{children:["Derzeit ist ",(0,r.jsx)(n.code,{children:"overlay2"})," der ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/storage/storagedriver/select-storage-driver/#docker-ce",children:"empfohlene Speichertreiber"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>a});var r=i(1504);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);