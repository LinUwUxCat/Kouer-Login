import { signOut } from '@/auth';

export default function LoginSuccess() {
    function logOutBtn(){
        async () => {
            'use server';
            await signOut();
        }
    }

    return (
        <>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
            <button type='submit' className='outline outline-1 outline-slate-500'>Log Out</button>
        </form>
        <span>Logged in successfully.</span>
        </>
    );
}
