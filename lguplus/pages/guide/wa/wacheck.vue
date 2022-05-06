<template>
  <section role="contentinfo" class="uksection" aria-label="웹 접근성 체크리스트">
    <h1 class="h1">{{ title }}</h1>
    <div class="article" aria-label="웹 접근성 개요">
      <h2 class="h4">웹 접근성 개요</h2>
      <dl class="uk-dl">
        <dt>웹 접근성이란?</dt>
        <dd>
          <p>「지능정보화기본법」에 따라 장애인이나 고령자분들이 웹 사이트에서 제공하는 정보를 비장애인과 동등하게 접근하고 이용 할 수 있도록 보장하는 것으로 웹 접근성 준수는 법적의무사항 입니다.</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>준수 고려사항</dt>
        <dd>
          <p>시각 : 실명, 색각 이상,다양한 형태의 저시력을 포함한 시각 장애</p>
          <p>이동성 : 파킨슨병, 근육병, 뇌성마비, 뇌졸중과 같은 조건으로 인한 근육 속도 저하, 근육 제어 손실로 말미암아 손을 쓰기 어렵거나 쓸 수 없는 상태</p>
          <p>청각 : 영상, 음성 콘텐츠에 자막,원고, 수화등의 대체수단 부제로인한 인식이 불가능한 상태</p>
          <p>인지 : 문제 해결과 논리 능력, 집중력, 기억력에 문제가 있는 정신 지체 및 발달 장애, 학습 장애(난독증, 난산증 등)</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>웹 브라우징에 쓰이는 보조과학기술 - <small class="c-flag">웹 브라우징을 할 수 있게 하거나 도움을 주는 등을 목적으로 보조과학기술을 이용할 수 있습니다.</small></dt>
        <dd>
          <p>스크린 리더 소프트웨어</p>
          <p>화면 확대도구</p>
          <p>음성 인식</p>
          <p>키보드오버레이</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>시각장애인용 스크린리더란?</dt>
        <dd>
          <p>
            스크린리더란 시각장애인들에게 컴퓨터의 화면과 자신이 입력한 키보드 정보 그리고 마우스 좌표 등을 음성으로 알려 주어 컴퓨터를 사용할 수 있도록 도와주는 소프트웨어이다. 스크린리더 기술은
            Jaws와 같은 PC형 스크린리더와 보이스 몬, 웹톡스와 같은 웹 스크린리더 방식의 두 가지가 있다. PC형 스크린리더는 전맹 시각장애인이 주로 사용하며, 웹 스크린리더는 저시력 시각장애인과 난독증과
            같은 학습장애, 인지장애인과 노인, 다문화 가족 등의 웹 접근성을 지원하기 위해 사용된다. 최근에는 애플사의 아이폰에 적용된 보이스오버와 같은 스마트 기기에 내장된 모바일 스크린리더도 다수
            활용되고 있다.
          </p>
          <p>
            스크린리더는 외국에서 개발된 것들을 비롯하여 다양한 종류의 프로그램들이 있는데 우리나라는 1990년대에 ‘가라사대’를 시작으로 ‘소리눈’, ‘아이즈2000(eyes2000)’, ‘이브 포 윈도우(Eve for
            Windows), 실로암시각장애인복지관의 ’드림보이스‘, 엑스비전 테크놀로지의 ‘센스리더’ 등이 개발되었다.
          </p>
        </dd>
        <dt>'센스리더'란?</dt>
        <dd>
          <p>
            센스리더는 마이크로소프트의 운영체제인 윈도우와 기반 응용 프로그램을 사용할 수 있도록 도와주는 스크린리더로 디스플레이상에 표시되는 텍스트와 그래픽 정보를 음성합성 장치나 TTS 엔진을 사용해
            읽어줌으로써 시각장애인이 컴퓨터를 사용할 수 있도록 도와주는 응용 소프트웨어이다.
          </p>
          <strong>센스리더는 다음과 같은 특징을 가지고 있다.</strong>
          <p>첫째, 리뷰 기능을 가지고 있다. 리뷰 기능은 화면에 표시된 내용을 살펴볼 수 있는 기능으로 센스리더는 이 기능을 제공해 준다.</p>
          <p>
            둘째, 다양한 환경설정 기능을 가지고 있다. 사용자들은 개개인에 따라 스크린리더를 사용하는 방식에도 차이를 나타내는데 센스리더는 사용자가 자신의 개성에 맞게 프로그램의 동작 방식을 설정할 수
            있고, 모든 기능키를 컴퓨터 기종이나 개인의 취향에 따라 자유롭게 변경할 수 있는 기능을 제공해 준다.
          </p>
          <p>
            셋째, 주요 응용프로그램을 위한 별도의 인터페이스를 제공하고 있다. 센스리더는 인터넷 익스플로러, PDF 문서, MS-OFFICE, 한글 워드프로세서 등 국내에서 사용되고 있는 주요 프로그램들을 위해
            별도의 인터페이스를 지원함으로써 시각장애인이 보다 편리하게 이들 소프트웨어를 사용할 수 있는 방법을 제공해 준다.
          </p>
        </dd>
      </dl>
    </div>
    <div class="container row row-col3 d-flex justify-content-between">
      <div>
        <pre><code>
[센스리더 요소별 탐색 키]
Ctrl + F6	다음 헤딩
Ctrl + Shift + F6	이전 헤딩
Ctrl + I	다음 목록
Ctrl + K	이전 목록
Ctrl + F3	다음 테이블
Ctrl + Shift + F3	이전 테이블
Ctrl + ' (Apostrophe)	다음 링크
Ctrl + Shift + ' (Apostrophe)	이전 링크
Ctrl + ; (Semi Colon)	다음 방문한 링크
Ctrl + Shift + ; (Semi Colon)	이전 방문한 링크
Ctrl + L	링크만 따로 보기
Ctrl + F4	다음 링크가 아닌 텍스트
Ctrl + Shift + F4	이전 링크가 아닌 텍스트
Ctrl + F2	다음 폼 콘트롤 요소
Ctrl + Shift + F2	이전 폼 콘트롤 요소
Ctrl + F8(F2)	다음 편집창
Ctrl + Shift + F8(F2)	이전 편집창
Ctrl + F2	다음 버튼
Ctrl + Shift + F2	이전 버튼
Ctrl + F2	다음 체크박스
Ctrl + Shift + F2	이전 체크박스
Ctrl + F2	다음 라디오버튼
Ctrl + Shift + F2	이전 라디오버튼
Ctrl + F2	다음 콤보박스
Ctrl + Shift + F2	이전 콤보박스
Ctrl + Tab	다음 프레임
Ctrl + Shift + Tab	이전 프레임
Alt + Shift + W	프레임만 따로 보기
</code></pre>
      </div>
      <div>
        <pre><code>
[센스리더 테이블 모드 탐색 키]
Ctrl + T	테이블 모드 선택
Ctrl + U	테이블 모드 해제
Ctrl + Alt + ↑	윗 셀로 이동
Ctrl + Alt + ↓	아래 셀로 이동
Ctrl + Alt + ←	왼쪽 셀로 이동
Ctrl + Alt + →	오른쪽 셀로 이동
Ctrl + Alt + Enter	현재 위치 읽기
Ctrl + Alt + Home	현재 행 첫 셀로 이동
Ctrl + Alt + End	현재 행 마지막 셀로 이동
Ctrl + Alt + PgUp	현재 열 첫 셀로 이동
Ctrl + Alt + PgDn	현재 열 마지막 셀로 이동
</code></pre>
      </div>
      <div>
        <pre><code>
[센스리더 폼 모드 탐색 키]
Spacebar	체크박스 선택 해제
Spacebar	라디오버튼 선택 해제
Ctrl + ↑ / Ctrl + ↓	콤보박스 목록 선택
</code></pre>
      </div>
    </div>
    <hr />
    <div class="article" aria-label="웹 접근성 인증마크란?">
      <h2 class="h4">WA(Web Accessibility) 인증 마크란?</h2>
      <dl class="uk-dl">
        <dt>웹 접근성 품질마크란?</dt>
        <dd>
          <p>장애인 및 고령자가 웹 사이트 이용에 불편이 없도록 웹 접근성 표준지침을 준수한 우수 사이트에 대해 웹 접근성 수준을 인정하고 이를 상징하는 품질 마크를 부여하는 인증제도</p>
        </dd>
        <dt>배경</dt>
        <dd>
          <p>웹 접근성을 향상하기 위한 국가적인 노력이 계속되고 있으나, 국내 대부분 사이트의 웹 접근성 수준은 매우 낮음</p>
          <p>공공기관에서 조차도 웹 접근성이 선진국들에 비하여 낮아 공공기관이 제공하는 중요 정보도 접근이 어려운 실태</p>
        </dd>
        <dt>인증대상</dt>
        <dd>
          <p>인터넷을 통해 정보통신서비스를 제공하는 웹 사이트를 운영하는 정부 및 공공기관, 민간 사업장('13년까지 의무화 준수 사업장)</p>
        </dd>
        <dt>기대효과</dt>
        <dd>
          <p>접근성 준수 향상을 통해 지식정보사회의 정보접근권 제고</p>
          <p>고객 신뢰도 및 만족도 제고와 사회적 공헌</p>
          <p>국내 웹 개발 환경 개선 및 관련 기술 발전 촉진</p>
        </dd>
        <dt>인증 유효기간</dt>
        <dd>
          <p>인증의 유효기간은 1년이며 매년마다 갱신 필요</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>웹 접근성 품질인증기관</dt>
        <dd>
          <p><a href="http://www.wa.or.kr/" target="_blank">한국웹접근성인증평가원 (사단법인 한국장애인단체총연합회)</a></p>
          <p><a href="http://www.webwatch.or.kr/" target="_blank">주식회사 웹와치</a></p>
          <p><a href="http://www.kwacc.or.kr/" target="_blank">사단법인 한국시각장애인연합회 (한국웹접근성평가센터)</a></p>
        </dd>
      </dl>
    </div>
    <hr />
    <div class="article" aria-label="한국형 웹 콘텐츠 접근성 지침 2.1 가이드">
      <h2 class="h4">한국형 웹콘텐츠 접근성 지침 2.1 주요 내용 (24개 검사 항목)</h2>
      <p>한국형 웹 콘텐츠 접근성 지침 2.1은 4가지 원칙과 각 원칙을 준수하기 위한 13개 지침 및 해당 지침의 준수여부를 확인하기 위해 24개의 검사항목으로 구성되어 있습니다.</p>
      <p>※방송통신발전 기본법 제 33조 및 방송통신발전 기본법 시행령 제 30조에 의거하여 2015년 3월 31일 KWCAG 2.1 개정</p>
      <dl class="uk-dl">
        <dt>원칙 1 인식의 용이성 (Perceivable) : 모든 콘텐츠는 사용자가 인식할 수 있어야 한다.</dt>
        <dd>
          <p id="section1_1_1">1.1.1 (적절한 대체 텍스트 제공) 텍스트 아닌 콘텐츠는 그 의미나 용도를 이해할 수 있도록 대체 텍스트를 제공해야 한다.</p>
          <p id="section1_2_1">1.2.1 (자막 제공) 멀티미디어 콘텐츠에는 자막, 원고 또는 수화를 제공해야 한다.</p>
          <p id="section1_3_1">1.3.1 (색에 무관한 콘텐츠 인식) 콘텐츠는 색에 관계없이 인식될 수 있어야 한다.</p>
          <p id="section1_3_2">1.3.2 (명확한 지시사항 제공) 지시사항은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 인식될 수 있어야 한다.</p>
          <p id="section1_3_3">1.3.3 (텍스트 콘텐츠의 명도 대비) 텍스트 콘텐츠와 배경 간의 명도 대비는 4.5대 1 이상이어야 한다.</p>
          <p id="section1_3_4">1.3.4 (자동 재생 금지) 자동으로 소리가 재생되지 않아야 한다.</p>
          <p id="section1_3_5">1.3.5 (콘텐츠 간의 구분) 이웃한 콘텐츠는 구별될 수 있어야 한다.</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>원칙 2 운용의 용이성(Operable) : 사용자 인터페이스 구성요소는 조작 가능하고 내비게이션 할 수 있어야 한다.</dt>
        <dd>
          <p id="section2_1_1">2.1.1 (키보드 사용 보장) 모든 기능은 키보드만으로도 사용할 수 있어야 한다. (PC웹)</p>
          <p>2.1.1 (누르기 동작 지원) 터치(touch) 기반 모바일 기기의 모든 컨트롤은 누르기 동작으로 제어할 수 있어야 한다. (모바일웹)</p>
          <p id="section2_1_2">2.1.2 (초점 이동) 키보드에 의한 초점은 논리적으로 이동해야 하며 시각적으로 구별할 수 있어야 한다.</p>
          <p id="section2_1_3">2.1.3 (조작 가능) 사용자 입력 및 컨트롤은 조작 가능하도록 제공되어야 한다.</p>
          <p id="section2_2_1">2.2.1 (응답시간 조절) 시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 한다.</p>
          <p id="section2_2_2">2.2.2 (정지 기능 제공) 자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 한다.</p>
          <p id="section2_3_1">2.3.1 (깜빡임과 번쩍임 사용 제한) 초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 한다.</p>
          <p id="section2_4_1">2.4.1 (반복 영역 건너뛰기) 콘텐츠의 반복되는 영역은 건너뛸 수 있어야 한다.</p>
          <p id="section2_4_2">2.4.2 (제목 제공) 페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 한다.</p>
          <p id="section2_4_3">2.4.3 (적절한 링크 텍스트) 링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 한다.</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>원칙 3 이해의 용이성(Understandable) : 콘텐츠는 이해할 수 있어야 한다.</dt>
        <dd>
          <p id="section3_1_1">3.1.1 (기본 언어 표시) 주로 사용하는 언어를 명시해야 한다.</p>
          <p id="section3_2_1">3.2.1 (사용자 요구에 따른 실행) 사용자가 의도하지 않은 기능 (새 창, 초점 변화 등)은 실행되지 않아야 한다.</p>
          <p id="section3_3_1">3.3.1 (콘텐츠의 선형화) 콘텐츠는 논리적인 순서로 제공해야 한다.</p>
          <p id="section3_3_2">3.3.2 (표의 구성) 표는 이해하기 쉽게 구성해야 한다.</p>
          <p id="section3_4_1">3.4.1 (레이블 제공) 사용자 입력에는 대응하는 레이블을 제공해야 한다.</p>
          <p id="section3_4_2">3.4.2 (오류 정정) 입력 오류를 정정할 수 있는 방법을 제공해야 한다.</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>원칙 4 견고성(Robust) : 웹 콘텐츠는 미래의 기술로도 접근할 수 있도록 견고하게 만들어야 한다.</dt>
        <dd>
          <p id="section4_1_1">4.1.1 (마크업 오류 방지) 마크업 언어의 요소는 열고 닫음, 중첩 관계 및 속성 선언에 오류가 없어야 한다.</p>
          <p id="section4_2_1">4.2.1 (웹 애플리케이션 접근성 준수) 콘텐츠에 포함된 웹 애플리케이션은 접근성이 있어야 한다.</p>
        </dd>
      </dl>
    </div>
    <hr />
    <div class="article" aria-label="기획자 체크리스트">
      <h2 class="h4">기획자 체크리스트</h2>
      <figure class="uktable">
        <figcaption>기본점검</figcaption>
        <table>
          <colgroup>
            <col style="width: 50px" />
            <col style="width: 110px" />
            <col style="width: auto" />
            <col style="width: 80px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" colspan="2" rowspan="3">제목</th>
              <td class="tleft">각 페이지별로 고유의 제목을 정의하였는가? (페이지 내용상의 제목과 웹브라우저 타이틀로 제공됨)</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>
            <tr>
              <td class="tleft">웹브라우저의 제목을 꾸미기 위해 의미없는 특수문자(■, ☆, :: 등)를 사용하고 있지는 않은가?</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>
            <tr>
              <td class="tleft">각 콘텐츠 블록을 구분할 수 있는 제목을 제공하는가?</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2" rowspan="3">텍스트</th>
              <td class="tleft">의미가 있는 기호 또는 약어의 경우 그것이 의미하는 바를 적절한 단어로 정의하였는가?<br />예) ↓ : 할인, P : 포인트 적립, ? : 안내</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">
                모양, 크기, 위치, 방향, 색, 소리 만으로 정보를 전달하고 있는 콘텐츠는 없는가?<br />
                예) 빨간색 버튼을 누르시오. ( X ) 왼쪽의 내용을 참조하시오. ( X )
              </td>
              <td><a href="#section1_3_2">1-3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">
                링크로 사용된 텍스트가 주변의 맥락과 관계없이 용도나 목적을 이해할 수 있는가?<br />
                예) 이동하려면
                <a href="#" style="text-decoration: underline">여기</a>를 클릭하시오. ( X )
              </td>
              <td><a href="#section2_4_3">2-4-3</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2">링크, 버튼</th>
              <td class="tleft">링크 또는 버튼을 마우스 클릭 또는 키보드 포커스 했을 때 발생하는 점선을 없애달라고 요청하고 있지는 않은가?</td>
              <td><a href="#section2_1_2">2-1-2</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2" rowspan="3">이미지</th>
              <td class="tleft">이미지에 텍스트는 없지만 의미가 있는 경우(사진, 아이콘, 기호) 대체텍스트를 정의하였는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">구성도, 차트, 다이어그램 이미지를 대체할 수 있는 콘텐츠(요약, 표)를 제공하는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">약도 이미지에 대체텍스트 또는 이어지는 내용으로 찾아가는 방법에 대한 자세한 설명을 제공하는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2" rowspan="4">멀티미디어</th>
              <td class="tleft">정보전달을 위한 영상 및 음성 정보에 텍스트(자막, 원고) 또는 수화를 제공하는가?</td>
              <td><a href="#section1_2">1-2</a></td>
            </tr>
            <tr>
              <td class="tleft">음성이 없이 영상만 제공되는 멀티미디어 콘텐츠의 경우 해설을 제공하는가?</td>
              <td><a href="#section1_2">1-2</a></td>
            </tr>
            <tr>
              <td class="tleft">동영상, 음성이 자동으로 재생되는 것을 요청하고 있지는 않은가?</td>
              <td><a href="#section1_3_4">1-3-4</a></td>
            </tr>
            <tr>
              <td class="tleft">자동으로 재생되는 음악, 효과음의 경우 3초를 넘지 않는가?</td>
              <td><a href="#section1_3_4">1-3-4</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2">움직이는 콘텐츠</th>
              <td class="tleft">1초에 3~50회 주기로 깜박거리는 콘텐츠의 제작을 요청하고 있지는 않은가? (움직이는 GIF 이미지나 플래시 등)</td>
              <td><a href="#section2_3">2-3</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2" rowspan="2">표</th>
              <td class="tleft">내용이 있는 &lt;table&gt;에 제목을 정의하였는가? (&lt;caption&gt;으로 제공됨)</td>
              <td><a href="#section3_3_2">3-3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">내용이 있는 &lt;table&gt;에 표의 대략적인 내용을 파악할 수 있는 요약을 정의하였는가? (summary 속성으로 제공됨)</td>
              <td><a href="#section3_3_2">3-3-2</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2">마우스 오버 UX</th>
              <td class="tleft">마우스오버 등의 마우스로 동작하는 기능을 정의한 경우 키보드나 터치디바이스에서의 동작을 고려하고 있는가?</td>
              <td><a href="#section2_1">2-1</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2">자동롤링 콘텐츠</th>
              <td class="tleft">자동 롤링되는 배너 또는 내용에 정지 및 탐색할 수 있는 기능을 정의하였는가?</td>
              <td><a href="#section2_2">2-2</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2">팝업</th>
              <td class="tleft">사용자의 의도와 상관없이 자동으로 팝업을 띄우고 있지 않은가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>

            <tr>
              <th scope="row" rowspan="10">입<br />력<br />폼</th>
              <th scope="row">일반 입력폼</th>
              <td class="tleft">대응하는 레이블 텍스트가 없는 입력폼의 경우 안내할 문구를 정의하였는가? (title 속성으로 제공됨)</td>
              <td><a href="#section3_4_1">3-4-1</a></td>
            </tr>

            <tr>
              <th scope="row" rowspan="2">셀렉트박스</th>
              <td class="tleft">폼값의 전송이 필요한 경우 별도의 전송버튼을 제공하고 있는가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">목록의 정렬, 분류 목적의 셀렉트박스가 사용자의 동의(확인/전송 버튼 클릭) 없이 값을 자동으로 전송하면서 페이지를 이동시키는 기능을 사용하고 있지 않은가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>

            <tr>
              <th scope="row">검색창<br />로그인폼</th>
              <td class="tleft">페이지 로드시 검색창이나 로그인폼 등의 입력폼에 초점이 다음 칸으로 자동으로 이동되는 것을 요청하고 있지 않은가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>

            <tr>
              <th scope="row" rowspan="2">분할된 입력폼</th>
              <td class="tleft">
                분할된 입력폼(전화번호, 카드번호, 주소 등)의 경우 각각의 입력폼에 고유의 명칭을 지정하였는가?<br />
                예) [지역 번호] - [국 번호] - [가입자 번호]
              </td>
              <td><a href="#section3_4_1">3-4-1</a></td>
            </tr>
            <tr>
              <td class="tleft">입력폼의 글자수를 체크하여 다음 칸으로 초점이 자동으로 이동되는 것을 요청하고 있지 않은가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>

            <tr>
              <th scope="row">입력오류</th>
              <td class="tleft">입력 오류가 발생할 경우 오류내용을 안내하고 이를 정정할 수 있는 방법을 제공하는가?</td>
              <td><a href="#section3_4_2">3-4-2</a></td>
            </tr>
          </tbody>
        </table>
      </figure>
      <figure class="uktable">
        <figcaption>개발 후 점검</figcaption>
        <table>
          <colgroup>
            <col style="width: 50px" />
            <col style="width: 110px" />
            <col style="width: auto" />
            <col style="width: 80px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" colspan="2" rowspan="3">제목</th>
              <td class="tleft">각 페이지별로 고유의 제목을 정의하였는가? (페이지 내용상의 제목과 웹브라우저 타이틀로 제공됨)</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>
            <tr>
              <td class="tleft">웹브라우저의 제목을 꾸미기 위해 의미없는 특수문자(■, ☆, :: 등)를 사용하고 있지는 않은가?</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>
            <tr>
              <td class="tleft">각 콘텐츠 블록을 구분할 수 있는 제목을 제공하는가?</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2" rowspan="3">텍스트</th>
              <td class="tleft">의미가 있는 기호 또는 약어의 경우 그것이 의미하는 바를 적절한 단어로 정의하였는가?<br />예) ↓ : 할인, P : 포인트 적립, ? : 안내</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">
                모양, 크기, 위치, 방향, 색, 소리 만으로 정보를 전달하고 있는 콘텐츠는 없는가?<br />
                예) 빨간색 버튼을 누르시오. ( X ) 왼쪽의 내용을 참조하시오. ( X )
              </td>
              <td><a href="#section1_3_2">1-3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">
                링크로 사용된 텍스트가 주변의 맥락과 관계없이 용도나 목적을 이해할 수 있는가?<br />
                예) 이동하려면
                <a href="#" style="text-decoration: underline">여기</a>를 클릭하시오. ( X )
              </td>
              <td><a href="#section2_4_3">2-4-3</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2">링크, 버튼</th>
              <td class="tleft">링크 또는 버튼을 마우스 클릭 또는 키보드 포커스 했을 때 발생하는 점선을 없애달라고 요청하고 있지는 않은가?</td>
              <td><a href="#section2_1_2">2-1-2</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2" rowspan="3">이미지</th>
              <td class="tleft">이미지에 텍스트는 없지만 의미가 있는 경우(사진, 아이콘, 기호) 대체텍스트를 정의하였는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">구성도, 차트, 다이어그램 이미지를 대체할 수 있는 콘텐츠(요약, 표)를 제공하는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">약도 이미지에 대체텍스트 또는 이어지는 내용으로 찾아가는 방법에 대한 자세한 설명을 제공하는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2" rowspan="4">멀티미디어</th>
              <td class="tleft">정보전달을 위한 영상 및 음성 정보에 텍스트(자막, 원고) 또는 수화를 제공하는가?</td>
              <td><a href="#section1_2">1-2</a></td>
            </tr>
            <tr>
              <td class="tleft">음성이 없이 영상만 제공되는 멀티미디어 콘텐츠의 경우 해설을 제공하는가?</td>
              <td><a href="#section1_2">1-2</a></td>
            </tr>
            <tr>
              <td class="tleft">동영상, 음성이 자동으로 재생되는 것을 요청하고 있지는 않은가?</td>
              <td><a href="#section1_3_4">1-3-4</a></td>
            </tr>
            <tr>
              <td class="tleft">자동으로 재생되는 음악, 효과음의 경우 3초를 넘지 않는가?</td>
              <td><a href="#section1_3_4">1-3-4</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2">움직이는 콘텐츠</th>
              <td class="tleft">1초에 3~50회 주기로 깜박거리는 콘텐츠의 제작을 요청하고 있지는 않은가? (움직이는 GIF 이미지나 플래시 등)</td>
              <td><a href="#section2_3">2-3</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2" rowspan="2">표</th>
              <td class="tleft">내용이 있는 &lt;table&gt;에 제목을 정의하였는가? (&lt;caption&gt;으로 제공됨)</td>
              <td><a href="#section3_3_2">3-3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">내용이 있는 &lt;table&gt;에 표의 대략적인 내용을 파악할 수 있는 요약을 정의하였는가? (summary 속성으로 제공됨)</td>
              <td><a href="#section3_3_2">3-3-2</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2">마우스 오버 UX</th>
              <td class="tleft">마우스오버 등의 마우스로 동작하는 기능을 정의한 경우 키보드나 터치디바이스에서의 동작을 고려하고 있는가?</td>
              <td><a href="#section2_1">2-1</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2">자동롤링 콘텐츠</th>
              <td class="tleft">자동 롤링되는 배너 또는 내용에 정지 및 탐색할 수 있는 기능을 정의하였는가?</td>
              <td><a href="#section2_2">2-2</a></td>
            </tr>

            <tr>
              <th scope="row" colspan="2">팝업</th>
              <td class="tleft">사용자의 의도와 상관없이 자동으로 팝업을 띄우고 있지 않은가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>

            <tr>
              <th scope="row" rowspan="10">입<br />력<br />폼</th>
              <th scope="row">일반 입력폼</th>
              <td class="tleft">대응하는 레이블 텍스트가 없는 입력폼의 경우 안내할 문구를 정의하였는가? (title 속성으로 제공됨)</td>
              <td><a href="#section3_4_1">3-4-1</a></td>
            </tr>

            <tr>
              <th scope="row" rowspan="2">셀렉트박스</th>
              <td class="tleft">폼값의 전송이 필요한 경우 별도의 전송버튼을 제공하고 있는가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">목록의 정렬, 분류 목적의 셀렉트박스가 사용자의 동의(확인/전송 버튼 클릭) 없이 값을 자동으로 전송하면서 페이지를 이동시키는 기능을 사용하고 있지 않은가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>

            <tr>
              <th scope="row">검색창<br />로그인폼</th>
              <td class="tleft">페이지 로드시 검색창이나 로그인폼 등의 입력폼에 초점이 다음 칸으로 자동으로 이동되는 것을 요청하고 있지 않은가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>

            <tr>
              <th scope="row" rowspan="2">분할된 입력폼</th>
              <td class="tleft">
                분할된 입력폼(전화번호, 카드번호, 주소 등)의 경우 각각의 입력폼에 고유의 명칭을 지정하였는가?<br />
                예) [지역 번호] - [국 번호] - [가입자 번호]
              </td>
              <td><a href="#section3_4_1">3-4-1</a></td>
            </tr>
            <tr>
              <td class="tleft">입력폼의 글자수를 체크하여 다음 칸으로 초점이 자동으로 이동되는 것을 요청하고 있지 않은가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>

            <tr>
              <th scope="row">입력오류</th>
              <td class="tleft">입력 오류가 발생할 경우 오류내용을 안내하고 이를 정정할 수 있는 방법을 제공하는가?</td>
              <td><a href="#section3_4_2">3-4-2</a></td>
            </tr>
          </tbody>
        </table>
      </figure>
      <figure class="uktable">
        <figcaption>관리도구 데이터 입력</figcaption>
        <table>
          <colgroup>
            <col style="width: 150px" />
            <col style="width: auto" />
            <col style="width: 80px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">이미지 배너</th>
              <td class="tleft">관리도구로 이미지배너 삽입시 이미지의 모든 텍스트를 대체텍스트 항목에 입력하였는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <th scope="row">HTML 텍스트</th>
              <td class="tleft">관리도구에 html 코드 입력시 태그의 열고 닫음을 정확히 하여 입력하였는가?</td>
              <td><a href="#section4_1">4-1</a></td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
    <div class="article" aria-label="퍼블리셔 체크리스트">
      <h2 class="h4">퍼블리셔 체크리스트</h2>
      <figure class="uktable">
        <figcaption>기본점검</figcaption>
        <table>
          <colgroup>
            <col style="width: 150px" />
            <col style="width: auto" />
            <col style="width: 80px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" rowspan="9">인식의 용이성</th>
              <td class="tleft">의미 있는 이미지에 적절한 대체텍스트를 제공하고 있는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">의미가 있는 배경이미지를 사용한 경우 대체콘텐츠를 제공하였는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">이미지맵을 사용한경우 &lt;area&gt; 요소에 alt 값을 제공하였는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">텍스트가 없지만 의미가 있는 이미지(사진, 아이콘, 버튼)의 경우 대체텍스트를 제공하는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">장식 목적의 블릿(•)처럼 의미 없는 이미지에 alt 값을 제공하고 있지 않은가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">차트, 다이어그램 이미지를 대체할 수 있는 콘텐츠(요약, 표)를 제공하는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">약도 이미지에 찾아가는 방법을 설명하는 대체텍스트나 부연설명을 제공하는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">이미지가 없고 스타일이 적용되지 않은 상태에서도 내용을 이해하는데 문제가 없는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">약어, 숫자, 기호 등 텍스트만으로는 의미파악이 어려운 경우 이해를 도울 수 있는 title 값을 제공하는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>

            <tr>
              <th scope="row" rowspan="12">운용의 용이성</th>
              <td class="tleft">페이지의 맨 앞에 반복되는 내용을 건너뛸 수 있는 링크를 제공하고 있으며 키보드로 접근이 가능한가?</td>
              <td><a href="#section2_4_1">2-4-1</a></td>
            </tr>
            <tr>
              <td class="tleft">키보드만으로 모든 내용과 컨트롤의 이용이 가능한가?</td>
              <td><a href="#section2_1_1">2-1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">키보드 탭 이동시 초점이 사라지거나 초점을 이동할수 없는 컨트롤이 있지 않은가?</td>
              <td><a href="#section2_1_1">2-1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">마우스로 동작하는 기능에 키보드로 동작하는 기능을 함께 제공하는가?</td>
              <td><a href="#section2_1_1">2-1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">
                내부에 스크롤바가 있는 내용에 키보드로 초점을 이동할 수 있고 위,아래 방향키로 내용을 확인할 수 있는가? (tabindex="0" 속성을 지정하거나 &lt;textarea&gt; 태그를 사용)
              </td>
              <td><a href="#section2_1_1">2-1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">키보드의 초점이 논리적인 순서로 이동하는가?<br />(좌→우, 상→하, 아이디→비밀번호→로그인버튼, 탭1→내용1→탭2→내용2)</td>
              <td><a href="#section2_1_2">2-1-2</a></td>
            </tr>
            <tr>
              <td class="tleft">키보드로 레이어 열기 후 초점이 레이어 내용으로 바로 이동할 수 있고 레이어 닫기를 하면 열기 버튼을 눌렀던 자리로 초점이 되돌아 가는가?</td>
              <td><a href="#section2_1_2">2-1-2</a></td>
            </tr>
            <tr>
              <td class="tleft">링크나 버튼에 충분한 크기의 클릭 영역을 제공하는가? (최소 10×10 px)</td>
              <td><a href="#section2_1_2">2-1-2</a></td>
            </tr>
            <tr>
              <td class="tleft">자동으로 갱신되는 콘텐츠에 정지시키는 기능을 제공하는가? (필수: 마우스오버 또는 키보드 포커스가 되면 정지 | 선택: 정지버튼 제공)</td>
              <td><a href="#section2_2_2">2-2-2</a></td>
            </tr>
            <tr>
              <td class="tleft">페이지 고유의 제목을 &lt;title&gt; 로 제공 하였는가?</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>
            <tr>
              <td class="tleft">주요 내용의 제목을 &lt;h1&gt;~&lt;h6&gt;으로 마크업 하였는가?</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>
            <tr>
              <td class="tleft">내용을 불러오는 &lt;iframe&gt;에 해당 내용을 의미하는 title 값을 지정하였는가?</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>

            <tr>
              <th scope="row" rowspan="8">이해의 용이성</th>
              <td class="tleft">링크가 스크립트를 통해 새창 또는 팝업창으로 열리는 경우 title="새창으로 열림" 값을 제공하는가? (target="_blank" 를 제공하는 경우 생략 가능)</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">&lt;table&gt;에 &lt;caption&gt; 으로 제목을 제공하고 있는가? (&lt;table&gt; 앞에 명확한 제목요소가 있는 경우는 &lt;caption&gt; 생략 가능)</td>
              <td><a href="#section3_3_2">3-3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">&lt;table&gt;에 summary 속성으로 표의 전체적인 내용을 파악할 수 있는 요약을 제공하는가?</td>
              <td><a href="#section3_3_2">3-3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">가로헤더, 세로헤더가 있는 2차원 표에 &lt;th&gt;에 scope 값을 제공하는가?</td>
              <td><a href="#section3_3_2">3-3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">제목셀이 병합된 경우 scope="colgroup" 값을 제공하는가?</td>
              <td><a href="#section3_3_2">3-3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">내용셀이 병합된 경우 headers 속성으로 해당 셀의 제목들을 제공하는가?</td>
              <td><a href="#section3_3_2">3-3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">콘텐츠가 논리적인 순서로 되어있는가? (탭 기능, 더보기 버튼)</td>
              <td><a href="#section3_3_1">3-3-1</a></td>
            </tr>
            <tr>
              <td class="tleft">HTML 코드에 lang 속성이 선언되어 있는가?</td>
              <td><a href="#section3_1">3-1</a></td>
            </tr>

            <tr>
              <th scope="row" rowspan="4">견고성</th>
              <td class="tleft">HTML 문법에 오류가 없는가? (태그의 열고 닫음, 태그의 중첩, 중복 선언된 속성, 특정 태그에 넣을 수 없는 태그)</td>
              <td><a href="#section4_1">4-1</a></td>
            </tr>
            <tr>
              <td class="tleft">의미에 맞지 않는 마크업을 사용하고 있지 않은가?</td>
              <td><a href="#section4">4</a></td>
            </tr>
            <tr>
              <td class="tleft">낮은 버전의 브라우저에서도 기본적인 내용을 동일하게 제공하는가?</td>
              <td><a href="#section4">4</a></td>
            </tr>
            <tr>
              <td class="tleft">화면확대, 고대비 모드에서 내용을 정상적으로 확인이 가능한가?</td>
              <td><a href="#section4">4</a></td>
            </tr>
          </tbody>
        </table>
      </figure>

      <figure class="uktable">
        <figcaption>이벤트 페이지, 메일 HTML 코딩</figcaption>
        <table>
          <colgroup>
            <col style="width: 150px" />
            <col style="width: auto" />
            <col style="width: 80px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">웹브라우저 제목</th>
              <td class="tleft">웹브라우저의 제목으로 페이지 고유의 제목이 표시되도록 변수를 입력하였는가?</td>
              <td><a href="#section2_4-2">2-4-2</a></td>
            </tr>
            <tr>
              <th scope="row">이미지</th>
              <td class="tleft">이미지로 된 모든 내용에 대체텍스트 제공하였는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <th scope="row">링크</th>
              <td class="tleft">링크의 점선을 없애기 위해 onfocus="this.blur()" 등의 스크립트를 사용하지는 않았는가?</td>
              <td><a href="#section2_1_1">2-1-1</a></td>
            </tr>
            <tr>
              <th scope="row">초점 이동</th>
              <td class="tleft">이미지맵 링크 사용시 키보드에 의한 초점이 좌에서 우로, 위에서 아래로 순서대로 이동하는가?</td>
              <td><a href="#section2_1_2">2-1-2</a></td>
            </tr>
            <tr>
              <th scope="row">마크업 오류 방지</th>
              <td class="tleft">태그의 열고 닫음을 정확히 하여 코딩하였는가?</td>
              <td><a href="#section4_1">4-1</a></td>
            </tr>
          </tbody>
        </table>
      </figure>

      <figure class="uktable">
        <figcaption>개발 후 점검</figcaption>
        <table>
          <colgroup>
            <col style="width: 150px" />
            <col style="width: auto" />
            <col style="width: 80px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">이미지</th>
              <td class="tleft">책표지 이미지, 배너 이미지 등 관리도구로 입력되는 alt 값이 정상적으로 지정되었는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <th scope="row">레이블 텍스트가 있는 입력폼</th>
              <td class="tleft">id와 for 값의 연결이 끊기지 않았는가? 입력폼과 대응하는 레이블 텍스트를 클릭했을때 해당 입력폼에 초점이 이동하는가?</td>
              <td><a href="#section3_4_1">3-4-1</a></td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
    <div class="article" aria-label="개발자 체크리스트">
      <h2 class="h4">개발자 체크리스트</h2>
      <figure class="uktable">
        <figcaption>기본점검 및 개발 후 점검</figcaption>
        <table>
          <colgroup>
            <col style="width: 150px" />
            <col style="width: auto" />
            <col style="width: 80px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" rowspan="3">인식의 용이성</th>
              <td class="tleft">도서표지를 출력하는 경우 책 제목을 alt값으로 제공하는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">게시물에 대한 링크로 썸네일을 제공하는 경우 이미지의 alt값으로 게시물의 제목을 제공하는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">관리도구나 에디터로 삽입되는 이미지의 경우 사용자(관리자)가 alt 값을 입력할 수 있는 기능을 제공하는가?</td>
              <td><a href="#section1_1">1-1</a></td>
            </tr>

            <tr>
              <th scope="row" rowspan="4">운용의 용이성</th>
              <td class="tleft">포커스가 논리적인 순서(상→하, 좌→우, 아이디→비밀번호→로그인버튼)로 이동하는가?</td>
              <td><a href="#section2_1_2">2-1-2</a></td>
            </tr>
            <tr>
              <td class="tleft">포커스의 순서를 임의로 조작하는 tabindex 속성을 사용하고 있지 않은가?</td>
              <td><a href="#section2_1_2">2-1-2</a></td>
            </tr>
            <tr>
              <td class="tleft">링크 요소에 포커스가 갈 경우 생기는 점선 테두리를 없애기 위해 onclick="this.blur();" 를 사용하고 있지 않은가?</td>
              <td><a href="#section2_1_1">2-1-1</a></td>
            </tr>
            <tr>
              <td class="tleft">링크, 버튼 외의 요소에 onclick 이벤트를 사용하고 있지는 않은가?</td>
              <td><a href="#section2_1_1">2-1-1</a></td>
            </tr>

            <tr>
              <th scope="row" rowspan="13">이해의 용이성</th>
              <td class="tleft">링크가 스크립트를 통해 새창 또는 팝업창으로 열리는 경우 title="새창으로 열림" 값을 제공하는가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">각 페이지 고유의 제목이 브라우저 제목(&lt;title&gt;)으로 되어 있는가?</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>
            <tr>
              <td class="tleft">내용을 불러오는 &lt;iframe&gt;에 해당 내용을 의미하는 title 값을 지정하였는가?</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>
            <tr>
              <td class="tleft">내용이 없는 프로그램 용도의 &lt;iframe&gt;에 title="빈 프레임" 값을 지정하였는가?</td>
              <td><a href="#section2_4_2">2-4-2</a></td>
            </tr>
            <tr>
              <td class="tleft">onload시 검색창이나 로그인폼에 자동으로 포커스를 이동시키는 기능을 사용하고 있지 않은가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">입력요소에 대응하는 텍스트가 있는 경우 해당 텍스트가 &lt;label&gt; 로 마크업 되어있는가?</td>
              <td><a href="#section3_4_1">3-4-1</a></td>
            </tr>
            <tr>
              <td class="tleft">입력요소와 이에 대응하는 &lt;label&gt; 이 동일한 id를 사용하여 정상적으로 연결이 되어 있는가?</td>
              <td><a href="#section3_4_1">3-4-1</a></td>
            </tr>
            <tr>
              <td class="tleft">입력요소의 id 값을 변경한 경우 연결된 &lt;label&gt; 의 for 값을 같이 변경하였는가?</td>
              <td><a href="#section3_4_1">3-4-1</a></td>
            </tr>
            <tr>
              <td class="tleft">입력요소에 대응하는 텍스트가 없는 경우 title 속성으로 해당 입력요소의 기능을 안내하고 있는가?</td>
              <td><a href="#section3_4_1">3-4-1</a></td>
            </tr>
            <tr>
              <td class="tleft">입력오류가 발생한 경우 오류내용을 안내하고 이를 수정할 방법을 제공하는가?</td>
              <td><a href="#section3_4_2">3-4-2</a></td>
            </tr>
            <tr>
              <td class="tleft">입력오류가 발생한 경우 오류내용을 안내한 후 해당 입력요소로 포커스가 이동하는가?</td>
              <td><a href="#section3_4_2">3-4-2</a></td>
            </tr>
            <tr>
              <td class="tleft">사용자가 의도하지 않은 기능(초점 변화, 서식 전송, 새 창, 팝업, 레이어)이 실행된 곳은 없는가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>
            <tr>
              <td class="tleft">여러 칸으로 된 입력폼에 일정 글자수가 넘으면 포커스를 자동 이동시키는 기능을 사용하고 있지 않은가?</td>
              <td><a href="#section3_2">3-2</a></td>
            </tr>

            <tr>
              <th scope="row">견고성</th>
              <td class="tleft">HTML 문법에 오류가 없는가? (태그의 열고 닫음, 태그의 중첩, 중복 선언된 속성, 특정 태그에 넣을 수 없는 태그)</td>
              <td><a href="#section4_1">4-1</a></td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Checklist',
  layout: 'guide',
  data() {
    return {
      title: '웹 접근성 체크리스트',
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
