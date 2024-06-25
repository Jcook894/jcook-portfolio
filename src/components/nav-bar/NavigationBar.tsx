import { HamburgMenu } from "./HamburgMenu";


export function NavigationBar() {

    return (

        <nav className='flex justify-end px-4 text-white h-18'>
            <HamburgMenu />
        </nav>

    )

}