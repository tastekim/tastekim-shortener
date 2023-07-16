import axios from 'axios';
import { nanoid } from 'nanoid';

export const TasteShortener = async (url: string) => {
  try {
    const regex = /(http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-\/]))?/g;
    if (!regex.test(url)) {
      return {
        success : false,
        message : 'Invalid URL',
        shortenUrl : '',
      };
    } else {
      const short_id = nanoid(6);
      const axiosResponse = await axios.post('https://li.urcurly.site/rd', {
        full_url : url,
        id : short_id,
      });
      const shortenUrl = axiosResponse.data?.shortUrl;
      return shortenUrl === undefined ?
        {
          success : false,
          message : 'Failed to shorten URL, server is shutdown.',
          shortenUrl : '',
        } :
        {
          success : true,
          message : 'Success',
          shortenUrl,
        };
    }
  } catch (error) {
    return error instanceof Error ?
      {
        success : false,
        message : error.message,
        shortenUrl : '',
      } :
      {
        success : false,
        message : 'Unknown error. Please try again or send email to me',
        shortenUrl : '',
      };
  }
};
