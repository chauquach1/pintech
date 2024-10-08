"use client";

import { InlineWidget, PopupWidget, PopupButton } from "react-calendly";

export default function ContactPage() {
  return (
    <>
      <div className="h-fit w-full border-2 border-white">
        <InlineWidget url="https://calendly.com/pintechcollective/intro?back=1&month=2024-10" />
      </div>
    </>
  );
}
