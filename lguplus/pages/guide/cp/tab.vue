<template>
  <section role="contentinfo" class="uksection" aria-label="Tab">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Tab - <small>탭은 동일한 페이지 또는 영역 안에서 사용자가 원하는 콘텐츠를 탐색할 수 있도록 한다.</small></p>
    <br />
    <p class="h5">[Tab 유형 1 - (페이지 최상단에 위치하는 것을 권장한다.)]</p>
    <p class="h6">Tab Menu 2개</p>
    <br />
    <div class="c-tabmenu-wrap">
      <div class="c-tabmenu-tab c-tab-default">
        <ul>
          <li class="is-active">
            <a href="#">메뉴1 <span class="is-blind">선택됨</span></a>
          </li>
          <li><a href="#">메뉴2</a></li>
        </ul>
      </div>
    </div>
    <br />
    <p class="h6">Tab Menu 3개</p>
    <br />
    <div class="c-tabmenu-wrap">
      <div class="c-tabmenu-tab c-tab-default">
        <ul>
          <li class="is-active">
            <a href="#">메뉴1 <span class="is-blind">선택됨</span></a>
          </li>
          <li><a href="#">메뉴2</a></li>
          <li><a href="#">메뉴3</a></li>
        </ul>
      </div>
    </div>
    <br />
    <p class="h6">Tab Menu 3개 이상</p>
    <br />
    <div class="c-tabmenu-wrap">
      <div class="c-tabmenu-tab c-tab-default">
        <ul>
          <li class="is-active">
            <a href="#">메뉴1 <span class="is-blind">선택됨</span></a>
          </li>
          <li><a href="#">메뉴2</a></li>
          <li><a href="#">메뉴3</a></li>
          <li><a href="#">메뉴4</a></li>
          <li><a href="#">메뉴5</a></li>
          <li><a href="#">메뉴6</a></li>
        </ul>
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 450px">
====================================================================================
Tab 기본 사용 class="c-default"
전체 감싸는 요소 <div class="c-tabmenu-wrap">
하위 요소 <div class="c-tabmenu-tab c-tab-default">
선택된 요소 <li class="is-active">
접근성 관련 선택된 요소 텍스트 <span class="is-blind">선택됨</span>
====================================================================================
<div class="c-tabmenu-wrap">
  <div class="c-tabmenu-tab c-tab-default">
    <ul>
      <li class="is-active">
        <a href="#">메뉴1 <span class="is-blind">선택됨</span></a>
      </li>
      <li><a href="#">메뉴2</a></li>
      <li><a href="#">메뉴3</a></li>
      <li><a href="#">메뉴4</a></li>
      <li><a href="#">메뉴5</a></li>
      <li><a href="#">메뉴6</a></li>
    </ul>
  </div>
</div>
      </textarea>
    </div>
    <br />
    <br />
    <p class="h5">[Tab 유형 2 - 메뉴가 박스에 비해 넘칠 경우 우측에 좌/우 버튼이 활성화 됨]</p>
    <p class="h6">다수 예시</p>
    <br />
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
          </ul>
        </div>
        <div class="c-tab-btn-group">
          <button class="c-tab-btn-prev is-disabled" disabled><span class="is-blind">이전 탭메뉴</span></button>
          <button class="c-tab-btn-next"><span class="is-blind">다음 탭메뉴</span></button>
        </div>
      </div>
    </div>
    <br />
    <p class="h6">최대 예시 - 메뉴가 박스에 비해 넘칠 경우 우측에 좌/우 버튼이 활성화 됨]</p>
    <br />
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
            <li><a href="#">요금/납부</a></li>
            <li><a href="#">요금제</a></li>
            <li><a href="#">부가서비스</a></li>
            <li><a href="#">배송/개통/결제</a></li>
          </ul>
        </div>
        <div class="c-tab-btn-group">
          <button class="c-tab-btn-prev is-disabled" disabled><span class="is-blind">이전 탭메뉴</span></button>
          <button class="c-tab-btn-next"><span class="is-blind">다음 탭메뉴</span></button>
        </div>
      </div>
    </div>
    <br />
    <p class="h6">최대 예시_하위 Tab 예시 - 메뉴가 박스에 비해 넘칠 경우 우측에 좌/우 버튼이 활성화 됨]</p>
    <br />
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
    <br />
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
    <br />
    <br />
    <p class="h5">[Tab 유형 3]</p>
    <p class="h6">Link Tab</p>
    <br />
    <div class="c-tabmenu-wrap">
      <div class="c-tabmenu-tab c-tab-link">
        <ul>
          <li><a href="#">전체보기</a></li>
          <li><a href="#">5G</a></li>
          <li class="is-active">
            <a href="#">휴대폰<span class="is-blind">선택됨</span></a>
          </li>
          <li><a href="#">모바일기기</a></li>
          <li><a href="#">인터넷</a></li>
          <li><a href="#">스마트홈</a></li>
        </ul>
      </div>
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 300px">
====================================================================================
Link Tab 사용 class="c-tab-link
전체 감싸는 요소 <div class="c-tabmenu-wrap">
하위 요소 <div class="c-tabmenu-tab c-tab-link">
선택된 요소 <li class="is-active">
접근성 관련 선택된 요소 텍스트 <span class="is-blind">선택됨</span>
====================================================================================
<div class="c-tabmenu-wrap">
  <div class="c-tabmenu-tab c-tab-link">
    <ul>
      <li><a href="#">전체보기</a></li>
      <li><a href="#">5G</a></li>
      <li class="is-active">
        <a href="#">휴대폰<span class="is-blind">선택됨</span></a>
      </li>
      <li><a href="#">모바일기기</a></li>
      <li><a href="#">인터넷</a></li>
      <li><a href="#">스마트홈</a></li>
    </ul>
  </div>
</div>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tab',
  layout: 'guide',
  data() {
    return {
      title: 'Tab System',
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
