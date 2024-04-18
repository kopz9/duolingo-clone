# Duolingo Clone

Deploy link: https://duolingo-clone-green.vercel.app/

run project
````
npm run dev
````
.env
```` 
Clerk:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
````
Stripe:
````
STRIPE_API_KEY= 
STRIPE_WEBHOOK_SECRET=
````
Neon:
```` 
DATABASE_URL=
````

run db scripts: 
````
npm run db:push
npm run db:seed //fill courses
npm run db:reset // reset db
````

check db:
````
npm run db:studio
````


