interface HeaderProps {
  onSave: () => void;
  hasUnsavedChanges?: boolean;
}

export default function Header({ onSave, hasUnsavedChanges }: HeaderProps) {
  return (
    <header className="bg-slate-900 text-white px-4 py-3 md:px-6 md:py-4 shadow-lg sticky-nav">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold leading-tight">
            纽约商务考察手册{' '}
            <span className="text-blue-400 text-sm md:text-base font-normal">
              2026.04.15 - 04.20
            </span>
          </h1>
          <p className="text-slate-400 text-xs md:text-sm mt-0.5">
            成都代表团专用 | Westhouse Hotel &amp; Triangle Loft
          </p>
        </div>
        <div className="flex items-center gap-2">
          {hasUnsavedChanges && (
            <span className="text-xs text-amber-400 animate-pulse hidden sm:inline">
              ● 有未保存的修改
            </span>
          )}
          <button
            onClick={onSave}
            className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition cursor-pointer ${
              hasUnsavedChanges
                ? 'bg-amber-500 hover:bg-amber-400 text-white shadow-lg shadow-amber-500/30'
                : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
          >
            保存修改
          </button>
        </div>
      </div>
    </header>
  );
}
