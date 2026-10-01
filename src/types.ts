export interface Organization { id: string; name: string; type: string; location: string; distanceKm: number }
export interface Resource { id: string; name: string; organizationId: string; quantity: number; capacity: string; transport: string; personnel: string; description: string; components: string[]; categories: string[]; scenarios: string[]; tags: string[]; confirmedAt: string; requestPath: string }
export interface ResourceRepository { load(): Resource[]; save(resources: Resource[]): void }
