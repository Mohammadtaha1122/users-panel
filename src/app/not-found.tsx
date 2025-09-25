import Link from "next/link";

const notFound = () => {
  return (
    <div className="text-center mt-20 ">
      <h1 className="text-2xl font-medium ">not found</h1>
      <h2 className="my-15 text-9xl text-gray-600 font-black">404</h2>
      <Link href={'/'} className="text-sky-500 hover:underline text-xl">back to home</Link>
    </div>
  );
}

export default notFound;