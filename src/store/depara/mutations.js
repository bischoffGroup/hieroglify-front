export default {
  DEPARAS_LOAD(state, deparas) {
    state.deparas = deparas;
  },
  GRADES_LOAD(state, grades) {
    state.grades = grades;
  },
  GRADES_DELETE(state) {
    state.grades = {};
  },
  COMBINACOES_LOAD(state, combinacoes) {
    state.combinacoes = combinacoes;
  },
  COMBINACOES_DELETE(state) {
    state.combinacoes = {};
  },
  FICHAS_LOAD(state, fichas) {
    state.fichas = fichas;
  },
  FICHAS_DELETE(state) {
    state.fichas = {};
  },
  CLASSIF_MATERIAIS_LOAD(state, classificacoes) {
    state.classifMateriais = classificacoes;
  },
  CLASSIF_PRODUTOS_LOAD(state, classificacoes) {
    state.classifProdutos = classificacoes;
  },
  CLASSIF_MATERIAIS_DELETE(state) {
    state.classifMateriais = {};
  },
  CLASSIF_PRODUTOS_DELETE(state) {
    state.classifProdutos = {};
  }
};
