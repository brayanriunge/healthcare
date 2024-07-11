import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex max-h-screen">
      <div className=" container my-auto remove-scrollbar">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="h-10 mb-12 w-fit"
          />
        </div>
      </div>
    </div>
  );
}
