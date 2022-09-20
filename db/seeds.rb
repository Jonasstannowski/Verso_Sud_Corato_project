# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Location.new

Location.create!(
  name: 'Oltre Il Velo',
  address: 'Piazza di Vagno, Corato',
  subject: '',
  text: 'UN MURALE PER IL PRIMO PARAMENTARE VITTIMA DEL FASCISMO
        Era il 25 settembre 1921. Il deputato socialista Giuseppe Di Vagno si trovava nella cittadina di Mola di Bari, in Puglia, la sua regione natale, e aveva appena partecipato alla cerimonia di apertura di una sede del partito. Erano le prime ore della sera e passeggiava con amici e compagni in attesa dell auto che doveva riportarlo a casa. Aveva 32 anni e sua moglie aspettava un figlio. Nel 1914 era stato eletto consigliere comunale e poi provinciale. Si era schierato contro la prima guerra mondiale e per questo era stato mandato al confino in Sardegna. Alle elezioni politiche generali del 1921, nella circoscrizione di Bari-Foggia, era stato il secondo più votato tra i candidati di sinistra. Per via della sua statura e del suo carattere, Di Vagno era soprannominato il gigante buono. Come tanti altri dirigenti socialisti di quel tempo, di professione faceva l avvocato.
        All improvviso, un gruppo di giovani benvestiti emerse “dal buio in fila indiana”. Si udì qualcuno dare un ordine. Uno di loro aveva il bavero alzato, mano sinistra in tasca, cappello a falde calato sugli occhi. Tutto successe molto rapidamente. Dei colpi di arma da fuoco furono esplosi alle spalle del deputato a distanza ravvicinata; due lo colpirono alla schiena. Di Vagno cadde a terra in un lago di sangue.

        Oggi, a celebrare Di Vagno è un opera nel centro storico di Corato, in provincia di Bari, realizzata per il festival Verso Sud (2-4 ottobre), a cura dell associazione Lavorare Stanca. Senza l ausilio di fondi pubblici. Un monumento insolitamente effimero, come effimera è l arte a misura di muri metropolitani.

        La firma è di uno tra gli street artist italiani più talentuosi nell ambito della figurazione: Luis Gomez  venezuelano di nascita, romano d adozione  ha regalato alla piazza intitolata al politico pugliese un murale alto dieci metri e largo cinque, dipinto sulla facciata cieca di una palazzina privata. Col consenso della proprietà, i permessi dell amministrazione comunale e il plauso della cittadinanza.
        Un lavoro potente. Bianchi e neri corposi, chiaroscuri netti, posa ieratica e taglio teatrale: è la cifra stilistica di Gomez, che alla Steet Art si è accostato con la maestria di un pittore da cavalletto, reinventando  nella sintesi di timbri e strutture, nel gesto rapido e soffice  l enfasi di una ricerca legata alla grande tradizione secentesca. Oltre il velo  che è il titolo dell opera e una barriera simbolica, squarciata con un gesto gentile  c è un cespuglio di fiori. Nuova vita, speranza resistente, contro i fascismi e le ingiustizie di sempre.

        C Artribune
        '
)

Location.create!(
  name: 'La reggine de Abbazia',
  address: 'Via Papagno 28, Corato',
  subject: 'test',
  text: Cloudinary::Utils.cloudinary_url("16107180_1641327562828867_5260579686812244877_o_bdsktl.jpg")

)

Location.create!(
  name: 'Pieta',
  address: 'Via San Benedetto 66, Corato',
  subject: 'test'
)
