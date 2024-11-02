import { getSession } from '@auth0/nextjs-auth0';

export default async function ProfileServer() {
    const session = await getSession();
    const user = session ? session.user : null

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
