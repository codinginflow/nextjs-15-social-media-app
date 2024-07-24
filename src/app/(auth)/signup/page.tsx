import { Metadata } from 'next';
import Image from 'next/image';  // Import the Image component from next/image
import signupImage from '@/assets/signup-image.jpg';

export const metadata: Metadata = {
    title: 'Sign Up',
};

export default function Page() {
    return (
        <main className="flex h-screen items-center justify-center p-5">
            <div className="shadow-2xl flex h-full max-h-[40rem] w-full max-w-[64rem] rounded-2xl overflow-hidden bg-card">
                <div className="md:w-1/2">
                    login form
                </div>
                <Image
                    src={signupImage}
                    alt="Sign Up Image"
                    className="w-1/2 hidden md:block"
                    width={500} // Provide width and height for the Image component
                    height={500} // Adjust these values as per your requirement
                />
            </div>
        </main>
    );
}
