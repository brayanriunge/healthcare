"use client";

import React from "react";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "../Form/PatientForm";

interface CustomProp {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeHolder?: string;
  disabled?: boolean;
  dateFormat?: string;
  iconSrc?: string;
  iconAlt?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const CustomFormField = ({ control, fieldType, name, label }: CustomProp) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
