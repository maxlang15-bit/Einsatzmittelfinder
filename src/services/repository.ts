import { initialResources } from '../data/catalog';
import type { Resource, ResourceRepository } from '../types';
const key='einsatzfinder.resources.v1';
export const repository: ResourceRepository = {
 load(){const value=localStorage.getItem(key); if(!value)return structuredClone(initialResources); const parsed:unknown=JSON.parse(value); if(!Array.isArray(parsed)||!parsed.every(isResource))throw new Error('Die gespeicherten Daten konnten nicht gelesen werden.'); return parsed;},
 save(resources){localStorage.setItem(key,JSON.stringify(resources));}
};
function isResource(value:unknown):value is Resource {if(!value||typeof value!=='object')return false;const r=value as Record<string,unknown>;return ['id','name','organizationId','capacity','transport','personnel','description','confirmedAt','requestPath'].every(k=>typeof r[k]==='string')&&typeof r.quantity==='number'&&['categories','scenarios','tags','components'].every(k=>Array.isArray(r[k])&&(r[k] as unknown[]).every(v=>typeof v==='string'));}
export function loadFavorites():string[]{const raw=JSON.parse(localStorage.getItem('einsatzfinder.favorites.v1')||'[]');return Array.isArray(raw)?raw.filter((v):v is string=>typeof v==='string'):[];}
export function saveFavorites(ids:string[]){localStorage.setItem('einsatzfinder.favorites.v1',JSON.stringify(ids));}
