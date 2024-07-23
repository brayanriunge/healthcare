import PatientForm from "@/components/Form/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function NewAppointment() {
  return (
    <div className="h-screen flex max-h-screen">
      <div className=" container my-auto remove-scrollbar">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="h-10 mb-12 w-fit"
          />

          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 CarePulse
          </p>
        </div>
      </div>
      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
