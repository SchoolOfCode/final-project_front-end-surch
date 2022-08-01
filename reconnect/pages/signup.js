import Link from "next/link";

export default function signup() {
    return (
    <main>    
    <h1>Sign Up Page</h1>
    <Link href="/api/auth/login">Login</Link>
    </main>
    );
    }