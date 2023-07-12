import { Meta, StoryObj } from "@storybook/react";

import Modal, { type ModalProps } from "./Modal";
import Text from "../Text/Text";
import Button from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Desing System/Molecules/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalInfo: Story = {
  args: {
    isOpen: false,
    title: "Heading",
  },
  render: (args: ModalProps) => {
    return (
      <Modal {...args}>
        <Text>
          Today, every company I talk to wants to implement a design system from
          scratch. Unfortunately, the details of a design system are not
          explored, so often they are not used to the maximum to create a useful
          user experience.
        </Text>
        <Text>
          New designers can take a look at any of the design patterns listed
          below to learn best practices and make informed design decisions on
          their projects.
        </Text>
        <div className=" flex flex-col gap-3">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
      </Modal>
    );
  },
};

export const ModalChoice: Story = {
  args: {
    isOpen: false,
    title: "Do you want to save your changes?",
  },
  render: (args: ModalProps) => {
    return (
      <Modal {...args}>
        <Text>Your changes will be lost</Text>
        <div className=" flex flex-col gap-3">
          <Button>Save changes</Button>
          <Button variant="secondary">Don't save</Button>
        </div>
      </Modal>
    );
  },
};

export const Primary: Story = {
  args: {
    isOpen: false,
    title: "Modal Primary",
  },
  render: (args: ModalProps) => {
    return <Modal {...args}>{args.children}</Modal>;
  },
};
