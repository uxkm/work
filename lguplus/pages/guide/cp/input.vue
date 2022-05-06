<template>
  <section role="contentinfo" class="uksection" aria-label="Input">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Input Field Type은 명시적인 방법 사용 label for 속성과 input, select, textarea id와 매칭.</p>
    <div class="code-editor">
      <textarea style="height: 1200px">
접근성 관련 변경 이력 (21.03.22)
1. input 필드의 텍스트 삭제 버튼 title 문구 추가 <button title="입력한 문자 삭제" class="c-btn-clear">
변경 전 : 
<button class="c-btn-clear">
변경 후 : 
<button title="입력한 문자 삭제" class="c-btn-clear">

[접근성 관련 오류정정] (21.03.23)
접근성 관련 상세 오류 문구 내용은 전체적인 부분을 기획부분과 협의 후 제공.
입력 서식 작성 시, 사용자의 실수로 오류가 발생할 경우 이를 정정할 수 있는 방법을 제공해야 합니다.
1. 입력 오류 시 입력 내용이 모두 사라지는 경우
- 입력 서식 작성 시 오류가 발생하여 입력 내용이 모두 사라지는 경우 오류이며,
- 작성된 내용이 삭제되지 않고 오류가 있는 부분만 수정할 수 있도록 제공해야 합니다.
2. 오류 내용 제공
- 오류가 발생하는 경우 사용자에게 오류가 발생한 원인을 알려 주어야 합니다.
3. 오류 발생 시점으로 초점 이동
- 오류가 발생한 입력 서식으로 초점이 이동해야 합니다.

[한국형 웹 콘텐츠 접근성 지침 2.1]
3.4.2. 오류 정정
입력 오류를 정정할 수 있는 방법을 제공해야 한다.
22-1. 입력 오류 발생 시, 오류 원인 및 내용을 적절한 설명 텍스트로 알려주지 않거나 적절하지 않는 경우
22-2. 입력 오류 발생 시, 정정할 수 있는 수단을 제공하지 않은 경우
22-3. 오류 정보 확인 시, 해당 입력 서식으로 초점이 이동하지 않는 경우
22-4. 입력 오류 발생 시 입력 내용이 모두 사라지는 경우

예시) 오류 발생시 오류내용 + 정정할 수 있는 수단 제공
필수 입력항목인 경우 <p class="text-msg" tabindex="0">이름을 입력하지 않으셨습니다. 이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동</p>
- input field 요소의 속성 aria-describedby="오류정정id" 오류정정 문구의 id와 매칭 시켜서 제공함.
예) <input type="text" aria-describedby="errorText-1-1-1" /> <p id="errorText-1-1-1">오류정정 문구</p>

ARIA-describedby란,
ARIA-describedby는 모든 HTML요소에 사용 가능하며, 
ARIA-labelledby보다 더 상세한 설명이 제공되어야 할 때 사용할 수 있습니다. 
아래의 간단한 예를 통해 ARIA-describedby의 실재 적용사례를 살펴 보도록 하겠습니다. 
비밀번호 예시)
<label for="cfrmPassword-1-1">비밀번호</label>
<input id="cfrmPassword-1-1" type="text" name="" placeholder="비밀번호 입력" title="비밀번호를 입력해주세요." class="c-inp" aria-describedby="textMsg-1-1" />
<p class="text-msg" tabindex="0" id="textMsg-1-1">8-16자리의 비밀번호를 입력하세요. <span class="is-blind">영문, 숫자가 하나 이상 포함되어야하며, 영문 중 하나 이상은 반듯이 대문자여야 합니다.</span></p>

오류정정 변경 전 예시 : 
<label class="c-label" for="cfrmInp-2-2">
  이름
  <span class="is-need"><i class="is-blind">필수항목</i></span>
</label>
<div class="c-inpform is-err">
  <input id="cfrmInp-2-2" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" />
  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
  <p class="text-msg" tabindex="0">오류문구 출력</p>
</div>

오류정정 변경 후 예시 :
<label class="c-label" for="cfrmInp-2-2">
  이름
  <span class="is-need"><i class="is-blind">필수항목</i></span>
</label>
<div class="c-inpform is-err">
  <input id="cfrmInp-2-2" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="textMsg-1-1-1" />
  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
  <p class="text-msg" tabindex="0" id="textMsg-1-1-1">이름을 입력하지 않으셨습니다. <span class="is-blind">이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동</span></p>
</div>

성공문구 변경 전 예시 : 
<label class="c-label" for="cfrmInp-2-2">
  이름
  <span class="is-need"><i class="is-blind">필수항목</i></span>
</label>
<div class="c-inpform is-err">
  <input id="cfrmInp-2-2" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" />
  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
  <p class="text-msg" tabindex="0">사용가능 이름입니다.</p>
</div>

성공문구 변경 후 예시 :
<label class="c-label" for="cfrmInp-2-2">
  이름
  <span class="is-need"><i class="is-blind">필수항목</i></span>
</label>
<div class="c-inpform is-err">
  <input id="cfrmInp-2-2" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="textMsg-1-1-1" />
  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
  <p class="text-msg" tabindex="0" id="textMsg-1-1-1">정상적으로 입력하셨습니다. <span class="is-blind">사용가능한 이름입니다.</spa></p>
</div>
- 디자인부분과 문구내용에서 UI부분이 틀어진다면 UI상으로 대표문구만 보이게 하고 나머지는 접근성에 맞추어 숨김처리함. 
      </textarea>
    </div>
    <dl>
      <dt>1. Input Filed class name 규칙</dt>
      <dd>
        <ul class="c-bullet-type-cirlce">
          <li>접근성 요소 숨김처리(공통) : is-blind / BV용 class = sr-only</li>
          <li>그룹화 : c-inpfield</li>
          <li>label : c-label</li>
          <li>input그룹 : c-inpform</li>
          <li>input : c-inp</li>
          <li>clear 버튼 : c-btn-clear</li>
          <li>input에 텍스트 입력시 clear 버튼 나옴 : c-inpform 요소에 'is-clear' 추가</li>
          <li>입력오류 : c-inpform 요소에 class 'is-err' 추가</li>
          <li>입력성공 : c-inpform 요소에 class 'is-sus' 추가</li>
          <li>입력오류/입력성공 텍스트 : text-msg</li>
          <li>c-inpform이 여러개 일 경우 c-inpform-group 으로 그룹핑</li>
          <li>input field가 여러개 일 경우(연락처,이메일,출국일 등) label for 속성과 id 연결은 input field 첫번째 요소에만 매칭</li>
        </ul>
      </dd>
    </dl>

    <div class="code-editor">
      <textarea style="height: 500px">
================================================================================
c-inpfield class로 감싸져 있고 자식요소로 label이 있는 경우 label class가 is-blind = sr-only = label이 없는 경우 c-inpfield 요소에 class blind-label 추가 
c-inpform 요소는 width 100%로 변경됨.
<div class="c-inpfield"> 
  <label></label>
  <div class="c-inpform"></div>
</div>
table 구조에서 c-inpfield가 불필요한 경우 c-inpform 요소만 사용
<div class="c-inpform"></div> 
================================================================================
input field, c-inpform, c-inpform-group 형태가 "이메일" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-email' 추가

input field, c-inpform, c-inpform-group 형태가 "연락처" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-telnumber' 추가

input field, c-inpform, c-inpform-group 형태가 "출국 예정일 또는 년/월/일" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-date' 추가

input field, c-inpform, c-inpform-group 형태가 "주소" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-address' 추가

input field, c-inpform, c-inpform-group 형태가 "SMS 인증" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-sms' 추가

input field, c-inpform, c-inpform-group 형태가 "검색 기본" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-search' 추가

필수항목* 표시 : <span class="is-need"><i class="is-blind">필수항목</i></span>
================================================================================
      </textarea>
    </div>
    <hr />
    <p class="h4">Input Field(기본필드) - <small>인풋필드는 사용자가 문자와 숫자를 직접 입력할 수 있는 컨트롤러이다.</small></p>
    <div class="uktable ukfixed">
      <table>
        <caption>
          Input Field - 인풋필드는 사용자가 문자와 숫자를 직접 입력할 수 있는 컨트롤러이다.
        </caption>
        <colgroup>
          <col style="width: 100px" />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">구분</th>
            <th scope="col">기본 필드</th>
            <th scope="col">오류 필드</th>
            <th scope="col">성공 필드</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">입력 전</th>
            <td class="vtop">
              <div class="c-inpfield">
                <label class="c-label" for="cfrmInp-1-1">이름</label>
                <div class="c-inpform">
                  <input id="cfrmInp-1-1" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="textMsg-1-1-1" />
                  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                  <!-- <p class="text-msg" tabindex="0" id="textMsg-1-1-1">이름을 입력하지 않으셨습니다. <span class="is-blind">이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동</span></p> -->
                  <!-- <p class="text-msg" tabindex="0" id="textMsg-1-1-1">정상적으로 입력하셨습니다. <span class="is-blind">사용가능한 이름입니다.</span></p> -->
                </div>
              </div>
            </td>
            <td class="vtop"></td>
            <td class="vtop"></td>
          </tr>
          <tr>
            <th scope="row">입력 중</th>
            <td class="vtop">
              <div class="c-inpfield">
                <label class="c-label" for="cfrmInp-1-2">이름</label>
                <div class="c-inpform is-clear">
                  <input id="cfrmInp-1-2" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="textMsg-1-1-2" />
                  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                  <!-- <p class="text-msg" tabindex="0" id="textMsg-1-1-2">이름을 입력하지 않으셨습니다. <span class="is-blind">이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동</span></p> -->
                  <!-- <p class="text-msg" tabindex="0" id="textMsg-1-1-2">정상적으로 입력하셨습니다. <span class="is-blind">사용가능한 이름입니다.</span></p> -->
                </div>
              </div>
            </td>
            <td class="vtop">
              <div class="c-inpfield">
                <label class="c-label" for="cfrmInp-1-3">이름</label>
                <div class="c-inpform is-err is-clear">
                  <input id="cfrmInp-1-3" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="textMsg-1-1-3" />
                  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                  <p class="text-msg" tabindex="0" id="textMsg-1-1-3">이름을 입력하지 않으셨습니다. <span class="is-blind">이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동</span></p>
                  <!-- <p class="text-msg" tabindex="0" id="textMsg-1-1-3">정상적으로 입력하셨습니다. <span class="is-blind">사용가능한 이름입니다.</span></p> -->
                </div>
              </div>
            </td>
            <td class="vtop"></td>
          </tr>
          <tr>
            <th scope="row">입력 후</th>
            <td class="vtop">
              <div class="c-inpfield">
                <label class="c-label" for="cfrmInp-1-4">이름</label>
                <div class="c-inpform">
                  <input id="cfrmInp-1-4" type="text" name="" value="이예지" class="c-inp" aria-describedby="textMsg-1-1-4" />
                  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                  <!-- <p class="text-msg" tabindex="0" id="textMsg-1-1-4">이름을 입력하지 않으셨습니다. <span class="is-blind">이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동</span></p> -->
                  <!-- <p class="text-msg" tabindex="0" id="textMsg-1-1-4">정상적으로 입력하셨습니다. <span class="is-blind">사용가능한 이름입니다.</span></p> -->
                </div>
              </div>
            </td>
            <td class="vtop">
              <div class="c-inpfield">
                <label class="c-label" for="cfrmInp-1-5">이름</label>
                <div class="c-inpform is-err">
                  <input id="cfrmInp-1-5" type="text" name="" value="이예지" class="c-inp" aria-describedby="textMsg-1-1-5" />
                  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                  <p class="text-msg" tabindex="0" id="textMsg-1-1-5">이름을 입력하지 않으셨습니다. <span class="is-blind">이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동</span></p>
                  <!-- <p class="text-msg" tabindex="0" id="textMsg-1-1-5">정상적으로 입력하셨습니다. <span class="is-blind">사용가능한 이름입니다.</span></p> -->
                </div>
              </div>
            </td>
            <td class="vtop">
              <div class="c-inpfield">
                <label class="c-label" for="cfrmInp-1-6">아이디</label>
                <div class="c-inpform is-sus">
                  <input id="cfrmInp-1-6" type="text" name="" value="yeji1234" class="c-inp" aria-describedby="textMsg-1-1-6" />
                  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                  <!-- <p class="text-msg" tabindex="0" id="textMsg-1-1-6">이름을 입력하지 않으셨습니다. <span class="is-blind">이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동</span></p> -->
                  <p class="text-msg" tabindex="0" id="textMsg-1-1-6">정상적으로 입력하셨습니다. <span class="is-blind">사용가능한 이름입니다.</span></p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Read Only</th>
            <td class="vtop">
              <div class="c-inpfield">
                <label class="c-label" for="cfrmInp-1-7">이름</label>
                <div class="c-inpform is-err">
                  <input id="cfrmInp-1-7" type="text" name="" value="이예지" readonly class="c-inp" />
                  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                </div>
              </div>
            </td>
            <td class="vtop"></td>
            <td class="vtop"></td>
          </tr>
        </tbody>
      </table>
      <div class="code-editor">
        <textarea style="height: 250px">
화면낭독기(센스리더) 음성출력 예시
[입력하기 전 음성 출력 예시]
"이름을 입력해주세요 편집창 -> 입력한 문자 삭제 버튼"
[입력 후 음성 출력 예시 - 잘못 입력된 경우]
예) "오류 정정 문구 내용 -> 입력된 문구 내용 편집창" 아래와 같이 읽어들이게 됨.
예) 이름을 입력하지 않으셨습니다. 이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동 이예지 편집창

이름 입력 기본 필드
<div class="c-inpfield">
  <label class="c-label" for="cfrmInp-1-1">이름</label>
  <div class="c-inpform">
    <input id="cfrmInp-1-1" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="textMsg-1-1-1" />
    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
    <!-- <p class="text-msg" tabindex="0" id="textMsg-1-1-1">이름을 입력하지 않으셨습니다. <span class="is-blind">이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동</span></p> -->
    <!-- <p class="text-msg" tabindex="0" id="textMsg-1-1-1">정상적으로 입력하셨습니다. <span class="is-blind">사용가능한 이름입니다.</span></p> -->
  </div>
</div>
        </textarea>
      </div>
    </div>
    <hr />
    <p class="h4">Input Field(종류별) - <small>인풋필드는 사용자가 문자와 숫자를 직접 입력할 수 있는 컨트롤러이다. (필수항목 *표시)</small></p>
    <div class="c-inpfield">
      <label class="c-label" for="cfrmInp-2-1">이름</label>
      <div class="c-inpform is-err">
        <input id="cfrmInp-2-1" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="textMsg-1-2-1" />
        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        <p class="text-msg" tabindex="0" id="textMsg-1-2-1">이름을 입력하지 않으셨습니다. 이름을 입력해주세요. 예시)홍길동</p>
        <!-- <p class="text-msg" tabindex="0" id="textMsg-1-2-1">정상적으로 입력하셨습니다. 사용가능한 이름입니다.</p> -->
      </div>
    </div>
    <div class="c-inpfield">
      <label class="c-label" for="cfrmInp-2-2">
        이름
        <span class="is-need"><i class="is-blind">필수항목</i></span>
      </label>
      <div class="c-inpform is-err">
        <input id="cfrmInp-2-2" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="textMsg-1-2-2" />
        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        <p class="text-msg" tabindex="0" id="textMsg-1-2-2">이름을 입력하지 않으셨습니다. 이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동</p>
        <!-- <p class="text-msg" tabindex="0" id="textMsg-1-2-2">정상적으로 입력하셨습니다. 사용가능한 이름입니다.</p> -->
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 500px">
<div class="c-inpfield">
  <label class="c-label" for="cfrmInp-2-1">이름</label>
  <div class="c-inpform is-err">
    <input id="cfrmInp-2-1" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="textMsg-1-2-1" />
    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
    <p class="text-msg" tabindex="0" id="textMsg-1-2-1">이름을 입력하지 않으셨습니다. 이름을 입력해주세요. 예시)홍길동</p>
    <!-- <p class="text-msg" tabindex="0" id="textMsg-1-2-1">정상적으로 입력하셨습니다. 사용가능한 이름입니다.</p> -->
  </div>
</div>
<div class="c-inpfield">
  <label class="c-label" for="cfrmInp-2-2">
    이름
    <span class="is-need"><i class="is-blind">필수항목</i></span>
  </label>
  <div class="c-inpform is-err">
    <input id="cfrmInp-2-2" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="textMsg-1-2-2" />
    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
    <p class="text-msg" tabindex="0" id="textMsg-1-2-2">이름을 입력하지 않으셨습니다. 이름은 필수항목입니다. 이름을 입력해주세요. 예시)홍길동</p>
    <!-- <p class="text-msg" tabindex="0" id="textMsg-1-2-2">정상적으로 입력하셨습니다. 사용가능한 이름입니다.</p> -->
  </div>
</div>
      </textarea>
    </div>
    <br />
    <hr />
    <br />
    <p class="h4">Input Field(날짜형식)</p>
    <div class="c-inpfield column-date">
      <label class="c-label" for="cfrmInp-2-3">
        출국예정일
        <span class="is-need"><i class="is-blind">필수항목</i></span>
      </label>
      <div class="c-inpform-group is-err">
        <div class="c-inpform is-err">
          <span class="is-blind">출국예정 년도</span>
          <input id="cfrmInp-2-3" type="text" name="" placeholder="YYYY" title="출국예정 년도 네자 입력" class="c-inp" aria-describedby="textMsg-1-3-1" />
          <span class="text-date">년</span>
          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
          <p class="text-msg" tabindex="0" id="textMsg-1-3-1">출국예정 년도 입력이 잘못되었습니다. <span class="is-blind">출국예정 년도를 네자리로 입력해주세요. 예시)2021</span></p>
          <!-- <p class="text-msg" tabindex="0" id="textMsg-1-3-1">정상적으로 입력하셨습니다.</p> -->
        </div>
        <div class="c-inpform is-err">
          <span class="is-blind">출국예정 월</span>
          <input type="text" name="" placeholder="MM" title="출국예정 월 두자 입력" class="c-inp" aria-describedby="textMsg-1-3-2" />
          <span class="text-date">월</span>
          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
          <p class="text-msg" tabindex="0" id="textMsg-1-3-2">출국예정 월 입력이 잘못되었습니다. <span class="is-blind">출국예정 월을 두자리로 입력해주세요. 예시)03</span></p>
          <!-- <p class="text-msg" tabindex="0" id="textMsg-1-3-2">정상적으로 입력하셨습니다.</p> -->
        </div>
        <div class="c-inpform is-err">
          <span class="is-blind">출국예정 일</span>
          <input type="text" name="" placeholder="DD" title="출국예정 일 두자 입력" class="c-inp" aria-describedby="textMsg-1-3-3" />
          <span class="text-date">일</span>
          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
          <p class="text-msg" tabindex="0" id="textMsg-1-3-3">출국예정 일자 입력이 잘못되었습니다. <span class="is-blind">출국예정 일자를 두자리로 입력해주세요. 예시)01</span></p>
          <!-- <p class="text-msg" tabindex="0" id="textMsg-1-3-3">정상적으로 입력하셨습니다.</p> -->
        </div>
        <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
      </div>
    </div>
    <div class="c-inpfield column-date">
      <label class="c-label is-blind" for="cfrmInp-2-3-1">
        출국예정일
        <span class="is-need"><i class="is-blind">필수항목</i></span>
      </label>
      <div class="c-inpform-group is-err">
        <div class="c-inpform is-err">
          <span class="is-blind">출국예정 년도</span>
          <input id="cfrmInp-2-3-1" type="text" name="" placeholder="YYYY" title="출국예정 년도 네자 입력" class="c-inp" aria-describedby="textMsg-1-4-1" />
          <span class="text-date">년</span>
          <p class="text-msg" tabindex="0" id="textMsg-1-4-1">출국예정 년도 입력이 잘못되었습니다. <span class="is-blind">출국예정 년도를 네자리로 입력해주세요. 예시)2021</span></p>
          <!-- <p class="text-msg" tabindex="0" id="textMsg-1-4-1">정상적으로 입력하셨습니다.</p> -->
        </div>
        <div class="c-inpform is-err">
          <span class="is-blind">출국예정 월</span>
          <input type="text" name="" placeholder="MM" title="출국예정 월 두자 입력" class="c-inp" aria-describedby="textMsg-1-4-2" />
          <span class="text-date">월</span>
          <p class="text-msg" tabindex="0" id="textMsg-1-4-2">출국예정 월 입력이 잘못되었습니다. <span class="is-blind">출국예정 월을 두자리로 입력해주세요. 예시)03</span></p>
          <!-- <p class="text-msg" tabindex="0" id="textMsg-1-4-2">정상적으로 입력하셨습니다.</p> -->
        </div>
        <div class="c-inpform is-err">
          <span class="is-blind">출국예정 일</span>
          <input type="text" name="" placeholder="DD" title="출국예정 일 두자 입력" class="c-inp" aria-describedby="textMsg-1-4-3" />
          <span class="text-date">일</span>
          <p class="text-msg" tabindex="0" id="textMsg-1-4-3">출국예정 일자 입력이 잘못되었습니다. <span class="is-blind">출국예정 일자를 두자리로 입력해주세요. 예시)01</span></p>
          <!-- <p class="text-msg" tabindex="0" id="textMsg-1-4-3">정상적으로 입력하셨습니다.</p> -->
        </div>
        <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
      </div>
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 600px">
================================================================================
input field, c-inpform, c-inpform-group 형태가 "출국 예정일 또는 년/월/일" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-date' 추가
================================================================================
<div class="c-inpfield column-date">
  <label class="c-label is-blind" for="cfrmInp-2-3-1">
    출국예정일
    <span class="is-need"><i class="is-blind">필수항목</i></span>
  </label>
  <div class="c-inpform-group is-err">
    <div class="c-inpform is-err">
      <span class="is-blind">출국예정 년도</span>
      <input id="cfrmInp-2-3-1" type="text" name="" placeholder="YYYY" title="출국예정 년도 네자 입력" class="c-inp" aria-describedby="textMsg-1-4-1" />
      <span class="text-date">년</span>
      <p class="text-msg" tabindex="0" id="textMsg-1-4-1">출국예정 년도 입력이 잘못되었습니다. <span class="is-blind">출국예정 년도를 네자리로 입력해주세요. 예시)2021</span></p>
      <!-- <p class="text-msg" tabindex="0" id="textMsg-1-4-1">정상적으로 입력하셨습니다.</p> -->
    </div>
    <div class="c-inpform is-err">
      <span class="is-blind">출국예정 월</span>
      <input type="text" name="" placeholder="MM" title="출국예정 월 두자 입력" class="c-inp" aria-describedby="textMsg-1-4-2" />
      <span class="text-date">월</span>
      <p class="text-msg" tabindex="0" id="textMsg-1-4-2">출국예정 월 입력이 잘못되었습니다. <span class="is-blind">출국예정 월을 두자리로 입력해주세요. 예시)03</span></p>
      <!-- <p class="text-msg" tabindex="0" id="textMsg-1-4-2">정상적으로 입력하셨습니다.</p> -->
    </div>
    <div class="c-inpform is-err">
      <span class="is-blind">출국예정 일</span>
      <input type="text" name="" placeholder="DD" title="출국예정 일 두자 입력" class="c-inp" aria-describedby="textMsg-1-4-3" />
      <span class="text-date">일</span>
      <p class="text-msg" tabindex="0" id="textMsg-1-4-3">출국예정 일자 입력이 잘못되었습니다. <span class="is-blind">출국예정 일자를 두자리로 입력해주세요. 예시)01</span></p>
      <!-- <p class="text-msg" tabindex="0" id="textMsg-1-4-3">정상적으로 입력하셨습니다.</p> -->
    </div>
    <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
  </div>
</div>
      </textarea>
    </div>
    <br />
    <hr />
    <br />
    <p class="h4">Input Field(연락처)</p>
    <div class="c-inpfield column-telnumber">
      <label class="c-label" for="cfrmSelect-2-4">연락처</label>
      <div class="c-inpform-group is-err">
        <div class="c-selform is-err">
          <span class="is-blind">통신사 번호</span>
          <select id="cfrmSelect-2-4" name="" class="c-select" title="연락처 통신사 번호 선택" aria-describedby="textMsg-1-5-1">
            <option value="" selected>010</option>
            <option>070</option>
          </select>
          <p class="text-msg" tabindex="0" id="textMsg-1-5-1"><span class="is-blind">통신사 번호를 </span>선택하지 않으셨습니다. <span class="is-blind">통신사 번호를 선택해주세요. 예시)010</span></p>
          <!-- <p class="text-msg" tabindex="0" id="textMsg-1-5-1">정상적으로 선택하셨습니다.</p> -->
        </div>
        <div class="c-inpform is-err">
          <span class="is-blind">연락처 번호</span>
          <input type="text" name="" placeholder="" title="연락처 나머지 8자리 입력" class="c-inp" aria-describedby="textMsg-1-5-2" />
          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
          <p class="text-msg" tabindex="0" id="textMsg-1-5-2">연락처 번호 입력이 잘못 되었습니다. 연락처 번호를 '-'없이 숫자로만 8자리를 입력해주세요. 예시)88881111</p>
          <!-- <p class="text-msg" tabindex="0" id="textMsg-1-5-2">정상적으로 입력하셨습니다.</p> -->
        </div>
        <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
      </div>
    </div>
    <div class="c-inpform-group column-telnumber is-err">
      <div class="c-selform is-err">
        <span class="is-blind">통신사 번호</span>
        <select id="cfrmSelect-2-4-1" name="" class="c-select" title="연락처 통신사 번호 선택" aria-describedby="textMsg-1-6-1">
          <option value="" selected>010</option>
          <option>070</option>
        </select>
        <p class="text-msg" tabindex="0" id="textMsg-1-6-1"><span class="is-blind">통신사 번호를 </span>선택하지 않으셨습니다. <span class="is-blind">통신사 번호를 선택해주세요. 예시)010</span></p>
        <!-- <p class="text-msg" tabindex="0" id="textMsg-1-6-1">정상적으로 선택하셨습니다.</p> -->
      </div>
      <div class="c-inpform is-err">
        <span class="is-blind">연락처 번호</span>
        <input type="text" name="" placeholder="" title="연락처 나머지 8자리 입력" class="c-inp" aria-describedby="textMsg-1-6-2" />
        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        <p class="text-msg" tabindex="0" id="textMsg-1-6-2">연락처 번호 입력이 잘못 되었습니다. 연락처 번호를 '-'없이 숫자로만 8자리를 입력해주세요. 예시)88881111</p>
        <!-- <p class="text-msg" tabindex="0" id="textMsg-1-6-2">정상적으로 입력하셨습니다.</p> -->
      </div>
      <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 460px">
================================================================================
input field, c-inpform, c-inpform-group 형태가 "연락처" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-telnumber' 추가
================================================================================
<div class="c-inpfield column-telnumber">
  <label class="c-label" for="cfrmSelect-2-4">연락처</label>
  <div class="c-inpform-group is-err">
    <div class="c-selform is-err">
      <span class="is-blind">통신사 번호</span>
      <select id="cfrmSelect-2-4" name="" class="c-select" title="연락처 통신사 번호 선택" aria-describedby="textMsg-1-5-1">
        <option value="" selected>010</option>
        <option>070</option>
      </select>
      <p class="text-msg" tabindex="0" id="textMsg-1-5-1"><span class="is-blind">통신사 번호를 </span>선택하지 않으셨습니다. <span class="is-blind">통신사 번호를 선택해주세요. 예시)010</span></p>
      <!-- <p class="text-msg" tabindex="0" id="textMsg-1-5-1">정상적으로 선택하셨습니다.</p> -->
    </div>
    <div class="c-inpform is-err">
      <span class="is-blind">연락처 번호</span>
      <input type="text" name="" placeholder="" title="연락처 나머지 8자리 입력" class="c-inp" aria-describedby="textMsg-1-5-2" />
      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
      <p class="text-msg" tabindex="0" id="textMsg-1-5-2">연락처 번호 입력이 잘못 되었습니다. 연락처 번호를 '-'없이 숫자로만 8자리를 입력해주세요. 예시)88881111</p>
      <!-- <p class="text-msg" tabindex="0" id="textMsg-1-5-2">정상적으로 입력하셨습니다.</p> -->
    </div>
    <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
  </div>
</div>
      </textarea>
    </div>
    <br />
    <hr />
    <br />
    <p class="h4">Input Field(이메일)</p>
    <div class="c-inpfield column-email">
      <label class="c-label" for="cfrmInp-2-5">이메일</label>
      <div class="c-inpform-group is-err">
        <div class="c-inpform is-err">
          <span class="is-blind">이메일 아이디</span>
          <input id="cfrmInp-2-5" type="text" name="" placeholder="이메일 아이디" title="이메일 아이디 입력" class="c-inp" aria-describedby="textMsg-1-7-1" />
          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
          <p class="text-msg" tabindex="0" id="textMsg-1-7-1">아이디를 입력하지 않으셨습니다. <span class="is-blind">아이디를 입력해주세요.</span> 예시)aabbcc</p>
          <!-- <p class="text-msg" tabindex="0" id="textMsg-1-7-1">정상적으로 입력하셨습니다.</p> -->
        </div>
        <div class="text-dot">@</div>
        <div class="c-inpform is-err">
          <span class="is-blind">이메일 주소</span>
          <input type="text" name="" placeholder="이메일 주소" title="이메일 주소 입력" class="c-inp" aria-describedby="textMsg-1-7-2" />
          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
          <p class="text-msg" tabindex="0" id="textMsg-1-7-2">이메일 주소를 입력하지 않으셨습니다. <span class="is-blind">이메일 주소를 입력해주세요.</span> 예시)lguplus.co.kr</p>
          <!-- <p class="text-msg" tabindex="0" id="textMsg-1-7-2">정상적으로 입력하셨습니다.</p> -->
        </div>
        <div class="c-selform is-err">
          <span class="is-blind">이메일 주소 선택</span>
          <select name="" class="c-select" title="이메일 주소 직접 선택" aria-describedby="textMsg-1-7-3">
            <option value="" selected>직접입력</option>
            <option>naver.com</option>
          </select>
          <p class="text-msg" tabindex="0" id="textMsg-1-7-3">이메일 주소를 선택하지 않으셨습니다. <span class="is-blind">이메일 주소를 선택해주세요.</span> 예시)lguplus.co.kr</p>
          <!-- <p class="text-msg" tabindex="0" id="textMsg-1-7-3">정상적으로 선택하셨습니다.</p> -->
        </div>
        <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
      </div>
    </div>
    <div class="c-inpform-group column-email is-err">
      <div class="c-inpform is-err">
        <span class="is-blind">이메일 아이디</span>
        <input id="cfrmInp-2-5-1" type="text" name="" placeholder="이메일 아이디" title="이메일 아이디 입력" class="c-inp" aria-describedby="textMsg-1-8-1" />
        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        <p class="text-msg" tabindex="0" id="textMsg-1-8-1">아이디를 입력하지 않으셨습니다. <span class="is-blind">아이디를 입력해주세요.</span> 예시)aabbcc</p>
        <!-- <p class="text-msg" tabindex="0" id="textMsg-1-8-1">정상적으로 입력하셨습니다.</p> -->
      </div>
      <div class="text-dot">@</div>
      <div class="c-inpform is-err">
        <span class="is-blind">이메일 주소</span>
        <input type="text" name="" placeholder="이메일 주소" title="이메일 주소 입력" class="c-inp" aria-describedby="textMsg-1-8-2" />
        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        <p class="text-msg" tabindex="0" id="textMsg-1-8-2">이메일 주소를 입력하지 않으셨습니다. <span class="is-blind">이메일 주소를 입력해주세요.</span> 예시)lguplus.co.kr</p>
        <!-- <p class="text-msg" tabindex="0" id="textMsg-1-8-2">정상적으로 입력하셨습니다.</p> -->
      </div>
      <div class="c-selform is-err">
        <span class="is-blind">이메일 주소 선택</span>
        <select name="" class="c-select" title="이메일 주소 직접 선택" aria-describedby="textMsg-1-8-3">
          <option value="" selected>직접입력</option>
          <option>naver.com</option>
        </select>
        <p class="text-msg" tabindex="0" id="textMsg-1-8-3">이메일 주소를 선택하지 않으셨습니다. <span class="is-blind">이메일 주소를 선택해주세요.</span> 예시)lguplus.co.kr</p>
        <!-- <p class="text-msg" tabindex="0" id="textMsg-1-8-3">정상적으로 선택하셨습니다.</p> -->
      </div>
      <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
    </div>
    <div class="code-editor">
      <textarea style="height: 600px">
================================================================================
input field, c-inpform, c-inpform-group 형태가 "이메일" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-email' 추가
================================================================================
<div class="c-inpfield column-email">
  <label class="c-label" for="cfrmInp-2-5">이메일</label>
  <div class="c-inpform-group is-err">
    <div class="c-inpform is-err">
      <span class="is-blind">이메일 아이디</span>
      <input id="cfrmInp-2-5" type="text" name="" placeholder="이메일 아이디" title="이메일 아이디 입력" class="c-inp" aria-describedby="textMsg-1-7-1" />
      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
      <p class="text-msg" tabindex="0" id="textMsg-1-7-1">아이디를 입력하지 않으셨습니다. <span class="is-blind">아이디를 입력해주세요.</span> 예시)aabbcc</p>
      <!-- <p class="text-msg" tabindex="0" id="textMsg-1-7-1">정상적으로 입력하셨습니다.</p> -->
    </div>
    <div class="text-dot">@</div>
    <div class="c-inpform is-err">
      <span class="is-blind">이메일 주소</span>
      <input type="text" name="" placeholder="이메일 주소" title="이메일 주소 입력" class="c-inp" aria-describedby="textMsg-1-7-2" />
      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
      <p class="text-msg" tabindex="0" id="textMsg-1-7-2">이메일 주소를 입력하지 않으셨습니다. <span class="is-blind">이메일 주소를 입력해주세요.</span> 예시)lguplus.co.kr</p>
      <!-- <p class="text-msg" tabindex="0" id="textMsg-1-7-2">정상적으로 입력하셨습니다.</p> -->
    </div>
    <div class="c-selform is-err">
      <span class="is-blind">이메일 주소 선택</span>
      <select name="" class="c-select" title="이메일 주소 직접 선택" aria-describedby="textMsg-1-7-3">
        <option value="" selected>직접입력</option>
        <option>naver.com</option>
      </select>
      <p class="text-msg" tabindex="0" id="textMsg-1-7-3">이메일 주소를 선택하지 않으셨습니다. <span class="is-blind">이메일 주소를 선택해주세요.</span> 예시)lguplus.co.kr</p>
      <!-- <p class="text-msg" tabindex="0" id="textMsg-1-7-3">정상적으로 선택하셨습니다.</p> -->
    </div>
    <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
  </div>
</div>
      </textarea>
    </div>
    <br />
    <hr />
    <br />
    <p class="h4">Input Field(텍스트 필드)</p>
    <br />
    <div class="c-textfield is-err">
      <label class="c-label dir-column" for="cfrmText-2-1">
        내용
        <span class="text-sub">내용은 10,000자까지<br />입력 가능</span>
      </label>
      <div class="c-textareaform is-err">
        <textarea id="cfrmText-2-1" name="" cols="80" rows="5" class="c-textarea" placeholder="내용 입력" title="내용 입력" aria-describedby="textMsg-1-9-1"></textarea>
        <p class="text-msg" tabindex="0" id="textMsg-1-9-1">내용을 입력하지 않으셨습니다. 내용을 입력해주세요. 내용은 10,000자까지 입력 가능합니다.</p>
        <!-- <p class="text-msg" tabindex="0" id="textMsg-1-9-1">정상적으로 선택하셨습니다.</p> -->
      </div>
      <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
    </div>
    <br />
    <div class="c-textfield is-err">
      <label class="c-label dir-column is-blind" for="cfrmText-2-1-1">
        내용
        <span class="text-sub">내용은 10,000자까지<br />입력 가능</span>
      </label>
      <div class="c-textareaform is-err">
        <textarea id="cfrmText-2-1-1" name="" cols="80" rows="5" class="c-textarea" placeholder="내용 입력" title="내용 입력" aria-describedby="textMsg-1-9-2"></textarea>
        <p class="text-msg" tabindex="0" id="textMsg-1-9-2">내용을 입력하지 않으셨습니다. 내용을 입력해주세요. 내용은 10,000자까지 입력 가능합니다.</p>
        <!-- <p class="text-msg" tabindex="0" id="textMsg-1-9-2">정상적으로 선택하셨습니다.</p> -->
      </div>
      <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
    </div>
    <br />
    <div class="code-editor">
      <textarea style="height: 220px">
<div class="c-textfield is-err">
  <label class="c-label dir-column" for="cfrmText-2-1">
    내용
    <span class="text-sub">내용은 10,000자까지<br />입력 가능</span>
  </label>
  <div class="c-textareaform is-err">
    &lt;textarea id="cfrmText-2-1" name="" cols="80" rows="5" class="c-textarea" placeholder="내용 입력" title="내용 입력" aria-describedby="textMsg-1-9-1"&gt;&lt;/textarea&gt;
    <p class="text-msg" tabindex="0" id="textMsg-1-9-1">내용을 입력하지 않으셨습니다. 내용을 입력해주세요. 내용은 10,000자까지 입력 가능합니다.</p>
    <!-- <p class="text-msg" tabindex="0" id="textMsg-1-9-1">정상적으로 선택하셨습니다.</p> -->
  </div>
  <!-- <p class="text-msg" tabindex="0">오류문구 출력</p> -->
</div>
      </textarea>
    </div>
    <br />
    <hr />
    <br />
    <p class="h4">Input Field(주소)</p>
    <div class="c-inpfield">
      <label class="c-label" for="cfrmInp-2-6-1">아파트명</label>
      <div class="c-inpform column-address is-clear">
        <input id="cfrmInp-2-6-1" type="text" name="" placeholder="10자 이내 입력" title="아파트명을 입력해주세요." class="c-inp" />
        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
      </div>
    </div>
    <div class="c-inpform column-address is-clear">
      <label class="c-label is-blind" for="cfrmInp-2-6-1-1">아파트명</label>
      <input id="cfrmInp-2-6-1-1" type="text" name="" placeholder="10자 이내 입력" title="아파트명을 입력해주세요." class="c-inp" />
      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
      <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
    </div>
    <div class="c-inpform-group column-address-type2">
      <div class="c-selform">
        <label class="c-label is-blind" for="cfrmAddr-3-1">
          상세주소
          <span class="is-need"><i class="is-blind">필수항목</i></span>
        </label>
        <select id="cfrmAddr-3-1" name="" class="c-select" title="건물명 직접 선택" readonly>
          <option value="" selected>경암빌딩</option>
        </select>
        <!-- <p class="text-msg">건물명을 선택해주세요.</p> -->
      </div>
      <div class="c-inpform">
        <label for="cfrmAddr-3-1-1" class="c-label is-blind">건물명 입력</label>
        <input id="cfrmAddr-3-1-1" type="text" name="" placeholder="건물명 입력" title="건물명을 입력해주세요" class="c-inp" />
        <!-- <p class="text-msg">건물명을 입력해주세요.</p> -->
      </div>
      <div class="c-inpform">
        <label for="cfrmAddr-3-1-2" class="c-label c-abs-r">동</label>
        <input id="cfrmAddr-3-1-2" type="text" name="" placeholder="입력" title="동을 입력해주세요" class="c-inp" />
        <!-- <p class="text-msg">동을 입력해주세요.</p> -->
      </div>
      <div class="c-inpform">
        <label for="cfrmAddr-3-1-3" class="c-label c-abs-r">층</label>
        <input id="cfrmAddr-3-1-3" type="text" name="" placeholder="입력" title="층을 입력해주세요" class="c-inp" />
        <!-- <p class="text-msg">층을 입력해주세요.</p> -->
      </div>
      <div class="c-inpform">
        <label for="cfrmAddr-3-1-4" class="c-label c-abs-r">호</label>
        <input id="cfrmAddr-3-1-4" type="text" name="" placeholder="입력" title="호를 입력해주세요" class="c-inp" />
        <!-- <p class="text-msg">호를 입력해주세요.</p> -->
      </div>
    </div>
    <div class="c-inpform-group column-address-type2">
      <div class="c-inpform">
        <label for="cfrmAddr-3-2-1" class="c-label is-blind">건물명 입력</label>
        <input id="cfrmAddr-3-2-1" type="text" name="" placeholder="건물명 입력" title="건물명을 입력해주세요" class="c-inp" />
        <!-- <p class="text-msg">건물명을 입력해주세요.</p> -->
      </div>
      <div class="c-inpform">
        <label for="cfrmAddr-3-2-2" class="c-label c-abs-r">동</label>
        <input id="cfrmAddr-3-2-2" type="text" name="" placeholder="입력" title="동을 입력해주세요" class="c-inp" />
        <!-- <p class="text-msg">동을 입력해주세요.</p> -->
      </div>
      <div class="c-inpform">
        <label for="cfrmAddr-3-2-3" class="c-label c-abs-r">층</label>
        <input id="cfrmAddr-3-2-3" type="text" name="" placeholder="입력" title="층을 입력해주세요" class="c-inp" />
        <!-- <p class="text-msg">층을 입력해주세요.</p> -->
      </div>
      <div class="c-inpform">
        <label for="cfrmAddr-3-2-4" class="c-label c-abs-r">호</label>
        <input id="cfrmAddr-3-2-4" type="text" name="" placeholder="입력" title="호를 입력해주세요" class="c-inp" />
        <!-- <p class="text-msg">호를 입력해주세요.</p> -->
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 294px">
================================================================================
input field, c-inpform, c-inpform-group 형태가 "주소" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-address', 'column-address-keyword', 'column-address-select' 추가
주소 필드 유형 추가 class="column-address-type2" 21.03.29
================================================================================
<div class="c-inpfield">
  <label class="c-label" for="cfrmInp-2-6-1">아파트명</label>
  <div class="c-inpform column-address is-clear">
    <input id="cfrmInp-2-6-1" type="text" name="" placeholder="10자 이내 입력" title="아파트명을 입력해주세요." class="c-inp" />
    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
    <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
  </div>
</div>

주소 입력 유형 추가
<div class="c-inpform-group column-address-type2">
  <label class="c-label is-blind" for="cfrmAddr-3-1">
    상세주소
    <span class="is-need"><i class="is-blind">필수항목</i></span>
  </label>
  <div class="c-selform">
    <span class="is-blind">건물명</span>
    <select id="cfrmAddr-3-1" name="" class="c-select" title="건물명 직접 선택" readonly>
      <option value="" selected>경암빌딩</option>
    </select>
    <!-- <p class="text-msg">건물명을 선택해주세요.</p> -->
  </div>
  <div class="c-inpform">
    <label for="cfrmAddr-3-1-1" class="c-label is-blind">건물명 입력</label>
    <input id="cfrmAddr-3-1-1" type="text" name="" placeholder="건물명 입력" title="건물명을 입력해주세요" class="c-inp" />
    <!-- <p class="text-msg">건물명을 입력해주세요.</p> -->
  </div>
  <div class="c-inpform">
    <label for="cfrmAddr-3-1-2" class="c-label c-abs-r">동</label>
    <input id="cfrmAddr-3-1-2" type="text" name="" placeholder="입력" title="동을 입력해주세요" class="c-inp" />
    <!-- <p class="text-msg">동을 입력해주세요.</p> -->
  </div>
  <div class="c-inpform">
    <label for="cfrmAddr-3-1-3" class="c-label c-abs-r">층</label>
    <input id="cfrmAddr-3-1-3" type="text" name="" placeholder="입력" title="층을 입력해주세요" class="c-inp" />
    <!-- <p class="text-msg">층을 입력해주세요.</p> -->
  </div>
  <div class="c-inpform">
    <label for="cfrmAddr-3-1-4" class="c-label c-abs-r">호</label>
    <input id="cfrmAddr-3-1-4" type="text" name="" placeholder="입력" title="호를 입력해주세요" class="c-inp" />
    <!-- <p class="text-msg">호를 입력해주세요.</p> -->
  </div>
</div>
      </textarea>
    </div>
    <br />
    <hr />
    <br />
    <p class="h4">Input Field(SMS 인증)</p>
    <div class="c-inpfield column-sms">
      <label class="c-label" for="cfrmSms-1-1">인증번호</label>
      <div class="c-inpform is-clear is-sus is-time">
        <input id="cfrmSms-1-1" type="text" name="" placeholder="인증번호 6자리 입력" title="인증번호 6자리 입력" class="c-inp" aria-describedby="textMsg-1-10-1" />
        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        <button class="c-btn-gray-round-1 c-btn-cert">인증하기</button>
        <!-- <p class="text-sms" tabindex="0" id="textMsg-1-10-1"><span class="is-blind">남은시간</span><em>02:59</em><span class="is-blind">초 남았습니다.</span><button class="c-btn-time">시간연장하기</button></p>
        <p class="text-msg" tabindex="0" id="textMsg-1-10-1">정상적으로 인증 완료되었습니다.</p> -->
      </div>
    </div>
    <div class="c-inpform column-sms is-clear is-time">
      <input id="cfrmSms-1-2" type="text" name="" placeholder="인증번호 6자리 입력" title="인증번호 6자리 입력" class="c-inp" aria-describedby="textMsg-1-10-2" />
      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
      <button class="c-btn-gray-round-1 c-btn-cert">인증하기</button>
      <p class="text-sms" tabindex="0" id="textMsg-1-10-2">
        <span class="is-blind">남은시간</span><em>02:59</em><span class="is-blind">초 남았습니다.</span><button class="c-btn-time">시간연장하기</button>
      </p>
      <!-- <p class="text-msg" tabindex="0" id="textMsg-1-10-2">정상적으로 인증 완료되었습니다.</p> -->
    </div>
    <div class="c-inpform column-sms is-clear is-sus">
      <input id="cfrmSms-1-2" type="text" name="" placeholder="인증번호 6자리 입력" title="인증번호 6자리 입력" class="c-inp" aria-describedby="textMsg-1-10-3" />
      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
      <button class="c-btn-gray-round-1 c-btn-cert">인증하기</button>
      <!-- <p class="text-sms" tabindex="0" id="textMsg-1-10-3"><span class="is-blind">남은시간</span><em>02:59</em><span class="is-blind">초 남았습니다.</span><button class="c-btn-time">시간연장하기</button></p> -->
      <p class="text-msg" tabindex="0" id="textMsg-1-10-3">정상적으로 인증 완료되었습니다.</p>
    </div>
    <div class="c-inpform column-sms is-clear is-err">
      <input id="cfrmSms-1-2" type="text" name="" placeholder="인증번호 6자리 입력" title="인증번호 6자리 입력" class="c-inp" aria-describedby="textMsg-1-10-4" />
      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
      <button class="c-btn-gray-round-1 c-btn-cert">인증하기</button>
      <!-- <p class="text-sms" tabindex="0" id="textMsg-1-10-4"><span class="is-blind">남은시간</span><em>02:59</em><span class="is-blind">초 남았습니다.</span><button class="c-btn-time">시간연장하기</button></p> -->
      <p class="text-msg" tabindex="0" id="textMsg-1-10-4">인증번호가 다릅니다. 인증번호 6자리를 다시 입력해주세요. (예시:000000)</p>
    </div>
    <div class="code-editor">
      <textarea style="height: 294px">
================================================================================
input field, c-inpform, c-inpform-group 형태가 "SMS 인증" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-sms' 추가
그룹된 요소에 class 'is-time' 을 추가 하면 시간연장하기 영역 보임 
그룹된 요소에 class 'is-sus' 을 추가 하면 인증 완료 메세지  
그룹된 요소에 class 'is-err' 을 추가 하면 인증 실패 메세지  
================================================================================
<div class="c-inpfield column-sms">
  <label class="c-label" for="cfrmSms-1-1">인증번호</label>
  <div class="c-inpform is-clear is-sus is-time">
    <input id="cfrmSms-1-1" type="text" name="" placeholder="인증번호 6자리 입력" title="인증번호 6자리 입력" class="c-inp" aria-describedby="textMsg-1-10-1" />
    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
    <button class="c-btn-gray-round-1 c-btn-cert">인증하기</button>
    <!-- <p class="text-sms" tabindex="0" id="textMsg-1-10-1"><span class="is-blind">남은시간</span><em>02:59</em><span class="is-blind">초 남았습니다.</span><button class="c-btn-time">시간연장하기</button></p>
    <p class="text-msg" tabindex="0" id="textMsg-1-10-1">정상적으로 인증 완료되었습니다.</p> -->
  </div>
</div>
<div class="c-inpform column-sms is-clear is-time">
  <input id="cfrmSms-1-2" type="text" name="" placeholder="인증번호 6자리 입력" title="인증번호 6자리 입력" class="c-inp" aria-describedby="textMsg-1-10-2" />
  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
  <button class="c-btn-gray-round-1 c-btn-cert">인증하기</button>
  <p class="text-sms" tabindex="0" id="textMsg-1-10-2"><span class="is-blind">남은시간</span><em>02:59</em><span class="is-blind">초 남았습니다.</span><button class="c-btn-time">시간연장하기</button></p>
  <!-- <p class="text-msg" tabindex="0" id="textMsg-1-10-2">정상적으로 인증 완료되었습니다.</p> -->
</div>
<div class="c-inpform column-sms is-clear is-sus">
  <input id="cfrmSms-1-2" type="text" name="" placeholder="인증번호 6자리 입력" title="인증번호 6자리 입력" class="c-inp" aria-describedby="textMsg-1-10-3" />
  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
  <button class="c-btn-gray-round-1 c-btn-cert">인증하기</button>
  <!-- <p class="text-sms" tabindex="0" id="textMsg-1-10-3"><span class="is-blind">남은시간</span><em>02:59</em><span class="is-blind">초 남았습니다.</span><button class="c-btn-time">시간연장하기</button></p> -->
  <p class="text-msg" tabindex="0" id="textMsg-1-10-3">정상적으로 인증 완료되었습니다.</p>
</div>
<div class="c-inpform column-sms is-clear is-err">
  <input id="cfrmSms-1-2" type="text" name="" placeholder="인증번호 6자리 입력" title="인증번호 6자리 입력" class="c-inp" aria-describedby="textMsg-1-10-4" />
  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
  <button class="c-btn-gray-round-1 c-btn-cert">인증하기</button>
  <!-- <p class="text-sms" tabindex="0" id="textMsg-1-10-4"><span class="is-blind">남은시간</span><em>02:59</em><span class="is-blind">초 남았습니다.</span><button class="c-btn-time">시간연장하기</button></p> -->
  <p class="text-msg" tabindex="0" id="textMsg-1-10-4">인증번호가 다릅니다. 인증번호 6자리를 다시 입력해주세요. (예시:000000)</p>
</div>
      </textarea>
    </div>
    <br />
    <hr />
    <br />
    <p class="h4">Input Field(검색)</p>
    <!-- 일반 input field있는 경우 -->
    <div class="c-inpform column-search is-clear">
      <input id="cfrmAddr-2-1-1" type="text" name="" placeholder="자주하는 질문 검색어 입력" title="검색어를 입력해주세요." class="c-inp" />
      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
      <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
    </div>
    <br />
    <!-- 그룹 일반 input field있는 경우 -->
    <div class="c-inpfield column-search">
      <label class="c-label" for="cfrmAddr-2-1-1">검색</label>
      <div class="c-inpform is-clear">
        <input id="cfrmAddr-2-1-1" type="text" name="" placeholder="자주하는 질문 검색어 입력" title="검색어를 입력해주세요." class="c-inp" />
        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
      </div>
    </div>
    <br />
    <!-- 그룹 일반 input field만 있는 경우 -->
    <div class="c-inpfield column-search">
      <label class="c-label is-blind" for="cfrmAddr-2-1-2">검색</label>
      <div class="c-inpform is-clear">
        <input id="cfrmAddr-2-1-1" type="text" name="" placeholder="자주하는 질문 검색어 입력" title="검색어를 입력해주세요." class="c-inp" />
        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
      </div>
      <div class="search-keyword">
        <strong>자주하는 질문</strong>
        <div class="keyword-link">
          <a href="#">분실신고</a>
          <a href="#">요금제변경</a>
          <a href="#">청구요금</a>
          <a href="#">최신폰</a>
          <a href="#">인터넷속도</a>
        </div>
      </div>
    </div>
    <br />
    <!-- 그룹 일반 select + input field있는 경우 size 100% -->
    <div class="c-inpfield column-search">
      <label class="c-label is-blind" for="cfrmAddr-2-1-3">검색</label>
      <div class="c-selform">
        <select id="cfrmAddr-2-1-3" name="" class="c-select" title="검색 조건 선택">
          <option value="" selected>직접입력</option>
          <option>naver.com</option>
        </select>
      </div>
      <div class="c-inpform is-clear">
        <input type="text" name="" placeholder="자주하는 질문 검색어 입력" title="검색어를 입력해주세요." class="c-inp" />
        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
      </div>
      <div class="search-keyword">
        <strong>자주하는 질문</strong>
        <div class="keyword-link">
          <a href="#">분실신고</a>
          <a href="#">요금제변경</a>
          <a href="#">청구요금</a>
          <a href="#">최신폰</a>
          <a href="#">인터넷속도</a>
        </div>
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 1466px">
================================================================================
input field, c-inpform, c-inpform-group 형태가 "검색 기본" 인 경우(그룹화된 가로 사이즈 조절)
그룹된 요소에 class 'column-search' 추가
================================================================================
<!-- 일반 input field있는 경우 -->
<div class="c-inpform column-search is-clear">
  <input id="cfrmAddr-2-1-1" type="text" name="" placeholder="자주하는 질문 검색어 입력" title="검색어를 입력해주세요." class="c-inp" />
  <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
  <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
</div>

<!-- 그룹 일반 input field있는 경우 -->
<div class="c-inpfield column-search">
  <label class="c-label" for="cfrmAddr-2-1-1">검색</label>
  <div class="c-inpform is-clear">
    <input id="cfrmAddr-2-1-1" type="text" name="" placeholder="자주하는 질문 검색어 입력" title="검색어를 입력해주세요." class="c-inp" />
    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
    <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
  </div>
</div>

<!-- 그룹 일반 input field만 있는 경우 -->
<div class="c-inpfield column-search">
  <label class="c-label is-blind" for="cfrmAddr-2-1-2">검색</label>
  <div class="c-inpform is-clear">
    <input id="cfrmAddr-2-1-1" type="text" name="" placeholder="자주하는 질문 검색어 입력" title="검색어를 입력해주세요." class="c-inp" />
    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
    <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
  </div>
  <div class="search-keyword">
    <strong>자주하는 질문</strong>
    <div class="keyword-link">
      <a href="#">분실신고</a>
      <a href="#">요금제변경</a>
      <a href="#">청구요금</a>
      <a href="#">최신폰</a>
      <a href="#">인터넷속도</a>
    </div>
  </div>
</div>

<!-- 그룹 일반 select + input field있는 경우 size 100% -->
<div class="c-inpfield column-search">
  <label class="c-label is-blind" for="cfrmAddr-2-1-3">검색</label>
  <div class="c-inpform-group">
    <div class="c-selform">
      <select id="cfrmAddr-2-1-3" name="" class="c-select" title="검색 조건 선택">
        <option value="" selected>직접입력</option>
        <option>naver.com</option>
      </select>
    </div>
    <div class="c-inpform is-clear">
      <input type="text" name="" placeholder="자주하는 질문 검색어 입력" title="검색어를 입력해주세요." class="c-inp" />
      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
      <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
    </div>
    <div class="search-keyword">
      <strong>자주하는 질문</strong>
      <div class="keyword-link">
        <a href="#">분실신고</a>
        <a href="#">요금제변경</a>
        <a href="#">청구요금</a>
        <a href="#">최신폰</a>
        <a href="#">인터넷속도</a>
      </div>
    </div>
  </div>
</div>
      </textarea>
    </div>
    <br />
    <hr />
    <br />
    <p class="h4">Input Field(첨부파일)</p>
    <div class="c-inpform-group column-file is-err" tabindex="0">
      <div class="inp-file-text"><span>ico-noti-line-gray-sm.jpg</span></div>
      <label class="c-label">
        <input type="file" name="" placeholder="파일첨부" title="파일첨부" class="c-inp" aria-describedby="textMsg-1-11-1" />
        <span role="button" class="c-btn-gray-round-1 c-file-find">찾아보기</span>
      </label>
      <div class="c-btngroup">
        <button class="c-btn-gray-round-1 c-btn-add">파일추가</button>
        <button class="c-btn-gray-round-1 c-btn-del">파일삭제</button>
      </div>
      <p class="text-msg" tabindex="0" id="textMsg-1-11-1">첨부된 파일이 잘못 되었습니다. 파일첨부는 jpg,gif,png 형식만 첨부 가능합니다. 다시 등록해주세요.</p>
    </div>
    <div class="code-editor">
      <textarea style="height: 294px">
================================================================================
첨부파일
================================================================================
<div class="c-inpform-group column-file is-err" tabindex="0">
  <div class="inp-file-text"><span>ico-noti-line-gray-sm.jpg</span></div>
  <label class="c-label">
    <input type="file" name="" placeholder="파일첨부" title="파일첨부" class="c-inp" aria-describedby="textMsg-1-11-1" />
    <span role="button" class="c-btn-gray-round-1 c-file-find">찾아보기</span>
  </label>
  <div class="c-btngroup">
    <button class="c-btn-gray-round-1 c-btn-add">파일추가</button>
    <button class="c-btn-gray-round-1 c-btn-del">파일삭제</button>
  </div>
  <p class="text-msg" tabindex="0" id="textMsg-1-11-1">첨부된 파일이 잘못 되었습니다. 파일첨부는 jpg,gif,png 형식만 첨부 가능합니다. 다시 등록해주세요.</p>
</div>
      </textarea>
    </div>
    <br />
    <hr />
    <br />
  </section>
</template>

<script>
export default {
  name: 'Input',
  layout: 'guide',
  data() {
    return {
      title: 'Input System',
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
