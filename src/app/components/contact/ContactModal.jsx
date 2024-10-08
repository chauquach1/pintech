"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { Button } from "@nextui-org/button";
import Arrow from "../../public/graphics/arrow.svg";
import Image from "next/image";
import { InlineWidget, PopupWidget, PopupButton } from "react-calendly";

export default function ContactModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        className="flex flex-row items-center justify-center text-xl my-auto ms-auto gap-1 w-fit h-fit"
      >
        {"REACH OUT"}
        <Image
          src={Arrow}
          alt="arrow"
          className="h-full w-[20px] max-w-[20px] fill-current"
        />
      </Button>
      <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-black">
                Thank You For Your Interest in PinTech
              </ModalHeader>
              <ModalBody>
              <InlineWidget url="https://calendly.com/pintechcollective/intro?back=1&month=2024-10" />
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
