import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uvsutixdsvnkdtbxeqgb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2c3V0aXhkc3Zua2R0YnhlcWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1MzQ3MDcsImV4cCI6MjAwNTExMDcwN30.UEjLIJo58TmQtqeigf5Wjxd_NdITjA0_ioyG6gxXGpY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
