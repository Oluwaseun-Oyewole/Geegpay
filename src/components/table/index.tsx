import { Table } from "antd";
import type { TablePaginationConfig, TableProps } from "antd/es/table";
import React from "react";

export interface TableParams {
  pagination?: TablePaginationConfig;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ITableProps extends TableProps<any> {
  // additional props
}

const GeegTable: React.FC<ITableProps> = ({
  columns,
  dataSource = [],
  pagination,
  onChange,
  ...rest
}) => {
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        onChange={onChange}
        pagination={pagination}
        {...rest}
        className="relative"
        scroll={{ x: 700 }}
      />
    </div>
  );
};

export default GeegTable;
