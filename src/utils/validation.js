// 문자열 length 체크
function validateCharByte(char) {
  return char.length <= 1 ? false : true;
}

// 핸드폰 번호 정규식 체크
function validateTel(char) {
  return /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(char);
}

export { validateCharByte, validateTel };
