import Link from 'next/link';

export default function Logout(){
    return(
        <button>
        <Link href="/api/auth/logout">Logout</Link>
        </button>
    )
}