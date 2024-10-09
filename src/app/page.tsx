"use client";

import { useGetUser } from "@/entity/user/_queries";

export default function Home() {
    const { data, isLoading, isError } = useGetUser();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading user data.</div>;
    }

    return (
        <div>
            {data?.data &&
                data.data.map((user) => {
                    return (
                        <div
                            key={user.UID}
                            className="flex flex-row items-center gap-4"
                        >
                            <div className="text-yellow-600">
                                {user.DOLJNAME}
                            </div>
                            <div className="text-green-600">
                                {user.MOBPHONE}
                            </div>
                            <div>{user.FULLNAME}</div>
                        </div>
                    );
                })}
        </div>
    );
}
