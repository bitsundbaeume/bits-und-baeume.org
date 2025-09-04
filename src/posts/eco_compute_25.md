---
# Dies ist das Muster für einen neuen POST auf Bits & Bäume
# Zwischen den drei "---" ganz oben und weiter unten werden Metainformationen eingetragen.
# Metainformationen gehören immer nur GENAU zwischen zwei Anführungszeichen.
# Trage nur zwischen den "" deine Informationen ein.
# Erst unter den letzten "---" darf mit Markdown formatierter Text stehen.
# Alles was hinter einem "#" steht gilt nicht und ist kommentar. Nimm ein "#" weg, wenn du die jeweilige information dahinter festlegen willst.


## Meta Informationen
title: "Bits & Bäume auf der ecoCompute 2025!"
datum: "2025-08-28" 			# Das Datum des Posts - Das Format YYYY-MM-DD muss eingehalten werden!
autorin: "Leo Rath"	# Mehrere Autor:innen mit Komma getrennt

type: "Einladung"			# Der "Type" eines Posts steht oben in den Kacheln und auf der Seite ganz oben.
					# Standardmäßig ist der Typ "Meldung". Hier kannst du das ändern z.B. "Bericht" oder "Jobangebot" etc.

## Aktuell und Featured?
aktuell:  "ja" 				# ja - Wenn dieser Post auf der Hauptseite unter Aktuelles auftauchen soll (falls er nicht featured ist)
featured: "ja"  			# ja - Wenn dieser Post direkt als erstes auf der Landing Page angezeigt werden soll, ansonsten "nein" oder Zeile löschen

## Textfragmente
einleitung: "Mit einem eigenen Bits & Bäume Community-Track sind wir dieses Jahr am 13. & 14.11. bei der EcoCompute. Die Tech-Konferenz für digitale Nachhaltigkeit im Bereich Software, Hardware und Rechenzentren bietet ein vielfältiges Programm mit Workshops und Talks. Du hast Lust, etwas zum Programm beizutragen? Dann folge dem Call for Content!"				# Die Einleitung erscheint auf der Seite noch vor den Autor:innen und dem Feature Image
teaser: "Mit einem eigenen Bits & Bäume Community-Track sind wir dieses Jahr am 13. & 14.11. bei der EcoCompute. Die Tech-Konferenz für digitale Nachhaltigkeit im Bereich Software, Hardware und Rechenzentren bietet ein vielfältiges Programm mit Workshops und Talks. Du hast Lust, etwas zum Programm und zum B&B-Track beizutragen? Dann folge dem Call for Content!"				# Der Teaser wird auf den Kacheln als Anreißertext angezeigt.
meta_beschreibung: "Mit einem eigenen Bits & Bäume Community-Track sind wir dieses Jahr am 13. & 14.11. bei der EcoCompute." 			# ≤135 Zeichen Beschreibugnstext der in Social Media und Suchergebnissen unter dem Titel angezeigt wird (also extern)

## Feature Image für die Kachel, Social Media und auf der Seite selbst
bild: "/assets/images/posts/wald_eco.jpg"
#bildunterschrift: "Silke Mayer (CC-BY)"


## Auf der Kachel wird standardmäßig ein Button "weiterlesen" angezeigt. Dieser kann hier angepasst oder versteckt werden
## Button 1
# button_anzeigen:  nein 			# Entferne "#" um den Button zu verstecken
button_text: "zur EcoCompute"	# Der Button-Text ist standardmäßig "weiterlesen"
button_url: "https://www.eco-compute.io/"			# Hier kannst du ein alternatives Ziel z.B. eine extern URL angeben

## Button 2
button2_anzeigen: "ja" 			# Entferne "#" um den Button anzuzueigen
button2_text: "zum Call for Content"		# Der Button-Text ist standardmäßig "weiterlesen"
button2_url: "https://cfp.eco-compute.io/community-track-2025/cfp"			# DIE URL ist standardmäßig die des Posts - Hier kannst du ein alternatives Ziel z.B. eine extern URL angeben


## Auf der Vorschau-Kacheln wird standardmäßog ein Icons angezeigt, das kann hier abgeschaltet werden.
#icon: ""					# Entferne das "#" um das Icon auf der Kachel auszuschalten

#########################################################################################################
### Unter den Drei folgenden Strichen "---" Geht der Inhalt los der in Markdown formatiert sein darf! ###
#########################################################################################################
---
<a href="https://cfp.eco-compute.io/community-track-2025/cfp">
<button class="btn-dark">zum Call for Content</button>
</a>