<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="Navigation">
    <h1>{{ title }}</h1>
    <div class="c-tabmenu-wrap">
      <div class="c-tabmenu-tab c-tab-slide">
        <div class="c-tab-slidemenu">
          <ul>
            <li class="is-active">
              <a href="#">가입/변경 <span class="is-blind">선택됨</span></a>
            </li>
            <li><a href="#">요금/납부</a></li>
            <li><a href="#">요금제</a></li>
            <li><a href="#">부가서비스</a></li>
            <li><a href="#">배송/개통/결제</a></li>
            <li><a href="#">혜택/할인</a></li>
            <li><a href="#">모바일기기</a></li>
            <li><a href="#">스마트홈</a></li>
            <li><a href="#">인터넷</a></li>
            <li><a href="#">IPTV</a></li>
            <li><a href="#">전화서비스</a></li>
            <li><a href="#">요금/납부</a></li>
            <li><a href="#">요금제</a></li>
            <li><a href="#">부가서비스</a></li>
            <li><a href="#">배송/개통/결제</a></li>
            <li><a href="#">혜택/할인</a></li>
            <li><a href="#">모바일기기</a></li>
            <li><a href="#">스마트홈</a></li>
            <li><a href="#">인터넷</a></li>
            <li><a href="#">IPTV</a></li>
            <li><a href="#">전화서비스</a></li>
          </ul>
        </div>
        <div class="c-tab-btn-group">
          <button class="c-tab-btn-prev is-disabled" disabled><span class="is-blind">이전 탭메뉴</span></button>
          <button class="c-tab-btn-next"><span class="is-blind">다음 탭메뉴</span></button>
        </div>
      </div>
      <div class="c-tabmenu-list">
        <ul>
          <li><a href="#">전체보기</a></li>
          <li><a href="#">멤버십 혜택</a></li>
          <li class="is-active"><a href="#">장기고객 혜택</a></li>
          <li><a href="#">휴대폰 살때 할인</a></li>
          <li><a href="#">요금할인</a></li>
          <li><a href="#">제휴카드로 할인</a></li>
          <li><a href="#">제휴 우대 혜택</a></li>
          <li><a href="#">기타 할인</a></li>
          <li><a href="#">혜택신청/변경불가</a></li>
        </ul>
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 500px">
====================================================================================
Tab Slide 사용 class="c-tab-slide"
전체 감싸는 요소 <div class="c-tabmenu-wrap">
하위 요소 <div class="c-tabmenu-tab c-tab-slide">
슬라이드 되는 부분 감싸는 요소 <div class="c-tab-slidemenu">
선택된 요소 <li class="is-active">
접근성 관련 선택된 요소 텍스트 <span class="is-blind">선택됨</span>
==슬라이드 되는 부분 컨트롤 버튼==
슬라이드 되는 부분에 메뉴들이 시작이면 우측 버튼이 활성화 되고, 좌측버튼이 처음에는 비활성화 되며 다음 메뉴로 이동시 활성화 상태
슬라이드 되는 부분이 마지막 요소에 머무르면 우측버튼이 비활성화 됨.
비활성 버튼 class is-disabled 를 추가하거나 disabled 속성을 추가
<div class="c-tab-btn-group">
  <button class="c-tab-btn-prev is-disabled" disabled><span class="is-blind">이전 탭메뉴</span></button>
  <button class="c-tab-btn-next"><span class="is-blind">다음 탭메뉴</span></button>
</div>
슬라이드 메뉴 클릭시 보이는 하위 메뉴
<div class="c-tabmenu-list">
  <ul>
    <li><a href="#">전체보기</a></li>
    <li><a href="#">멤버십 혜택</a></li>
    <li class="is-active"><a href="#">장기고객 혜택</a></li>
    <li><a href="#">휴대폰 살때 할인</a></li>
    <li><a href="#">요금할인</a></li>
    <li><a href="#">제휴카드로 할인</a></li>
    <li><a href="#">제휴 우대 혜택</a></li>
    <li><a href="#">기타 할인</a></li>
    <li><a href="#">혜택신청/변경불가</a></li>
  </ul>
</div>
====================================================================================
<div class="c-tabmenu-wrap">
  <div class="c-tabmenu-tab c-tab-slide">
    <div class="c-tab-slidemenu">
      <ul>
        <li class="is-active">
          <a href="#">가입/변경 <span class="is-blind">선택됨</span></a>
        </li>
        <li><a href="#">요금/납부</a></li>
        <li><a href="#">요금제</a></li>
        <li><a href="#">부가서비스</a></li>
        <li><a href="#">배송/개통/결제</a></li>
        <li><a href="#">혜택/할인</a></li>
        <li><a href="#">모바일기기</a></li>
        <li><a href="#">스마트홈</a></li>
        <li><a href="#">인터넷</a></li>
        <li><a href="#">IPTV</a></li>
        <li><a href="#">전화서비스</a></li>
        <li><a href="#">요금/납부</a></li>
        <li><a href="#">요금제</a></li>
        <li><a href="#">부가서비스</a></li>
        <li><a href="#">배송/개통/결제</a></li>
        <li><a href="#">혜택/할인</a></li>
        <li><a href="#">모바일기기</a></li>
        <li><a href="#">스마트홈</a></li>
        <li><a href="#">인터넷</a></li>
        <li><a href="#">IPTV</a></li>
        <li><a href="#">전화서비스</a></li>
      </ul>
    </div>
    <div class="c-tab-btn-group">
      <button class="c-tab-btn-prev is-disabled" disabled><span class="is-blind">이전 탭메뉴</span></button>
      <button class="c-tab-btn-next"><span class="is-blind">다음 탭메뉴</span></button>
    </div>
  </div>
  <div class="c-tabmenu-list">
    <ul>
      <li><a href="#">전체보기</a></li>
      <li><a href="#">멤버십 혜택</a></li>
      <li class="is-active"><a href="#">장기고객 혜택</a></li>
      <li><a href="#">휴대폰 살때 할인</a></li>
      <li><a href="#">요금할인</a></li>
      <li><a href="#">제휴카드로 할인</a></li>
      <li><a href="#">제휴 우대 혜택</a></li>
      <li><a href="#">기타 할인</a></li>
      <li><a href="#">혜택신청/변경불가</a></li>
    </ul>
  </div>
</div>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavigationType',
  layout: 'guide',
  data() {
    return {
      title: 'Navigation Type',
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="scss" scoped></style>
