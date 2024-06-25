import supabase, { supabaseUrl } from "./supabase";

export async function getUrls(user_id) {
  let { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("user_id", user_id);

  if (error) {
    console.error(error);
    throw new Error("Unable to load URLs");
  }

  return data;
}

export async function deleteUrls(id) {
  let { data, error } = await supabase.from("urls").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Unable to delete URLs");
  }

  return data;
}

export async function createUrls(
  { title, longUrl, customUrl, user_id },
  qrcode
) {
  const short_url = Math.random().toString(36).substring(2, 8);
  const filename = `qr-${short_url}`;
  const { error: storageError } = await supabase.storage
    .from("qrs")
    .upload(filename, qrcode);

  if (storageError) throw new Error(storageError.message);

  const qr = `${supabaseUrl}/storage/v1/object/public/qrs/${filename}`;

  let { data, error } = await supabase
    .from("urls")
    .insert([
      {
        title,
        original_url: longUrl,
        custom_url: customUrl || null,
        user_id,
        short_url,
        qr,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Unable to Create short URLs");
  }

  return data;
}

export async function getLongUrls(id) {
  let { data, error } = await supabase
    .from("urls")
    .select("id,original_url")
    .or(`short_url.eq.${id},custom_url.eq.${id}`)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Error fetching short URLs");
  }

  return data;
}

export async function getUrl({ id, user_id }) {
  let { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("id", id)
    .eq("user_id", user_id)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Short URL not found");
  }

  return data;
}
