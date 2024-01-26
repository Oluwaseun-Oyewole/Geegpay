import { ConfigProvider, Table } from "antd";
import type { TablePaginationConfig, TableProps } from "antd/es/table";
import React from "react";
import { useTheme } from "../../context";

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
  const { isDarkMode } = useTheme();
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              colorBgContainer: `${isDarkMode ? "#212121" : ""}`,
              rowHoverBg: `${isDarkMode ? "black" : ""}`,
              colorText: `${isDarkMode ? "#E5EAEF" : ""}`,
              borderColor: `${isDarkMode ? "gray" : "#D9D9D9"}`,
            },
          },
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          onChange={onChange}
          pagination={pagination}
          {...rest}
          className="relative"
          scroll={{ x: 700 }}
        />
      </ConfigProvider>
    </div>
  );
};

export default GeegTable;
