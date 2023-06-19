import React from 'react';
import * as S from './Button.style.js';

export function NextButton() {
  return <S.NextButton>다음</S.NextButton>;
}

export function DisabledNextButton() {
  return <S.DisabledNextButton>다음</S.DisabledNextButton>;
}

export function MediumFollowButton({ onClick }) {
  return <S.MediumFollowButton onClick={onClick}>팔로우</S.MediumFollowButton>;
}

export function DisabledFollowButton() {
  return <S.DisabledFollowButton>팔로우</S.DisabledFollowButton>;
}

export function UnfollowButton({ onClick }) {
  return <S.UnfollowButton onClick={onClick}>언팔로우</S.UnfollowButton>;
}

export function SaveButton() {
  return <S.SaveButton>저장</S.SaveButton>;
}

export function DisabledSaveButton() {
  return <S.DisabledSaveButton>저장</S.DisabledSaveButton>;
}

export function SmallFollowButton() {
  return <S.SmallFollowButton>팔로우</S.SmallFollowButton>;
}

export function CancelButton() {
  return <S.CancelButton>취소</S.CancelButton>;
}
