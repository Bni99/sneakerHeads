# Feature Slice Design

Layer
Slice
Segment

## Layer

# App

[This folder will tell what is the entry point of our app, entry points can be multiple as well, just create a folder app under src and move app.css and app.tsx there , so now har ek folder mai index.ts file bnani hai and that means that this thing can be used outside of that module]
[file name lower case mai hoga ya bich mai dash hoga]

# Pages [routes]

[Abhi jo app mai pages rhenge vo aap ek nye folder m bnao that is pages, ab esa hota hai like jitne upar ho hierarchy mai ap niche walo ko use kr skte like app can import from pages, widgets , features , but pages cant import from app like wise]

# Widgtes

[Stand alone ui components hote hai]

# Shared

[Shared mai vo chize add krenge jo across features use krskte hai , isme business logic ho skta hai]

# Library

[Extreme reusable , no business logic can be used or imported out , example button , accordion]

ab har ek folder m alag alag component ho skte hai , or unko hm index.ts file bnaege ek
ab usko bolte hai slice
ab ek slice ko bhi hum segment m divide krskte hai jse ui , api

##Now in tailwind release 4.0 you dont even need tailwind.config.ts , u can just add theme in index.css file
