import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Input from "../components/Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    tagsNumber: 80,
    setTagsNumber: fn(),
    title: "Limit of tags to fetch:",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputI: Story = {};
