export default function Location() {
  return (
    <>
      <h2 className="mt-10 mb-10 text-2xl font-bold text-purple-800 p-4  w-full text-center">
        улица Притыцкого, 62к1 <br />
        Минск - Беларусь
      </h2>
      <div className="md:w-2/3 w-full relative h-[400px] mx-auto">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0 "
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1083.242276147575!2d27.456348417215178!3d53.90711978823077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1751564976477!5m2!1sru!2sby"
        />
      </div>
    </>
  )
}
