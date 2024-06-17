export default function Hero () {
    return (
        <div className="container my-16">
            <h1 className="text-4xl font-bold text-center">Find Your Next Dream Job</h1>
            {/* <p className="text-center text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel a dolor, explicabo cumque ipsa blanditiis iusto odio. Numquam eligendi dolores libero maxime tempora doloremque odit fugit animi. Enim, magni corrupti!
            </p> */}
            <form className="flex gap-2 mt-4 max-w-md mx-auto">
                <input type="search" className="border border-gray-400 w-full p-4 rounded-md" placeholder="search phrase ..."></input>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
            </form>
        </div>
    )
}