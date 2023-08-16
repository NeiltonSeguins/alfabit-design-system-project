import type { Meta, StoryObj } from "@storybook/react";

import Dropdown, { type DropdownProps } from "./Dropdown";
import React from "react";

const meta: Meta<DropdownProps> = {
  title: "Desing System/Molecules/Dropdown",
  component: Dropdown,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ paddingBottom: "15em", paddingTop: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<DropdownProps>;

export const Primary: Story = {
  args: {
    list: [],
  },
};

export const Common: Story = {
  args: {
    list: [
      "Durward Reynolds",
      "Kenton Towne",
      "Therese Wunsch",
      "Benedict Kessler",
      "Katelyn Rohan",
    ],
  },
};
