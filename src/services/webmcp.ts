import type { Resource } from '../types';
import { matchesSearch } from './search';
type Tool={name:string;description:string;inputSchema:object;annotations:object;execute:(input:unknown)=>unknown};
export function registerCatalogTool(resources:Resource[]){
 const context=(document as Document & {modelContext?:{registerTool:(tool:Tool,options:{signal:AbortSignal})=>void|Promise<void>}}).modelContext;
 if(!context?.registerTool)return;
 const lifecycle=new AbortController();
 const tool:Tool={name:'search_local_resources',description:'Durchsucht den aktuellen fiktiven lokalen Einsatzmittelkatalog, ohne Daten oder die Ansicht zu ändern.',inputSchema:{type:'object',properties:{query:{type:'string'}},required:['query'],additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute(input){if(!input||typeof input!=='object'||typeof (input as {query?:unknown}).query!=='string'||Object.keys(input).some(k=>k!=='query'))throw new Error('Erwartet wird ausschließlich ein Suchtext im Feld query.');return resources.filter(r=>matchesSearch(r,(input as {query:string}).query)).map(r=>({id:r.id,name:r.name,capacity:r.capacity,organizationId:r.organizationId}));}};
 try{Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{})}catch{/* Optional browser capability; UI remains available. */}
 return ()=>lifecycle.abort();
}
