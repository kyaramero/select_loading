const frutasTemplate = [
  { index: 1, nome: 'Abacaxi', cor: 'Amarelo', tipo: 'Tropical' },
  { index: 2, nome: 'Banana', cor: 'Amarelo', tipo: 'Tropical' },
  { index: 3, nome: 'Cereja', cor: 'Vermelho', tipo: 'Baga' },
]

export const frutas = Array.from({ length: 100 }, (_, index) => {
  const templateIndex = index % frutasTemplate.length
  return {
    index: index + 1,
    nome: frutasTemplate[templateIndex].nome,
    cor: frutasTemplate[templateIndex].cor,
    tipo: frutasTemplate[templateIndex].tipo,
  }
})

export const pageSize = 10
export const totalPages = Math.ceil(frutas.length / pageSize)
