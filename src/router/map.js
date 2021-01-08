function withPrefix(prefix, routes) {
  return routes.map(route => {
    route.path = `${prefix}/${route.path}`;
    return route;
  });
}
export default [
  {
    path: '/',
    redirect: { name: 'dashboard' }
  },
  ...withPrefix('/labs', [
    {
      path: 'textareaformatter',
      name: 'labs.textareaformatter',
      meta: { auth: false },
      component: () => import('../views/labs/textAreaFormatter/TextArea')
    }
  ]),
  ...withPrefix('/depara', [
    {
      path: 'fornecedores',
      name: 'from.suppliers',
      meta: { auth: true },
      component: () => import('../views/from/Supplier')
    },
    {
      path: 'categorias',
      name: 'from.categories',
      meta: { auth: true },
      component: () => import('../views/from/Category')
    },
    {
      path: 'colecoes',
      name: 'from.collections',
      meta: { auth: true },
      component: () => import('../views/from/Collection')
    },
    {
      path: 'cores',
      name: 'from.colors',
      meta: { auth: true },
      component: () => import('../views/from/Color')
    },
    {
      path: 'grades',
      name: 'from.grids',
      meta: { auth: true },
      component: () => import('../views/from/Grid')
    },
    {
      path: 'lancamentos',
      name: 'from.launchies',
      meta: { auth: true },
      component: () => import('../views/from/Launch')
    },
    {
      path: 'classifMateriais',
      name: 'from.materialClassifications',
      meta: { auth: true },
      component: () => import('../views/from/MaterialClassification')
    },
    {
      path: 'precos',
      name: 'from.pricings',
      meta: { auth: true },
      component: () => import('../views/from/Pricing')
    },
    {
      path: 'classifProdutos',
      name: 'from.productClassifications',
      meta: { auth: true },
      component: () => import('../views/from/ProductClassification')
    },
    {
      path: 'tamanhos',
      name: 'from.sizes',
      meta: { auth: true },
      component: () => import('../views/from/Size')
    }
  ]),
  ...withPrefix('/importacoes', [
    ...withPrefix('artigos/produtos', [
      {
        path: 'importados',
        name: 'import.product.imported',
        meta: { auth: true },
        component: () => import('../views/import/ImportedProduct')
      },
      {
        path: 'nimportados',
        name: 'import.product.nimported',
        meta: { auth: true },
        component: () => import('../views/import/NotImportedProduct')
      }
    ]),
    ...withPrefix('artigos/materiais', [
      {
        path: 'importados',
        name: 'import.material.imported',
        meta: { auth: true },
        component: () => import('../views/import/ImportedMaterial')
      },
      {
        path: 'nimportados',
        name: 'import.material.nimported',
        meta: { auth: true },
        component: () => import('../views/import/NotImportedMaterial')
      }
    ])
  ]),
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { auth: true, namespace: 'dashboard' },
    component: () => import('../views/dashboard/Dashboard')
  },
  {
    path: '/importacoes/erros',
    name: 'importacoes.erros',
    meta: { auth: true },
    component: () => import('../views/logs/LogImportacaoErro')
  },
  {
    path: '/importacoes/historico',
    name: 'importacoes.historico',
    meta: { auth: true },
    component: () => import('../views/logs/LogHistorico')
  },
  ...withPrefix('/cargadedados', [
    {
      path: 'fichatecnica',
      name: 'dataload.productInformation',
      component: () => import('../views/translator/ProductInformationSearch')
    },
    {
      path: 'combinacoes',
      name: 'dataload.product',
      component: () => import('../views/translator/ProductSearch')
    },
    {
      path: 'grades',
      name: 'dataload.productSize',
      component: () => import('../views/translator/ProductSizeSearch')
    }
  ]),

];
