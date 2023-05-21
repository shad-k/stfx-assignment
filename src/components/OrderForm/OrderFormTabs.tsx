interface Props {
  currentTab: number;
  setTab: (tab: 0 | 1) => void;
}

function OrderFormTabs({ currentTab, setTab }: Props) {
  return (
    <div className="w-full text-center text-white/50">
      <ul className="flex flex-wrap gap-3">
        <li>
          <button
            className={`inline-block hover:text-white ${
              currentTab === 0 ? "text-white active" : ""
            }`}
            aria-current={currentTab === 0}
            onClick={() => setTab(0)}
          >
            Market
          </button>
        </li>
        <li>
          <button
            className={`inline-block hover:text-white ${
              currentTab === 1 ? "text-white active" : ""
            }`}
            aria-current={currentTab === 1}
            onClick={() => setTab(1)}
          >
            Limit
          </button>
        </li>
      </ul>
    </div>
  );
}

export default OrderFormTabs;
