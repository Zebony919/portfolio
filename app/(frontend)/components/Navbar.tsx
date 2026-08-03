export default function Navbar() {
    return (
        <div className="w-full pt-10 pb-8 flex flex-wrap gap-28 justify-center bg-black font-nova text-3xl">
            <p className="hover:underline hover:cursor-pointer">About</p>
            <p className="hover:underline hover:cursor-pointer">Projects</p>
            <p className="hover:underline hover:cursor-pointer">Skills</p>
            <p className="hover:underline hover:cursor-pointer">Contacts</p>
        </div>
    )
}