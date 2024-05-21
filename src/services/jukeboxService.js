const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;
const show = async (track) => {
    try {
    const res = await fetch(BASE_URL + `/${track}`)
    const data = await res.json()
   console.log(data)
   return data
   
    } catch (err) {
        console.log(err);
    }
  };

export { show } ;