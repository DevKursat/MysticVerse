import { createClient } from '@/lib/supabase/client';
import { Reading } from '@/types';

export async function saveReading(
  userId: string,
  readingData: Reading
) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('readings')
    .insert({
      user_id: userId,
      service_type: readingData.type,
      reading_data: readingData.data,
      interpretation: readingData.interpretation,
      created_at: new Date().toISOString()
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getUserReadings(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('readings')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}
