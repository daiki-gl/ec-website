import Link from 'next/link'

const Title = () => {
  return (
    <Link href={'/'}>
        <h1 className="uppercase font-bold text-2xl lg:text-3xl">
            <span className="text-red-600">P</span>
            <span className="text-yellow-300">a</span>
            <span className="text-green-500">r</span>
            <span className="text-blue-300">t</span>
            <span className="text-blue-600">y</span>
            <span className="text-orange-500"> P</span>
            <span className="text-pink-400">a</span>
            <span className="text-red-600">l</span>
            <span className="text-yellow-300">o</span>
            <span className="text-green-500">o</span>
            <span className="text-blue-300">z</span>
            <span className="text-blue-600">a</span>
        </h1>
    </Link>
  )
}

export default Title