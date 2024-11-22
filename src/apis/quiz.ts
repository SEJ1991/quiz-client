import axios from 'axios';

/**
 * 퀴즈 api 요청 함수
 * @see https://opentdb.com/api_config.php
 */
export const getQuizess = async (): Promise<RES_QUIZ | undefined> => {
  const response = await axios.get(
    'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'
  );

  return response.data;
};
