'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        user ? (
            <div>
                <img src={String(user.picture)} alt={String(user.name)} />
                <h2>{String(user.name)}</h2>
                <p>{String(user.email)}</p>
            </div>
        ) : null
    );
}
