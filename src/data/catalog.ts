import type { Organization, Resource } from '../types';
export const DATA_DATE = '2026-09-20';
export const scenarios = ['Brand','Technische Hilfeleistung','Unwetter / Hochwasser','ABC / Gefahrstoff','Personensuche','Stromausfall / Blackout','Evakuierung / Betreuung','Sonstige Lage / freie Suche'];
export const scenarioGroups: Record<string,string[]> = {
'Brand':['Löschmittel','Pumpen','Drohnen / Erkundung','Beleuchtung','Atemschutz'],
'Technische Hilfeleistung':['Verkehrsunfall','Lkw / Bus','Bahn','Gebäudeeinsturz','schwere technische Rettung','Großtierrettung'],
'Unwetter / Hochwasser':['Pumpen','Hochwasserschutz','Sandsacklogistik','Stromversorgung','Beleuchtung','Motorsägen / Sturmschäden','Drohnen / Erkundung','Transport / Logistik','Aufenthalt / Heizung','Verpflegung'],
'ABC / Gefahrstoff':['Gefahrstoff','Löschmittel','Drohnen / Erkundung'],
'Personensuche':['Drohnen / Erkundung','Beleuchtung','Aufenthalt / Heizung'],
'Stromausfall / Blackout':['Stromversorgung','Beleuchtung','Aufenthalt / Heizung','Verpflegung'],
'Evakuierung / Betreuung':['Transport / Logistik','Aufenthalt / Heizung','Verpflegung']};
export const organizations: Organization[] = [
{id:'ff1',name:'FF Lindenhain',type:'Feuerwehr',location:'Lindenhain',distanceKm:8},
{id:'ff2',name:'FF Eichenbrück',type:'Feuerwehr',location:'Eichenbrück',distanceKm:14},
{id:'ff3',name:'FF Falkenried',type:'Feuerwehr',location:'Falkenried',distanceKm:19},
{id:'ff4',name:'FF Hohenfeld',type:'Feuerwehr',location:'Hohenfeld',distanceKm:26},
{id:'ff5',name:'FF Seebach-West',type:'Feuerwehr',location:'Seebach',distanceKm:32},
{id:'thw',name:'THW – OV Musterstadt',type:'THW',location:'Musterstadt',distanceKm:21}];
const U=scenarios[2], T=scenarios[1], B=scenarios[0], A=scenarios[3], P=scenarios[4], S=scenarios[5], E=scenarios[6];
type Row = [string,string,string,string,string[],string[],string[],string,string?];
const rows: Row[] = [
['Großpumpe','thw','5.000 l/min','Anhänger',['Pumpen'],[U,B],['Hochwasser','Schmutzwasser'],'Förderung großer Wassermengen aus überfluteten Bereichen. Beispielwert abhängig von Förderhöhe und Schlauchstrecke.','Saugschläuche, Druckschläuche, Schmutzfangkorb'],
['Schmutzwasserpumpe','ff1','1.200 l/min','Fahrzeug',['Pumpen'],[U],['Keller','Wasser','Schmutzwasser'],'Tauchpumpe für überflutete Keller und verschmutztes Wasser.','Schläuche, Stromleitung'],
['Mobiles Hochwasserschutzsystem','thw','100 m Schutzlänge','Lkw',['Hochwasserschutz'],[U],['Überflutung','Wasser','Barriere'],'Modulares System zum Aufbau temporärer Wasserbarrieren.','Verbindungselemente, Befüllzubehör'],
['Sandsackfüllanlage','ff2','1.500 Säcke/h','Anhänger',['Sandsacklogistik'],[U],['Sandsäcke','Deich','Hochwasser'],'Mobile Füllanlage mit vier Arbeitsplätzen.','Fülltrichter, Sackhalter'],
['Drohne mit Wärmebildkamera','ff3','45 min Flugzeit','Fahrzeug',['Drohnen / Erkundung'],[U,B,P,A,T],['Wärmebild','Suche','Erkundung','Luftbild'],'Luftgestützte Erkundung mit Wärmebild- und Tageslichtkamera.','Ersatzakkus, Bildschirm'],
['Leistungsfähige Motorsäge','ff4','5,4 kW · 63 cm','Fahrzeug',['Motorsägen / Sturmschäden'],[U,T],['Baum','Bäume','Holz','Sturm','Verkehrsunfall'],'Motorsäge zur Bearbeitung starker Stämme und umgestürzter Bäume.','Schnittschutz, Ersatzkette'],
['Zeltheizung','ff5','40 kW','Fahrzeug',['Aufenthalt / Heizung'],[U,S,E,P],['Wärme','Heizung','Zelt'],'Warmlufterzeuger zur Beheizung temporärer Aufenthaltsbereiche.','Warmluftschläuche, Brennstoffbehälter'],
['Aufenthaltszelt','ff1','40 Personen · 60 m²','Anhänger',['Aufenthalt / Heizung'],[U,S,E,P],['Unterkunft','Betreuung','Zelt'],'Temporärer wettergeschützter Aufenthaltsraum.','Zeltboden, Sitzbänke'],
['Netzersatzanlage','thw','100 kVA','Anhänger',['Stromversorgung'],[U,S,E,B],['Strom','Generator','Energie'],'Mobile Stromversorgung. Anschluss und Betrieb ausschließlich durch geeignetes Fachpersonal.','Verteiler, Erdungssatz, Kabel'],
['Beleuchtungsanhänger','ff2','90.000 lm · 9 m Mast','Anhänger',['Beleuchtung'],[U,S,P,T,B],['Licht','Nacht','Ausleuchtung','Bahn','Verkehrsunfall'],'Mobile Flächenbeleuchtung mit eigenem Generator.','LED-Strahler, Abstützungen'],
['Großtierrettungsgeschirr','ff4','2.000 kg Tragfähigkeit','Fahrzeug',['Großtierrettung'],[T],['Pferd','Rind','Tier','Hebegeschirr'],'Geschirr zur technischen Rettung großer Tiere. Geeignetes Hebegerät und fachkundige Begleitung erforderlich.','Hebegeschirr, Anschlagmittel'],
['Seilwinde','thw','50 kN Zugkraft','Lkw',['Großtierrettung','schwere technische Rettung','Lkw / Bus'],[T,U],['Bergen','Ziehen','Verkehrsunfall'],'Fahrzeuggebundene Seilwinde für technische Bergungsarbeiten.','Umlenkrolle, Schäkel'],
['Abstützsystem','thw','20 t je Stütze','Lkw',['Gebäudeeinsturz','schwere technische Rettung','Bahn'],[T],['Stützen','Gebäude','Trümmer'],'Modulares System zur temporären Abstützung. Einsatzgrenzen abhängig vom Aufbau.','Stützen, Verbindungen, Lastplatten'],
['Schaummittel','ff3','1.000 l Vorrat','Lkw',['Löschmittel'],[B,A],['Schaum','Flüssigkeitsbrand'],'Fiktiver Schaummittelvorrat; konkrete Eignung ist im Anforderungsweg zu klären.','IBC-Behälter, Entnahmearmatur'],
['Sonderlöschmittel','ff5','250 kg Metallbrandpulver','Fahrzeug',['Löschmittel'],[B,A],['Metallbrand','Pulver'],'Vorrat für besondere Brandlagen. Stoffbezogene Eignung vor Einsatz klären.','Behälter, Aufbringhilfen'],
['Berge- und Rettungsnetz','ff4','1.500 kg Tragfähigkeit','Fahrzeug',['Großtierrettung'],[T],['Tier','Netz','Pferd'],'Rettungsnetz für große Tiere und geeignete Hebevorgänge.','Anschlagmittel, Kantenschutz'],
['Schleif- und Gleitplatte','ff4','1.000 kg Nutzlast','Fahrzeug',['Großtierrettung'],[T],['Tier','Gleitplatte','Bergung'],'Gleitplatte für bodennahe Rettung und Bewegung großer Tiere.','Zugschlaufen, Befestigungsgurte'],
['Teleskoplader mit Hebegerät','thw','3.500 kg max. Traglast','Tieflader',['Großtierrettung','Transport / Logistik','Lkw / Bus'],[T,U],['Maschine','Heben','Logistik'],'Maschine mit wechselbaren Anbaugeräten. Traglast abhängig von Ausladung.','Lasthaken, Palettengabel, Anschlagmittel'],
['Hydraulischer Rettungssatz','ff1','Schere · Spreizer · Zylinder','Fahrzeug',['Verkehrsunfall','Lkw / Bus','Bahn'],[T],['Rettung','Schneiden','Hydraulik'],'Akkubetriebener Satz für technische Rettung.','Ersatzakkus, Rettungszylinder'],
['Feldküche','ff5','200 Portionen/h','Anhänger',['Verpflegung'],[U,S,E],['Essen','Versorgung','Betreuung'],'Mobile Küche für die Verpflegung von Einsatzkräften.','Kochbehälter, Ausgabezubehör'],
['Gerätewagen Logistik','ff2','6 Palettenplätze','Lkw',['Transport / Logistik'],[U,E,T],['Transport','Material','Logistik'],'Fahrzeug mit Ladebordwand für Materialtransporte.','Hubwagen, Ladungssicherung'],
['Gefahrstoff-Messkoffer','ff3','4 Messkanäle','Fahrzeug',['Gefahrstoff'],[A],['Messen','Gas','Erkundung'],'Tragbare Messausrüstung mit fiktiver Beispielkonfiguration.','Prüfgas, Messsonde'],
['Atemschutzreserve','ff1','12 Geräte','Fahrzeug',['Atemschutz'],[B,A],['Atemschutz','Reserve'],'Zusätzliche Atemschutzgeräte für größere Lagen.','Ersatzflaschen'],
['Materialkiste Reserve','ff2','1 Kiste','Fahrzeug',[],[],['Reserve'],'Noch nicht kategorisierte Beispielressource.']];
export const initialResources: Resource[] = rows.map((r,i)=>({id:`r${i+1}`,name:r[0],organizationId:r[1],quantity:i===5?3:1,capacity:r[2],transport:r[3],categories:r[4],scenarios:r[5],tags:r[6],description:r[7],components:r[8]?.split(', ')??[],personnel:r[0].includes('Drohne')?'2 qualifizierte Bedienpersonen':'Bedienpersonal erforderlich · 2–4 Personen (Beispiel)',confirmedAt:DATA_DATE,requestPath:'Fiktiver Anforderungsweg: über die zuständige Leitstelle unter Angabe der Ressource und der Organisation. In diesem Prototyp sind keine Kontaktdaten oder Alarmierungsfunktionen hinterlegt.'}));
