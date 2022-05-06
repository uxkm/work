<template>
  <section role="contentinfo" class="uksection" aria-label="웹접근성 자동진단 요약 보고서">
    <h1 class="h1">{{ title }}</h1>
    <div class="ukdltbl col4">
      <dl>
        <dt>진단 도구</dt>
        <dd>Watch 2.0</dd>
        <dt>진단 유형</dt>
        <dd>자동 검사</dd>
      </dl>
      <dl>
        <dt>사이트 주소</dt>
        <dd>URL</dd>
        <dt>수집 페이지</dt>
        <dd>0 page</dd>
      </dl>
      <dl>
        <dt>진단 기준</dt>
        <dd>한국형 웹 콘텐츠 접근성 지침 2.1</dd>
        <dt>진단 일자</dt>
        <dd>00년 00월 00일</dd>
      </dl>
    </div>
    <div class="article">
      <figure class="uktable tcenter">
        <figcaption>자동진단결과</figcaption>
        <table>
          <colgroup>
            <col style="width: auto" />
            <col style="width: 100px" />
            <col style="width: 100px" />
            <col style="width: 100px" />
          </colgroup>
          <thead>
            <th scope="col">진단 항목</th>
            <th scope="col">항목수</th>
            <th scope="col">오류수</th>
            <th scope="col">준수율</th>
          </thead>
          <tbody>
            <tr class="sum">
              <th scope="row">1. 대체 텍스트 제공</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">&lt;img&gt; 대체 텍스트 없음</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">&lt;area&gt; 대체 텍스트 없음</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">&lt;input type=image&gt; 대체 텍스트 없음</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">&lt;applet&gt; 대체 텍스트 없음</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
          </tbody>
          <tbody>
            <tr class="sum">
              <th scope="row">2.제목 제공</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">페이지 제목 없음</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">&lt;frame&gt; 제목 없음</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">&lt;iframe&gt; 제목 없음</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
          </tbody>
          <tbody>
            <tr class="sum">
              <th scope="row">3.기본 언어 정의</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">기본언어 미정의</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
          </tbody>
          <tbody>
            <tr class="sum">
              <th scope="row">4. 새창열림 사전공지</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">&lt;a&gt; 알려지지 않은 새창열기</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">&lt;area&gt; 알려지지 않은 새창열기</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
          </tbody>
          <tbody>
            <tr class="sum">
              <th scope="row">5. 레이블 제공</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">&lt;input&gt; 레이블 미제공</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">&lt;textarea&gt; 레이블 미제공</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">&lt;select&gt; 레이블 미제공</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
          </tbody>
          <tbody>
            <tr class="sum">
              <th scope="row">6. 마크업 문법</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">id 중복 오류</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">속성 이름 중복 오류</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">태그 열고 닫음 오류</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">닫는 태그 누락 오류</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">여는 태그 누락 오류</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row" class="tleft">태그 중첩 오류</th>
              <td>-</td>
              <td>-</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Report',
  layout: 'guide',
  data() {
    return {
      title: '웹 접근성 자동진단 요약 보고서',
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
