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
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Unsere Preise</DialogTitle>
          <DialogDescription>
            Hier finden Sie eine detaillierte Übersicht unserer Behandlungen und Preise.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col gap-2 p-10 rounded-lg bg-gray-50 shadow-md">
            <h4 className="text-2xl font-extrabold text-primary mb-3">Erstbehandlung inclusive Consulting</h4>
            <p className="text-xl text-gray-900">249 Euro (Behandlungsdauer: 2 Stunden)</p>
          </div>
          <div className="flex flex-col gap-2 p-10 rounded-lg bg-gray-50 shadow-md">
            <h4 className="text-2xl font-extrabold text-primary mb-3">Behandlung nach Erstsitzung</h4>
            <p className="text-xl text-gray-900">199 Euro</p>
          </div>
          <div className="flex flex-col gap-2 p-10 rounded-lg bg-gray-50 shadow-md">
            <h4 className="text-2xl font-extrabold text-primary mb-3">6er Abo</h4>
            <p className="text-xl text-gray-900">999 Euro</p>
          </div>
          <div className="flex flex-col gap-2 p-10 rounded-lg bg-gray-50 shadow-md">
            <h4 className="text-2xl font-extrabold text-primary mb-3">10er Abo</h4>
            <p className="text-xl text-gray-900">1650 Euro</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
