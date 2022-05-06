<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="Map">
    <h1>{{ title }}</h1>
    <div class="c-map-wrap">
      <div class="c-map">
        <p class="map-tit">신문로2가_광화문빌딩점</p>
        <p class="map-addr">서울 종로구 새문안로 58 지하1층<br />(신문로2가, LG광화문빌딩)</p>
        <p class="map-tel">070-4065-8971</p>
        <div class="c-btn-group">
          <button class="c-btn-zoom c-sm">크게보기</button>
          <button class="c-btn-navi c-sm">길찾기</button>
          <button class="c-btn-print c-sm">인쇄하기</button>
        </div>
      </div>
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 300px">
<div class="c-map-wrap">
  <div class="c-map">
    <p class="map-tit">신문로2가_광화문빌딩점</p>
    <p class="map-addr">서울 종로구 새문안로 58 지하1층<br />(신문로2가, LG광화문빌딩)</p>
    <p class="map-tel">070-4065-8971</p>
    <div class="c-btn-group">
      <button class="c-btn-zoom c-sm">크게보기</button>
      <button class="c-btn-navi c-sm">길찾기</button>
      <button class="c-btn-print c-sm">인쇄하기</button>
    </div>
  </div>
</div>
      </textarea>
    </div>
    <br />
    <br />
    <br />
    <div class="c-map-mytarget">
      <p class="no-data">저장된 내 위치가 없습니다.</p>
      <button class="c-btn-target"><span class="is-blind">내 위치 찾기</span></button>
    </div>
    <br />
    <div class="code-editor">
      <textarea>
<div class="c-map-mytarget">
  <p class="no-data">저장된 내 위치가 없습니다.</p>
  <button class="c-btn-target"><span class="is-blind">내 위치 찾기</span></button>
</div>
      </textarea>
    </div>
    <br />
    <br />
    <br />
    <div class="c-map-result-wrap w508px">
      <p class="text-result">전국 총 <strong>2,144</strong>개 매장 검색</p>
      <div class="c-map-result">
        <div class="c-map-result-list">
          <ul>
            <li>
              <p class="map-tit"><img :src="$config.asset.imgURL + '/images/icon/ico-gps-sm.svg'" alt="" /> 신문로2가_광화문빌딩점</p>
              <p class="map-addr">서울 종로구 새문안로 58 지하1층 (신문로2가, LG광화문빌딩)</p>
              <p class="map-addr">서울시 종로구 신문로2가 92 LG광화문빌딩 지하1층</p>
              <p class="map-tel">T. 070-4065-8971</p>
              <button class="c-btn-gray-round-1">020 매장</button>
            </li>
            <li>
              <p class="map-tit"><img :src="$config.asset.imgURL + '/images/icon/ico-gps-sm.svg'" alt="" /> 신문로2가_광화문빌딩점</p>
              <p class="map-addr">서울 종로구 새문안로 58 지하1층 (신문로2가, LG광화문빌딩)</p>
              <p class="map-addr">서울시 종로구 신문로2가 92 LG광화문빌딩 지하1층</p>
              <p class="map-tel">T. 070-4065-8971</p>
              <button class="c-btn-gray-round-1">020 매장</button>
            </li>
            <li>
              <p class="map-tit"><img :src="$config.asset.imgURL + '/images/icon/ico-gps-sm.svg'" alt="" /> 신문로2가_광화문빌딩점</p>
              <p class="map-addr">서울 종로구 새문안로 58 지하1층 (신문로2가, LG광화문빌딩)</p>
              <p class="map-addr">서울시 종로구 신문로2가 92 LG광화문빌딩 지하1층</p>
              <p class="map-tel">T. 070-4065-8971</p>
              <button class="c-btn-gray-round-1">020 매장</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 600px">
<div class="c-map-result-wrap w508px">
  <p class="text-result">전국 총 <strong>2,144</strong>개 매장 검색</p>
  <div class="c-map-result">
    <div class="c-map-result-list">
      <ul>
        <li>
          <p class="map-tit"><img :src="$config.asset.imgURL + '/images/icon/ico-gps-sm.svg'" alt="" /> 신문로2가_광화문빌딩점</p>
          <p class="map-addr">서울 종로구 새문안로 58 지하1층 (신문로2가, LG광화문빌딩)</p>
          <p class="map-addr">서울시 종로구 신문로2가 92 LG광화문빌딩 지하1층</p>
          <p class="map-tel">T. 070-4065-8971</p>
          <button class="c-btn-gray-round-1">020 매장</button>
        </li>
        <li>
          <p class="map-tit"><img :src="$config.asset.imgURL + '/images/icon/ico-gps-sm.svg'" alt="" /> 신문로2가_광화문빌딩점</p>
          <p class="map-addr">서울 종로구 새문안로 58 지하1층 (신문로2가, LG광화문빌딩)</p>
          <p class="map-addr">서울시 종로구 신문로2가 92 LG광화문빌딩 지하1층</p>
          <p class="map-tel">T. 070-4065-8971</p>
          <button class="c-btn-gray-round-1">020 매장</button>
        </li>
        <li>
          <p class="map-tit"><img :src="$config.asset.imgURL + '/images/icon/ico-gps-sm.svg'" alt="" /> 신문로2가_광화문빌딩점</p>
          <p class="map-addr">서울 종로구 새문안로 58 지하1층 (신문로2가, LG광화문빌딩)</p>
          <p class="map-addr">서울시 종로구 신문로2가 92 LG광화문빌딩 지하1층</p>
          <p class="map-tel">T. 070-4065-8971</p>
          <button class="c-btn-gray-round-1">020 매장</button>
        </li>
      </ul>
    </div>
  </div>
</div>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MapType',
  layout: 'guide',
  data() {
    return {
      title: 'Map Type',
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
