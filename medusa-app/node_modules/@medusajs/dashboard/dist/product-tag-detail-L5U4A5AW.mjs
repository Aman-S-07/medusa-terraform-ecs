import {
  useDeleteProductTagAction
} from "./chunk-SMK3VXN6.mjs";
import "./chunk-R2HUTVC3.mjs";
import "./chunk-QBVCETMI.mjs";
import "./chunk-QMRGIWOP.mjs";
import "./chunk-44JF4VLS.mjs";
import "./chunk-I3VB6NM2.mjs";
import "./chunk-ZJRFL6ZN.mjs";
import "./chunk-DFA6WGYO.mjs";
import "./chunk-I5HYE2RW.mjs";
import "./chunk-RIV7FKGN.mjs";
import "./chunk-TDK3JDOB.mjs";
import "./chunk-FHSC5X62.mjs";
import "./chunk-XR4GEMGR.mjs";
import "./chunk-WRSGHGAT.mjs";
import "./chunk-MOSRJHJ3.mjs";
import "./chunk-BFAYZKJV.mjs";
import "./chunk-OMC5JCQH.mjs";
import "./chunk-RORIX3PU.mjs";
import "./chunk-XMAWMECC.mjs";
import "./chunk-5HNRTDDS.mjs";
import "./chunk-NNBHHXXN.mjs";
import "./chunk-IR5DHEKS.mjs";
import "./chunk-7DXVXBSA.mjs";
import "./chunk-PDWBYQOW.mjs";
import "./chunk-MSDRGCRR.mjs";
import {
  useProductTableColumns
} from "./chunk-G3QXMPRB.mjs";
import {
  useProductTableQuery
} from "./chunk-PCFUZKDS.mjs";
import "./chunk-IQBAUTU5.mjs";
import "./chunk-ADOCJB6L.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  _DataTable,
  useDataTable
} from "./chunk-UE6PO4FK.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-EMIHDNB7.mjs";
import "./chunk-MWVM4TYO.mjs";
import "./chunk-GW6TVOAA.mjs";
import "./chunk-CBSCX7RE.mjs";
import "./chunk-LT4MVCA7.mjs";
import "./chunk-A2UMBW3V.mjs";
import "./chunk-W7625H47.mjs";
import "./chunk-DLZWPHHO.mjs";
import "./chunk-LSEYENCI.mjs";
import "./chunk-FVK4ZYYM.mjs";
import {
  useProductTableFilters
} from "./chunk-FZRIVT5D.mjs";
import "./chunk-SXYXTC2L.mjs";
import "./chunk-M3VFKDXJ.mjs";
import {
  SingleColumnPage
} from "./chunk-2RQLKDBF.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-KSV3NQOT.mjs";
import "./chunk-DG7J63J2.mjs";
import "./chunk-MNXC6Q4F.mjs";
import {
  useExtension
} from "./chunk-C5P5PL3E.mjs";
import {
  SingleColumnPageSkeleton
} from "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-3NJTXRIY.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-NYXYHZE6.mjs";
import {
  productTagsQueryKeys,
  useProductTag
} from "./chunk-Z5UDPQIH.mjs";
import "./chunk-KOSCMAIC.mjs";
import "./chunk-X6DSNTTX.mjs";
import "./chunk-I6E6CALJ.mjs";
import "./chunk-B4GODIOW.mjs";
import "./chunk-F6IJV2I2.mjs";
import "./chunk-QTCZFYFH.mjs";
import "./chunk-ENV6YVOM.mjs";
import "./chunk-PIR2H25N.mjs";
import "./chunk-RLY2SL5E.mjs";
import "./chunk-C5LYZZZ5.mjs";
import "./chunk-2ZKVRTBW.mjs";
import "./chunk-FO3VP56P.mjs";
import "./chunk-YS65UGPC.mjs";
import "./chunk-F6PXCY3N.mjs";
import "./chunk-3OHH43G6.mjs";
import "./chunk-G2H6MAK7.mjs";
import "./chunk-GRT22PE5.mjs";
import "./chunk-32IQRUVY.mjs";
import "./chunk-FNYASI54.mjs";
import "./chunk-FVC7M755.mjs";
import "./chunk-ZJ3OFMHB.mjs";
import "./chunk-PNU5HPGY.mjs";
import "./chunk-V2LANK5S.mjs";
import "./chunk-QZ6PT4QV.mjs";
import "./chunk-QL4XKIVL.mjs";
import {
  useProducts
} from "./chunk-6I62UDJA.mjs";
import {
  queryClient
} from "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import {
  sdk
} from "./chunk-DEQUVHHE.mjs";
import "./chunk-RPUOO7AV.mjs";

// src/routes/product-tags/product-tag-detail/breadcrumb.tsx
import { jsx } from "react/jsx-runtime";
var ProductTagDetailBreadcrumb = (props) => {
  const { id } = props.params || {};
  const { product_tag } = useProductTag(id, void 0, {
    initialData: props.data,
    enabled: Boolean(id)
  });
  if (!product_tag) {
    return null;
  }
  return /* @__PURE__ */ jsx("span", { children: product_tag.value });
};

// src/routes/product-tags/product-tag-detail/loader.ts
var productTagDetailQuery = (id) => ({
  queryKey: productTagsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.productTag.retrieve(id)
});
var productTagLoader = async ({ params }) => {
  const id = params.id;
  const query = productTagDetailQuery(id);
  return queryClient.ensureQueryData(query);
};

// src/routes/product-tags/product-tag-detail/product-tag-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/product-tags/product-tag-detail/components/product-tag-general-section/product-tag-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var ProductTagGeneralSection = ({
  productTag
}) => {
  const { t } = useTranslation();
  const handleDelete = useDeleteProductTagAction({ productTag });
  return /* @__PURE__ */ jsxs(Container, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1.5", children: [
      /* @__PURE__ */ jsx2("span", { className: "text-ui-fg-muted h1-core", children: "#" }),
      /* @__PURE__ */ jsx2(Heading, { children: productTag.value })
    ] }),
    /* @__PURE__ */ jsx2(
      ActionMenu,
      {
        groups: [
          {
            actions: [
              {
                icon: /* @__PURE__ */ jsx2(PencilSquare, {}),
                label: t("actions.edit"),
                to: "edit"
              }
            ]
          },
          {
            actions: [
              {
                icon: /* @__PURE__ */ jsx2(Trash, {}),
                label: t("actions.delete"),
                onClick: handleDelete
              }
            ]
          }
        ]
      }
    )
  ] });
};

// src/routes/product-tags/product-tag-detail/components/product-tag-product-section/product-tag-product-section.tsx
import { Container as Container2, Heading as Heading2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var PREFIX = "pt";
var ProductTagProductSection = ({
  productTag
}) => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useProductTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { products, count, isPending, isError, error } = useProducts({
    ...searchParams,
    tag_id: productTag.id
  });
  const filters = useProductTableFilters(["product_tags"]);
  const columns = useProductTableColumns();
  const { table } = useDataTable({
    data: products,
    count,
    columns,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y px-0 py-0", children: [
    /* @__PURE__ */ jsx3("div", { className: "px-6 py-4", children: /* @__PURE__ */ jsx3(Heading2, { level: "h2", children: t("products.domain") }) }),
    /* @__PURE__ */ jsx3(
      _DataTable,
      {
        table,
        filters,
        queryObject: raw,
        isLoading: isPending,
        columns,
        pageSize: PAGE_SIZE,
        count,
        navigateTo: (row) => `/products/${row.original.id}`,
        search: true,
        pagination: true,
        orderBy: [
          { key: "title", label: t("fields.title") },
          { key: "status", label: t("fields.status") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ]
      }
    )
  ] });
};

// src/routes/product-tags/product-tag-detail/product-tag-detail.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var ProductTagDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { getWidgets } = useExtension();
  const { product_tag, isPending, isError, error } = useProductTag(
    id,
    void 0,
    {
      initialData
    }
  );
  if (isPending || !product_tag) {
    return /* @__PURE__ */ jsx4(SingleColumnPageSkeleton, { showJSON: true, sections: 2 });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(
    SingleColumnPage,
    {
      widgets: {
        after: getWidgets("product_tag.details.after"),
        before: getWidgets("product_tag.details.before")
      },
      showJSON: true,
      data: product_tag,
      children: [
        /* @__PURE__ */ jsx4(ProductTagGeneralSection, { productTag: product_tag }),
        /* @__PURE__ */ jsx4(ProductTagProductSection, { productTag: product_tag })
      ]
    }
  );
};
export {
  ProductTagDetailBreadcrumb as Breadcrumb,
  ProductTagDetail as Component,
  productTagLoader as loader
};
