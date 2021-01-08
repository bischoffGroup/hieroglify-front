export default {
  grades: state => state.grades,
  combinacoes: state => state.combinacoes,
  fichas: state => state.fichas,
  classifMateriais: state => state.classifMateriais,
  classifProdutos: state => state.classifProdutos,
  cabecalho: state => tipo => {
    switch (tipo) {
      case 'CLASSIF_PRODUTOS':
        return state.classifProdutos.length === 0
          ? []
          : Object.getOwnPropertyNames({ ...state.classifProdutos[0] }).map(
            e => ({
              text: e,
              value: e
            })
          );
      case 'CLASSIF_MATERIAIS':
        return state.classifMateriais.length === 0
          ? []
          : Object.getOwnPropertyNames({ ...state.classifMateriais[0] }).map(
            e => ({
              text: e,
              value: e
            })
          );
      case 'GRADES':
        return state.grades.length === 0
          ? []
          : Object.getOwnPropertyNames({ ...state.grades[0] }).map(e => ({
            text: e,
            value: e
          }));
      case 'COMBINACOES':
        return state.combinacoes.length === 0
          ? []
          : Object.getOwnPropertyNames({ ...state.combinacoes[0] }).map(e => ({
            text: e,
            value: e
          }));
      case 'FT':
        return state.fichas.length === 0
          ? []
          : Object.getOwnPropertyNames({ ...state.fichas[0] }).map(e => ({
            text: e,
            value: e
          }));
      default:
        break;
    }
  }
};
