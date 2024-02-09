"use strict";(self.webpackChunkworkshop_container=self.webpackChunkworkshop_container||[]).push([[560],{9752:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var a=r(7624),i=r(2172);const s={title:"9. MariaDB-Container verbinden",sidebar_position:10},t=void 0,d={id:"connect_mariadb",title:"9. MariaDB-Container verbinden",description:"In diesem Lab erweitern wir unsere Python-Webanwendung, sodass sie auf eine MariaDB-Instanz zugreifen und Daten lesen kann. Dies erm\xf6glicht es uns, dynamische Inhalte in unserer Flask-App anzuzeigen, die aus der Datenbank abgerufen werden.",source:"@site/docs/09_connect_mariadb.md",sourceDirName:".",slug:"/connect_mariadb",permalink:"/workshop-container/docs/connect_mariadb",draft:!1,unlisted:!1,editUrl:"https://github.com/natrontech/workshop-container/tree/main/docs/09_connect_mariadb.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"9. MariaDB-Container verbinden",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"8.2 Sicherheitsscans",permalink:"/workshop-container/docs/image_build/08_02_security_scanning"}},l={},o=[{value:"Vorbereitung der MariaDB-Instanz",id:"vorbereitung-der-mariadb-instanz",level:2},{value:"\xdcberpr\xfcfung, ob der MariaDB-Container l\xe4uft",id:"\xfcberpr\xfcfung-ob-der-mariadb-container-l\xe4uft",level:3},{value:"Bef\xfcllen der MariaDB mit Mock-Daten",id:"bef\xfcllen-der-mariadb-mit-mock-daten",level:3},{value:"Erweiterung der Flask-Anwendung",id:"erweiterung-der-flask-anwendung",level:2},{value:"Aktualisierung der <code>requirements.txt</code>",id:"aktualisierung-der-requirementstxt",level:3},{value:"Aktualisierung der Flask-Anwendung",id:"aktualisierung-der-flask-anwendung",level:3},{value:"Neubau und Neustart des Flask-Containers",id:"neubau-und-neustart-des-flask-containers",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In diesem Lab erweitern wir unsere Python-Webanwendung, sodass sie auf eine MariaDB-Instanz zugreifen und Daten lesen kann. Dies erm\xf6glicht es uns, dynamische Inhalte in unserer Flask-App anzuzeigen, die aus der Datenbank abgerufen werden."}),"\n",(0,a.jsx)(n.h2,{id:"vorbereitung-der-mariadb-instanz",children:"Vorbereitung der MariaDB-Instanz"}),"\n",(0,a.jsx)(n.p,{children:"Bevor wir unsere Flask-Anwendung erweitern, m\xfcssen wir sicherstellen, dass unser MariaDB-Container l\xe4uft und mit Daten gef\xfcllt ist, die wir abfragen k\xf6nnen."}),"\n",(0,a.jsx)(n.h3,{id:"\xfcberpr\xfcfung-ob-der-mariadb-container-l\xe4uft",children:"\xdcberpr\xfcfung, ob der MariaDB-Container l\xe4uft"}),"\n",(0,a.jsx)(n.p,{children:"L\xf6sche den alten MariaDB-Container, falls er noch l\xe4uft:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker ps\ndocker stop <container-id>\ndocker rm <container-id>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Starte ihn erneut:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run --name mariadb-container \\\n            -v volume-mariadb:/var/lib/mysql \\\n            -e MARIADB_ROOT_PASSWORD=my-secret-pw \\\n            -d mariadb\n"})}),"\n",(0,a.jsx)(n.h3,{id:"bef\xfcllen-der-mariadb-mit-mock-daten",children:"Bef\xfcllen der MariaDB mit Mock-Daten"}),"\n",(0,a.jsx)(n.p,{children:"Verbinde dich mit der MariaDB-Instanz:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker exec -it mariadb-container mariadb -uroot -pmy-secret-pw\n"})}),"\n",(0,a.jsx)(n.p,{children:"Erstelle eine einfache Tabelle und f\xfcge einige Mock-Daten ein:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE flaskapp;\nUSE flaskapp;\nCREATE TABLE users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    email VARCHAR(255) NOT NULL\n);\nINSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com'), ('Jane Doe', 'jane.doe@example.com');\n"})}),"\n",(0,a.jsx)(n.p,{children:"Verlasse die MariaDB-Shell mit:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"exit;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"erweiterung-der-flask-anwendung",children:"Erweiterung der Flask-Anwendung"}),"\n",(0,a.jsxs)(n.p,{children:["Um die Flask-Anwendung zu erweitern, damit sie auf die MariaDB-Instanz zugreifen kann, ben\xf6tigen wir einen MySQL-Treiber f\xfcr Python. Wir werden ",(0,a.jsx)(n.code,{children:"PyMySQL"})," verwenden."]}),"\n",(0,a.jsxs)(n.h3,{id:"aktualisierung-der-requirementstxt",children:["Aktualisierung der ",(0,a.jsx)(n.code,{children:"requirements.txt"})]}),"\n",(0,a.jsxs)(n.p,{children:["F\xfcge ",(0,a.jsx)(n.code,{children:"PyMySQL"})," zur ",(0,a.jsx)(n.code,{children:"requirements.txt"})," hinzu:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",metastring:'title="requirements.txt"',children:"Flask==3.0.2\nPyMySQL==1.1.0\n"})}),"\n",(0,a.jsx)(n.h3,{id:"aktualisierung-der-flask-anwendung",children:"Aktualisierung der Flask-Anwendung"}),"\n",(0,a.jsxs)(n.p,{children:["Aktualisiere die ",(0,a.jsx)(n.code,{children:"app.py"}),", um eine Verbindung zur MariaDB herzustellen und Daten aus der ",(0,a.jsx)(n.code,{children:"users"}),"-Tabelle zu lesen:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:"from flask import Flask, jsonify\nimport pymysql.cursors\n\napp = Flask(__name__)\n\ndef get_db_connection():\n    connection = pymysql.connect(host='mariadb-container',\n                                 user='root',\n                                 password='my-secret-pw',\n                                 database='flaskapp',\n                                 cursorclass=pymysql.cursors.DictCursor)\n    return connection\n\n@app.route('/')\ndef users():\n    connection = get_db_connection()\n    with connection.cursor() as cursor:\n        cursor.execute(\"SELECT * FROM users\")\n        users = cursor.fetchall()\n    connection.close()\n    return jsonify(users)\n\nif __name__ == '__main__':\n    app.run(debug=True, host='0.0.0.0', port=5000)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"neubau-und-neustart-des-flask-containers",children:"Neubau und Neustart des Flask-Containers"}),"\n",(0,a.jsx)(n.p,{children:"Baue das Docker-Image f\xfcr die Anwendung erneut, um die \xc4nderungen zu \xfcbernehmen:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker build -t python-flask-app .\n"})}),"\n",(0,a.jsx)(n.p,{children:"Stoppe und entferne den alten Flask-Container, falls er noch l\xe4uft:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker stop python-webapp\ndocker rm python-webapp\n"})}),"\n",(0,a.jsx)(n.p,{children:"Starte den Flask-Container erneut:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -d -p 5000:5000 --name python-webapp --link mariadb-container:mariadb-container python-flask-app\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Nun kannst du auf ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"http://localhost:5000",children:"http://localhost:5000"})})," zugreifen, um die Daten aus der MariaDB-Instanz in deiner Flask-Anwendung angezeigt zu bekommen."]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},2172:(e,n,r)=>{r.d(n,{I:()=>d,M:()=>t});var a=r(1504);const i={},s=a.createContext(i);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);