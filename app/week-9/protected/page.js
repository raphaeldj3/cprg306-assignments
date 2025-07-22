import { useUserAuth } from "../_utils/auth-context"
 
export default function ProtectedPage(){
 
    const {user} = useUserAuth();
 
    return(
        <main>
            <header>
                <h1>Protected Page</h1>
            </header>
 
            {user ? (
                <section>
                    <p>This is your Protected Page</p>
                </section>
 
            ):(
                <section>
                    <p>This is the page that you logoff</p>
                    <Link href={"/.week-9/protected"}></Link>
                </section>
 
            )}
        </main>
    )
};