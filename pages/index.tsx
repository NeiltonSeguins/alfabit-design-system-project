import Modal from "@/components/Modal/Modal";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import { useState } from "react";

const people: string[] = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="h-screen mx-auto my-0 w-4/5 flex justify-center bg-gray-800">
      <div className="w-2/4 flex flex-col gap-1 justify-star">
        <Text size="title3" className="mt-4">
          Modal
        </Text>

        <Button variant="secondary" onClick={openModal}>
          Abre modal
        </Button>

        {/* <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open Modal
        </button> */}
        <Modal title="Heading" isOpen={isOpen} onClose={closeModal}>
          <Text element="p">
            Today, every company I talk to wants to implement a design system
            from scratch. Unfortunately, the details of a design system are not
            explored, so often they are not used to the maximum to create a
            useful user experience.
          </Text>
          <Text>
            New designers can take a look at any of the design patterns listed
            below to learn best practices and make informed design decisions on
            their projects.
          </Text>
          <div className=" flex flex-col gap-3">
            <Button>Primary button</Button>
            <Button variant="secondary">Secondary button</Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default App;
