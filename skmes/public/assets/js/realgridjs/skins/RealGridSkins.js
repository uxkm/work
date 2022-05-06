var mercurySkin = {
    grid: {
        border:"#d1d1d1,1",
        foreground: "#151515",
        fontSize:'12px',
        fontFamily: 'Malgun Gothic',
    },
    body: {
        line: "#d1d1d1",
        borderRight: "#d1d1d1",
        borderBottom: "#d1d1d1",
        // foreground: "#151515",
        empty:{
            foreground: "#151515",
            fontSize:'14px',
            fontFamily: 'Malgun Gothic',
            lineAlignment:"center",
            textAlignment:"center",
        }
    },
    selection: {
        // background: "#FFF0F0",
        // border: "#F0F6FBCD,0px",
        // paddingTop: "0",
        // paddingRight: "0",
        // paddingBottom: "0",
        // border: "#5f1e90ff,0",
        // background: "#2f1e90ff", //배경색
    },
    header: {
        borderRight: "#d1d1d1",
        borderBottom: "#d1d1d1",
        background: "#ededed", //배경색
        selectedBackground:"#FFF0F0", //선택된 배경색
        // hoveredBackground: "linear,#ffcad0d7,#ffb7bec7,90", //마우스 오버 배경색
        hoveredBackground: "#e5e5e5", //마우스 오버 배경색
        selectedForeground: "#151515", //선택된 텍스트 색상
        fontBold:true,
        group: {
            borderRight: "#d1d1d1",
            borderBottom: "#d1d1d1",
            background: "#ededed", //배경색
            selectedBackground:"#FFF0F0", //선택된 배경색
            hoveredBackground: "#e5e5e5", //마우스 오버 배경색
            selectedForeground: "#151515", //선택된 텍스트 색상
            fontBold:true,
        }
    },
    footer: {
        // borderTop: "#dde1e4",
        borderRight: "#d1d1d1",
        borderBottom: "#d1d1d1",
        // background: "#F0F6FB", //배경색
    },
    // 좌측 번호
    indicator: {
        borderRight: "#d1d1d1",
        borderBottom: "#d1d1d1",
        background: "#fff", //배경색
        selectedBackground: "#FFF0F0", //선택된 배경색
        figureBackground: "#C00020", //도형의 배경색
        head: {

        },
        foot: {

        }
    },
    stateBar: {
        borderRight: "#dde1e4",
        borderBottom: "#d1d1d1",
        background: "#fff", //배경색
        selectedBackground: "#F0F6FB", //선택된 배경색
        foreground:"#C00020", //텍스트 색상
        head: {
            line: "#C00020,2px",
            figureBackground: "#C00020", //도형의 배경색
        },
    },
    checkBar: {
        line: "#C00020,1px", //테두리
        borderRight: "#d1d1d1",
        borderBottom: "#d1d1d1",
        background: "#fff", //배경색
        selectedBackground: "#efefef", //선택된 배경색
        figureBackground: "#C00020", //도형의 배경색
        head: {
            line: "#C00020,2px",
            figureBackground: "#C00020", //도형의 배경색
        },
    },
    rowGroup: {
        header: {
            // borderRight: "#dde1e4",
            // borderBottom: "#dde1e4",
            // background: "#F0F6FB", //배경색
            // selectedBackground:"#F0F6FB",
            // selectedForeground: "#ff252d31",
            // hoveredBackground: "#F0F6FB",
            // fontBold:true,
        },
        footer: {
            // borderRight: "#fff2d9",
            // borderBottom: "#fff2d9",
            // background: "#F0F6FB", //배경색
            // foreground: "#ff252d31",
        },
        headerBar: {
            // background: "#F0F6FB", //배경색
            // figureBackground: "#ff252d31",
        },
        footerBar: {
            // background: "#F0F6FB", //배경색
        },
        head: {
            // background: "#F0F6FB", //배경색
        },
        foot: {
            // background: "#F0F6FB", //배경색
        },
        bar: {
            // background: "#F0F6FB", //배경색
        }
    },
    fixed: {
        // line: "#fff2d9",
        // borderRight: "#dde1e4",
        // borderBottom: "#dde1e4",
        // background: "#ffffff", //배경색
        rowBar:{
            // border: "#fff2d9,1",
            // borderRight: "#ffffffff,1",
        },
        colBar:{
            // border: "#fff2d9,1",
            // borderRight: "#ffffffff,1",
        }
    },
};

var mercuryGoldSkin = {
    grid: {
        border:"#d1d1d1,1",
        foreground: "#151515",
        fontSize:'12px',
        fontFamily: 'Malgun Gothic',
        lineAlignment: "center",
        textAlignment: "center",
        contentFit: "auto",
    },
    body: {
        paddingTop: "0",
        paddingRight: "2",
        paddingBottom: "0",
        paddingLeft: "2",
        line: "#d1d1d1",
        borderRight: "#d1d1d1",
        borderBottom: "#d1d1d1",
        foreground: "#151515",
        lineAlignment: "center",
        textAlignment: "center",
        contentFit: "auto",
        figureBackground: "#C00020", //도형의 배경색
        empty:{
            foreground: "#151515",
            fontSize:'14px',
            fontFamily: 'Malgun Gothic',
            lineAlignment:"center",
            textAlignment:"center",
        },
    },
    selection: {
        line: "#d1d1d1",
        border: "#d1d1d1CD,0px",
        borderRight: "#d1d1d1CD",
        // paddingTop: "0",
        // paddingRight: "0",
        // paddingBottom: "0",
        // border: "#F0F6FBCD,0px",
        // border: "#5f1e90ff,0",
        // background: "#FFF0F0",
        // background: "#2f1e90ff", //배경색
    },
    header: {
        borderRight: "#d1d1d1",
        borderBottom: "#d1d1d1",
        background: "#ededed", //배경색
        selectedBackground:"#FFF0F0", //선택된 배경색
        // hoveredBackground: "linear,#ffcad0d7,#ffb7bec7,90", //마우스 오버 배경색
        hoveredBackground: "#e5e5e5", //마우스 오버 배경색
        selectedForeground: "#151515", //선택된 텍스트 색상
        fontBold:true,
        group: {
            borderRight: "#d1d1d1",
            borderBottom: "#d1d1d1",
            background: "#ededed", //배경색
            selectedBackground:"#FFF0F0", //선택된 배경색
            // hoveredBackground: "#e5e5e5", //마우스 오버 배경색
            selectedForeground: "#151515", //선택된 텍스트 색상
            fontBold:true,
        }
    },
    footer: {
        // borderTop: "#dde1e4",
        borderRight: "#d1d1d1",
        borderBottom: "#d1d1d1",
        // background: "#F0F6FB", //배경색
    },
    // 좌측 번호
    indicator: {
        borderRight: "#d1d1d1",
        borderBottom: "#d1d1d1",
        background: "#fff", //배경색
        selectedBackground: "#FFF0F0", //선택된 배경색
        figureBackground: "#C00020", //도형의 배경색
        head: {

        },
        foot: {

        }
    },
    stateBar: {
        borderRight: "#dde1e4",
        borderBottom: "#d1d1d1",
        background: "#fff", //배경색
        selectedBackground: "#F0F6FB", //선택된 배경색
        foreground:"#C00020", //텍스트 색상
        head: {
            line: "#C00020,2px",
            figureBackground: "#C00020", //도형의 배경색
        },
    },
    checkBar: {
        line: "#C00020,1px", //테두리
        borderRight: "#d1d1d1",
        borderBottom: "#d1d1d1",
        background: "#fff", //배경색
        selectedBackground: "#efefef", //선택된 배경색
        figureBackground: "#C00020", //도형의 배경색
        head: {
            line: "#C00020,2px",
            figureBackground: "#C00020", //도형의 배경색
        },
    },
    rowGroup: {
        header: {
            // borderRight: "#dde1e4",
            // borderBottom: "#dde1e4",
            // background: "#F0F6FB", //배경색
            // selectedBackground:"#F0F6FB",
            // selectedForeground: "#ff252d31",
            // hoveredBackground: "#F0F6FB",
            // fontBold:true,
        },
        footer: {
            // borderRight: "#fff2d9",
            // borderBottom: "#fff2d9",
            // background: "#F0F6FB", //배경색
            // foreground: "#ff252d31",
        },
        headerBar: {
            // background: "#F0F6FB", //배경색
            // figureBackground: "#ff252d31",
        },
        footerBar: {
            // background: "#F0F6FB", //배경색
        },
        head: {
            // background: "#F0F6FB", //배경색
        },
        foot: {
            // background: "#F0F6FB", //배경색
        },
        bar: {
            // background: "#F0F6FB", //배경색
        }
    },
    fixed: {
        // line: "#fff2d9",
        // borderRight: "#dde1e4",
        // borderBottom: "#dde1e4",
        // background: "#ffffff", //배경색
        rowBar:{
            // border: "#fff2d9,1",
            // borderRight: "#ffffffff,1",
        },
        colBar:{
            // border: "#fff2d9,1",
            // borderRight: "#ffffffff,1",
        }
    },
};