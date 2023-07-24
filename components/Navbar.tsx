import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'
import { getCurrentUser } from '@/lib/session'
import ProfileMenu from './ProfileMenu'

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href="/">
                <Image src="/logo.svg" width={115} height={43} alt="Flexible" />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div className="flexCenter gap-4">
           {session?.user ? (
              <>
                <ProfileMenu session={session} />
                <Link href="/create-project">
                    Share work
                </Link>
              </>
           ) : (
            <AuthProviders/>
           )}   
        </div>
    </nav>
  )
}

export default Navbar