interface HeaderProps {
  onSave: () => void;
}

export default function Header({ onSave }: HeaderProps) {
  return (
    <header className="bg-slate-900 text-white p-6 shadow-lg sticky-nav">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            纽约商务考察手册{' '}
            <span className="text-blue-400 text-sm font-normal">
              2026.04.14 - 04.20
            </span>
          </h1>
          <p className="text-slate-400 text-xs">
            成都代表团专用 | Westhouse Hotel &amp; Triangle Loft
          </p>
        </div>
        <button
          onClick={onSave}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm transition cursor-pointer"
        >
          保存修改
        </button>
      </div>
    </header>
  );
}
