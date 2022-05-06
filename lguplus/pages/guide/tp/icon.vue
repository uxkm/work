<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="Icon Type">
    <h1>{{ title }}</h1>
    <p class="h4">[Tooltip]</p>
    <br />
    <div class="container row row-cols-2" style="margin-bottom: 200px">
      <div class="info-pdwrap">
        <strong class="pd-name">갤럭시 노트20</strong>
        <span class="pd-price">월<em>111,580</em>원</span>
        <b-button href="#" tabindex="0" v-b-tooltip.focus id="notiPriceInfo1" class="bv-ibtn-noti"><i class="icon"></i><span class="is-blind">가격 상세정보</span></b-button>
        <!-- BV HTML title specified via default slot -->
        <!-- top, bottom, left, right, auto, topleft, topright, bottomleft, bottomright, lefttop, leftbottom, righttop, rightbottom -->
        <b-tooltip target="notiPriceInfo1" placement="bottomright" variant="c-black">
          <span class="pd-price">월<em>111,580</em>원</span>
          <p class="pd-text-info">휴대폰 53,080원 + 통신요금 58,500원</p>
          <p class="pd-text-sub">(5G 스마트, 선택 약정 할인 24개월 기준)</p>
        </b-tooltip>
      </div>

      <div class="info-pdwrap">
        <strong class="pd-name">갤럭시 노트20</strong>
        <span class="pd-price">월<em>111,580</em>원</span>
        <b-button id="notiPriceInfo2" class="bv-ibtn-noti pill"><i class="icon"></i><span class="is-blind">가격 상세정보</span></b-button>
        <!-- BV HTML title specified via default slot -->
        <!-- top, bottom, left, right, auto, topleft, topright, bottomleft, bottomright, lefttop, leftbottom, righttop, rightbottom -->
        <b-tooltip :show.sync="show" target="notiPriceInfo2" placement="bottomright" variant="c-black">
          <span class="pd-price">월<em>111,580</em>원</span>
          <p class="pd-text-info">휴대폰 53,080원 + 통신요금 58,500원</p>
          <p class="pd-text-sub">(5G 스마트, 선택 약정 할인 24개월 기준)</p>
        </b-tooltip>
      </div>
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 300px">
<div class="info-pdwrap">
  <strong class="pd-name">갤럭시 노트20</strong>
  <span class="pd-price">월<em>111,580</em>원</span>
  <b-button id="notiPriceInfo2" class="bv-ibtn-noti pill"><i class="icon"></i><span class="is-blind">가격 상세정보</span></b-button>
  <!-- BV HTML title specified via default slot -->
  <!-- top, bottom, left, right, auto, topleft, topright, bottomleft, bottomright, lefttop, leftbottom, righttop, rightbottom -->
  <b-tooltip :show.sync="show" target="notiPriceInfo2" placement="bottomright" variant="c-black">
    <span class="pd-price">월<em>111,580</em>원</span>
    <p class="pd-text-info">휴대폰 53,080원 + 통신요금 58,500원</p>
    <p class="pd-text-sub">(5G 스마트, 선택 약정 할인 24개월 기준)</p>
  </b-tooltip>
</div>
      </textarea>
    </div>
    <br />
    <p class="h4">[좋아요(찜)]</p>
    <br />
    <div>
      <a href="#" class="c-ibtn-like"><span class="is-blind">마음에 드시면 좋아요(찜)를 선택해주세요</span></a>
      <a href="#" class="c-ibtn-like is-active"><span class="is-blind">좋아요(찜)를 선택해주셨습니다. 다시 클릭하면 좋아요(찜)가 해제됩니다</span></a>
    </div>
    <br />
    <div class="code-editor">
      <textarea>
<a href="#" class="c-ibtn-like"><span class="is-blind">마음에 드시면 좋아요(찜)를 선택해주세요</span></a>
<a href="#" class="c-ibtn-like is-active"><span class="is-blind">좋아요(찜)를 선택해주셨습니다. 다시 클릭하면 좋아요(찜)가 해제됩니다</span></a>
      </textarea>
    </div>
    <br />
    <br />
    <p class="h4">[Card Filp Icon]</p>
    <br />
    <div>
      <a href="#" class="c-ibtn-filp"><span class="is-blind">내용 더보기</span></a>
    </div>
    <br />
    <div class="code-editor">
      <textarea>
<a href="#" class="c-ibtn-filp"><span class="is-blind">내용 더보기</span></a>
      </textarea>
    </div>
    <br />
    <br />
    <p class="h4">[Line Icon]</p>
    <br />
    <div class="container row row-c5">
      <a href="#" class="c-ibtn-line-type1"><span>가입 안내</span></a>
      <a href="#" class="c-ibtn-line-type2"><span>조회</span></a>
      <a href="#" class="c-ibtn-line-type3"><span>변경/일시정지/해지</span></a>
      <a href="#" class="c-ibtn-line-type4"><span>서비스 이용</span></a>
      <a href="#" class="c-ibtn-line-type5"><span>매뉴얼 다운로드</span></a>
    </div>
    <br />
    <div class="code-editor">
      <textarea>
<a href="#" class="c-ibtn-line-type1"><span>가입 안내</span></a>
<a href="#" class="c-ibtn-line-type2"><span>조회</span></a>
<a href="#" class="c-ibtn-line-type3"><span>변경/일시정지/해지</span></a>
<a href="#" class="c-ibtn-line-type4"><span>서비스 이용</span></a>
<a href="#" class="c-ibtn-line-type5"><span>매뉴얼 다운로드</span></a>
      </textarea>
    </div>
    <br />
    <br />
    <p class="h4">[기타 유형 - Basic rules icon]</p>
    <br />
    <div class="basic-rule-wrap">
      <p class="h4">휴대폰을 안전하게 사용하기 위한 기본 수칙</p>
      <ul class="basic-rule">
        <li class="rule-item">
          <i class="icon-rule-type1"></i>
          <div class="rule-box">
            <strong class="rule-title">백신 설치, 주기적 검사</strong>
            <p class="rule-text">백신을 최신 버전으로 유지하고<br />주기적으로 바이러스 검사를 하세요.</p>
          </div>
        </li>
        <li class="rule-item">
          <i class="icon-rule-type2"></i>
          <div class="rule-box">
            <strong class="rule-title">믿을만한 문자와 메일만 확인</strong>
            <p class="rule-text">잘 모르는 문자, 메일의 링크는<br />접속하지 마세요.</p>
          </div>
        </li>
        <li class="rule-item">
          <i class="icon-rule-type3"></i>
          <div class="rule-box">
            <strong class="rule-title">앱은 정식마켓에서만 다운로드</strong>
            <p class="rule-text">앱은 U+스토어나 구글 플레이스토어 등에서<br />만 다운로드 받으세요.</p>
          </div>
        </li>
        <li class="rule-item">
          <i class="icon-rule-type4"></i>
          <div class="rule-box">
            <strong class="rule-title">기본 운영체제(OS) 유지</strong>
            <p class="rule-text">휴대폰 제조사에서 제공하는<br />기본 운영체제를 바꾸지 마세요.</p>
          </div>
        </li>
        <li class="rule-item">
          <i class="icon-rule-type5"></i>
          <div class="rule-box">
            <strong class="rule-title">무선 기능 사용 시 주의</strong>
            <p class="rule-text">블루투스는 필요할 때만 연결하고, 보안 설정이<br />되지 않은 와이파이 사용은 자제하세요.</p>
          </div>
        </li>
        <li class="rule-item">
          <i class="icon-rule-type6"></i>
          <div class="rule-box">
            <strong class="rule-title">앱 바이러스 검사</strong>
            <p class="rule-text">다운받은 앱은 바이러스 검사 후<br />사용하세요.</p>
          </div>
        </li>
      </ul>
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 800px">
<div class="basic-rule-wrap">
  <p class="h4">휴대폰을 안전하게 사용하기 위한 기본 수칙</p>
  <ul class="basic-rule">
    <li class="rule-item">
      <i class="icon-rule-type1"></i>
      <div class="rule-box">
        <strong class="rule-title">백신 설치, 주기적 검사</strong>
        <p class="rule-text">백신을 최신 버전으로 유지하고<br />주기적으로 바이러스 검사를 하세요.</p>
      </div>
    </li>
    <li class="rule-item">
      <i class="icon-rule-type2"></i>
      <div class="rule-box">
        <strong class="rule-title">믿을만한 문자와 메일만 확인</strong>
        <p class="rule-text">잘 모르는 문자, 메일의 링크는<br />접속하지 마세요.</p>
      </div>
    </li>
    <li class="rule-item">
      <i class="icon-rule-type3"></i>
      <div class="rule-box">
        <strong class="rule-title">앱은 정식마켓에서만 다운로드</strong>
        <p class="rule-text">앱은 U+스토어나 구글 플레이스토어 등에서<br />만 다운로드 받으세요.</p>
      </div>
    </li>
    <li class="rule-item">
      <i class="icon-rule-type4"></i>
      <div class="rule-box">
        <strong class="rule-title">기본 운영체제(OS) 유지</strong>
        <p class="rule-text">휴대폰 제조사에서 제공하는<br />기본 운영체제를 바꾸지 마세요.</p>
      </div>
    </li>
    <li class="rule-item">
      <i class="icon-rule-type5"></i>
      <div class="rule-box">
        <strong class="rule-title">무선 기능 사용 시 주의</strong>
        <p class="rule-text">블루투스는 필요할 때만 연결하고, 보안 설정이<br />되지 않은 와이파이 사용은 자제하세요.</p>
      </div>
    </li>
    <li class="rule-item">
      <i class="icon-rule-type6"></i>
      <div class="rule-box">
        <strong class="rule-title">앱 바이러스 검사</strong>
        <p class="rule-text">다운받은 앱은 바이러스 검사 후<br />사용하세요.</p>
      </div>
    </li>
  </ul>
</div>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IconType',
  layout: 'guide',
  data() {
    return {
      title: 'Icon Type',
      show: true,
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
