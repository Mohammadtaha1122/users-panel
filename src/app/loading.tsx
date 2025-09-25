import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center bg-white h-screen">
      <Image src={'/loading.svg'} alt="loading" width={80} height={80} className="mt-15" />
    </div>
  );
}

export default Loading;