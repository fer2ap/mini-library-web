import Link from "next/link";

const Title = ({ title, description }: {
    title: String,
    description: String
}) => {
    return (
        <div className="flex flex-row w-full p-2 mb-4">
            <h1 className="text-white text-2xl align-bottom font-bold">{title}</h1>
            <Link href="/" className="text-white text-lg ml-auto mt-1 mr-3.5 align-bottom hover:underline">{description}</Link>
        </div>
    )
}

export default Title;