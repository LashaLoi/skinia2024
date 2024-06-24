export default function Location() {
  return (
    <>
      <h2 className="mt-10 mb-10 text-2xl font-bold text-purple-600 p-4  w-full text-center">
        Смоленская 28 - Барановичи - Беларусь
      </h2>
      <div className="md:w-2/3 w-full relative h-[400px] mx-auto">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0 "
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.9171224462784!2d26.026471415711562!3d53.12963329862263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d8cfe1a9c1c715%3A0x2844f8b8b22c6888!2sUlitsa%20Smolenskaya%2028%2C%20Baranavi%C4%8Dy%2C%20Belarus!5e0!3m2!1sen!2sus!4v1653587038964!5m2!1sen!2sus"
        />
      </div>
    </>
  )
}
