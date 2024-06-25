import { HamburgMenu } from "./HamburgMenu";


export function NavigationBar() {

    return (

        <nav className='flex justify-end px-4 text-white'>
            <HamburgMenu />
        </nav>

    )

}