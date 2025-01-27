export default function UpdateData() {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
    };
  
    return (
      <div className="p-6 w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Actualizar Datos de Usuario</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Teléfono
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Ingresa un teléfono"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Ingresa una dirección"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
  

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              Ciudad
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Ingresa una ciudad"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              País
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Ingresa un país"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
        </form>
        <div className="col-span-full flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-950 transition duration-300 ease focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Actualizar Datos
          </button>
        </div>
      </div>
    );
  }
  