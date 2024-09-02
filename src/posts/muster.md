---

#icon: "" # Entferne das erste # um das Icon auf der Kachel auszuschalten
#type: "Eigener Typ" # Typ ist in diesem Ordner automatsch Meldung kann aber hier überschrieben werden z.B. mit "Veröffentlichung" - der Typ erscheint in der Kachel über der Überschrift


# aktuell: ja # Wenn dieser Post nicht mehr aktuell ist einfach diese Zeile mit # am Anfang der Zeile auskommentieren
datum: "202X-MM-TT"
autorin: 

# permalink:
#bild: "/assets/images/BILD.png"
#bildunterschrift: ""

title: ""

# Zwischen Überschrift und Text
einleitung: 

# Für die Kacheln auf der Website
teaser: 

# Für Social media und Suchergebnisse (also extern)
meta_beschreibung: 

# Button "weiterlesen" auf der Hauptseite kann umbenannt, ausgeblendet und zu anderer z.B. Externer URL zeigen
#button_anzeigen = nein 
#button_text: "eigene Buttonbeschriftung"
#button_url: "andere URL"


eleventyComputed:
  sortierbaresDatum: "{{ datum.split('.')[2] }}-{{ datum.split('.')[1] }}-{{ datum.split('.')[0] }}"
---
