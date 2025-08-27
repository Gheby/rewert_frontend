"use client";

import { useState } from "react";
import { Color, Size } from "../../../../../types";
import Button from "../../../../../components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "../../../../../components/ui/icon-button";
import Filter from "./filter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        onClose={onClose}
        className="relative z-40 lg:hidden"
      >
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black/30" />
        {/* Dialog content */}
        <div className="fixed inset-0 flex z-40">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white p-6 py-4 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-center px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>
            {/* Sizes Filter */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
