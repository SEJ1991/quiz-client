/**
 * 퀴즈 API 데이터 타입
 * @see https://opentdb.com/api_config.php
 * @property {string} category 퀴즈 카테고리
 * @property {string} correct_answer 정답
 * @property {easy} difficulty 난이도
 * @property {string[]} incorrect_answers 정답이 아닌 선택지 목록
 * @property {string} question 질문
 * @property {multiple} type 퀴즈 타입
 */
type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: 'easy';
  incorrect_answers: string[];
  question: string;
  type: 'multiple';
};

/**
 * @property {number} response_code 응답 코드
 * @property {Quiz[]} results 퀴즈 목록
 */
type RES_QUIZ = {
  response_code: number;
  results: Quiz[];
};
