import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const formatDate = (dateString: string) => {
  try {
    const date = parseISO(dateString);
    return format(date, 'dd MMMM yyyy', { locale: enUS });
  } catch (error) {
    console.error('Invalid date format:', error);
    return dateString;
  }
};
