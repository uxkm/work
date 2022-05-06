<template>
  <section role="contentinfo" class="uksection" aria-label="Tooltip">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Bootstrap Vue(BV) UI Tooltip 유형1(MouseOver/Focus)</p>
    <p>Bootstrap Vue Tooltip은 마우스 hover or Click 했을 경우에 사용</p>
    <br />
    <div class="container text-center" style="margin-bottom: 180px">
      <b-button href="#" tabindex="0" v-b-tooltip.focus id="notiPriceInfo1" class="bv-ibtn-noti"><i class="icon"></i><span class="is-blind">가격 상세정보</span></b-button>
      <!-- BV HTML title specified via default slot -->
      <!-- top, bottom, left, right, auto, topleft, topright, bottomleft, bottomright, lefttop, leftbottom, righttop, rightbottom -->
      <b-tooltip target="notiPriceInfo1" placement="bottomright" variant="c-black">
        <span class="pd-price">월<em>111,580</em>원</span>
        <p class="pd-text-info">휴대폰 53,080원 + 통신요금 58,500원</p>
        <p class="pd-text-sub">(5G 스마트, 선택 약정 할인 24개월 기준)</p>
      </b-tooltip>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b-button id="notiPriceInfo2" class="bv-ibtn-noti pill"><i class="icon"></i><span class="is-blind">가격 상세정보</span></b-button>
      <!-- BV HTML title specified via default slot -->
      <!-- top, bottom, left, right, auto, topleft, topright, bottomleft, bottomright, lefttop, leftbottom, righttop, rightbottom -->
      <b-tooltip :show.sync="show1" target="notiPriceInfo2" placement="bottomright" variant="c-black">
        <span class="pd-price">월<em>111,580</em>원</span>
        <p class="pd-text-info">휴대폰 53,080원 + 통신요금 58,500원</p>
        <p class="pd-text-sub">(5G 스마트, 선택 약정 할인 24개월 기준)</p>
      </b-tooltip>
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 500px">
화면낭독기(센스리더 기준) BV Tooltip 음성 출력 예시)
가격 상세정보 월 111,580원 휴대폰 53,000원 + 통신요금 58,500원 (5G 스마트, 선택 약정 할인 24개월 기준) 버튼
==============================================================================================
Bootstrap Vue UI 사용 
Icon button 요소
<b-button>요소에 class="bv-ibtn-noti" 추가 
기본 색상이 black이면 bv-ibtn-noti에 class 'pill' 추가 = class="bv-ibtn-noti pill"

Tooltip 요소
<b-tooltip>
<b-tooltip>요소에 variant="c-black" class 추가하여 기존 UI에서 현재 디자인 가이드에 맞추어 UI 작업
==============================================================================================
<b-button href="#" tabindex="0" v-b-tooltip.focus id="notiPriceInfo1" class="bv-ibtn-noti"><i class="icon"></i><span class="is-blind">가격 상세정보</span></b-button>
<!-- BV HTML title specified via default slot -->
<!-- top, bottom, left, right, auto, topleft, topright, bottomleft, bottomright, lefttop, leftbottom, righttop, rightbottom -->
<b-tooltip target="notiPriceInfo1" placement="bottomright" variant="c-black">
  <span class="pd-price">월<em>111,580</em>원</span>
  <p class="pd-text-info">휴대폰 53,080원 + 통신요금 58,500원</p>
  <p class="pd-text-sub">(5G 스마트, 선택 약정 할인 24개월 기준)</p>
</b-tooltip>

<b-button id="notiPriceInfo2" class="bv-ibtn-noti pill"><i class="icon"></i><span class="is-blind">가격 상세정보</span></b-button>
<b-tooltip :show.sync="show" target="notiPriceInfo2" placement="bottomright" variant="c-black-sm">
  <span class="pd-price">월<em>111,580</em>원</span>
  <p class="pd-text-info">휴대폰 53,080원 + 통신요금 58,500원</p>
  <p class="pd-text-sub">(5G 스마트, 선택 약정 할인 24개월 기준)</p>
</b-tooltip>
Tooltip이 먼저 보여지는 형태이면 show: true 설정
<script>
export default 
  data() {
    return {
      show: true,
    };
  },
};
</script>
      </textarea>
    </div>
    <br />
    <br />
    <p class="h4">Bootstrap Vue(BV) UI Tooltip 유형2(MouseOver/Focus) - Small Size</p>
    <br />
    <div class="contianer text-center" style="margin-bottom: 50px">
      <b-button href="#" tabindex="0" v-b-tooltip.focus id="notiPriceInfo3" class="bv-ibtn-noti gray sm"><i class="icon"></i><span class="is-blind">가격 상세정보</span></b-button>
      <!-- BV HTML title specified via default slot -->
      <!-- top, bottom, left, right, auto, topleft, topright, bottomleft, bottomright, lefttop, leftbottom, righttop, rightbottom -->
      <b-tooltip target="notiPriceInfo3" placement="bottom" variant="c-black-sm">
        <p class="text-info">잔여 78.01 GB</p>
      </b-tooltip>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b-button id="notiPriceInfo4" class="bv-ibtn-noti pill sm"><i class="icon"></i><span class="is-blind">가격 상세정보</span></b-button>
      <!-- BV HTML title specified via default slot -->
      <!-- top, bottom, left, right, auto, topleft, topright, bottomleft, bottomright, lefttop, leftbottom, righttop, rightbottom -->
      <b-tooltip :show.sync="show2" target="notiPriceInfo4" placement="bottom" variant="c-black-sm">
        <p class="text-info">잔여 78.01 GB</p>
      </b-tooltip>
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 500px">
==============================================================================================
Bootstrap Vue UI 사용 
Icon button 요소 - small 사이즈 class 'sm' 추가
<b-button>요소에 
gray 색상이면 class="bv-ibtn-noti" 에 class 'gray sm' 추가  class="bv-ibtn-noti gray sm"
black 색상이면 bv-ibtn-noti에 class 'pill' 추가 = class="bv-ibtn-noti pill sm"

Tooltip 요소 작은 사이즈의 tooltip
<b-tooltip>
<b-tooltip>요소에 variant="c-black-sm" class 추가하여 기존 UI에서 현재 디자인 가이드에 맞추어 UI 작업
==============================================================================================
<b-button href="#" tabindex="0" v-b-tooltip.focus id="notiPriceInfo3" class="bv-ibtn-noti gray sm"><i class="icon"></i><span class="is-blind">가격 상세정보</span></b-button>
<!-- BV HTML title specified via default slot -->
<!-- top, bottom, left, right, auto, topleft, topright, bottomleft, bottomright, lefttop, leftbottom, righttop, rightbottom -->
<b-tooltip target="notiPriceInfo3" placement="bottom" variant="c-black-sm">
  <span class="pd-price">월<em>111,580</em>원</span>
  <p class="pd-text-info">휴대폰 53,080원 + 통신요금 58,500원</p>
  <p class="pd-text-sub">(5G 스마트, 선택 약정 할인 24개월 기준)</p>
</b-tooltip>

<b-button id="notiPriceInfo4" class="bv-ibtn-noti pill sm"><i class="icon"></i><span class="is-blind">가격 상세정보</span></b-button>
<b-tooltip :show.sync="show2" target="notiPriceInfo4" placement="bottom" variant="c-black-sm">
  <span class="pd-price">월<em>111,580</em>원</span>
  <p class="pd-text-info">휴대폰 53,080원 + 통신요금 58,500원</p>
  <p class="pd-text-sub">(5G 스마트, 선택 약정 할인 24개월 기준)</p>
</b-tooltip>
      </textarea>
    </div>
    <br />
    <br />
    <p class="h4">Semantic UI Tooltip 유형1</p>
    <p>Semantic UI Tooltip은 이벤트 발생시 생기는 Tooltip이 아니라 고정된 형식의 정보성 UI일 때 사용</p>
    <br />
    <div class="contianer position-relative" style="margin-bottom: 150px">
      <div class="c-tooltip-white arrow-bl">
        <div class="tooltip-in">
          <strong class="text-mng">홈 매니저</strong>
          <div class="tooltip-cnt">
            <div class="info-picture"><img :src="$config.asset.imgURL + '/images/sample/sample-img-photo.jpg'" alt="홈 매니저 김유플 사진" /></div>
            <div class="info-mng">
              <span class="text-office">판교서비스센터</span>
              <strong class="text-name">김유플</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="c-tooltip-white arrow-bc" style="left: 200px">
        <div class="tooltip-in">
          <strong class="text-mng">홈 매니저</strong>
          <div class="tooltip-cnt">
            <div class="info-picture"><img :src="$config.asset.imgURL + '/images/sample/sample-img-photo.jpg'" alt="홈 매니저 김유플 사진" /></div>
            <div class="info-mng">
              <span class="text-office">판교서비스센터</span>
              <strong class="text-name">김유플</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="c-tooltip-white arrow-br" style="left: 400px">
        <div class="tooltip-in">
          <strong class="text-mng">홈 매니저</strong>
          <div class="tooltip-cnt">
            <div class="info-picture"><img :src="$config.asset.imgURL + '/images/sample/sample-img-photo.jpg'" alt="홈 매니저 김유플 사진" /></div>
            <div class="info-mng">
              <span class="text-office">판교서비스센터</span>
              <strong class="text-name">김유플</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contianer position-relative" style="margin-bottom: 250px">
      <div class="c-tooltip-white arrow-tl">
        <div class="tooltip-in">
          <strong class="text-mng">홈 매니저</strong>
          <div class="tooltip-cnt">
            <div class="info-picture"><img :src="$config.asset.imgURL + '/images/sample/sample-img-photo.jpg'" alt="홈 매니저 김유플 사진" /></div>
            <div class="info-mng">
              <span class="text-office">판교서비스센터</span>
              <strong class="text-name">김유플</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="c-tooltip-white arrow-tc" style="left: 200px">
        <div class="tooltip-in">
          <strong class="text-mng">홈 매니저</strong>
          <div class="tooltip-cnt">
            <div class="info-picture"><img :src="$config.asset.imgURL + '/images/sample/sample-img-photo.jpg'" alt="홈 매니저 김유플 사진" /></div>
            <div class="info-mng">
              <span class="text-office">판교서비스센터</span>
              <strong class="text-name">김유플</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="c-tooltip-white arrow-tr" style="left: 400px">
        <div class="tooltip-in">
          <strong class="text-mng">홈 매니저</strong>
          <div class="tooltip-cnt">
            <div class="info-picture"><img :src="$config.asset.imgURL + '/images/sample/sample-img-photo.jpg'" alt="홈 매니저 김유플 사진" /></div>
            <div class="info-mng">
              <span class="text-office">판교서비스센터</span>
              <strong class="text-name">김유플</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 500px">
==============================================================================================
Semantic Markup 사용 
흰색 배경의 Tooltip <div class="c-tooltip-white arrow-bl">
arrow 하단/좌측 위치  class 'arrow-bl'
arrow 하단/가운데 위치  class 'arrow-bc'
arrow 하단/우측 위치  class 'arrow-br'
arrow 상단/좌측 위치  class 'arrow-tl'
arrow 상단/가운데 위치  class 'arrow-tc'
arrow 상단/우측 위치  class 'arrow-tr'
==============================================================================================
<div class="c-tooltip-white arrow-bl">
  <div class="tooltip-in">
    <strong class="text-mng">홈 매니저</strong>
    <div class="tooltip-cnt">
      <div class="info-picture"><img :src="$config.asset.imgURL + '/images/sample/sample-img-photo.jpg'" alt="홈 매니저 김유플 사진" /></div>
      <div class="info-mng">
        <span class="text-office">판교서비스센터</span>
        <strong class="text-name">김유플</strong>
      </div>
    </div>
  </div>
</div>
      </textarea>
    </div>
    <br />
    <br />
    <p class="h4">Semantic UI Tooltip 유형2</p>
    <p>Semantic UI Tooltip은 이벤트 발생시 생기는 Tooltip이 아니라 고정된 형식의 정보성 UI일 때 사용</p>
    <br />
    <div class="contianer position-relative" style="margin-bottom: 100px">
      <div class="c-tooltip-black arrow-tl" tabindex="0">
        <div class="tooltip-in">
          <p class="text-info">U+에서 추천하는 휴대폰 요금제를<br />보실 수 있습니다.</p>
        </div>
      </div>
      <div class="c-tooltip-black arrow-tl" tabindex="0" style="left: 250px">
        <div class="tooltip-in">
          <p class="text-info">U+에서 추천하는 휴대폰 요금제를<br />보실 수 있습니다.</p>
        </div>
      </div>
      <div class="c-tooltip-black arrow-tl" tabindex="0" style="left: 500px">
        <div class="tooltip-in">
          <p class="text-info">U+에서 추천하는 휴대폰 요금제를<br />보실 수 있습니다.</p>
        </div>
      </div>
    </div>
    <div class="contianer position-relative" style="margin-bottom: 200px">
      <div class="c-tooltip-black arrow-bl" tabindex="0">
        <div class="tooltip-in">
          <p class="text-info">U+에서 추천하는 휴대폰 요금제를<br />보실 수 있습니다.</p>
        </div>
      </div>
      <div class="c-tooltip-black arrow-bl" tabindex="0" style="left: 250px">
        <div class="tooltip-in">
          <p class="text-info">U+에서 추천하는 휴대폰 요금제를<br />보실 수 있습니다.</p>
        </div>
      </div>
      <div class="c-tooltip-black arrow-bl" tabindex="0" style="left: 500px">
        <div class="tooltip-in">
          <p class="text-info">U+에서 추천하는 휴대폰 요금제를<br />보실 수 있습니다.</p>
        </div>
      </div>
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 450px">
==============================================================================================
Semantic Markup 사용 
검은색 배경의 Toasts <div class="c-toasts-black arrow-tr">
arrow 하단/좌측 위치  class 'arrow-bl'
arrow 하단/가운데 위치  class 'arrow-bc'
arrow 하단/우측 위치  class 'arrow-br'
arrow 상단/좌측 위치  class 'arrow-tl'
arrow 상단/가운데 위치  class 'arrow-tc'
arrow 상단/우측 위치  class 'arrow-tr'
==============================================================================================
<div class="c-tooltip-black arrow-tl" tabindex="0">
  <div class="tooltip-in">
    <p class="text-info">U+에서 추천하는 휴대폰 요금제를<br />보실 수 있습니다.</p>
  </div>
</div>
      </textarea>
    </div>
    <br />
    <br />
    <p class="h4">Semantic UI Tooltip 유형3 - Close 버튼이 있는 유형</p>
    <p>Semantic UI Tooltip은 이벤트 발생시 생기는 Tooltip이 아니라 고정된 형식의 정보성 UI일 때 사용</p>
    <br />
    <div class="contianer position-relative" style="margin-bottom: 100px">
      <div class="c-toasts-white arrow-tr" tabindex="0">
        <div class="tooltip-in">
          <p class="text-info">
            나만의 <em class="cl-def">결합 상품</em>을<br />
            만들어보세요.
          </p>
        </div>
        <button class="c-ibtn-close"><span class="is-blind">닫기</span></button>
      </div>
      <div class="c-toasts-white arrow-tl" tabindex="0" style="left: 200px">
        <div class="tooltip-in">
          <p class="text-info">
            나만의 <em class="cl-def">결합 상품</em>을<br />
            만들어보세요.
          </p>
        </div>
        <button class="c-ibtn-close"><span class="is-blind">닫기</span></button>
      </div>
      <div class="c-toasts-white arrow-tc" tabindex="0" style="left: 400px">
        <div class="tooltip-in">
          <p class="text-info">
            나만의 <em class="cl-def">결합 상품</em>을<br />
            만들어보세요.
          </p>
        </div>
        <button class="c-ibtn-close"><span class="is-blind">닫기</span></button>
      </div>
    </div>
    <div class="contianer position-relative" style="margin-bottom: 200px">
      <div class="c-toasts-white arrow-br" tabindex="0">
        <div class="tooltip-in">
          <p class="text-info">
            나만의 <em class="cl-def">결합 상품</em>을<br />
            만들어보세요.
          </p>
        </div>
        <button class="c-ibtn-close"><span class="is-blind">닫기</span></button>
      </div>
      <div class="c-toasts-white arrow-bl" tabindex="0" style="left: 200px">
        <div class="tooltip-in">
          <p class="text-info">
            나만의 <em class="cl-def">결합 상품</em>을<br />
            만들어보세요.
          </p>
        </div>
        <button class="c-ibtn-close"><span class="is-blind">닫기</span></button>
      </div>
      <div class="c-toasts-white arrow-bc" tabindex="0" style="left: 400px">
        <div class="tooltip-in">
          <p class="text-info">
            나만의 <em class="cl-def">결합 상품</em>을<br />
            만들어보세요.
          </p>
        </div>
        <button class="c-ibtn-close"><span class="is-blind">닫기</span></button>
      </div>
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 450px">
==============================================================================================
Semantic Markup 사용 - Close 버튼이 있는 유형
흰색 배경의 Toasts <div class="c-toasts-white arrow-tr">
arrow 하단/좌측 위치  class 'arrow-bl'
arrow 하단/가운데 위치  class 'arrow-bc'
arrow 하단/우측 위치  class 'arrow-br'
arrow 상단/좌측 위치  class 'arrow-tl'
arrow 상단/가운데 위치  class 'arrow-tc'
arrow 상단/우측 위치  class 'arrow-tr'
==============================================================================================
<div class="c-toasts-white arrow-tr" tabindex="0">
  <div class="tooltip-in">
    <p class="text-info">
      나만의 <em class="cl-def">결합 상품</em>을<br />
      만들어보세요.
    </p>
  </div>
  <button class="c-ibtn-close"><span class="is-blind">닫기</span></button>
</div>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tooltip',
  layout: 'guide',
  data() {
    return {
      title: 'Tooltip',
      show1: true,
      show2: true,
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
