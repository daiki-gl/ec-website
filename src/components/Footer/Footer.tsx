import Link from "next/link"
import Location from "../common/Location"
import Title from "../common/Title"

const Footer = () => {
  return (
    <footer className="flex justify-between px-5 md:px-24 py-14 mt-10 md:mt-20 divide-x-0 md:divide-x bg-slate-100">
        <div>
            <Title />
            <div className="mt-4">
                <Location />
            </div>
        </div>

    <div className="block sm:flex sm:justify-between md:justify-evenly w-full md:w-3/5 ml-8 md:ml-2">
        <div className="text-sm">
            <ul>
                <li className="font-bold mb-2">Help Center</li>
                <li className="mb-1">
                    <Link href="#">Our Store</Link>
                </li>
                <li className="mb-1">
                    <Link href="#">Help Center</Link>
                </li>
                <li className="mb-1">
                    <Link href="#">Shipping Info</Link>
                </li>
                <li className="mb-1">
                    <Link href="#">Contact Us</Link>
                </li>
                <li className="mb-1">
                    <Link href="#">Site Map</Link>
                </li>
            </ul>
        </div>

        <div className="text-sm">
            <ul>
                <li className="font-bold mb-2">Company</li>
                <li  className="mb-1">
                    <Link href="#">About Us</Link>
                </li>
                <li  className="mb-1">
                    <Link href="#">Careers</Link>
                </li>
                <li  className="mb-1">
                    <Link href="#">Business Opportunities</Link>
                </li>
            </ul>
        </div>

        <div className="text-sm">
            <ul>
                <li className="font-bold mb-2">Legal</li>
                <li className="mb-1">
                    <Link href="#">Privacy</Link>
                </li>
                <li className="mb-1">
                    <Link href="#">Terms & Condition</Link>
                </li>
                <li className="mb-1">
                    <Link href="#">FAQ</Link>
                </li>
                <li className="mb-1">
                    <Link href="#">Return Policy</Link>
                </li>
            </ul>
        </div>

    </div>
    </footer>
  )
}

export default Footer