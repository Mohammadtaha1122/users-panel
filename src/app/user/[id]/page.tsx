'use client'

import Loading from "@/app/loading";
import { userContext } from "@/context/contextApi";
import { getData, removeUser } from "@/service/serviceData";
import { User } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const UserDetail = () => {
  const id = useParams().id;
  const [detail, setDetail] = useState<User | null>(null);
  const [usersState, setUsersState] = useState<User[]>([]);
  const router = useRouter()
  const { setUsers } = useContext(userContext)!

  useEffect(() => {
    const fetchData = async () => {
      const usersState = await getData();
      const user = usersState.find((item: User) => String(item.id) === id);
      setDetail(user || null);
      setUsersState(usersState);
    };
    fetchData();
  }, [id]);

  const removeHandler = (id: number) => {
    removeUser(id)
    setUsers(prev => prev.filter(item => item.id !== id))
    router.push("/")
  }

  if (!detail) return <Loading />;

  return (
    <section className="flex">
      <aside className="w-64 border-r max-md:hidden max-lg:w-44 border-gray-200 bg-gray-50 px-6 py-5 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500 transition">
        <h2 className="text-xl font-semibold text-sky-600 mb-6">Users</h2>
        <ul className="flex flex-col gap-3">
          {usersState.map((user: User) => (
            <li key={user.id}>
              <Link
                href={`/user/${user.id}`}
                className="block px-3 py-2 rounded-lg hover:bg-sky-100 hover:text-sky-600 transition"
              >
                {user.username}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 sm:p-10 max-sm:py-4 max-sm:px-2">
        <h1 className="text-sky-600 max-sm:flex-col flex justify-between text-2xl font-bold mb-8">
          <span>Personal Detail</span>
          <Link className="hover:underline  max-sm:underline" href={'/'}>go to home</Link>
        </h1>

        <div className="bg-white shadow-lg rounded-xl sm:px-8 py-16 max-sm:flex-col max-sm:text-center flex gap-10">
          <div className="flex flex-col gap-6 items-center">
            <Image
              src={detail.image}
              alt={detail.username}
              width={120}
              height={120}
              className="rounded-full border-4 border-sky-500 shadow-md"
            />
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {detail.firstName} {detail.lastName}
              </h2>
              <p className="text-gray-500">{detail.email}</p>
              <p className="text-gray-500">{detail.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 max-lg:grid-cols-1 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 flex-1">
            <div>
              <span className="block text-sm text-gray-500">Username</span>
              <span className="font-medium">{detail.username}</span>
            </div>
            <div>
              <span className="block text-sm text-gray-500">Gender</span>
              <span className="font-medium">{detail.gender}</span>
            </div>
            <div>
              <span className="block text-sm text-gray-500">Birth Date</span>
              <span className="font-medium">{detail.birthDate}</span>
            </div>
            <div>
              <span className="block text-sm text-gray-500">Role</span>
              <span className="font-medium">{detail.role}</span>
            </div>
            <div>
              <span className="block text-sm text-gray-500">City</span>
              <span className="font-medium">{detail.address.city}</span>
            </div>
            <div>
              <span className="block text-sm text-gray-500">Country</span>
              <span className="font-medium">{detail.address.country}</span>
            </div>
          </div>
        </div>
        <div className="w-full items-center justify-between flex gap-8 px-12 mt-20">
          <button className="w-full hover:text-red-500 hover:bg-white transition ease-in hover:border-2 bg-red-500 text-white cursor-pointer  py-4 rounded-full" onClick={() => removeHandler(detail.id)}>remove</button>
        </div>
      </main>

    </section>
  );
};

export default UserDetail;
