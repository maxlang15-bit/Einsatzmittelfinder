import { test } from 'node:test';
import assert from 'node:assert/strict';
import { initialResources, organizations, scenarios } from '../data/catalog.ts';
import { matchesSearch } from './search.ts';
test('Suchbegriffe finden Motorsägen über Name und Tags',()=>{for(const q of ['motor','Baum','BÄUME'])assert.ok(initialResources.filter(r=>matchesSearch(r,q)).some(r=>r.name.includes('Motorsäge')))});
test('Technische Angaben und mehrere Suchwörter werden durchsucht',()=>{assert.ok(initialResources.some(r=>r.name==='Großpumpe'&&matchesSearch(r,'5.000 Schmutzwasser')));assert.equal(initialResources.filter(r=>matchesSearch(r,'unbekannter Suchbegriff')).length,0)});
test('Fiktiver Katalog ist organisationsübergreifend und referenziell konsistent',()=>{assert.equal(organizations.filter(o=>o.type==='Feuerwehr').length,5);assert.equal(organizations.filter(o=>o.type==='THW').length,1);assert.ok(initialResources.length>=15);assert.equal(new Set(initialResources.map(r=>r.id)).size,initialResources.length);for(const r of initialResources){assert.ok(organizations.some(o=>o.id===r.organizationId));assert.ok(r.scenarios.every(s=>scenarios.includes(s)));assert.ok(r.quantity>0)}assert.ok(initialResources.some(r=>!r.categories.length));assert.ok(initialResources.filter(r=>r.categories.includes('Großtierrettung')).length>=5)});
