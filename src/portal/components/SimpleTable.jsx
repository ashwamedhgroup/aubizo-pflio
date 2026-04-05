export function SimpleTable({ columns, rows, emptyMessage = 'No rows yet.' }) {
  if (!rows.length) {
    return <p className="text-sm text-zinc-500">{emptyMessage}</p>
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-zinc-200 text-left text-sm">
        <thead className="bg-zinc-50 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="whitespace-nowrap px-4 py-3">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
          {rows.map((row, i) => (
            <tr key={row.id ?? i} className="hover:bg-zinc-50/80">
              {columns.map((c) => (
                <td key={c.key} className="whitespace-nowrap px-4 py-3 text-zinc-700">
                  {c.render ? c.render(row) : row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
