import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins Can not fetch");
  }

  return data;
}

export async function createCabins(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/,"');

  // https://uvsutixdsvnkdtbxeqgb.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be create");
  }

  // upload image

  const { error: storageErros } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageErros) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageErros);
    throw new Error("Cabin could note created cause of error on upload image ");
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
