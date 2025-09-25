'use client'

import { userContext } from "@/context/contextApi";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Home = () => {
  const {users} = useContext(userContext)!
  return (
    <div className="container">
      <h1 className="my-20 text-center text-3xl font-bold">user list</h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-lg:px-4 max-md:grid-cols-1 gap-6 mb-15">
        {users?.map(user => (
          <div key={user.id} className="hover:-translate-y-0.5 transition ease-in bg-white hover:shadow-[0_6px_0_-2px_#4a83fc] flex flex-col gap-8  p-6 rounded-lg">
            <Image className="mx-auto rounded-full overflow-hidden" src={user.image} alt={user.username} width={80} height={80} />
            <h2 className="text-2xl max-sm:text-xl text-center font-medium">{user.firstName} {user.lastName} </h2>
            <h3 className="text-lg text-gray-700 max-sm:text-sm text-center">{user.email} </h3>
            <Link className="bg-blue-500 text-center hover:bg-blue-600 transition-all ease-in text-white py-3 rounded-md" href={`/user/${user.id}`}>
              detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;