import Link from 'next/link';

export default function Login(){
    return(
        <button>
        <Link href="/api/auth/login">Login</Link>
        </button>
    )
}