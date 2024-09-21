type column = {
  header: string;
  accessor: string;
  className?: string;
};
const Table = ({ columns }: { columns: column[] }) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Table;
