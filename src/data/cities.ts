export interface City {
  id: string
  name: string
  state: string
}

export const cities: City[] = [
  { id: "ijui", name: "Ijuí", state: "RS" },
  { id: "sao-luis-gonzaga", name: "São Luís Gonzaga", state: "RS" },
  { id: "bossoroca", name: "Bossoroca", state: "RS" },
  { id: "caibate", name: "Caibaté", state: "RS" },
  { id: "santo-angelo", name: "Santo Ângelo", state: "RS" },
  { id: "santa-rosa", name: "Santa Rosa", state: "RS" },
  { id: "catuipe", name: "Catuípe", state: "RS" },
  { id: "ajuricaba", name: "Ajuricaba", state: "RS" },
  { id: "santo-augusto", name: "Santo Augusto", state: "RS" },
  { id: "augusto-pestana", name: "Augusto Pestana", state: "RS" },
  { id: "joia", name: "Jóia", state: "RS" },
  { id: "cruz-alta", name: "Cruz Alta", state: "RS" },
  { id: "tupancireta", name: "Tupanciretã", state: "RS" },
  { id: "ibiruba", name: "Ibirubá", state: "RS" },
  { id: "boa-vista-do-cadeado", name: "Boa Vista do Cadeado", state: "RS" },
]

export const citiesText = cities.map((c) => c.name).join(", ")
