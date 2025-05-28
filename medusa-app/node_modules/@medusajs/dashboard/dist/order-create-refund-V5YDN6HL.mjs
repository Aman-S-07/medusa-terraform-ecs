import {
  getPaymentsFromOrder
} from "./chunk-EA4G7XL6.mjs";
import {
  formatProvider
} from "./chunk-IR5DHEKS.mjs";
import {
  formatCurrency
} from "./chunk-OV5NMSY6.mjs";
import {
  DEFAULT_FIELDS
} from "./chunk-7I5DQGWY.mjs";
import "./chunk-7DXVXBSA.mjs";
import {
  getLocaleAmount
} from "./chunk-PDWBYQOW.mjs";
import {
  currencies
} from "./chunk-MWVM4TYO.mjs";
import "./chunk-IUCDCPJU.mjs";
import {
  KeyboundForm
} from "./chunk-6HTZNHPT.mjs";
import {
  RouteDrawer,
  useRouteModal
} from "./chunk-4TC5YS65.mjs";
import "./chunk-3NJTXRIY.mjs";
import "./chunk-OC7BQLYI.mjs";
import {
  Form
} from "./chunk-OBQI23QM.mjs";
import {
  useRefundReasons
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
import {
  useRefundPayment
} from "./chunk-FO3VP56P.mjs";
import "./chunk-YS65UGPC.mjs";
import "./chunk-F6PXCY3N.mjs";
import "./chunk-3OHH43G6.mjs";
import "./chunk-G2H6MAK7.mjs";
import "./chunk-GRT22PE5.mjs";
import "./chunk-32IQRUVY.mjs";
import {
  useOrder
} from "./chunk-FNYASI54.mjs";
import "./chunk-FVC7M755.mjs";
import "./chunk-ZJ3OFMHB.mjs";
import "./chunk-PNU5HPGY.mjs";
import "./chunk-V2LANK5S.mjs";
import "./chunk-QZ6PT4QV.mjs";
import "./chunk-QL4XKIVL.mjs";
import "./chunk-6I62UDJA.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-DEQUVHHE.mjs";
import "./chunk-RPUOO7AV.mjs";

// src/routes/orders/order-create-refund/order-create-refund.tsx
import { Heading } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useParams } from "react-router-dom";

// src/routes/orders/order-create-refund/components/create-refund-form/create-refund-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  CurrencyInput,
  Label,
  Select,
  Textarea,
  toast
} from "@medusajs/ui";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as zod from "zod";
import { formatValue } from "react-currency-input-field";
import { jsx, jsxs } from "react/jsx-runtime";
var CreateRefundSchema = zod.object({
  amount: zod.string().or(zod.number()),
  refund_reason_id: zod.string().nullish(),
  note: zod.string().optional()
});
var CreateRefundForm = ({
  order,
  refundReasons
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("paymentId");
  const payments = getPaymentsFromOrder(order);
  const payment = payments.find((p) => p.id === paymentId);
  const paymentAmount = payment?.amount || 0;
  const currency = useMemo(
    () => currencies[order.currency_code.toUpperCase()],
    [order.currency_code]
  );
  const form = useForm({
    defaultValues: {
      amount: paymentAmount,
      note: ""
    },
    resolver: zodResolver(CreateRefundSchema)
  });
  useEffect(() => {
    const pendingDifference = order.summary.pending_difference;
    const paymentAmount2 = payment?.amount || 0;
    const pendingAmount = pendingDifference < 0 ? Math.min(pendingDifference, paymentAmount2) : paymentAmount2;
    const normalizedAmount = pendingAmount < 0 ? pendingAmount * -1 : pendingAmount;
    form.setValue("amount", normalizedAmount);
  }, [payment]);
  const { mutateAsync, isPending } = useRefundPayment(order.id, payment?.id);
  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync(
      {
        amount: parseFloat(data.amount),
        refund_reason_id: data.refund_reason_id,
        note: data.note
      },
      {
        onSuccess: () => {
          toast.success(
            t("orders.payment.refundPaymentSuccess", {
              amount: formatCurrency(data.amount, payment?.currency_code)
            })
          );
          handleSuccess();
        },
        onError: (error) => {
          toast.error(error.message);
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteDrawer.Form, { form, children: /* @__PURE__ */ jsxs(
    KeyboundForm,
    {
      onSubmit: handleSubmit,
      className: "flex size-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(RouteDrawer.Body, { className: "flex-1 overflow-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4", children: [
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: payment?.id,
              onValueChange: (value) => {
                navigate(`/orders/${order.id}/refund?paymentId=${value}`, {
                  replace: true
                });
              },
              children: [
                /* @__PURE__ */ jsx(Label, { className: "txt-compact-small mb-[-6px] font-sans font-medium", children: t("orders.payment.selectPaymentToRefund") }),
                /* @__PURE__ */ jsx(Select.Trigger, { children: /* @__PURE__ */ jsx(
                  Select.Value,
                  {
                    placeholder: t("orders.payment.selectPaymentToRefund")
                  }
                ) }),
                /* @__PURE__ */ jsx(Select.Content, { children: payments.map((payment2) => {
                  const totalRefunded = payment2.refunds.reduce(
                    (acc, next) => next.amount + acc,
                    0
                  );
                  return /* @__PURE__ */ jsxs(
                    Select.Item,
                    {
                      value: payment2.id,
                      disabled: !!payment2.canceled_at || totalRefunded >= payment2.amount,
                      className: "flex items-center justify-center",
                      children: [
                        /* @__PURE__ */ jsxs("span", { children: [
                          getLocaleAmount(
                            payment2.amount,
                            payment2.currency_code
                          ),
                          " - "
                        ] }),
                        /* @__PURE__ */ jsx("span", { children: formatProvider(payment2.provider_id) }),
                        /* @__PURE__ */ jsxs("span", { children: [
                          " - (#",
                          payment2.id.substring(23),
                          ")"
                        ] })
                      ]
                    },
                    payment2.id
                  );
                }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Field,
            {
              control: form.control,
              name: "amount",
              rules: {
                required: true,
                min: 0,
                max: paymentAmount
              },
              render: ({ field: { onChange, ...field } }) => {
                return /* @__PURE__ */ jsxs(Form.Item, { children: [
                  /* @__PURE__ */ jsx(Form.Label, { children: t("fields.amount") }),
                  /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                    CurrencyInput,
                    {
                      ...field,
                      min: 0,
                      placeholder: formatValue({
                        value: "0",
                        decimalScale: currency.decimal_digits
                      }),
                      decimalScale: currency.decimal_digits,
                      symbol: currency.symbol_native,
                      code: currency.code,
                      value: field.value,
                      onValueChange: (_value, _name, values) => onChange(values?.value ? values?.value : ""),
                      autoFocus: true
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Field,
            {
              control: form.control,
              name: `note`,
              render: ({ field }) => {
                return /* @__PURE__ */ jsxs(Form.Item, { children: [
                  /* @__PURE__ */ jsx(Form.Label, { children: t("fields.note") }),
                  /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Textarea, { ...field }) }),
                  /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                ] });
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(RouteDrawer.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              isLoading: isPending,
              type: "submit",
              variant: "primary",
              size: "small",
              disabled: !!Object.keys(form.formState.errors || {}).length,
              children: t("actions.save")
            }
          )
        ] }) })
      ]
    }
  ) });
};

// src/routes/orders/order-create-refund/order-create-refund.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var OrderCreateRefund = () => {
  const { t } = useTranslation2();
  const params = useParams();
  const { order } = useOrder(params.id, {
    fields: DEFAULT_FIELDS
  });
  const {
    refund_reasons: refundReasons,
    isLoading: isRefundReasonsLoading,
    isError: isRefundReasonsError,
    error: refundReasonsError
  } = useRefundReasons();
  if (isRefundReasonsError) {
    throw refundReasonsError;
  }
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsx2(RouteDrawer.Header, { children: /* @__PURE__ */ jsx2(Heading, { children: t("orders.payment.createRefund") }) }),
    order && !isRefundReasonsLoading && refundReasons && /* @__PURE__ */ jsx2(CreateRefundForm, { order, refundReasons })
  ] });
};
export {
  OrderCreateRefund as Component
};
