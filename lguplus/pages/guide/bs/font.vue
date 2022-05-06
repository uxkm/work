<template>
  <section role="contentinfo" class="uksection" aria-label="Font">
    <h1 class="h1">{{ title }}</h1>
    <div class="uktblbox">
      <dl>
        <dt>
          01. Font Type (공통)
          <span>Noto Sans CJK KR 기본 폰트로 사용하며 폰트 미설치시 <br />맑은고딕 사용.</span><br />
          <span>
            - Medium를 기본적으로 사용하며, 제목과 콘텐츠에서<br />강조가 필요한 경우에는 Bold를 권장한다. <br />
            - 본문과 제목 모두 행간을 기입한다.
          </span>
        </dt>
        <dd>
          <div class="typobox">
            <div class="tyop-item">
              <strong class="cl-def">페이지 타이틀(H1)</strong>
              <h1 class="typo-center h1">LG 유플러스 표준 PC 플랫폼 LG 유플러스 표준 PC 플랫폼</h1>
              <span>Noto Sans CJK KR / Medium & Bold / Font 40px / 자간 -20 / Line-Height 60px / 첨자 +8</span>
              <div class="code-editor">
                <textarea>
<!-- Element 사용시 h1 -->
<h1>페이지 타이틀(H1)<h1>

<!-- class 사용시 h1 -->
<p class="h1">페이지 타이틀(H1)<p>
                </textarea>
              </div>
            </div>
            <div class="tyop-item">
              <strong class="cl-def">프로세스 팝업 타이틀 (H2)</strong>
              <h2 class="typo-center h2">LG 유플러스 표준 PC 플랫폼 LG 유플러스 표준 PC 플랫폼</h2>
              <span>Noto Sans CJK KR / Medium & Bold / Font 30px / 자간 -20 / Line-Height 45px / 첨자 +8</span>
              <div class="code-editor">
                <textarea>
<!-- Element 사용시 h2 -->
<h2>페이지 타이틀(H2)<h2>
  
<!-- class 사용시 h2 -->
<p class="h2">페이지 타이틀(H2)<p>
                </textarea>
              </div>
            </div>
            <div class="tyop-item">
              <strong class="cl-def">그룹 타이틀 (H3)</strong>
              <h3 class="typo-center h3">LG 유플러스 표준 PC 플랫폼 LG 유플러스 표준 PC 플랫폼</h3>
              <span>Noto Sans CJK KR / Medium & Bold / Font 24px / 자간 -20 / Line-Height 36px / 첨자 +8</span>
              <div class="code-editor">
                <textarea>
<!-- Element 사용시 h3 -->
<h3>페이지 타이틀(H3)<h3>
  
<!-- class 사용시 h1 -->
<p class="h3">페이지 타이틀(H3)<p>
                </textarea>
              </div>
            </div>
            <div class="tyop-item">
              <strong class="cl-def">그룹 서브 타이틀 (H4)</strong>
              <h4 class="typo-center h4">LG 유플러스 표준 PC 플랫폼 LG 유플러스 표준 PC 플랫폼</h4>
              <span>Noto Sans CJK KR / Regular & Medium / Font 20px / 자간 -20 /Line-Height 30px / 첨자 +8</span>
              <div class="code-editor">
                <textarea>
<!-- Element 사용시 h4 -->
<h4>페이지 타이틀(H4)<h4>
  
<!-- class 사용시 h4 -->
<p class="h4">페이지 타이틀(H4)<p>
                </textarea>
              </div>
            </div>
            <div class="tyop-item">
              <strong class="cl-def">컨텐츠 타이틀 (H5)</strong>
              <h5 class="typo-center h5">LG 유플러스 표준 PC 플랫폼 LG 유플러스 표준 PC 플랫폼</h5>
              <span>Noto Sans CJK KR / Regular & Medium / Font 18px / 자간 -20 / Line-Height 27px / 첨자 +8</span>
              <div class="code-editor">
                <textarea>
<!-- Element 사용시 h5 -->
<h5>페이지 타이틀(H5)<h5>
  
<!-- class 사용시 h5 -->
<p class="h5">페이지 타이틀(H5)<p>
                </textarea>
              </div>
            </div>
            <div class="tyop-item">
              <strong class="cl-def">본문 기본</strong>
              <p class="typo-center font-m">LG 유플러스 표준 PC 플랫폼 LG 유플러스 표준 PC 플랫폼</p>
              <span>Noto Sans CJK KR / Regular & Medium / Font 16px / 자간 -20 / Line-Height 24px / 첨자 +4</span>
              <div class="code-editor">
                <textarea>
<!-- Element 사용시 시멘틱 마크업 구조에 맞게 사용 -->
<p>본문 기본<p>
  
<!-- class 사용시 font-m -->
<p class="font-m">본문 기본<p>

<!-- 변수 사용 시 해당 사이즈 부분에 적용 -->
$font-m
                </textarea>
              </div>
            </div>
            <div class="tyop-item">
              <strong class="cl-def">본문 소</strong>
              <p class="typo-center font-s">LG 유플러스 표준 PC 플랫폼 LG 유플러스 표준 PC 플랫폼</p>
              <span>Noto Sans CJK KR / Regular & Medium / Font 14px / 자간 -20 / Line-Height 21px / 첨자 +4</span>
              <div class="code-editor">
                <textarea>
<!-- Element 사용시 시멘틱 마크업 구조에 맞게 사용 -->
<!-- class 사용시 font-s -->
<p class="font-s">본문 소<p>

<!-- 변수 사용 시 해당 사이즈 부분에 적용 -->
$font-s
                </textarea>
              </div>
            </div>
            <div class="tyop-item">
              <strong class="cl-def">최소</strong>
              <p class="typo-center font-xs">LG 유플러스 표준 PC 플랫폼 LG 유플러스 표준 PC 플랫폼</p>
              <span>Noto Sans CJK KR / Regular & Medium / Font 12px / 자간 -20 / Line-Height 18px / 첨자 +4</span>
              <div class="code-editor">
                <textarea>
<!-- Element 사용시 시멘틱 마크업 구조에 맞게 사용 -->
<!-- class 사용시 font-xs -->
<p class="font-xs">최소<p>

<!-- 변수 사용 시 해당 사이즈 부분에 적용 -->
$font-xs
                </textarea>
              </div>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Font',
  layout: 'guide',
  data() {
    return {
      title: 'Font System',
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
