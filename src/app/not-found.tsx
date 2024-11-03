import React from 'react'
import Image from 'next/image'
import notFound from '../../public/images/404.jpg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
function Notfound() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col gap-8 justify-center items-center'>
                <Image src={notFound} alt="404" height={200} width={400} />
                <Link href="/">
                    <Button>Go Back to Home Page</Button>
                </Link>
            </div>
        </div>
    )
}

export default Notfound
