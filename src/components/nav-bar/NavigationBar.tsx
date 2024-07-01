import { HamburgMenu } from "./HamburgMenu";


export function NavigationBar() {

    return (

        <div className='flex justify-end pr-4 pt-2 h-16 text-white bg-transparent'>
            <HamburgMenu />
        </div>

    )

}