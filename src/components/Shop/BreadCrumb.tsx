'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
   const paths = usePathname().replace(/%20/g, " ").split("/")
   paths.shift()
   const roots:string[] = [];
   for (let i = 0; i < paths.length; i++) roots.push("/" + paths[i]);

  return (
    <div>
      <span className="text-sm">
      <Link href={"/"}>Home</Link>
      {paths.map((path, i) => (
          roots.length - 1 !== i ? (
              <Link href={`${roots[i]}`} key={path}> &gt; {path}</Link>
          ) : (
            <span key={path}> &gt; <span className="text-gray-500">{path}</span></span>
          )
      ))}
      </span>
    </div>
  )
}

export default BreadCrumb