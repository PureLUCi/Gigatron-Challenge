# Take-home Projekat : API za Promenu Veličine Slika

## Uvod

Hvala vam na interesovanju za poziciju "Backend developer" u našoj kompaniji. Cenimo vašu posvećenost procesu prijave. Ovaj zadatak je dizajniran kako bismo procenili vaše veštine i pristup rešavanju problema u stvarnom scenariju.

## Pregled Projekta

**Cilj:**  
Izgradite RESTful API za čuvanje i promenu veličine slika. Ovaj projekat ima za cilj procenu vašeg poznavanja različitih tehnologija, kao i vaše sposobnosti da dizajnirate i implementirate skalabilna rešenja na backend-u.
Vaš zadatak podrazumeva prelzak Junior u Medior, Medior ili viši nivo senioriteta, zbog potreba pozicije za samostalnim dizajniranjem i razvijanjem softvera od samog početka ovaj projekat neće imati postavku.

## Use cases

1. **Slanje slika:**
   - Krajnji korisnik treba da ima mogućnost da pošalje sliku (POST via REST/Binary/(x)RPC)
   - Aplikacija validira i čuva sliku lokalno
   - Krajnji korisnik kao odgovor dobija URL od slike koji kasnije može koristiti

2. **Dobijanje slika:**
   - Krajnji korisnik koristi URL dobijen iz response-a 
   - Krajnji korisnik može napraviti GET request na URL koji je dobio od aplikacije kako bi dobio sliku (Važno je naglasiti da ova ruta treba da se ponaša kao path do statičnog fajla, ne da vraća sliku u response body-u ili slično)
   - Krajnji korisnik može dodavati parametre u URL i aplikacija će (on the fly) izmeniti sliku. Dostupni parametri mogu biti visina, širina i format
   

## Zahtevi

1. **Tehnologije:**
    - Jedan od jezika po želji: TypeScript(Node/Bun/Deno), Go, Rust - Bilo koja biblioteka ili framework (ili bez)
    - Git
    - Docker (i varijacije): Projekat mora da ima mogućnost pokretanja i rada unutar (nekog) Docker okruženja

2. **Funkcionalnosti:**
    - Operacije dodavanja, čitanja, ažuriranja i brisanja slika (CRUD)
    - "On the fly" modifikacija slika (in-memory)

3. **Dokumentacija API-ja:**
    - Jasno dokumentujte API endpointe za krajnje korisnike. (OAPI 3 / Swagger / Postman)
    - Dokumentujte strukturu i kod projekta za developere (MD, testovi i komentari su dovoljni)
    - Dokumentacija za postavku i pokretanje projekta

4. **Testiranje:**
    - Implementacija unit, integration i e2e testova (po proceni)

5. **Skalabilnost:**
    - Uključite razmatranje skalabilnosti i optimizacije performansi u vašem dizajnu.

6. **Bonus:**
    - Korišćenje adekvatnih struktura i pattern-a koda i infrastrukture radi optimizacije ako zadatak to zahteva (npr. Koristiti Queue za duge ili zahtevne procese)
    - Ekstenzibilnost koda
    - Security i validacija

## Uputstva

1. **Postavljanje:**
    - Klonirajte ovaj repozitorijum i pratite uputstva za postavljanje u README.md fajlu.

2. **Vremenski okvir:**
    - Očekivano vreme potrebno za ovaj projekat je oko 8-12 sati.

3. **Dostava:**
    - Pošaljite svoj projekat kreiranjem privatnog repozitorijuma na GitHub-u i podelite link sa nama.

4. **Kriterijumi za ocenjivanje:**
    - Kvalitet koda
    - Arhitektura i struktura koda
    - Dokumentacija

## Dodatne Napomene

- Ako imate bilo kakvih pitanja ili vam je potrebno pojašnjenje, slobodno nam se obratite na development@gigatron.dev ili direktno kontaktirajte pošiljaoca 
- Nakon evaluacije vašeg zadatka, želimo napomenuti da ćemo zadržati vaš rad u našem internom repozitorijumu. Ova praksa nam pomaže da pratimo razvoj kandidata tokom vremena i omogućava nam da, ako se budete ponovo prijavili u budućnosti, imamo referencu za vaš prethodni rad. 
- Naglašavamo da ćemo sve dostavljene radove tretirati sa visokim stepenom poverljivosti. Nikada nećemo koristiti vaš rad/kod na bilo koji način koji bi mogao štetiti vašim interesima, a naročito nećemo koristiti ili komercijalizovati vaš kod i implementaciju. Vaš kod će biti čuvan kao poverljiv podatak i nećemo ga deliti ni sa kim izvan naše organizacije. 

Svako drobro i uspeh u radu,
Gigatron
