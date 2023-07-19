import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("Cabins Can not fetch");
  }

  return data;
}
// create or edit cabin function (handle both)
export async function createEditCabins(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = hasImagePath
    ? newCabin.image
    : `${Math.random()}-${newCabin.image.name}`.replaceAll('/,"');

  // https://uvsutixdsvnkdtbxeqgb.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // create/edit A cabin
  let query = supabase.from("cabins");

  // create A new Cabin

  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // edit a cabin

  if (id)
    query = query.update([{ ...newCabin, image: newCabin.image }]).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be create");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}
