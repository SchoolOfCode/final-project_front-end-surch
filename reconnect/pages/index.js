import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import Login from "../component/Login/login";


export default function Signup() {
  const { user, error, isLoading } = useUser();
    return (
    <main>    
    <h1>Sign Up Page</h1>
    <Login/>
    
    </main>
    );
    }
