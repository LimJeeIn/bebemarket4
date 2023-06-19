import React from 'react';
import * as S from './InputBox.style';

/* InputBox 사용 명세
label : label로 쓰일 텍스트입니다.
id : input의 id값입니다.
type : input의 type입니다.
placeholder : placeholder로 쓰일 텍스트입니다.
value : input의 value입니다.
min : input의 최소 길이입니다.
max : input의 최대 길이입니다.
onChange : input의 value가 변경된 후 포커스가 해제될 때의 이벤트를 입력해 주세요.
onBlur : input에서 포커스가 해제될 때의 이벤트를 입력해 주세요.
onInput : input의 value가 변경될 때의 이벤트를 입력해 주세요.

<유효성 검사 관련>
bottomColor : 'on' 입력시 border-bottom이 빨간색으로 나타나고, null일 경우 기본 회색이 들어갑니다.
errorMessage : 유효성 검사 결과 메시지를 입력합니다.
show : 'on'를 입력하면 message가 나타납니다. 미입력시 message가 있어도 나타나지 않습니다.
*/

const InputBox = ({
  label,
  id,
  type,
  placeholder,
  value,
  min,
  max,
  borderBottomColor,
  show,
  errorMessage,
  onChange,
  onBlur,
  onInput,
}) => {
  return (
    <>
      <S.Box>
        <S.BoxLabel htmlFor={id}>{label}</S.BoxLabel>
        <S.BoxInput
          id={id}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          onInput={onInput}
          value={value}
          borderBottomColor={borderBottomColor}
          minLength={min}
          maxLength={max}
        />
      </S.Box>
      <S.ErrorMessage show={show}>{errorMessage}</S.ErrorMessage>
    </>
  );
};

export default InputBox;
