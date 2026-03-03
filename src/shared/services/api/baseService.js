
export async function getAPI(url) {
   const response = await fetch(url);
   if (!response.ok) {
      throw new Error("Try After sometime")
   }

   return await response.json()
}