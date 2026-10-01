import type { Resource } from '../types';
export function normalize(text:string){return text.toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ß/g,'ss');}
export function matchesSearch(resource:Resource,query:string){const text=normalize([resource.name,resource.description,resource.capacity,...resource.categories,...resource.scenarios,...resource.tags].join(' '));return normalize(query).trim().split(/\s+/).every(term=>text.includes(term));}
