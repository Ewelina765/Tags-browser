import type { Meta, StoryObj } from "@storybook/react";

import TableWithPaginationComponent from "../components/TableWithPaginationComponent";

const meta = {
  title: "Components/TableWithPaginationComponent",
  component: TableWithPaginationComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof TableWithPaginationComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableWithPagination: Story = {
  args: {
    tagsNumber: 80,
    setTagsNumber: () => {},
  },
};
