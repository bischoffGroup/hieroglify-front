export default [
  {
    path: "/",
    redirect: { name: "dashboard" }
  },
  ...withPrefix("/labs", [
    {
      path: "textareaformatter",
      name: "labs.textareaformatter",
      meta: { auth: false },
      component: () => import("../views/labs/textAreaFormatter/TextArea")
    }
  ]),
  ...withPrefix("/importacoes", [
    ...withPrefix("artigos/produtos", [
      {
        path: "importados",
        name: "import.product.imported",
        meta: { auth: true },
        component: () => import("../views/import/ImportedProduct")
      },
      {
        path: "nimportados",
        name: "import.product.nimported",
        meta: { auth: true },
        component: () => import("../views/import/NotImportedProduct")
      }
    ]),
    ...withPrefix("artigos/materiais", [
      {
        path: "importados",
        name: "import.material.imported",
        meta: { auth: true },
        component: () => import("../views/import/ImportedMaterial")
      },
      {
        path: "nimportados",
        name: "import.material.nimported",
        meta: { auth: true },
        component: () => import("../views/import/NotImportedMaterial")
      }
    ])
  ]),
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { auth: true, namespace: "dashboard" },
    component: () => import("../views/dashboard/Dashboard"),
    props: {
      namespace: "dashboard"
    }
  },
  {
    path: "/importacoes/erros",
    name: "importacoes.erros",
    meta: { auth: true },
    component: () => import("../views/logs/LogImportacaoErro")
  },
  {
    path: "/importacoes/historico",
    name: "importacoes.historico",
    meta: { auth: true },
    component: () => import("../views/logs/LogHistorico")
  },
  ...withPrefix("/cargadedados", [
    {
      path: "fichatecnica",
      name: "dataload.productInformation",
      component: () => import("../views/translator/ProductInformationSearch")
    },
    {
      path: "combinacoes",
      name: "dataload.product",
      component: () => import("../views/translator/ProductSearch")
    },
    {
      path: "grades",
      name: "dataload.productSize",
      component: () => import("../views/translator/ProductSizeSearch")
    }
  ]),
  {
    path: "/classificacoes/materiais",
    name: "classificacoesMateriais",
    component: () => import("../views/from/Material")
  },
  {
    path: "/classificacoes/produtos",
    name: "classificacoesProdutos",
    component: () => import("../views/from/Product")
  }
];
function withPrefix(prefix, routes) {
  return routes.map(route => {
    route.path = prefix + "/" + route.path;
    return route;
  });
}
