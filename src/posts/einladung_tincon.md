---
# Dies ist das Muster für einen neuen POST auf Bits & Bäume
# Zwischen den drei "---" ganz oben und weiter unten werden Metainformationen eingetragen.
# Metainformationen gehören immer nur GENAU zwischen zwei Anführungszeichen.
# Trage nur zwischen den "" deine Informationen ein.
# Erst unter den letzten "---" darf mit Markdown formatierter Text stehen.
# Alles was hinter einem "#" steht gilt nicht und ist kommentar. Nimm ein "#" weg, wenn du die jeweilige information dahinter festlegen willst.


## Meta Informationen
title: "Bits & Bäume auf der TINCON 2025!"
datum: "2025-09-11" 			# Das Datum des Posts - Das Format YYYY-MM-DD muss eingehalten werden!
autorin: "Leo Rath"	# Mehrere Autor:innen mit Komma getrennt

type: "Einladung"			# Der "Type" eines Posts steht oben in den Kacheln und auf der Seite ganz oben.
					# Standardmäßig ist der Typ "Meldung". Hier kannst du das ändern z.B. "Bericht" oder "Jobangebot" etc.

## Aktuell und Featured?
aktuell:  "nein" 				# ja - Wenn dieser Post auf der Hauptseite unter Aktuelles auftauchen soll (falls er nicht featured ist)
featured: "nein"  			# ja - Wenn dieser Post direkt als erstes auf der Landing Page angezeigt werden soll, ansonsten "nein" oder Zeile löschen

## Textfragmente
einleitung: "Bits & Bäume ist auf der diesjährigen TINCON in Hamburg am 30.9. & 1.10. mit einem Vortrag dabei! Unsere Netzwerk-Koordinatorin Rike spricht am 30.9. um 13:30 über das Thema „Klimakrise durch KI?! Die ökologischen Kosten von ChatGPT und Co.“. Seid dabei – es gibt ein vielfältiges Programm!"				# Die Einleitung erscheint auf der Seite noch vor den Autor:innen und dem Feature Image
teaser: "Bits & Bäume ist auf der diesjährigen TINCON in Hamburg am 30.9. & 1.10. mit einem Vortrag dabei! Unsere Netzwerk-Koordinatorin Rike spricht am 30.9. um 13:30 über das Thema „Klimakrise durch KI?! Die ökologischen Kosten von ChatGPT und Co.“. Seid dabei – es gibt ein vielfältiges Programm!"				# Der Teaser wird auf den Kacheln als Anreißertext angezeigt.
meta_beschreibung: MBits & Bäume ist auf der diesjährigen TINCON in Hamburg am 30.9. & 1.10. mit einem Vortrag dabei!" 			# ≤135 Zeichen Beschreibugnstext der in Social Media und Suchergebnissen unter dem Titel angezeigt wird (also extern)

## Feature Image für die Kachel, Social Media und auf der Seite selbst
bild: "/assets/images/posts/tincon_2022_logo.png"
#bildunterschrift: "Silke Mayer (CC-BY)"


## Auf der Kachel wird standardmäßig ein Button "weiterlesen" angezeigt. Dieser kann hier angepasst oder versteckt werden
## Button 1
# button_anzeigen:  nein 			# Entferne "#" um den Button zu verstecken
button_text: "Zur TINCON"	# Der Button-Text ist standardmäßig "weiterlesen"
button_url: "https://tincon.org/event/hamburg25"			# Hier kannst du ein alternatives Ziel z.B. eine extern URL angeben

## Button 2
button2_anzeigen: "ja" 			# Entferne "#" um den Button anzuzueigen
button2_text: "Zum Vortrag"		# Der Button-Text ist standardmäßig "weiterlesen"
button2_url: "https://tincon.org/speaker/rike/event:hamburg25"			# DIE URL ist standardmäßig die des Posts - Hier kannst du ein alternatives Ziel z.B. eine extern URL angeben


## Auf der Vorschau-Kacheln wird standardmäßog ein Icons angezeigt, das kann hier abgeschaltet werden.
#icon: ""					# Entferne das "#" um das Icon auf der Kachel auszuschalten

#########################################################################################################
### Unter den Drei folgenden Strichen "---" Geht der Inhalt los der in Markdown formatiert sein darf! ###
#########################################################################################################
---
<a href="https://tincon.org/speaker/rike/event:hamburg25">
<button class="btn-dark">zum Vortrag</button>
</a>