import Image from "next/image"
import Logo from "../../assets/logo-dark.png"
import Link from "next/link"
import { Button } from "../button"

export function Header() {
    return (
        <header className="flex justify-around px-8 py-8">
            <section className="flex-1">
                <Link href="/" className="flex items-center justify-center h-full">
                    <Image
                        src={Logo}
                        alt="logotipo"
                        width={160}
                    />
                </Link>
            </section>

            <section className="hidden md:flex md:flex-1 gap-10">
                <section>
                    <ul className="flex mx-1 gap-6 text-lg items-center h-full">
                        <Link href="#" className="font-semibold text-purple">Premium</Link>
                        <Link href="#">Sobre</Link>
                        <Link href="#">Entrar</Link>
                    </ul>
                </section>

                <section className="flex items-center h-full">
                    <Button>Experimente Grátis</Button>
                </section>
            </section>

        </header>
    )
}
