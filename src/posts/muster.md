---
# Dies ist das Muster für einen neuen POST auf Bits & Bäume
# Zwischen den drei "---" ganz oben und weiter unten werden Metainformationen eingetragen.
# Metainformationen gehören immer nur GENAU zwischen zwei Anführungszeichen.
# Trage nur zwischen den "" deine Informationen ein.
# Erst unter den letzten "---" darf mit Markdown formatierter Text stehen.
# Alles was hinter einem "#" steht gilt nicht und ist kommentar. Nimm ein "#" weg, wenn du die jeweilige information dahinter festlegen willst.


## Meta Informationen
title: "Titel des Posts"
datum: "202X-MM-TT" 			# Das Datum des Posts - Das Format YYYY-MM-DD muss eingehalten werden!
autorin: ""				# Mehrere Autor:innen mit Komma getrennt
# permalink: ""				# Falls diese Seite unter einer spezielle URL erreichbar sein soll und nicht unter /posts/datei-name
# type: "Alternativtyp"			# Der "Type" eines Posts steht oben in den Kacheln und auf der Seite ganz oben.
					# Standardmäßig ist der Typ "Meldung". Hier kannst du das ändern z.B. "Bericht" oder "Jobangebot" etc.

## Aktuell und Featured?
# aktuell:  "ja" 				# ja - Wenn dieser Post auf der Hauptseite unter Aktuelles auftauchen soll (falls er nicht featured ist)
# featured: "ja"  			# ja - Wenn dieser Post direkt als erstes auf der Landing Page angezeigt werden soll, ansonsten "nein" oder Zeile löschen

## Textfragmente
einleitung: ""				# Die Einleitung erscheint auf der Seite noch vor den Autor:innen und dem Feature Image
teaser: ""				# Der Teaser wird auf den Kacheln als Anreißertext angezeigt.
meta_beschreibung: "" 			# ≤135 Zeichen Beschreibugnstext der in Social Media und Suchergebnissen unter dem Titel angezeigt wird (also extern)

## Feature Image für die Kachel, Social Media und auf der Seite selbst
# bild: "/assets/images/BILD.png"
# bildunterschrift: ""


## Auf der Kachel wird standardmäßig ein Button "weiterlesen" angezeigt. Dieser kann hier angepasst oder versteckt werden
## Button 1
# button_anzeigen:  nein 			# Entferne "#" um den Button zu verstecken
# button_text: "eigene Buttonbeschriftung"	# Der Button-Text ist standardmäßig "weiterlesen"
# button_url: "andere URL"			# Hier kannst du ein alternatives Ziel z.B. eine extern URL angeben

## Button 2
# button2_anzeigen: "ja" 			# Entferne "#" um den Button anzuzueigen
# button2_text: "zur Pressemitteilung"		# Der Button-Text ist standardmäßig "weiterlesen"
# button2_url: "/forderungen/"			# DIE URL ist standardmäßig die des Posts - Hier kannst du ein alternatives Ziel z.B. eine extern URL angeben


## Auf der Vorschau-Kacheln wird standardmäßog ein Icons angezeigt, das kann hier abgeschaltet werden.
#icon: ""					# Entferne das "#" um das Icon auf der Kachel auszuschalten

#########################################################################################################
### Unter den Drei folgenden Strichen "---" Geht der Inhalt los der in Markdown formatiert sein darf! ###
#########################################################################################################
---

## Übeschrift H2
### Überschrift H3
Die hier ist Markdown Fließtext in normal in *KURSIV* und **FETT**!
In diesem Muster werden sowohl Markdown als auch weiter unten HTML Elemente gemischt genutzt.

* Liste
  * Eingerückt
  
- Alternatives Zeichen
  - für eine Liste

Es folgt ein Klickbarer blauer Button, der als Aufforderung genutzt werden kann etwas zu tun. Z.B. "Jetzt anmelden"

<a href="https://zieldomain.de/zielslug">
<button class="btn-dark">BUTTONBESCHRIFTUNG</button>
</a>

<h1>Sprungmarken</h1>

<p>
  <a href="#zweitens">Ein Verweis auf die zweite Überschrift</a><br>
</p>

<h2 id="erstens">Eine erste Überschrift</h1>
<p>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>

<h2 id="zweitens">Eine zweite Überschrift</h1>

<p>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>






