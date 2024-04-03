import type { Meta, StoryObj } from "@storybook/react";

import TableComponent from "../components/TableComponent";

const meta = {
  title: "Components/TableComponent",
  component: TableComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    tags: [
      { name: "javasript", count: 26828 },
      { name: "react", count: 6828 },
      { name: "css", count: 688 },
      { name: "html", count: 788 },
    ],
    page: 0,
    rowsPerPage: 10,
    sort: "desc",
    setSort: () => {},
  },
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {};
