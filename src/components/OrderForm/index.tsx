import React from "react";
import OrderFormTabs from "./OrderFormTabs";
import LimitOrderForm from "./LimitOrderForm";
import MarketOrderForm from "./MarketOrderForm";

function OrderForm() {
  const [currentTab, setTab] = React.useState<0 | 1>(1);

  return (
    <div className="w-full rounded-xl bg-section flex flex-col items-center justify-between px-3 py-2">
      <OrderFormTabs currentTab={currentTab} setTab={(tab) => setTab(tab)} />
      {currentTab === 1 ? <LimitOrderForm /> : <MarketOrderForm />}
    </div>
  );
}

export default OrderForm;
