npx nest generate module messages

-> Module
-> Controller
-> Service

Freesqldatabase.com

FreeSQLDatabase: hinepih908@frisbook.com
password: ******

create module
nest g mo [module-names]

create controller
nest g co [controller-names]

create service
nest g s [service-names]

create guard
nest g gu [guard-name]

Installation de [Bycrypt](https://www.npmjs.com/package/bcrypt)

`npm install bcrypt`
`npm i @types/bcrypt`

Paquage de validato 
`npm i class-validator class-transformer` apres cela faut preciser l'utilisation des pipes dans le main (ce qui revient a le rendre accessible sur toute l'app)

Installation jwt
`npm i @nestjs/jwt`

Plaforme du randon [hash 256](https://onlinehashtools.com/generate-random-sha256-hash)

Your account number is: 1351947

Your new database is now ready to use.

To connect to your database use these details;

Host: sql7.freesqldatabase.com
Database name: sql7781490
Database user: sql7781490
Database password: zXgRepyxi1
Port number: 3306

Install packages
Pour la gestion des variables d'Env
`npm install dotenv @nestjs/config`

Pour type nos requetes sql
`npm install @nestjs/typeorm typeorm mysql2`

Apres on fait des config dans `src/app.module.ts`, les imports