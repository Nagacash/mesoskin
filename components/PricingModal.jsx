"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";

const PricingModal = ({ children }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Unsere Preise</DialogTitle>
          <DialogDescription>
            Hier finden Sie eine detaillierte Übersicht unserer Behandlungen und Preise.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-primary">Erstbehandlung inclusive Consulting</h4>
            <p className="text-gray-700">249 Euro (Behandlungsdauer: 2 Stunden)</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-primary">Behandlung nach Erstsitzung</h4>
            <p className="text-gray-700">199 Euro</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-primary">6er Abo</h4>
            <p className="text-gray-700">999 Euro</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-primary">10er Abo</h4>
            <p className="text-gray-700">1650 Euro</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
