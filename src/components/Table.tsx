type column = {
  header: string;
  accessor: string;
  className?: string;
};
const Table = ({
  renderRow,
  data,
  columns,
}: {
  columns: column[];
  data: any[];
  renderRow: (item: any) => React.ReactNode;
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-sm text-left font-medium text-gray-600">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map(renderRow)}</tbody>
    </table>
  );
};

export default Table;
